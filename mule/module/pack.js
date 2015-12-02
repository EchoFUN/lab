
var requirejs = require('requirejs');


var fs = require('fs');

var config = {
  baseUrl: '.',
  
  name: 'a',
  
  out:'build.js',
  
  onBuildWrite: function (name, path, contents) {
    
    if (name == 'stair') {
      
    }
    
    if (name.indexOf('stair!') != -1) {
      
      return 'define(["toto"])';
      
    } else {
      return contents;
    }
  }
};

requirejs.optimize(config, function (results) {
  
  
  debugger;
  
});