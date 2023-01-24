# Quête 02 : SELECT

## Création d'un fichier userHandlers.js

Création des fonctions **getUsers** et **getUsersId** pour requêter la table users

## Création des routes dans app.js

J'etais sur la route toute la sainte journée ...

```
const userHandlers = require("./userHandlers");
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);
```

## Ajout du .env dans gitignore

Masquer les parametres d'accés à la base.

## Critères de validation

- [x] Le serveur fonctionne :tada:
- [x] L'url /api/users affiche la liste des utilisateurs au format json
- [x] L'url /api/users/2 affiche un utilisateur au format json
- [x] L'url /api/users/0 affiche "Not found"

# Quête 03 : POST

## userHandlers.js

ajout de _postUser_, dans le module.exports

## app.js

ajout de la route pour le POST

```
app.post("/api/users", userHandlers.postUser);
```

## Critères d'acceptation

- [x] Le GitHub contient une route POST pour les utilisateurs
- [x] Une requête POST sur /api/users devrait créer un nouvel utilisateur dans la base de données

# Quete 04 : PUT

ajout de _updateUser_ dns module export

## app.js

ajout de la route pour le PUT

```
ajout de app.put("/api/users/:id", userHandlers.updateUser);
```

## Critères d'acceptation

- [x] Le GitHub contient une route PUT pour les utilisateurs
- [x] Une requête PUT sur /api/users/:id devrait mettre à jour le bon utilisateur dans la base de données

# Quete 05 : DELETE

ajout de _deleteUser_ dns module export

## app.js

ajout de la route pour le DELETE

```
ajout de app.delete("/api/users/:id", movieHandlers.deleteUser);
```

## Critères d'acceptation

- [x] Le lien GitHub contient une route DELETE pour les utilisateurs
- [x] Une requête DELETE sur /api/users/:id devrait supprimer le bon utilisateur dans la base de données

# Quete 06 : GET

ajout d'un filtre dans _getUsers_

```
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
```

- [x] La route renvoyant une liste d'utilisateurs les renvoie tous si aucun paramètre n'est passé via l'URL.
- [x] Sinon, elle retourne une liste filtrée selon le paramètre de requête language ou city.
- [x] (bonus) Si les paramètres language et city sont tous les 2 fournis, les éléments renvoyés doivent répondre aux deux conditions de filtrage.
- [x] GET api/users renvoie un statut 200 même si la liste est vide.
