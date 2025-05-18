import { ethers, EtherscanProvider } from "ethers";

// Get the balance of an Ethereum address
async function getBalance(address: string): Promise<string> {
    // Connect to the Ethereum network
    const provider = new EtherscanProvider("mainnet", "1SADUXKUGSCQTHU331XG73S29E4NEVDTD4")
    // Get the balance of the address
    const balance = await provider.getBalance(address);
    // Convert the balance from wei to ether
    const balanceInEther = ethers.formatEther(balance);
    return balanceInEther;
}


// address: 
const address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"; // Example address
// Get the balance of the address
getBalance(address)
    .then((balance) => {
        console.log(`The balance of address ${address} is ${balance} ETH`);
    }
    )
    .catch((error) => {
        console.error(`Error fetching balance: ${error}`);
    }
    );

