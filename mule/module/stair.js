
define(function () {
  'use strict';

  var SERVER_SIDE = '//localhost:3001'; 

  return {
    load: function (name, req, onload, config) {
      req([SERVER_SIDE + '?q=' + name], function (content) {
        onload(content);
      });
    }
  };
})