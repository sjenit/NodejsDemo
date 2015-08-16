var express = require("express");
var bodyParser = require("body-parser");
var app = epress();
app.use(bodyParser.urlencoded({ extended: false }));app.set('views', __dirname + '/views');
app.set('view engine','jade');
app.get('/login', function(req, res) {
	res.sendFile(__dirname + '/login.html');
});

app.post('/auth', function(req, res) {
	if (req.body.user == "jenit" && req.body.password == "jenit") {
		res.send("done");
	}
	else {
		res.send("failed. try with [jenit, jenit] :)");
	}
});
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});