const functions = require("firebase-functions");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/api/users", require("./routes/users/route"))
  .use("/api/meetings", require("./routes/meeting/route"))
  .use("/api/events", require("./routes/events/route"))
  .use("api/matieres", require("./routes/matiere/route"))
  .use("/api/timetable", require("./routes/timeTable/route"))
  .get("*", (_, res) =>
    res.status(404).json({ success: false, data: "Endpoint not found" })
  );

exports.app = functions.https.onRequest(app);
