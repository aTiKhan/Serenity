!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact"),require("preact/hooks")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks"],t):t((n||self).preactCompat={},n.preact,n.preactHooks)}(this,function(n,t,e){function r(n,t){for(var e in t)n[e]=t[e];return n}function u(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function o(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function i(n){this.props=n}function l(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:u(this.props,n)}function o(e){return this.shouldComponentUpdate=r,t.createElement(n,e)}return o.displayName="Memo("+(n.displayName||n.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(i.prototype=new t.Component).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(n,t){return u(this.props,n)||u(this.state,t)};var c=t.options.__b;t.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),c&&c(n)};var f="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function a(n){function t(t){var e=r({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=f,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var s=function(n,e){return null==n?null:t.toChildArray(t.toChildArray(n).map(e))},h={map:s,forEach:s,count:function(n){return n?t.toChildArray(n).length:0},only:function(n){var e=t.toChildArray(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:t.toChildArray},d=t.options.__e;t.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);d(n,t,e,r)};var v=t.options.unmount;function p(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=r({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return p(n,t,e)})),n}function m(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return m(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function b(){this.__u=0,this.t=null,this.__b=null}function y(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function _(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return t.createElement(r,o)}return o.displayName="Lazy",o.__f=!0,o}function g(){this.u=null,this.o=null}t.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),v&&v(n)},(b.prototype=new t.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=y(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=m(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},b.prototype.componentWillUnmount=function(){this.t=[]},b.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=p(this.__b,r,u.__O=u.__P)}this.__b=null}var o=e.__a&&t.createElement(t.Fragment,null,n.fallback);return o&&(o.__h=null),[t.createElement(t.Fragment,null,e.__a?null:n.children),o]};var S=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function C(n){return this.getChildContext=function(){return n.context},n.children}function E(n){var e=this,r=n.i;e.componentWillUnmount=function(){t.render(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),t.render(t.createElement(C,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function O(n,e){var r=t.createElement(E,{__v:n,i:e});return r.containerInfo=e,r}(g.prototype=new t.Component).__a=function(n){var t=this,e=y(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),S(t,n,r)):u()};e?e(o):o()}},g.prototype.render=function(n){this.u=null,this.o=new Map;var e=t.toChildArray(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return n.children},g.prototype.componentDidUpdate=g.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){S(n,e,t)})};var w="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,R=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,j=/[A-Z0-9]/g,N="undefined"!=typeof document,T=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function k(n,e,r){return null==e.__k&&(e.textContent=""),t.render(n,e),"function"==typeof r&&r(),n?n.__c:null}function A(n,e,r){return t.hydrate(n,e),"function"==typeof r&&r(),n?n.__c:null}t.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(t.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var I=t.options.event;function L(){}function P(){return this.cancelBubble}function U(){return this.defaultPrevented}t.options.event=function(n){I&&(n=I(n));var t=n.currentTarget,e=n.type;return"input"!==e&&"change"!==e||!t.h||Promise.resolve().then(function(){return function(n,t){null!=t.value&&Promise.resolve().then(function(){return t.value=t.v}),"change"===n&&null!=t.checked&&Promise.resolve().then(function(){return t.checked=t.v})}(e,t)}),n.persist=L,n.isPropagationStopped=P,n.isDefaultPrevented=U,n.nativeEvent=n};var D,F={enumerable:!1,configurable:!0,get:function(){return this.class}},M=t.options.vnode;t.options.vnode=function(n){"string"==typeof n.type&&function(n){var e=n.props,r=n.type,u={};for(var o in e){var i=e[o];if(!("value"===o&&"defaultValue"in e&&null==i||N&&"children"===o&&"noscript"===r||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==r&&"textarea"!==r||T(e.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":R.test(o)?o=l:-1===r.indexOf("-")&&x.test(o)?o=o.replace(j,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i}}"select"==r&&u.multiple&&Array.isArray(u.value)&&(u.value=t.toChildArray(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==r&&null!=u.defaultValue&&(u.value=t.toChildArray(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),e.class&&!e.className?(u.class=e.class,Object.defineProperty(u,"className",F)):(e.className&&!e.class||e.class&&e.className)&&(u.class=u.className=e.className),n.props=u}(n),n.$$typeof=w,M&&M(n)};var V=t.options.__r;t.options.__r=function(n){V&&V(n),D=n.__c};var W=t.options.diffed;t.options.diffed=function(n){W&&W(n);var t=n.type,e=n.props,r=n.__e,u=r&&r.h;null==r||"input"!==t&&"textarea"!==t&&"select"!==t||!1===u||(u||e.oninput||e.onchange||e.onChange)&&(null!=e.value?(r.h=!0,r.v=e.value):null!=e.checked?(r.h=!0,r.v=e.checked):r.h=!1),null!=r&&"textarea"===n.type&&"value"in e&&e.value!==r.value&&(r.value=null==e.value?"":e.value),D=null};var z={ReactCurrentDispatcher:{current:{readContext:function(n){return D.__n[n.__c].props.value}}}},B="17.0.2";function q(n){return t.createElement.bind(null,n)}function H(n){return!!n&&n.$$typeof===w}function Z(n){return H(n)?t.cloneElement.apply(null,arguments):n}function Y(n){return!!n.__k&&(t.render(null,n),!0)}function $(n){return n&&(n.base||1===n.nodeType&&n)||null}var G=function(n,t){return n(t)},J=function(n,t){return n(t)},K=t.Fragment;function Q(n){n()}function X(n){return n}function nn(){return[!1,Q]}var tn=e.useLayoutEffect;function en(n,t){var r=t(),u=e.useState({p:{__:r,m:t}}),i=u[0].p,l=u[1];return e.useLayoutEffect(function(){i.__=r,i.m=t,o(i.__,t())||l({p:i})},[n,r,t]),e.useEffect(function(){return o(i.__,i.m())||l({p:i}),n(function(){o(i.__,i.m())||l({p:i})})},[n]),r}var rn={useState:e.useState,useId:e.useId,useReducer:e.useReducer,useEffect:e.useEffect,useLayoutEffect:e.useLayoutEffect,useInsertionEffect:tn,useTransition:nn,useDeferredValue:X,useSyncExternalStore:en,startTransition:Q,useRef:e.useRef,useImperativeHandle:e.useImperativeHandle,useMemo:e.useMemo,useCallback:e.useCallback,useContext:e.useContext,useDebugValue:e.useDebugValue,version:B,Children:h,render:k,hydrate:A,unmountComponentAtNode:Y,createPortal:O,createElement:t.createElement,createContext:t.createContext,createFactory:q,cloneElement:Z,createRef:t.createRef,Fragment:t.Fragment,isValidElement:H,findDOMNode:$,Component:t.Component,PureComponent:i,memo:l,forwardRef:a,flushSync:J,unstable_batchedUpdates:G,StrictMode:K,Suspense:b,SuspenseList:g,lazy:_,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:z};Object.defineProperty(n,"Component",{enumerable:!0,get:function(){return t.Component}}),Object.defineProperty(n,"Fragment",{enumerable:!0,get:function(){return t.Fragment}}),Object.defineProperty(n,"createContext",{enumerable:!0,get:function(){return t.createContext}}),Object.defineProperty(n,"createElement",{enumerable:!0,get:function(){return t.createElement}}),Object.defineProperty(n,"createRef",{enumerable:!0,get:function(){return t.createRef}}),n.Children=h,n.PureComponent=i,n.StrictMode=K,n.Suspense=b,n.SuspenseList=g,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,n.cloneElement=Z,n.createFactory=q,n.createPortal=O,n.default=rn,n.findDOMNode=$,n.flushSync=J,n.forwardRef=a,n.hydrate=A,n.isValidElement=H,n.lazy=_,n.memo=l,n.render=k,n.startTransition=Q,n.unmountComponentAtNode=Y,n.unstable_batchedUpdates=G,n.useDeferredValue=X,n.useInsertionEffect=tn,n.useSyncExternalStore=en,n.useTransition=nn,n.version=B,Object.keys(e).forEach(function(t){"default"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})});
//# sourceMappingURL=compat.umd.js.map
