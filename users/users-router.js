const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res) => {
  console.log("token", req.decodedToken);
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          error: "User not found by this id",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    });
});

// refactored to return a users todos and all list items on each todo
router.get("/:id/todos", findUser, (req, res) => {
  Users.findUserTodos(req.params.id)
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    });
});

// returns id & body of newly created todo 
router.post("/:id/todos", (req, res) => {
  Users.addTodo(req.params.id, req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
});

// add a list item to a todo
router.post("/todos/:todoId/list", (req, res) => {
  Users.addTodoList(req.params.todoId, req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
});

router.put("/:id/todos", (req, res) => {
  const changes = req.body;
  const name = req.body.name;
  const { id } = req.params;
  Users.findById(id)
    .then((user) => {
      if (user) {
        Users.updateTodoByUserId(changes, name, id).then((updatedTodos) => {
          if (updatedTodos.length > 0) {
            res.json(updatedTodos);
          } else {
            res.status(404).json({
              message: "Could not find that todo for user",
            });
          }
        });
      } else {
        res.status(404).json({
          message: "Could not find user with that id",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Failed to update todo",
      });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
    .then((user) => {
      if (user) {
        Users.update(changes, id).then((updatedUser) => {
          res.json(updatedUser);
        });
      } else {
        res.status(404).json({
          message: "Could not find user to update with that id",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Failed to update user",
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.delete(id)
    .then((deleted) => {
      if (deleted) {
        res.json({
          message: "Successfully nuked user",
        });
      } else {
        res.status(404).json({
          message: "Could not find user with given id",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Failed to delete user",
      });
    });
});

function findUser(req, res, next) {
  const { id } = req.params;
  Users.findById(id)
    .then((user) => {
      if (user) next();
      else
        res.status(404).json({
          error: "User not found",
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
}

module.exports = router;
