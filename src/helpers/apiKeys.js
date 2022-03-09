var md5 = require('md5');
let privateTkn = ''; // Your private key
export let tstamp = Date.now();
export let token = ''; // Your public key
export let hash = md5(tstamp + privateTkn + token);

