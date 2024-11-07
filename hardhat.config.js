require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

if (process.env.SE_POLIA_URL && process.env.PRIVATE_KEY) {
  config.networks.sepolia = {
    url: process.env.SE_POLIA_URL,
    accounts: [process.env.PRIVATE_KEY],
  };
}

module.exports = config;
