// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE

import * as Random from "bs-platform/lib/es6/random.js";

var spare = [0];

var hasSpare = [/* false */0];

function gen(mean, stdDev) {
  var match = hasSpare[0];
  if (match !== 0) {
    hasSpare[0] = /* false */0;
    return spare[0] * stdDev + mean;
  } else {
    var u = [0];
    var v = [0];
    var s = [0];
    var mu = mean;
    var sigma = stdDev;
    while(true) {
      var match$1 = +(s[0] >= 1 || s[0] === 0);
      if (match$1 !== 0) {
        u[0] = Random.$$float(1.0) * 2 - 1;
        v[0] = Random.$$float(1.0) * 2 - 1;
        s[0] = u[0] * u[0] + v[0] * v[0];
        continue ;
        
      } else {
        var mul = Math.sqrt(-2.0 * Math.log(s[0]) / s[0]);
        spare[0] = v[0] * mul;
        hasSpare[0] = /* true */1;
        return mu + sigma * u[0] * mul;
      }
    };
  }
}

export {
  gen ,
  
}
/* No side effect */
