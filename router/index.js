const express = require("express");
const messageRouter = require("./postMessage");
const router = new express.Router();

router.use("/api/postmessage", messageRouter);
module.exports = router;
