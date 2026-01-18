# XToken Studio

Open-source toolkit and SDK for configuring, issuing, and managing compliant Real-World Assets (RWAs) and Multi-Purpose Tokens (MPTs) on the **XRP Ledger (XRPL)**.

Inspired by Hedera's Asset Tokenization Studio, but adapted to XRPL's native features: fast settlements, low fees, built-in compliance (clawback, freeze, authorized holders, metadata), and MPTs (post-MPTokensV1 amendment).

### Key Features (Planned)
- TypeScript SDK wrapping xrpl.js for MPT issuance, compliance setup, lifecycle management (mint/burn/transfer with flags)
- Web-based Studio UI (React) for easy token creation/testing
- CLI for quick prototyping
- Optional Hooks & EVM sidechain integration for advanced logic
- Trader-friendly extensions: Yield metadata, AMM pool integration, oracle hooks

### Why XRPL for RWAs?
- Native MPTs: Immutable metadata, transfer controls, no trust-line complexity
- Institutional-grade compliance primitives out-of-the-box
- 3-5s settlements, ~$0.0002 fees
- Growing ecosystem: Ondo OUSG, Archax, Meld Gold, RLUSD integrations

### Installation 
Install dependencies:
 pnpm install

Build:
 pnpm build

