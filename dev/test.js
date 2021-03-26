const Blockchain = require('./blockchain');

const bidcoin = new Blockchain();

//1.
// bidcoin.createNewBlock(2000, '1ONINA8998DSFHF', '1MONINA8998DSFHF');

// bidcoin.createNewBlock(3000, '2ONINA8998DSFHF', '2MONINA8998DSFHF');

// bidcoin.createNewBlock(4000, '3ONINA8998DSFHF', '3MONINA8998DSFHF');

//2.
// bidcoin.createNewBlock(892348, '1ONINA8998DSFHF','2ONINA8998DSFHF');

// bidcoin.createNewTransaction(100, 'ADLAN2ONINA8998DSFHF', 'JULIA2MONINA8998DSFHF');

// bidcoin.createNewBlock(999999, '2ONINA8998DSFHF', '2MONINA8998DSFHF');

// bidcoin.createNewTransaction(100, 'ADLAN3ONINA8998DSFHF', 'JULIA3MONINA8998DSFHF');
// bidcoin.createNewTransaction(200, 'ADLAN4ONINA8998DSFHF', 'JULIA4MONINA8998DSFHF');
// bidcoin.createNewTransaction(300, 'ADLAN5ONINA8998DSFHF', 'JULIA5MONINA8998DSFHF');

// bidcoin.createNewBlock(899999, '3ONINA8998DSFHF', '3MONINA8998DSFHF');

3//
// const previousBlockHash = 'ADLAN2348765347971';
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: 'ADLAN100GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   },
//   {
//     amount: 30,
//     sender: 'ADLAN200GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   },
//   {
//     amount: 100,
//     sender: 'ADLAN300GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   }
// ];
// const nonce = 100;
// console.log(bidcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// console.log(bidcoin.chain[1]);

4//

// const previousBlockHash = 'ADLAN2348765347971';
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: 'ADLAN100GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   },
//   {
//     amount: 30,
//     sender: 'ADLAN200GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   },
//   {
//     amount: 100,
//     sender: 'ADLAN300GHDKRJ543764980523',
//     recipient: 'JULIAGHDKRJ543764980523'
//   }
// ];

// console.log(bidcoin.hashBlock(previousBlockHash, currentBlockData, 127559));

5//

console.log(bidcoin);