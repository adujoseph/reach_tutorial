// Automatically generated with Reach 0.1.6
/* eslint-disable */
export const _version = '0.1.6';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v71 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v74 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:21:50:application',
    fs: ['at ./index.rsh:19:13:application call to [unknown function] (defined at: ./index.rsh:19:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v71, v74],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v71, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
      
      sim_r.txns.push({
        amt: v76,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, 4), v86);
  const v92 = stdlib.add(v77, v91);
  const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, 3));
  const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, 2));
  const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 0));
  const v96 = [stdlib.checkedBigNumberify('./index.rsh:35:28:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 2)];
  const v97 = [stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:36:36:decimal', stdlib.UInt_max, 1)];
  const v98 = v95 ? v96 : v97;
  const v99 = [stdlib.checkedBigNumberify('./index.rsh:34:28:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:34:36:decimal', stdlib.UInt_max, 0)];
  const v100 = v94 ? v99 : v98;
  const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 0)];
  const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 1)];
  const v103 = stdlib.mul(v101, v76);
  ;
  const v108 = stdlib.mul(v102, v76);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v93), {
    at: './index.rsh:42:24:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v76), {
    at: './index.rsh:27:25:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:28:48:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v75, v76, v77, v84],
    evt_cnt: 1,
    funcNum: 1,
    lct: v78,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v76, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
      
      sim_r.txns.push({
        amt: v76,
        kind: 'to',
        tok: undefined
        });
      const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, 4), v86);
      const v92 = stdlib.add(v77, v91);
      const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, 3));
      const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, 2));
      const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 0));
      const v96 = [stdlib.checkedBigNumberify('./index.rsh:35:28:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 2)];
      const v97 = [stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:36:36:decimal', stdlib.UInt_max, 1)];
      const v98 = v95 ? v96 : v97;
      const v99 = [stdlib.checkedBigNumberify('./index.rsh:34:28:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:34:36:decimal', stdlib.UInt_max, 0)];
      const v100 = v94 ? v99 : v98;
      const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 0)];
      const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 1)];
      const v103 = stdlib.mul(v101, v76);
      sim_r.txns.push({
        amt: v103,
        kind: 'from',
        to: v75,
        tok: undefined
        });
      const v108 = stdlib.mul(v102, v76);
      sim_r.txns.push({
        amt: v108,
        kind: 'from',
        to: v85,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, 4), v86);
  const v92 = stdlib.add(v77, v91);
  const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:32:49:decimal', stdlib.UInt_max, 3));
  const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, 2));
  const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 0));
  const v96 = [stdlib.checkedBigNumberify('./index.rsh:35:28:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:35:36:decimal', stdlib.UInt_max, 2)];
  const v97 = [stdlib.checkedBigNumberify('./index.rsh:36:28:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:36:36:decimal', stdlib.UInt_max, 1)];
  const v98 = v95 ? v96 : v97;
  const v99 = [stdlib.checkedBigNumberify('./index.rsh:34:28:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:34:36:decimal', stdlib.UInt_max, 0)];
  const v100 = v94 ? v99 : v98;
  const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 0)];
  const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:33:20:array', stdlib.UInt_max, 1)];
  const v103 = stdlib.mul(v101, v76);
  ;
  const v108 = stdlib.mul(v102, v76);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v93), {
    at: './index.rsh:42:24:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:23:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:23:9:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
txn Sender
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:30:7:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 253
int 4
load 252
-
+
int 3
%
store 251
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 251
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 251
int 2
==
select
dup
store 250
int 0
extract_uint64
load 254
*
dup
bz l5_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5_checkTxnK:
pop
load 250
int 8
extract_uint64
load 254
*
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
txn Sender
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3_afterHandler1:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161094d38038061094d8339810160408190526100229161020f565b60008055604080518251815260208084015180518284015201518183015290517ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299181900360600190a160208101515161007f9034146007610117565b6100ac604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161010f926002920190610140565b5050506102a4565b8161013c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461014c90610269565b90600052602060002090601f01602090048101928261016e57600085556101b4565b82601f1061018757805160ff19168380011785556101b4565b828001600101855582156101b4579182015b828111156101b4578251825591602001919060010190610199565b506101c09291506101c4565b5090565b5b808211156101c057600081556001016101c5565b604080519081016001600160401b038111828210171561020957634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022257600080fd5b61022a6101d9565b835181526040601f198301121561024057600080fd5b6102486101d9565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061027d57607f821691505b6020821081141561029e57634e487b7160e01b600052602260045260246000fd5b50919050565b61069a806102b36000396000f3fe6080604052600436106100355760003560e01c80634666ce221461003e5780638323075714610051578063ab53f2c61461007457005b3661003c57005b005b61003c61004c3660046104b8565b610097565b34801561005d57600080fd5b506001546040519081526020015b60405180910390f35b34801561008057600080fd5b50610089610302565b60405161006b9291906104d0565b6100a7600160005414600961039f565b6100c1813515806100ba57506001548235145b600a61039f565b6000808055600280546100d39061052d565b80601f01602080910402602001604051908101604052809291908181526020018280546100ff9061052d565b801561014c5780601f106101215761010080835404028352916020019161014c565b820191906000526020600020905b81548152906001019060200180831161012f57829003601f168201915b50505050508060200190518101906101649190610562565b905061016e6103c8565b6040805184358152602080860135908201527fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a16101bc82602001513414600861039f565b60036101cd602085013560046105f4565b83604001516101dc919061060b565b6101e69190610623565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461024057805115610236578060400151610246565b8060200151610246565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916102709190610645565b6040518115909202916000818181858888f19350505050158015610298573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360800151602001516102be9190610645565b6040518115909202916000818181858888f193505050501580156102e6573d6000803e3d6000fd5b50600080805560018190556102fd90600290610462565b505050565b6000606060005460028080546103179061052d565b80601f01602080910402602001604051908101604052809291908181526020018280546103439061052d565b80156103905780601f1061036557610100808354040283529160200191610390565b820191906000526020600020905b81548152906001019060200180831161037357829003601f168201915b50505050509050915091509091565b816103c45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a00160405280600081526020016103f7604051806040016040528060008152602001600081525090565b8152602001610419604051806040016040528060008152602001600081525090565b815260200161043b604051806040016040528060008152602001600081525090565b815260200161045d604051806040016040528060008152602001600081525090565b905290565b50805461046e9061052d565b6000825580601f1061047e575050565b601f01602090049060005260206000209081019061049c919061049f565b50565b5b808211156104b457600081556001016104a0565b5090565b6000604082840312156104ca57600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610504578581018301518582016060015282016104e8565b81811115610516576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061054157607f821691505b602082108114156104ca57634e487b7160e01b600052602260045260246000fd5b60006060828403121561057457600080fd5b6040516060810181811067ffffffffffffffff821117156105a557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105bf57600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610606576106066105de565b500390565b6000821982111561061e5761061e6105de565b500190565b60008261064057634e487b7160e01b600052601260045260246000fd5b500690565b600081600019048311821515161561065f5761065f6105de565b50029056fea26469706673582212209eb05008d9795cf8bb4b535548f0e6f55a28c386f547242b00ff91086b3886a364736f6c63430008090033`,
  BytecodeLen: 2381,
  Which: `oD`,
  version: 4,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
