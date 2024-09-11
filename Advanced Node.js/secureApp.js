const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, Secure World!');
});

app.listen(3000, () => {
    console.log('Secure app running on port 3000');
});
