# Auth API

A simple and secure RESTful authentication API built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Input validation
- Protected routes middleware

## Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/auth-api.git
cd auth-api
npm install
cp .env.example .env
# Fill in your environment variables
npm run dev
```

## API Endpoints

| Method | Endpoint             | Description          | Auth Required |
|--------|----------------------|----------------------|---------------|
| POST   | /api/auth/register   | Register new user    | No            |
| POST   | /api/auth/login      | Login user           | No            |
| GET    | /api/auth/me         | Get current user     | Yes           |
| POST   | /api/auth/logout     | Logout user          | Yes           |
| PUT    | /api/users/:id       | Update user profile  | Yes           |
| DELETE | /api/users/:id       | Delete account       | Yes           |

## Example Requests

### Register
```json
POST /api/auth/register
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "StrongPass123!"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "StrongPass123!"
}
```

## Project Structure

```
src/
├── config/         # DB and app config
├── controllers/    # Route handlers
├── middleware/     # Auth & validation middleware
├── models/         # Mongoose models
├── routes/         # Express routes
└── index.js        # Entry point
```

## License

MIT
