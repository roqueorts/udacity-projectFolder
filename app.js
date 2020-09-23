var Web3 = require('web3')

var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli

var web3 = new Web3(url);
// '0x715666f0C97e9AD13843AC363F15869E8206E864'
web3.eth.getAccounts().then(accounts => {
    console.log(accounts[0]);
    web3.eth.getBalance(accounts[0]).then(balance => console.log(balance));

});