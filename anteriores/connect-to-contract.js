
// Connect a the web3 provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

// Set a default account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Get the contract address.
// @param CONTRACT - ABI 
var myMessage = new web3.eth.Contract(
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "x",
                    "type": "string"
                }
            ],
            "name": "setMessage",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getMessage",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ], '0xC5643D0b9C282cBdEE9BC8100B3c5Bb1200C72d3');

// Get the contract abi
// var myMessage = RemixContract.at('0xC5643D0b9C282cBdEE9BC8100B3c5Bb1200C72d3');

console.log(myMessage);
myMessage.methods.getMessage().call().then(console.log);