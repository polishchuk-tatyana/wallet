
var abi = [
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": false,
            "internalType": "bytes32",
            "name": "new_pk",
            "type": "bytes32"
        }
        ],
        "name": "ReturnPk",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": false,
            "internalType": "bytes32",
            "name": "pk",
            "type": "bytes32"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "n",
            "type": "uint256"
        }
        ],
        "name": "ShowFounds",
        "type": "event"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "pk",
            "type": "bytes32"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
        ],
        "name": "create_wallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "pk",
            "type": "bytes32"
        },
        {
            "internalType": "bytes32",
            "name": "new_pk",
            "type": "bytes32"
        }
        ],
        "name": "_transfer",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "pk",
            "type": "bytes32"
        }
        ],
        "name": "get_amount",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
    ]

exports.abi = abi