const hre = require("hardhat");


async function main() {
 

  // We get the contract to deploy
  const ScuffedBois = await hre.ethers.getContractFactory("scuffdbois");
  const scuffedBois = await ScuffedBois.deploy("scuffdbois.wtf","SB","ipfs://QmdmyKkQixjmjP5mrup6t453y2nV9upSxu7BQd8y9EVMw9/","ipfs://QmTiGeoU5jSFqmXe3mdcGSx2hDenUnxD3obHLZfF1QcUdB/unrevealed.json");

  await scuffedBois.deployed();

  console.log("ScuffedBois deployed to:", scuffedBois.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
