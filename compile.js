const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Contract.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');


// Add the expected JSON formatted input, 
// specifying the language, sources, and outputSelection
const input = {
    language: 'Solidity',
    sources: {
        'Contract.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],            
            },
        },
    },
};

// This compilation will give is the contract in JSON string format
const compiledContract = solc.compile(JSON.stringify(input));


// we want to export the compiled contract module 
// to provide the expected JSON formatted output
// That is why we are using JSON.parse()

// Solidity compiler can compile many files at a time
// We can access all the contracts using contracts property on the JSON object
module.exports = JSON.parse(compiledContract).contracts['Contract.sol'].Contract;
