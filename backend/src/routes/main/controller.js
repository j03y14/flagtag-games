const { SUCCESS } = require('@constants/status');

const mainController = {
  authCheck(req, res) {
    res.sendStatus(SUCCESS);
  },
};

module.exports = mainController;
