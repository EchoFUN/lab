/* global __dirname */


var fs = require('fs'), request = require('request'), amdlib = require('amdlib');

var _basePath = __dirname + '/module/';

var moduleContent = fs.readFileSync(_basePath + 'a.js').toString();

var target = _basePath + 'a.js';
var dp = amdlib.simpleDependency(target);

var dpsize = dp.length;
var counter = 0;
for (var i = 0; i < dpsize; i++) {

  var paths = dp[i].split('!');
  var _path = paths[1];

  request('http://localhost:3001?q=' + _path, function (err, resp, body) {
    if (!err && resp.statusCode == 200) {

      counter++;
      body = body.trim().replace(/^define\(/, function ($0) {
        return $0 + '"' + _path + '", '
      });
      
      var targetContent = body + moduleContent;
      fs.writeFileSync(target, body + moduleContent,'utf8');
      
      if (counter == dpsize) {
        requestHandler();
      }
    }
  });
}

function requestHandler() {
  debugger;
}

// moduleContent.match(regular);

// console.log(moduleContent);

