!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){var n,l,u,t,i,o,e,r,f,c,s={},a=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,t){var i,o,e,r={};for(e in u)"key"==e?i=u[e]:"ref"==e?o=u[e]:r[e]=u[e];if(arguments.length>2&&(r.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(e in l.defaultProps)void 0===r[e]&&(r[e]=l.defaultProps[e]);return _(l,r,i,o,null)}function _(n,t,i,o,e){var r={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==e?++u:e};return null==e&&null!=l.vnode&&l.vnode(r),r}function m(n){return n.children}function k(n,l){this.props=n,this.context=l}function b(n,l){if(null==l)return n.__?b(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?b(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function w(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!C.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||e)(C)}function C(){var n,l,u,t,o,e,f,c;for(i.sort(r);n=i.shift();)n.__d&&(l=i.length,t=void 0,o=void 0,f=(e=(u=n).__v).__e,(c=u.__P)&&(t=[],(o=d({},e)).__v=e.__v+1,j(c,e,o,u.__n,void 0!==c.ownerSVGElement,null!=e.__h?[f]:null,t,null==f?b(e):f,e.__h),z(t,e),e.__e!=f&&g(e)),i.length>l&&i.sort(r));C.__r=0}function x(n,l,u,t,i,o,e,r,f,c){var h,d,p,y,k,g,w,C=t&&t.__k||a,x=C.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(y=u.__k[h]=null==(y=l[h])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):v(y)?_(m,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=u,y.__b=u.__b+1,null===(p=C[h])||p&&y.key==p.key&&y.type===p.type)C[h]=void 0;else for(d=0;d<x;d++){if((p=C[d])&&y.key==p.key&&y.type===p.type){C[d]=void 0;break}p=null}j(n,y,p=p||s,i,o,e,r,f,c),k=y.__e,(d=y.ref)&&p.ref!=d&&(w||(w=[]),p.ref&&w.push(p.ref,null,y),w.push(d,y.__c||k,y)),null!=k?(null==g&&(g=k),"function"==typeof y.type&&y.__k===p.__k?y.__d=f=P(y,f,n):f=A(n,y,p,C,k,f),"function"==typeof u.type&&(u.__d=f)):f&&p.__e==f&&f.parentNode!=n&&(f=b(p))}for(u.__e=g,h=x;h--;)null!=C[h]&&("function"==typeof u.type&&null!=C[h].__e&&C[h].__e==u.__d&&(u.__d=E(t).nextSibling),M(C[h],C[h]));if(w)for(h=0;h<w.length;h++)L(w[h],w[++h],w[++h])}function P(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?P(t,l,u):A(u,t,t,i,t.__e,l));return l}function A(n,l,u,t,i,o){var e,r,f;if(void 0!==l.__d)e=l.__d,l.__d=void 0;else if(null==u||i!=o||null==i.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(i),e=null;else{for(r=o,f=0;(r=r.nextSibling)&&f<t.length;f+=1)if(r==i)break n;n.insertBefore(i,o),e=o}return void 0!==e?e:i.nextSibling}function E(n){var l,u,t;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(t=E(u)))return t;return null}function S(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],t)}function $(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||h.test(l)?u:u+"px"}function H(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||$(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function I(n){return this.l[n.type+!1](l.event?l.event(n):n)}function T(n){return this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,t,i,o,e,r,f,c){var s,a,h,p,y,_,b,g,w,C,P,A,E,S,$,H=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,f=u.__e=t.__e,u.__h=null,e=[f]),(s=l.__b)&&s(u);try{n:if("function"==typeof H){if(g=u.props,w=(s=H.contextType)&&i[s.__c],C=s?w?w.props.value:s.__:i,t.__c?b=(a=u.__c=t.__c).__=a.__E:("prototype"in H&&H.prototype.render?u.__c=a=new H(g,C):(u.__c=a=new k(g,C),a.constructor=H,a.render=N),w&&w.sub(a),a.props=g,a.state||(a.state={}),a.context=C,a.__n=i,h=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=H.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=d({},a.__s)),d(a.__s,H.getDerivedStateFromProps(g,a.__s))),p=a.props,y=a.state,a.__v=u,h)null==H.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,C)||u.__v===t.__v){for(u.__v!==t.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),P=0;P<a._sb.length;P++)a.__h.push(a._sb[P]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,C),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(p,y,_)})}if(a.context=C,a.props=g,a.__P=n,A=l.__r,E=0,"prototype"in H&&H.prototype.render){for(a.state=a.__s,a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),S=0;S<a._sb.length;S++)a.__h.push(a._sb[S]);a._sb=[]}else do{a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++E<25);a.state=a.__s,null!=a.getChildContext&&(i=d(d({},i),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(p,y)),x(n,v($=null!=s&&s.type===m&&null==s.key?s.props.children:s)?$:[$],u,t,i,o,e,r,f,c),a.base=u.__e,u.__h=null,a.__h.length&&r.push(a),b&&(a.__E=a.__=null),a.__e=!1}else null==e&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=F(t.__e,u,t,i,o,e,r,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=e)&&(u.__e=f,u.__h=!!c,e[e.indexOf(f)]=null),l.__e(n,u,t)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function F(l,u,t,i,o,e,r,f){var c,a,h,d=t.props,y=u.props,_=u.type,m=0;if("svg"===_&&(o=!0),null!=e)for(;m<e.length;m++)if((c=e[m])&&"setAttribute"in c==!!_&&(_?c.localName===_:3===c.nodeType)){l=c,e[m]=null;break}if(null==l){if(null===_)return document.createTextNode(y);l=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,y.is&&y),e=null,f=!1}if(null===_)d===y||f&&l.data===y||(l.data=y);else{if(e=e&&n.call(l.childNodes),a=(d=t.props||s).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!f){if(null!=e)for(d={},m=0;m<l.attributes.length;m++)d[l.attributes[m].name]=l.attributes[m].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(S(l,y,d,o,f),h)u.__k=[];else if(x(l,v(m=u.props.children)?m:[m],u,t,i,o&&"foreignObject"!==_,e,r,e?e[0]:t.__k&&b(t,0),f),null!=e)for(m=e.length;m--;)null!=e[m]&&p(e[m]);f||("value"in y&&void 0!==(m=y.value)&&(m!==l.value||"progress"===_&&!m||"option"===_&&m!==d.value)&&H(l,"value",m,d.value,!1),"checked"in y&&void 0!==(m=y.checked)&&m!==l.checked&&H(l,"checked",m,d.checked,!1))}return l}function L(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function M(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||L(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&M(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function N(n,l,u){return this.constructor(n,u)}function O(u,t,i){var o,e,r;l.__&&l.__(u,t),e=(o="function"==typeof i)?null:i&&i.__k||t.__k,r=[],j(t,u=(!o&&i||t).__k=y(m,null,[u]),e||s,s,void 0!==t.ownerSVGElement,!o&&i?[i]:e?null:t.firstChild?n.call(t.childNodes):null,r,!o&&i?i:e?e.__e:t.firstChild,o),z(r,u)}n=a.slice,l={__e:function(n,l,u,t){for(var i,o,e;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),e=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),e=i.__d),e)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&void 0===n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},k.prototype.render=m,i=[],e="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(n,l){return n.__v.__b-l.__v.__b},C.__r=0,f=0,c={__proto__:null,render:O,hydrate:function n(l,u){O(l,u,n)},createElement:y,h:y,Fragment:m,createRef:function(){return{current:null}},isValidElement:t,Component:k,cloneElement:function(l,u,t){var i,o,e,r,f=d({},l.props);for(e in l.type&&l.type.defaultProps&&(r=l.type.defaultProps),u)"key"==e?i=u[e]:"ref"==e?o=u[e]:f[e]=void 0===u[e]&&void 0!==r?r[e]:u[e];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),_(l.type,f,i||l.key,o||l.ref,null)},createContext:function(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},toChildArray:function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(v(l)?l.some(function(l){n(l,u)}):u.push(l)),u},options:l},typeof module<"u"?module.exports=c:self.preact=c});
//# sourceMappingURL=preact.umd.js.map
