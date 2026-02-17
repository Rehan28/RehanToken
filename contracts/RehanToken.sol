// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RehanToken is ERC20, Ownable {

    constructor(uint256 initialSupply)
        ERC20("RehanToken", "RHT")
        Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    // Mint new tokens to a specified address (only owner)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    // Burn tokens from the caller's balance
    function burn(uint256 amount) public {
        _burn(msg.sender, amount * 10 ** decimals());
    }
}
