![alt text](src/images/SCW.png)

# Project Description

Smart Contract Wallet is a wallet as a deployed smart contract that can hold Ethereum and any ERC20 token. It can also send and receive Ethereum and ERC20 tokens.

## Directory Structure :scroll:

- `contracts`: Smart contracts source code
- `public` : Create React App public folder
- `src`: The frontend source code
  - `src/web3` : Custom Web3Modal login logic
- `scripts` : Scripts for deployment
- `test` : Unit testing

## Installing :wrench:

- Clone the repository:

```sh
git clone https://github.com/chrisalexadams/blockchain-developer-bootcamp-final-project
cd blockchain-developer-bootcamp-final-project
```

- make a copy of `.env.example` and rename it to `.env`
- fill in your credentials in `.env`

- ```sh
  npm install
  ```
  
- ```sh
  npx hardhat compile
  ```

## Local Deployment and Testing

### 1. In a terminal, type

 ```sh
  npx hardhat node
  ```

- You should see the following output:

```sh
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.
```

- Then a list of 20 accounts will be displayed with 10000 ETH each.

### 2. Open another terminal and type

```sh
npx hardhat run scripts/deploy.js --network localhost
```

- You should see the following output:

```sh
Deploying contracts with the account: 0x...
Account balance: 10000000000000000000000
Wallet address: 0x...
```

### 3. Open another terminal and type

```sh
npx hardhat test
```

---

## Deployment to Testnet

In order to use the contract as your wallet, you (as the owner) need to deploy it to the testnet.  

- To deploy to your choice of Testnet Network, you can use the following command:

  ```sh
  npx hardhat run scripts/deploy.js --network <testnet of choice>
  ```

- To verify the source code, run this in the terminal:

  ```sh
  npx hardhat verify --network <testnet of choice> DEPLOYED_CONTRACT_ADDRESS
  ```

The contract is deployed by me (the owner) on the [Rinkeby Testnet](https://rinkeby.etherscan.io/address/0x629977b1862125c779b149de907a0198793f9780#code) with the contract source code verified engaging in all functions:

- `receiveERC20`
- `sendERC20`
- `sendEther`
- `receive()`

---

## Tools

- [Metamask Wallet](https://metamask.io/)
- [Hardhat](https://hardhat.org/) - Development framework and local blockchain
- [React](https://reactjs.org/) - Frontend framework
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/) - Ethereum smart contract language
 development
- [Ethers](https://web3js.readthedocs.io/en/v1.3.0/) - Library to interact with Ethereum nodes
- [JavaScript](https://www.javascript.com/) - Front end and unit testing
- [Infura](https://infura.io/) - Connection to Ethereum
- [Open Zeppelin](https://openzeppelin.com/) - Smart contract libraries and interfaces

---

### ENS Address [chrisa.eth](https://app.ens.domains/name/chrisa.eth/details)
