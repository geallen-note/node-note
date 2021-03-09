'use strict';
let crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'geallen');
hmac.update('hello,world!');
hmac.update('hello,nodejs');
console.log(hmac.digest('hex'));
