const router = require('express').Router();
const Users = require('./users-model.js');

router.get( "/",( req, res ) => {
  console.log('token', req.decodedToken);
  Users.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    console.log(error);
    res.send(error);
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.findById(id)
  .then(user => {
    if(user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        error: 'User not found by this id'
      });
    };
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      error: error.message
    });
  });
});

router.get('/:id/todos', findUser, (req, res) => {
  Users.findUserTodos(req.params.id)
  .then(todos => {
    res.status(200).json(todos)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      error: error.message
    });
  });
});

router.post('/:id/todos', (req, res) => {
  Users.addTodo(req.params.id, req.body.todo_id)
  .then(response => {
    res.status(201).json(response);
  })
  .catch(error => {
    res.status(500).json({
      error: error.message
    });
  });
});

router.put('/id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
  .then(user => {
    if(user){
      Users.update(changes, id)
      .then(updatedUser => {
        res.json(updatedUser);
      });
    } else {
      res.status(404).json({
        message: 'Could not find user to update with that id'
      });
    };
  })
  .catch(error => {
    res.status(500).json({
      message: 'Failed to update user'
    });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.delete(id)
  .then(deleted => {
    if(deleted){
      res.json({
        message: 'Successfully nuked user'
      });
    } else {
      res.status(404).json({
        message: 'Could not find user with given id'
      });
    };
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Failed to delete user'
    });
  });
});

function findUser(req, res, next){
  const { id } = req.params;
  Users.findById(id)
  .then(user => {
    if(user) next();
    else res.status(404).json({
      error: 'User not found'
    });
  })
  .catch(error => {
    res.status(500).json({
      error: error.message
    });
  });
};



module.exports = router