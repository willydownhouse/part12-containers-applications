const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.send(todo);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.sendStatus(404);
  }

  res.send(todo);
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (!todo) {
      res.sendStatus(404);
    }

    res.sendStatus(200);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return res.sendStatus(404);
  }

  res.sendStatus(200);
});

// const singleRouter = express.Router();

// const findByIdMiddleware = async (req, res, next) => {
//   const { id } = req.params;

//   req.todo = await Todo.findById(id);

//   //if (!req.todo) return res.sendStatus(404);

//   next();
// };

// /* DELETE todo. */
// singleRouter.delete("/", async (req, res) => {
//   await req.todo.delete();
//   res.sendStatus(200);
// });

// /* GET todo. */
// singleRouter.get("/", async (req, res) => {
//   if (!req.todo) return res.sendStatus(404);

//   res.send(req.todo); // Implement this
// });

// /* PUT todo. */
// singleRouter.put("/", async (req, res) => {
//   console.log(req.todo);

//   // Implement this
// });

// router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
