import express = require("express");
import http = require('http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.end('Hello World 3');
});

app.use(router);

http.createServer(app).listen(8080, () => {
    console.log('Listening on 8080');
});
