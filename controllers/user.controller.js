
const mainModel = require("../models/user.model");
const mainView = require("../views/user.view");

class MainController {
  handleRequest() {
    const data = mainModel.getData();
    mainView.render(data);
  }
}

module.exports = new MainController();
