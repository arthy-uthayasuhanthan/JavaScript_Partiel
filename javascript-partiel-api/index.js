const express = require("express");
const cors = require("cors");
const moment = require("moment");

const bodyParser = require("body-parser");
const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  port : 8889,
  user     : 'root',
  password : 'root',
  database : 'liste_courses'
});

const app = express();
const port = 4000;
 

let produits = [
  {
    id: 1,
    label: "Salade",
  },
  {
    id: 2,
    label: "Cornichons",
  },
  {
    id: 3,
    label: "Pain",
  },
  {
    id: 4,
    label: "Lait",
  },
]

var corsOptions = {
 origin: ["http://localhost:3000"],
 optionsSuccessStatus: 200,
};
 
app.use(cors(corsOptions));

app.use(bodyParser.json()) 

app.get("/getProduits/:id", (req, res) => {
 
  db.query(`SELECT * FROM Produits WHERE id=${req.params.id}`, (err, results) => {
    if (err) {
     return res.sendStatus(410)
    }
    res.send(results[0])
   })
   
})

app.get("/produits", (req, res) => {
  res.send(result)
 })
 
app.listen(port, () => {
 console.log(`api listening at http://localhost:${port}`);
});