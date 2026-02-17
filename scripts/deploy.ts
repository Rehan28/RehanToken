import { network } from "hardhat";

async function main() {
  const { viem } = await network.connect("sepolia"); 
  const [deployer] = await viem.getWalletClients();

  console.log("Deploying with account:", deployer.account.address);

  const initialSupply = 1000n;
  const token = await viem.deployContract("RehanToken", [initialSupply]);
  console.log("RehanToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
