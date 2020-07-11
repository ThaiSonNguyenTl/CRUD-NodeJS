const schema = require("./schema");
const mongoose = require("mongoose");
const messageSchema = require("./schema");
const COLLECTION_NAME = "postMessage";
const MODEL_NAME = "postMessageModel";

const messageModel = mongoose.model(MODEL_NAME, schema, COLLECTION_NAME);

module.exports = messageModel;
