const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Fake database (you can replace it later with MySQL)
let commandes = [];

// Route to receive a new order
app.post("/commande", (req, res) => {
  const { nom, prenom, phone, address } = req.body;

  if (!nom || !prenom || !phone || !address) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  const newCommande = {
    id: commandes.length + 1,
    nom,
    prenom,
    phone,
    address,
    date: new Date().toLocaleString(),
  };

  commandes.push(newCommande);
  res.status(201).json({ message: "Commande reçue ✅", commande: newCommande });
});

// Route to get all orders
app.get("/commandes", (req, res) => {
  res.json(commandes);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
