# API DevHub Connect

## Description

Bienvenue dans la documentation de notre API RESTful pour notre base de données de projets, utilisateurs et compétences. Cette API vous permet de créer, lire, mettre à jour et supprimer des informations relatives aux utilisateurs, aux projets, aux candidatures, aux compétences et aux emplacements. Elle est construite en utilisant les normes REST et est accessible via des requêtes HTTP standard. Les données sont retournées au format JSON pour une utilisation facile dans n'importe quelle application ou site web. Dans les sections suivantes, nous allons détailler les différentes fonctionnalités et routes de l'API ainsi que les exemples de requêtes et de réponses.

## Endpoints :

** Utilisateurs : **

- Récupérer tous les utilisateurs : GET /users
- Récupérer un utilisateur par ID : GET /users/:id
- Créer un utilisateur : POST /users
- Mettre à jour un utilisateur : PUT /users/:id
- Supprimer un utilisateur : DELETE /users/:id

** Candidatures :**

- Récupérer toutes les candidatures : GET /candidacies
- Récupérer une candidature par ID : GET /candidacies/:id
- Créer une candidature : POST /candidacies
- Mettre à jour une candidature : PUT /candidacies/:id
- Supprimer une candidature : DELETE /candidacies/:id

** Projets :**

- Récupérer tous les projets : GET /projects
- Récupérer un projet par ID : GET /projects/:id
- Créer un projet : POST /projects
- Mettre à jour un projet : PUT /projects/:id
- Supprimer un projet : DELETE /projects/:id

** Compétences utilisateur :**

- Récupérer toutes les compétences utilisateur : GET /user_skills
- Récupérer une compétence utilisateur par ID : GET /user_skills/:id
- Créer une compétence utilisateur : POST /user_skills
- Mettre à jour une compétence utilisateur : PUT /user_skills/:id
- Supprimer une compétence utilisateur : DELETE /user_skills/:id

** Compétences projet :**

- Récupérer toutes les compétences projet : GET /project_skills
- Récupérer une compétence projet par ID : GET /project_skills/:id
- Créer une compétence projet : POST /project_skills
- Mettre à jour une compétence projet : PUT /project_skills/:id
- Supprimer une compétence projet : DELETE /project_skills/:id

** Emplois :**

- Récupérer tous les emplois : GET /jobs
- Récupérer un emploi par ID : GET /jobs/:id
- Créer un emploi : POST /jobs
- Mettre à jour un emploi : PUT /jobs/:id
- Supprimer un emploi : DELETE /jobs/:id

** Rôles utilisateur :**

- Récupérer tous les rôles utilisateur : GET /user_roles
- Récupérer un rôle utilisateur par ID : GET /user_roles/:id
- Créer un rôle utilisateur : POST /user_roles
- Mettre à jour un rôle utilisateur

## Exemple Utilisateurs

### Récupérer tous les utilisateurs

Requête :

```
GET /users
```

Réponse :

```
{
    "users": [
        {
            "id": 1,
            "firstname": "John",
            "lastname": "Doe",
            "email": "johndoe@example.com",
            "biography": "Je suis développeur web",
            "about": "Je suis passionné par le développement web depuis plusieurs années...",
            "user_image": "https://example.com/images/1.jpg",
            "password": "hashed_password",
            "github_page": "https://github.com/johndoe",
            "experience": 5,
            "user_role_id": 1,
            "job_id": 1,
            "location_id": 1
        },
        {
            "id": 2,
            "firstname": "Jane",
            "lastname": "Smith",
            "email": "janesmith@example.com",
            "biography": "Je suis développeur mobile",
            "about": "Je suis passionné par le développement mobile depuis plusieurs années...",
            "user_image": "https://example.com/images/2.jpg",
            "password": "hashed_password",
            "github_page": "https://github.com/janesmith",
            "experience": 3,
            "user_role_id": 2,
            "job_id": 2,
            "location_id": 2
        }
    ]
}

```

### Récupérer un utilisateur par son ID

Requête :

```
GET /users/:id
```

Réponse :

```
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "Je suis développeur web",
    "about": "Je suis passionné par le développement web depuis plusieurs années...",
    "user_image": "https://example.com/images/1.jpg",
    "password": "hashed_password",
    "github_page": "https://github.com/johndoe",
    "experience": 5,
    "user_role_id": 1,
    "job_id": 1,
    "location_id": 1
}

```

### Ajouter un utilisateur

Requête :

```
POST /users
```

Avec un corps de requête :

```
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@email.com",
  "biography": "A software developer with 5 years of experience.",
  "about": "I am a motivated and passionate developer who is always looking to improve my skills and learn new technologies.",
  "user_image": "image_data_as_a_blob",
  "password": "password_hash",
  "github_page": "https://github.com/johndoe",
  "experience": 5,
  "user_role_id": 1,
  "job_id": 2,
  "location_id": 3
}
```

### Mise à jour d'un utilisateur

Requête :

```
PUT https://example.com/api/users/42

Body :
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "A software developer with 10 years of experience.",
    "about": "I love coding and I'm always looking for new challenges.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "experience": 10,
    "user_role_id": 2,
    "job_id": 1,
    "location_id": 5
}

```

Avec un corps de requête :

```
HTTP/1.1 200 OK

Body :
{
    "id": 42,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "A software developer with 10 years of experience.",
    "about": "I love coding and I'm always looking for new challenges.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "experience": 10,
    "user_role_id": 2,
    "job_id": 1,
    "location_id": 5
}
```

### Effacer un utilisateur

Requête :

```
DELETE https://api.example.com/users/42
```

Avec un corps de requête :

```
HTTP/1.1 200 OK

```
