require("@nomiclabs/hardhat-ethers")
const ALCHEMY_API_KEY = "your alchemy api key"
const GOERLI_PRIVATE_KEY =
  "your privat key from MetaMask, never show this to anyone, and do not push it to github"

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
}
