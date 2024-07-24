(function(C,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],O):(C=typeof globalThis<"u"?globalThis:C||self,O(C.WoodDeck={},C.React))})(this,function(C,O){"use strict";function Ze(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var de={exports:{}},s=de.exports={},R,_;function ee(){throw new Error("setTimeout has not been defined")}function re(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?R=setTimeout:R=ee}catch{R=ee}try{typeof clearTimeout=="function"?_=clearTimeout:_=re}catch{_=re}})();function ve(i){if(R===setTimeout)return setTimeout(i,0);if((R===ee||!R)&&setTimeout)return R=setTimeout,setTimeout(i,0);try{return R(i,0)}catch{try{return R.call(null,i,0)}catch{return R.call(this,i,0)}}}function Be(i){if(_===clearTimeout)return clearTimeout(i);if((_===re||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(i);try{return _(i)}catch{try{return _.call(null,i)}catch{return _.call(this,i)}}}var w=[],F=!1,S,J=-1;function Je(){!F||!S||(F=!1,S.length?w=S.concat(w):J=-1,w.length&&pe())}function pe(){if(!F){var i=ve(Je);F=!0;for(var d=w.length;d;){for(S=w,w=[];++J<d;)S&&S[J].run();J=-1,d=w.length}S=null,F=!1,Be(i)}}s.nextTick=function(i){var d=new Array(arguments.length-1);if(arguments.length>1)for(var b=1;b<arguments.length;b++)d[b-1]=arguments[b];w.push(new he(i,d)),w.length===1&&!F&&ve(pe)};function he(i,d){this.fun=i,this.array=d}he.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function x(){}s.on=x,s.addListener=x,s.once=x,s.off=x,s.removeListener=x,s.removeAllListeners=x,s.emit=x,s.prependListener=x,s.prependOnceListener=x,s.listeners=function(i){return[]},s.binding=function(i){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(i){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};var qe=de.exports;const ge=Ze(qe);var te={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function Ke(){if(me)return V;me=1;var i=O,d=Symbol.for("react.element"),b=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,q=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function N(P,p,M){var y,j={},k=null,G=null;M!==void 0&&(k=""+M),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(G=p.ref);for(y in p)I.call(p,y)&&!K.hasOwnProperty(y)&&(j[y]=p[y]);if(P&&P.defaultProps)for(y in p=P.defaultProps,p)j[y]===void 0&&(j[y]=p[y]);return{$$typeof:d,type:P,key:k,ref:G,props:j,_owner:q.current}}return V.Fragment=b,V.jsx=N,V.jsxs=N,V}var $={},ye;function Ge(){return ye||(ye=1,ge.env.NODE_ENV!=="production"&&function(){var i=O,d=Symbol.for("react.element"),b=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),P=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),be=Symbol.iterator,Qe="@@iterator";function er(e){if(e===null||typeof e!="object")return null;var r=be&&e[be]||e[Qe];return typeof r=="function"?r:null}var W=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];rr("error",e,t)}}function rr(e,r,t){{var n=W.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var c=t.map(function(o){return String(o)});c.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,c)}}var tr=!1,nr=!1,ar=!1,ir=!1,or=!1,Ee;Ee=Symbol.for("react.module.reference");function ur(e){return!!(typeof e=="string"||typeof e=="function"||e===I||e===K||or||e===q||e===M||e===y||ir||e===G||tr||nr||ar||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===j||e.$$typeof===N||e.$$typeof===P||e.$$typeof===p||e.$$typeof===Ee||e.getModuleId!==void 0))}function cr(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function Re(e){return e.displayName||"Context"}function T(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case b:return"Portal";case K:return"Profiler";case q:return"StrictMode";case M:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case P:var r=e;return Re(r)+".Consumer";case N:var t=e;return Re(t._context)+".Provider";case p:return cr(e,e.render,"ForwardRef");case j:var n=e.displayName||null;return n!==null?n:T(e.type)||"Memo";case k:{var u=e,c=u._payload,o=u._init;try{return T(o(c))}catch{return null}}}return null}var A=Object.assign,U=0,_e,Te,we,xe,je,Ce,Oe;function Se(){}Se.__reactDisabledLog=!0;function sr(){{if(U===0){_e=console.log,Te=console.info,we=console.warn,xe=console.error,je=console.group,Ce=console.groupCollapsed,Oe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function lr(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:_e}),info:A({},e,{value:Te}),warn:A({},e,{value:we}),error:A({},e,{value:xe}),group:A({},e,{value:je}),groupCollapsed:A({},e,{value:Ce}),groupEnd:A({},e,{value:Oe})})}U<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ne=W.ReactCurrentDispatcher,ae;function z(e,r,t){{if(ae===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||""}return`
`+ae+e}}var ie=!1,H;{var fr=typeof WeakMap=="function"?WeakMap:Map;H=new fr}function Pe(e,r){if(!e||ie)return"";{var t=H.get(e);if(t!==void 0)return t}var n;ie=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=ne.current,ne.current=null,sr();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(g){n=g}Reflect.construct(e,[],o)}else{try{o.call()}catch(g){n=g}e.call(o.prototype)}}else{try{throw Error()}catch(g){n=g}e()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),h=n.stack.split(`
`),l=a.length-1,f=h.length-1;l>=1&&f>=0&&a[l]!==h[f];)f--;for(;l>=1&&f>=0;l--,f--)if(a[l]!==h[f]){if(l!==1||f!==1)do if(l--,f--,f<0||a[l]!==h[f]){var E=`
`+a[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,E),E}while(l>=1&&f>=0);break}}}finally{ie=!1,ne.current=c,lr(),Error.prepareStackTrace=u}var Y=e?e.displayName||e.name:"",D=Y?z(Y):"";return typeof e=="function"&&H.set(e,D),D}function dr(e,r,t){return Pe(e,!1)}function vr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function X(e,r,t){if(e==null)return"";if(typeof e=="function")return Pe(e,vr(e));if(typeof e=="string")return z(e);switch(e){case M:return z("Suspense");case y:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return dr(e.render);case j:return X(e.type,r,t);case k:{var n=e,u=n._payload,c=n._init;try{return X(c(u),r,t)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,ke={},Ae=W.ReactDebugCurrentFrame;function Q(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);Ae.setExtraStackFrame(t)}else Ae.setExtraStackFrame(null)}function pr(e,r,t,n,u){{var c=Function.call.bind(Z);for(var o in e)if(c(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var h=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){a=l}a&&!(a instanceof Error)&&(Q(u),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),Q(null)),a instanceof Error&&!(a.message in ke)&&(ke[a.message]=!0,Q(u),v("Failed %s type: %s",t,a.message),Q(null))}}}var hr=Array.isArray;function oe(e){return hr(e)}function gr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function mr(e){try{return De(e),!1}catch{return!0}}function De(e){return""+e}function Fe(e){if(mr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",gr(e)),De(e)}var B=W.ReactCurrentOwner,yr={key:!0,ref:!0,__self:!0,__source:!0},Ie,Me,ue;ue={};function br(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Er(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Rr(e,r){if(typeof e.ref=="string"&&B.current&&r&&B.current.stateNode!==r){var t=T(B.current.type);ue[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',T(B.current.type),e.ref),ue[t]=!0)}}function _r(e,r){{var t=function(){Ie||(Ie=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Tr(e,r){{var t=function(){Me||(Me=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var wr=function(e,r,t,n,u,c,o){var a={$$typeof:d,type:e,key:r,ref:t,props:o,_owner:c};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function xr(e,r,t,n,u){{var c,o={},a=null,h=null;t!==void 0&&(Fe(t),a=""+t),Er(r)&&(Fe(r.key),a=""+r.key),br(r)&&(h=r.ref,Rr(r,u));for(c in r)Z.call(r,c)&&!yr.hasOwnProperty(c)&&(o[c]=r[c]);if(e&&e.defaultProps){var l=e.defaultProps;for(c in l)o[c]===void 0&&(o[c]=l[c])}if(a||h){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&_r(o,f),h&&Tr(o,f)}return wr(e,a,h,u,n,B.current,o)}}var ce=W.ReactCurrentOwner,We=W.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);We.setExtraStackFrame(t)}else We.setExtraStackFrame(null)}var se;se=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Le(){{if(ce.current){var e=T(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function jr(e){return""}var Ye={};function Cr(e){{var r=Le();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ve(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Cr(r);if(Ye[t])return;Ye[t]=!0;var n="";e&&e._owner&&e._owner!==ce.current&&(n=" It was passed a child from "+T(e._owner.type)+"."),L(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),L(null)}}function $e(e,r){{if(typeof e!="object")return;if(oe(e))for(var t=0;t<e.length;t++){var n=e[t];le(n)&&Ve(n,r)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var u=er(e);if(typeof u=="function"&&u!==e.entries)for(var c=u.call(e),o;!(o=c.next()).done;)le(o.value)&&Ve(o.value,r)}}}function Or(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===p||r.$$typeof===j))t=r.propTypes;else return;if(t){var n=T(r);pr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!se){se=!0;var u=T(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){L(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),L(null);break}}e.ref!==null&&(L(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}var Ne={};function Ue(e,r,t,n,u,c){{var o=ur(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=jr();h?a+=h:a+=Le();var l;e===null?l="null":oe(e)?l="array":e!==void 0&&e.$$typeof===d?(l="<"+(T(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,a)}var f=xr(e,r,t,u,c);if(f==null)return f;if(o){var E=r.children;if(E!==void 0)if(n)if(oe(E)){for(var Y=0;Y<E.length;Y++)$e(E[Y],e);Object.freeze&&Object.freeze(E)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else $e(E,e)}if(Z.call(r,"key")){var D=T(e),g=Object.keys(r).filter(function(Ir){return Ir!=="key"}),fe=g.length>0?"{key: someKey, "+g.join(": ..., ")+": ...}":"{key: someKey}";if(!Ne[D+fe]){var Fr=g.length>0?"{"+g.join(": ..., ")+": ...}":"{}";v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,fe,D,Fr,D),Ne[D+fe]=!0}}return e===I?Sr(f):Or(f),f}}function Pr(e,r,t){return Ue(e,r,t,!0)}function kr(e,r,t){return Ue(e,r,t,!1)}var Ar=kr,Dr=Pr;$.Fragment=I,$.jsx=Ar,$.jsxs=Dr}()),$}ge.env.NODE_ENV==="production"?te.exports=Ke():te.exports=Ge();var m=te.exports;const ze="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e",He="/vite.svg";function Xe(){const[i,d]=O.useState(0);return m.jsxs(m.Fragment,{children:[m.jsxs("div",{children:[m.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:m.jsx("img",{src:He,className:"logo",alt:"Vite logo"})}),m.jsx("a",{href:"https://react.dev",target:"_blank",children:m.jsx("img",{src:ze,className:"logo react",alt:"React logo"})})]}),m.jsx("h1",{children:"Vite + React"}),m.jsxs("div",{className:"card",children:[m.jsxs("button",{onClick:()=>d(b=>b+1),children:["count is ",i]}),m.jsxs("p",{children:["Edit ",m.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),m.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}C.Plugin=Xe,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});
