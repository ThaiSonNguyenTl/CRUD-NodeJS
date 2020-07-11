const messageModel = require("./model");

const handlers = {
  async findMany(req, res, next) {
    try {
      let items = await messageModel.find({});
      res.json(items);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id;
      let item = await messageModel.findById(id);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body;
      let item = await messageModel.create(data);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      let data = req.body;
      let id = req.body._id;
      if (!id) {
        throw new Error("Update false beacause missing id");
      }
      let item = await messageModel.findByIdAndUpdate(id, data, { new: true });
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id;
      let item = await messageModel.findByIdAndDelete(id);
      res.json(item);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = handlers;
