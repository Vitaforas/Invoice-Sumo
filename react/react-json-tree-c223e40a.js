import{a as s,r as C}from"./react-e483b31d.js";import{g as f}from"./@babel-e5cbf021.js";import{c as A,i as B}from"./react-base16-styling-898a7ddc.js";function w(e){const n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&typeof e[Symbol.iterator]=="function"?"Iterable":n==="Custom"&&e.constructor!==Object&&e instanceof Object?"Object":n}function I(e){let{styling:n,arrowStyle:t="single",expanded:r,nodeType:a,onClick:l}=e;return s.createElement("div",f({},n("arrowContainer",t),{onClick:l}),s.createElement("div",n(["arrow","arrowSign"],a,r,t),"▶",t==="double"&&s.createElement("div",n(["arrowSign","arrowSignInner"]),"▶")))}function D(e,n){return e==="Object"?Object.keys(n).length:e==="Array"?n.length:1/0}function U(e){return typeof e.set=="function"}function $(e,n,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1/0,l;if(e==="Object"){let o=Object.getOwnPropertyNames(n);t&&o.sort(t===!0?void 0:t),o=o.slice(r,a+1),l={entries:o.map(i=>({key:i,value:n[i]}))}}else if(e==="Array")l={entries:n.slice(r,a+1).map((o,i)=>({key:i+r,value:o}))};else{let o=0;const i=[];let c=!0;const m=U(n);for(const d of n){if(o>a){c=!1;break}r<=o&&(m&&Array.isArray(d)?typeof d[0]=="string"||typeof d[0]=="number"?i.push({key:d[0],value:d[1]}):i.push({key:`[entry ${o}]`,value:{"[key]":d[0],"[value]":d[1]}}):i.push({key:o,value:d})),o++}l={hasMore:!c,entries:i}}return l}function R(e,n,t){const r=[];for(;n-e>t*t;)t=t*t;for(let a=e;a<=n;a+=t)r.push({from:a,to:Math.min(n,a+t-1)});return r}function P(e,n,t,r){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0;const o=$.bind(null,e,n,t);if(!r)return o().entries;const i=l<1/0,c=Math.min(l-a,D(e,n));if(e!=="Iterable"){if(c<=r||r<7)return o(a,l).entries}else if(c<=r&&!i)return o(a,l).entries;let m;if(e==="Iterable"){const{hasMore:d,entries:u}=o(a,a+r-1);m=d?[...u,...R(a+r,a+2*r-1,r)]:u}else m=i?R(a,l,r):[...o(0,r-5).entries,...R(r-4,c-5,r),...o(c-4,c-1).entries];return m}function G(e){const{styling:n,from:t,to:r,renderChildNodes:a,nodeType:l}=e,[o,i]=C.useState(!1),c=C.useCallback(()=>{i(!o)},[o]);return o?s.createElement("div",n("itemRange",o),a(e,t,r)):s.createElement("div",f({},n("itemRange",o),{onClick:c}),s.createElement(I,{nodeType:l,styling:n,expanded:!1,onClick:c,arrowStyle:"double"}),`${t} ... ${r}`)}function j(e){return e.to!==void 0}function k(e,n,t){const{nodeType:r,data:a,collectionLimit:l,circularCache:o,keyPath:i,postprocessValue:c,sortObjectKeys:m}=e,d=[];return P(r,a,m,l,n,t).forEach(u=>{if(j(u))d.push(s.createElement(G,f({},e,{key:`ItemRange--${u.from}-${u.to}`,from:u.from,to:u.to,renderChildNodes:k})));else{const{key:g,value:p}=u,N=o.indexOf(p)!==-1;d.push(s.createElement(v,f({},e,{postprocessValue:c,collectionLimit:l,key:`Node--${g}`,keyPath:[g,...i],value:c(p),circularCache:[...o,p],isCircular:N,hideRoot:!1})))}}),d}function S(e){const{circularCache:n=[],collectionLimit:t,createItemString:r,data:a,expandable:l,getItemString:o,hideRoot:i,isCircular:c,keyPath:m,labelRenderer:d,level:u=0,nodeType:g,nodeTypeIndicator:p,shouldExpandNodeInitially:N,styling:b}=e,[E,_]=C.useState(c?!1:N(m,a,u)),h=C.useCallback(()=>{l&&_(!E)},[l,E]),L=E||i&&u===0?k({...e,circularCache:n,level:u+1}):null,M=s.createElement("span",b("nestedNodeItemType",E),p),x=o(g,a,M,r(a,t),m),O=[m,g,E,l];return i?s.createElement("li",b("rootNode",...O),s.createElement("ul",b("rootNodeChildren",...O),L)):s.createElement("li",b("nestedNode",...O),l&&s.createElement(I,{styling:b,nodeType:g,expanded:E,onClick:h}),s.createElement("label",f({},b(["label","nestedNodeLabel"],...O),{onClick:h}),d(...O)),s.createElement("span",f({},b("nestedNodeItemString",...O),{onClick:h}),x),s.createElement("ul",b("nestedNodeChildren",...O),L))}function z(e){const n=Object.getOwnPropertyNames(e).length;return`${n} ${n!==1?"keys":"key"}`}function W(e){let{data:n,...t}=e;return s.createElement(S,f({},t,{data:n,nodeType:"Object",nodeTypeIndicator:t.nodeType==="Error"?"Error()":"{}",createItemString:z,expandable:Object.getOwnPropertyNames(n).length>0}))}function F(e){return`${e.length} ${e.length!==1?"items":"item"}`}function J(e){let{data:n,...t}=e;return s.createElement(S,f({},t,{data:n,nodeType:"Array",nodeTypeIndicator:"[]",createItemString:F,expandable:n.length>0}))}function Z(e,n){let t=0,r=!1;if(Number.isSafeInteger(e.size))t=e.size;else for(const a of e){if(n&&t+1>n){r=!0;break}t+=1}return`${r?">":""}${t} ${t!==1?"entries":"entry"}`}function V(e){return s.createElement(S,f({},e,{nodeType:"Iterable",nodeTypeIndicator:"()",createItemString:Z,expandable:!0}))}function y(e){let{nodeType:n,styling:t,labelRenderer:r,keyPath:a,valueRenderer:l,value:o,valueGetter:i=c=>c}=e;return s.createElement("li",t("value",n,a),s.createElement("label",t(["label","valueLabel"],n,a),r(a,n,!1,!1)),s.createElement("span",t("valueText",n,a),l(i(o),o,...a)))}function v(e){let{getItemString:n,keyPath:t,labelRenderer:r,styling:a,value:l,valueRenderer:o,isCustomNode:i,...c}=e;const m=i(l)?"Custom":w(l),d={getItemString:n,key:t[0],keyPath:t,labelRenderer:r,nodeType:m,styling:a,value:l,valueRenderer:o},u={...c,...d,data:l,isCustomNode:i};switch(m){case"Object":case"Error":case"WeakMap":case"WeakSet":return s.createElement(W,u);case"Array":return s.createElement(J,u);case"Iterable":case"Map":case"Set":return s.createElement(V,u);case"String":return s.createElement(y,f({},d,{valueGetter:g=>`"${g}"`}));case"Number":return s.createElement(y,d);case"Boolean":return s.createElement(y,f({},d,{valueGetter:g=>g?"true":"false"}));case"Date":return s.createElement(y,f({},d,{valueGetter:g=>g.toISOString()}));case"Null":return s.createElement(y,f({},d,{valueGetter:()=>"null"}));case"Undefined":return s.createElement(y,f({},d,{valueGetter:()=>"undefined"}));case"Function":case"Symbol":return s.createElement(y,f({},d,{valueGetter:g=>g.toString()}));case"Custom":return s.createElement(y,d);default:return s.createElement(y,f({},d,{valueGetter:()=>`<${m}>`}))}}const K={scheme:"solarized",author:"ethan schoonover (http://ethanschoonover.com/solarized)",base00:"#002b36",base01:"#073642",base02:"#586e75",base03:"#657b83",base04:"#839496",base05:"#93a1a1",base06:"#eee8d5",base07:"#fdf6e3",base08:"#dc322f",base09:"#cb4b16",base0A:"#b58900",base0B:"#859900",base0C:"#2aa198",base0D:"#268bd2",base0E:"#6c71c4",base0F:"#d33682"},X=e=>({BACKGROUND_COLOR:e.base00,TEXT_COLOR:e.base07,STRING_COLOR:e.base0B,DATE_COLOR:e.base0B,NUMBER_COLOR:e.base09,BOOLEAN_COLOR:e.base09,NULL_COLOR:e.base08,UNDEFINED_COLOR:e.base08,FUNCTION_COLOR:e.base08,SYMBOL_COLOR:e.base08,LABEL_COLOR:e.base0D,ARROW_COLOR:e.base0D,ITEM_STRING_COLOR:e.base0B,ITEM_STRING_EXPANDED_COLOR:e.base03}),Y=e=>({String:e.STRING_COLOR,Date:e.DATE_COLOR,Number:e.NUMBER_COLOR,Boolean:e.BOOLEAN_COLOR,Null:e.NULL_COLOR,Undefined:e.UNDEFINED_COLOR,Function:e.FUNCTION_COLOR,Symbol:e.SYMBOL_COLOR}),H=e=>{const n=X(e);return{tree:{border:0,padding:0,marginTop:"0.5em",marginBottom:"0.5em",marginLeft:"0.125em",marginRight:0,listStyle:"none",MozUserSelect:"none",WebkitUserSelect:"none",backgroundColor:n.BACKGROUND_COLOR},value:(t,r,a)=>{let{style:l}=t;return{style:{...l,paddingTop:"0.25em",paddingRight:0,marginLeft:"0.875em",WebkitUserSelect:"text",MozUserSelect:"text",wordWrap:"break-word",paddingLeft:a.length>1?"2.125em":"1.25em",textIndent:"-0.5em",wordBreak:"break-all"}}},label:{display:"inline-block",color:n.LABEL_COLOR},valueLabel:{margin:"0 0.5em 0 0"},valueText:(t,r)=>{let{style:a}=t;return{style:{...a,color:Y(n)[r]}}},itemRange:(t,r)=>({style:{paddingTop:r?0:"0.25em",cursor:"pointer",color:n.LABEL_COLOR}}),arrow:(t,r,a)=>{let{style:l}=t;return{style:{...l,marginLeft:0,transition:"150ms",WebkitTransition:"150ms",MozTransition:"150ms",WebkitTransform:a?"rotateZ(90deg)":"rotateZ(0deg)",MozTransform:a?"rotateZ(90deg)":"rotateZ(0deg)",transform:a?"rotateZ(90deg)":"rotateZ(0deg)",transformOrigin:"45% 50%",WebkitTransformOrigin:"45% 50%",MozTransformOrigin:"45% 50%",position:"relative",lineHeight:"1.1em",fontSize:"0.75em"}}},arrowContainer:(t,r)=>{let{style:a}=t;return{style:{...a,display:"inline-block",paddingRight:"0.5em",paddingLeft:r==="double"?"1em":0,cursor:"pointer"}}},arrowSign:{color:n.ARROW_COLOR},arrowSignInner:{position:"absolute",top:0,left:"-0.4em"},nestedNode:(t,r,a,l,o)=>{let{style:i}=t;return{style:{...i,position:"relative",paddingTop:"0.25em",marginLeft:r.length>1?"0.875em":0,paddingLeft:o?0:"1.125em"}}},rootNode:{padding:0,margin:0},nestedNodeLabel:(t,r,a,l,o)=>{let{style:i}=t;return{style:{...i,margin:0,padding:0,WebkitUserSelect:o?"inherit":"text",MozUserSelect:o?"inherit":"text",cursor:o?"pointer":"default"}}},nestedNodeItemString:(t,r,a,l)=>{let{style:o}=t;return{style:{...o,paddingLeft:"0.5em",cursor:"default",color:l?n.ITEM_STRING_EXPANDED_COLOR:n.ITEM_STRING_COLOR}}},nestedNodeItemType:{marginLeft:"0.3em",marginRight:"0.3em"},nestedNodeChildren:(t,r,a)=>{let{style:l}=t;return{style:{...l,padding:0,margin:0,listStyle:"none",display:a?"block":"none"}}},rootNodeChildren:{padding:0,margin:0,listStyle:"none"}}},q=A(H,{defaultBase16:K}),Q=q,T=e=>e,ee=(e,n,t)=>t===0,te=(e,n,t,r)=>s.createElement("span",null,t," ",r),ne=e=>{let[n]=e;return s.createElement("span",null,n,":")},re=()=>!1;function se(e){let{data:n,theme:t,invertTheme:r,keyPath:a=["root"],labelRenderer:l=ne,valueRenderer:o=T,shouldExpandNodeInitially:i=ee,hideRoot:c=!1,getItemString:m=te,postprocessValue:d=T,isCustomNode:u=re,collectionLimit:g=50,sortObjectKeys:p=!1}=e;const N=C.useMemo(()=>Q(r?B(t):t),[t,r]);return s.createElement("ul",N("tree"),s.createElement(v,{keyPath:c?[]:a,value:d(n),isCustomNode:u,styling:N,labelRenderer:l,valueRenderer:o,shouldExpandNodeInitially:i,hideRoot:c,getItemString:m,postprocessValue:d,collectionLimit:g,sortObjectKeys:p}))}export{se as J};
