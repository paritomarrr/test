/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const {ALCHEMY_API_URL, PRIVATE_KEY} = process.env;
const providers = require('./providers/provider')

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: providers.findMeAProvider(),
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
  // api key
  // wallet pass

};
