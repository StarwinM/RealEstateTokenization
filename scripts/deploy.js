const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...\n");

  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();

  await crowdfunding.waitForDeployment();

  const crowdfundingAddress = await crowdfunding.getAddress();
  const rewardTokenAddress = await crowdfunding.rewardToken();

  console.log("=".repeat(60));
  console.log("  DEPLOYMENT SUCCESSFUL!");
  console.log("=".repeat(60));
  console.log(`  Crowdfunding (ESTATE_TOKEN_ADDRESS):  ${crowdfundingAddress}`);
  console.log(`  RewardToken  (PROPERTY_TOKEN_ADDRESS): ${rewardTokenAddress}`);
  console.log("=".repeat(60));
  console.log("\n  Copy these addresses into frontend/app.js (lines 4-5)");
  console.log(`  const ESTATE_TOKEN_ADDRESS = '${crowdfundingAddress}';`);
  console.log(`  const PROPERTY_TOKEN_ADDRESS = '${rewardTokenAddress}';`);
  console.log("=".repeat(60));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
