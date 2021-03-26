const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { v1: uuidv1 } = require('uuid');
const rp = require('request-promise');

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

//register a node and broadcast it to the network
app.post('/register-and-broadcast-node', (req, res) => {
  const newNodeUrl = req.body.newNodeUrl;
  if (bidcoin.networkNodes.indexOf(newNodeUrl == -1)) bidcoin.networkNodes.push(newNodeUrl);

  const regNodesPromises = [];
  bidcoin.networkNodes.forEach(networkNodeUrl => {
    //register-node endpoint
    const requestOptions = {
      url: networkNodeUrl + '/register-node',
      method: 'POST',
      body: {
        newNodeUrl: newNodeUrl
      },
      json: true
    };

    regNodesPromises.push(rp(requestOptions));
  });

  Promise.all(regNodesPromises)
  .then(data => {
    //use the data
  })
});

//register a node with the network
app.post('/register-node', () => {

});

//register multiple nodes at once
app.post('register-nodes-bulk', () => {

});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
