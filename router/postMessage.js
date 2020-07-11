const express = require("express");

const messageHandler = require("../modules/postMessage");
const messageRouter = express.Router();

messageRouter.get("/", messageHandler.findMany);
messageRouter.get("/:id", messageHandler.findOne);
messageRouter.post("/", messageHandler.create);
messageRouter.put("/", messageHandler.update);
messageRouter.delete("/:id", messageHandler.delete);

module.exports = messageRouter;
