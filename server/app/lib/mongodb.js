const mongoose = require('mongoose');
// Constants
const { MONGO_USER, MONGO_PASS, MONGO_NAME, MONGO_HOST } = require('../config');

const USER = encodeURI(MONGO_USER);
const PASS = encodeURI(MONGO_PASS);

const MONGODB_URI = `mongodb+srv://${USER}:${PASS}@${MONGO_HOST}/${MONGO_NAME}?retryWrites=true&w=majority`;

const init = () => {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, // ?
    useUnifiedTopology: true, // ?
    useCreateIndex: true, // ?
    useFindAndModify: false // ?
  });
};

const db = mongoose.connection;
db.on('connected', () => {
  console.log(' [+] Connected succesfully with mongo.');
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = { init };
