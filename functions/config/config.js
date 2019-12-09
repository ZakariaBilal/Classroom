const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require("../../iwim-classroom-firebase-adminsdk-5qhec-5d97f45523.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iwim-classroom.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
