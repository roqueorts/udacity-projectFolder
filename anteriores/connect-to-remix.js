var Web3 = require('web3');

var url = 'HTTP://127.0.0.1:7545';

var web3 = new Web3(url);

/*web3.eth.getTransactionCount(addressHexString, blockNum, function(error, result) {
    
});*/
web3.eth.getTransactionCount('0xe7a93D55EDA288696A4572cD699846570BD1bECe').then(console.log).catch(error => {
    console.log("Error  " + error);
});