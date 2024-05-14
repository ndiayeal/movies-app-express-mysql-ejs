const db = require('../config/db');

const User = {
		getAll(callback) {
				db.query('SELECT * FROM user order by id desc', callback);
		},
		getById(id, callback) {
				db.query('SELECT * FROM user WHERE id = ?', [id], callback);
		},
		getByUserNameAndPassword([userName, password], callback) {
				db.query('SELECT * FROM user WHERE user_name = ? and password = ?', [userName, password], callback);
		},
		create(data, callback) {
				db.query('INSERT INTO user SET ?', [data], callback);
		},
		update(id, data, callback) {
				db.query('UPDATE user SET ? WHERE id = ?', [data, id], callback);
		},
		delete(id, callback) {
				db.query('DELETE FROM user WHERE id = ?', [id], callback);
		}
};

module.exports = User;