const express = require('express');
const app = express();

// Exemple de route
app.get('/', (req, res) => {
    // Simulons des données de réponse
    const data = [
        { id: 1, name: 'Objet 1' },
        { id: 2, name: 'Objet 2' },
        { id: 3, name: 'Objet 3' }
    ];

    // Renvoyer les données au format JSON
    res.json(data);
});

// Définition d'autres routes et logique métier ici...

const port = 3002; // Port sur lequel le serveur écoutera les requêtes

app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});
