const { db, admin } = require("../../config/config");

//add a meeting
async function addMeeting(req, res) {
  try {
    const { prof, students, place, time } = req.body;

    const meeting = { prof, students, place, time };
    await db.collection("Metings").set(meting);
    return res.send("meeting created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all meetings
async function getMeetings(req, res) {
  try {
    const meetingSnapshot = await db.collection("Meetings").get();
    const meetings = [];
    meetingSnapshot.forEach(doc => {
      meetings.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return res.json(meetings);
  } catch (err) {
    handleError(res, err);
  }
}

//delete a meeting
async function deleteMeeting(req, res) {
  try {
    let deleteDoc = await db
      .collection("Meetings")
      .doc(req.params.id)
      .delete();
    return res.json({ success: true, msg: "meeting deleted" });
  } catch (err) {
    handleError(res, err);
  }
}

//update a meeting
async function updateMeeting(req, res) {
  try {
    let meetingFields = {};
    if (libelle) meetingFields.name = req.body.libelle;
    if (prof) meetingFields.prof = req.body.prof;
    if (mod) meetingFields.mod = req.body.mod;
    let updateDoc = await db
      .collection("Meetings")
      .doc(req.params.id)
      .set(meetingFields);
    return res.json({ success: true, msg: "meeting updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single meeting
async function getMeeting(req, res) {
  try {
    const meetingSnapshot = await db
      .collection("Meetings")
      .doc(req.params.id)
      .get();
    let meeting = {};
    if (!meetingSnapshot.exists) {
      return res.staus(404).send("Meeting doesn t exist");
    } else {
      meeting = meetingSnapshot.data();
      return res.json(meeting);
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
  addMeeting,
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting
};
