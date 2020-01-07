const { db, admin } = require("../../config/config");
const uuid = require("uuid/v1");

//add a user
async function addUser(req, res) {
  try {
    const { name, email, phoneNumber, password, role } = req.body;
    if (!role) {
      let role = "student";
    }
    let uid = uuid();
    const authUser = await admin.auth().createUser({
      uid,
      displayName: name,
      email,
      password
    });
    await admin.auth().setCustomUserClaims(authUser, { role });

    const user = { name, email, phoneNumber };
    console.log(authUser);
    await db
      .collection("Users")
      .doc(uid)
      .set(user);
    return res.send("user created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all users
async function getUsers(req, res) {
  try {
    const userSnapshot = await db.collection("Users").get();
    const users = [];
    userSnapshot.forEach(doc => {
      users.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return res.json(users);
  } catch (err) {
    handleError(res, err);
  }
}

//delete a user
async function deleteUser(req, res) {
  try {
    let deleteDoc = await db
      .collection("Users")
      .doc(req.params.id)
      .delete();
    return res.json({ success: true, msg: "user deleted" });
  } catch (err) {
    handleError(res, err);
  }
}

//update a user
async function updateUser(req, res) {
  try {
    let userFields = {};
    if (name) userFields.name = req.body.name;
    if (email) userFields.email = req.body.email;
    if (tel) userFields.tel = req.body.email;
    let updateDoc = await db
      .collection("Users")
      .doc(req.params.id)
      .set(userFields);
    return res.json({ success: true, msg: "user updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single user
async function getUser(req, res) {
  try {
    const userSnapshot = await db
      .collection("Users")
      .doc(req.params.id)
      .get();
    let user = {};
    if (!userSnapshot.exists) {
      return res.staus(404).send("User doesn t exist");
    } else {
      user = userSnapshot.data();
      return res.json(user);
    }
  } catch (err) {
    handleError(res, err);
  }
}

//handling front end server errors
function handleError(res, err) {
  console.error(err);
  return res.status(500).send("server error");
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser
};
