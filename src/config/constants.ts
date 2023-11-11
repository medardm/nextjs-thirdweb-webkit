/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
const NETWORK = Mumbai;

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
const ETHERSCAN_URL = "https://mumbai.polygonscan.com";

const constants = {
    NETWORK,
    ETHERSCAN_URL
}

export default constants;
