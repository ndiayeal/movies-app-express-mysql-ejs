const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const filmRouter = require('./routes/filmRoute');
const utilRouter = require('./routes/utilRoute');
const PORT = 3000;
const copyright = "Alioune DIOP 2024";

//dire a express de considerer le dossier 'public' comme un dossier contenant des fichiers accessibles par un poste client
app.use("/public", express.static("public"));

//pour dire que les vues seront dans le dossiers ./views
app.set("views", "./views");
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))


app.use('/', filmRouter);
app.use('/', utilRouter);



app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
