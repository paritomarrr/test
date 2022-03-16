const alchemyProvider = {
    provider: process.env.ALCHEMY_API_URL
}

export async function findMeAProvider() {
    try { 
        // code for alchemy
        await alchemyProvider.provider;
        console.log('Alchemy is running ')
    }
    catch (err) {
        console.error("Found error in ALCHEMY ", error.message);
    }
    try {
        // code for infura
        console.log('Infura is running ')
    }
    catch (err) {
        console.error("Found error in INFURA ", error.message);
    }
    
}