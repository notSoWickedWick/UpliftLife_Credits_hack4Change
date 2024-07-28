const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
    const userData = req.body;
    console.log('User Data:', userData);
    
    // Here you can add code to save the data to a database
    
    res.json({ message: 'Data received successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
