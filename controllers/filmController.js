const con = require('../db');
const Film = require('../models/film_model');

const copyright = "Alioune DIOP 2024";




const filmController = {
	home(req, res) {
		res.redirect('/films')
	},
	
	afficheFilms(req, res)  {
		Film.findAll((err,rows) => {
			if (err){
				throw err;
			}
			
			res.render("accueil.ejs", {
				title: 'La liste des films depuis server.js',
				data: rows,
				copyright} );
	})}
}


module.exports = filmController