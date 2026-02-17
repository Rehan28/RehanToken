import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { isAddressEqual } from "viem";

describe("RehanToken (viem)", () => {
  async function deployFixture() {
    const { viem } = await network.connect();
    const [owner, addr1] = await viem.getWalletClients();

    const initialSupply = 1000n;
    const token = await viem.deployContract("RehanToken", [initialSupply]);

    return { token, owner, addr1 };
  }

  it("Should set correct owner", async () => {
    const { token, owner } = await deployFixture();
    const contractOwner = await token.read.owner();
    assert.ok(isAddressEqual(contractOwner, owner.account.address), "Owner mismatch");
  });

  it("Should mint initial supply to owner", async () => {
    const { token, owner } = await deployFixture();
    const balance = await token.read.balanceOf([owner.account.address]);
    const expected = 1000n * 10n ** 18n;
    assert.equal(balance, expected);
  });

  it("Owner can mint", async () => {
    const { token, addr1 } = await deployFixture();
    await token.write.mint([addr1.account.address, 100n]);
    const balance = await token.read.balanceOf([addr1.account.address]);
    assert.equal(balance, 100n * 10n ** 18n);
  });

  it("Transfer works", async () => {
    const { token, addr1 } = await deployFixture();
    await token.write.transfer([addr1.account.address, 100n * 10n ** 18n]);
    const balance = await token.read.balanceOf([addr1.account.address]);
    assert.equal(balance, 100n * 10n ** 18n);
  });

  it("Burn works", async () => {
    const { token, owner } = await deployFixture();
    await token.write.burn([100n]); // burns 100 tokens
    const balance = await token.read.balanceOf([owner.account.address]);
    assert.equal(balance, 900n * 10n ** 18n);
  });
});
