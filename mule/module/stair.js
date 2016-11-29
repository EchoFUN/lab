/**
 * 
 * 美团外卖模块化管理生态 STAIR 客户端模块部分；用以加载模块，使用了 JSONP 的方式动态加载脚本；
 * 
 * @author XU Kai(xukai@meituan.com)
 * @date 2015-12-15 星期二
 * 
 */

define(function () {
  'use strict';

  function validated(str) {
    if (!str || typeof str != 'string') {
      return false;
    }
    return true;
  }

  return {
    load: function (modulename, req, onload, config) {

      var server = config.bridge || 'http://10.4.238.35:3001/';
      if (!validated(server) || !validated(modulename)) {
        onload();
        return;
      }

      req([config.bridge + '?q=' + modulename], function (content) {
        onload(content);
      });
    }
  };
})
