// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title ERC20Test
/// @dev Tests for the ERC20 token standard, do not deploy

contract ERC20Test is ERC20 {

  constructor() ERC20('Test Token', 'TT') {
    _mint(msg.sender, 1000);
  }
}