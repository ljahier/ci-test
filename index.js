const express = require('express');

const app = express();

app.get('/hello/:name', (req, res) => {
    res.end(`Hello ${req.params.name}`);
})

app.listen(8080, () => console.log('app running on :8080'));