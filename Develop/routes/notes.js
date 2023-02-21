const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');





router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.post('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



module.exports = notes;