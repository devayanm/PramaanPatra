#!/bin/bash

# Ensure script starts in the directory it's located
cd "$(dirname "$0")"

# Step 1: Install root dependencies (if any)
npm install

# Step 2: Compile and deploy smart contracts on Goerli testnet
npx hardhat run --network sepolia scripts/deploy.js

# Step 3: Build the frontend
cd client
npm install
npm run build

# Step 4: Prepare server dependencies (optional)
# Uncomment if you need to install server dependencies
# cd ../server
# npm install

# Step 5: Start the Node.js server (optional)
# Uncomment to run the server automatically
# node index.js
