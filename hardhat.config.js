require("dotenv").config()
require("@nomiclabs/hardhat-ethers")

const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_URL}`,
      accounts: [PRIVATE_KEY],
    },
  },
}
