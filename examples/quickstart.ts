// examples/quickstart.ts
import * as dotenv from 'dotenv';
dotenv.config();

// Source import (tsx will transpile it)
import { XTokenStudio } from '../packages/sdk-core/src';

// This exact line fixes the xrpl import error in Node 22 + tsx
import { MPTokenIssuanceCreateFlags } from 'xrpl/dist/npm/models/transactions/MPTokenIssuanceCreate.js';


(async () => {
  if (!process.env.TESTNET_SEED) {
    throw new Error(
      'TESTNET_SEED missing in .env file!\n' +
      'Create .env in project root:\n' +
      'TESTNET_SEED=sEdYourTestSeedHere...\n' +
      'Fresh seed: https://testnet.xrpl-labs.com'
    );
  }

  console.log('🚀 XToken Studio Quickstart – Issuing MPT on XRPL Testnet');

  const studio = new XTokenStudio({
    network: 'testnet',
    seed: process.env.TESTNET_SEED,
  });

  try {
    console.log('🔗 Connecting to XRPL Testnet...');
    await studio.connect();

    console.log(`Issuer Address: ${studio.wallet.address}`);

    console.log('💰 Issuing MPT...');
    const result = await studio.issueMPT({
      assetScale: 2,
      maximumAmount: '1000000',

      flags:
        MPTokenIssuanceCreateFlags.lsfClawbackEnabled |
        MPTokenIssuanceCreateFlags.lsfRequireAuth |
        MPTokenIssuanceCreateFlags.tfMPTCanTransfer,

      transferFee: 50,

      metadata: {
        name: 'Test RWA Token',
        symbol: 'TRWA',
        description: 'Prototype compliant tokenized asset using XToken Studio',
      },
    });

    console.log('✅ MPT Issued Successfully!');
    console.log('Transaction Hash:', result.result.hash);
    console.log('Ledger Index:', result.result.ledger_index);

    const issuanceNode = result.result.meta?.affected_nodes?.find(
      (node: any) => node.CreatedNode?.LedgerEntryType === 'MPTokenIssuance'
    );

    if (issuanceNode) {
      console.log('MPToken Issuance ID:', issuanceNode.CreatedNode.LedgerIndex);
    }

    console.log('\nView TX on explorer:');
    console.log(`https://testnet.xrpl.org/transactions/${result.result.hash}`);

  } catch (err: any) {
    console.error('❌ XRPL Error:');
    console.error(err.message || err);
    if (err.data) console.error('Data:', err.data);
    console.dir(err, { depth: null });
  } finally {
    await studio.disconnect();
    console.log('🔌 Disconnected');
  }
})();