import { XTokenStudio } from '../packages/sdk-core/src'; // local path to your SDK

(async () => {
  const studio = new XTokenStudio({
    network: 'testnet',
    seed: 'sEdYourTestSeedFromFaucetHere'  // NEVER commit real seeds!
  });

  await studio.connect();

  const result = await studio.issueMPT({
    assetScale: 2,
    maximumAmount: '1000000',
    transferFee: 50,
    flags: 0x00000040 | 0x00000004,  // Clawback + Require Auth
    metadata: { name: 'Test RWA', symbol: 'TRWA', yield: '5%' }
  });

  console.log('Issued:', result);
  await studio.disconnect();
})();
