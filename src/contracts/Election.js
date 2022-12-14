{
    "contractName": "Election",
        "abi": [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "name": "addcandidate",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "votecount",
                        "type": "uint256"
                    }
                ],
                "name": "electionupdated",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "candidates",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "votecount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "candidatesCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "votedornot",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "name": "addCandidate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_candidateId",
                        "type": "uint256"
                    }
                ],
                "name": "Vote",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
            "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"addcandidate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"votecount\",\"type\":\"uint256\"}],\"name\":\"electionupdated\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_candidateId\",\"type\":\"uint256\"}],\"name\":\"Vote\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"addCandidate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"candidates\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"votecount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"candidatesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"votedornot\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/zakie/project-sr/election-ku/contracts/Election.sol\":\"Election\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/zakie/project-sr/election-ku/contracts/Election.sol\":{\"keccak256\":\"0x5485ab66c992d1cdf5e291917ecf792ae59eb74c9e131767a6996080ce890283\",\"urls\":[\"bzz-raw://9e84dade5377cf96aaf8eac5259215fb8d13bab7b207a0795d8689f38ecfb651\",\"dweb:/ipfs/QmNuWGdKDyaWH7n92F1TLCdxRBR5he5v2tprN3hATernUf\"]}},\"version\":1}",
                "bytecode": "0x608060405234801561001057600080fd5b5061084c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631bc570221461005c5780632d35a8a2146100b85780633477ee2e146100d6578063462e91ec1461018b578063dcd6a5cd14610246575b600080fd5b61009e6004803603602081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610274565b604051808215151515815260200191505060405180910390f35b6100c0610294565b6040518082815260200191505060405180910390f35b610102600480360360208110156100ec57600080fd5b810190808035906020019092919050505061029a565b6040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561014e578082015181840152602081019050610133565b50505050905090810190601f16801561017b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610244600480360360208110156101a157600080fd5b81019080803590602001906401000000008111156101be57600080fd5b8201836020820111156101d057600080fd5b803590602001918460018302840111640100000000831117156101f257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061035c565b005b6102726004803603602081101561025c57600080fd5b81019080803590602001909291905050506104a5565b005b60026020528060005260406000206000915054906101000a900460ff1681565b60005481565b6001602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561034c5780601f106103215761010080835404028352916020019161034c565b820191906000526020600020905b81548152906001019060200180831161032f57829003601f168201915b5050505050908060020154905083565b600080815480929190600101919050555060405180606001604052806000548152602001828152602001600081525060016000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906103c5929190610772565b50604082015181600201559050507f8305abd9a2aefcfb7b426d999ed79e3094e1b489d4acdd65fc5d078203ba67d0600160008054815260200190815260200160002060010160405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50509250505060405180910390a150565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610565576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6b616d752074656c6168206d656d696c6968000000000000000000000000000081525060200191505060405180910390fd5b6000600160008381526020019081526020016000206000015411801561058d57506000548111155b6105ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f696420746964616b20646974656d756b616e000000000000000000000000000081525060200191505060405180910390fd5b6001806000838152602001908152602001600020600201600082825401925050819055506001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f3c841f91385f410e6f12269c9a0c0eb656e360f1e2d6f91144cfd51a10a2a31881600160008481526020019081526020016000206001016001600085815260200190815260200160002060020154604051808481526020018060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561075f5780601f106107345761010080835404028352916020019161075f565b820191906000526020600020905b81548152906001019060200180831161074257829003601f168201915b505094505050505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107b357805160ff19168380011785556107e1565b828001600101855582156107e1579182015b828111156107e05782518255916020019190600101906107c5565b5b5090506107ee91906107f2565b5090565b61081491905b808211156108105760008160009055506001016107f8565b5090565b9056fea265627a7a723158203f0e58f2a24327066354c69f78b023313b12886e139b7ed8783d6517d11b87ff64736f6c63430005100032",
                    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80631bc570221461005c5780632d35a8a2146100b85780633477ee2e146100d6578063462e91ec1461018b578063dcd6a5cd14610246575b600080fd5b61009e6004803603602081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610274565b604051808215151515815260200191505060405180910390f35b6100c0610294565b6040518082815260200191505060405180910390f35b610102600480360360208110156100ec57600080fd5b810190808035906020019092919050505061029a565b6040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561014e578082015181840152602081019050610133565b50505050905090810190601f16801561017b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610244600480360360208110156101a157600080fd5b81019080803590602001906401000000008111156101be57600080fd5b8201836020820111156101d057600080fd5b803590602001918460018302840111640100000000831117156101f257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061035c565b005b6102726004803603602081101561025c57600080fd5b81019080803590602001909291905050506104a5565b005b60026020528060005260406000206000915054906101000a900460ff1681565b60005481565b6001602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561034c5780601f106103215761010080835404028352916020019161034c565b820191906000526020600020905b81548152906001019060200180831161032f57829003601f168201915b5050505050908060020154905083565b600080815480929190600101919050555060405180606001604052806000548152602001828152602001600081525060016000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906103c5929190610772565b50604082015181600201559050507f8305abd9a2aefcfb7b426d999ed79e3094e1b489d4acdd65fc5d078203ba67d0600160008054815260200190815260200160002060010160405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50509250505060405180910390a150565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610565576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6b616d752074656c6168206d656d696c6968000000000000000000000000000081525060200191505060405180910390fd5b6000600160008381526020019081526020016000206000015411801561058d57506000548111155b6105ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f696420746964616b20646974656d756b616e000000000000000000000000000081525060200191505060405180910390fd5b6001806000838152602001908152602001600020600201600082825401925050819055506001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f3c841f91385f410e6f12269c9a0c0eb656e360f1e2d6f91144cfd51a10a2a31881600160008481526020019081526020016000206001016001600085815260200190815260200160002060020154604051808481526020018060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561075f5780601f106107345761010080835404028352916020019161075f565b820191906000526020600020905b81548152906001019060200180831161074257829003601f168201915b505094505050505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107b357805160ff19168380011785556107e1565b828001600101855582156107e1579182015b828111156107e05782518255916020019190600101906107c5565b5b5090506107ee91906107f2565b5090565b61081491905b808211156108105760008160009055506001016107f8565b5090565b9056fea265627a7a723158203f0e58f2a24327066354c69f78b023313b12886e139b7ed8783d6517d11b87ff64736f6c63430005100032",
                        "sourceMap": "66:1366:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:1366:0;;;;;;;",
                            "deployedSourceMap": "66:1366:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:1366:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;276:42;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;276:42:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;187:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;223:47;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;223:47:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;223:47:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;559:220;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;559:220:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;559:220:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;559:220:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;559:220:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;559:220:0;;;;;;;;;;;;;;;:::i;:::-;;785:645;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;785:645:0;;;;;;;;;;;;;;;;;:::i;:::-;;276:42;;;;;;;;;;;;;;;;;;;;;;:::o;187:30::-;;;;:::o;223:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;559:220::-;618:15;;:17;;;;;;;;;;;;;675:35;;;;;;;;685:15;;675:35;;;;702:4;675:35;;;;708:1;675:35;;;645:10;:27;656:15;;645:27;;;;;;;;;;;:65;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;726:46;739:10;:27;750:15;;739:27;;;;;;;;;;;:32;;726:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;559:220;:::o;785:645::-;888:10;:22;899:10;888:22;;;;;;;;;;;;;;;;;;;;;;;;;887:23;879:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1050:1;1020:10;:24;1031:12;1020:24;;;;;;;;;;;:27;;;:31;:66;;;;;1071:15;;1055:12;:31;;1020:66;999:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:1;1168:10;:24;1179:12;1168:24;;;;;;;;;;;:34;;;:39;;;;;;;;;;;1262:4;1237:10;:22;1248:10;1237:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1281:142;1310:12;1336:10;:24;1347:12;1336:24;;;;;;;;;;;:29;;1379:10;:24;1390:12;1379:24;;;;;;;;;;;:34;;;1281:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;785:645;:::o;66:1366::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
                                "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Election {\n    struct Candidate {\n        uint256 id;\n        string name;\n        uint256 votecount;\n    }\n    uint256 public candidatesCount;\n    mapping(uint256 => Candidate) public candidates;\n    mapping(address => bool) public votedornot;\n\n    event electionupdated(uint256 id, string name, uint256 votecount);\n    event addcandidate(string name);\n\n    // constructor() public {\n    //     addCandidate(\"joko widodo\");\n    //     addCandidate(\"prabowo subianto\");\n    // }\n\n    function addCandidate(string memory name) public {\n        candidatesCount++;\n        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);\n\n        emit addcandidate(candidates[candidatesCount].name);\n    }\n\n    function Vote(uint256 _candidateId) public {\n        //the person has not voted again\n        require(!votedornot[msg.sender], \"kamu telah memilih\");\n        //the id that the person has input is available\n        require(\n            candidates[_candidateId].id > 0 && _candidateId <= candidatesCount,\n            \"id tidak ditemukan\"\n        );\n        //pemilih bertambah\n        candidates[_candidateId].votecount += 1;\n        //bool true\n        votedornot[msg.sender] = true;\n        emit electionupdated(\n            _candidateId,\n            candidates[_candidateId].name,\n            candidates[_candidateId].votecount\n        );\n    }\n}\n",
                                    "sourcePath": "/home/zakie/project-sr/election-ku/contracts/Election.sol",
                                        "ast": {
        "absolutePath": "/home/zakie/project-sr/election-ku/contracts/Election.sol",
            "exportedSymbols": {
            "Election": [
                112
            ]
        },
        "id": 113,
            "nodeType": "SourceUnit",
                "nodes": [
                    {
                        "id": 1,
                        "literals": [
                            "solidity",
                            ">=",
                            "0.4",
                            ".22",
                            "<",
                            "0.9",
                            ".0"
                        ],
                        "nodeType": "PragmaDirective",
                        "src": "32:32:0"
                    },
                    {
                        "baseContracts": [],
                        "contractDependencies": [],
                        "contractKind": "contract",
                        "documentation": null,
                        "fullyImplemented": true,
                        "id": 112,
                        "linearizedBaseContracts": [
                            112
                        ],
                        "name": "Election",
                        "nodeType": "ContractDefinition",
                        "nodes": [
                            {
                                "canonicalName": "Election.Candidate",
                                "id": 8,
                                "members": [
                                    {
                                        "constant": false,
                                        "id": 3,
                                        "name": "id",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 8,
                                        "src": "117:10:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 2,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "117:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 5,
                                        "name": "name",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 8,
                                        "src": "137:11:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        },
                                        "typeName": {
                                            "id": 4,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "137:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 7,
                                        "name": "votecount",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 8,
                                        "src": "158:17:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 6,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "158:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "name": "Candidate",
                                "nodeType": "StructDefinition",
                                "scope": 112,
                                "src": "90:92:0",
                                "visibility": "public"
                            },
                            {
                                "constant": false,
                                "id": 10,
                                "name": "candidatesCount",
                                "nodeType": "VariableDeclaration",
                                "scope": 112,
                                "src": "187:30:0",
                                "stateVariable": true,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 9,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "187:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "public"
                            },
                            {
                                "constant": false,
                                "id": 14,
                                "name": "candidates",
                                "nodeType": "VariableDeclaration",
                                "scope": 112,
                                "src": "223:47:0",
                                "stateVariable": true,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                    "typeString": "mapping(uint256 => struct Election.Candidate)"
                                },
                                "typeName": {
                                    "id": 13,
                                    "keyType": {
                                        "id": 11,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "231:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "223:29:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                        "typeString": "mapping(uint256 => struct Election.Candidate)"
                                    },
                                    "valueType": {
                                        "contractScope": null,
                                        "id": 12,
                                        "name": "Candidate",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 8,
                                        "src": "242:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Candidate_$8_storage_ptr",
                                            "typeString": "struct Election.Candidate"
                                        }
                                    }
                                },
                                "value": null,
                                "visibility": "public"
                            },
                            {
                                "constant": false,
                                "id": 18,
                                "name": "votedornot",
                                "nodeType": "VariableDeclaration",
                                "scope": 112,
                                "src": "276:42:0",
                                "stateVariable": true,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                },
                                "typeName": {
                                    "id": 17,
                                    "keyType": {
                                        "id": 15,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "284:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "276:24:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                        "typeString": "mapping(address => bool)"
                                    },
                                    "valueType": {
                                        "id": 16,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "295:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    }
                                },
                                "value": null,
                                "visibility": "public"
                            },
                            {
                                "anonymous": false,
                                "documentation": null,
                                "id": 26,
                                "name": "electionupdated",
                                "nodeType": "EventDefinition",
                                "parameters": {
                                    "id": 25,
                                    "nodeType": "ParameterList",
                                    "parameters": [
                                        {
                                            "constant": false,
                                            "id": 20,
                                            "indexed": false,
                                            "name": "id",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26,
                                            "src": "347:10:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 19,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "347:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 22,
                                            "indexed": false,
                                            "name": "name",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26,
                                            "src": "359:11:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 21,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "359:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 24,
                                            "indexed": false,
                                            "name": "votecount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26,
                                            "src": "372:17:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "372:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "src": "346:44:0"
                                },
                                "src": "325:66:0"
                            },
                            {
                                "anonymous": false,
                                "documentation": null,
                                "id": 30,
                                "name": "addcandidate",
                                "nodeType": "EventDefinition",
                                "parameters": {
                                    "id": 29,
                                    "nodeType": "ParameterList",
                                    "parameters": [
                                        {
                                            "constant": false,
                                            "id": 28,
                                            "indexed": false,
                                            "name": "name",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 30,
                                            "src": "415:11:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 27,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "415:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "src": "414:13:0"
                                },
                                "src": "396:32:0"
                            },
                            {
                                "body": {
                                    "id": 55,
                                    "nodeType": "Block",
                                    "src": "608:171:0",
                                    "statements": [
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 36,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "++",
                                                "prefix": false,
                                                "src": "618:17:0",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "id": 35,
                                                    "name": "candidatesCount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10,
                                                    "src": "618:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 37,
                                            "nodeType": "ExpressionStatement",
                                            "src": "618:17:0"
                                        },
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 46,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 38,
                                                        "name": "candidates",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14,
                                                        "src": "645:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                            "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                        }
                                                    },
                                                    "id": 40,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 39,
                                                        "name": "candidatesCount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10,
                                                        "src": "656:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "645:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                        "typeString": "struct Election.Candidate storage ref"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 42,
                                                            "name": "candidatesCount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10,
                                                            "src": "685:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 43,
                                                            "name": "name",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 32,
                                                            "src": "702:4:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                "typeString": "string memory"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 44,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "708:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                "typeString": "string memory"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 41,
                                                        "name": "Candidate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 8,
                                                        "src": "675:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_struct$_Candidate_$8_storage_ptr_$",
                                                            "typeString": "type(struct Election.Candidate storage pointer)"
                                                        }
                                                    },
                                                    "id": 45,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "structConstructorCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "675:35:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Candidate_$8_memory",
                                                        "typeString": "struct Election.Candidate memory"
                                                    }
                                                },
                                                "src": "645:65:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                    "typeString": "struct Election.Candidate storage ref"
                                                }
                                            },
                                            "id": 47,
                                            "nodeType": "ExpressionStatement",
                                            "src": "645:65:0"
                                        },
                                        {
                                            "eventCall": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 49,
                                                                "name": "candidates",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14,
                                                                "src": "739:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                                    "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                                }
                                                            },
                                                            "id": 51,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 50,
                                                                "name": "candidatesCount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10,
                                                                "src": "750:15:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "739:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                                "typeString": "struct Election.Candidate storage ref"
                                                            }
                                                        },
                                                        "id": 52,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "name",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 5,
                                                        "src": "739:32:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_storage",
                                                            "typeString": "string storage ref"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_storage",
                                                            "typeString": "string storage ref"
                                                        }
                                                    ],
                                                    "id": 48,
                                                    "name": "addcandidate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 30,
                                                    "src": "726:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (string memory)"
                                                    }
                                                },
                                                "id": 53,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "726:46:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 54,
                                            "nodeType": "EmitStatement",
                                            "src": "721:51:0"
                                        }
                                    ]
                                },
                                "documentation": null,
                                "id": 56,
                                "implemented": true,
                                "kind": "function",
                                "modifiers": [],
                                "name": "addCandidate",
                                "nodeType": "FunctionDefinition",
                                "parameters": {
                                    "id": 33,
                                    "nodeType": "ParameterList",
                                    "parameters": [
                                        {
                                            "constant": false,
                                            "id": 32,
                                            "name": "name",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 56,
                                            "src": "581:18:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "581:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "src": "580:20:0"
                                },
                                "returnParameters": {
                                    "id": 34,
                                    "nodeType": "ParameterList",
                                    "parameters": [],
                                    "src": "608:0:0"
                                },
                                "scope": 112,
                                "src": "559:220:0",
                                "stateMutability": "nonpayable",
                                "superFunction": null,
                                "visibility": "public"
                            },
                            {
                                "body": {
                                    "id": 110,
                                    "nodeType": "Block",
                                    "src": "828:602:0",
                                    "statements": [
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 66,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "UnaryOperation",
                                                        "operator": "!",
                                                        "prefix": true,
                                                        "src": "887:23:0",
                                                        "subExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 62,
                                                                "name": "votedornot",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18,
                                                                "src": "888:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                    "typeString": "mapping(address => bool)"
                                                                }
                                                            },
                                                            "id": 65,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 63,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160,
                                                                    "src": "899:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 64,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "899:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "888:22:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "6b616d752074656c6168206d656d696c6968",
                                                        "id": 67,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "912:20:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_39943e70596e8ec9b41d6d3f9dc40914e28f3f61122302eb8bac873a638719db",
                                                            "typeString": "literal_string \"kamu telah memilih\""
                                                        },
                                                        "value": "kamu telah memilih"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_39943e70596e8ec9b41d6d3f9dc40914e28f3f61122302eb8bac873a638719db",
                                                            "typeString": "literal_string \"kamu telah memilih\""
                                                        }
                                                    ],
                                                    "id": 61,
                                                    "name": "require",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        163,
                                                        164
                                                    ],
                                                    "referencedDeclaration": 164,
                                                    "src": "879:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (bool,string memory) pure"
                                                    }
                                                },
                                                "id": 68,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "879:54:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 69,
                                            "nodeType": "ExpressionStatement",
                                            "src": "879:54:0"
                                        },
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "id": 80,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 76,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "baseExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 71,
                                                                        "name": "candidates",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14,
                                                                        "src": "1020:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                                            "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 73,
                                                                    "indexExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 72,
                                                                        "name": "_candidateId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 58,
                                                                        "src": "1031:12:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1020:24:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                                        "typeString": "struct Election.Candidate storage ref"
                                                                    }
                                                                },
                                                                "id": 74,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "id",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 3,
                                                                "src": "1020:27:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": ">",
                                                            "rightExpression": {
                                                                "argumentTypes": null,
                                                                "hexValue": "30",
                                                                "id": 75,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "1050:1:0",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "src": "1020:31:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "&&",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 79,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "argumentTypes": null,
                                                                "id": 77,
                                                                "name": "_candidateId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 58,
                                                                "src": "1055:12:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "<=",
                                                            "rightExpression": {
                                                                "argumentTypes": null,
                                                                "id": 78,
                                                                "name": "candidatesCount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10,
                                                                "src": "1071:15:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "1055:31:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "1020:66:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "696420746964616b20646974656d756b616e",
                                                        "id": 81,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1100:20:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_ecf8efb518cf3ba889f36fdc7a70ebeabba85e2606e31ffda64e533b5e889317",
                                                            "typeString": "literal_string \"id tidak ditemukan\""
                                                        },
                                                        "value": "id tidak ditemukan"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_ecf8efb518cf3ba889f36fdc7a70ebeabba85e2606e31ffda64e533b5e889317",
                                                            "typeString": "literal_string \"id tidak ditemukan\""
                                                        }
                                                    ],
                                                    "id": 70,
                                                    "name": "require",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        163,
                                                        164
                                                    ],
                                                    "referencedDeclaration": 164,
                                                    "src": "999:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (bool,string memory) pure"
                                                    }
                                                },
                                                "id": 82,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "999:131:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 83,
                                            "nodeType": "ExpressionStatement",
                                            "src": "999:131:0"
                                        },
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 89,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 84,
                                                            "name": "candidates",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14,
                                                            "src": "1168:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                                "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                            }
                                                        },
                                                        "id": 86,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 85,
                                                            "name": "_candidateId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 58,
                                                            "src": "1179:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1168:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                            "typeString": "struct Election.Candidate storage ref"
                                                        }
                                                    },
                                                    "id": 87,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberName": "votecount",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7,
                                                    "src": "1168:34:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "hexValue": "31",
                                                    "id": 88,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1206:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "1168:39:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 90,
                                            "nodeType": "ExpressionStatement",
                                            "src": "1168:39:0"
                                        },
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 96,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 91,
                                                        "name": "votedornot",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "1237:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 94,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 92,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160,
                                                            "src": "1248:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 93,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1248:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1237:22:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "hexValue": "74727565",
                                                    "id": 95,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1262:4:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "src": "1237:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 97,
                                            "nodeType": "ExpressionStatement",
                                            "src": "1237:29:0"
                                        },
                                        {
                                            "eventCall": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 99,
                                                        "name": "_candidateId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 58,
                                                        "src": "1310:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 100,
                                                                "name": "candidates",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14,
                                                                "src": "1336:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                                    "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                                }
                                                            },
                                                            "id": 102,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 101,
                                                                "name": "_candidateId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 58,
                                                                "src": "1347:12:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "1336:24:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                                "typeString": "struct Election.Candidate storage ref"
                                                            }
                                                        },
                                                        "id": 103,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "name",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 5,
                                                        "src": "1336:29:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_storage",
                                                            "typeString": "string storage ref"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 104,
                                                                "name": "candidates",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14,
                                                                "src": "1379:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Candidate_$8_storage_$",
                                                                    "typeString": "mapping(uint256 => struct Election.Candidate storage ref)"
                                                                }
                                                            },
                                                            "id": 106,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 105,
                                                                "name": "_candidateId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 58,
                                                                "src": "1390:12:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "1379:24:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Candidate_$8_storage",
                                                                "typeString": "struct Election.Candidate storage ref"
                                                            }
                                                        },
                                                        "id": 107,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "votecount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7,
                                                        "src": "1379:34:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_storage",
                                                            "typeString": "string storage ref"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "id": 98,
                                                    "name": "electionupdated",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26,
                                                    "src": "1281:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                                        "typeString": "function (uint256,string memory,uint256)"
                                                    }
                                                },
                                                "id": 108,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1281:142:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 109,
                                            "nodeType": "EmitStatement",
                                            "src": "1276:147:0"
                                        }
                                    ]
                                },
                                "documentation": null,
                                "id": 111,
                                "implemented": true,
                                "kind": "function",
                                "modifiers": [],
                                "name": "Vote",
                                "nodeType": "FunctionDefinition",
                                "parameters": {
                                    "id": 59,
                                    "nodeType": "ParameterList",
                                    "parameters": [
                                        {
                                            "constant": false,
                                            "id": 58,
                                            "name": "_candidateId",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 111,
                                            "src": "799:20:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 57,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "799:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "src": "798:22:0"
                                },
                                "returnParameters": {
                                    "id": 60,
                                    "nodeType": "ParameterList",
                                    "parameters": [],
                                    "src": "828:0:0"
                                },
                                "scope": 112,
                                "src": "785:645:0",
                                "stateMutability": "nonpayable",
                                "superFunction": null,
                                "visibility": "public"
                            }
                        ],
                        "scope": 113,
                        "src": "66:1366:0"
                    }
                ],
                    "src": "32:1401:0"
    },
    "legacyAST": {
        "attributes": {
            "absolutePath": "/home/zakie/project-sr/election-ku/contracts/Election.sol",
                "exportedSymbols": {
                "Election": [
                    112
                ]
            }
        },
        "children": [
            {
                "attributes": {
                    "literals": [
                        "solidity",
                        ">=",
                        "0.4",
                        ".22",
                        "<",
                        "0.9",
                        ".0"
                    ]
                },
                "id": 1,
                "name": "PragmaDirective",
                "src": "32:32:0"
            },
            {
                "attributes": {
                    "baseContracts": [
                        null
                    ],
                    "contractDependencies": [
                        null
                    ],
                    "contractKind": "contract",
                    "documentation": null,
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        112
                    ],
                    "name": "Election",
                    "scope": 113
                },
                "children": [
                    {
                        "attributes": {
                            "canonicalName": "Election.Candidate",
                            "name": "Candidate",
                            "scope": 112,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "id",
                                    "scope": 8,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                        },
                                        "id": 2,
                                        "name": "ElementaryTypeName",
                                        "src": "117:7:0"
                                    }
                                ],
                                "id": 3,
                                "name": "VariableDeclaration",
                                "src": "117:10:0"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "name",
                                    "scope": 8,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "string",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "string",
                                            "type": "string"
                                        },
                                        "id": 4,
                                        "name": "ElementaryTypeName",
                                        "src": "137:6:0"
                                    }
                                ],
                                "id": 5,
                                "name": "VariableDeclaration",
                                "src": "137:11:0"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "votecount",
                                    "scope": 8,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "uint256",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                        },
                                        "id": 6,
                                        "name": "ElementaryTypeName",
                                        "src": "158:7:0"
                                    }
                                ],
                                "id": 7,
                                "name": "VariableDeclaration",
                                "src": "158:17:0"
                            }
                        ],
                        "id": 8,
                        "name": "StructDefinition",
                        "src": "90:92:0"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "candidatesCount",
                            "scope": 112,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint256",
                                    "type": "uint256"
                                },
                                "id": 9,
                                "name": "ElementaryTypeName",
                                "src": "187:7:0"
                            }
                        ],
                        "id": 10,
                        "name": "VariableDeclaration",
                        "src": "187:30:0"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "candidates",
                            "scope": 112,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(uint256 => struct Election.Candidate)",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(uint256 => struct Election.Candidate)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "uint256",
                                            "type": "uint256"
                                        },
                                        "id": 11,
                                        "name": "ElementaryTypeName",
                                        "src": "231:7:0"
                                    },
                                    {
                                        "attributes": {
                                            "contractScope": null,
                                            "name": "Candidate",
                                            "referencedDeclaration": 8,
                                            "type": "struct Election.Candidate"
                                        },
                                        "id": 12,
                                        "name": "UserDefinedTypeName",
                                        "src": "242:9:0"
                                    }
                                ],
                                "id": 13,
                                "name": "Mapping",
                                "src": "223:29:0"
                            }
                        ],
                        "id": 14,
                        "name": "VariableDeclaration",
                        "src": "223:47:0"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "votedornot",
                            "scope": 112,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(address => bool)",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(address => bool)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 15,
                                        "name": "ElementaryTypeName",
                                        "src": "284:7:0"
                                    },
                                    {
                                        "attributes": {
                                            "name": "bool",
                                            "type": "bool"
                                        },
                                        "id": 16,
                                        "name": "ElementaryTypeName",
                                        "src": "295:4:0"
                                    }
                                ],
                                "id": 17,
                                "name": "Mapping",
                                "src": "276:24:0"
                            }
                        ],
                        "id": 18,
                        "name": "VariableDeclaration",
                        "src": "276:42:0"
                    },
                    {
                        "attributes": {
                            "anonymous": false,
                            "documentation": null,
                            "name": "electionupdated"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "id",
                                            "scope": 26,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 19,
                                                "name": "ElementaryTypeName",
                                                "src": "347:7:0"
                                            }
                                        ],
                                        "id": 20,
                                        "name": "VariableDeclaration",
                                        "src": "347:10:0"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "name",
                                            "scope": 26,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "string",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "string",
                                                    "type": "string"
                                                },
                                                "id": 21,
                                                "name": "ElementaryTypeName",
                                                "src": "359:6:0"
                                            }
                                        ],
                                        "id": 22,
                                        "name": "VariableDeclaration",
                                        "src": "359:11:0"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "votecount",
                                            "scope": 26,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 23,
                                                "name": "ElementaryTypeName",
                                                "src": "372:7:0"
                                            }
                                        ],
                                        "id": 24,
                                        "name": "VariableDeclaration",
                                        "src": "372:17:0"
                                    }
                                ],
                                "id": 25,
                                "name": "ParameterList",
                                "src": "346:44:0"
                            }
                        ],
                        "id": 26,
                        "name": "EventDefinition",
                        "src": "325:66:0"
                    },
                    {
                        "attributes": {
                            "anonymous": false,
                            "documentation": null,
                            "name": "addcandidate"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "indexed": false,
                                            "name": "name",
                                            "scope": 30,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "string",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "string",
                                                    "type": "string"
                                                },
                                                "id": 27,
                                                "name": "ElementaryTypeName",
                                                "src": "415:6:0"
                                            }
                                        ],
                                        "id": 28,
                                        "name": "VariableDeclaration",
                                        "src": "415:11:0"
                                    }
                                ],
                                "id": 29,
                                "name": "ParameterList",
                                "src": "414:13:0"
                            }
                        ],
                        "id": 30,
                        "name": "EventDefinition",
                        "src": "396:32:0"
                    },
                    {
                        "attributes": {
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": false,
                            "kind": "function",
                            "modifiers": [
                                null
                            ],
                            "name": "addCandidate",
                            "scope": 112,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "name",
                                            "scope": 56,
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "type": "string",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "string",
                                                    "type": "string"
                                                },
                                                "id": 31,
                                                "name": "ElementaryTypeName",
                                                "src": "581:6:0"
                                            }
                                        ],
                                        "id": 32,
                                        "name": "VariableDeclaration",
                                        "src": "581:18:0"
                                    }
                                ],
                                "id": 33,
                                "name": "ParameterList",
                                "src": "580:20:0"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 34,
                                "name": "ParameterList",
                                "src": "608:0:0"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 10,
                                                            "type": "uint256",
                                                            "value": "candidatesCount"
                                                        },
                                                        "id": 35,
                                                        "name": "Identifier",
                                                        "src": "618:15:0"
                                                    }
                                                ],
                                                "id": 36,
                                                "name": "UnaryOperation",
                                                "src": "618:17:0"
                                            }
                                        ],
                                        "id": 37,
                                        "name": "ExpressionStatement",
                                        "src": "618:17:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "struct Election.Candidate storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "type": "struct Election.Candidate storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 14,
                                                                    "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                    "value": "candidates"
                                                                },
                                                                "id": 38,
                                                                "name": "Identifier",
                                                                "src": "645:10:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 10,
                                                                    "type": "uint256",
                                                                    "value": "candidatesCount"
                                                                },
                                                                "id": 39,
                                                                "name": "Identifier",
                                                                "src": "656:15:0"
                                                            }
                                                        ],
                                                        "id": 40,
                                                        "name": "IndexAccess",
                                                        "src": "645:27:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": true,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "struct Election.Candidate memory",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 8,
                                                                    "type": "type(struct Election.Candidate storage pointer)",
                                                                    "value": "Candidate"
                                                                },
                                                                "id": 41,
                                                                "name": "Identifier",
                                                                "src": "675:9:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 10,
                                                                    "type": "uint256",
                                                                    "value": "candidatesCount"
                                                                },
                                                                "id": 42,
                                                                "name": "Identifier",
                                                                "src": "685:15:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 32,
                                                                    "type": "string memory",
                                                                    "value": "name"
                                                                },
                                                                "id": 43,
                                                                "name": "Identifier",
                                                                "src": "702:4:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "30",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 0",
                                                                    "value": "0"
                                                                },
                                                                "id": 44,
                                                                "name": "Literal",
                                                                "src": "708:1:0"
                                                            }
                                                        ],
                                                        "id": 45,
                                                        "name": "FunctionCall",
                                                        "src": "675:35:0"
                                                    }
                                                ],
                                                "id": 46,
                                                "name": "Assignment",
                                                "src": "645:65:0"
                                            }
                                        ],
                                        "id": 47,
                                        "name": "ExpressionStatement",
                                        "src": "645:65:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_string_storage",
                                                                    "typeString": "string storage ref"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 30,
                                                            "type": "function (string memory)",
                                                            "value": "addcandidate"
                                                        },
                                                        "id": 48,
                                                        "name": "Identifier",
                                                        "src": "726:12:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "name",
                                                            "referencedDeclaration": 5,
                                                            "type": "string storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct Election.Candidate storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 14,
                                                                            "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                            "value": "candidates"
                                                                        },
                                                                        "id": 49,
                                                                        "name": "Identifier",
                                                                        "src": "739:10:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 10,
                                                                            "type": "uint256",
                                                                            "value": "candidatesCount"
                                                                        },
                                                                        "id": 50,
                                                                        "name": "Identifier",
                                                                        "src": "750:15:0"
                                                                    }
                                                                ],
                                                                "id": 51,
                                                                "name": "IndexAccess",
                                                                "src": "739:27:0"
                                                            }
                                                        ],
                                                        "id": 52,
                                                        "name": "MemberAccess",
                                                        "src": "739:32:0"
                                                    }
                                                ],
                                                "id": 53,
                                                "name": "FunctionCall",
                                                "src": "726:46:0"
                                            }
                                        ],
                                        "id": 54,
                                        "name": "EmitStatement",
                                        "src": "721:51:0"
                                    }
                                ],
                                "id": 55,
                                "name": "Block",
                                "src": "608:171:0"
                            }
                        ],
                        "id": 56,
                        "name": "FunctionDefinition",
                        "src": "559:220:0"
                    },
                    {
                        "attributes": {
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": false,
                            "kind": "function",
                            "modifiers": [
                                null
                            ],
                            "name": "Vote",
                            "scope": 112,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_candidateId",
                                            "scope": 111,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 57,
                                                "name": "ElementaryTypeName",
                                                "src": "799:7:0"
                                            }
                                        ],
                                        "id": 58,
                                        "name": "VariableDeclaration",
                                        "src": "799:20:0"
                                    }
                                ],
                                "id": 59,
                                "name": "ParameterList",
                                "src": "798:22:0"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 60,
                                "name": "ParameterList",
                                "src": "828:0:0"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_39943e70596e8ec9b41d6d3f9dc40914e28f3f61122302eb8bac873a638719db",
                                                                    "typeString": "literal_string \"kamu telah memilih\""
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                163,
                                                                164
                                                            ],
                                                            "referencedDeclaration": 164,
                                                            "type": "function (bool,string memory) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 61,
                                                        "name": "Identifier",
                                                        "src": "879:7:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "!",
                                                            "prefix": true,
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "bool"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 18,
                                                                            "type": "mapping(address => bool)",
                                                                            "value": "votedornot"
                                                                        },
                                                                        "id": 62,
                                                                        "name": "Identifier",
                                                                        "src": "888:10:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "sender",
                                                                            "referencedDeclaration": null,
                                                                            "type": "address payable"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 160,
                                                                                    "type": "msg",
                                                                                    "value": "msg"
                                                                                },
                                                                                "id": 63,
                                                                                "name": "Identifier",
                                                                                "src": "899:3:0"
                                                                            }
                                                                        ],
                                                                        "id": 64,
                                                                        "name": "MemberAccess",
                                                                        "src": "899:10:0"
                                                                    }
                                                                ],
                                                                "id": 65,
                                                                "name": "IndexAccess",
                                                                "src": "888:22:0"
                                                            }
                                                        ],
                                                        "id": 66,
                                                        "name": "UnaryOperation",
                                                        "src": "887:23:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "6b616d752074656c6168206d656d696c6968",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "string",
                                                            "type": "literal_string \"kamu telah memilih\"",
                                                            "value": "kamu telah memilih"
                                                        },
                                                        "id": 67,
                                                        "name": "Literal",
                                                        "src": "912:20:0"
                                                    }
                                                ],
                                                "id": 68,
                                                "name": "FunctionCall",
                                                "src": "879:54:0"
                                            }
                                        ],
                                        "id": 69,
                                        "name": "ExpressionStatement",
                                        "src": "879:54:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_ecf8efb518cf3ba889f36fdc7a70ebeabba85e2606e31ffda64e533b5e889317",
                                                                    "typeString": "literal_string \"id tidak ditemukan\""
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                163,
                                                                164
                                                            ],
                                                            "referencedDeclaration": 164,
                                                            "type": "function (bool,string memory) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 70,
                                                        "name": "Identifier",
                                                        "src": "999:7:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "&&",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": ">",
                                                                    "type": "bool"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "id",
                                                                            "referencedDeclaration": 3,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "type": "struct Election.Candidate storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 14,
                                                                                            "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                                            "value": "candidates"
                                                                                        },
                                                                                        "id": 71,
                                                                                        "name": "Identifier",
                                                                                        "src": "1020:10:0"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 58,
                                                                                            "type": "uint256",
                                                                                            "value": "_candidateId"
                                                                                        },
                                                                                        "id": 72,
                                                                                        "name": "Identifier",
                                                                                        "src": "1031:12:0"
                                                                                    }
                                                                                ],
                                                                                "id": 73,
                                                                                "name": "IndexAccess",
                                                                                "src": "1020:24:0"
                                                                            }
                                                                        ],
                                                                        "id": 74,
                                                                        "name": "MemberAccess",
                                                                        "src": "1020:27:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "hexvalue": "30",
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "subdenomination": null,
                                                                            "token": "number",
                                                                            "type": "int_const 0",
                                                                            "value": "0"
                                                                        },
                                                                        "id": 75,
                                                                        "name": "Literal",
                                                                        "src": "1050:1:0"
                                                                    }
                                                                ],
                                                                "id": 76,
                                                                "name": "BinaryOperation",
                                                                "src": "1020:31:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": "<=",
                                                                    "type": "bool"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 58,
                                                                            "type": "uint256",
                                                                            "value": "_candidateId"
                                                                        },
                                                                        "id": 77,
                                                                        "name": "Identifier",
                                                                        "src": "1055:12:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 10,
                                                                            "type": "uint256",
                                                                            "value": "candidatesCount"
                                                                        },
                                                                        "id": 78,
                                                                        "name": "Identifier",
                                                                        "src": "1071:15:0"
                                                                    }
                                                                ],
                                                                "id": 79,
                                                                "name": "BinaryOperation",
                                                                "src": "1055:31:0"
                                                            }
                                                        ],
                                                        "id": 80,
                                                        "name": "BinaryOperation",
                                                        "src": "1020:66:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "696420746964616b20646974656d756b616e",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "string",
                                                            "type": "literal_string \"id tidak ditemukan\"",
                                                            "value": "id tidak ditemukan"
                                                        },
                                                        "id": 81,
                                                        "name": "Literal",
                                                        "src": "1100:20:0"
                                                    }
                                                ],
                                                "id": 82,
                                                "name": "FunctionCall",
                                                "src": "999:131:0"
                                            }
                                        ],
                                        "id": 83,
                                        "name": "ExpressionStatement",
                                        "src": "999:131:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "+=",
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "member_name": "votecount",
                                                            "referencedDeclaration": 7,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct Election.Candidate storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 14,
                                                                            "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                            "value": "candidates"
                                                                        },
                                                                        "id": 84,
                                                                        "name": "Identifier",
                                                                        "src": "1168:10:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 58,
                                                                            "type": "uint256",
                                                                            "value": "_candidateId"
                                                                        },
                                                                        "id": 85,
                                                                        "name": "Identifier",
                                                                        "src": "1179:12:0"
                                                                    }
                                                                ],
                                                                "id": 86,
                                                                "name": "IndexAccess",
                                                                "src": "1168:24:0"
                                                            }
                                                        ],
                                                        "id": 87,
                                                        "name": "MemberAccess",
                                                        "src": "1168:34:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "31",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 1",
                                                            "value": "1"
                                                        },
                                                        "id": 88,
                                                        "name": "Literal",
                                                        "src": "1206:1:0"
                                                    }
                                                ],
                                                "id": 89,
                                                "name": "Assignment",
                                                "src": "1168:39:0"
                                            }
                                        ],
                                        "id": 90,
                                        "name": "ExpressionStatement",
                                        "src": "1168:39:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 18,
                                                                    "type": "mapping(address => bool)",
                                                                    "value": "votedornot"
                                                                },
                                                                "id": 91,
                                                                "name": "Identifier",
                                                                "src": "1237:10:0"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "sender",
                                                                    "referencedDeclaration": null,
                                                                    "type": "address payable"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 160,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 92,
                                                                        "name": "Identifier",
                                                                        "src": "1248:3:0"
                                                                    }
                                                                ],
                                                                "id": 93,
                                                                "name": "MemberAccess",
                                                                "src": "1248:10:0"
                                                            }
                                                        ],
                                                        "id": 94,
                                                        "name": "IndexAccess",
                                                        "src": "1237:22:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "74727565",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "bool",
                                                            "type": "bool",
                                                            "value": "true"
                                                        },
                                                        "id": 95,
                                                        "name": "Literal",
                                                        "src": "1262:4:0"
                                                    }
                                                ],
                                                "id": 96,
                                                "name": "Assignment",
                                                "src": "1237:29:0"
                                            }
                                        ],
                                        "id": 97,
                                        "name": "ExpressionStatement",
                                        "src": "1237:29:0"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_storage",
                                                                    "typeString": "string storage ref"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 26,
                                                            "type": "function (uint256,string memory,uint256)",
                                                            "value": "electionupdated"
                                                        },
                                                        "id": 98,
                                                        "name": "Identifier",
                                                        "src": "1281:15:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 58,
                                                            "type": "uint256",
                                                            "value": "_candidateId"
                                                        },
                                                        "id": 99,
                                                        "name": "Identifier",
                                                        "src": "1310:12:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "name",
                                                            "referencedDeclaration": 5,
                                                            "type": "string storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct Election.Candidate storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 14,
                                                                            "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                            "value": "candidates"
                                                                        },
                                                                        "id": 100,
                                                                        "name": "Identifier",
                                                                        "src": "1336:10:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 58,
                                                                            "type": "uint256",
                                                                            "value": "_candidateId"
                                                                        },
                                                                        "id": 101,
                                                                        "name": "Identifier",
                                                                        "src": "1347:12:0"
                                                                    }
                                                                ],
                                                                "id": 102,
                                                                "name": "IndexAccess",
                                                                "src": "1336:24:0"
                                                            }
                                                        ],
                                                        "id": 103,
                                                        "name": "MemberAccess",
                                                        "src": "1336:29:0"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "votecount",
                                                            "referencedDeclaration": 7,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct Election.Candidate storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 14,
                                                                            "type": "mapping(uint256 => struct Election.Candidate storage ref)",
                                                                            "value": "candidates"
                                                                        },
                                                                        "id": 104,
                                                                        "name": "Identifier",
                                                                        "src": "1379:10:0"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 58,
                                                                            "type": "uint256",
                                                                            "value": "_candidateId"
                                                                        },
                                                                        "id": 105,
                                                                        "name": "Identifier",
                                                                        "src": "1390:12:0"
                                                                    }
                                                                ],
                                                                "id": 106,
                                                                "name": "IndexAccess",
                                                                "src": "1379:24:0"
                                                            }
                                                        ],
                                                        "id": 107,
                                                        "name": "MemberAccess",
                                                        "src": "1379:34:0"
                                                    }
                                                ],
                                                "id": 108,
                                                "name": "FunctionCall",
                                                "src": "1281:142:0"
                                            }
                                        ],
                                        "id": 109,
                                        "name": "EmitStatement",
                                        "src": "1276:147:0"
                                    }
                                ],
                                "id": 110,
                                "name": "Block",
                                "src": "828:602:0"
                            }
                        ],
                        "id": 111,
                        "name": "FunctionDefinition",
                        "src": "785:645:0"
                    }
                ],
                "id": 112,
                "name": "ContractDefinition",
                "src": "66:1366:0"
            }
        ],
            "id": 113,
                "name": "SourceUnit",
                    "src": "32:1401:0"
    },
    "compiler": {
        "name": "solc",
            "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
    },
    "networks": {
        "5777": {
            "events": {
                "0x3c841f91385f410e6f12269c9a0c0eb656e360f1e2d6f91144cfd51a10a2a318": {
                    "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "votecount",
                                "type": "uint256"
                            }
                        ],
                            "name": "electionupdated",
                                "type": "event"
                },
                "0x8305abd9a2aefcfb7b426d999ed79e3094e1b489d4acdd65fc5d078203ba67d0": {
                    "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                            "name": "addcandidate",
                                "type": "event"
                }
            },
            "links": { },
            "address": "0x4a51389A8F81680aa9334275177DA0307902298D",
                "transactionHash": "0x69242592a96adf9b9e85da1b6625d6768a11bc8b177d45a5006c4f369128838d"
        }
    },
    "schemaVersion": "3.3.3",
        "updatedAt": "2021-03-22T09:41:30.458Z",
            "networkType": "ethereum",
                "devdoc": {
        "methods": { }
    },
    "userdoc": {
        "methods": { }
    }
}