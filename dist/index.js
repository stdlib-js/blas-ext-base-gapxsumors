"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=t(function(l,i){
var c=require('@stdlib/blas-ext-base-gsumors/dist').ndarray;function d(r,e,s,a,v){return r<=0?0:r*e+c(r,s,a,v)}i.exports=d
});var o=t(function(O,n){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=u();function x(r,e,s,a){return p(r,e,s,a,f(r,a))}n.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),m=u();y(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
