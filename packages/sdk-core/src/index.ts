import {
  Client,
  Wallet,
  MPTokenIssuanceCreate,
  convertStringToHex
} from 'xrpl';

export interface XTokenStudioConfig {
  wssUrl?: string;
  seed: string;
  network?: 'testnet' | 'mainnet';
}

export class XTokenStudio {
  private client: Client;
  private wallet: Wallet;

  constructor(config: XTokenStudioConfig) {
    const url = config.wssUrl ||
      (config.network === 'testnet'
        ? 'wss://s.altnet.rippletest.net:51233'
        : 'wss://xrplcluster.com');
    this.client = new Client(url);
    this.wallet = Wallet.fromSeed(config.seed);
  }

  async connect() {
    await this.client.connect();
  }

  async disconnect() {
    await this.client.disconnect();
  }

  async issueMPT(params: {
    assetScale: number;
    maximumAmount: string;
    transferFee?: number;
    flags?: number;
    metadata?: Record<string, any>;
  }) {
    const metadataHex = params.metadata
      ? convertStringToHex(JSON.stringify(params.metadata))
      : undefined;

    const tx: MPTokenIssuanceCreate = {
      TransactionType: 'MPTokenIssuanceCreate',
      Account: this.wallet.address,
      AssetScale: params.assetScale,
      MaximumAmount: params.maximumAmount,
      TransferFee: params.transferFee || 0,
      Flags: params.flags || 0,
      MPTokenMetadata: metadataHex
    };

    const prepared = await this.client.autofill(tx);
    const signed = this.wallet.sign(prepared);
    const response = await this.client.submitAndWait(signed.tx_blob);
    return response;
  }
}
