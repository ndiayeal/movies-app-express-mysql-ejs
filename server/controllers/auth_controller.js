
// Rendering the home page
module.exports.home = function (req, res) {
	return res.render('home');
};

// Rendering the sign-in page, if already logged in go to home page
module.exports.signin = function (req, res) {
/* 	if (req.isAuthenticated()) {
			return res.redirect('/');
	} */
	return res.render('./pages/auth/signin', { copyright: 'process' });
};

// Rendering the sign-up page, if already logged in go to home page
module.exports.signup = function (req, res) {
	if (req.isAuthenticated()) {
			return res.redirect('/');
	}
	return res.render('./pages/auth/signup', { site_key: process.env.RECAPTCHA_SITE_KEY });
};
