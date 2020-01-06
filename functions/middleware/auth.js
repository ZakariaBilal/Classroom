const { admin } = require("../config/config");

//get the authentification token
const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

//check if the token is available if the token is right it goes to next else it return s a 403 status
const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = (admin.auth.user = await admin
        .auth()
        .verifyIdToken(authToken));
      req.user = {
        uid: userInfor.uid,
        role: userInfo.role,
        email: userInfo.email
      };
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

//check if the current user is admin if admin it goes to next else it returns a 403 status
const checkIfHasAdmin = (req, res, next) => {
  const { role, uid, email } = req.user;
  if (role === "admin") {
    return next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = { checkIfAuthenticated, checkIfHasAdmin };
