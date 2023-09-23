const hre = require("hardhat");

async function main() {
  const BirthCertificate = await hre.ethers.getContractFactory(
    "BirthCertificate"
  );
  const upload = await BirthCertificate.deploy();

  await upload.deployed();

  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
