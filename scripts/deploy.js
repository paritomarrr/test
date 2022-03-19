const { ethers } = require("hardhat");
const providers = require('../providers/provider');

async function main () {
    const provider = await providers.findMeAProvider();
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