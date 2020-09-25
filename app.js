/*##########################
CONFIGURATION

##########################*/

// -- Step 1: Set up the appropriate configuration 

var Web3 = require('web3')
var EthereumTransaction = require("ethereumjs-tx").Transaction;
// var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli
var url = 'https://ropsten.infura.io/v3/d732c0d1ff85490a807c36c1eead4443' // RED ROPSTEN
var web3 = new Web3(url);

// -- Step 2: Set the sending and receiving addresses for the transaction.
var address1 = '0xbe2bcbdfe8592fbe58e39990aac96483b7af09fa';
var address2 = '0xf300d0e0c73a4aeb94529edcbcc5ab755271e4bc';
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
var rawTransaction = { nonce: 3, to: address2, gasPrice: 20000000, gasLimit: 210000, value: 100000, data: '0x0' }; // , chainId: 1 también vale data: null o  data: '0x'
var rawTransactionOld = {
    nonce: '0x0011',
    gasPrice: '0x1312D00',
    gasLimit: '0x7530',
    to: address2,
    value: '0x7530', data: '0x00'
};
// -- Step 5: View the raw transaction
// rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
//web3.eth.getBalance(address1).then(console.log)
//web3.eth.getBalance(address2).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
Sign the Transaction

##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'dfca7c1e6cde8c3c13db52c22c319cd1a4dbb7ebcb8bd6f492705d75cb3a0ee2';

var privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction, { chain: 'ropsten', hardfork: 'petersburg' });
// console.log(transaction);
transaction.sign(privateKeySenderHex);

/*#########################################
Send the transaction to the network

#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
//web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'));
web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'));