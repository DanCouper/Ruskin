// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE

import * as Caml_obj from "bs-platform/lib/es6/caml_obj.js";

function degreesToRadians(d) {
  return d * (Math.PI / 180);
}

function radiansToDegrees(r) {
  return r * (180 / Math.PI);
}

function clamp(x, lower, upper) {
  return Caml_obj.caml_min(upper, Caml_obj.caml_max(lower, x));
}

export {
  degreesToRadians ,
  radiansToDegrees ,
  clamp ,
  
}
/* No side effect */
