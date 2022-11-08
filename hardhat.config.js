/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
const fs = require("fs");
const privateKey = fs.readFileSync("secret.txt").toString();

const projectId = "xxx";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      allowUnlimitedContractSize: true,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
