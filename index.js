const express = require('express');
const router = require('./route');

const app = express();
const port = 8080;

app.use(router);

app.listen(port, () => {
    console.log(`Api listen in http://localhost:${port}`);
});