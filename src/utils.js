const { signUser, verifyUser } = require('./lib/jwt')

function getTokenPayload(token) {
    return verifyUser(token);
}

function getUserId(req, authToken) {
    if (req) {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
          throw new Error('No token found');
        }
        const { user_id } = getTokenPayload(token);
        return user_id;
      }
    } else if (authToken) {
      const { user_id } = getTokenPayload(authToken);
      return user_id;
    }
  
    throw new Error('Not authenticated');
  }


  module.exports = {
      getUserId
  }