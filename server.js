const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('BoCloud coming soon!');
})

app.listen(PORT);
console.log(`Running on 0.0.0.0:${PORT}`);
