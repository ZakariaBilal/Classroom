const admin = require("firebase-admin");
const functions = require("firebase-functions");
// const serviceAccount = require("../../iwim-classroom-firebase-adminsdk-5qhec-5d97f45523.json");

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "iwim-classroom",
    private_key_id: "077de34aec8257db7b9de772a5c4a92e2e726d56",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLuAGg628JQGRR\nV/sLIjfH82fXw7NkHyyyRTgY4ANdRCW6Y+B9MPMUDynZCVPZRAwjkf9ujyI4pKU1\nYb23ZPTeHvuE3YZJ5bi4uXUhNQ42TwK9PVoufMKfi9mF080M7a9s+w/jKWIilgcZ\nMYVfjGuKA22x3HYmjHYA4dW/qwXUYsEvnnniC03q2zC+sq2PU5D0pLLnKH8OGJfV\n0Kih892GG511E6sQcTxCLk9ID8WWJh5DsxtJNxnyomsTrx/wn2k4Z/p1UcNbNFAV\n/Ae4QOx6YdFmaqwbdUfrYeVID5eBR4YWXziFZXQOM1MW1Kzt3zt88dLFWvDFOdQf\nUrIbM4BZAgMBAAECggEAB/+RYs0ePCsAyqJ4FbZndxctp86Zc7rMnAg0h7d93P17\nYg91+tGp7YrwiJgBky7FL5KrHcm1XSt2XWZDwa2koTbusZyqnyqg33HP8TiTy6/m\nSoycMTs5P0nemw7shqTWBc2apf9+iJ9C0pX7klDhT6x1nq1/nwurPhAf1All2Rzg\ncuZmu6KHu6LtEbNpenUlVNTfyVYu6UyXEXmirpSb+IkNNMsIa8bKECF4j6yyKQ+O\nEhA/rq117M+O1+SAxpn7cZQrVL5DnijY2Pevvqu/vreEpUjOjngXPNtFVJKPxtZI\nfkhQTYNJbeajTholED7YAMIToQOStZUJzk5rowQG4QKBgQD9sof+Y67CgMUfc/ZG\n4IwLLCHL178ZgaI8Aw/WxQzak9jM/GXt3SzZ3bn88dhIanh0joqcdotwgi8Xj0+R\nRhrh0SfjdIZSKKzQe0yG6sPYbdKDFBU0mgQBbYrFilPw93k5MbI2tKDmc0ltCifD\ngKPTG4JgGWgB2lOkJaewYW01EQKBgQDNkVlpDydODZFxA9mgII966GLfA3nJwUaO\n0qAJzA8xVAJaW3RAy/lXnSLkwduKwkMiyQyyO/W2/itpZMAQXAbAI/26zLwNKG80\niizER8oG3I3HCoOUlFbqFfQoLAv0iH1sHmiMZkttjvfOlCva1lRH4NFquEyJTgBS\nx5OMig92yQKBgH9Osq22agESy1iQQXqpvbzxhXgcKLps8fN5ed5FfcDFxlp/Icsu\nXQ5rFKTY27bjLtUWnnoLhseLnIQPF1eIPX8qDQE3/RuHa8kmxm1Bq8uUuLmsP0Pp\nMa9hv+yHEL5wATXxOUP4enGKUsNUAEY77HnIaTE+LpIXdDd/6dk52qpxAoGACVQV\nOJ1FbVdUSEqib4/KswskoXYo6qzopMaOGKO39McZLDyGNAKNmBo7YSIi8lMKdOOm\nvdfWuK0kDy5RQOzMKZ/4faeYyQgSs9GpYmbXliQgEu45Nl7c6taAM+p7yGcBOgzP\nNb/WoGwidq9mphGf1XswRaWDY5+0iA0idvg053ECgYEAuhTvKTL5GKizwpyPgiMj\n5LGPCBNJCreh6abDaHtzqclAOCvR0p8KGTyEu9m44fmzHxQ8THamo5iopjmmrhj0\nR6QsBK9bpz8rVNBQvPoyfFOAGu72qLd4H9T/ev6X4cz+cOzj3NfA1U81ss2Kd+Z3\nOKf4w+rTZEo+qaQZwnH48FU=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-5qhec@iwim-classroom.iam.gserviceaccount.com",
    client_id: "103112258896847145589",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5qhec%40iwim-classroom.iam.gserviceaccount.com"
  }),
  databaseURL: "https://iwim-classroom.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
