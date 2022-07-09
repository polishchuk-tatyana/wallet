// const my_abi = require('./abi')
const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require('web3')

const Shh = require('web3-shh')

const mnemonicPhrase = "quantum jaguar august winner copy rug library near repair jar photo manual poverty fresh bring"

//create provider
provider = new HDWalletProvider({
    mnemonic: mnemonicPhrase,
    providerOrUrl: "https://ropsten.infura.io/v3/548d7ac285e64002af2d4d28ed5024b3",
    shareNonce: true,
    derivationPath: "m/44'/0'/0'/0/0"
  })


const web3 = new Web3(provider)
const shh = new Shh(provider) 

web3.setProvider(provider)
web3.shh.setProvider(provider)

// var contractAddress = '0xfF0d221d14eC6De9fd921Fd2c05c5cC1A071165E';
// contract = new web3.eth.Contract(my_abi.abi, contractAddress)


async function main(key_from, key_to){
    try{
        
        let balance = await get_balance(key_from)

        balance = balance.toString(10)
        
        if(balance > 0){
            console.log('Balance of wallet is', balance)
            // let key_to = await generate_account()

            let transact = await signTransact(key_from, key_to, balance)
            return transact
        }
        else {
            console.log('Balance of wallet is 0')
        }
    }
    catch (e) { 
        console.log('Error', e.message)
    }
}

main("0xf994f51162ee4204142b7f1d0985cbd1596153532b7209b169d35b5500943227", "0x9c8e5805732eb26f4af30c603c05f950f99cd4116699b243336a746342134d80")
// main(key_from, key_to)

async function get_balance(pk){

    try{
        let account_address = await web3.eth.accounts.privateKeyToAccount(pk).address
        let balance = await web3.eth.getBalance(account_address)
        return balance
    }
    catch(e){
        console.log('Error', e.message)
    }
}
 
async function signTransact(key_from, key_to, balance){

    //sign and send transaction

    try{
        let from_ = await web3.eth.accounts.privateKeyToAccount(key_from).address
        let to_ = await web3.eth.accounts.privateKeyToAccount(key_to).address
        var hash_
        // let gasPrice_ = await web3.eth.getGasPrice()
        let gasPrice_ = "20000000000"
        var gas_ = "21000"
        var total = gas_ * gasPrice_

        console.log('Sender - ', from_)
        console.log('Receiver - ', to_)

        await web3.eth.signTransaction({
            from: from_,
            gasPrice: gasPrice_,
            gas: gas_,
            to: to_,
            value: balance - total,
            data: ""
        })

        await web3.eth.sendTransaction({
            from: from_,
            to: to_,
            value: balance - total,
            // gas: gas_,
            // gasPrice: gasPrice_

        })
        .on('transactionHash', function(hash){
            hash_ = hash
            // console.log('This is hash', hash_)
        })
        .on('error', console.error);

        // await web3.eth.getTransactionReceipt(hash_)
        let balance_of_sender = await get_balance(key_from)
        let balance_of_receiver = await get_balance(key_to)
        console.log('Balance of sender is', balance_of_sender)
        console.log('Balance of receiver is', balance_of_receiver)

    }
    catch(e){
        console.log('Error', e.message)
    }

}

// async function generate_account(){
//
//     //create account with private key
//
//     try{
//         let account = await web3.eth.accounts.create(web3.utils.randomHex(32))
//         let account_address = account.address
//         let accounts_ = await web3.eth.accounts._provider.addresses
//         let l = Object.values(accounts_).length
//         accounts_[l] = account_address
//         console.log(account.privateKey)
//         return account.privateKey
//     }
//     catch(e){
//         console.log('Error', e.message)
//     }
// }

module.exports = main