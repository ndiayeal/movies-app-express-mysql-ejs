const express = require("express");
const app = express();
const con = require('./db');
const bodyParser = require('body-parser');

const PORT = 3000;
const copyright = "Alioune DIOP 2024";

//dire a express de considerer le dossier 'public' comme un dossier contenant des fichiers accessibles par un poste client
app.use("/public", express.static("public"));

//pour dire que les vues seront dans le dossiers ./views
app.set("views", "./views");
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", (req, res) => {
  const sql = "select * from movie";
  con.query(sql, (err,rows) => {
    if (err){
      throw err;
    }
    
    res.render("accueil.ejs", {
      title: 'La liste des films depuis server.js',
      data: rows,
      copyright} );
})  
});

app.get('/ajout', (req, res, next) => {
  res.render('./pages/films/ajout.ejs', {
    title: 'Formulaire d\'ajout film',
    copyright
  })
});

app.post('/ajout', (req, res) => {
  const data = {
    title: req.body.titre,
    description: req.body.description,
    year: req.body.annee,
    author: req.body.auteur,
    is_serie: req.body.categorie,
    genre: req.body.genre,
  }
})

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
