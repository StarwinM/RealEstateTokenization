// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RealEstateToken is ERC20 {
    address public crowdfundingContract;

    constructor() ERC20("Real Estate Reward", "RER") {
        crowdfundingContract = msg.sender;
    }

    
     // Minting function that can only be called by the main contract.
    
    function mint(address to, uint256 amount) external {
        require(msg.sender == crowdfundingContract, "Only Crowdfunding can mint");
        _mint(to, amount);
    }
}
