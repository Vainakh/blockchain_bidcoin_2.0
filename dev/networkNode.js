const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { v1: uuidv1 } = require('uuid');

const process = require('process');
const port = process.argv[2];

const nodeAddress = uuidv1().split('-').join('');

const bidcoin = new Blockchain();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', (req, res) => {
  res.send(bidcoin);
});

app.post('/transaction', (req, res) => {
  const blockIndex = bidcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

app.get('/mine', (req, res) => {
  const lastBlock = bidcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const  currentBlockData = {
    transctions: bidcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  }
  const nonce = bidcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bidcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

  bidcoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = bidcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
    note: "New block mined successfully",
    block: newBlock
  });

});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
