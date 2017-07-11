const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


const upload = multer({dest:'uploads/'});

// 'file' - html name attribute
app.post('/upload', upload.single('file'), (req, res) => {
	return res.json({ size: req.file.size });
});

app.listen(process.env.PORT);