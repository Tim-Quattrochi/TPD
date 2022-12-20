const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.use(authController.protect);

router
    .route("/")
    .get(messageController.getAllMessages)
    .post(messageController.createMessage);

router
    .route("/:id/messages")

    .get(messageController.getMessage)
    .patch(messageController.updateMessage)
    .delete(messageController.deleteMessage);

module.exports = router;


// test endpoints using postman and the following commands:

// POST http://localhost:3001/api/v1/messages
// GET http://localhost:3001/api/v1/messages
// GET http://localhost:3001/api/v1/messages/5f7e1b9b9c1b9c1b9c1b9c1b
// PATCH http://localhost:3001/api/v1/messages/5f7e1b9b9c1b9c1b9c1b9c1b
// DELETE http://localhost:3001/api/v1/messages/5f7e1b9b9c1b9c1b9c1b9c1b
