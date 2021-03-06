const express = require('express');
const app = express();
const mongoConnection = require('./middleware/mongo-connection');

var cors = require('cors');
app.use(cors());

app.use(require('cookie-parser')());
app.use(express.json());

app.use('/api/v1/notes', mongoConnection, require('./routes/note'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
