# Quête 02

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

# Quête 03

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

```

```
