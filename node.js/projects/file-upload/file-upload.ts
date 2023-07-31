/*** Implement a service that allows users to upload files, and optionally resize images or process text files. ***/

import express from 'express';
import multer from 'multer';

const app = express();

// Set up multer, to store files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    if(req.file) {
        res.json({ message: 'File uploaded successfully' });
    } else {
        res.status(400).json({ message: 'Error uploading file' });
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
