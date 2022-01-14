# Design Patterns Decisions :pencil:

## Access Control Design Patterns

- `onlyOwner` design pattern used in `sendEther()` and `sendERC20()` functions. These functions do not need to be used by anyone else apart from the contract creator, the owner of the contract.

## Inheritance and Interfaces

- `SmartWallet` contract inherits the OpenZeppelin `Ownable` contract to enable ownership for one owner who is also the deployer of the contract.
  