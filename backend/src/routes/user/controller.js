const createError = require('http-errors');

const { DATA_REQUIRED, SUCCESS } = require('@constants/status');
const siginInOAuth = require('@services/socialLogin');

const userController = {
  async socialLogin(req, res, next) {
    const { social } = req.params;
    const { code } = req.body;

    try {
      if (!social || !code) throw createError(DATA_REQUIRED, 'required data are not given');

      const { userInfo, accessToken } = await siginInOAuth(social, code);

      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.status(SUCCESS).json({ userInfo });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
