{
    "contractName": "Migrations",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "last_completed_migration",
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
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
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
                        "internalType": "uint256",
                        "name": "completed",
                        "type": "uint256"
                    }
                ],
                "name": "setCompleted",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
            "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"last_completed_migration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"completed\",\"type\":\"uint256\"}],\"name\":\"setCompleted\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/zakie/project-sr/election-ku/contracts/Migrations.sol\":\"Migrations\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/zakie/project-sr/election-ku/contracts/Migrations.sol\":{\"keccak256\":\"0x7eaedbb1a3e4e0f585d9063393872f88ded247ca3c3c3c8492ea18e7629a6411\",\"urls\":[\"bzz-raw://4a3eb571cee910095df65a06a1c1d3f89187c72a3c184ef87a7538d9aa39ad07\",\"dweb:/ipfs/QmdqR3vrSSGR49qFGZr49Mb39z7dgD6tSzEDoaqtM31o61\"]}},\"version\":1}",
                "bytecode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005057600080fd5b5061021e806100606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610064578063fdacd576146100ae575b600080fd5b61004e6100dc565b6040518082815260200191505060405180910390f35b61006c6100e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100da600480360360208110156100c457600080fd5b8101908080359060200190929190505050610107565b005b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806101b76033913960400191505060405180910390fd5b806001819055505056fe546869732066756e6374696f6e206973207265737472696374656420746f2074686520636f6e74726163742773206f776e6572a265627a7a72315820fdfdf64ee8b67282aabd45bf5fc133d5db58052efcd6b3672b208be864818b3864736f6c63430005100032",
                    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610064578063fdacd576146100ae575b600080fd5b61004e6100dc565b6040518082815260200191505060405180910390f35b61006c6100e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100da600480360360208110156100c457600080fd5b8101908080359060200190929190505050610107565b005b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806101b76033913960400191505060405180910390fd5b806001819055505056fe546869732066756e6374696f6e206973207265737472696374656420746f2074686520636f6e74726163742773206f776e6572a265627a7a72315820fdfdf64ee8b67282aabd45bf5fc133d5db58052efcd6b3672b208be864818b3864736f6c63430005100032",
                        "sourceMap": "66:352:1:-;;;113:10;90:33;;;;;;;;;;;;;;;;;;;;66:352;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:352:1;;;;;;;",
                            "deployedSourceMap": "66:352:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:352:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;127:36;;;:::i;:::-;;;;;;;;;;;;;;;;;;;90:33;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;313:103;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;313:103:1;;;;;;;;;;;;;;;;;:::i;:::-;;127:36;;;;:::o;90:33::-;;;;;;;;;;;;;:::o;313:103::-;225:5;;;;;;;;;;;211:19;;:10;:19;;;196:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;402:9;375:24;:36;;;;313:103;:::o",
                                "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Migrations {\n  address public owner = msg.sender;\n  uint public last_completed_migration;\n\n  modifier restricted() {\n    require(\n      msg.sender == owner,\n      \"This function is restricted to the contract's owner\"\n    );\n    _;\n  }\n\n  function setCompleted(uint completed) public restricted {\n    last_completed_migration = completed;\n  }\n}\n",
                                    "sourcePath": "/home/zakie/project-sr/election-ku/contracts/Migrations.sol",
                                        "ast": {
        "absolutePath": "/home/zakie/project-sr/election-ku/contracts/Migrations.sol",
            "exportedSymbols": {
            "Migrations": [
                134
            ]
        },
        "id": 135,
            "nodeType": "SourceUnit",
                "nodes": [
                    {
                        "id": 103,
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
                        "src": "32:32:1"
                    },
                    {
                        "baseContracts": [],
                        "contractDependencies": [],
                        "contractKind": "contract",
                        "documentation": null,
                        "fullyImplemented": true,
                        "id": 134,
                        "linearizedBaseContracts": [
                            134
                        ],
                        "name": "Migrations",
                        "nodeType": "ContractDefinition",
                        "nodes": [
                            {
                                "constant": false,
                                "id": 107,
                                "name": "owner",
                                "nodeType": "VariableDeclaration",
                                "scope": 134,
                                "src": "90:33:1",
                                "stateVariable": true,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 104,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "90:7:1",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "value": {
                                    "argumentTypes": null,
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 105,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 149,
                                        "src": "113:3:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                        }
                                    },
                                    "id": 106,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "113:10:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                    }
                                },
                                "visibility": "public"
                            },
                            {
                                "constant": false,
                                "id": 109,
                                "name": "last_completed_migration",
                                "nodeType": "VariableDeclaration",
                                "scope": 134,
                                "src": "127:36:1",
                                "stateVariable": true,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 108,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "127:4:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "public"
                            },
                            {
                                "body": {
                                    "id": 120,
                                    "nodeType": "Block",
                                    "src": "190:119:1",
                                    "statements": [
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 115,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 112,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 149,
                                                                "src": "211:3:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 113,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "211:10:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "argumentTypes": null,
                                                            "id": 114,
                                                            "name": "owner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 107,
                                                            "src": "225:5:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "211:19:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "546869732066756e6374696f6e206973207265737472696374656420746f2074686520636f6e74726163742773206f776e6572",
                                                        "id": 116,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "238:53:1",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_f60fe2d9d123295bf92ecf95167f1fa709e374da35e4c083bd39dc2d82acd8b1",
                                                            "typeString": "literal_string \"This function is restricted to the contract's owner\""
                                                        },
                                                        "value": "This function is restricted to the contract's owner"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_f60fe2d9d123295bf92ecf95167f1fa709e374da35e4c083bd39dc2d82acd8b1",
                                                            "typeString": "literal_string \"This function is restricted to the contract's owner\""
                                                        }
                                                    ],
                                                    "id": 111,
                                                    "name": "require",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        152,
                                                        153
                                                    ],
                                                    "referencedDeclaration": 153,
                                                    "src": "196:7:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (bool,string memory) pure"
                                                    }
                                                },
                                                "id": 117,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "196:101:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 118,
                                            "nodeType": "ExpressionStatement",
                                            "src": "196:101:1"
                                        },
                                        {
                                            "id": 119,
                                            "nodeType": "PlaceholderStatement",
                                            "src": "303:1:1"
                                        }
                                    ]
                                },
                                "documentation": null,
                                "id": 121,
                                "name": "restricted",
                                "nodeType": "ModifierDefinition",
                                "parameters": {
                                    "id": 110,
                                    "nodeType": "ParameterList",
                                    "parameters": [],
                                    "src": "187:2:1"
                                },
                                "src": "168:141:1",
                                "visibility": "internal"
                            },
                            {
                                "body": {
                                    "id": 132,
                                    "nodeType": "Block",
                                    "src": "369:47:1",
                                    "statements": [
                                        {
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 130,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "argumentTypes": null,
                                                    "id": 128,
                                                    "name": "last_completed_migration",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 109,
                                                    "src": "375:24:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "argumentTypes": null,
                                                    "id": 129,
                                                    "name": "completed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 123,
                                                    "src": "402:9:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "375:36:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 131,
                                            "nodeType": "ExpressionStatement",
                                            "src": "375:36:1"
                                        }
                                    ]
                                },
                                "documentation": null,
                                "id": 133,
                                "implemented": true,
                                "kind": "function",
                                "modifiers": [
                                    {
                                        "arguments": null,
                                        "id": 126,
                                        "modifierName": {
                                            "argumentTypes": null,
                                            "id": 125,
                                            "name": "restricted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 121,
                                            "src": "358:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_modifier$__$",
                                                "typeString": "modifier ()"
                                            }
                                        },
                                        "nodeType": "ModifierInvocation",
                                        "src": "358:10:1"
                                    }
                                ],
                                "name": "setCompleted",
                                "nodeType": "FunctionDefinition",
                                "parameters": {
                                    "id": 124,
                                    "nodeType": "ParameterList",
                                    "parameters": [
                                        {
                                            "constant": false,
                                            "id": 123,
                                            "name": "completed",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 133,
                                            "src": "335:14:1",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 122,
                                                "name": "uint",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "335:4:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "src": "334:16:1"
                                },
                                "returnParameters": {
                                    "id": 127,
                                    "nodeType": "ParameterList",
                                    "parameters": [],
                                    "src": "369:0:1"
                                },
                                "scope": 134,
                                "src": "313:103:1",
                                "stateMutability": "nonpayable",
                                "superFunction": null,
                                "visibility": "public"
                            }
                        ],
                        "scope": 135,
                        "src": "66:352:1"
                    }
                ],
                    "src": "32:387:1"
    },
    "legacyAST": {
        "attributes": {
            "absolutePath": "/home/zakie/project-sr/election-ku/contracts/Migrations.sol",
                "exportedSymbols": {
                "Migrations": [
                    134
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
                "id": 103,
                "name": "PragmaDirective",
                "src": "32:32:1"
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
                        134
                    ],
                    "name": "Migrations",
                    "scope": 135
                },
                "children": [
                    {
                        "attributes": {
                            "constant": false,
                            "name": "owner",
                            "scope": 134,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "address",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "address",
                                    "stateMutability": "nonpayable",
                                    "type": "address"
                                },
                                "id": 104,
                                "name": "ElementaryTypeName",
                                "src": "90:7:1"
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
                                            "referencedDeclaration": 149,
                                            "type": "msg",
                                            "value": "msg"
                                        },
                                        "id": 105,
                                        "name": "Identifier",
                                        "src": "113:3:1"
                                    }
                                ],
                                "id": 106,
                                "name": "MemberAccess",
                                "src": "113:10:1"
                            }
                        ],
                        "id": 107,
                        "name": "VariableDeclaration",
                        "src": "90:33:1"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "last_completed_migration",
                            "scope": 134,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 108,
                                "name": "ElementaryTypeName",
                                "src": "127:4:1"
                            }
                        ],
                        "id": 109,
                        "name": "VariableDeclaration",
                        "src": "127:36:1"
                    },
                    {
                        "attributes": {
                            "documentation": null,
                            "name": "restricted",
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 110,
                                "name": "ParameterList",
                                "src": "187:2:1"
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
                                                                    "typeIdentifier": "t_stringliteral_f60fe2d9d123295bf92ecf95167f1fa709e374da35e4c083bd39dc2d82acd8b1",
                                                                    "typeString": "literal_string \"This function is restricted to the contract's owner\""
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                152,
                                                                153
                                                            ],
                                                            "referencedDeclaration": 153,
                                                            "type": "function (bool,string memory) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 111,
                                                        "name": "Identifier",
                                                        "src": "196:7:1"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "==",
                                                            "type": "bool"
                                                        },
                                                        "children": [
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
                                                                            "referencedDeclaration": 149,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 112,
                                                                        "name": "Identifier",
                                                                        "src": "211:3:1"
                                                                    }
                                                                ],
                                                                "id": 113,
                                                                "name": "MemberAccess",
                                                                "src": "211:10:1"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 107,
                                                                    "type": "address",
                                                                    "value": "owner"
                                                                },
                                                                "id": 114,
                                                                "name": "Identifier",
                                                                "src": "225:5:1"
                                                            }
                                                        ],
                                                        "id": 115,
                                                        "name": "BinaryOperation",
                                                        "src": "211:19:1"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "546869732066756e6374696f6e206973207265737472696374656420746f2074686520636f6e74726163742773206f776e6572",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "string",
                                                            "type": "literal_string \"This function is restricted to the contract's owner\"",
                                                            "value": "This function is restricted to the contract's owner"
                                                        },
                                                        "id": 116,
                                                        "name": "Literal",
                                                        "src": "238:53:1"
                                                    }
                                                ],
                                                "id": 117,
                                                "name": "FunctionCall",
                                                "src": "196:101:1"
                                            }
                                        ],
                                        "id": 118,
                                        "name": "ExpressionStatement",
                                        "src": "196:101:1"
                                    },
                                    {
                                        "id": 119,
                                        "name": "PlaceholderStatement",
                                        "src": "303:1:1"
                                    }
                                ],
                                "id": 120,
                                "name": "Block",
                                "src": "190:119:1"
                            }
                        ],
                        "id": 121,
                        "name": "ModifierDefinition",
                        "src": "168:141:1"
                    },
                    {
                        "attributes": {
                            "documentation": null,
                            "implemented": true,
                            "isConstructor": false,
                            "kind": "function",
                            "name": "setCompleted",
                            "scope": 134,
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
                                            "name": "completed",
                                            "scope": 133,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 122,
                                                "name": "ElementaryTypeName",
                                                "src": "335:4:1"
                                            }
                                        ],
                                        "id": 123,
                                        "name": "VariableDeclaration",
                                        "src": "335:14:1"
                                    }
                                ],
                                "id": 124,
                                "name": "ParameterList",
                                "src": "334:16:1"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 127,
                                "name": "ParameterList",
                                "src": "369:0:1"
                            },
                            {
                                "attributes": {
                                    "arguments": null
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 121,
                                            "type": "modifier ()",
                                            "value": "restricted"
                                        },
                                        "id": 125,
                                        "name": "Identifier",
                                        "src": "358:10:1"
                                    }
                                ],
                                "id": 126,
                                "name": "ModifierInvocation",
                                "src": "358:10:1"
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
                                                    "operator": "=",
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 109,
                                                            "type": "uint256",
                                                            "value": "last_completed_migration"
                                                        },
                                                        "id": 128,
                                                        "name": "Identifier",
                                                        "src": "375:24:1"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 123,
                                                            "type": "uint256",
                                                            "value": "completed"
                                                        },
                                                        "id": 129,
                                                        "name": "Identifier",
                                                        "src": "402:9:1"
                                                    }
                                                ],
                                                "id": 130,
                                                "name": "Assignment",
                                                "src": "375:36:1"
                                            }
                                        ],
                                        "id": 131,
                                        "name": "ExpressionStatement",
                                        "src": "375:36:1"
                                    }
                                ],
                                "id": 132,
                                "name": "Block",
                                "src": "369:47:1"
                            }
                        ],
                        "id": 133,
                        "name": "FunctionDefinition",
                        "src": "313:103:1"
                    }
                ],
                "id": 134,
                "name": "ContractDefinition",
                "src": "66:352:1"
            }
        ],
            "id": 135,
                "name": "SourceUnit",
                    "src": "32:387:1"
    },
    "compiler": {
        "name": "solc",
            "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
    },
    "networks": {
        "5777": {
            "events": { },
            "links": { },
            "address": "0x61F38f41f3c26a08929E39Fc10c0Bc03F9491B6f",
                "transactionHash": "0x036ad863380b38b3c3b7bc8d53f3e92fab6f5c783e233142a25d9fb06a905a00"
        }
    },
    "schemaVersion": "3.3.3",
        "updatedAt": "2021-03-22T09:41:30.463Z",
            "networkType": "ethereum",
                "devdoc": {
        "methods": { }
    },
    "userdoc": {
        "methods": { }
    }
}