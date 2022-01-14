const { assert } = require("chai");

describe("SmartWallet", function() {

  let smartwallet, smartwalletAddress, owner, ownerAddress, s1, a1;

  beforeEach(async () => {

    const SmartWallet = await ethers.getContractFactory("SmartWallet");
    smartwallet = await SmartWallet.deploy();
    await smartwallet.deployed()
    smartwalletAddress = smartwallet.address;

    owner = ethers.provider.getSigner(0);
    ownerAddress = await owner.getAddress();
    s1 = ethers.provider.getSigner(1);
    a1 = await s1.getAddress();
  });

  describe('Before any funds are transferred', () => {
    it('should contain a balance of zero Ether', async() => {
      let balance = await ethers.provider.getBalance(smartwalletAddress);
      assert.equal(balance.toString(), '0');
    });

    it('should have have the contract deployer as the owner', async () => {
      let owner = await smartwallet.owner();
      assert.equal(owner.toString(), ownerAddress.toString());
    });
  });

  describe('Attempting to transfer an ERC20 token in and out', () => {
    let ERC20Test, ERC20TestAddress
    beforeEach(async() =>{
      const ERC20TestFactory = await ethers.getContractFactory('ERC20Test');
      ERC20Test = await ERC20TestFactory.deploy();
      await ERC20Test.deployed();

      await ERC20Test.approve(smartwalletAddress, 1000);
      ERC20TestAddress = ERC20Test.address;
    });

    it('should receive ERC20 tokens', async () => {
      await smartwallet.receiveERC20(ERC20TestAddress, 250);
      assert.equal(
        await ERC20Test.balanceOf(smartwalletAddress),
        250
      );
    });

    it('should not allow anyone but the owner to send', async() => {
      let ex;
      try {
        await smartwalletAddress.connect(s1).sendERC20(ERC20TestAddress, a1, 250);
      } catch (_ex) {
        ex = _ex
      }
      assert(ex, 'Should revert transaction!');
    });

     it('should have a contract balance of 0 ERC20 tokens', async () => {
      assert.equal(
        await ERC20Test.balanceOf(smartwalletAddress), 0
      );
    });
  });
});