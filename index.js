var express = require('express');
const app = new express();

app.use('/mobile', express.static('./dist'));

app.listen(3838);