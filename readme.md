Création d'un fichier userHandlers.js
Création des routes dans app.js

```
const userHandlers = require("./userHandlers");
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);
```

ajout du .env dans gitignore

Le serveur fonctionne

- [x]L'url /api/users affiche la liste des utilisateurs au format json
- [x]L'url /api/users/2 affiche un utilisateur au format json
- [x]L'url /api/users/0 affiche "Not found"
