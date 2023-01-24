const database = require("./database");

const getUsers = (req, res) => {
  let sql = "SELECT * FROM users";
  const sqlValues = [];

  if (req.query.language != null) {
    sql += " WHERE language = ?";
    sqlValues.push(req.query.language);

    if (req.query.city != null) {
      sql += " AND city = ?";
      sqlValues.push(req.query.city);
    }
  } else if (req.query.city != null) {
    sql += " WHERE city = ?";
    sqlValues.push(req.query.city);
  }

  database
    .query(sql, sqlValues)
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postUser = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;

  database
    .query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

const updateUser = (req, res) => {
  // Récupère l'id du utilisateur à mettre à jour depuis les paramètres de la requête
  const id = parseInt(req.params.id);
  // Destructure les propriétés du utilisateur depuis le corps de la requête
  const { firstname, lastname, email, city, language } = req.body;

  // Effectue une mise à jour du utilisateur dans la base de données
  database
    .query(
      "update users set firstname = ?, lastname = ?, email = ?, city = ?, language = ? where id = ?",
      [firstname, lastname, email, city, language, id]
    )
    // En cas de succès, envoie un statut 204 (Pas de contenu) au client
    .then(([result]) => {
      if (result.affectedRows === 0) {
        // Si aucune ligne n'a été affectée, envoie un statut 404 (Non trouvé) au client
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    // En cas d'erreur, affiche l'erreur dans la console et envoie un statut 500 (Erreur interne du serveur) au client
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("delete from users where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the user");
    });
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
};
