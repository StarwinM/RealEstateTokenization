// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./RealEstateToken.sol";

/**
real estate crowdfunding campaigns and automated token rewards.
 */
contract Crowdfunding {
    struct Campaign {
        string title;        // Property name
        uint256 target;      // Funding goal in wei
        uint256 deadline;    // End time of the campaign
        uint256 raised;      // Total funds collected
        bool finalized;      // Whether funds have been withdrawn
        address payable owner; // Campaign creator
    }

    RealEstateToken public rewardToken;
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;

    event CampaignCreated(uint256 id, string title, uint256 target, uint256 deadline);
    event ContributionMade(uint256 id, address contributor, uint256 amount);

    constructor() {
        // Deploy the reward token contract upon initialization
        rewardToken = new RealEstateToken();
    }

    /**
    Creates a new real estate crowdfunding campaign.
     */
    function createCampaign(string memory _title, uint256 _target, uint256 _duration) external {
        require(_target > 0, "Target must be greater than 0");
        uint256 deadline = block.timestamp + _duration;

        campaigns[campaignCount] = Campaign({
            title: _title,
            target: _target,
            deadline: deadline,
            raised: 0,
            finalized: false,
            owner: payable(msg.sender)
        });

        emit CampaignCreated(campaignCount, _title, _target, deadline);
        campaignCount++;
    }

    /**
     Allows users to contribute ETH and receive automated token rewards.
     */
    function contribute(uint256 _id) external payable {
        Campaign storage c = campaigns[_id];
        require(block.timestamp < c.deadline, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than 0");

        c.raised += msg.value;

        // Automated minting: 1 ETH = 100 Reward Tokens
        uint256 rewardAmount = msg.value * 100;
        rewardToken.mint(msg.sender, rewardAmount);

        emit ContributionMade(_id, msg.sender, msg.value);
    }

    //Allows the owner to withdraw funds if the target is reached.
     
    function withdrawFunds(uint256 _id) external {
        Campaign storage c = campaigns[_id];
        require(msg.sender == c.owner, "Only owner can withdraw");
        require(c.raised >= c.target, "Target not reached");
        require(!c.finalized, "Funds already withdrawn");

        c.finalized = true;
        (bool success, ) = c.owner.call{value: c.raised}("");
        require(success, "Transfer failed");
    }
}