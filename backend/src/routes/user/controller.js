const createError = require('http-errors');

const { DATA_REQUIRED } = require('@constants/status');
const socialLogin = require('@services/socialLogin');

const userController = {
  socialLogin(req, res, next) {
    const { social } = req.params;
    const { code } = req.body;

    try {
      if (!social || !code) throw createError(DATA_REQUIRED, 'required data are not given');

      socialLogin[social](code);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
