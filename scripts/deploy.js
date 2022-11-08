const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const Destore = await hre.ethers.getContractFactory("Destore");
  const destore = await Destore.deploy();

  // console.log('company address', companyaddress.address);
  await destore.deployed();

  txHash = destore.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let destoreAddress = txReceipt.contractAddress;

  console.log("Destore contract address", destoreAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
