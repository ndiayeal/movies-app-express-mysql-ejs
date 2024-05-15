const express = require('express');
const con = require('../db');
const filmController = require('../controllers/filmController')

const router = express.Router();

const copyright = "Alioune DIOP 2024";

//app.use(myLogger);

router.get("/", filmController.home);
router.get("/films", filmController.afficheFilms);


router.get('/films/ajout-form', (req, res, next) => {
  res.render('./pages/films/ajout.ejs', {
    title: 'Formulaire d\'ajout film',
    copyright
  })
});

router.post('/films/ajout', (req, res) => {
  const data = {
    title: req.body.titre,
    description: req.body.description,
    year: req.body.annee,
    author: req.body.auteur,
    is_serie: req.body.categorie,
    genre: req.body.genre,
  }
  
  const sql = "insert into movie set ?";
  con.query(sql, data, (err, result) => {
    if (err) throw err;
    
    console.log("Film avec id => " + result.insertId + " ajouté avec succès");
    
    res.redirect("/");
  });
})

router.get('/films/modif-form/:id', (req, res)=> {
  
  const id = req.params.id;
  console.log("id a modifier => " + id);
  
  //const sql = "select * from movie where id = " + id;
  const sql = "select * from movie where id = ? ";
  con.query(sql, id, (err, result) => {
    res.render('./pages/films/modif.ejs', {
      title: "Formulaire de modification de film",
      copyright,
      data: result[0]
    });
  })
  
  
})

router.put("/films/modif/:id", (req, res) => {
  const id = req.params.id;
  const data = {
    title: req.body.titre,
    description: req.body.description,
    year: req.body.annee,
    author: req.body.auteur,
    is_serie: req.body.categorie,
    genre: req.body.genre,
  } 
  const sql = "update movie set ? where id = ?";
  con.query(sql, [data, id], (err, result) => {
    if (err) throw err;
    
    res.redirect("/");
  });
});


module.exports = router;