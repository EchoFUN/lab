
define(function () {
  'use strict';

  return {
    load: function (name, req, onload, config) {
      req([config.bridge + '?q=' + name], function (content) {
        onload(content);
      });
    }
  };
})
