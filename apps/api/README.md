# @fitness/api

Express + MongoDB + TypeScript API server for the fitness tracker application.

## Features

- Express.js REST API
- MongoDB database integration
- TypeScript
- dotenv configuration
- CORS enabled
- Health check endpoint

## Getting Started

1. Install dependencies from the root:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string.

4. Start development server:
```bash
npm run dev --filter=api
```

The API will be available at `http://localhost:3001`.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code
- `npm run check-types` - Type check

## API Endpoints

- `GET /health` - Health check endpoint

## Environment Variables

See `.env.example` for required environment variables:

- `PORT` - Server port (default: 3001)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Node environment (development/production)
