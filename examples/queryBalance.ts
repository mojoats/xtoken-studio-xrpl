import * as dotenv from 'dotenv';
dotenv.config();

import { XTokenStudio } from '../packages/sdk-core/dist/index.js';

(async () => {
  const studio = new XTokenStudio({ network: 'testnet', seed: process.env.TESTNET_SEED! });

  try {
    await studio.connect();
    console.log('🔗 Connected');

    const balance = await studio.getMPTBalance({
      tokenID: 'YOUR_MPT_ID',
      wallet: 'rPTHOLDER' // Replace with wallet to check balance
    });

    console.log('💰 MPT Balance:', balance);
  } catch (err) {
    console.error('❌ XRPL Balance ERROR', err);
  } finally {
    await studio.disconnect();
    console.log('🔌 Disconnected');
  }
})();
