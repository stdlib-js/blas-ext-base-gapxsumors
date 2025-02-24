"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=c(function(A,q){
function b(e,r,u,a,n){var i,s,o,t,v;if(i=u.data,o=u.accessors[0],t=n,a===0)return e*(r+o(i,t));for(s=0,v=0;v<e;v++)s+=r+o(i,t),t+=a;return s}q.exports=b
});var f=c(function(B,m){
var d=require('@stdlib/array-base-arraylike2object/dist'),j=x();function k(e,r,u,a,n){var i,s,o,t;if(e<=0)return 0;if(o=d(u),o.accessorProtocol)return j(e,r,o,a,n);if(s=n,a===0)return e*(r+u[s]);for(i=0,t=0;t<e;t++)i+=r+u[s],s+=a;return i}m.exports=k
});var g=c(function(C,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(e,r,u,a){return P(e,r,u,a,O(e,a))}y.exports=R
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=g(),w=f();l(p,"ndarray",w);module.exports=p;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
