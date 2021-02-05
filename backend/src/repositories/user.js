const User = require('@models/user');
const { USER_CREATE_ERROR, USER_FIND_BY_EMAIL_ERROR } = require('@constants/status');
const createError = require('http-errors');

const userRepository = {
  create: async (payload) => {
    try {
      const createdUser = await User.create(payload);
      return createdUser;
    } catch (error) {
      console.error(error);
      throw createError(USER_CREATE_ERROR, 'user creation error');
    }
  },
  findByEmail: async (userEmail) => {
    try {
      return await User.find({ email: userEmail });
    } catch (error) {
      console.error(error);
      throw createError(USER_FIND_BY_EMAIL_ERROR, 'user creation error');
    }
  },
};

module.exports = userRepository;
