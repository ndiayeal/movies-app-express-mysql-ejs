module.exports = {
  validateSignup: (req, res, next) => {
    // username min length 3
    if (!req.body.user_name || req.body.user_name.length < 3) {
      return res.status(400).send({
        message: "Please enter a username with min. 3 chars",
      });
    }
    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        message: "Please enter a password with min. 6 chars",
      });
    }
    // password (repeat) must match
    if (
      !req.body.confirm_password ||
      req.body.password != req.body.confirm_password
    ) {
      return res.status(400).send({
        message: "Both passwords must match",
      });
    }
    next();
  },
  isLoggedIn: (req, res, next) => {
    const isLoggedIn = req.session.loggedin;
    if (!isLoggedIn) {
			req.flash("error", "Veuillez vous connecter!");
			res.redirect("/signin");
			 
    } else {
      next();
    }
  },
};
