const express = require("express");
const path = require('path'); // utility module to work with file and directory paths
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require('method-override');

const movieController = require('./server/controllers/movie_controller');

const app = express();

const PORT = process.env.PORT || 3000;
const copyright = "Alioune DIOP 2024";

// Configure the express application
app.set('view engine', 'ejs'); // set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // set the views directory path
app.set('layout extractStyles', true); // extract styles from layout
app.set('layout extractScripts', true); // extract scripts from layout
app.use(expressLayouts); // use express-ejs-layouts for rendering views

//dire a express de considerer le dossier 'public' comme un dossier contenant des fichiers accessibles par un poste client
app.use("/public", express.static("public"));

// Use middleware to parse request body and cookies
app.use(bodyParser.urlencoded({ extended: false }));

// Use middleware to serve static files
app.use(express.static('public'))

app.use(methodOverride('_method'))

// Routes
app.get('/', movieController.getAll);
app.use('/', require('./server/routers/auth_router'));
app.get('/create', movieController.create);
app.post('/create', movieController.store);
app.get('/edit/:id', movieController.edit);
app.put('/edit/:id', movieController.update);
app.delete('/delete/:id', movieController.delete);

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
