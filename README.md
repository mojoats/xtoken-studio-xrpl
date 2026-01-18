# XToken Studio (XRPL)

XToken Studio is an open-source toolkit and SDK for the configuration, issuance, and management of compliant **Multi-Purpose Tokens (MPTs)** and **Real-World Assets (RWAs)** on the XRP Ledger (XRPL) — with less complexity, lower risk, and faster execution.  

---

## Overview

**Natively for XRPL's strengths:**

- **Multi-Purpose Tokens (MPTs):** Flexible fungible tokens with built-in metadata, compliance controls (clawback, freeze, require auth, transfer fees), and unique issuance IDs.
- **Low fees & fast settlement:** ~$0.0002 per tx, settled in 3-5 seconds.
- **Compliance without smart contracts:** Core tokenization rules handled natively by XRPL.
- **Optional Hooks:** Light custom logic.
- **EVM sidechain:** Advanced programmability.

**Use Cases:** Institutional and emerging-market tokens such as bonds, sukuk, commodities, stablecoins, yield-bearing assets, and SME financing.  

**Target Audience:** Developers, fintechs, and institutions building compliant RWAs, with trader-friendly extensions like yield metadata and AMM integrations.

---

## Key Features

### Token Issuance & Management
- Issue MPTs with compliance flags, metadata (XLS-89 compliant), and lifecycle control (mint, burn, transfer, authorize holders).

### Compliance Tools
- Built-in primitives for KYC-like authorization (`requireAuth`), regulatory reversals (`clawback`), and granular controls (freeze, transfer fees).

### Mass Operations
- Batch payouts/transfers via native Payments/Escrow for dividends, coupons, or large distributions.

### Developer Tools
- TypeScript SDK, CLI for prototyping, React-based Web Studio UI, wallet connect via XUMM.

### Extensions
- Oracle integrations (Chainlink), cross-chain bridges, EVM sidechain support for ERC-like logic.

### Trader Focus
- Metadata for yields, fractionalization support, AMM pool compatibility, risk scoring hooks.

---

## Upcoming Features
- Transfer MPTs efficiently using Payment transactions.
- Authorize holders (`MPTokenAuthorize`) for compliance gating.
- Query balances (`account_lines`) for holder and issuer views.
- Clawback and freeze/unfreeze tokens.
- Metadata helpers for XLS-89 schema.
- Batch operations with multi-sign/escrow.
- NFT integration for fractional RWAs.
- Advanced DeFi hooks: AMM liquidity pools, flash loans on EVM sidechain.

---

## Monorepo Structure



Monorepo Structure

xtoken-studio-xrpl/
├── .github/                # CI/CD workflows (tests, lint, publish)
├── docs/                   # Guides, API references (TypeDoc generated)
├── examples/               # Sample scripts (quickstart.ts, transfer.ts, authorizeHolder.ts, queryBalance.ts)
├── packages/
│   ├── sdk-core/           # Main TypeScript SDK (xrpl.js wrappers for MPT/RWA tools)
│   ├── hooks/              # XRPL Hooks templates (Wasm for custom rules)
│   ├── evm-bridge/         # Optional EVM sidechain integrations
│   └── cli/                # Command-line tool (npx xtoken-studio ...)
├── apps/
│   ├── web-studio/         # React UI for token issuance/management
│   └── api-server/         # Node.js backend for orchestration (batch ops)
├── .eslintrc.js / tsconfig.json / package.json  # Root configs
├── LICENSE                 # Apache-2.0
└── README.md

InstallationXToken Studio is in early development (pre-v0.1). Install from GitHub for now; npm publish coming soon.PrerequisitesNode.js: v20 or v22 (recommended for ESM support). Download: https://nodejs.org
Git
XRPL Testnet Account: Free XRP from faucets:https://testnet.xrpl-labs.com (top-up existing address)
https://xrpl.org/xrp-testnet-faucet.html (generate new credentials)

Wallet: XUMM app for secure signing (recommended); avoid exposing real seeds in code.

StepsClone the repo:bash

git clone https://github.com/mojoats/xtoken-studio-xrpl.git
cd xtoken-studio-xrpl

Install dependencies (pnpm recommended for monorepo speed):

1) Install pnpm if needed
npm install -g pnpm

2) Install depenencies if needed
pnpm install

3) Build everything:
pnpm build

Quickstart: Issue a Test MPT

1) Create a .env file in the root:
TESTNET_SEED=sEdYourTestSeedHere...

2) Run the quickstart example:
pnpm quickstart

- Connects to XRPL Testnet
- Issues a compliant MPT with metadata
- Handles and logs the response
- Verify the transaction: XRPL Testnet Explorer

Full code: examples/quickstart.ts

pnpm build             # Build all packages/apps
pnpm test              # Run Jest tests
pnpm lint              # ESLint + Prettier check/fix
pnpm quickstart        # Run issuance example
pnpm transfer          # Run MPT transfer example
pnpm authorizeHolder   # Run holder authorization example
pnpm queryBalance      # Run balance query example

Roadmapv0.1: Core SDK with MPT issuance, compliance (authorize, clawback, freeze), metadata utils.
v0.2: Transfer MPT, query balance, batch payouts.
v0.3: Web Studio UI + CLI, Hooks/EVM bridge, oracle/AMM integrations.
v0.4: NFT-RWA blending, advanced DeFi tools (flash loans, liquidity pools).
Future: Full mass-distribution tools, enterprise custodian support, XLS-89 validation helpers.

ContributingPRs are welcome! Focus on:MPT compliance wrappers (clawback, authorize).
Metadata/XLS-89 helpers.
UI improvements.
Trader tools (yields, risk).

See CONTRIBUTING.md (add one soon). Open issues for bugs/ideas.Join XRPL Discord (dev channels) or tag @BenAnon7
 on X for feedback.LicenseApache License 2.0 — see LICENSE Inspired by: https://github.com/hashgraph/asset-tokenization-studio and XRPL official code samples (https://github.com/XRPLF/xrpl-dev-portal/tree/master/_code-samples)Let's build compliant RWAs on XRPL together! 


