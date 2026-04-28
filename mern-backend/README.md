# MERN Backend

Express + MongoDB + Node.js REST API

## Setup

```bash
npm install
cp .env.example .env   # Edit .env with your values
npm run dev            # Development with nodemon
npm start              # Production
```

## API Endpoints

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | /api/health | Health check | No |
| POST | /api/auth/register | Register user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/auth/me | Get current user | Yes |
| GET | /api/users | Get all users | Admin |
| GET | /api/users/:id | Get user by ID | Yes |
| PUT | /api/users/:id | Update user | Yes |
| DELETE | /api/users/:id | Delete user | Admin |

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port (default: 5000) |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT tokens |
| JWT_EXPIRES_IN | JWT expiry (default: 7d) |
| CLIENT_URL | Frontend URL for CORS |
