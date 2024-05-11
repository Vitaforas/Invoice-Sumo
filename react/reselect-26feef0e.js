import{i as x}from"./@babel-e5cbf021.js";var g="NOT_FOUND";function R(a){var t;return{get:function(r){return t&&a(t.key,r)?t.value:g},put:function(r,c){t={key:r,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function F(a,t){var e=[];function r(n){var u=e.findIndex(function(f){return t(n,f.key)});if(u>-1){var i=e[u];return u>0&&(e.splice(u,1),e.unshift(i)),i.value}return g}function c(n,u){r(n)===g&&(e.unshift({key:n,value:u}),e.length>a&&e.pop())}function o(){return e}function l(){e=[]}return{get:r,put:c,getEntries:o,clear:l}}var E=function(t,e){return t===e};function N(a){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var c=e.length,o=0;o<c;o++)if(!a(e[o],r[o]))return!1;return!0}}function j(a,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,c=r===void 0?E:r,o=e.maxSize,l=o===void 0?1:o,n=e.resultEqualityCheck,u=N(c),i=l===1?R(u):F(l,u);function f(){var s=i.get(arguments);if(s===g){if(s=a.apply(null,arguments),n){var p=i.getEntries(),v=p.find(function(d){return n(d.value,s)});v&&(s=v.value)}i.put(arguments,s)}return s}return f.clearCache=function(){return i.clear()},f}function P(a){var t=Array.isArray(a[0])?a[0]:a;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function C(a){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var c=function(){for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];var i=0,f,s={memoizeOptions:void 0},p=n.pop();if(typeof p=="object"&&(s=p,p=n.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var v=s,d=v.memoizeOptions,h=d===void 0?e:d,q=Array.isArray(h)?h:[h],y=P(n),b=a.apply(void 0,[function(){return i++,p.apply(null,arguments)}].concat(q)),O=a(function(){for(var w=[],A=y.length,S=0;S<A;S++)w.push(y[S].apply(null,arguments));return f=b.apply(null,w),f});return Object.assign(O,{resultFunc:p,memoizedResultFunc:b,dependencies:y,lastResult:function(){return f},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),O};return c}var z=C(j),$=function(t,e){if(e===void 0&&(e=z),typeof t!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof t));var r=Object.keys(t),c=e(r.map(function(o){return t[o]}),function(){for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return l.reduce(function(u,i,f){return u[r[f]]=i,u},{})});return c};const D=Object.freeze(Object.defineProperty({__proto__:null,createSelector:z,createSelectorCreator:C,createStructuredSelector:$,defaultEqualityCheck:E,defaultMemoize:j},Symbol.toStringTag,{value:"Module"})),T=x(D);export{z as c,T as r};
