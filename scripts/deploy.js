const main = async () => {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const SmartWallet = await ethers.getContractFactory("SmartWallet");
    const smartwallet = await SmartWallet.deploy();
  
    console.log("SmartWallet address:", smartwallet.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });  