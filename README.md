# ANVAYA

<!-- ![ANVAYA: Every School Function, Connected](docs/images/readme-banner.webp) -->

> **Every School Function, Connected.**

**ANVAYA** (Sanskrit: _अन्वय_, meaning _connection, integration, and logical order_) is a centralized School Management Enterprise Resource Planning (ERP) system. It brings academic, administrative, and financial operations together in one connected platform, helping schools manage their daily operations with greater clarity, structure, and efficiency.

Inspired by the idea of **One Platform. One Campus.**, ANVAYA connects the different functions of a school into one unified system.

## Project Overview

ANVAYA is designed as a multi-tenant School Management ERP platform. It aims to provide schools with a centralized environment for managing their academic, administrative, financial, and operational workflows.

The platform is being developed as a modular monorepo, with shared packages and independently organized applications.

<!-- Badges follow the order of the stack: frontend → backend → databases → realtime → tooling. Each takes its brand's colour (Simple Icons, from each brand's guidelines; React's from react.dev); where shields' white text on it would read under 3:1, the badge is black and the logo carries the colour. -->

[![React](https://img.shields.io/badge/React-23272F?style=for-the-badge&logo=react&logoColor=58C4DC)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![WebSocket](https://img.shields.io/badge/WebSocket-000000?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[![pnpm](https://img.shields.io/badge/pnpm-000000?style=for-the-badge&logo=pnpm&logoColor=F69220)](https://pnpm.io)
[![Turborepo](https://img.shields.io/badge/Turborepo-FF1E56?style=for-the-badge&logo=turborepo&logoColor=white)](https://turborepo.com)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js:** `>=26.0.0 <27`
- **pnpm:** `>=12.21.0` (the exact version is pinned in `packageManager`)
- **Git**
- **Docker:** Recommended for running local infrastructure services

### Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd anvaya
pnpm install
```

### Environment Configuration

Each application manages its own environment file. Copy the respective example file before starting development.

| Application | Example File             | Required Variables                       |
| ----------- | ------------------------ | ---------------------------------------- |
| `apps/api`  | `apps/api/.env.example`  | Database URLs, JWT secrets, S3, SMTP     |
| `apps/web`  | `apps/web/.env.example`  | Public API URL, analytics, site metadata |
| `apps/docs` | `apps/docs/.env.example` | Public documentation URL                 |

```sh
# Example for the API
cp apps/api/.env.example apps/api/.env
```

**Important:** Never commit actual credentials, API keys, database passwords, or other secrets. Environment files are gitignored; only `.env.example` files are tracked.

### Start Development

```sh
pnpm dev
```

The preflight script validates required environment configuration before Turborepo starts the applications.

### Verify

Once the applications are configured and running, verify their health using the endpoints documented by the respective applications.

## Available Commands

Run these commands from the repository root:

```sh
pnpm dev            # Start development applications
pnpm build          # Build all workspace packages
pnpm lint           # Run lint checks across the monorepo
pnpm typecheck      # Run TypeScript checks
pnpm test           # Run tests
pnpm test:e2e       # Run end-to-end tests
pnpm format         # Format supported files
pnpm format:check   # Check formatting
pnpm seed           # Seed demo data
pnpm clean          # Clean workspace build artifacts
```

### Workspace-Scoped Commands

Run commands for individual applications or packages using pnpm filters:

```sh
pnpm --filter <workspace-name> dev
pnpm --filter <workspace-name> build
pnpm --filter <workspace-name> test
```

Replace `<workspace-name>` with the actual package name defined in that workspace's `package.json`.

## Repository Structure

The repository is organized as a pnpm workspace managed by Turborepo.

```text
anvaya/
├── apps/                 # Deployable applications
│   ├── api/              # Express API
│   ├── web/              # Next.js frontend
│   └── docs/             # Documentation site
├── packages/             # Shared libraries and configuration
├── config/               # Centralized dependency catalog
│   └── catalog.yaml      # Single source of truth for shared versions
├── docs/                 # Project documentation
├── scripts/              # Development and maintenance scripts
├── .husky/               # Git hooks
├── biome.json            # Lint and format configuration
├── package.json          # Root package configuration
├── pnpm-workspace.yaml   # Workspace and catalog configuration
├── pnpm-lock.yaml        # Lockfile (committed)
├── turbo.json            # Turborepo task configuration
└── README.md
```

<!-- ## Documentation

Project documentation will cover the architecture, development standards, security, database design, multi-tenancy, permissions, testing, deployment, and external service integrations.

Refer to the [`docs/`](docs/) directory for available documentation. -->

## License

Copyright © 2026 ANVAYA. All rights reserved.

This project is proprietary software. See the [`LICENSE`](LICENSE) file for details.
