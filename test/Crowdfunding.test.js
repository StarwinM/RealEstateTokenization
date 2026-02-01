const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Real Estate Crowdfunding", function () {
  let Crowdfunding, crowdfunding, rewardToken;
  let owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.waitForDeployment();

    const tokenAddress = await crowdfunding.rewardToken();
    const RewardToken = await ethers.getContractFactory("RealEstateToken");
    rewardToken = RewardToken.attach(tokenAddress);
  });

  it("Should create a campaign correctly", async function () {
    await crowdfunding.createCampaign("Test Villa", ethers.parseEther("5"), 3600);
    const campaign = await crowdfunding.campaigns(0);
    expect(campaign.title).to.equal("Test Villa");
  });

  it("Should mint tokens upon contribution", async function () {
    await crowdfunding.createCampaign("Test Villa", ethers.parseEther("5"), 3600);
    const contribution = ethers.parseEther("1");
    
    await crowdfunding.connect(addr1).contribute(0, { value: contribution });
    
    const balance = await rewardToken.balanceOf(addr1.address);
    expect(balance).to.equal(contribution * 100n);
  });
});