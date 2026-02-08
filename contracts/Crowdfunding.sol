// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./RealEstateToken.sol";

contract Crowdfunding {
    struct Campaign {
        string title;
        string location;
        string propertyType;
        string description;
        address payable owner;
        uint256 totalValue;
        uint256 tokenSupply;
        uint256 tokensAvailable;
        uint256 raisedAmount;
        uint256 minInvestment;
        uint256 deadline;
        bool fullyFunded;
        bool finalized;
    }

    RealEstateToken public rewardToken;
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;
    mapping(uint256 => mapping(address => uint256)) public contributions;

    event CampaignCreated(uint256 id, string title, uint256 totalValue, uint256 deadline);
    event ContributionMade(uint256 id, address contributor, uint256 amount);
    event FundsWithdrawn(uint256 id, uint256 amount);

    constructor() {
        rewardToken = new RealEstateToken();
    }

    function tokenizeProperty(
        string memory _title,
        string memory _location,
        string memory _propertyType,
        string memory _description,
        uint256 _totalValue,
        uint256 _tokenSupply,
        uint256 _minInvestment,
        uint256 _duration
    ) external {
        require(_totalValue > 0, "Total value must be greater than 0");
        require(_tokenSupply > 0, "Token supply must be greater than 0");
        require(_minInvestment > 0, "Min investment must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");

        uint256 deadline = block.timestamp + _duration;

        campaigns[campaignCount] = Campaign({
            title: _title,
            location: _location,
            propertyType: _propertyType,
            description: _description,
            owner: payable(msg.sender),
            totalValue: _totalValue,
            tokenSupply: _tokenSupply,
            tokensAvailable: _tokenSupply,
            raisedAmount: 0,
            minInvestment: _minInvestment,
            deadline: deadline,
            fullyFunded: false,
            finalized: false
        });

        emit CampaignCreated(campaignCount, _title, _totalValue, deadline);
        campaignCount++;
    }

    function createCampaign(string memory _title, uint256 _target, uint256 _duration) external {
        require(_target > 0, "Target must be greater than 0");
        uint256 deadline = block.timestamp + _duration;

        campaigns[campaignCount] = Campaign({
            title: _title,
            location: "",
            propertyType: "Residential",
            description: "",
            owner: payable(msg.sender),
            totalValue: _target,
            tokenSupply: 100,
            tokensAvailable: 100,
            raisedAmount: 0,
            minInvestment: 0.01 ether,
            deadline: deadline,
            fullyFunded: false,
            finalized: false
        });

        emit CampaignCreated(campaignCount, _title, _target, deadline);
        campaignCount++;
    }

    function invest(uint256 _id) external payable {
        Campaign storage c = campaigns[_id];
        require(block.timestamp < c.deadline, "Campaign has ended");
        require(!c.fullyFunded, "Campaign is fully funded");
        require(msg.value >= c.minInvestment, "Below minimum investment");
        require(msg.value > 0, "Investment must be greater than 0");

        c.raisedAmount += msg.value;
        contributions[_id][msg.sender] += msg.value;

        uint256 tokenAmount = (msg.value * c.tokenSupply) / c.totalValue;
        if (tokenAmount > c.tokensAvailable) {
            tokenAmount = c.tokensAvailable;
        }
        c.tokensAvailable -= tokenAmount;

        if (c.raisedAmount >= c.totalValue) {
            c.fullyFunded = true;
        }

        uint256 rewardAmount = msg.value * 100;
        rewardToken.mint(msg.sender, rewardAmount);

        emit ContributionMade(_id, msg.sender, msg.value);
    }

    function contribute(uint256 _id) external payable {
        Campaign storage c = campaigns[_id];
        require(block.timestamp < c.deadline, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than 0");

        c.raisedAmount += msg.value;
        contributions[_id][msg.sender] += msg.value;

        if (c.raisedAmount >= c.totalValue) {
            c.fullyFunded = true;
        }

        uint256 rewardAmount = msg.value * 100;
        rewardToken.mint(msg.sender, rewardAmount);

        emit ContributionMade(_id, msg.sender, msg.value);
    }

    function withdrawFunds(uint256 _id) external {
        Campaign storage c = campaigns[_id];
        require(msg.sender == c.owner, "Only owner can withdraw");
        require(c.raisedAmount >= c.totalValue, "Target not reached");
        require(!c.finalized, "Funds already withdrawn");

        c.finalized = true;
        emit FundsWithdrawn(_id, c.raisedAmount);

        (bool success, ) = c.owner.call{value: c.raisedAmount}("");
        require(success, "Transfer failed");
    }

    function getPropertyCount() external view returns (uint256) {
        return campaignCount;
    }

    function getPropertyInfo(uint256 _id) external view returns (
        string memory name,
        string memory location,
        string memory propertyType,
        string memory description,
        address owner
    ) {
        Campaign storage c = campaigns[_id];
        return (
            c.title,
            c.location,
            c.propertyType,
            c.description,
            c.owner
        );
    }

    function getPropertyFinancials(uint256 _id) external view returns (
        uint256 totalValue,
        uint256 tokenSupply,
        uint256 tokensAvailable,
        uint256 raisedAmount,
        uint256 minInvestment,
        uint256 deadline
    ) {
        Campaign storage c = campaigns[_id];
        return (
            c.totalValue,
            c.tokenSupply,
            c.tokensAvailable,
            c.raisedAmount,
            c.minInvestment,
            c.deadline
        );
    }

    function getPropertyStatus(uint256 _id) external view returns (
        bool fullyFunded,
        bool ended,
        bool finalized
    ) {
        Campaign storage c = campaigns[_id];
        return (
            c.fullyFunded,
            block.timestamp >= c.deadline || c.finalized,
            c.finalized
        );
    }

    function getContribution(uint256 _id, address _user) external view returns (uint256) {
        return contributions[_id][_user];
    }
}
