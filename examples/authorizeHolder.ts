import * as dotenv from 'dotenv';
dotenv.config();

import { XTokenStudio } from '../packages/sdk-core/dist/index.js';

(async () => {
  const studio = new XTokenStudio({ network: 'testnet', seed: process.env.TESTNET_SEED! });

  try {
    await studio.connect();
    console.log('🔗 Connected');

    const authorizeResult = await studio.authorizeHolder({
      tokenID: 'YOUR_MPT_ID',
      wallet: 'rPTHOLDER', // Replace with holder wallet
      authorize: true
    });

    console.log('✅ Holder Authorized');
    console.log(JSON.stringify(authorizeResult, null, 2));
  } catch (err) {
    console.error('❌ XRPL Holder Auth ERROR', err);
  } finally {
    await studio.disconnect();
    console.log('🔌 Disconnected');
  }
})();
