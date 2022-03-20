const {ethers} = require("hardhat")

// const {ALCHEMY_API_URL, INFURA_API_URL} = process.env

const getProvider = async (ALCHEMY_API_URL, INFURA_API_URL) => {
    const alchemyProvider = {
        provider: new ethers.providers.JsonRpcProvider(ALCHEMY_API_URL)
    }
    const infuraProvider = {
        provider: new ethers.providers.JsonRpcProvider(INFURA_API_URL)
    }
        console.log("Going to find provider");
        try {
            await alchemyProvider.provider.getNetwork();
            console.log('Alchemy is running')
            return alchemyProvider.provider
        }
        catch (err) {
            console.error('Found error in alchemy', err.message);
        }
        try {
            await infuraProvider.provider.getNetwork();
            console.log('Infura is running')
            return infuraProvider.provider
        }
        catch (err) {
            console.error('Found error in infura', err.message);
        }
    

}

module.exports.getProvider = getProvider