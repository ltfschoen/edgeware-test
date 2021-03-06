/*
 * Example using password encrypted JSON v3 - Example external wallet file
 */
require('dotenv').config();
const fs = require('fs');
const jswallet = require("ethereumjs-wallet");

// Load JSON from external file
const json = JSON.parse(fs.readFileSync('example-v3-keystore.json', 'utf8'));

const wallet = jswallet.fromV3(json, "password");
// Warning: Only use console.log in the example 
console.log("Private key " + wallet.getPrivateKey().toString("hex"));
const privateKey = wallet.getPrivateKey().toString("hex");
fs.writeFileSync('/home/ltfschoen/output.txt', privateKey);