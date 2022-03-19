/**
 * @type import('hardhat/config').HardhatUserConfig
 */


require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    },  //network1
    "truffle-dashboard": {
      url: "http://localhost:24012/rpc"
    }
  }
};
