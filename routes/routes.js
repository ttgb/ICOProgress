if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./progress');
}

var appRouter = function(app) {
	app.get("/", function (req,res) {
		res.send("ICO progress api");
	});

	app.get("/progress", function (req,res) {
		var json = "{\"id\":1,\"jsonrpc\":\"2.0\",\"result\":\"" + localStorage.getItem('progress') + "\"}";
		res.send(json);
	})
}

module.exports = appRouter;