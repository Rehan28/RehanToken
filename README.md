

# RehanToken Hardhat Project

This project showcases a **simple ERC-20 token** using Hardhat, OpenZeppelin, and Node.js for testing and deployment on the Ethereum Sepolia testnet.

You can learn more about Hardhat [here](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3).

---

## Project Overview

This project includes:

* A standard ERC-20 smart contract (`RehanToken.sol`)
* Hardhat configuration for Sepolia testnet deployment
* TypeScript deployment and testing scripts
* Node.js native test runner (`node:test`) examples
* Integration with `viem` for Ethereum interactions

---

## Usage

### Running Tests

To run all tests:

```bash
npx hardhat test
```

You can also run only Solidity or Node.js tests:

```bash
npx hardhat test solidity
npx hardhat test nodejs
```

---

### Deployment to Sepolia

1. Make sure you have some **Sepolia ETH** in your wallet.
2. Add your **private key** and Alchemy RPC URL in a `.env` file:

```env
PRIVATE_KEY=<your-wallet-private-key>
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/<your-api-key>
```

3. Compile the smart contract:

```bash
npx hardhat compile
```

4. Deploy using the Hardhat script:

```bash
npx hardhat run --network sepolia scripts/deploy.ts
```

After deployment, you will see something like:

```
RehanToken deployed to: 0x29f6d19c2add703127137e4ab7c91912d20e7764
```

> This is the **contract address**. Keep it safe for testing and token transfers.

---

### Using the Token

Once deployed, you can:

* **Add token to MetaMask:**

  * Open MetaMask → Add Token → Custom Token → Paste contract address
  * Symbol: `RHT`
  * Decimals: `18`

* **Transfer tokens with a script:**

```ts
const tx = await token.transfer("<recipient-address>", ethers.utils.parseUnits("10", 18));
await tx.wait();
console.log("Transfer complete!");
```

* **Check balance:**

```ts
const balance = await token.balanceOf("<address>");
console.log("Balance:", ethers.utils.formatUnits(balance, 18));
```

---

### GitHub Repository

All code and deployment scripts are available on GitHub:

