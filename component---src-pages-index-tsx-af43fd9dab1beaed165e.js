/*! For license information please see component---src-pages-index-tsx-af43fd9dab1beaed165e.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[245],{173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(6540)),o=i(n(5303));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return a.default.createElement("button",this.props,this.props.children)}}]),t}(a.default.Component);t.default=(0,o.default)(s)},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n(2906)),o=s(n(7384)),i=s(n(1290));function s(e){return e&&e.__esModule?e:{default:e}}var l={},c=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=r({},t,{absolute:!1})).containerId,l=t.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var u=t.horizontal,f=a.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,void(i.default.registered.end&&i.default.registered.end(e,n));o.default.animateTopScroll(f,t,e,n)}else console.warn("target Element not found")}}},951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3999),a=["mousedown","wheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&a.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},1038:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6540),c=(n(961),n(2906),n(4177)),u=n(649),f=n(5556),d=n(3367),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},m={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){o(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return m.call(t),t.state={active:!1},t}return s(u,t),a(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var a in p)n.hasOwnProperty(a)&&delete n[a];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),u}(l.Component),m=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,r({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var a=e.props.to,o=null,i=0,s=0,l=0;if(r.getBoundingClientRect)l=r.getBoundingClientRect().top;if(!o||e.props.isDynamic){if(!(o=n.get(a)))return;var u=o.getBoundingClientRect();s=(i=u.top-l+t)+u.height}var f=t-e.props.offset,p=f>=Math.floor(i)&&f<Math.floor(s),m=f<Math.floor(i)||f>=Math.floor(s),h=n.getActiveLink();return m?(a===h&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===a&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):p&&h!==a?(n.setActiveLink(a),e.props.hashSpy&&d.changeHash(a),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(a)),c.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),a(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=m},1290:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},1589:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Sa},default:function(){return ka}});var r=n(6540),a=n.t(r,2),o=n(6848);var i=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),s=Math.abs,l=String.fromCharCode,c=Object.assign;function u(e){return e.trim()}function f(e,t,n){return e.replace(t,n)}function d(e,t){return e.indexOf(t)}function p(e,t){return 0|e.charCodeAt(t)}function m(e,t,n){return e.slice(t,n)}function h(e){return e.length}function g(e){return e.length}function y(e,t){return t.push(e),e}var v=1,b=1,w=0,x=0,E=0,C="";function _(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:v,column:b,length:i,return:""}}function O(e,t){return c(_("",null,null,"",null,null,0),e,{length:-e.length},t)}function S(){return E=x>0?p(C,--x):0,b--,10===E&&(b=1,v--),E}function k(){return E=x<w?p(C,x++):0,b++,10===E&&(b=1,v++),E}function N(){return p(C,x)}function P(){return x}function M(e,t){return m(C,e,t)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A(e){return v=b=1,w=h(C=e),x=0,[]}function j(e){return C="",e}function z(e){return u(M(x-1,$(91===e?e+2:40===e?e+1:e)))}function L(e){for(;(E=N())&&E<33;)k();return T(e)>2||T(E)>3?"":" "}function I(e,t){for(;--t&&k()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return M(e,P()+(t<6&&32==N()&&32==k()))}function $(e){for(;k();)switch(E){case e:return x;case 34:case 39:34!==e&&39!==e&&$(E);break;case 40:41===e&&$(e);break;case 92:k()}return x}function F(e,t){for(;k()&&e+E!==57&&(e+E!==84||47!==N()););return"/*"+M(t,x-1)+"*"+l(47===e?e:k())}function H(e){for(;!T(N());)k();return M(e,x)}var Y="-ms-",R="-moz-",B="-webkit-",V="comm",X="rule",D="decl",W="@keyframes";function q(e,t){for(var n="",r=g(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function U(e,t,n,r){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case V:return"";case W:return e.return=e.value+"{"+q(e.children,r)+"}";case X:e.value=e.props.join(",")}return h(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function G(e){return j(J("",null,null,null,[""],e=A(e),0,[0],e))}function J(e,t,n,r,a,o,i,s,c){for(var u=0,m=0,g=i,v=0,b=0,w=0,x=1,E=1,C=1,_=0,O="",M=a,T=o,A=r,j=O;E;)switch(w=_,_=k()){case 40:if(108!=w&&58==p(j,g-1)){-1!=d(j+=f(z(_),"&","&\f"),"&\f")&&(C=-1);break}case 34:case 39:case 91:j+=z(_);break;case 9:case 10:case 13:case 32:j+=L(w);break;case 92:j+=I(P()-1,7);continue;case 47:switch(N()){case 42:case 47:y(Z(F(k(),P()),t,n),c);break;default:j+="/"}break;case 123*x:s[u++]=h(j)*C;case 125*x:case 59:case 0:switch(_){case 0:case 125:E=0;case 59+m:b>0&&h(j)-g&&y(b>32?K(j+";",r,n,g-1):K(f(j," ","")+";",r,n,g-2),c);break;case 59:j+=";";default:if(y(A=Q(j,t,n,u,m,a,s,O,M=[],T=[],g),o),123===_)if(0===m)J(j,t,A,A,M,o,g,s,T);else switch(99===v&&110===p(j,3)?100:v){case 100:case 109:case 115:J(e,A,A,r&&y(Q(e,A,A,0,0,a,s,O,a,M=[],g),T),a,T,g,s,r?M:T);break;default:J(j,A,A,A,[""],T,0,s,T)}}u=m=b=0,x=C=1,O=j="",g=i;break;case 58:g=1+h(j),b=w;default:if(x<1)if(123==_)--x;else if(125==_&&0==x++&&125==S())continue;switch(j+=l(_),_*x){case 38:C=m>0?1:(j+="\f",-1);break;case 44:s[u++]=(h(j)-1)*C,C=1;break;case 64:45===N()&&(j+=z(k())),v=N(),m=g=h(O=j+=H(P())),_++;break;case 45:45===w&&2==h(j)&&(x=0)}}return o}function Q(e,t,n,r,a,o,i,l,c,d,p){for(var h=a-1,y=0===a?o:[""],v=g(y),b=0,w=0,x=0;b<r;++b)for(var E=0,C=m(e,h+1,h=s(w=i[b])),O=e;E<v;++E)(O=u(w>0?y[E]+" "+C:f(C,/&\f/g,y[E])))&&(c[x++]=O);return _(e,t,n,0===a?X:l,c,d,p)}function Z(e,t,n){return _(e,t,n,V,l(E),m(e,2,-2),0)}function K(e,t,n,r){return _(e,t,n,D,m(e,0,r),m(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,a=0;r=a,a=N(),38===r&&12===a&&(t[n]=1),!T(a);)k();return M(e,x)},te=function(e,t){return j(function(e,t){var n=-1,r=44;do{switch(T(r)){case 0:38===r&&12===N()&&(t[n]=1),e[n]+=ee(x-1,t,n);break;case 2:e[n]+=z(r);break;case 4:if(44===r){e[++n]=58===N()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=l(r)}}while(r=k());return e}(A(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var a=[],o=te(t,a),i=n.props,s=0,l=0;s<o.length;s++)for(var c=0;c<i.length;c++,l++)e.props[l]=a[s]?o[s].replace(/&\f/g,i[c]):i[c]+" "+o[s]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function oe(e,t){switch(function(e,t){return 45^p(e,0)?(((t<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3):0}(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+R+e+Y+e+e;case 6828:case 4268:return B+e+Y+e+e;case 6165:return B+e+Y+"flex-"+e+e;case 5187:return B+e+f(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return B+e+Y+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return B+e+Y+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Y+f(e,"shrink","negative")+e;case 5292:return B+e+Y+f(e,"basis","preferred-size")+e;case 6060:return B+"box-"+f(e,"-grow","")+B+e+Y+f(e,"grow","positive")+e;case 4554:return B+f(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(p(e,t+1)){case 109:if(45!==p(e,t+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+R+(108==p(e,t+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?oe(f(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==p(e,t+1))break;case 6444:switch(p(e,h(e)-3-(~d(e,"!important")&&10))){case 107:return f(e,":",":"+B)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(45===p(e,14)?"inline-":"")+"box$3$1"+B+"$2$3$1"+Y+"$2box$3")+e}break;case 5936:switch(p(e,t+11)){case 114:return B+e+Y+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Y+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Y+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Y+e+e}return e}var ie=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=oe(e.value,e.length);break;case W:return q([O(e,{value:f(e.value,"@","@"+B)})],r);case X:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([O(e,{props:[f(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return q([O(e,{props:[f(t,/:(plac\w+)/,":"+B+"input-$1")]}),O(e,{props:[f(t,/:(plac\w+)/,":-moz-$1")]}),O(e,{props:[f(t,/:(plac\w+)/,Y+"input-$1")]})],r)}return""}))}}],se=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||ie;var a,o,s={},l=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;l.push(e)}));var c,u,f,d,p=[U,(d=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(u=[re,ae].concat(r,p),f=g(u),function(e,t,n,r){for(var a="",o=0;o<f;o++)a+=u[o](e,t,n,r)||"";return a});o=function(e,t,n,r){c=n,q(G(e?e+"{"+t.styles+"}":t.styles),m),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new i({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:o};return h.sheet.hydrate(l),h};function le(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ue=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};var fe=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},de={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var pe=/[A-Z]|^ms/g,me=/_EMO_([^_]+?)_([^]*?)_EMO_/g,he=function(e){return 45===e.charCodeAt(1)},ge=function(e){return null!=e&&"boolean"!=typeof e},ye=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return he(e)?e:e.replace(pe,"-$&").toLowerCase()})),ve=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(me,(function(e,t,n){return we={name:t,styles:n,next:we},t}))}return 1===de[e]||he(e)||"number"!=typeof t||0===t?t:t+"px"};function be(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return we={name:n.name,styles:n.styles,next:we},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)we={name:r.name,styles:r.styles,next:we},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=be(e,t,n[a])+";";else for(var o in n){var i=n[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":ge(i)&&(r+=ye(o)+":"+ve(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=be(e,t,i);switch(o){case"animation":case"animationName":r+=ye(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var l=0;l<i.length;l++)ge(i[l])&&(r+=ye(o)+":"+ve(o,i[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=we,o=n(e);return we=a,be(e,t,o)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var we,xe=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Ee=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";we=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=be(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=be(n,t,e[i]),r&&(a+=o[i]);xe.lastIndex=0;for(var s,l="";null!==(s=xe.exec(a));)l+="-"+s[1];return{name:fe(a)+l,styles:a,next:we}},Ce=!!a.useInsertionEffect&&a.useInsertionEffect,_e=Ce||function(e){return e()},Oe={}.hasOwnProperty,Se=(0,r.createContext)("undefined"!=typeof HTMLElement?se({key:"css"}):null);Se.Provider;var ke=function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(Se);return e(t,a,n)}))},Ne=(0,r.createContext)({});var Pe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Me=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;ce(t,n,r);_e((function(){return ue(t,n,r)}));return null},Te=ke((function(e,t,n){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[Pe],i=[a],s="";"string"==typeof e.className?s=le(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var l=Ee(i,void 0,(0,r.useContext)(Ne));s+=t.key+"-"+l.name;var c={};for(var u in e)Oe.call(e,u)&&"css"!==u&&u!==Pe&&(c[u]=e[u]);return c.ref=n,c.className=s,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Me,{cache:t,serialized:l,isStringTag:"string"==typeof o}),(0,r.createElement)(o,c))}));n(4634),n(4146);function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ee(t)}var je=function(){var e=Ae.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ze=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};var Le=function(e){var t=e.cache,n=e.serializedArr;_e((function(){for(var e=0;e<n.length;e++)ue(t,n[e],!1)}));return null},Ie=ke((function(e,t){var n=[],a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o=Ee(r,t.registered);return n.push(o),ce(t,o,!1),t.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],a=le(e,r,n);return r.length<2?n:a+t(r)}(t.registered,a,ze(n))},theme:(0,r.useContext)(Ne)},i=e.children(o);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Le,{cache:t,serializedArr:n}),i)}));function $e(){return $e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}const Fe=new Map,He=new WeakMap;let Ye,Re=0;function Be(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(He.has(n)||(Re+=1,He.set(n,Re.toString())),He.get(n)):"0"):e[t]}`;var n})).toString()}function Ve(e,t,n={},r=Ye){if(void 0===window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:i}=function(e){let t=Be(e),n=Fe.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Fe.set(t,n)}return n}(n);let s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),Fe.delete(a))}}const Xe=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function De(e){return"function"!=typeof e.children}class We extends r.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),De(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Ve(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!De(this.props)){const{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}const e=this.props,{children:t,as:n}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Xe);return r.createElement(n||"div",$e({ref:this.handleNode},a),t)}}function qe({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var f;const[d,p]=r.useState(null),m=r.useRef(),[h,g]=r.useState({inView:!!l,entry:void 0});m.current=u,r.useEffect((()=>{if(s||!d)return;let r;return r=Ve(d,((e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&i&&r&&(r(),r=void 0)}),{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,o,a,i,s,n,c,t]);const y=null==(f=h.entry)?void 0:f.target,v=r.useRef();d||!y||i||s||v.current===y||(v.current=y,g({inView:!!l,entry:void 0}));const b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Ue=n(8338),Ge=n(4848),Je=Ge.Fragment;function Qe(e,t,n){return Oe.call(t,"css")?(0,Ge.jsx)(Te,function(e,t){var n={};for(var r in t)Oe.call(t,r)&&(n[r]=t[r]);return n[Pe]=e,n}(e,t),n):(0,Ge.jsx)(e,t,n)}je`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,je`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,je`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,je`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,je`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,je`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,je`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,je`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,je`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,je`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,je`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,je`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,je`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Ze=je`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ke=je`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et=je`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tt=je`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=je`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rt=je`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,at=je`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ot=je`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,it=je`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=je`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=je`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=je`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ut=je`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ft(e,t){return n=>n?e():t()}function dt(e){return ft(e,(()=>null))}var pt=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,keyframes:s=rt,triggerOnce:l=!1,className:c,style:u,childClassName:f,childStyle:d,children:p,onVisibilityChange:m}=e,h=(0,r.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=rt,iterationCount:a=1}){return Ae`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:o})),[o,s]);return null==p?null:"string"==typeof(g=p)||"number"==typeof g||"boolean"==typeof g?Qe(ht,{...e,animationStyles:h,children:String(p)}):(0,Ue.isFragment)(p)?Qe(gt,{...e,animationStyles:h}):Qe(Je,{children:r.Children.map(p,((s,p)=>{if(!(0,r.isValidElement)(s))return null;const g=a+(t?p*o*n:0);switch(s.type){case"ol":case"ul":return Qe(Ie,{children:({cx:t})=>Qe(s.type,{...s.props,className:t(c,s.props.className),style:Object.assign({},u,s.props.style),children:Qe(pt,{...e,children:s.props.children})})});case"li":return Qe(We,{threshold:i,triggerOnce:l,onChange:m,children:({inView:e,ref:t})=>Qe(Ie,{children:({cx:n})=>Qe(s.type,{...s.props,ref:t,className:n(f,s.props.className),css:dt((()=>h))(e),style:Object.assign({},d,s.props.style,{animationDelay:g+"ms"})})})});default:return Qe(We,{threshold:i,triggerOnce:l,onChange:m,children:({inView:e,ref:t})=>Qe("div",{ref:t,className:c,css:dt((()=>h))(e),style:Object.assign({},u,{animationDelay:g+"ms"}),children:Qe(Ie,{children:({cx:e})=>Qe(s.type,{...s.props,className:e(f,s.props.className),style:Object.assign({},d,s.props.style)})})})})}}))});var g},mt={display:"inline-block",whiteSpace:"pre"},ht=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:f}=e,{ref:d,inView:p}=qe({triggerOnce:s,threshold:i,onChange:f});return ft((()=>Qe("div",{ref:d,className:l,style:Object.assign({},c,mt),children:u.split("").map(((e,n)=>Qe("span",{css:dt((()=>t))(p),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Qe(gt,{...e,children:u})))(n)},gt=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:i,onVisibilityChange:s}=e,{ref:l,inView:c}=qe({triggerOnce:r,threshold:n,onChange:s});return Qe("div",{ref:l,className:a,css:dt((()=>t))(c),style:o,children:i})};je`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,je`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,je`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,je`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,je`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,je`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var yt=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,vt=je`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,bt=je`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,wt=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,xt=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Et=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ct=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,_t=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ot=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,St=je`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,kt=je`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Nt=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pt=je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var Mt=e=>{const{big:t=!1,direction:n,reverse:a=!1,...o}=e,i=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?vt:Ke;case"bottom-right":return t?bt:et;case"down":return e?t?xt:nt:t?wt:tt;case"left":return e?t?Ct:at:t?Et:rt;case"right":return e?t?Ot:it:t?_t:ot;case"top-left":return t?St:st;case"top-right":return t?kt:lt;case"up":return e?t?Pt:ut:t?Nt:ct;default:return t?yt:Ze}}(t,a,n)),[t,n,a]);return Qe(pt,{keyframes:i,...o})};je`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,je`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,je`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,je`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,je`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;je`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,je`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,je`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;je`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,je`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,je`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,je`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,je`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,je`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;je`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,je`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,je`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,je`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,je`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;je`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,je`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,je`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,je`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,je`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,je`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,je`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,je`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,je`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,je`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var Tt=()=>r.createElement("section",{id:"hero",className:"bg-gray-900 h-screen"},r.createElement("div",{className:"absolute inset-0 flex items-center text-center justify-center flex-col mx-10"},r.createElement(Mt,{duration:1e3,delay:300},r.createElement("h1",{className:"text-white mb-8 font-extrabold text-4xl md:text-6xl lg:text-7xl"},"This is a portfolio about",r.createElement("br",null),r.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"},"Mizuki Sango"),r.createElement("br",null))),r.createElement(Mt,{duration:1e3,delay:1e3},r.createElement(o.N_,{to:"about",smooth:!0,duration:600},r.createElement("button",{className:"text-blue-400 text-xl md:text-3xl lg:text-4xl hover:text-primary-600 focus:text-primary-600 focus:outline-none"},"About me...")))));var At=e=>{let{title:t}=e;return r.createElement(Mt,{duration:1e3,delay:300},r.createElement("h2",{className:"mb-10 text-center font-bold text-3xl md:text-5xl lg:text-6xl"},t))},jt=n(2532),zt=n(4794);var Lt=()=>{const e=(0,zt.useStaticQuery)("399934830").file.childImageSharp.gatsbyImageData;return r.createElement("section",{id:"about",className:"bg-slate-300"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.createElement("path",{fill:"#111827",fillOpacity:"1",d:"M0,288L30,266.7C60,245,120,203,180,197.3C240,192,300,224,360,224C420,224,480,192,540,197.3C600,203,660,245,720,256C780,267,840,245,900,208C960,171,1020,117,1080,133.3C1140,149,1200,235,1260,245.3C1320,256,1380,192,1410,160L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),r.createElement(At,{title:"About me"}),r.createElement(Mt,{duration:1e3,delay:600,className:"mx-8"},r.createElement("div",{className:"text-black md:flex md:flex-row md:justify-evenly md:items-center"},r.createElement("div",{className:"md:w-1/3"},r.createElement(jt.G,{image:e,alt:"Profile picture of Mizuki Sango in Tokyo, Japan",className:"rounded-lg"}),r.createElement("div",{className:"text-sm md:text-base lg:text-xl"},"※台湾 九份で撮影したもの")),r.createElement("div",{className:"mt-6 md:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"氏名"),r.createElement("span",{className:"w-3/4"},"珊瑚 彩主紀 (さんご みずき)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"生年月日"),r.createElement("span",{className:"w-3/4"},"1994年 6月 22日")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"mail"),r.createElement("span",{className:"w-3/4"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"mailto:msageha+info@gmail.com","aria-label":"Send Email"},"msageha+info -at- gmail.com"))),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"趣味、嗜好"),r.createElement("span",{className:"w-3/4"},"オンラインゲーム、旅行。",r.createElement("br",null),"海外は20ヶ国以上。",r.createElement("br",null),"フランス ブルゴーニュ地方のワインが好き。")),r.createElement("div",{className:"flex mt-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"技術スタック",r.createElement("br",null),"(業務経験",r.createElement("br",null),"1年以上)"),r.createElement("span",{className:"w-3/4"},"言語: Python, Golang, Typescript, Dart(Flutter)",r.createElement("br",null),"データベース: MySQL, PostgreSQL, BigQuery, Redis, Elasticsearch",r.createElement("br",null),"クラウド: AWS, GCP",r.createElement("br",null),"コンテナ: Docker, Kubernetes",r.createElement("br",null),"分散処理: Apache Beam, Apache Spark",r.createElement("br",null),"その他: Apache Airflow, Terraform, Git, CircleCI"))))))};var It=e=>{let{title:t}=e;return r.createElement("h3",{className:"my-4 font-semibold text-center text-xl md:text-3xl lg:text-4xl"},t)};var $t=()=>r.createElement("section",{id:"career",className:"bg-gray-900 text-white text-sm md:text-base lg:text-xl text-center"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none"},r.createElement("path",{fill:"#CBD5E1",fillOpacity:"1",d:"M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,256C420,256,480,256,540,224C600,192,660,128,720,128C780,128,840,192,900,208C960,224,1020,192,1080,202.7C1140,213,1200,267,1260,266.7C1320,267,1380,213,1410,186.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),r.createElement(At,{title:"Career"}),r.createElement(Mt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},r.createElement(It,{title:"経歴"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3"},r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"w-2/5 font-semibold"},"2023 / 11 - 現在"),r.createElement("a",{href:"https://aidaptive.com/about/",target:"_blank","aria-label":"JarvisML Inc.",className:"w-3/5 no-underline hover:underline"},r.createElement("div",null,"株式会社Dope 代表取締役"))),r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),r.createElement("a",{href:"https://dope-inc.com/",target:"_blank","aria-label":"JarvisML Inc.",className:"w-3/5 no-underline hover:underline"},r.createElement("div",null,"JarvisML Inc."))),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2020 / 6 - 2021 / 4"),r.createElement("span",{className:"w-3/5"},"株式会社スパイスコード")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2020 / 5"),r.createElement("span",{className:"w-3/5"},"株式会社メルカリ")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2023 / 3"),r.createElement("span",{className:"w-3/5"},"東京工業大学 博士課程(中退)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 4 - 2019 / 3"),r.createElement("span",{className:"w-3/5"},"東京工業大学 修士課程(修了)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2013 / 4 - 2017 / 3"),r.createElement("span",{className:"w-3/5"},"東北大学 工学部(卒業)")))),r.createElement("br",null),r.createElement("br",null),r.createElement(Mt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},r.createElement(It,{title:"インターン / 業務委託 / その他"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3"},r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2024 / 5 - 現在"),r.createElement("span",{className:"w-3/5"},"株式会社テクノフェイス 業務委託")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),r.createElement("span",{className:"w-3/5"},"株式会社アイモバイル 業務委託")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 9"),r.createElement("span",{className:"w-3/5"},"株式会社リクルートホールディングス インターン")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 8 - 2018 / 3"),r.createElement("span",{className:"w-3/5"},"LINE株式会社 インターン・アルバイト")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 5 - 2018 / 3"),r.createElement("span",{className:"w-3/5"},"SecHack365 1期生")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2015 / 8 - 2016 / 3"),r.createElement("span",{className:"w-3/5"},"トロワ工科大学 (Université de technologie de Troyes) 留学")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2015 / 7"),r.createElement("span",{className:"w-3/5"},"シンガポール国立大学 (National University of Singapore) 留学")),r.createElement("div",{className:"flex"},r.createElement("span",{className:"w-2/5 font-semibold"},"2014 / 4 - 2019 / 3"),r.createElement("span",{className:"w-3/5"},"Life is Tech! メンター")))));const Ft=e=>{let{title:t,author:n,paper:a}=e;return r.createElement("div",{className:"mb-12"},r.createElement("h4",null,t),r.createElement("div",null,n),r.createElement("div",null,a))},Ht=()=>r.createElement(Mt,{duration:1e3,delay:600,className:"mx-8 flex justify-center"},r.createElement(It,{title:"執筆論文"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement(Ft,{title:"Auto Content Moderation in C2C e-Commerce",author:r.createElement(r.Fragment,null,"Shunya Ueta, Suganprabu Nagarajan,",r.createElement("span",{className:"underline"},"Mizuki Sango")),paper:"2020 USENIX Conference on Operational Machine Learning (OpML’20)"}),r.createElement(Ft,{title:"外界一人称と二人称を考慮する日本語述語項構造解析の分野適応",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:"第5回自然言語処理シンポジウム（第238回自然言語処理研究発表会）"}),r.createElement(Ft,{title:"Effectiveness of Domain Adaptation in Japanese Predicate-ArgumentStructure Analysis",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"Mizuki Sango"),", Hitoshi Nishikawa, Takenobu Tokunaga"),paper:"The 32nd Pacific Asia Conference on Language(PACLIC 32)"}),r.createElement(Ft,{title:"スマートスピーカーにおける文章読み上げの課題とその解決",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 佐藤 敏紀, 植田 禎子, 橋本 泰一"),paper:"言語処理学会第24回年次大会(NLP2018)"}),r.createElement(Ft,{title:"Monitoring Geographical Entities with Temporal Awareness in Tweets",author:r.createElement(r.Fragment,null,"Koji Matsuda, ",r.createElement("span",{className:"underline"},"Mizuki Sango"),", Naoaki Okazaki, Kentaro Inui"),paper:"International Conference on Computational Linguistics and Intelligent Text Processing (CICLing 2017)"}),r.createElement(Ft,{title:"ツイート中の地理情報に対する時間的極性の自動推定",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 松田耕史, 岡崎直観, 乾健太郎"),paper:"2016年度 人工知能学会全国大会（第30回）"}),r.createElement(Ft,{title:"ジャーナル",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:" 会誌「自然言語処理」"})));var Yt=()=>r.createElement("section",{id:"publish",className:"bg-slate-300 text-black mx-auto"},r.createElement("svg",{className:"bg-slate-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.createElement("path",{fill:"#111827",fillOpacity:"1",d:"M0,160L30,181.3C60,203,120,245,180,261.3C240,277,300,267,360,218.7C420,171,480,85,540,48C600,11,660,21,720,74.7C780,128,840,224,900,261.3C960,299,1020,277,1080,240C1140,203,1200,149,1260,133.3C1320,117,1380,139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),r.createElement(At,{title:"成果"}),r.createElement(Mt,{duration:1e3,delay:600,className:"mx-8 flex justify-center"},r.createElement(It,{title:"特許"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2021189670A"},r.createElement("h4",null,"プログラム、情報処理方法、及び情報処理装置"),r.createElement("div",null,"株式会社メルカリ"),r.createElement("div",null,"新井 康平, 本間 和尊, 東原 秀亮, 櫻木 善将,"," ",r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 紫藤 佑介"))),r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2021092890A"},r.createElement("h4",null,"端末装置、データ共有方法及びプログラム"),r.createElement("div",null,"株式会社メルカリ"),r.createElement("div",null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀")))),r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2020009249A"},r.createElement("h4",null,"情報処理方法、情報処理装置、及びプログラム"),r.createElement("div",null,"LINE株式会社"),r.createElement("div",null,"佐藤 敏紀, ",r.createElement("span",{className:"underline"},"珊瑚 彩主紀")))))),r.createElement(Ht,null));const Rt=()=>r.createElement("a",{href:"https://github.com/msageha",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),Bt=()=>r.createElement("a",{href:"https://x.com/mzking622",target:"_blank",rel:"noopener noreferrer","aria-label":"X Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),Vt=()=>r.createElement("a",{href:"https://instagram.com/msageha",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),Xt=()=>r.createElement("a",{href:"https://www.linkedin.com/in/mizuki-sango",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})));var Dt=()=>r.createElement("section",{id:"sns",className:"bg-gray-900 text-white"},r.createElement("svg",{className:"bg-gray-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.createElement("path",{fill:"#CBD5E1",fillOpacity:"1",d:"M0,96L30,122.7C60,149,120,203,180,229.3C240,256,300,256,360,229.3C420,203,480,149,540,112C600,75,660,53,720,64C780,75,840,117,900,165.3C960,213,1020,267,1080,256C1140,245,1200,171,1260,170.7C1320,171,1380,245,1410,282.7L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"})),r.createElement(At,{title:"SNS"}),r.createElement(Mt,{duration:1e3,delay:600,className:" md:flex md:justify-center"},r.createElement("div",{className:"flex items-center justify-evenly md:w-1/2"},r.createElement(Rt,null),r.createElement(Bt,null),r.createElement(Vt,null),r.createElement(Xt,null))));var Wt,qt,Ut,Gt,Jt,Qt,Zt,Kt,en=()=>r.createElement("footer",{className:"bg-gray-900 text-white md:flex md:justify-center pt-12 pb-8"},r.createElement("div",{className:"md:w-1/2 mx-4"},"Copyright © ",(new Date).getFullYear()," - Developed by"," ",r.createElement("a",{href:"https://github.com/msageha",target:"_blank"},"Mizuki Sango"))),tn=n(8607),nn={},rn=180/Math.PI,an=Math.PI/180,on=Math.atan2,sn=/([A-Z])/g,ln=/(left|right|width|margin|padding|x)/i,cn=/[\s,\(]\S/,un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fn=function(e,t){return t.set(t.t,t.p,Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},dn=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},pn=function(e,t){return t.set(t.t,t.p,e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},mn=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hn=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gn=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},yn=function(e,t,n){return e.style[t]=n},vn=function(e,t,n){return e.style.setProperty(t,n)},bn=function(e,t,n){return e._gsap[t]=n},wn=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},xn=function(e,t,n,r,a){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(a,o)},En=function(e,t,n,r,a){var o=e._gsap;o[t]=n,o.renderTransform(a,o)},Cn="transform",_n=Cn+"Origin",On=function e(t,n){var r=this,a=this.target,o=a.style,i=a._gsap;if(t in nn&&o){if(this.tfm=this.tfm||{},"transform"===t)return un.transform.split(",").forEach((function(t){return e.call(r,t,n)}));if(~(t=un[t]||t).indexOf(",")?t.split(",").forEach((function(e){return r.tfm[e]=Vn(a,e)})):this.tfm[t]=i.x?i[t]:Vn(a,t),t===_n&&(this.tfm.zOrigin=i.zOrigin),this.props.indexOf(Cn)>=0)return;i.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(_n,n,"")),t=Cn}(o||n)&&this.props.push(t,n,o[t])},Sn=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kn=function(){var e,t,n=this.props,r=this.target,a=r.style,o=r._gsap;for(e=0;e<n.length;e+=3)n[e+1]?2===n[e+1]?r[n[e]](n[e+2]):r[n[e]]=n[e+2]:n[e+2]?a[n[e]]=n[e+2]:a.removeProperty("--"===n[e].substr(0,2)?n[e]:n[e].replace(sn,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)o[t]=this.tfm[t];o.svg&&(o.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),(e=Zt())&&e.isStart||a[Cn]||(Sn(a),o.zOrigin&&a[_n]&&(a[_n]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},Nn=function(e,t){var n={target:e,props:[],revert:kn,save:On};return e._gsap||tn.os.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach((function(e){return n.save(e)})),n},Pn=function(e,t){var n=qt.createElementNS?qt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qt.createElement(e);return n&&n.style?n:qt.createElement(e)},Mn=function e(t,n,r){var a=getComputedStyle(t);return a[n]||a.getPropertyValue(n.replace(sn,"-$1").toLowerCase())||a.getPropertyValue(n)||!r&&e(t,An(n)||n,1)||""},Tn="O,Moz,ms,Ms,Webkit".split(","),An=function(e,t,n){var r=(t||Jt).style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tn[a]+e in r););return a<0?null:(3===a?"ms":a>=0?Tn[a]:"")+e},jn=function(){"undefined"!=typeof window&&window.document&&(Wt=window,qt=Wt.document,Ut=qt.documentElement,Jt=Pn("div")||{style:{}},Pn("div"),Cn=An(Cn),_n=Cn+"Origin",Jt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kt=!!An("perspective"),Zt=tn.os.core.reverting,Gt=1)},zn=function(e){var t,n=e.ownerSVGElement,r=Pn("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0);a.style.display="block",r.appendChild(a),Ut.appendChild(r);try{t=a.getBBox()}catch(o){}return r.removeChild(a),Ut.removeChild(r),t},Ln=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},In=function(e){var t,n;try{t=e.getBBox()}catch(r){t=zn(e),n=1}return t&&(t.width||t.height)||n||(t=zn(e)),!t||t.width||t.x||t.y?t:{x:+Ln(e,["x","cx","x1"])||0,y:+Ln(e,["y","cy","y1"])||0,width:0,height:0}},$n=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!In(e))},Fn=function(e,t){if(t){var n,r=e.style;t in nn&&t!==_n&&(t=Cn),r.removeProperty?("ms"!==(n=t.substr(0,2))&&"webkit"!==t.substr(0,6)||(t="-"+t),r.removeProperty("--"===n?t:t.replace(sn,"-$1").toLowerCase())):r.removeAttribute(t)}},Hn=function(e,t,n,r,a,o){var i=new tn.J7(e._pt,t,n,0,1,o?gn:hn);return e._pt=i,i.b=r,i.e=a,e._props.push(n),i},Yn={deg:1,rad:1,turn:1},Rn={grid:1,flex:1},Bn=function e(t,n,r,a){var o,i,s,l,c=parseFloat(r)||0,u=(r+"").trim().substr((c+"").length)||"px",f=Jt.style,d=ln.test(n),p="svg"===t.tagName.toLowerCase(),m=(p?"client":"offset")+(d?"Width":"Height"),h=100,g="px"===a,y="%"===a;if(a===u||!c||Yn[a]||Yn[u])return c;if("px"!==u&&!g&&(c=e(t,n,r,"px")),l=t.getCTM&&$n(t),(y||"%"===u)&&(nn[n]||~n.indexOf("adius")))return o=l?t.getBBox()[d?"width":"height"]:t[m],(0,tn.E_)(y?c/o*h:c/100*o);if(f[d?"width":"height"]=h+(g?u:a),i="rem"!==a&&~n.indexOf("adius")||"em"===a&&t.appendChild&&!p?t:t.parentNode,l&&(i=(t.ownerSVGElement||{}).parentNode),i&&i!==qt&&i.appendChild||(i=qt.body),(s=i._gsap)&&y&&s.width&&d&&s.time===tn.au.time&&!s.uncache)return(0,tn.E_)(c/s.width*h);if(!y||"height"!==n&&"width"!==n)(y||"%"===u)&&!Rn[Mn(i,"display")]&&(f.position=Mn(t,"position")),i===t&&(f.position="static"),i.appendChild(Jt),o=Jt[m],i.removeChild(Jt),f.position="absolute";else{var v=t.style[n];t.style[n]=h+a,o=t[m],v?t.style[n]=v:Fn(t,n)}return d&&y&&((s=(0,tn.a0)(i)).time=tn.au.time,s.width=i[m]),(0,tn.E_)(g?o*c/h:o&&c?h/o*c:0)},Vn=function(e,t,n,r){var a;return Gt||jn(),t in un&&"transform"!==t&&~(t=un[t]).indexOf(",")&&(t=t.split(",")[0]),nn[t]&&"transform"!==t?(a=er(e,r),a="transformOrigin"!==t?a[t]:a.svg?a.origin:tr(Mn(e,_n))+" "+a.zOrigin+"px"):(!(a=e.style[t])||"auto"===a||r||~(a+"").indexOf("calc("))&&(a=qn[t]&&qn[t](e,t,n)||Mn(e,t)||(0,tn.n)(e,t)||("opacity"===t?1:0)),n&&!~(a+"").trim().indexOf(" ")?Bn(e,t,a,n)+n:a},Xn=function(e,t,n,r){if(!n||"none"===n){var a=An(t,e,1),o=a&&Mn(e,a,1);o&&o!==n?(t=a,n=o):"borderColor"===t&&(n=Mn(e,"borderTopColor"))}var i,s,l,c,u,f,d,p,m,h,g,y=new tn.J7(this._pt,e.style,t,0,1,tn.l1),v=0,b=0;if(y.b=n,y.e=r,n+="","var(--"===(r+="").substring(0,6)&&(r=Mn(e,r.substring(4,r.indexOf(")")))),"auto"===r&&(f=e.style[t],e.style[t]=r,r=Mn(e,t)||r,f?e.style[t]=f:Fn(e,t)),i=[n,r],(0,tn.Uc)(i),r=i[1],l=(n=i[0]).match(tn.vM)||[],(r.match(tn.vM)||[]).length){for(;s=tn.vM.exec(r);)d=s[0],m=r.substring(v,s.index),u?u=(u+1)%5:"rgba("!==m.substr(-5)&&"hsla("!==m.substr(-5)||(u=1),d!==(f=l[b++]||"")&&(c=parseFloat(f)||0,g=f.substr((c+"").length),"="===d.charAt(1)&&(d=(0,tn.B0)(c,d)+g),p=parseFloat(d),h=d.substr((p+"").length),v=tn.vM.lastIndex-h.length,h||(h=h||tn.Yz.units[t]||g,v===r.length&&(r+=h,y.e+=h)),g!==h&&(c=Bn(e,t,f,h)||0),y._pt={_next:y._pt,p:m||1===b?m:",",s:c,c:p-c,m:u&&u<4||"zIndex"===t?Math.round:0});y.c=v<r.length?r.substring(v,r.length):""}else y.r="display"===t&&"none"===r?gn:hn;return tn.Ks.test(r)&&(y.e=0),this._pt=y,y},Dn={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wn=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n,r,a,o=t.t,i=o.style,s=t.u,l=o._gsap;if("all"===s||!0===s)i.cssText="",r=1;else for(a=(s=s.split(",")).length;--a>-1;)n=s[a],nn[n]&&(r=1,n="transformOrigin"===n?_n:Cn),Fn(o,n);r&&(Fn(o,Cn),l&&(l.svg&&o.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",er(o,1),l.uncache=1,Sn(i)))}},qn={clearProps:function(e,t,n,r,a){if("isFromStart"!==a.data){var o=e._pt=new tn.J7(e._pt,t,n,0,0,Wn);return o.u=r,o.pr=-10,o.tween=a,e._props.push(n),1}}},Un=[1,0,0,1,0,0],Gn={},Jn=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},Qn=function(e){var t=Mn(e,Cn);return Jn(t)?Un:t.substr(7).match(tn.vX).map(tn.E_)},Zn=function(e,t){var n,r,a,o,i=e._gsap||(0,tn.a0)(e),s=e.style,l=Qn(e);return i.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(a=e.transform.baseVal.consolidate().matrix).a,a.b,a.c,a.d,a.e,a.f]).join(",")?Un:l:(l!==Un||e.offsetParent||e===Ut||i.svg||(a=s.display,s.display="block",(n=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(o=1,r=e.nextElementSibling,Ut.appendChild(e)),l=Qn(e),a?s.display=a:Fn(e,"display"),o&&(r?n.insertBefore(e,r):n?n.appendChild(e):Ut.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Kn=function(e,t,n,r,a,o){var i,s,l,c=e._gsap,u=a||Zn(e,!0),f=c.xOrigin||0,d=c.yOrigin||0,p=c.xOffset||0,m=c.yOffset||0,h=u[0],g=u[1],y=u[2],v=u[3],b=u[4],w=u[5],x=t.split(" "),E=parseFloat(x[0])||0,C=parseFloat(x[1])||0;n?u!==Un&&(s=h*v-g*y)&&(l=E*(-g/s)+C*(h/s)-(h*w-g*b)/s,E=E*(v/s)+C*(-y/s)+(y*w-v*b)/s,C=l):(E=(i=In(e)).x+(~x[0].indexOf("%")?E/100*i.width:E),C=i.y+(~(x[1]||x[0]).indexOf("%")?C/100*i.height:C)),r||!1!==r&&c.smooth?(b=E-f,w=C-d,c.xOffset=p+(b*h+w*y)-b,c.yOffset=m+(b*g+w*v)-w):c.xOffset=c.yOffset=0,c.xOrigin=E,c.yOrigin=C,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[_n]="0px 0px",o&&(Hn(o,c,"xOrigin",f,E),Hn(o,c,"yOrigin",d,C),Hn(o,c,"xOffset",p,c.xOffset),Hn(o,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},er=function(e,t){var n=e._gsap||new tn.n6(e);if("x"in n&&!t&&!n.uncache)return n;var r,a,o,i,s,l,c,u,f,d,p,m,h,g,y,v,b,w,x,E,C,_,O,S,k,N,P,M,T,A,j,z,L=e.style,I=n.scaleX<0,$="px",F="deg",H=getComputedStyle(e),Y=Mn(e,_n)||"0";return r=a=o=l=c=u=f=d=p=0,i=s=1,n.svg=!(!e.getCTM||!$n(e)),H.translate&&("none"===H.translate&&"none"===H.scale&&"none"===H.rotate||(L[Cn]=("none"!==H.translate?"translate3d("+(H.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==H.rotate?"rotate("+H.rotate+") ":"")+("none"!==H.scale?"scale("+H.scale.split(" ").join(",")+") ":"")+("none"!==H[Cn]?H[Cn]:"")),L.scale=L.rotate=L.translate="none"),g=Zn(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),Y=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",S=""):S=!t&&e.getAttribute("data-svg-origin"),Kn(e,S||Y,!!S||n.originIsAbsolute,!1!==n.smooth,g)),m=n.xOrigin||0,h=n.yOrigin||0,g!==Un&&(w=g[0],x=g[1],E=g[2],C=g[3],r=_=g[4],a=O=g[5],6===g.length?(i=Math.sqrt(w*w+x*x),s=Math.sqrt(C*C+E*E),l=w||x?on(x,w)*rn:0,(f=E||C?on(E,C)*rn+l:0)&&(s*=Math.abs(Math.cos(f*an))),n.svg&&(r-=m-(m*w+h*E),a-=h-(m*x+h*C))):(z=g[6],A=g[7],P=g[8],M=g[9],T=g[10],j=g[11],r=g[12],a=g[13],o=g[14],c=(y=on(z,T))*rn,y&&(S=_*(v=Math.cos(-y))+P*(b=Math.sin(-y)),k=O*v+M*b,N=z*v+T*b,P=_*-b+P*v,M=O*-b+M*v,T=z*-b+T*v,j=A*-b+j*v,_=S,O=k,z=N),u=(y=on(-E,T))*rn,y&&(v=Math.cos(-y),j=C*(b=Math.sin(-y))+j*v,w=S=w*v-P*b,x=k=x*v-M*b,E=N=E*v-T*b),l=(y=on(x,w))*rn,y&&(S=w*(v=Math.cos(y))+x*(b=Math.sin(y)),k=_*v+O*b,x=x*v-w*b,O=O*v-_*b,w=S,_=k),c&&Math.abs(c)+Math.abs(l)>359.9&&(c=l=0,u=180-u),i=(0,tn.E_)(Math.sqrt(w*w+x*x+E*E)),s=(0,tn.E_)(Math.sqrt(O*O+z*z)),y=on(_,O),f=Math.abs(y)>2e-4?y*rn:0,p=j?1/(j<0?-j:j):0),n.svg&&(S=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jn(Mn(e,Cn)),S&&e.setAttribute("transform",S))),Math.abs(f)>90&&Math.abs(f)<270&&(I?(i*=-1,f+=l<=0?180:-180,l+=l<=0?180:-180):(s*=-1,f+=f<=0?180:-180)),t=t||n.uncache,n.x=r-((n.xPercent=r&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-r)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+$,n.y=a-((n.yPercent=a&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-a)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+$,n.z=o+$,n.scaleX=(0,tn.E_)(i),n.scaleY=(0,tn.E_)(s),n.rotation=(0,tn.E_)(l)+F,n.rotationX=(0,tn.E_)(c)+F,n.rotationY=(0,tn.E_)(u)+F,n.skewX=f+F,n.skewY=d+F,n.transformPerspective=p+$,(n.zOrigin=parseFloat(Y.split(" ")[2])||!t&&n.zOrigin||0)&&(L[_n]=tr(Y)),n.xOffset=n.yOffset=0,n.force3D=tn.Yz.force3D,n.renderTransform=n.svg?lr:Kt?sr:rr,n.uncache=0,n},tr=function(e){return(e=e.split(" "))[0]+" "+e[1]},nr=function(e,t,n){var r=(0,tn.l_)(t);return(0,tn.E_)(parseFloat(t)+parseFloat(Bn(e,"x",n+"px",r)))+r},rr=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sr(e,t)},ar="0deg",or="0px",ir=") ",sr=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,o=n.x,i=n.y,s=n.z,l=n.rotation,c=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,y=n.target,v=n.zOrigin,b="",w="auto"===g&&e&&1!==e||!0===g;if(v&&(u!==ar||c!==ar)){var x,E=parseFloat(c)*an,C=Math.sin(E),_=Math.cos(E);E=parseFloat(u)*an,x=Math.cos(E),o=nr(y,o,C*x*-v),i=nr(y,i,-Math.sin(E)*-v),s=nr(y,s,_*x*-v+v)}h!==or&&(b+="perspective("+h+ir),(r||a)&&(b+="translate("+r+"%, "+a+"%) "),(w||o!==or||i!==or||s!==or)&&(b+=s!==or||w?"translate3d("+o+", "+i+", "+s+") ":"translate("+o+", "+i+ir),l!==ar&&(b+="rotate("+l+ir),c!==ar&&(b+="rotateY("+c+ir),u!==ar&&(b+="rotateX("+u+ir),f===ar&&d===ar||(b+="skew("+f+", "+d+ir),1===p&&1===m||(b+="scale("+p+", "+m+ir),y.style[Cn]=b||"translate(0, 0)"},lr=function(e,t){var n,r,a,o,i,s=t||this,l=s.xPercent,c=s.yPercent,u=s.x,f=s.y,d=s.rotation,p=s.skewX,m=s.skewY,h=s.scaleX,g=s.scaleY,y=s.target,v=s.xOrigin,b=s.yOrigin,w=s.xOffset,x=s.yOffset,E=s.forceCSS,C=parseFloat(u),_=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(m=parseFloat(m))&&(p+=m=parseFloat(m),d+=m),d||p?(d*=an,p*=an,n=Math.cos(d)*h,r=Math.sin(d)*h,a=Math.sin(d-p)*-g,o=Math.cos(d-p)*g,p&&(m*=an,i=Math.tan(p-m),a*=i=Math.sqrt(1+i*i),o*=i,m&&(i=Math.tan(m),n*=i=Math.sqrt(1+i*i),r*=i)),n=(0,tn.E_)(n),r=(0,tn.E_)(r),a=(0,tn.E_)(a),o=(0,tn.E_)(o)):(n=h,o=g,r=a=0),(C&&!~(u+"").indexOf("px")||_&&!~(f+"").indexOf("px"))&&(C=Bn(y,"x",u,"px"),_=Bn(y,"y",f,"px")),(v||b||w||x)&&(C=(0,tn.E_)(C+v-(v*n+b*a)+w),_=(0,tn.E_)(_+b-(v*r+b*o)+x)),(l||c)&&(i=y.getBBox(),C=(0,tn.E_)(C+l/100*i.width),_=(0,tn.E_)(_+c/100*i.height)),i="matrix("+n+","+r+","+a+","+o+","+C+","+_+")",y.setAttribute("transform",i),E&&(y.style[Cn]=i)},cr=function(e,t,n,r,a){var o,i,s=360,l=(0,tn.vQ)(a),c=parseFloat(a)*(l&&~a.indexOf("rad")?rn:1)-r,u=r+c+"deg";return l&&("short"===(o=a.split("_")[1])&&(c%=s)!==c%180&&(c+=c<0?s:-360),"cw"===o&&c<0?c=(c+36e9)%s-~~(c/s)*s:"ccw"===o&&c>0&&(c=(c-36e9)%s-~~(c/s)*s)),e._pt=i=new tn.J7(e._pt,t,n,r,c,dn),i.e=u,i.u="deg",e._props.push(n),i},ur=function(e,t){for(var n in t)e[n]=t[n];return e},fr=function(e,t,n){var r,a,o,i,s,l,c,u=ur({},n._gsap),f=n.style;for(a in u.svg?(o=n.getAttribute("transform"),n.setAttribute("transform",""),f[Cn]=t,r=er(n,1),Fn(n,Cn),n.setAttribute("transform",o)):(o=getComputedStyle(n)[Cn],f[Cn]=t,r=er(n,1),f[Cn]=o),nn)(o=u[a])!==(i=r[a])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(a)<0&&(s=(0,tn.l_)(o)!==(c=(0,tn.l_)(i))?Bn(n,a,o,c):parseFloat(o),l=parseFloat(i),e._pt=new tn.J7(e._pt,r,a,s,l-s,fn),e._pt.u=c||0,e._props.push(a));ur(r,u)};(0,tn.fA)("padding,margin,Width,Radius",(function(e,t){var n="Top",r="Right",a="Bottom",o="Left",i=(t<3?[n,r,a,o]:[n+o,n+r,a+r,a+o]).map((function(n){return t<2?e+n:"border"+n+e}));qn[t>1?"border"+e:e]=function(e,t,n,r,a){var o,s;if(arguments.length<4)return o=i.map((function(t){return Vn(e,t,n)})),5===(s=o.join(" ")).split(o[0]).length?o[0]:s;o=(r+"").split(" "),s={},i.forEach((function(e,t){return s[e]=o[t]=o[t]||o[(t-1)/2|0]})),e.init(t,s,a)}}));var dr,pr,mr,hr={name:"css",register:jn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var o,i,s,l,c,u,f,d,p,m,h,g,y,v,b,w,x,E,C,_,O=this._props,S=e.style,k=n.vars.startAt;for(f in Gt||jn(),this.styles=this.styles||Nn(e),w=this.styles.props,this.tween=n,t)if("autoRound"!==f&&(i=t[f],!tn.wU[f]||!(0,tn.Zm)(f,t,n,r,e,a)))if(c=typeof i,u=qn[f],"function"===c&&(c=typeof(i=i.call(n,r,e,a))),"string"===c&&~i.indexOf("random(")&&(i=(0,tn.Vy)(i)),u)u(this,e,f,i,n)&&(b=1);else if("--"===f.substr(0,2))o=(getComputedStyle(e).getPropertyValue(f)+"").trim(),i+="",tn.qA.lastIndex=0,tn.qA.test(o)||(d=(0,tn.l_)(o),p=(0,tn.l_)(i)),p?d!==p&&(o=Bn(e,f,o,p)+p):d&&(i+=d),this.add(S,"setProperty",o,i,r,a,0,0,f),O.push(f),w.push(f,0,S[f]);else if("undefined"!==c){if(k&&f in k?(o="function"==typeof k[f]?k[f].call(n,r,e,a):k[f],(0,tn.vQ)(o)&&~o.indexOf("random(")&&(o=(0,tn.Vy)(o)),(0,tn.l_)(o+"")||"auto"===o||(o+=tn.Yz.units[f]||(0,tn.l_)(Vn(e,f))||""),"="===(o+"").charAt(1)&&(o=Vn(e,f))):o=Vn(e,f),l=parseFloat(o),(m="string"===c&&"="===i.charAt(1)&&i.substr(0,2))&&(i=i.substr(2)),s=parseFloat(i),f in un&&("autoAlpha"===f&&(1===l&&"hidden"===Vn(e,"visibility")&&s&&(l=0),w.push("visibility",0,S.visibility),Hn(this,S,"visibility",l?"inherit":"hidden",s?"inherit":"hidden",!s)),"scale"!==f&&"transform"!==f&&~(f=un[f]).indexOf(",")&&(f=f.split(",")[0])),h=f in nn)if(this.styles.save(f),"string"===c&&"var(--"===i.substring(0,6)&&(i=Mn(e,i.substring(4,i.indexOf(")"))),s=parseFloat(i)),g||((y=e._gsap).renderTransform&&!t.parseTransform||er(e,t.parseTransform),v=!1!==t.smoothOrigin&&y.smooth,(g=this._pt=new tn.J7(this._pt,S,Cn,0,1,y.renderTransform,y,0,-1)).dep=1),"scale"===f)this._pt=new tn.J7(this._pt,y,"scaleY",y.scaleY,(m?(0,tn.B0)(y.scaleY,m+s):s)-y.scaleY||0,fn),this._pt.u=0,O.push("scaleY",f),f+="X";else{if("transformOrigin"===f){w.push(_n,0,S[_n]),E=void 0,C=void 0,_=void 0,E=(x=i).split(" "),C=E[0],_=E[1]||"50%","top"!==C&&"bottom"!==C&&"left"!==_&&"right"!==_||(x=C,C=_,_=x),E[0]=Dn[C]||C,E[1]=Dn[_]||_,i=E.join(" "),y.svg?Kn(e,i,0,v,0,this):((p=parseFloat(i.split(" ")[2])||0)!==y.zOrigin&&Hn(this,y,"zOrigin",y.zOrigin,p),Hn(this,S,f,tr(o),tr(i)));continue}if("svgOrigin"===f){Kn(e,i,1,v,0,this);continue}if(f in Gn){cr(this,y,f,l,m?(0,tn.B0)(l,m+i):i);continue}if("smoothOrigin"===f){Hn(this,y,"smooth",y.smooth,i);continue}if("force3D"===f){y[f]=i;continue}if("transform"===f){fr(this,i,e);continue}}else f in S||(f=An(f)||f);if(h||(s||0===s)&&(l||0===l)&&!cn.test(i)&&f in S)s||(s=0),(d=(o+"").substr((l+"").length))!==(p=(0,tn.l_)(i)||(f in tn.Yz.units?tn.Yz.units[f]:d))&&(l=Bn(e,f,o,p)),this._pt=new tn.J7(this._pt,h?y:S,f,l,(m?(0,tn.B0)(l,m+s):s)-l,h||"px"!==p&&"zIndex"!==f||!1===t.autoRound?fn:mn),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=o,this._pt.r=pn);else if(f in S)Xn.call(this,e,f,o,m?m+i:i);else if(f in e)this.add(e,f,o||e[f],m?m+i:i,r,a);else if("parseTransform"!==f){(0,tn.dg)(f,i);continue}h||(f in S?w.push(f,0,S[f]):"function"==typeof e[f]?w.push(f,2,e[f]()):w.push(f,1,o||e[f])),O.push(f)}b&&(0,tn.St)(this)},render:function(e,t){if(t.tween._time||!Zt())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vn,aliases:un,getSetter:function(e,t,n){var r=un[t];return r&&r.indexOf(",")<0&&(t=r),t in nn&&t!==_n&&(e._gsap.x||Vn(e,"x"))?n&&Qt===n?"scale"===t?wn:bn:(Qt=n||{})&&("scale"===t?xn:En):e.style&&!(0,tn.OF)(e.style[t])?yn:~t.indexOf("-")?vn:(0,tn.Dx)(e,t)},core:{_removeProperty:Fn,_getMatrix:Zn}};tn.os.utils.checkPrefix=An,tn.os.core.getStyleSaver=Nn,dr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",pr="rotation,rotationX,rotationY,skewX,skewY",mr=(0,tn.fA)(dr+","+pr+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(e){nn[e]=1})),(0,tn.fA)(pr,(function(e){tn.Yz.units[e]="deg",Gn[e]=1})),un[mr[13]]=dr+","+pr,(0,tn.fA)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(e){var t=e.split(":");un[t[1]]=mr[t[0]]})),(0,tn.fA)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(e){tn.Yz.units[e]="px"})),tn.os.registerPlugin(hr);var gr=tn.os.registerPlugin(hr)||tn.os,yr=(gr.core.Tween,/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),vr=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,br=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,wr=/(^[#\.][a-z]|[a-y][a-z])/i,xr=Math.PI/180,Er=(Math.PI,Math.sin),Cr=Math.cos,_r=Math.abs,Or=Math.sqrt,Sr=(Math.atan2,function(e){return"string"==typeof e}),kr=function(e){return"number"==typeof e},Nr=1e5,Pr=function(e){return Math.round(e*Nr)/Nr||0};function Mr(e){var t,n=0;for(e.reverse();n<e.length;n+=2)t=e[n],e[n]=e[n+1],e[n+1]=t;e.reversed=!e.reversed}var Tr={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function Ar(e,t){var n,r,a,o,i,s,l,c,u,f,d,p,m,h,g,y,v,b,w,x,E,C,_=e.tagName.toLowerCase(),O=.552284749831;return"path"!==_&&e.getBBox?(s=function(e,t){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(e.attributes),o=a.length;for(t=","+t+",";--o>-1;)n=a[o].nodeName.toLowerCase(),t.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),C=function(e,t){for(var n=t?t.split(","):[],r={},a=n.length;--a>-1;)r[n[a]]=+e.getAttribute(n[a])||0;return r}(e,Tr[_]),"rect"===_?(o=C.rx,i=C.ry||o,r=C.x,a=C.y,f=C.width-2*o,d=C.height-2*i,n=o||i?"M"+(y=(h=(m=r+o)+f)+o)+","+(b=a+i)+" V"+(w=b+d)+" C"+[y,x=w+i*O,g=h+o*O,E=w+i,h,E,h-(h-m)/3,E,m+(h-m)/3,E,m,E,p=r+o*(1-O),E,r,x,r,w,r,w-(w-b)/3,r,b+(w-b)/3,r,b,r,v=a+i*(1-O),p,a,m,a,m+(h-m)/3,a,h-(h-m)/3,a,h,a,g,a,y,v,y,b].join(",")+"z":"M"+(r+f)+","+a+" v"+d+" h"+-f+" v"+-d+" h"+f+"z"):"circle"===_||"ellipse"===_?("circle"===_?c=(o=i=C.r)*O:(o=C.rx,c=(i=C.ry)*O),n="M"+((r=C.cx)+o)+","+(a=C.cy)+" C"+[r+o,a+c,r+(l=o*O),a+i,r,a+i,r-l,a+i,r-o,a+c,r-o,a,r-o,a-c,r-l,a-i,r,a-i,r+l,a-i,r+o,a-c,r+o,a].join(",")+"z"):"line"===_?n="M"+C.x1+","+C.y1+" L"+C.x2+","+C.y2:"polyline"!==_&&"polygon"!==_||(n="M"+(r=(u=(e.getAttribute("points")+"").match(vr)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===_&&(n+=","+r+","+a+"z")),s.setAttribute("d",Lr(s._gsRawPath=zr(n))),t&&e.parentNode&&(e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e)),s):e}function jr(e,t,n,r,a,o,i,s,l){if(e!==s||t!==l){n=_r(n),r=_r(r);var c=a%360*xr,u=Cr(c),f=Er(c),d=Math.PI,p=2*d,m=(e-s)/2,h=(t-l)/2,g=u*m+f*h,y=-f*m+u*h,v=g*g,b=y*y,w=v/(n*n)+b/(r*r);w>1&&(n=Or(w)*n,r=Or(w)*r);var x=n*n,E=r*r,C=(x*E-x*b-E*v)/(x*b+E*v);C<0&&(C=0);var _=(o===i?-1:1)*Or(C),O=_*(n*y/r),S=_*(-r*g/n),k=(e+s)/2+(u*O-f*S),N=(t+l)/2+(f*O+u*S),P=(g-O)/n,M=(y-S)/r,T=(-g-O)/n,A=(-y-S)/r,j=P*P+M*M,z=(M<0?-1:1)*Math.acos(P/Or(j)),L=(P*A-M*T<0?-1:1)*Math.acos((P*T+M*A)/Or(j*(T*T+A*A)));isNaN(L)&&(L=d),!i&&L>0?L-=p:i&&L<0&&(L+=p),z%=p,L%=p;var I,$=Math.ceil(_r(L)/(p/4)),F=[],H=L/$,Y=4/3*Er(H/2)/(1+Cr(H/2)),R=u*n,B=f*n,V=f*-r,X=u*r;for(I=0;I<$;I++)g=Cr(a=z+I*H),y=Er(a),P=Cr(a+=H),M=Er(a),F.push(g-Y*y,y+Y*g,P+Y*M,M-Y*P,P,M);for(I=0;I<F.length;I+=2)g=F[I],y=F[I+1],F[I]=g*R+y*V+k,F[I+1]=g*B+y*X+N;return F[I-2]=s,F[I-1]=l,F}}function zr(e){var t,n,r,a,o,i,s,l,c,u,f,d,p,m,h,g=(e+"").replace(br,(function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t})).match(yr)||[],y=[],v=0,b=0,w=2/3,x=g.length,E=0,C="ERROR: malformed path: "+e,_=function(e,t,n,r){u=(n-e)/3,f=(r-t)/3,s.push(e+u,t+f,n-u,r-f,n,r)};if(!e||!isNaN(g[0])||isNaN(g[1]))return console.log(C),y;for(t=0;t<x;t++)if(p=o,isNaN(g[t])?i=(o=g[t].toUpperCase())!==g[t]:t--,r=+g[t+1],a=+g[t+2],i&&(r+=v,a+=b),t||(l=r,c=a),"M"===o)s&&(s.length<8?y.length-=1:E+=s.length),v=l=r,b=c=a,s=[r,a],y.push(s),t+=2,o="L";else if("C"===o)s||(s=[0,0]),i||(v=b=0),s.push(r,a,v+1*g[t+3],b+1*g[t+4],v+=1*g[t+5],b+=1*g[t+6]),t+=6;else if("S"===o)u=v,f=b,"C"!==p&&"S"!==p||(u+=v-s[s.length-4],f+=b-s[s.length-3]),i||(v=b=0),s.push(u,f,r,a,v+=1*g[t+3],b+=1*g[t+4]),t+=4;else if("Q"===o)u=v+(r-v)*w,f=b+(a-b)*w,i||(v=b=0),v+=1*g[t+3],b+=1*g[t+4],s.push(u,f,v+(r-v)*w,b+(a-b)*w,v,b),t+=4;else if("T"===o)u=v-s[s.length-4],f=b-s[s.length-3],s.push(v+u,b+f,r+(v+1.5*u-r)*w,a+(b+1.5*f-a)*w,v=r,b=a),t+=2;else if("H"===o)_(v,b,v=r,b),t+=1;else if("V"===o)_(v,b,v,b=r+(i?b-v:0)),t+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=c,s.closed=!0),("L"===o||_r(v-r)>.5||_r(b-a)>.5)&&(_(v,b,r,a),"L"===o&&(t+=2)),v=r,b=a;else if("A"===o){if(m=g[t+4],h=g[t+5],u=g[t+6],f=g[t+7],n=7,m.length>1&&(m.length<3?(f=u,u=h,n--):(f=h,u=m.substr(2),n-=2),h=m.charAt(1),m=m.charAt(0)),d=jr(v,b,+g[t+1],+g[t+2],+g[t+3],+m,+h,(i?v:0)+1*u,(i?b:0)+1*f),t+=n,d)for(n=0;n<d.length;n++)s.push(d[n]);v=s[s.length-2],b=s[s.length-1]}else console.log(C);return(t=s.length)<6?(y.pop(),t=0):s[0]===s[t-2]&&s[1]===s[t-1]&&(s.closed=!0),y.totalPoints=E+t,y}function Lr(e){kr(e[0])&&(e=[e]);var t,n,r,a,o="",i=e.length;for(n=0;n<i;n++){for(a=e[n],o+="M"+Pr(a[0])+","+Pr(a[1])+" C",t=a.length,r=2;r<t;r++)o+=Pr(a[r++])+","+Pr(a[r++])+" "+Pr(a[r++])+","+Pr(a[r++])+" "+Pr(a[r++])+","+Pr(a[r])+" ";a.closed&&(o+="z")}return o}var Ir,$r,Fr,Hr,Yr,Rr=function(){return Ir||"undefined"!=typeof window&&(Ir=window.gsap)&&Ir.registerPlugin&&Ir},Br=function(e){return"function"==typeof e},Vr=Math.atan2,Xr=Math.cos,Dr=Math.sin,Wr=Math.sqrt,qr=Math.PI,Ur=2*qr,Gr=.3*qr,Jr=.7*qr,Qr=1e20,Zr=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Kr=/(^[#\.][a-z]|[a-y][a-z])/i,ea=/[achlmqstvz]/i,ta=function(e){return console&&console.warn(e)},na=function(e){var t,n=e.length,r=0,a=0;for(t=0;t<n;t++)r+=e[t++],a+=e[t];return[r/(n/2),a/(n/2)]},ra=function(e){var t,n,r,a=e.length,o=e[0],i=o,s=e[1],l=s;for(r=6;r<a;r+=6)(t=e[r])>o?o=t:t<i&&(i=t),(n=e[r+1])>s?s=n:n<l&&(l=n);return e.centerX=(o+i)/2,e.centerY=(s+l)/2,e.size=(o-i)*(s-l)},aa=function(e,t){void 0===t&&(t=3);for(var n,r,a,o,i,s,l,c,u,f,d,p,m,h,g,y,v=e.length,b=e[0][0],w=b,x=e[0][1],E=x,C=1/t;--v>-1;)for(n=(i=e[v]).length,o=6;o<n;o+=6)for(u=i[o],f=i[o+1],d=i[o+2]-u,h=i[o+3]-f,p=i[o+4]-u,g=i[o+5]-f,m=i[o+6]-u,y=i[o+7]-f,s=t;--s>-1;)(r=((l=C*s)*l*m+3*(c=1-l)*(l*p+c*d))*l+u)>b?b=r:r<w&&(w=r),(a=(l*l*y+3*c*(l*g+c*h))*l+f)>x?x=a:a<E&&(E=a);return e.centerX=(b+w)/2,e.centerY=(x+E)/2,e.left=w,e.width=b-w,e.top=E,e.height=x-E,e.size=(b-w)*(x-E)},oa=function(e,t){return t.length-e.length},ia=function(e,t){var n=e.size||ra(e),r=t.size||ra(t);return Math.abs(r-n)<(n+r)/20?t.centerX-e.centerX||t.centerY-e.centerY:r-n},sa=function(e,t){var n,r,a=e.slice(0),o=e.length,i=o-2;for(t|=0,n=0;n<o;n++)r=(n+t)%i,e[n++]=a[r],e[n]=a[r+1]},la=function(e,t,n,r,a){var o,i,s,l,c=e.length,u=0,f=c-2;for(n*=6,i=0;i<c;i+=6)l=e[o=(i+n)%f]-(t[i]-r),s=e[o+1]-(t[i+1]-a),u+=Wr(s*s+l*l);return u},ca=function(e,t,n){var r,a,o,i=e.length,s=na(e),l=na(t),c=l[0]-s[0],u=l[1]-s[1],f=la(e,t,0,c,u),d=0;for(o=6;o<i;o+=6)(a=la(e,t,o/6,c,u))<f&&(f=a,d=o);if(n)for(Mr(r=e.slice(0)),o=6;o<i;o+=6)(a=la(r,t,o/6,c,u))<f&&(f=a,d=-o);return d/6},ua=function(e,t,n){for(var r,a,o,i,s,l,c=e.length,u=Qr,f=0,d=0;--c>-1;)for(l=(r=e[c]).length,s=0;s<l;s+=6)a=r[s]-t,o=r[s+1]-n,(i=Wr(a*a+o*o))<u&&(u=i,f=r[s],d=r[s+1]);return[f,d]},fa=function(e,t,n,r,a,o){var i,s,l,c,u=t.length,f=0,d=Math.min(e.size||ra(e),t[n].size||ra(t[n]))*r,p=Qr,m=e.centerX+a,h=e.centerY+o;for(i=n;i<u&&!((t[i].size||ra(t[i]))<d);i++)s=t[i].centerX-m,l=t[i].centerY-h,(c=Wr(s*s+l*l))<p&&(f=i,p=c);return c=t[f],t.splice(f,1),c},da=function(e,t){var n,r,a,o,i,s,l,c,u,f,d,p,m,h,g=0,y=e.length,v=t/((y-2)/6);for(m=2;m<y;m+=6)for(g+=v;g>.999999;)n=e[m-2],r=e[m-1],a=e[m],o=e[m+1],i=e[m+2],s=e[m+3],l=e[m+4],c=e[m+5],u=n+(a-n)*(h=1/((Math.floor(g)||1)+1)),u+=((d=a+(i-a)*h)-u)*h,d+=(i+(l-i)*h-d)*h,f=r+(o-r)*h,f+=((p=o+(s-o)*h)-f)*h,p+=(s+(c-s)*h-p)*h,e.splice(m,4,n+(a-n)*h,r+(o-r)*h,u,f,u+(d-u)*h,f+(p-f)*h,d,p,i+(l-i)*h,s+(c-s)*h),m+=6,y+=6,g--;return e},pa=function(e,t,n,r,a){var o,i,s,l,c,u,f,d=t.length-e.length,p=d>0?t:e,m=d>0?e:t,h=0,g="complexity"===r?oa:ia,y="position"===r?0:"number"==typeof r?r:.8,v=m.length,b="object"==typeof n&&n.push?n.slice(0):[n],w="reverse"===b[0]||b[0]<0,x="log"===n;if(m[0]){if(p.length>1&&(e.sort(g),t.sort(g),p.size||aa(p),m.size||aa(m),u=p.centerX-m.centerX,f=p.centerY-m.centerY,g===ia))for(v=0;v<m.length;v++)p.splice(v,0,fa(m[v],p,v,y,u,f));if(d)for(d<0&&(d=-d),p[0].length>m[0].length&&da(m[0],(p[0].length-m[0].length)/6|0),v=m.length;h<d;)p[v].size||ra(p[v]),l=(s=ua(m,p[v].centerX,p[v].centerY))[0],c=s[1],m[v++]=[l,c,l,c,l,c,l,c],m.totalPoints+=8,h++;for(v=0;v<e.length;v++)o=t[v],i=e[v],(d=o.length-i.length)<0?da(o,-d/6|0):d>0&&da(i,d/6|0),w&&!1!==a&&!i.reversed&&Mr(i),(n=b[v]||0===b[v]?b[v]:"auto")&&(i.closed||Math.abs(i[0]-i[i.length-2])<.5&&Math.abs(i[1]-i[i.length-1])<.5?"auto"===n||"log"===n?(b[v]=n=ca(i,o,!v||!1===a),n<0&&(w=!0,Mr(i),n=-n),sa(i,6*n)):"reverse"!==n&&(v&&n<0&&Mr(i),sa(i,6*(n<0?-n:n))):!w&&("auto"===n&&Math.abs(o[0]-i[0])+Math.abs(o[1]-i[1])+Math.abs(o[o.length-2]-i[i.length-2])+Math.abs(o[o.length-1]-i[i.length-1])>Math.abs(o[0]-i[i.length-2])+Math.abs(o[1]-i[i.length-1])+Math.abs(o[o.length-2]-i[0])+Math.abs(o[o.length-1]-i[1])||n%2)?(Mr(i),b[v]=-1,w=!0):"auto"===n?b[v]=0:"reverse"===n&&(b[v]=-1),i.closed!==o.closed&&(i.closed=o.closed=!1));return x&&ta("shapeIndex:["+b.join(",")+"]"),e.shapeIndex=b,b}},ma=function(e,t,n,r,a){var o=zr(e[0]),i=zr(e[1]);pa(o,i,t||0===t?t:"auto",n,a)&&(e[0]=Lr(o),e[1]=Lr(i),"log"!==r&&!0!==r||ta('precompile:["'+e[0]+'","'+e[1]+'"]'))},ha=function(e,t){var n,r,a,o,i,s,l,c=0,u=parseFloat(e[0]),f=parseFloat(e[1]),d=u+","+f+" ",p=.999999;for(n=.5*t/(.5*(a=e.length)-1),r=0;r<a-2;r+=2){if(c+=n,s=parseFloat(e[r+2]),l=parseFloat(e[r+3]),c>p)for(i=1/(Math.floor(c)+1),o=1;c>p;)d+=(u+(s-u)*i*o).toFixed(2)+","+(f+(l-f)*i*o).toFixed(2)+" ",c--,o++;d+=s+","+l+" ",u=s,f=l}return d},ga=function(e){var t=e[0].match(Zr)||[],n=e[1].match(Zr)||[],r=n.length-t.length;r>0?e[0]=ha(t,r):e[1]=ha(n,-r)},ya=function(e){return isNaN(e)?ga:function(t){ga(t),t[1]=function(e,t){if(!t)return e;var n,r,a,o=e.match(Zr)||[],i=o.length,s="";for("reverse"===t?(r=i-1,n=-2):(r=(2*(parseInt(t,10)||0)+1+100*i)%i,n=2),a=0;a<i;a+=2)s+=o[r-1]+","+o[r]+" ",r=(r+n)%i;return s}(t[1],parseInt(e,10))}},va=function(e,t){for(var n,r,a,o,i,s,l,c,u,f,d,p,m=e.length,h=.2*(t||1);--m>-1;){for(d=(r=e[m]).isSmooth=r.isSmooth||[0,0,0,0],p=r.smoothData=r.smoothData||[0,0,0,0],d.length=4,c=r.length-2,l=6;l<c;l+=6)a=r[l]-r[l-2],o=r[l+1]-r[l-1],i=r[l+2]-r[l],s=r[l+3]-r[l+1],u=Vr(o,a),f=Vr(s,i),(n=Math.abs(u-f)<h)&&(p[l-2]=u,p[l+2]=f,p[l-1]=Wr(a*a+o*o),p[l+3]=Wr(i*i+s*s)),d.push(n,n,0,0,n,n);r[c]===r[0]&&r[c+1]===r[1]&&(a=r[0]-r[c-2],o=r[1]-r[c-1],i=r[2]-r[0],s=r[3]-r[1],u=Vr(o,a),f=Vr(s,i),Math.abs(u-f)<h&&(p[c-2]=u,p[2]=f,p[c-1]=Wr(a*a+o*o),p[3]=Wr(i*i+s*s),d[c-2]=d[c-1]=!0))}return e},ba=function(e){var t=e.trim().split(" ");return{x:(~e.indexOf("left")?0:~e.indexOf("right")?100:isNaN(parseFloat(t[0]))?50:parseFloat(t[0]))/100,y:(~e.indexOf("top")?0:~e.indexOf("bottom")?100:isNaN(parseFloat(t[1]))?50:parseFloat(t[1]))/100}},wa="Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",xa=function(e,t,n,r){var a,o,i,s=this._origin,l=this._eOrigin,c=e[n]-s.x,u=e[n+1]-s.y,f=Wr(c*c+u*u),d=Vr(u,c);return c=t[n]-l.x,u=t[n+1]-l.y,a=Vr(u,c)-d,o=(i=a)!==i%qr?i+(i<0?Ur:-Ur):i,!r&&Fr&&Math.abs(o+Fr.ca)<Gr&&(r=Fr),this._anchorPT=Fr={_next:this._anchorPT,t:e,sa:d,ca:r&&o*r.ca<0&&Math.abs(o)>Jr?a:o,sl:f,cl:Wr(c*c+u*u)-f,i:n}},Ea=function(e){Ir=Rr(),Yr=Yr||Ir&&Ir.plugins.morphSVG,Ir&&Yr?($r=Ir.utils.toArray,document,Yr.prototype._tweenRotation=xa,Hr=1):e&&ta("Please gsap.registerPlugin(MorphSVGPlugin)")},Ca={version:"3.13.0",name:"morphSVG",rawVars:1,register:function(e,t){Ir=e,Yr=t,Ea()},init:function(e,t,n,r,a){if(Hr||Ea(1),!t)return ta("invalid shape"),!1;var o,i,s,l,c,u,f,d,p,m,h,g,y,v,b,w,x,E,C,_,O,S;if(Br(t)&&(t=t.call(n,r,e,a)),"string"==typeof t||t.getBBox||t[0])t={shape:t};else if("object"==typeof t){for(i in o={},t)o[i]=Br(t[i])&&"render"!==i?t[i].call(n,r,e,a):t[i];t=o}var k=e.nodeType?window.getComputedStyle(e):{},N=k.fill+"",P=!("none"===N||"0"===(N.match(Zr)||[])[3]||"evenodd"===k.fillRule),M=(t.origin||"50 50").split(",");if(c="POLYLINE"===(o=(e.nodeName+"").toUpperCase())||"POLYGON"===o,"PATH"!==o&&!c&&!t.prop)return ta("Cannot morph a <"+o+"> element. "+wa),!1;if(i="PATH"===o?"d":"points",!t.prop&&!Br(e.setAttribute))return!1;if(l=function(e,t,n){var r,a;return(!("string"==typeof e)||Kr.test(e)||(e.match(Zr)||[]).length<3)&&((r=$r(e)[0])?(a=(r.nodeName+"").toUpperCase(),t&&"PATH"!==a&&(r=Ar(r,!1),a="PATH"),e=r.getAttribute("PATH"===a?"d":"points")||"",r===n&&(e=r.getAttributeNS(null,"data-original")||e)):(ta("WARNING: invalid morph to: "+e),e=!1)),e}(t.shape||t.d||t.points||"","d"===i,e),c&&ea.test(l))return ta("A <"+o+"> cannot accept path data. "+wa),!1;if(u=t.shapeIndex||0===t.shapeIndex?t.shapeIndex:"auto",f=t.map||Ca.defaultMap,this._prop=t.prop,this._render=t.render||Ca.defaultRender,this._apply="updateTarget"in t?t.updateTarget:Ca.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(t.precision)?2:+t.precision),this._tween=n,l){if(this._target=e,x="object"==typeof t.precompile,m=this._prop?e[this._prop]:e.getAttribute(i),this._prop||e.getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",m),"d"===i||this._prop){if(m=zr(x?t.precompile[0]:m),h=zr(x?t.precompile[1]:l),!x&&!pa(m,h,u,f,P))return!1;for("log"!==t.precompile&&!0!==t.precompile||ta('precompile:["'+Lr(m)+'","'+Lr(h)+'"]'),(O="linear"!==(t.type||Ca.defaultType))&&(m=va(m,t.smoothTolerance),h=va(h,t.smoothTolerance),m.size||aa(m),h.size||aa(h),_=ba(M[0]),this._origin=m.origin={x:m.left+_.x*m.width,y:m.top+_.y*m.height},M[1]&&(_=ba(M[1])),this._eOrigin={x:h.left+_.x*h.width,y:h.top+_.y*h.height}),this._rawPath=e._gsRawPath=m,y=m.length;--y>-1;)for(b=m[y],w=h[y],d=b.isSmooth||[],p=w.isSmooth||[],v=b.length,Fr=0,g=0;g<v;g+=2)w[g]===b[g]&&w[g+1]===b[g+1]||(O?d[g]&&p[g]?(E=b.smoothData,C=w.smoothData,S=g+(g===v-4?7-v:5),this._controlPT={_next:this._controlPT,i:g,j:y,l1s:E[g+1],l1c:C[g+1]-E[g+1],l2s:E[S],l2c:C[S]-E[S]},s=this._tweenRotation(b,w,g+2),this._tweenRotation(b,w,g,s),this._tweenRotation(b,w,S-1,s),g+=4):this._tweenRotation(b,w,g):(s=this.add(b,g,b[g],w[g],0,0,0,0,0,1),s=this.add(b,g+1,b[g+1],w[g+1],0,0,0,0,0,1)||s))}else s=this.add(e,"setAttribute",e.getAttribute(i)+"",l+"",r,a,0,ya(u),i);O&&(this.add(this._origin,"x",this._origin.x,this._eOrigin.x,0,0,0,0,0,1),s=this.add(this._origin,"y",this._origin.y,this._eOrigin.y,0,0,0,0,0,1)),s&&(this._props.push("morphSVG"),s.end=l,s.endProp=i)}return 1},render:function(e,t){for(var n,r,a,o,i,s,l,c,u,f,d,p,m=t._rawPath,h=t._controlPT,g=t._anchorPT,y=t._rnd,v=t._target,b=t._pt;b;)b.r(e,b.d),b=b._next;if(1===e&&t._apply)for(b=t._pt;b;)b.end&&(t._prop?v[t._prop]=b.end:v.setAttribute(b.endProp,b.end)),b=b._next;else if(m){for(;g;)i=g.sa+e*g.ca,o=g.sl+e*g.cl,g.t[g.i]=t._origin.x+Xr(i)*o,g.t[g.i+1]=t._origin.y+Dr(i)*o,g=g._next;for(r=e<.5?2*e*e:(4-2*e)*e-1;h;)p=(s=h.i)+(s===(a=m[h.j]).length-4?7-a.length:5),i=Vr(a[p]-a[s+1],a[p-1]-a[s]),f=Dr(i),d=Xr(i),c=a[s+2],u=a[s+3],o=h.l1s+r*h.l1c,a[s]=c-d*o,a[s+1]=u-f*o,o=h.l2s+r*h.l2c,a[p-1]=c+d*o,a[p]=u+f*o,h=h._next;if(v._gsRawPath=m,t._apply){for(n="",l=0;l<m.length;l++)for(o=(a=m[l]).length,n+="M"+(a[0]*y|0)/y+" "+(a[1]*y|0)/y+" C",s=2;s<o;s++)n+=(a[s]*y|0)/y+" ";t._prop?v[t._prop]=n:v.setAttribute("d",n)}}t._render&&m&&t._render.call(t._tween,m,v)},kill:function(e){this._pt=this._rawPath=0},getRawPath:function(e){var t,n=(e=Sr(e)&&wr.test(e)&&document.querySelector(e)||e).getAttribute?e:0;return n&&(e=e.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(t=n._gsPath[e])&&!t._dirty?t:n._gsPath[e]=zr(e)):e?Sr(e)?zr(e):kr(e[0])?[e]:e:console.warn("Expecting a <path> element or an SVG path data string")},stringToRawPath:zr,rawPathToString:Lr,normalizeStrings:function(e,t,n){var r=n.shapeIndex,a=n.map,o=[e,t];return ma(o,r,a),o},pathFilter:ma,pointsFilter:ga,getTotalSize:aa,equalizeSegmentQuantity:pa,convertToPath:function(e,t){return $r(e).map((function(e){return Ar(e,!1!==t)}))},defaultType:"linear",defaultUpdateTarget:!0,defaultMap:"size"};Rr()&&Ir.registerPlugin(Ca),gr.registerPlugin(Ca);var _a=e=>{let{className:t="",backgroundColor:n="bg-black",textColor:a="text-white"}=e;const o=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!o.current)return;const e=o.current,t=e.getAttribute("data-to"),n=gr.to(e,{morphSVG:t,duration:1,ease:"power1.out",paused:!0}),r=()=>{const e=window.scrollY,t=Math.max(Math.min(e,200),1)/200;n.progress(t)};return r(),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r),n.kill()}}),[]),r.createElement("div",{className:`relative mt-24 pt-[15.7%] ${a} ${n} bg-origin-content bg-no-repeat h-screen ${t}`},r.createElement("svg",{className:"absolute top-0 right-0 left-0 w-full",viewBox:"0 0 1000 158"},r.createElement("path",{ref:o,d:"M1000,30.1V158H0V0c169.7,238.5,374.3-76,502.6,106.8C615.7,268.2,759.9-15.4,1000,30.1z","data-to":"M1000,157v1H0v-1h502.6H1000z"})))};var Oa=function(){return r.createElement(r.Fragment,null,r.createElement(Tt,null),r.createElement(_a,{className:"custom-class",backgroundColor:"bg-indigo-900",textColor:"text-white"}),r.createElement(Lt,null),r.createElement($t,null),r.createElement(Yt,null),r.createElement(Dt,null),r.createElement(en,null))};function Sa(){return r.createElement(r.Fragment,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",{key:"title"},"Portfolio"),r.createElement("meta",{property:"og:title",content:"mizuki's Portfolio"}),r.createElement("html",{lang:"ja"}),r.createElement("meta",{name:"description",content:"mzk Portfolio"}),r.createElement("meta",{property:"og:locale",content:"ja_JP"}),r.createElement("meta",{property:"og:site_name",content:"mizuki msageha mzk Portfolio"}),r.createElement("meta",{name:"description",property:"og:description",content:"mizuki's Portfolio\n珊瑚 彩主紀のポートフォリオページ"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:"https://raw.githubusercontent.com/msageha/portfolio/main/src/images/profile.jpg"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"}))}var ka=()=>r.createElement(r.Fragment,null,r.createElement(Oa,null))},2532:function(e,t,n){"use strict";n.d(t,{G:function(){return z},L:function(){return m},M:function(){return E},P:function(){return x},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return f},h:function(){return l}});var r=n(6540),a=(n(2729),n(5556)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function f(e,t,n,r,a,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=s(e,d);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:l}=e,c=s(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,g);const l=o.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},o,t,{sizes:l,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:`${t}-${o}-${n}`,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,n=s(e,w);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],_=["style","className"],O=e=>e.replace(/\n/g,""),S=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},k={image:o().object.isRequired,alt:S},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],M=new Set;let T,A;const j=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:f,class:d,onStartLoad:p,onLoad:m,onError:h}=e,g=s(e,N);const{width:y,height:v,layout:b}=a,w=c(y,v,b),{style:x,className:E}=w,C=s(w,P),_=(0,r.useRef)(),O=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(f=d);const S=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,v);return(0,r.useEffect)((()=>{T||(T=n.e(108).then(n.bind(n,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(O);if(A&&M.has(O))return;let t,r;return T.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;_.current&&(_.current.innerHTML=n(i({isLoading:!0,isLoaded:M.has(O),image:a},g)),M.has(O)||(t=requestAnimationFrame((()=>{_.current&&(r=s(_.current,O,M,o,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{M.has(O)&&A&&(_.current.innerHTML=A(i({isLoading:M.has(O),isLoaded:M.has(O),image:a},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},C,{style:i({},x,o,{backgroundColor:u}),className:`${E}${f?` ${f}`:""}`,ref:_,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));z.propTypes=k,z.displayName="GatsbyImage";const L=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function I(e){return function(t){let{src:n,__imageData:a,__error:o}=t,l=s(t,L);return o&&console.warn(o),a?r.createElement(e,i({image:a},l)):(console.warn("Image not loaded",n),null)}}const $=I((function(e){let{as:t="div",className:n,class:a,style:o,image:l,loading:d="lazy",imgClassName:p,imgStyle:h,backgroundColor:g,objectFit:y,objectPosition:v}=e,b=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),h=i({objectFit:y,objectPosition:v,backgroundColor:g},h);const{width:w,height:S,layout:k,images:N,placeholder:P,backgroundColor:M}=l,T=c(w,S,k),{style:A,className:j}=T,z=s(T,_),L={fallback:void 0,sources:[]};return N.fallback&&(L.fallback=i({},N.fallback,{srcSet:N.fallback.srcSet?O(N.fallback.srcSet):void 0})),N.sources&&(L.sources=N.sources.map((e=>i({},e,{srcSet:O(e.srcSet)})))),r.createElement(t,i({},z,{style:i({},A,o,{backgroundColor:g}),className:`${j}${n?` ${n}`:""}`}),r.createElement(m,{layout:k,width:w,height:S},r.createElement(x,i({},f(P,!1,k,w,S,M,y,v))),r.createElement(E,i({"data-gatsby-image-ssr":"",className:p},b,u("eager"===d,!1,L,d,h)))))})),F=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},H=new Set(["fixed","fullWidth","constrained"]),Y={src:o().string.isRequired,alt:S,width:F,height:F,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};$.displayName="StaticImage",$.propTypes=Y;const R=I(z);R.displayName="StaticImage",R.propTypes=Y},2729:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=r(c)===c&&a(c)!==c,s=i,i=a(c)===c&&r(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2799:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case f:case o:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case g:case h:case l:return e;default:return t}}case a:return t}}}function E(e){return x(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||x(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===s||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=x},2906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",a=window&&window.location,o=r?a.pathname+a.search+r:a.pathname+a.search;t?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,r){if(r)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var a=n(t,(function(t){return t===e||t===document})),o=a.offsetTop;if(a.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var i=function(e){return e===document};return n(t,i).offsetTop-n(e,i).offsetTop}}},3367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3999);var r,a=n(2906),o=(r=a)&&r.__esModule?r:{default:r};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return o.default.getHash()},changeHash:function(e,t){this.isInitialized()&&o.default.getHash()!==e&&o.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},3845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(6540)),i=l(n(9679)),s=l(n(5556));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,o.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(o.default.Component);c.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(c)},3999:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,r){var a=r.name;a||(a=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var o=n.get(t);if(!o.has(a)){var i=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,r,!!i&&{passive:!0}),o.add(a)}},t.removePassiveEventListener=function(e,t,r){e.removeEventListener(t,r),n.get(t).delete(r.name||t)};var n=new Map},4146:function(e,t,n){"use strict";var r=n(4363),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var i=u(n);f&&(i=i.concat(f(n)));for(var s=l(t),h=l(n),g=0;g<i.length;++g){var y=i[g];if(!(o[y]||r&&r[y]||h&&h[y]||s&&s[y])){var v=d(n,y);try{c(t,y,v)}catch(b){}}}}return t}},4177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(5858),o=(r=a)&&r.__esModule?r:{default:r},i=n(3999);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,o.default)(e,t)}((function(t){s.scrollHandler(e)}),t);return s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",n),function(){(0,i.removePassiveEventListener)(e,"scroll",n),s.scrollSpyContainers.splice(s.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.scrollY,n="CSS1Compat"===(document.compatMode||"");return t?window.scrollX:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.scrollX,n="CSS1Compat"===(document.compatMode||"");return t?window.scrollY:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionX(e),s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e)},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(e)>-1&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},4363:function(e,t,n){"use strict";e.exports=n(2799)},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(6540)),i=u(n(4177)),s=u(n(649)),l=u(n(5556)),c=u(n(3367));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t.beforeUnmountCallbacks=[],t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),a(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();if(!i.default.isMounted(e)){var t=i.default.mount(e,this.props.spyThrottle);this.beforeUnmountCallbacks.push(t)}this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach((function(e){return e()}))}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var a=r({},this.props);for(var i in f)a.hasOwnProperty(i)&&delete a[i];return a.className=t,a.style=n,a.onClick=this.handleClick,o.default.createElement(e,a)}}]),s}(o.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,r({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var a=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var o=e.props.horizontal,i=e.props.to,s=null,l=void 0,u=void 0;if(o){var f=0,d=0,p=0;if(a.getBoundingClientRect)p=a.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var m=s.getBoundingClientRect();d=(f=m.left-p+t)+m.width}var h=t-e.props.offset;l=h>=Math.floor(f)&&h<Math.floor(d),u=h<Math.floor(f)||h>=Math.floor(d)}else{var g=0,y=0,v=0;if(a.getBoundingClientRect)v=a.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var b=s.getBoundingClientRect();y=(g=b.top-v+r)+b.height}var w=r-e.props.offset;l=w>=Math.floor(g)&&w<Math.floor(y),u=w<Math.floor(g)||w>=Math.floor(y)}var x=n.getActiveLink();if(u){if(i===x&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===i){var E=e.props.saveHashHistory,C=void 0!==E&&E;c.default.changeHash("",C)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,s))}if(l&&(x!==i||!1===e.state.active)){n.setActiveLink(i);var _=e.props.saveHashHistory,O=void 0!==_&&_;e.props.hashSpy&&c.default.changeHash(i,O),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,s))}}}};return l.propTypes=f,l.defaultProps={offset:0},l}},5858:function(e,t,n){var r="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return f.Date.now()};function g(e,t,n){var a,o,i,s,l,c,u=0,f=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=a,r=o;return a=o=void 0,u=t,s=e.apply(r,n)}function w(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=i}function x(){var e=h();if(w(e))return E(e);l=setTimeout(x,function(e){var n=t-(e-c);return d?m(n,i-(e-u)):n}(e))}function E(e){return l=void 0,g&&a?b(e):(a=o=void 0,s)}function C(){var e=h(),n=w(e);if(a=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(x,t),f?b(e):s}(c);if(d)return l=setTimeout(x,t),b(c)}return void 0===l&&(l=setTimeout(x,t)),s}return t=v(t)||0,y(n)&&(f=!!n.leading,i=(d="maxWait"in n)?p(v(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),C.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=c=o=l=void 0},C.flush=function(){return void 0===l?s:E(h())},C}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:a,maxWait:t,trailing:o})}},6848:function(e,t,n){"use strict";t.N_=void 0;var r=p(n(9365)),a=p(n(173)),o=p(n(3845)),i=p(n(649)),s=p(n(1290)),l=p(n(4177)),c=p(n(7384)),u=p(n(5303)),f=p(n(9679)),d=p(n(1038));function p(e){return e&&e.__esModule?e:{default:e}}t.N_=r.default,a.default,o.default,i.default,s.default,l.default,c.default,u.default,f.default,d.default,r.default,a.default,o.default,i.default,s.default,l.default,c.default,u.default,f.default,d.default},7384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(s(n(2906)),s(n(8373))),o=s(n(951)),i=s(n(1290));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return a.default[e.smooth]||a.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},d=function e(t,n,r){var a=n.data;if(n.ignoreCancelEvents||!a.cancel)if(a.delta=Math.round(a.targetPosition-a.startPosition),null===a.start&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:t(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var o=e.bind(null,t,n);c.call(window,o)}else i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPosition);else i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPositionY)},p=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},m=function(e,t,n,r){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(o.default.subscribe((function(){t.data.cancel=!0})),p(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?u(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var a;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(a=t.duration)?a:function(){return a})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var s=l(t),m=d.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,m)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,m))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},h=function(e){return(e=r({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:m,getAnimationType:l,scrollToTop:function(e){m(0,h(e))},scrollToBottom:function(e){e=h(e),p(e),m(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){m(e,h(t))},scrollMore:function(e,t){t=h(t),p(t);var n=t.horizontal?u(t):f(t);m(e+n,t)}}},8338:function(e,t,n){"use strict";e.exports=n(9998)},8373:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},9365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(6540)),a=o(n(5303));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.render=function(){return r.default.createElement("a",a.props,a.props.children)},i(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,a.default)(s)},9679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(6540)),i=(l(n(961)),l(n(649))),s=l(n(5556));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),a(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return o.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(o.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},9998:function(e,t){"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case s:case i:case d:case p:return e;default:switch(e=e&&e.$$typeof){case u:case c:case f:case h:case m:case l:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return y(e)===o}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-af43fd9dab1beaed165e.js.map