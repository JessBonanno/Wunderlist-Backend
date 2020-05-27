# Backend

[Heroku App](https://wunderlist2020.herokuapp.com)


# Authentication Endpoints:

## POST /api/auth/login

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```
{
  "id": 3,
  "message": "Login Successful",
  "payload": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiTmFvbWlUb3JyZXMiLCJwYXNzd29yZCI6IiQyYSQwOCRLSFBuSXlpOTIuU3NLdnhBYmhZYXkudFp4UU9oT3RpS29JbmsxbExoa0cuWHZuOUhLVEVWNiIsImlhdCI6MTU5MDYwMjI4NywiZXhwIjoxNTkxMjA3MDg3fQ._N6-sbaixWBXBhJLtYtkaRSRRFoBcSk7LUOF59fx6i4"
}
```

## POST /api/auth/register

#### Expected request body:

```
{
	"username": "testuseraccount",
	"password": "vaccumpixelhorsebrush"
}
```

#### Returns:

```
{
  "id": 4,
  "username": "testuseraccount2"
}
```


# User Endpoints:

## GET /api/users

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiTmFvbWlUb3JyZXMiLCJwYXNzd29yZCI6IiQyYSQwOCRLSFBuSXlpOTIuU3NLdnhBYmhZYXkudFp4UU9oT3RpS29JbmsxbExoa0cuWHZuOUhLVEVWNiIsImlhdCI6MTU5MDYwMjI4NywiZXhwIjoxNTkxMjA3MDg3fQ._N6-sbaixWBXBhJLtYtkaRSRRFoBcSk7LUOF59fx6i4"
```

### Returns:

```
[
  {
    "id": 1,
    "username": "admin"
  },
  {
    "id": 2,
    "username": "usertwo"
  },
  {
    "id": 3,
    "username": "testuseraccount"
  }
]
```

# GET /api/users/:id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiTmFvbWlUb3JyZXMiLCJwYXNzd29yZCI6IiQyYSQwOCRLSFBuSXlpOTIuU3NLdnhBYmhZYXkudFp4UU9oT3RpS29JbmsxbExoa0cuWHZuOUhLVEVWNiIsImlhdCI6MTU5MDYwMjI4NywiZXhwIjoxNTkxMjA3MDg3fQ._N6-sbaixWBXBhJLtYtkaRSRRFoBcSk7LUOF59fx6i4"
```

### Returns: 

```
[
    {
        "id": 1,
        "username": "SadieWilson"
    }
]
```



## GET /api/users/:id/todos

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiTmFvbWlUb3JyZXMiLCJwYXNzd29yZCI6IiQyYSQwOCRLSFBuSXlpOTIuU3NLdnhBYmhZYXkudFp4UU9oT3RpS29JbmsxbExoa0cuWHZuOUhLVEVWNiIsImlhdCI6MTU5MDYwMjI4NywiZXhwIjoxNTkxMjA3MDg3fQ._N6-sbaixWBXBhJLtYtkaRSRRFoBcSk7LUOF59fx6i4"
```

## Returns:
```
[
    {
        "id": 1,
        "title": "Plants",
        "description": "Water my plants"
    },
    {
        "id": 2,
        "title": "Dishes",
        "description": "Wash dishes"
    },
    {
        "id": 3,
        "title": "Dog",
        "description": "Bath the dog"
    }
]
```



## POST /api/users/:id/todos
Pass in the user ID as a param, and body should contain the ID of the comment that's being starred.
Returns ID of instance that was created

### Expected request body:
```
{
    "user_id": 2,
    "todo_id: 24,
}
```

