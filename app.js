import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to Floc contests middleware1');
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});