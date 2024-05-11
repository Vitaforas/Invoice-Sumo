import{r as F}from"./react-e483b31d.js";import{e as b,r as re,s as D,f as N,b as c,d as Z,m as Ie,t as Ae,a as ge,n as $,_ as he,h as me,g as Re,c as ee}from"./@babel-e5cbf021.js";import{b as K,q as X,z,A as _,p as Le,B as xe}from"./rc-util-6b529ca7.js";import{S as Ue}from"./async-validator-dee29e8b.js";var G="RC_FORM_INTERNAL_HOOKS",M=function(){K(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},Y=F.createContext({getFieldValue:M,getFieldsValue:M,getFieldError:M,getFieldWarning:M,getFieldsError:M,isFieldsTouched:M,isFieldTouched:M,isFieldValidating:M,isFieldsValidating:M,resetFields:M,setFields:M,setFieldValue:M,setFieldsValue:M,validateFields:M,submit:M,getInternalHooks:function(){return M(),{dispatch:M,initEntityValue:M,registerField:M,useSubscribe:M,setInitialValues:M,destroyForm:M,setCallbacks:M,registerWatch:M,getFields:M,setValidateMessages:M,setPreserve:M,getInitialValue:M}}}),ae=F.createContext(null);function le(o){return o==null?[]:Array.isArray(o)?o:[o]}function We(o){return o&&!!o._init}var U="'${name}' is not a valid ${type}",Ne={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:U,method:U,array:U,object:U,number:U,date:U,boolean:U,integer:U,float:U,regexp:U,email:U,url:U,hex:U},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},Pe=Ue;function He(o,l){return o.replace(/\$\{\w+\}/g,function(r){var t=r.slice(2,-1);return l[t]})}var Ce="CODE_LOGIC_ERROR";function oe(o,l,r,t,e){return ce.apply(this,arguments)}function ce(){return ce=re(D().mark(function o(l,r,t,e,n){var a,d,u,s,i,f,v,w,y;return D().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return a=b({},t),delete a.ruleIndex,Pe.warning=function(){},a.validator&&(d=a.validator,a.validator=function(){try{return d.apply(void 0,arguments)}catch(h){return console.error(h),Promise.reject(Ce)}}),u=null,a&&a.type==="array"&&a.defaultField&&(u=a.defaultField,delete a.defaultField),s=new Pe(c({},l,[a])),i=X(Ne,e.validateMessages),s.messages(i),f=[],g.prev=10,g.next=13,Promise.resolve(s.validate(c({},l,r),b({},e)));case 13:g.next=18;break;case 15:g.prev=15,g.t0=g.catch(10),g.t0.errors&&(f=g.t0.errors.map(function(h,m){var V=h.message,S=V===Ce?i.default:V;return F.isValidElement(S)?F.cloneElement(S,{key:"error_".concat(m)}):S}));case 18:if(!(!f.length&&u)){g.next=23;break}return g.next=21,Promise.all(r.map(function(h,m){return oe("".concat(l,".").concat(m),h,u,e,n)}));case 21:return v=g.sent,g.abrupt("return",v.reduce(function(h,m){return[].concat(N(h),N(m))},[]));case 23:return w=b(b({},t),{},{name:l,enum:(t.enum||[]).join(", ")},n),y=f.map(function(h){return typeof h=="string"?He(h,w):h}),g.abrupt("return",y);case 26:case"end":return g.stop()}},o,null,[[10,15]])})),ce.apply(this,arguments)}function je(o,l,r,t,e,n){var a=o.join("."),d=r.map(function(i,f){var v=i.validator,w=b(b({},i),{},{ruleIndex:f});return v&&(w.validator=function(y,p,g){var h=!1,m=function(){for(var k=arguments.length,E=new Array(k),R=0;R<k;R++)E[R]=arguments[R];Promise.resolve().then(function(){K(!h,"Your validator function has already return a promise. `callback` will be ignored."),h||g.apply(void 0,E)})},V=v(y,p,m);h=V&&typeof V.then=="function"&&typeof V.catch=="function",K(h,"`callback` is deprecated. Please return a promise instead."),h&&V.then(function(){g()}).catch(function(S){g(S||" ")})}),w}).sort(function(i,f){var v=i.warningOnly,w=i.ruleIndex,y=f.warningOnly,p=f.ruleIndex;return!!v==!!y?w-p:v?1:-1}),u;if(e===!0)u=new Promise(function(){var i=re(D().mark(function f(v,w){var y,p,g;return D().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:y=0;case 1:if(!(y<d.length)){m.next=12;break}return p=d[y],m.next=5,oe(a,l,p,t,n);case 5:if(g=m.sent,!g.length){m.next=9;break}return w([{errors:g,rule:p}]),m.abrupt("return");case 9:y+=1,m.next=1;break;case 12:v([]);case 13:case"end":return m.stop()}},f)}));return function(f,v){return i.apply(this,arguments)}}());else{var s=d.map(function(i){return oe(a,l,i,t,n).then(function(f){return{errors:f,rule:i}})});u=(e?_e(s):De(s)).then(function(i){return Promise.reject(i)})}return u.catch(function(i){return i}),u}function De(o){return de.apply(this,arguments)}function de(){return de=re(D().mark(function o(l){return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(l).then(function(e){var n,a=(n=[]).concat.apply(n,N(e));return a}));case 1:case"end":return t.stop()}},o)})),de.apply(this,arguments)}function _e(o){return fe.apply(this,arguments)}function fe(){return fe=re(D().mark(function o(l){var r;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.abrupt("return",new Promise(function(n){l.forEach(function(a){a.then(function(d){d.errors.length&&n([d]),r+=1,r===l.length&&n([])})})}));case 2:case"end":return e.stop()}},o)})),fe.apply(this,arguments)}function I(o){return le(o)}function we(o,l){var r={};return l.forEach(function(t){var e=z(o,t);r=_(r,t,e)}),r}function B(o,l){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return o&&o.some(function(t){return $e(l,t,r)})}function $e(o,l){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!o||!l||!r&&o.length!==l.length?!1:l.every(function(t,e){return o[e]===t})}function ze(o,l){if(o===l)return!0;if(!o&&l||o&&!l||!o||!l||Z(o)!=="object"||Z(l)!=="object")return!1;var r=Object.keys(o),t=Object.keys(l),e=new Set([].concat(r,t));return N(e).every(function(n){var a=o[n],d=l[n];return typeof a=="function"&&typeof d=="function"?!0:a===d})}function Ke(o){var l=arguments.length<=1?void 0:arguments[1];return l&&l.target&&Z(l.target)==="object"&&o in l.target?l.target[o]:l}function Ee(o,l,r){var t=o.length;if(l<0||l>=t||r<0||r>=t)return o;var e=o[l],n=l-r;return n>0?[].concat(N(o.slice(0,r)),[e],N(o.slice(r,l)),N(o.slice(l+1,t))):n<0?[].concat(N(o.slice(0,l)),N(o.slice(l+1,r+1)),[e],N(o.slice(r+1,t))):o}var qe=["name"],W=[];function be(o,l,r,t,e,n){return typeof o=="function"?o(l,r,"source"in n?{source:n.source}:{}):t!==e}var pe=function(o){Ie(r,o);var l=Ae(r);function r(t){var e;if(ge(this,r),e=l.call(this,t),c($(e),"state",{resetCount:0}),c($(e),"cancelRegisterFunc",null),c($(e),"mounted",!1),c($(e),"touched",!1),c($(e),"dirty",!1),c($(e),"validatePromise",void 0),c($(e),"prevValidating",void 0),c($(e),"errors",W),c($(e),"warnings",W),c($(e),"cancelRegister",function(){var u=e.props,s=u.preserve,i=u.isListField,f=u.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(i,s,I(f)),e.cancelRegisterFunc=null}),c($(e),"getNamePath",function(){var u=e.props,s=u.name,i=u.fieldContext,f=i.prefixName,v=f===void 0?[]:f;return s!==void 0?[].concat(N(v),N(s)):[]}),c($(e),"getRules",function(){var u=e.props,s=u.rules,i=s===void 0?[]:s,f=u.fieldContext;return i.map(function(v){return typeof v=="function"?v(f):v})}),c($(e),"refresh",function(){e.mounted&&e.setState(function(u){var s=u.resetCount;return{resetCount:s+1}})}),c($(e),"metaCache",null),c($(e),"triggerMetaEvent",function(u){var s=e.props.onMetaChange;if(s){var i=b(b({},e.getMeta()),{},{destroy:u});Le(e.metaCache,i)||s(i),e.metaCache=i}else e.metaCache=null}),c($(e),"onStoreChange",function(u,s,i){var f=e.props,v=f.shouldUpdate,w=f.dependencies,y=w===void 0?[]:w,p=f.onReset,g=i.store,h=e.getNamePath(),m=e.getValue(u),V=e.getValue(g),S=s&&B(s,h);switch(i.type==="valueUpdate"&&i.source==="external"&&m!==V&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=W,e.warnings=W,e.triggerMetaEvent()),i.type){case"reset":if(!s||S){e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.errors=W,e.warnings=W,e.triggerMetaEvent(),p==null||p(),e.refresh();return}break;case"remove":{if(v){e.reRender();return}break}case"setField":{var k=i.data;if(S){"touched"in k&&(e.touched=k.touched),"validating"in k&&!("originRCField"in k)&&(e.validatePromise=k.validating?Promise.resolve([]):null),"errors"in k&&(e.errors=k.errors||W),"warnings"in k&&(e.warnings=k.warnings||W),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}else if("value"in k&&B(s,h,!0)){e.reRender();return}if(v&&!h.length&&be(v,u,g,m,V,i)){e.reRender();return}break}case"dependenciesUpdate":{var E=y.map(I);if(E.some(function(R){return B(i.relatedFields,R)})){e.reRender();return}break}default:if(S||(!y.length||h.length||v)&&be(v,u,g,m,V,i)){e.reRender();return}break}v===!0&&e.reRender()}),c($(e),"validateRules",function(u){var s=e.getNamePath(),i=e.getValue(),f=u||{},v=f.triggerName,w=f.validateOnly,y=w===void 0?!1:w,p=Promise.resolve().then(re(D().mark(function g(){var h,m,V,S,k,E,R;return D().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(e.mounted){C.next=2;break}return C.abrupt("return",[]);case 2:if(h=e.props,m=h.validateFirst,V=m===void 0?!1:m,S=h.messageVariables,k=h.validateDebounce,E=e.getRules(),v&&(E=E.filter(function(P){return P}).filter(function(P){var T=P.validateTrigger;if(!T)return!0;var O=le(T);return O.includes(v)})),!(k&&v)){C.next=10;break}return C.next=8,new Promise(function(P){setTimeout(P,k)});case 8:if(e.validatePromise===p){C.next=10;break}return C.abrupt("return",[]);case 10:return R=je(s,i,E,u,V,S),R.catch(function(P){return P}).then(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W;if(e.validatePromise===p){var T;e.validatePromise=null;var O=[],A=[];(T=P.forEach)===null||T===void 0||T.call(P,function(x){var j=x.rule.warningOnly,Q=x.errors,ne=Q===void 0?W:Q;j?A.push.apply(A,N(ne)):O.push.apply(O,N(ne))}),e.errors=O,e.warnings=A,e.triggerMetaEvent(),e.reRender()}}),C.abrupt("return",R);case 13:case"end":return C.stop()}},g)})));return y||(e.validatePromise=p,e.dirty=!0,e.errors=W,e.warnings=W,e.triggerMetaEvent(),e.reRender()),p}),c($(e),"isFieldValidating",function(){return!!e.validatePromise}),c($(e),"isFieldTouched",function(){return e.touched}),c($(e),"isFieldDirty",function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var u=e.props.fieldContext,s=u.getInternalHooks(G),i=s.getInitialValue;return i(e.getNamePath())!==void 0}),c($(e),"getErrors",function(){return e.errors}),c($(e),"getWarnings",function(){return e.warnings}),c($(e),"isListField",function(){return e.props.isListField}),c($(e),"isList",function(){return e.props.isList}),c($(e),"isPreserve",function(){return e.props.preserve}),c($(e),"getMeta",function(){e.prevValidating=e.isFieldValidating();var u={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath(),validated:e.validatePromise===null};return u}),c($(e),"getOnlyChild",function(u){if(typeof u=="function"){var s=e.getMeta();return b(b({},e.getOnlyChild(u(e.getControlled(),s,e.props.fieldContext))),{},{isFunction:!0})}var i=xe(u);return i.length!==1||!F.isValidElement(i[0])?{child:i,isFunction:!1}:{child:i[0],isFunction:!1}}),c($(e),"getValue",function(u){var s=e.props.fieldContext.getFieldsValue,i=e.getNamePath();return z(u||s(!0),i)}),c($(e),"getControlled",function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.props,i=s.trigger,f=s.validateTrigger,v=s.getValueFromEvent,w=s.normalize,y=s.valuePropName,p=s.getValueProps,g=s.fieldContext,h=f!==void 0?f:g.validateTrigger,m=e.getNamePath(),V=g.getInternalHooks,S=g.getFieldsValue,k=V(G),E=k.dispatch,R=e.getValue(),L=p||function(O){return c({},y,O)},C=u[i],P=b(b({},u),L(R));P[i]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var O,A=arguments.length,x=new Array(A),j=0;j<A;j++)x[j]=arguments[j];v?O=v.apply(void 0,x):O=Ke.apply(void 0,[y].concat(x)),w&&(O=w(O,R,S(!0))),E({type:"updateValue",namePath:m,value:O}),C&&C.apply(void 0,x)};var T=le(h||[]);return T.forEach(function(O){var A=P[O];P[O]=function(){A&&A.apply(void 0,arguments);var x=e.props.rules;x&&x.length&&E({type:"validateField",namePath:m,triggerName:O})}}),P}),t.fieldContext){var n=t.fieldContext.getInternalHooks,a=n(G),d=a.initEntityValue;d($(e))}return e}return he(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,a=e.fieldContext;if(this.mounted=!0,a){var d=a.getInternalHooks,u=d(G),s=u.registerField;this.cancelRegisterFunc=s(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,a=this.getOnlyChild(n),d=a.child,u=a.isFunction,s;return u?s=d:F.isValidElement(d)?s=F.cloneElement(d,this.getControlled(d.props)):(K(!d,"`children` of Field is not validate ReactElement."),s=d),F.createElement(F.Fragment,{key:e},s)}}]),r}(F.Component);c(pe,"contextType",Y);c(pe,"defaultProps",{trigger:"onChange",valuePropName:"value"});function Me(o){var l=o.name,r=me(o,qe),t=F.useContext(Y),e=F.useContext(ae),n=l!==void 0?I(l):void 0,a="keep";return r.isListField||(a="_".concat((n||[]).join("_"))),F.createElement(pe,Re({key:a,name:n,isListField:!!e},r,{fieldContext:t}))}function Ge(o){var l=o.name,r=o.initialValue,t=o.children,e=o.rules,n=o.validateTrigger,a=o.isListField,d=F.useContext(Y),u=F.useContext(ae),s=F.useRef({keys:[],id:0}),i=s.current,f=F.useMemo(function(){var p=I(d.prefixName)||[];return[].concat(N(p),N(I(l)))},[d.prefixName,l]),v=F.useMemo(function(){return b(b({},d),{},{prefixName:f})},[d,f]),w=F.useMemo(function(){return{getKey:function(g){var h=f.length,m=g[h];return[i.keys[m],g.slice(h+1)]}}},[f]);if(typeof t!="function")return K(!1,"Form.List only accepts function as children."),null;var y=function(g,h,m){var V=m.source;return V==="internal"?!1:g!==h};return F.createElement(ae.Provider,{value:w},F.createElement(Y.Provider,{value:v},F.createElement(Me,{name:[],shouldUpdate:y,rules:e,validateTrigger:n,initialValue:r,isList:!0,isListField:a??!!u},function(p,g){var h=p.value,m=h===void 0?[]:h,V=p.onChange,S=d.getFieldValue,k=function(){var C=S(f||[]);return C||[]},E={add:function(C,P){var T=k();P>=0&&P<=T.length?(i.keys=[].concat(N(i.keys.slice(0,P)),[i.id],N(i.keys.slice(P))),V([].concat(N(T.slice(0,P)),[C],N(T.slice(P))))):(i.keys=[].concat(N(i.keys),[i.id]),V([].concat(N(T),[C]))),i.id+=1},remove:function(C){var P=k(),T=new Set(Array.isArray(C)?C:[C]);T.size<=0||(i.keys=i.keys.filter(function(O,A){return!T.has(A)}),V(P.filter(function(O,A){return!T.has(A)})))},move:function(C,P){if(C!==P){var T=k();C<0||C>=T.length||P<0||P>=T.length||(i.keys=Ee(i.keys,C,P),V(Ee(T,C,P)))}}},R=m||[];return Array.isArray(R)||(R=[]),t(R.map(function(L,C){var P=i.keys[C];return P===void 0&&(i.keys[C]=i.id,P=i.keys[C],i.id+=1),{name:C,key:P,isListField:!0}}),E,g)})))}function Je(o){var l=!1,r=o.length,t=[];return o.length?new Promise(function(e,n){o.forEach(function(a,d){a.catch(function(u){return l=!0,u}).then(function(u){r-=1,t[d]=u,!(r>0)&&(l&&n(t),e(t))})})}):Promise.resolve([])}var Se="__@field_split__";function ue(o){return o.map(function(l){return"".concat(Z(l),":").concat(l)}).join(Se)}var J=function(){function o(){ge(this,o),c(this,"kvs",new Map)}return he(o,[{key:"set",value:function(r,t){this.kvs.set(ue(r),t)}},{key:"get",value:function(r){return this.kvs.get(ue(r))}},{key:"update",value:function(r,t){var e=this.get(r),n=t(e);n?this.set(r,n):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(ue(r))}},{key:"map",value:function(r){return N(this.kvs.entries()).map(function(t){var e=ee(t,2),n=e[0],a=e[1],d=n.split(Se);return r({key:d.map(function(u){var s=u.match(/^([^:]*):(.*)$/),i=ee(s,3),f=i[1],v=i[2];return f==="number"?Number(v):v}),value:a})})}},{key:"toJSON",value:function(){var r={};return this.map(function(t){var e=t.key,n=t.value;return r[e.join(".")]=n,null}),r}}]),o}(),Be=["name"],Ye=he(function o(l){var r=this;ge(this,o),c(this,"formHooked",!1),c(this,"forceRootUpdate",void 0),c(this,"subscribable",!0),c(this,"store",{}),c(this,"fieldEntities",[]),c(this,"initialValues",{}),c(this,"callbacks",{}),c(this,"validateMessages",null),c(this,"preserve",null),c(this,"lastValidatePromise",null),c(this,"getForm",function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}}),c(this,"getInternalHooks",function(t){return t===G?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(K(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),c(this,"useSubscribe",function(t){r.subscribable=t}),c(this,"prevWithoutPreserves",null),c(this,"setInitialValues",function(t,e){if(r.initialValues=t||{},e){var n,a=X(t,r.store);(n=r.prevWithoutPreserves)===null||n===void 0||n.map(function(d){var u=d.key;a=_(a,u,z(t,u))}),r.prevWithoutPreserves=null,r.updateStore(a)}}),c(this,"destroyForm",function(){var t=new J;r.getFieldEntities(!0).forEach(function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)}),r.prevWithoutPreserves=t}),c(this,"getInitialValue",function(t){var e=z(r.initialValues,t);return t.length?X(e):e}),c(this,"setCallbacks",function(t){r.callbacks=t}),c(this,"setValidateMessages",function(t){r.validateMessages=t}),c(this,"setPreserve",function(t){r.preserve=t}),c(this,"watchList",[]),c(this,"registerWatch",function(t){return r.watchList.push(t),function(){r.watchList=r.watchList.filter(function(e){return e!==t})}}),c(this,"notifyWatch",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var e=r.getFieldsValue(),n=r.getFieldsValue(!0);r.watchList.forEach(function(a){a(e,n,t)})}}),c(this,"timeoutId",null),c(this,"warningUnhooked",function(){}),c(this,"updateStore",function(t){r.store=t}),c(this,"getFieldEntities",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?r.fieldEntities.filter(function(e){return e.getNamePath().length}):r.fieldEntities}),c(this,"getFieldsMap",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new J;return r.getFieldEntities(t).forEach(function(n){var a=n.getNamePath();e.set(a,n)}),e}),c(this,"getFieldEntitiesForNamePathList",function(t){if(!t)return r.getFieldEntities(!0);var e=r.getFieldsMap(!0);return t.map(function(n){var a=I(n);return e.get(a)||{INVALIDATE_NAME_PATH:I(n)}})}),c(this,"getFieldsValue",function(t,e){r.warningUnhooked();var n,a,d;if(t===!0||Array.isArray(t)?(n=t,a=e):t&&Z(t)==="object"&&(d=t.strict,a=t.filter),n===!0&&!a)return r.store;var u=r.getFieldEntitiesForNamePathList(Array.isArray(n)?n:null),s=[];return u.forEach(function(i){var f,v,w="INVALIDATE_NAME_PATH"in i?i.INVALIDATE_NAME_PATH:i.getNamePath();if(d){var y,p;if((y=(p=i).isList)!==null&&y!==void 0&&y.call(p))return}else if(!n&&(f=(v=i).isListField)!==null&&f!==void 0&&f.call(v))return;if(!a)s.push(w);else{var g="getMeta"in i?i.getMeta():null;a(g)&&s.push(w)}}),we(r.store,s.map(I))}),c(this,"getFieldValue",function(t){r.warningUnhooked();var e=I(t);return z(r.store,e)}),c(this,"getFieldsError",function(t){r.warningUnhooked();var e=r.getFieldEntitiesForNamePathList(t);return e.map(function(n,a){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:I(t[a]),errors:[],warnings:[]}})}),c(this,"getFieldError",function(t){r.warningUnhooked();var e=I(t),n=r.getFieldsError([e])[0];return n.errors}),c(this,"getFieldWarning",function(t){r.warningUnhooked();var e=I(t),n=r.getFieldsError([e])[0];return n.warnings}),c(this,"isFieldsTouched",function(){r.warningUnhooked();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e[0],d=e[1],u,s=!1;e.length===0?u=null:e.length===1?Array.isArray(a)?(u=a.map(I),s=!1):(u=null,s=a):(u=a.map(I),s=d);var i=r.getFieldEntities(!0),f=function(g){return g.isFieldTouched()};if(!u)return s?i.every(f):i.some(f);var v=new J;u.forEach(function(p){v.set(p,[])}),i.forEach(function(p){var g=p.getNamePath();u.forEach(function(h){h.every(function(m,V){return g[V]===m})&&v.update(h,function(m){return[].concat(N(m),[p])})})});var w=function(g){return g.some(f)},y=v.map(function(p){var g=p.value;return g});return s?y.every(w):y.some(w)}),c(this,"isFieldTouched",function(t){return r.warningUnhooked(),r.isFieldsTouched([t])}),c(this,"isFieldsValidating",function(t){r.warningUnhooked();var e=r.getFieldEntities();if(!t)return e.some(function(a){return a.isFieldValidating()});var n=t.map(I);return e.some(function(a){var d=a.getNamePath();return B(n,d)&&a.isFieldValidating()})}),c(this,"isFieldValidating",function(t){return r.warningUnhooked(),r.isFieldsValidating([t])}),c(this,"resetWithFieldInitialValue",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new J,n=r.getFieldEntities(!0);n.forEach(function(u){var s=u.props.initialValue,i=u.getNamePath();if(s!==void 0){var f=e.get(i)||new Set;f.add({entity:u,value:s}),e.set(i,f)}});var a=function(s){s.forEach(function(i){var f=i.props.initialValue;if(f!==void 0){var v=i.getNamePath(),w=r.getInitialValue(v);if(w!==void 0)K(!1,"Form already set 'initialValues' with path '".concat(v.join("."),"'. Field can not overwrite it."));else{var y=e.get(v);if(y&&y.size>1)K(!1,"Multiple Field with path '".concat(v.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(y){var p=r.getFieldValue(v),g=i.isListField();!g&&(!t.skipExist||p===void 0)&&r.updateStore(_(r.store,v,N(y)[0].value))}}}})},d;t.entities?d=t.entities:t.namePathList?(d=[],t.namePathList.forEach(function(u){var s=e.get(u);if(s){var i;(i=d).push.apply(i,N(N(s).map(function(f){return f.entity})))}})):d=n,a(d)}),c(this,"resetFields",function(t){r.warningUnhooked();var e=r.store;if(!t){r.updateStore(X(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(e,null,{type:"reset"}),r.notifyWatch();return}var n=t.map(I);n.forEach(function(a){var d=r.getInitialValue(a);r.updateStore(_(r.store,a,d))}),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(e,n,{type:"reset"}),r.notifyWatch(n)}),c(this,"setFields",function(t){r.warningUnhooked();var e=r.store,n=[];t.forEach(function(a){var d=a.name,u=me(a,Be),s=I(d);n.push(s),"value"in u&&r.updateStore(_(r.store,s,u.value)),r.notifyObservers(e,[s],{type:"setField",data:a})}),r.notifyWatch(n)}),c(this,"getFields",function(){var t=r.getFieldEntities(!0),e=t.map(function(n){var a=n.getNamePath(),d=n.getMeta(),u=b(b({},d),{},{name:a,value:r.getFieldValue(a)});return Object.defineProperty(u,"originRCField",{value:!0}),u});return e}),c(this,"initEntityValue",function(t){var e=t.props.initialValue;if(e!==void 0){var n=t.getNamePath(),a=z(r.store,n);a===void 0&&r.updateStore(_(r.store,n,e))}}),c(this,"isMergedPreserve",function(t){var e=t!==void 0?t:r.preserve;return e??!0}),c(this,"registerField",function(t){r.fieldEntities.push(t);var e=t.getNamePath();if(r.notifyWatch([e]),t.props.initialValue!==void 0){var n=r.store;r.resetWithFieldInitialValue({entities:[t],skipExist:!0}),r.notifyObservers(n,[t.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,d){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(f){return f!==t}),!r.isMergedPreserve(d)&&(!a||u.length>1)){var s=a?void 0:r.getInitialValue(e);if(e.length&&r.getFieldValue(e)!==s&&r.fieldEntities.every(function(f){return!$e(f.getNamePath(),e)})){var i=r.store;r.updateStore(_(i,e,s,!0)),r.notifyObservers(i,[e],{type:"remove"}),r.triggerDependenciesUpdate(i,e)}}r.notifyWatch([e])}}),c(this,"dispatch",function(t){switch(t.type){case"updateValue":{var e=t.namePath,n=t.value;r.updateValue(e,n);break}case"validateField":{var a=t.namePath,d=t.triggerName;r.validateFields([a],{triggerName:d});break}}}),c(this,"notifyObservers",function(t,e,n){if(r.subscribable){var a=b(b({},n),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(d){var u=d.onStoreChange;u(t,e,a)})}else r.forceRootUpdate()}),c(this,"triggerDependenciesUpdate",function(t,e){var n=r.getDependencyChildrenFields(e);return n.length&&r.validateFields(n),r.notifyObservers(t,n,{type:"dependenciesUpdate",relatedFields:[e].concat(N(n))}),n}),c(this,"updateValue",function(t,e){var n=I(t),a=r.store;r.updateStore(_(r.store,n,e)),r.notifyObservers(a,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var d=r.triggerDependenciesUpdate(a,n),u=r.callbacks.onValuesChange;if(u){var s=we(r.store,[n]);u(s,r.getFieldsValue())}r.triggerOnFieldsChange([n].concat(N(d)))}),c(this,"setFieldsValue",function(t){r.warningUnhooked();var e=r.store;if(t){var n=X(r.store,t);r.updateStore(n)}r.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()}),c(this,"setFieldValue",function(t,e){r.setFields([{name:t,value:e}])}),c(this,"getDependencyChildrenFields",function(t){var e=new Set,n=[],a=new J;r.getFieldEntities().forEach(function(u){var s=u.props.dependencies;(s||[]).forEach(function(i){var f=I(i);a.update(f,function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return v.add(u),v})})});var d=function u(s){var i=a.get(s)||new Set;i.forEach(function(f){if(!e.has(f)){e.add(f);var v=f.getNamePath();f.isFieldDirty()&&v.length&&(n.push(v),u(v))}})};return d(t),n}),c(this,"triggerOnFieldsChange",function(t,e){var n=r.callbacks.onFieldsChange;if(n){var a=r.getFields();if(e){var d=new J;e.forEach(function(s){var i=s.name,f=s.errors;d.set(i,f)}),a.forEach(function(s){s.errors=d.get(s.name)||s.errors})}var u=a.filter(function(s){var i=s.name;return B(t,i)});u.length&&n(u,a)}}),c(this,"validateFields",function(t,e){var n;r.warningUnhooked();var a,d;Array.isArray(t)||typeof t=="string"||typeof e=="string"?(a=t,d=e):d=t;var u=!!a,s=u?a.map(I):[],i=[],f=String(Date.now()),v=new Set,w=(n=d)===null||n===void 0?void 0:n.recursive;r.getFieldEntities(!0).forEach(function(h){if(u||s.push(h.getNamePath()),!(!h.props.rules||!h.props.rules.length)){var m=h.getNamePath();if(v.add(m.join(f)),!u||B(s,m,w)){var V=h.validateRules(b({validateMessages:b(b({},Ne),r.validateMessages)},d));i.push(V.then(function(){return{name:m,errors:[],warnings:[]}}).catch(function(S){var k,E=[],R=[];return(k=S.forEach)===null||k===void 0||k.call(S,function(L){var C=L.rule.warningOnly,P=L.errors;C?R.push.apply(R,N(P)):E.push.apply(E,N(P))}),E.length?Promise.reject({name:m,errors:E,warnings:R}):{name:m,errors:E,warnings:R}}))}}});var y=Je(i);r.lastValidatePromise=y,y.catch(function(h){return h}).then(function(h){var m=h.map(function(V){var S=V.name;return S});r.notifyObservers(r.store,m,{type:"validateFinish"}),r.triggerOnFieldsChange(m,h)});var p=y.then(function(){return r.lastValidatePromise===y?Promise.resolve(r.getFieldsValue(s)):Promise.reject([])}).catch(function(h){var m=h.filter(function(V){return V&&V.errors.length});return Promise.reject({values:r.getFieldsValue(s),errorFields:m,outOfDate:r.lastValidatePromise!==y})});p.catch(function(h){return h});var g=s.filter(function(h){return v.has(h.join(f))});return r.triggerOnFieldsChange(g),p}),c(this,"submit",function(){r.warningUnhooked(),r.validateFields().then(function(t){var e=r.callbacks.onFinish;if(e)try{e(t)}catch(n){console.error(n)}}).catch(function(t){var e=r.callbacks.onFinishFailed;e&&e(t)})}),this.forceRootUpdate=l});function Te(o){var l=F.useRef(),r=F.useState({}),t=ee(r,2),e=t[1];if(!l.current)if(o)l.current=o;else{var n=function(){e({})},a=new Ye(n);l.current=a.getForm()}return[l.current]}var ve=F.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Qe=function(l){var r=l.validateMessages,t=l.onFormChange,e=l.onFormFinish,n=l.children,a=F.useContext(ve),d=F.useRef({});return F.createElement(ve.Provider,{value:b(b({},a),{},{validateMessages:b(b({},a.validateMessages),r),triggerFormChange:function(s,i){t&&t(s,{changedFields:i,forms:d.current}),a.triggerFormChange(s,i)},triggerFormFinish:function(s,i){e&&e(s,{values:i,forms:d.current}),a.triggerFormFinish(s,i)},registerForm:function(s,i){s&&(d.current=b(b({},d.current),{},c({},s,i))),a.registerForm(s,i)},unregisterForm:function(s){var i=b({},d.current);delete i[s],d.current=i,a.unregisterForm(s)}})},n)},Xe=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],Ze=function(l,r){var t=l.name,e=l.initialValues,n=l.fields,a=l.form,d=l.preserve,u=l.children,s=l.component,i=s===void 0?"form":s,f=l.validateMessages,v=l.validateTrigger,w=v===void 0?"onChange":v,y=l.onValuesChange,p=l.onFieldsChange,g=l.onFinish,h=l.onFinishFailed,m=me(l,Xe),V=F.useContext(ve),S=Te(a),k=ee(S,1),E=k[0],R=E.getInternalHooks(G),L=R.useSubscribe,C=R.setInitialValues,P=R.setCallbacks,T=R.setValidateMessages,O=R.setPreserve,A=R.destroyForm;F.useImperativeHandle(r,function(){return E}),F.useEffect(function(){return V.registerForm(t,E),function(){V.unregisterForm(t)}},[V,E,t]),T(b(b({},V.validateMessages),f)),P({onValuesChange:y,onFieldsChange:function(H){if(V.triggerFormChange(t,H),p){for(var q=arguments.length,Ve=new Array(q>1?q-1:0),ie=1;ie<q;ie++)Ve[ie-1]=arguments[ie];p.apply(void 0,[H].concat(Ve))}},onFinish:function(H){V.triggerFormFinish(t,H),g&&g(H)},onFinishFailed:h}),O(d);var x=F.useRef(null);C(e,!x.current),x.current||(x.current=!0),F.useEffect(function(){return A},[]);var j,Q=typeof u=="function";if(Q){var ne=E.getFieldsValue(!0);j=u(ne,E)}else j=u;L(!Q);var Fe=F.useRef();F.useEffect(function(){ze(Fe.current||[],n||[])||E.setFields(n||[]),Fe.current=n},[n,E]);var Oe=F.useMemo(function(){return b(b({},E),{},{validateTrigger:w})},[E,w]),ye=F.createElement(ae.Provider,{value:null},F.createElement(Y.Provider,{value:Oe},j));return i===!1?ye:F.createElement(i,Re({},m,{onSubmit:function(H){H.preventDefault(),H.stopPropagation(),E.submit()},onReset:function(H){var q;H.preventDefault(),E.resetFields(),(q=m.onReset)===null||q===void 0||q.call(m,H)}}),ye)};function ke(o){try{return JSON.stringify(o)}catch{return Math.random()}}function er(){for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];var t=l[0],e=t===void 0?[]:t,n=l[1],a=n===void 0?{}:n,d=We(a)?{form:a}:a,u=d.form,s=F.useState(),i=ee(s,2),f=i[0],v=i[1],w=F.useMemo(function(){return ke(f)},[f]),y=F.useRef(w);y.current=w;var p=F.useContext(Y),g=u||p,h=g&&g._init,m=I(e),V=F.useRef(m);return V.current=m,F.useEffect(function(){if(h){var S=g.getFieldsValue,k=g.getInternalHooks,E=k(G),R=E.registerWatch,L=R(function(P,T){var O=z(d.preserve?T:P,V.current),A=ke(O);y.current!==A&&(y.current=A,v(O))}),C=z(d.preserve?S(!0):S(),V.current);return f!==C&&v(C),L}},[h]),f}var rr=F.forwardRef(Ze),te=rr;te.FormProvider=Qe;te.Field=Me;te.List=Ge;te.useForm=Te;te.useWatch=er;
