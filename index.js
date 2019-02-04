var CoinKey = require('coinkey');

var InfiniteLoop = require('infinite-loop');

var il = new InfiniteLoop();


il.add(generate, []);

il.run();

function generate() {
  
  var step1 = new CoinKey.createRandom();
  
  var privateWif = step1.privateWif;
  var privateKey = step1.privateKey.toString('hex');
  var publicAddress = step1.publicAddress;


  shouldIdisplay([privateWif, privateKey, publicAddress]);
}

function shouldIdisplay(data) {
  
  var address = data[2].toLowerCase(),
    desiredstring = process.argv[2].toLowerCase()

  
  if(address.includes(desiredstring)) {
    console.log('> WIF : ' + data[0]);
    console.log('> Private Key : ' + data[1]);
    console.log('> Public Address : ' + data[2]);
  }
  

}