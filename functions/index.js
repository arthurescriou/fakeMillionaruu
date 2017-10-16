const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('params ' + request +'\n hostname' + request.hostname);
});



exports.chat = functions.https.onRequest((request, response) => {

  response.send(request.toString());
});
