const db = require('../config/db');

const Movie = {
		getAll(user_id, callback) {
				db.query('SELECT * FROM movie where user_id = ? order by id desc', [user_id], callback);
		},
		getById(id, callback) {
				db.query('SELECT * FROM movie WHERE id = ?', [id], callback);
		},
		create(data, callback) {
				db.query('INSERT INTO movie SET ?', [data], callback);
		},
		update(id, data, callback) {
				db.query('UPDATE movie SET ? WHERE id = ?', [data, id], callback);
		},
		delete(id, callback) {
				db.query('DELETE FROM movie WHERE id = ?', [id], callback);
		}
};

module.exports = Movie;