
define('stair',[],function () {
  'use strict';

  return {
    load: function (name, req, onload, config) {
      req([config.bridge + '?q=' + name], function (content) {
        onload(content);
      });
    },
    
    write: function(plugin, module, write) {
      write('fuck the bitch !');
    },
    
    writeFile: function () {
      debugger;
      console.log(arguments);
    }
  };
})
;

fuck the bitch !;
/**
 * 
 *  
 * 
 * @author XU Kai(xukai.ken@gmail.com)
 * 
 */

require(['stair!@waimai/demo@1.0.1'], function (foo) {
  
  'use strict';

  console.log(foo);
  
});
define("a", function(){});

