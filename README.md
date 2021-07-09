## Projeto-FullStack-Backend

### Endpoints
### User
**POST** https://projeto-fullstack-backend.herokuapp.com/user/login

**Description**: Login with an existing account. Will return a token.

**Format**:
```json
{
  "email": "exemplo@exemplo.com",
  "password": "exemplo"
}
```
---
**POST** https://projeto-fullstack-backend.herokuapp.com/user/signup

**Description**: Create an account.

**Format**:
```json
{
  "name": "Exemplo",
  "email": "exemplo@exemplo.com",
  "nickname": "exemplo",
  "password": "password"
}
```
---
### Music
**POST** https://projeto-fullstack-backend.herokuapp.com/music/add

**Description**: Endpoint used to add a song.

Authorization: -> Token

**Format**: 
```json
Authorization: Token
{
  "title": "Shake It Bololo",
  "author": "exemplo",
  "file": "https://www.youtube.com/watch?v=oowBXzfcl90",
  "genre": "MPB",
  "album": "Clássicas"
}
```



---
**GET** https://projeto-fullstack-backend.herokuapp.com/music/

**Description**: This endpoint returns all songs.

**Format**:
```json
music: [{
"id":"4e9cc2af-7ab1-41dc-8409-032bda8016a8",
"title":"Shake It Bololo",
"author":"pedrovitors",
"album":"Clássicas",
"date":"2021-07-08T00:00:00.000Z",
"file":"https://www.youtube.com/watch?v=oowBXzfcl90",
"genre":"MPB"
}]
```
---
**GET** https://projeto-fullstack-backend.herokuapp.com/music/musictitle

**Description**: Returns a song based on the given query params.

**Format**:
```json
{
  "music": {
    "id": "4e9cc2af-7ab1-41dc-8409-032bda8016a8",
    "title": "Shake It Bololo",
    "author": "pedrovitors",
    "album": "Clássicas",
    "date": "2021-07-08T03:00:00.000Z",
    "file": "https://www.youtube.com/watch?v=oowBXzfcl90",
    "genre": "MPB"
  }
}
```
