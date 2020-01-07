const { db, admin } = require("../../config/config");

//add an event
async function addEvent(req, res) {
  try {
    const { libelle, desc, place, time, guests } = req.body;

    const event = { libelle, desc, place, time, guests };
    await db.collection("Events").set(event);
    return res.send("event created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all 
async function getEvents(req, res) {
  try {
    const eventSnapshot = await db.collection("Events").get();
    const events = [];
    eventSnapshot.forEach(doc => {
        events.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return res.json(events);
  } catch (err) {
    handleError(res, err);
  }
}

//delete a event
async function deleteEvent(req, res) {
  try {
    let deleteDoc = await db
      .collection("Events")
      .doc(req.params.id)
      .delete();
    return res.json({ success: true, msg: "event deleted" });
  } catch (err) {
    handleError(res, err);
  }
}

//update a event
async function updateEvent(req, res) {
  try {
    let eventFields = {};
    if (libelle) eventFields.libelle = req.body.libelle;
    if (desc) eventFields.desc = req.body.desc;
    if (place) eventFields.place = req.body.place;
    if (time) eventFields.time = req.body.time;
    if (guests) eventFields.guests = req.body.guests;
    let updateDoc = await db
      .collection("Events")
      .doc(req.params.id)
      .set(eventFields);
    return res.json({ success: true, msg: "event updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single event
async function getEvent(req, res) {
  try {
    const eventSnapshot = await db
      .collection("Events")
      .doc(req.params.id)
      .get();
    let event = {};
    if (!eventSnapshot.exists) {
      return res.staus(404).send("MEvent doesn t exist");
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
  addEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent
};
