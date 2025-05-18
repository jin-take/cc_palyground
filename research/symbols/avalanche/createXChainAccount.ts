// ESM なので拡張子 .ts でも import は URL 形式
import 'dotenv/config';
import { Avalanche } from '@avalabs/avalanchejs';
import type { AVMAPI } from '@avalabs/avalanchejs/dist/apis/avm';
import fs from 'node:fs/promises';

async function main() {
  // === 1. Fuji (Testnet) へ接続 ===
  const avalanche = new Avalanche(
    'api.avax-test.network', // host
    443,                     // port
    'https',                 // protocol
    5                        // networkID (Fuji)
  );

  // === 2. X-Chain API を取得 ===
  const xchain: AVMAPI = avalanche.XChain();
  const keychain = xchain.keyChain();

  // === 3. 鍵ペアを生成 ===
  const kp = keychain.makeKey();
  const privateKey = kp.getPrivateKeyString(); // PrivateKey-....
  const address = kp.getAddressString();       // X-avax1....

  console.log('=== X-Chain アカウント ===');
  console.log('Address    :', address);
  console.log('PrivateKey :', privateKey);

  // === 4. .env に追記（重複書き込みはスキップ） ===
  if (!process.env.AVAX_PRIVATE_KEY) {
    await fs.appendFile(
      '.env',
      `\nAVAX_PRIVATE_KEY=${privateKey}\nAVAX_ADDRESS=${address}\n`
    );
  }
}

main().catch(console.error);
