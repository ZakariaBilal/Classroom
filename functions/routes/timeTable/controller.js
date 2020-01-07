const { db, admin } = require("../../config/config");

//add a timeTable
async function addTimeTable(req, res) {
  try {
    var grid = [],
    D = 5, // 5 days
    P = 4; // 4 periods
    Days = [lundi, mardi, mercredi, jeudi, vendredi]
for ( var y = 0; y < D; y++ ) {
    matrix[ y ] = Days[y];
    for ( var x = 0; x < P; x++ ) {
        matrix[ y ][ x ] = " ";
    }
}

    const { matiere : [[days],[periods]]} = req.body;

    const timeTable = { [[days][periods]]: matiere };
    await db.collection("TimeTables").set(timeTable);
    return res.send("timeTable created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all timeTables
async function getTimeTables(req, res) {
  try {
    const timeTableSnapshot = await db.collection("TimeTables").get();
    const timeTables = [];
    timeTableSnapshot.forEach(doc => {
        timeTables.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return res.json(timeTables);
  } catch (err) {
    handleError(res, err);
  }
}

//delete a meeting
async function deleteTimeTable(req, res) {
  try {
    let deleteDoc = await db
      .collection("TimeTables")
      .doc(req.params.id)
      .delete();
    return res.json({ success: true, msg: "timeTable deleted" });
  } catch (err) {
    handleError(res, err);
  }
}

//update a meeting
async function updateTimeTable(req, res) {
  try {
    let timeTableFields = {};
    if (name) timeTableFields.name = req.body.name;
    let updateDoc = await db
      .collection("TimeTables")
      .doc(req.params.id)
      .set(timeTableFields);
    return res.json({ success: true, msg: "timeTable updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single meeting
async function getTimeTable(req, res) {
  try {
    const timeTableSnapshot = await db
      .collection("TimeTables")
      .doc(req.params.id)
      .get();
    let timeTable = {};
    if (!timeTableSnapshot.exists) {
      return res.staus(404).send("TimeTable doesn t exist");
    } else {
      meeting = meetingSnapshot.data();
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
  addTimeTable,
  getTimeTables,
  getTimeTable,
  updateTimeTable,
  deleteTimeTable
};
