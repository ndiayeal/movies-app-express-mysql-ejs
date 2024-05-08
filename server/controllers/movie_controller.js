const Movie = require("../models/movie_model");
const copyright = "Alioune DIOP 2024";

const movieController = {
  getAll(req, res) {
    Movie.getAll((err, movies) => {
      if (err) throw err;
      res.render("./pages/movies/index", {
        title: "Liste des films",
        data: movies,
        copyright,
      });
    });
  },
  create(req, res) {
    res.render("./pages/movies/add", {title: 'Nouveau film', copyright });
  },
  store(req, res) {
    const data = { ...req.body };
    Movie.create(data, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
  edit(req, res) {
    const id = req.params.id;
    Movie.getById(id, (err, result) => {			
      if (err) throw err;
      res.render("./pages/movies/edit", {
        title: "Modification film",
        data: result[0],
        copyright,
      });
    });
  },
  update(req, res) {
    const id = req.params.id;
    const data = { ...req.body };
    console.log(data);
    Movie.update(id, data, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
  delete(req, res) {
    const id = req.params.id;
    Movie.delete(id, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
};

module.exports = movieController;
