const express = require("express");
const path = require('path'); // utility module to work with file and directory paths
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require('method-override');
const session = require("express-session");
const db = require('./server/config/db');
const flash = require('connect-flash');

const movieController = require('./server/controllers/movie_controller');
const authMiddleware = require('./server/middlewares/users');

const app = express();

const PORT = process.env.PORT || 3000;
const copyright = "Alioune DIOP 2024";

// Configure the express application
app.set('view engine', 'ejs'); // set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // set the views directory path
app.set('layout extractStyles', true); // extract styles from layout
app.set('layout extractScripts', true); // extract scripts from layout
app.use(expressLayouts); // use express-ejs-layouts for rendering views


// Use middleware to parse request body and cookies
app.use(bodyParser.urlencoded({ extended: false }));

// Use middleware to serve static files
//dire a express de considerer le dossier 'public' comme un dossier contenant des fichiers accessibles par un poste client

app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'))

//session middleware
app.use(
  session({
    secret: "thisismysecrctekey",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false,
  })
);

app.use(flash())
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.warning = req.flash("warning");
  next();
});
// Routes



app.use(require('./server/routers/auth_router'));
app.get('/movies', authMiddleware.isLoggedIn, movieController.getAll);
app.get('/movies/create', authMiddleware.isLoggedIn, movieController.create);
app.post('/movies/create', authMiddleware.isLoggedIn, movieController.store);
app.get('/movies/edit/:id', authMiddleware.isLoggedIn, movieController.edit);
app.put('/movies/edit/:id', authMiddleware.isLoggedIn, movieController.update);
app.delete('/movies/delete/:id', authMiddleware.isLoggedIn, movieController.delete);

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
