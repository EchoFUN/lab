/* global __dirname */


var fs = require('fs'), request = require('request'), amdlib = require('amdlib');

var _basePath = __dirname + '/module/';

var regular = /(((\@[\w]+)\/)?[\w]+)(\@(\d+(\.\d+)*))?/g;

var moduleContent = fs.readFileSync(_basePath + 'a.js').toString();

var dp = amdlib.simpleDependency(_basePath + 'a.js');

moduleContent.match(regular);

console.log(moduleContent);

