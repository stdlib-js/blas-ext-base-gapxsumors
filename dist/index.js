"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=t(function(l,i){
var c=require('@stdlib/blas-ext-base-gsumors/dist').ndarray;function d(e,r,a,s,v){return e<=0?0:e*r+c(e,a,s,v)}i.exports=d
});var o=t(function(O,n){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=u();function x(e,r,a,s){return p(e,r,a,s,f(e,s))}n.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),m=u();y(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
