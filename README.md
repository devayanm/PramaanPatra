<div align="center">

# PramaanPatra - Decentralized Certificate Management System

![PramaanPatra Logo](link-to-logo.png)

[![GitHub last commit](https://img.shields.io/github/last-commit/devayanm/PramaanPatra)](https://github.com/devayanm/PramaanPatra)
[![GitHub issues](https://img.shields.io/github/issues/devayanm/PramaanPatra)](https://github.com/devayanm/PramaanPatra/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/devayanm/PramaanPatra)](https://github.com/devayanm/PramaanPatra/pulls)

</div>

## Introduction

**PramaanPatra** is a decentralized certificate management system built on blockchain technology, aiming to securely generate, validate, and store vital certificates. From birth certificates to graduation certificates and land deed certificates, PramaanPatra ensures transparency, immutability, and efficiency in traditional certificate management.

## Features

<details>
  <summary><strong>Click to expand</strong></summary>

- **Blockchain Security:**
  - Utilizes Ethereum blockchain for smart contracts.
  - Solidity for smart contract development.
  - Ether.js for connecting smart contracts with the frontend.
  - Transparent and secure transactions on the Ethereum mainnet.

- **Dynamic Certificate Records:**
  - Records dynamic and immutable histories of certificates.
  - Enhances trust and reliability by capturing the entire lifecycle of each document.

- **User Authentication and Management:**
  - Secure user registration and login system.
  - Database administrator capability to add and remove users manually.

- **Certificate Generation:**
  - Dynamic form creation for different certificate types.
  - Transaction phase facilitated through Metamask or other web3 providers.
  - Certificates generated in PDF format with QR code for verification.

- **Advantages Over Traditional Certificates:**
  - Increased trust and security with transparent transactions on the Ethereum mainnet.
  - Automation reduces administrative workload and minimizes human errors.
  - Easy verification using transaction details.
  - Immune to fraud access with durable and unmodifiable certificate details.

</details>

## System Architecture

<details>
  <summary><strong>Click to expand</strong></summary>

### Blockchain Infrastructure

- Ethereum blockchain for smart contracts.
- Solidity for smart contract development.
- Ether.js to connect smart contracts with the frontend.
- Hardhat for Ethereum development environment (development purposes).
- Metamask or other web3 providers for transaction handling.

### Frontend

- Developed using React.js for a responsive user interface.
- Redux.js for state management.
- Material UI for a modern and user-friendly design.
- Metamask or other web3 providers for transaction authentication.

### Backend

- Hardhat for Ethereum development environment (development purposes).
- MongoDB as the database for user management.

</details>

## Getting Started

<details>
  <summary><strong>Click to expand</strong></summary>

### Ethereum Smart Contracts

1. Install dependencies: `npm install`
2. Run tests: `npx hardhat test`
3. Report gas usage: `REPORT_GAS=true npx hardhat test`
4. Start local Ethereum node: `npx hardhat node`
5. Deploy smart contracts: `npx hardhat run scripts/deploy.js`

### Frontend

1. Change to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Start the React development server: `npm start`

### Backend

1. Change to the server directory: `cd server`
2. Run the Node.js server: `node index.js`

### Testnet

- Start a local Ethereum test node: `npx hardhat node`

### Blockchain Deployment

- Deploy on a local Ethereum network: `npx hardhat run --network localhost scripts/deploy.js`

### MongoDB

1. Switch to the "sih" database: `use sih`
2. Retrieve all documents from the "users" collection: `db.users.find({})`
3. Delete all documents from the "users" collection: `db.users.deleteMany({})`

</details>

## Testing and Security

To ensure the reliability and security of PramaanPatra, rigorous testing is conducted across different components:

- **Smart Contracts Testing:**
  - Run unit tests using Hardhat: `npx hardhat test`

- **Frontend Testing:**
  - Execute React component tests: `npm test`

- **Security Audits:**
  - Regular security audits are conducted to identify and mitigate vulnerabilities.

## Documentation

Comprehensive documentation is available to guide users, administrators, and developers through various aspects of the PramaanPatra project. Find detailed information in the [Documentation](docs/) directory:

- [User Manual](docs/user-manual.md)
- [Administrator Guide](docs/admin-guide.md)
- [Developer Documentation](docs/developer-docs.md)

## Contributing

Contributions to PramaanPatra are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

For more details, check out the [Contribution Guidelines](CONTRIBUTING.md).

## Contributors

<div align="center">

[![Devayan Mandal](https://avatars.githubusercontent.com/u/devayanm?s=100)](https://github.com/devayanm)

**Devayan Mandal**
- GitHub: [@devayanm](https://github.com/devayanm)
- Contribution: Frontend development, UI/UX design

[![Ashesh Mandal](https://avatars.githubusercontent.com/u/asheshmandal2003?s=100)](https://github.com/asheshmandal2003)

**Ashesh Mandal**
- GitHub: [@ashesh](https://github.com/asheshmandal2003)
- Contribution: Smart contract development, Blockchain integration

<!-- [![Asish Das](https://avatars.githubusercontent.com/u/your-user-id?s=100)](https://github.com/asish)

**Asish Das**
- GitHub: [@asish](https://github.com/asish)
- Contribution: Backend development, Database management

[![Dibbendu Malakar](https://avatars.githubusercontent.com/u/your-user-id?s=100)](https://github.com/dibbendu)

**Dibbendu Malakar**
- GitHub: [@dibbendu](https://github.com/dibbendu)
- Contribution: UI/UX design

[![Ritu Shaw](https://avatars.githubusercontent.com/u/your-user-id?s=100)](https://github.com/ritu)

**Ritu Shaw**
- GitHub: [@ritu](https://github.com/ritu)
- Contribution: UI/UX design

[![Sayantika Chatterjee](https://avatars.githubusercontent.com/u/your-user-id?s=100)](https://github.com/sayantika)

**Sayantika Chatterjee**
- GitHub: [@sayantika](https://github.com/sayantika)
- Contribution: UI/UX design -->

</div>


## License

This project is licensed under the [CC BY-NC-ND 4.0 License](LICENSE.md) - see the [LICENSE.txt](LICENSE.md) file for details.


<div align="center">

---

**Feel free to explore and contribute to the project!**

</div>
