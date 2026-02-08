const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // deploy Crowdfunding contract
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();

  await crowdfunding.waitForDeployment();

  const crowdfundingAddress = await crowdfunding.getAddress();
  const rewardTokenAddress = await crowdfunding.rewardToken();

  
  console.log(`Crowdfunding deployed to: ${crowdfundingAddress}`);
  console.log(`Reward Token deployed to: ${rewardTokenAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
