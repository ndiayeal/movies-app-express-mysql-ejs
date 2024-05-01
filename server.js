const express = require("express");
const app = express();

const PORT = 3000;
const copyright = "Alioune DIOP 2024";

//dire a express de considerer le dossier 'public' comme un dossier contenant des fichiers accessibles par un poste client
app.use("/public", express.static("public"));

//pour dire que les vues seront dans le dossiers ./views
app.set("views", "./views");



app.get("/", (req, res) => {
  const title = "Isep TV Show";
  const films = [
    {
      ID: 1,
      Title: "One piece",
			Year: '2003',
      Author: "Alioune DIOP",
    },
    {
      ID: 2,
      Title: "Bété Bété",
			Year: '2024',
      Author: "Eventprod",
    },
    {
      ID: 3,
      Title: "Wakanda",
			Year: '2018',
      Author: "darkness",
    },
  ];
  const data = { 
		title: title, 
		nom: "Moussa LO", 
		copyright: copyright,
		films: films
	};

  res.render("accueil.ejs", data);
});

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
