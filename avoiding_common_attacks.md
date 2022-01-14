# Avoid Common Attacks :no_entry_sign:

## SWC-103 → ([Floating Pragma](https://swcregistry.io/docs/SWC-103))

Specific compiler pragma `0.8.4` used in the contracts to avoid compiler problems.

## SWC-105 → ([Unprotected Ether Withdrawal](https://swcregistry.io/docs/SWC-105))

Function `sendERC20` and `sendEther` is protected with OpenZeppelin `Ownable`'s `onlyOwner` modifier.

## SWC-123 → ([Requirement Violation](https://swcregistry.io/docs/SWC-123))

- The use of `require` in the `sendERC20` and `sendEther` functions before the `transfer` function is called.

- The use of `require` in the `receiveERC20` function before the `transferFrom` function is called.
