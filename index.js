const req = require("express/lib/request");

const APP = require("express")();
const PORT = 5555;

const CLC = require("cli-color");

APP.listen(PORT, () => console.log('APP alive on: ' + CLC.yellow('http://localhost:' + PORT))); 

