// Get the Transaction details of an EThereum address with erthers.js and etherscan API
// https://etherscan.io/tx/0x28f0e869253cfa5247c70bef54b9046a1357dea32452fa846e90f25fdcb38582
import { EtherscanProvider, TransactionResponse } from "ethers";

// Get the transaction details of an Ethereum address
async function getTransactionDetails(txHash: string): Promise<TransactionResponse | null> {
    // Connect to the Ethereum network
    const provider = new EtherscanProvider("mainnet", "1SADUXKUGSCQTHU331XG73S29E4NEVDTD4");
    // Get the transaction details
    const transaction = await provider.getTransaction(txHash);
    return transaction;
}

// Execute the function
const txHash = "0x28f0e869253cfa5247c70bef54b9046a1357dea32452fa846e90f25fdcb38582"; // Example transaction hash
getTransactionDetails(txHash)
    .then((transaction) => {
        console.log(`The transaction details of transaction ${txHash} are: `);
        console.log(transaction);
    }
    )
    .catch((error) => {
        console.error(`Error fetching transaction details: ${error}`);
    }
    );


/**
 * TransactionResponse {
  provider: EtherscanProvider {
    network: Network {},
    apiKey: '1SADUXKUGSCQTHU331XG73S29E4NEVDTD4'
  },
  blockNumber: 22493946,
  blockHash: '0x7bde69f67aafd5faee96a1cf1ccc1a7f1cd8779b7dc42e7f2332aeef244d2d10',
  index: 144,
  hash: '0x28f0e869253cfa5247c70bef54b9046a1357dea32452fa846e90f25fdcb38582',
  type: 2,
  to: '0x00000000219ab540356cBB839Cbe05303d7705Fa',
  from: '0x5b3E2bb0FC7cAd985c1461FeC254a9cc162Ff168',
  nonce: 747,
  gasLimit: 81448n,
  gasPrice: 1003324522n,
  maxPriorityFeePerGas: 172255010n,
  maxFeePerGas: 1239167028n,
  maxFeePerBlobGas: null,
  data: '0x22895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120eb520fa0c561f1f28bb3358764e3bddcf41196645d4d934c8a9bfa1eadbf67860000000000000000000000000000000000000000000000000000000000000030ae12bf9605235800efe3020965293278d22da5fdbb3ff10b9aa594428d4b9009edc7dc3c1ca67867a3c0c8bb50957d4e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200100000000000000000000005b3e2bb0fc7cad985c1461fec254a9cc162ff1680000000000000000000000000000000000000000000000000000000000000060801a46362615bdf7ba1b7a17bb155d349f1c2ee29908dcc0f76f9e7b99f60ccb662b14e285421963cd01440e13f1ccb51713270b71f1d8657b43c6525ca61370881a523b8e6e461db94813b845fca5021dd4c5792f3b32f64122a1651c699001',
  value: 32000000000000000000n,
  chainId: 1n,
  signature: Signature { r: "0x5ba9e225c194b1fe4453db7f5eb1ada16dcbdef0fcbc8e33e86307f74bd87ca4", s: "0x7acdfd2e70e96c39d964524519ee49fb245877eec21b17d3a7ecb929ff18bd97", yParity: 0, networkV: null },
  accessList: [],
  blobVersionedHashes: null,
  authorizationList: null
}
 */