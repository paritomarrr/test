const { ethers } = require("hardhat");
// const providers = require('../providers/provider');
const providers = require('../index.js')
const {ALCHEMY_API_URL, INFURA_API_URL} = process.env


async function main () {
    const provider = await providers.getProvider(ALCHEMY_API_URL, INFURA_API_URL);
    let signer = new ethers.Wallet(process.env.PRIVATE_KEY);
    signer = signer.connect(provider);
    const HelloWorld = await ethers.getContractFactory("Helloworld"); //factoryInstance
    const hello_world = await HelloWorld.connect(signer).deploy("Hello World"); //contractInstance
    console.log("Contract deployed to address ", hello_world.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})