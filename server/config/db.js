const mysql = require("mysql");

// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'movie_app_db',
	charset: 'utf8mb4',
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("Connected to movie_app_db database successfully");
	}
});

module.exports = con;
