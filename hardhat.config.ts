import * as dotenv from "dotenv";
dotenv.config();

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",

  networks: {
    zkSyncTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
    zkMainnet: {
      url: "https://zksync2-mainnet.zksync.io",
      ethNetwork: "mainnet", // Can also be the RPC URL of the Ethereum network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
      // Verification endpoint for mainnet
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
      chainId: 324,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};
