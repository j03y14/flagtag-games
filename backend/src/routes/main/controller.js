const { SUCCESS } = require('@constants/status');

const mainController = {
  async authCheck(req, res) {
    res.sendStatus(SUCCESS);
  },
};

module.exports = mainController;
