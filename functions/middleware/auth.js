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

//check if the current user is prof if prof it goes to next else it returns a 403 status
const checkIfHasProf = (req, res, next) => {
  const { role, uid, email } = req.user;
  if (role === "prof") {
    return next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

//check if the current user is student if student it goes to next else it returns a 403 status
const checkIfHasStudent = (req, res, next) => {
  const { role, uid, email } = req.user;
  if (role === "student") {
    return next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

//check if the current user is chef if chef it goes to next else it returns a 403 status
const checkIfHasChef = (req, res, next) => {
  const { role, uid, email } = req.user;
  if (role === "chef") {
    return next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

//check if the current user is delegue if delegue it goes to next else it returns a 403 status
const checkIfHasDelegue = (req, res, next) => {
  const { role, uid, email } = req.user;
  if (role === "delegue") {
    return next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = { checkIfAuthenticated, checkIfHasAdmin, checkIfHasProf, checkIfHasStudent, checkIfHasChef, checkIfHasDelegue };


