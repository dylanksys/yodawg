var express = require ('express');
var reewwaasrrrrr = require('../routers/reewwaasrrrrr');
var newRouter = require('../routers/newRouter');

var app = express();

app.use('/', reewwaasrrrrr);
app.use('/', newRouter);

app.listen(1337, function () {
  console.log('yodawg listening on port 1337');
};
