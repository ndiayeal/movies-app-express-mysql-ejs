const User = require("../models/user_model");

// Rendering the home page
module.exports.home = function (req, res) {
  // If the user is loggedin
  /*   if (req.session.loggedin) {
    req.flash("success", "Bienvenue, " + req.session.user_name + "!");

    res.render("./pages/home.ejs");
  } else {
    req.flash("error", "Veuillez vous connecter!");
    res.redirect("/signin");
  } */

  req.flash("success", "Bienvenue, " + req.session.user_name + "!");

  res.render("./pages/home.ejs");
};

// Rendering the sign-in page, if already logged in go to home page
module.exports.signinForm = function (req, res) {
  /*   if (req.isAuthenticated()) {
    return res.redirect("/home");
  } */
  res.render("./pages/auth/signin", { layout: "layout-auth" });
};

// Rendering the sign-up page, if already logged in go to home page
module.exports.signupForm = function (req, res) {
  /*   if (req.isAuthenticated()) {
    return res.redirect("/home");
  } */
  res.render("./pages/auth/signup", { copyright: "", layout: "layout-auth" });
};

module.exports.signin = function (request, response) {
  // Capture the input fields
  let username = request.body.user_name;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    User.getByUserNameAndPassword(
      [username, password],
      (error, results) => {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.user_id = results[0].id;
          request.session.first_name = results[0].first_name;
          request.session.last_name = results[0].last_name;
          request.session.email = results[0].email;
          request.session.user_name = results[0].user_name;
          // Redirect to home page
          response.redirect("/home");
        } else {
          request.flash("error", "Login ou mot de passe incorrect");
          response.redirect("/signin");
        }
        response.end();
      }
    );
  } else {
    request.flash("error", "Veuillez donner un login et un mot de passe");
    response.redirect("/signin");
  }
};

module.exports.signup = function (request, response) {
  const data = { ...request.body };
  delete data.confirm_password;

  User.create(data, (err) => {
    if (err) throw err;

    request.flash(
      "success",
      "Votre inscription a été prise en compte avec succès"
    );
    response.redirect("/signin");
  });
};

module.exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/signin");
};
