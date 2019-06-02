/*
 * Password encrypted JSON v3 - Real external wallet file
 */
require('dotenv').config();
const fs = require('fs');
const jswallet = require("ethereumjs-wallet");

const json = JSON.parse(fs.readFileSync('keystore.json', 'utf8'));

// Replace with .EthSale to import from Ethereum Sale wallet file
// See https://github.com/ethereumjs/ethereumjs-wallet#wallet-api
const wallet = jswallet.fromV3(json, process.env.JSON_PASSWORD);
const privateKey = wallet.getPrivateKey().toString("hex");
fs.writeFileSync('/home/ltfschoen/output.txt', privateKey);