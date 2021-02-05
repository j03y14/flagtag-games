const jwt = require('jsonwebtoken');
const userRepository = require('@repositories/user');

const authCheck = async (req, res, next) => {
  const token = req.cookies.accessToken;
  jwt.verify(token, process.env.JWT_KEY, (err) => {
    if (err) {
      res.status(401).json({ error: 'Auth Error from authChecker' });
    }
  });
  const { email, social } = jwt.decode(token);
  const userCheck = await userRepository.findByEmail(email, social);
  if (userCheck.length === 0) {
    res.status(401).json({ error: 'No mathcing user' });
    return;
  }

  next();
};

module.exports = authCheck;
