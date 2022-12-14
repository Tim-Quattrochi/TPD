const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const verifyJWT = require('../middleware/verifyJWT')



router.use(verifyJWT)

router
  .route('/')
  .get(taskController.getAllTasks)

  //Request URL for postMan http://localhost:3001/api/v1/tasks
  .post(taskController.createTask);

router
  .route('/:id')
  //   .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;

// test endpoints using postman and the following commands:
//
// POST http://localhost:3001/api/v1/tasks
// GET http://localhost:3001/api/v1/tasks
// GET http://localhost:3001/api/v1/tasks/5f7e1b9b9c1b9c1b9c1b9c1b
// PATCH http://localhost:3001/api/v1/tasks/5f7e1b9b9c1b9c1b9c1b9c1b
// DELETE http://localhost:3001/api/v1/tasks/5f7e1b9b9c1b9c1b9c1b9c1b
