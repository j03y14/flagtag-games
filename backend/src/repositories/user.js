const User = require('@models/user');
const { USER_CREATE_ERROR, USER_FIND_BY_EMAIL_ERROR } = require('@constants/status');
const createError = require('http-errors');

const userRepository = {
  create: async (payload) => {
    try {
      return await User.create(payload);
    } catch (error) {
      console.error(error);
      throw createError(USER_CREATE_ERROR, 'user creation error');
    }
  },
  findByEmail: async (userEmail, socialName) => {
    try {
      return await User.find({ email: userEmail, social: socialName });
    } catch (error) {
      console.error(error);
      throw createError(USER_FIND_BY_EMAIL_ERROR, 'user creation error');
    }
  },
};

module.exports = userRepository;
