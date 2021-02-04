const User = require('@models/user');
const userRepository = {
  create: async (payload) => {
      const createdUser = await User.create(payload);
  },
  findByEmail: async (userEmail) => {
      return await User.find({ email: userEmail });
  },
};
module.exports = userRepository;
