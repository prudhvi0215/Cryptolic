require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.HARDHAT_KEY}`,
      accounts: [
        "77142206c05f7a06fe8d6decc1dc58ee9bb8d4fc50ef4dc4e1a48d2c81be4a7b",
      ],
    },
  },
};
