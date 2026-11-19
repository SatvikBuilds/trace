# TRACE AI

Enterprise-style demo application for graph-based anti-money laundering investigation.

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

All financial metrics and detections are synthetic demo data. The active engine is a rule-based baseline; no GNN is trained or represented as one.

## Database

Configure Supabase PostgreSQL with `DATABASE_URL` and `DIRECT_URL`, then run:

```sh
npx prisma generate
npx prisma db push
```

## Deployment

Set environment variables from `.env.example` in Vercel. Deploy without hardcoded credentials. Uploaded files should use Supabase Storage or another external object store in production.

## Optional ML service

Set `ML_SERVICE_URL` and `ML_SERVICE_API_KEY`. The web application and baseline detection module work without the service.
