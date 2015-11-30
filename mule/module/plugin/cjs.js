/**
 * 
 * 
 * 
 * @author XU Kai(xukai.ken@gmail.com) Just for convert the Common.js module to the AMD module 
 * 
 */

define(['plugin/amd-loader'], function (loader) {
  var cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;
  
  return loader('cjs', 'js', function (name, source, req, callback, errback, config) {
    
    source = source.replace(cjsRequireRegExp, function (match, dep) {
      return '= require(\'plugin\/cjs!' + dep + '\')';
    });
    
    callback('define(function(require,exports,module){' + source + ' });');
  });
});