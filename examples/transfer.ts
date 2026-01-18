import * as dotenv from 'dotenv';
dotenv.config();

import { XTokenStudio } from '../packages/sdk-core/dist/index.js';

(async () => {
  if (!process.env.TESTNET_SEED) throw new Error("TESTNET_SEED is missing!");

  const studio = new XTokenStudio({ network: 'testnet', seed: process.env.TESTNET_SEED });

  try {
    await studio.connect();
    console.log('🔗 Connected');

    const transferResult = await studio.transferMPT({
      tokenID: 'YOUR_MPT_ID',        // Replace with issued MPT ID
      amount: '100',
      destination: 'rPTDESTINATION' // Replace with recipient wallet
    });

    console.log('✅ Transfer Success');
    console.log(JSON.stringify(transferResult, null, 2));
  } catch (err) {
    console.error('❌ XRPL Transfer ERROR', err);
  } finally {
    await studio.disconnect();
    console.log('🔌 Disconnected');
  }
})();
