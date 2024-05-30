let totalNfts = [];                                                           //Created a variable that holds total number of NFT's

function mintNFT (_name,_color,_shirtType,_bling,_Id,_height) {               //Created Function to represent the NFT's and will hold its metadata by creating object

    let NFT_1 = {
        "name" : _name,
        "color" : _color,
        "Shirt_Type" : _shirtType,
        "bling" : _bling,
        "Id" : _Id,
        "height" : _height
    }
    totalNfts.push(NFT_1);                                                    // Pushes the metadata of NFT in totalNFTs to keep track of record

    
}
function listNFTs() {                                                         // Creates a loop that will go through the array of NFT's 
    for(let i=0; i<totalNfts.length; i++){                                    // and print the medadata for each using console.log()
        console.log("");       
        console.log("Details of NFT "+(i+1));                             
        console.log(totalNfts[i]);
    }

}
function getTotalSupply() {                                                   // Print the total number of NFTS minted 
    console.log(totalNfts.length);
}

mintNFT("Sam", "Blue", "Shirt", "Ring", 5, 5.6);                              // Calling function with parameters for creating NFT

mintNFT("Roy", "Black", "T-Shirt", "Diamond Ring", 10, 5.8);

mintNFT("Rocky", "Red", "Jacket", "Silver Chain", 15, 6.1);

listNFTs();                                                                   // Calling function to print all the metadata in a format of NFT's

console.log("\nTotal number of NFTs:");
getTotalSupply();                                                             // Returns the total number of NFTs created
