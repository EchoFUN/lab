
var tata = require('tata');

for (var i in tata) {
  if (tata.hasOwnProperty(i)) {
    exports[i] = tata[i];
  }
}