# Design Patterns Decisions :pencil:

## Access Control Design Patterns

- `onlyOwner` design pattern used in `sendEther()` and `sendERC20()` functions. These functions do not need to be used by anyone else apart from the contract creator, the owner of the contract.

## Inheritance and Interfaces

- `SmartWallet` contract inherits the OpenZeppelin [`Ownable`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) contract to enable ownership for one owner who is also the deployer of the contract.

## Fail Early and Fail Often

- I have used modifiers and the `require` function to make sure that certain conditions are valid before the logic in the rest of the function starts. Using the `require` function to catch errors before costly mistakes are made.  
