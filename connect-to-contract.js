
// Connect a the web3 provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    // console.log('que pasa');
} else {
    // web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/d732c0d1ff85490a807c36c1eead4443"));
}
// console.log('cuentas: ' + web3.eth.accounts[0]);
// Set a default account
web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.getAccounts().then(acc => {
    accounts = acc
    web3.eth.defaultAccount = accounts[0] // Para que funcione hay que conectarse a esa cuenta manualmente con metamask
    console.log(web3.eth.defaultAccount + 'cuenta');
})
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
    ], '0x33D54Ee12c4f25a57Ce05241BB710bB11DB62C4c');
// , {
//     from: '0x14F565aF08EfCeee4111fE21bDdF5d2c1a0E0DE3', // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// }


console.log(myMessage);
myMessage.methods.getMessage().call().then(console.log);
$("#setMessageButton").click(function () {
    //  myMessage.methods.setMessage($("#userInput").val()).call().then(console.log);
    message = $("#userInput").val();
    console.log(message);
    myMessage.methods.setMessage(message).send({ from: web3.eth.defaultAccount });
    // myMessage.methods.setMessage(message, (error, result) => { message = result });
});
