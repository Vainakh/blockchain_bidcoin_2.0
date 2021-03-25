const Blockchain = require('./blockchain');

const bidcoin = new Blockchain();

bidcoin.createNewBlock(2000, '1ONINA8998DSFHF', '1MONINA8998DSFHF');

bidcoin.createNewBlock(3000, '2ONINA8998DSFHF', '2MONINA8998DSFHF');

bidcoin.createNewBlock(4000, '3ONINA8998DSFHF', '3MONINA8998DSFHF');

console.log(bidcoin);