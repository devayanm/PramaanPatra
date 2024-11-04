require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: process.env.SE_POLIA_URL,
      accounts: [process.env.PRIVATE_KEY],

    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};