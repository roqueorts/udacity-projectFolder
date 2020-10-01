/*##########################
CONFIGURATION

##########################*/

// -- Step 1: Set up the appropriate configuration 

var Web3 = require('web3')
var EthereumTransaction = require("ethereumjs-tx").Transaction;
//var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli
var url = 'https://ropsten.infura.io/v3/d732c0d1ff85490a807c36c1eead4443' // RED ROPSTEN
var web3 = new Web3(url);

// -- Step 2: Set the sending and receiving addresses for the transaction.
var address1Ropsten = '0xbe2bcbdfe8592fbe58e39990aac96483b7af09fa';
var address2Ropsten = '0xf300d0e0c73a4aeb94529edcbcc5ab755271e4bc';
var address1 = '0x4876101276Eb3057A2DB7ae1cB7c1005bb88f0C1';
var address2 = '0x1f204feF218E1c1c15316a5CCD4e7Da30f2f0Ee6';
//web3.eth.getAccounts().then(accounts => { console.log(accounts);});

// -- Step 3: Check the balances of each address
web3.eth.getBalance(address1Ropsten).then(balance => {
    var count = parseInt(balance, 10) + (20000000 * 21004) - 1; // muestra lo mismo si restas o no el '1' 
    console.log(balance)
});
web3.eth.getBalance(address2Ropsten).then(console.log);
web3.eth.getGasPrice()
    .then(console.log);
web3.eth.getBlockTransactionCount("0xed368704e1c1be2df501875a2c4f19bd97e1b488fd2acf3205c93e06ed2efd90")
    .then(console.log);
web3.eth.getUncle(8788604, 0)
    .then(console.log);
/*
//########################## CREATE A TRANSACTION ##########################

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = { nonce: 0, to: address2, gasPrice: 20000000, gasLimit: 30000, value: 1, data: '0x0' }; // vale data: null o  data: '0x0'


//########################## Sign the Transaction ##########################

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySenderRopsten = 'dfca7c1e6cde8c3c13db52c22c319cd1a4dbb7ebcb8bd6f492705d75cb3a0ee2';
var privateKeySender = '7c2329e20b3d0ec28b93573e64b97eba36f351a269e2e12da1c667aeca804b64';

var privateKeySenderHex = Buffer.from(privateKeySenderRopsten, 'hex');
var transactionRopsten = new EthereumTransaction(rawTransaction, { chain: 'ropsten', hardfork: 'petersburg' });
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

//######################################### Send the transaction to the network #########################################

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'))
/*.on('transactionHash', function (hash) {
    console.log(hash);
})
    .on('receipt', function (receipt) {
        console.log(receipt);
    })
    .on('confirmation', function (confirmationNumber, receipt) {
        console.log(confirmationNumber);
        console.log(receipt);
    })
    .on('error', function (error) {
        console.log(error);
    });*/