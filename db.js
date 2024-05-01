const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected to mysql");
	}
});