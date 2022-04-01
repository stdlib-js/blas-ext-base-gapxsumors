// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var i,f,u;if(r<=0)return 0;if(1===r||0===t)return e+n[0];for(f=t<0?(1-r)*t:0,i=0,u=0;u<r;u++)i+=e+n[f],f+=t;return i},n=function(r,e,n,t,i){var f,u,a;if(r<=0)return 0;if(1===r||0===t)return e+n[i];for(u=i,f=0,a=0;a<r;a++)f+=e+n[u],u+=t;return f};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
