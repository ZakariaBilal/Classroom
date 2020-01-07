const { db, admin } = require("../../config/config");

//add a matiere
async function addMatiere(req, res) {
  try {
    const { name, mod, prof } = req.body;

    const matiere = { name, mod, prof };
    await db.collection("Matieres").set(matiere);
    return res.send("matiere created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all 
async function getMatieres(req, res) {
  try {
    const matiereSnapshot = await db.collection("Matieres").get();
    const matieres = [];
    matiereSnapshot.forEach(doc => {
      matieres.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return res.json(matieres);
  } catch (err) {
    handleError(res, err);
  }
}

//delete a matiere
async function deleteMatiere(req, res) {
  try {
    let deleteDoc = await db
      .collection("Matieres")
      .doc(req.params.id)
      .delete();
    return res.json({ success: true, msg: "matiere deleted" });
  } catch (err) {
    handleError(res, err);
  }
}

//update a matiere
async function updateMatiere(req, res) {
  try {
    let matiereFields = {};
    if (name) matiereFields.name = req.body.name;
    if (mod) matiereFields.mod = req.body.mod;
    if (prof) matiereFields.prof = req.body.prof;
    let updateDoc = await db
      .collection("Matieres")
      .doc(req.params.id)
      .set(matiereFields);
    return res.json({ success: true, msg: "matiere updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single matiere
async function getMatiere(req, res) {
  try {
    const matiereSnapshot = await db
      .collection("Matieres")
      .doc(req.params.id)
      .get();
    let matiere = {};
    if (!matiereSnapshot.exists) {
      return res.staus(404).send("Matiere doesn t exist");
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
  addMatiere,
  getMatieres,
  getMatiere,
  updateMatiere,
  deleteMatiere
};
