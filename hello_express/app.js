var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.get('/', function(req, res) {
  res.render('hello', {'name': 'Swig'});
});

app.get('*', function(req, res) {
  res.status(404).send("Page not found");
});

app.listen(3000);
console.log("Server is running on port 3000...");