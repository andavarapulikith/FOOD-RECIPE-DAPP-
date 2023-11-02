/* eslint-disable no-undef */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// const fs = require('fs');

require("dotenv").config();



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: process.env.ALCHEMYURL,
      accounts: [ process.env.PRIVATEKEY]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};