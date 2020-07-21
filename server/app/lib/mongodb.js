const mongoose = require('mongoose');
const { config } = require('../config');

const USER = encodeURI(config.mongoDbUser);
const PASS = encodeURI(config.mongoDbPass);
const DB_NAME = config.mongoDbName;
const DB_HOST = config.mongoDbHost;
const DB_PORT = config.mongoDbPort;

console.log('config: ', config);
const MONGODB_URI = `mongodb+srv://${USER}:${PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log('MONGODB_URI: ', MONGODB_URI);
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true, // ?
  useUnifiedTopology: true, // ?
  useCreateIndex: true, // ?
  useFindAndModify: false // ?
});

const db = mongoose.connection;
db.on('connected', () => {
  console.log('[+] Connected succesfully with mongo.');
});
db.on('error', console.error.bind(console, 'connection error:'));