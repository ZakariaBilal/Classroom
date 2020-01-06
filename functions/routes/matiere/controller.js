const { db, admin } = require("../../config/config");

//add a user
async function addMatiere(req, res) {
  try {
    const { libelle, prof, chi7aja } = req.body;

    const matiere = { libelle, prof, chi7aja };
    await db.collection("Matieres").set(matiere);
    return res.send("matiere created");
  } catch (err) {
    handleError(res, err);
  }
}

//get all users
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

//delete a user
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

//update a user
async function updateMatiere(req, res) {
  try {
    let matiereFields = {};
    if (name) matiereFields.name = req.body.name;
    if (email) matiereFields.email = req.body.email;
    if (tel) matiereFields.tel = req.body.email;
    let updateDoc = await db
      .collection("Matieres")
      .doc(req.params.id)
      .set(matiereFields);
    return res.json({ success: true, msg: "matiere updated" });
  } catch (err) {
    handleError(res, err);
  }
}

//get a single user
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
