const myLogger = function (req, res, next) {
  console.log("url = " + req.url)
  next();
}


module.exports = myLogger;