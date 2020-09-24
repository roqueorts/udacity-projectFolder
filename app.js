/*##########################
CONFIGURATION

##########################*/

// -- Step 1: Set up the appropriate configuration 

var Web3 = require('web3')
var EthereumTransaction = require("ethereumjs-tx").Transaction;
var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli
var web3 = new Web3(url);

// -- Step 2: Set the sending and receiving addresses for the transaction.
var address1 = '0xe690527730905499805FAD82569d8e2a13413A0f';
var address2 = '0xe90479ec6Fc4417dD77863Cc19d1BFcfE60CE6d0';
/*web3.eth.getAccounts().then(accounts => {
    console.log(accounts);
});*/
//web3.eth.getBalance('0xe690527730905499805FAD82569d8e2a13413A0f').then(balance => console.log(balance));

// -- Step 3: Check the balances of each address
web3.eth.getBalance(address1).then(console.log);
web3.eth.getBalance(address2).then(console.log);

/*##########################
CREATE A TRANSACTION

##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = { nonce: 1, to: address2, gasPrice: 20000000, gasLimit: 30000, value: 1000000, data: '0x0' }; // también vale data: null

// -- Step 5: View the raw transaction
// rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(address1).then(console.log)
web3.eth.getBalance(address2).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
Sign the Transaction

##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'be1938030cd20876de68054bf32634b0e4659851b5bcbe41073e0b204cdb6dd5';
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

/*#########################################
Send the transaction to the network

#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);