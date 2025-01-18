"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(b,v){
function m(e,r,a,u,x){var s,t,i;if(e<=0)return 0;if(t=x,u===0)return e*(r+a[t]);for(s=0,i=0;i<e;i++)s+=r+a[t],t+=u;return s}v.exports=m
});var c=o(function(j,f){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=n();function d(e,r,a,u){return y(e,r,a,u,p(e,u))}f.exports=d
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),O=n();g(q,"ndarray",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
