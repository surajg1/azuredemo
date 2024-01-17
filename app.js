const express = require('express');
const multer = require('multer');
const { uploadController } = require('./uploadController');

const app = express();


const storage = multer.memoryStorage();
const uploadStorage = multer({ storage: storage })

app.get('', (req, res, next) => {
    res.json({ mag: "suraj server is started!" })
});

app.post("/uploadBlob", uploadStorage.single('avatar'), uploadController);

app.listen(8080, () => {
    console.log('Server is running on 3000!');
});