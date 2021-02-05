const jwt = require('jsonwebtoken');

const makeToken = (jwtInfo) => {
  const jwtKey = process.env.JWT_KEY || '';
  const token = jwt.sign(jwtInfo, jwtKey);

  return token;
};

module.exports = makeToken;
