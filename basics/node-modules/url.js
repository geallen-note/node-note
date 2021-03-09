const url = require('url');
const logjs = require('log4js');
logjs.level = 'debug';

const urlString = 'https://www.baidu.com';

console.log(url.pathToFileURL(urlString));
