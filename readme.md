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
