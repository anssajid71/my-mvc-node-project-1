
const mainModel = require("../models/user.model");
const mainView = require("../views/user.view");

const userService = require("../services/user.service");
const userHelper = require("../helpers/user.helper");

class UserController {
  getUser(req, res) {
    const userId = req.params.id;
    const user = userService.getUser(userId);
    const username = userHelper.generateUsername(user.firstName, user.lastName);
    res.send(`User: ${username}`);
  }
}

module.exports = new UserController();


class MainController {
  handleRequest() {
    const data = mainModel.getData();
    mainView.render(data);
  }
}

module.exports = new MainController();
