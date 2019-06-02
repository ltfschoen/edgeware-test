# About

Uses the ethereumjs-wallet library to generate the private key associated with an Ethereum wallet that has been
backed up by a user in a password encrypted JSON file.
The objective is to read and write sensitive information to and from files.
This prevents the user from having to enter (type) their wallet's password or private key into the command line
or the script logging that information to the command line.
The reason is because command line logs are saved (see `cat ~/.history; cat ~/.bash_history`).
The user should permanently delete history and any input or outputs files that may contain any sensitive information.

# Setup

* Install Node.js v11
* Install dependencies `yarn`
* Copy Ethereum password encrypted JSON wallet file into project root directory.
* Rename .env-example to .env in this project root directory and replace values with your own.
* Run the following to generate and store the wallet's associated private hex key in a file output.txt
  * Example hard-coded JSON v3: `yarn run json-example-v3-hardcoded.js`
  * Example load from JSON file v3: `yarn run json-example-v3-file.js`
  * Real JSON file v3: `yarn run json-ethsale.js`
* Use the private key in Edgeware lockdrop for example https://blog.edgewa.re/edgeware-lockdrop-how-to-participate/. 

# References:

* https://medium.com/codechain/managing-ethereum-private-keys-4838ac9fa935
* https://github.com/ethereumjs/ethereumjs-wallet#wallet-api