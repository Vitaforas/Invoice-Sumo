import{l as an}from"./@babel-e5cbf021.js";import{r as cn}from"./react-e483b31d.js";var q={};/*! For license information please see index.js.LICENSE.txt */(function(K){(()=>{var Y={184:(r,i)=>{var c;(function(){var u={}.hasOwnProperty;function s(){for(var o=[],l=0;l<arguments.length;l++){var a=arguments[l];if(a){var m=typeof a;if(m==="string"||m==="number")o.push(a);else if(Array.isArray(a)){if(a.length){var j=s.apply(null,a);j&&o.push(j)}}else if(m==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var S in a)u.call(a,S)&&a[S]&&o.push(S)}}}return o.join(" ")}r.exports?(s.default=s,r.exports=s):(c=(function(){return s}).apply(i,[]))===void 0||(r.exports=c)})()},28:(r,i,c)=>{c.d(i,{Z:()=>a});var u=c(81),s=c.n(u),o=c(645),l=c.n(o)()(s());l.push([r.id,`/* :where() gives the styles specificity 0, which makes them overridable */
:where(.vi__wrapper) {
  position: relative;
  width: min-content;
}

.vi {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  color: transparent;
  background: transparent;
  caret-color: transparent;
  outline: none;
  border: 0 none transparent;
}

.vi::-ms-reveal,
.vi::-ms-clear {
  display: none;
}

.vi::selection {
  background: transparent;
}

:where(.vi__container) {
  display: flex;
  gap: 8px;
  height: 50px;
  width: 300px;
}

:where(.vi__character) {
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  color: black;
  background-color: white;
  border: 1px solid black;
  cursor: default;
  user-select: none;
  box-sizing: border-box;
}

:where(.vi__character--inactive) {
  color: dimgray;
  background-color: lightgray;
}

:where(.vi__character--selected) {
  outline: 2px solid cornflowerblue;
  color: cornflowerblue;
}
`,""]);const a=l},645:r=>{r.exports=function(i){var c=[];return c.toString=function(){return this.map(function(u){var s="",o=u[5]!==void 0;return u[4]&&(s+="@supports (".concat(u[4],") {")),u[2]&&(s+="@media ".concat(u[2]," {")),o&&(s+="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {")),s+=i(u),o&&(s+="}"),u[2]&&(s+="}"),u[4]&&(s+="}"),s}).join("")},c.i=function(u,s,o,l,a){typeof u=="string"&&(u=[[null,u,void 0]]);var m={};if(o)for(var j=0;j<this.length;j++){var S=this[j][0];S!=null&&(m[S]=!0)}for(var P=0;P<u.length;P++){var p=[].concat(u[P]);o&&m[p[0]]||(a!==void 0&&(p[5]===void 0||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),s&&(p[2]&&(p[1]="@media ".concat(p[2]," {").concat(p[1],"}")),p[2]=s),l&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=l):p[4]="".concat(l)),c.push(p))}},c}},81:r=>{r.exports=function(i){return i[1]}},703:(r,i,c)=>{var u=c(414);function s(){}function o(){}o.resetWarningCache=s,r.exports=function(){function l(j,S,P,p,D,I){if(I!==u){var k=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw k.name="Invariant Violation",k}}function a(){return l}l.isRequired=l;var m={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:a,element:l,elementType:l,instanceOf:a,node:l,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:o,resetWarningCache:s};return m.PropTypes=m,m}},697:(r,i,c)=>{r.exports=c(703)()},414:r=>{r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},z={};function d(r){var i=z[r];if(i!==void 0)return i.exports;var c=z[r]={id:r,exports:{}};return Y[r](c,c.exports,d),c.exports}d.n=r=>{var i=r&&r.__esModule?()=>r.default:()=>r;return d.d(i,{a:i}),i},d.d=(r,i)=>{for(var c in i)d.o(i,c)&&!d.o(r,c)&&Object.defineProperty(r,c,{enumerable:!0,get:i[c]})},d.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),d.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var C={};(()=>{d.r(C),d.d(C,{default:()=>G});const r=cn;var i=d.n(r),c=d(184),u=d.n(c),s=d(697),o=d.n(s),l=d(28);function a(n){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(n)}var m=["className","type"],j=["className"];function S(n,e,t){return(e=function(f){var h=function(b,x){if(a(b)!=="object"||b===null)return b;var O=b[Symbol.toPrimitive];if(O!==void 0){var g=O.call(b,"string");if(a(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f);return a(h)==="symbol"?h:String(h)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P(){return P=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&(n[f]=t[f])}return n},P.apply(this,arguments)}function p(n,e){if(n==null)return{};var t,f,h=function(x,O){if(x==null)return{};var g,_,w={},A=Object.keys(x);for(_=0;_<A.length;_++)g=A[_],O.indexOf(g)>=0||(w[g]=x[g]);return w}(n,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(f=0;f<b.length;f++)t=b[f],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(h[t]=n[t])}return h}function D(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,f){var h=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(h!=null){var b,x,O,g,_=[],w=!0,A=!1;try{if(O=(h=h.call(t)).next,f===0){if(Object(h)!==h)return;w=!1}else for(;!(w=(b=O.call(h)).done)&&(_.push(b.value),_.length!==f);w=!0);}catch(R){A=!0,x=R}finally{try{if(!w&&h.return!=null&&(g=h.return(),Object(g)!==g))return}finally{if(A)throw x}}return _}}(n,e)||I(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(n,e){if(n){if(typeof n=="string")return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(n,e):void 0}}function k(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,f=new Array(e);t<e;t++)f[t]=n[t];return f}var N=(0,r.forwardRef)(function(n,e){var t=n.value,f=n.length,h=n.validChars,b=n.placeholder,x=n.autoFocus,O=n.passwordMode,g=n.inputProps,_=n.containerProps,w=n.classNames,A=n.onChange,R=n.onFocus,U=n.onBlur,V=n.onComplete,W=D((0,r.useState)(""),2),J=W[0],Q=W[1],Z=D((0,r.useState)(!1),2),H=Z[0],$=Z[1],M=(0,r.useRef)(null);(0,r.useEffect)(function(){x&&M.current.focus()},[x]);var F,X=function(){M.current.focus()},E=function(){return t??J},nn=g.className,rn=g.type,en=p(g,m),tn=_.className,on=p(_,j);return i().createElement("div",{className:"vi__wrapper"},i().createElement("input",P({"aria-label":"verification input",spellCheck:!1,value:E(),onChange:function(y){var v=y.target.value.replace(/\s/g,"");RegExp("^[".concat(h,"]{0,").concat(f,"}$")).test(v)&&(A&&(A==null||A(v)),Q(v),v.length===f&&(V==null||V(v)))},ref:function(y){M.current=y,typeof e=="function"?e(y):e&&(e.current=y)},className:u()("vi",nn),onKeyDown:function(y){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(y.key)&&y.preventDefault()},onFocus:function(){$(!0),R==null||R()},onBlur:function(){$(!1),U==null||U()},onSelect:function(y){var v=y.target.value;y.target.setSelectionRange(v.length,v.length)},type:O?"password":rn},en)),i().createElement("div",P({"data-testid":"container",className:u()("vi__container",w.container,tn),onClick:function(){return M.current.focus()}},on),(F=Array(f),function(y){if(Array.isArray(y))return k(y)}(F)||function(y){if(typeof Symbol<"u"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)}(F)||I(F)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()).map(function(y,v){var T;return i().createElement("div",{className:u()("vi__character",w.character,(T={"vi__character--selected":(E().length===v||E().length===v+1&&f===v+1)&&H},S(T,w.characterSelected,(E().length===v||E().length===v+1&&f===v+1)&&H),S(T,"vi__character--inactive",E().length<v),S(T,w.characterInactive,E().length<v),T)),onClick:X,id:"field-".concat(v),"data-testid":"character-".concat(v),key:v},O&&E()[v]?"*":E()[v]||b)})),i().createElement("style",{dangerouslySetInnerHTML:{__html:l.Z}}))});N.displayName="VerificationInput",N.propTypes={value:o().string,length:o().number,validChars:o().string,placeholder:o().string,autoFocus:o().bool,passwordMode:o().bool,inputProps:o().object,containerProps:o().object,classNames:o().shape({container:o().string,character:o().string,characterInactive:o().string,characterSelected:o().string}),onChange:o().func,onFocus:o().func,onBlur:o().func,onComplete:o().func},N.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"·",autoFocus:!1,inputProps:{},containerProps:{},classNames:{}};const G=N})();var B=K;for(var L in C)B[L]=C[L];C.__esModule&&Object.defineProperty(B,"__esModule",{value:!0})})()})(q);const sn=an(q);export{sn as V};
