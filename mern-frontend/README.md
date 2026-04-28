# MERN Frontend

React.js frontend for the MERN stack application.

## Setup

```bash
npm install
npm start        # Starts on http://localhost:3000
npm run build    # Production build
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # React Context (Auth, etc.)
├── hooks/           # Custom React hooks
├── pages/           # Page-level components
├── services/        # Axios API client
└── styles/          # Global CSS
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| REACT_APP_API_URL | Backend API URL (default: http://localhost:5000/api) |

## Connecting to Backend

The app proxies API requests to `http://localhost:5000` in development.
Make sure the backend server is running before starting the frontend.
