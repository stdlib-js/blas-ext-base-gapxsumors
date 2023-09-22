"use strict";var v=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var f=v(function(R,o){
function p(r,u,t,i){var a,e,n;if(r<=0)return 0;if(r===1||i===0)return u+t[0];for(i<0?e=(1-r)*i:e=0,a=0,n=0;n<r;n++)a+=u+t[e],e+=i;return a}o.exports=p
});var m=v(function(b,c){
function q(r,u,t,i,a){var e,n,s;if(r<=0)return 0;if(r===1||i===0)return u+t[a];for(n=a,e=0,s=0;s<r;s++)e+=u+t[n],n+=i;return e}c.exports=q
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=f(),g=m();y(x,"ndarray",g);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
