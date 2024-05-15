const express = require('express');

const router = express.Router();
const copyright = "Alioune DIOP 2024";

router.get("/contact", (req, res) => {
  //console.log("url = " + req.url)
  res.render('./pages/contact.ejs', {title: 'Contact page', copyright})
})

router.get("/search", (req, res) => {
  //console.log("url = " + req.url)
  res.render('./pages/search.ejs', {title: 'Search page', copyright})
})

router.get("/upload", (req, res) => {
  //console.log("url = " + req.url)
  res.render('./pages/upload.ejs', {title: 'Upload page', copyright})
})



module.exports = router;