
// https://eth-goerli.alchemyapi.io/v2/Gx2KbRE8awd2QHW6bBoGbFjA41LLo5MF

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/Gx2KbRE8awd2QHW6bBoGbFjA41LLo5MF',
      accounts: ['77142206c05f7a06fe8d6decc1dc58ee9bb8d4fc50ef4dc4e1a48d2c81be4a7b']
    }
  }
}

