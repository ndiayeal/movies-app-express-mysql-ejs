
const con = require('../db');

const Film = {
	findAll(callback) {
		con.query("select * from movie order by id desc", callback)
	},
	find(id, callback) {
		con.query("select * from movie where id = ?", [id], callback)
		
	},
	save() {
		
	},
	update() {
		
	}, 
	delete() {
		
	}
}


module.exports = Film;