const hre = require("hardhat");

async function main() {
  const Certificate = await hre.ethers.deployContract("Certificate");

  await Certificate.waitForDeployment();

  console.log(`Deployed to: ${Certificate.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
