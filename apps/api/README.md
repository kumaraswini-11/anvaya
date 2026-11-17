# @anvaya/api

Express backend API for **ANVAYA**, the School Management ERP.

This application is responsible for all server-side business logic, database operations, and external service integrations.

## Commands

Run from the **repository root** using the pnpm filter:

```bash
# Development
pnpm --filter @anvaya/api dev

# Build
pnpm --filter @anvaya/api build

# Production start
pnpm --filter @anvaya/api start

# Type checking and linting
pnpm --filter @anvaya/api typecheck
pnpm --filter @anvaya/api lint
```

The API starts on <http://localhost:4000> by default.

## Health Endpoints

- Liveness: `GET /health/live`
- Readiness: `GET /health/ready`
