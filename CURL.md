# User commands

## Create a new user

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "jantoine@antoinesolutions.com",
  "firstName": "Jon",
  "lastName": "Antoine",
  "username": "jantoine"
}' http://localhost:3000/users/new
```

## Edit a user

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "firstName": "Jonathan"
}' http://localhost:3000/users/edit/1
```

## Fetch a user

```bash
curl http://localhost:3000/users\?email\=jantoine@antoinesolutions.com
```
