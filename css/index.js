
/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

'use strict';

var dirname = require('path').dirname;

const basePath = `/Users/xukai/Documents/workspace/waimai_web/src/main/webapp/static/css/page/restaurant/restaurant.css`;

const path = `/Users/xukai/Documents/workspace/waimai_web/src/main/webapp/static/css/page/restaurant/`;

var dependency = {};

var fs = require('fs');
var readcss = function (basePath, dependency) {

    var content = fs.readFileSync(basePath, "utf8");

    var matched = content.match(/\@import\ url\(\"([^\"]+)\"\)\;/g)

    var boot = basePath.split('/').pop();
    if (matched.length == 0) {
        dependency[boot] = [];
    } else {

        for (var i = 0; i < matched.length; i++) {
            
            readcss(dirname(basePath) + '/' + matched[i])
            
            var tp = matched[i].slice(13, -3);
        }

    }


};

readcss(basePath, dependency);

const madge = require(`madge`);

var madgeObject = madge({
    'module1': [{ 'dep1a': [] }, { 'adfa': [`sdfaf`] }],
    'module2': [`dep2a`]
}).image({
    'noDependencies': `#0000ff`,
    'dependencies': `#00ff00`,
    'circular': `#bada55`,
    'edge': `#666666`,
    'bgcolor': `#ffffff`
}, function (output) {



});
