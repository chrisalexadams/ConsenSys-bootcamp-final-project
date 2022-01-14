// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title Smart Contract Wallet
/// @author Chris Adams 
/// @notice Contract that allows for storage of native Ether and ERC20 tokens.
/// Inherits from the openzeppelin contract Ownable, allowing for the onlyOwner
/// modifier to be used

contract SmartWallet is Ownable {
 
  ///@dev Initializes the contract and sets deployer as owner

  constructor() Ownable() {}

  /// @dev Allows contract to receive tokens from any ERC20 compliant contract.
  /// @param tokenAddress, an address of an ERC20 token contract
  /// @param amount, amount to be transferred

  function receiveERC20(address tokenAddress, uint amount)
    external
  {

    IERC20 token = IERC20(tokenAddress);
    require(token.balanceOf(msg.sender) >= amount, "Insufficient funds");
    token.transferFrom(msg.sender, address(this), amount);

  }
  
  /// @dev Allows contract to send tokens from any ERC20 compliant contract
  /// @param tokenAddress, an address of an ERC20 token contract
  /// @param recipient, address to receive ERC20 token
  /// @param amount, amount to be transferred

  function sendERC20(address tokenAddress, address recipient, uint amount)
    external
    onlyOwner
  {

    IERC20 token = IERC20(tokenAddress);
    require(token.balanceOf(msg.sender) >= amount, "Insufficient funds");
    token.transfer(recipient, amount);

  }

  /// @dev Allows contract to send Ether

  function sendEther(address payable recipient, uint amount)
  external
  onlyOwner
{

  require(address(this).balance >= amount, "Insufficient funds");
  recipient.transfer(amount);

}
  /// @dev Receives Ether sent to contract

  receive() external payable {}

}
