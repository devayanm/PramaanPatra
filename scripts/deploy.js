const hre = require("hardhat");

async function main() {
  const BirthCertificate = await hre.ethers.deployContract("BirthCertificate");

  await BirthCertificate.waitForDeployment();

  console.log(`Deployed to: ${BirthCertificate.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
