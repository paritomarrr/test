// const { ethers } = require("hardhat");

// const alchemyProvider = {
//     provider: new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL)
// }
// const INFURAProvider = {
//     provider: new ethers.providers.JsonRpcProvider(process.env.INFURA_API_URL)
// }

// const findMeAProvider = async () => {
//     console.log("GOING TO FIND A PROVIDER");
//     try { 
//         // code for alchemy
//         // console.log(await alchemyProvider.provider.getNetwork());
//         await alchemyProvider.provider.getNetwork();
//         console.log('Alchemy is running ')
//         return alchemyProvider.provider
//     }
//     catch (err) {
//         console.error("Found error in ALCHEMY ", err.message);
//     }
//     try {
//         // code for infura
//         await INFURAProvider.provider.getNetwork();
//         console.log('Infura is running ')
//         return INFURAProvider.provider
//     }
//     catch (err) {
//         console.error("Found error in INFURA ", err.message);
//     }   
// }

// module.exports.findMeAProvider = findMeAProvider