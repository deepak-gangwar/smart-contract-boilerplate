# :v:			Smart Contract Boilerplate

This is a boilerplate to create smart contracts for Ethereum. 
The aim of this boilerplate is to provide a clean folder structure along with 
all the necessary setup to test and deploy those contract. 

Using Solidity to write contracts. <br />
Infura is used to provide node within the ethereum test network to deploy the contract.

## :file_folder: Folder Structure
- The contracts folder contains all the contracts solidity code. <br />
- Test folder contains testing script to test contracts with Moch on local newtwork Ganache <br />
- Compile.js uses solidity compiler to compile all the contracts <br />
- Deploy.js is the deployment script to deploy smart contracts to the newtowk <br />


## :shopping_cart:	 Dependencies
- Web3
- Truffle HD Wallet Provider
- Ganache
- Mocha
- Solc

## :hammer_and_wrench: Installation
- Clone the repository
- Run `npm install`
- To test contracts, run `npm run test`
