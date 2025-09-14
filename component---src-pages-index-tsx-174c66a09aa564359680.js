/*! For license information please see component---src-pages-index-tsx-174c66a09aa564359680.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[245],{173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(6540)),o=i(n(5303));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return a.default.createElement("button",this.props,this.props.children)}}]),t}(a.default.Component);t.default=(0,o.default)(s)},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n(2906)),o=s(n(7384)),i=s(n(1290));function s(e){return e&&e.__esModule?e:{default:e}}var l={},c=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=r({},t,{absolute:!1})).containerId,l=t.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var u=t.horizontal,f=a.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,void(i.default.registered.end&&i.default.registered.end(e,n));o.default.animateTopScroll(f,t,e,n)}else console.warn("target Element not found")}}},951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3999),a=["mousedown","wheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&a.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},1038:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(6540),c=(n(961),n(2906),n(4177)),u=n(649),f=n(5556),d=n(3367),m={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},p={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){o(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return p.call(t),t.state={active:!1},t}return s(u,t),a(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var a in m)n.hasOwnProperty(a)&&delete n[a];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),u}(l.Component),p=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,r({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var a=e.props.to,o=null,i=0,s=0,l=0;if(r.getBoundingClientRect)l=r.getBoundingClientRect().top;if(!o||e.props.isDynamic){if(!(o=n.get(a)))return;var u=o.getBoundingClientRect();s=(i=u.top-l+t)+u.height}var f=t-e.props.offset,m=f>=Math.floor(i)&&f<Math.floor(s),p=f<Math.floor(i)||f>=Math.floor(s),h=n.getActiveLink();return p?(a===h&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===a&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):m&&h!==a?(n.setActiveLink(a),e.props.hashSpy&&d.changeHash(a),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(a)),c.updateStates()):void 0}}};return f.propTypes=m,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),a(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=p},1290:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},2532:function(e,t,n){"use strict";n.d(t,{G:function(){return A},L:function(){return p},M:function(){return x},P:function(){return E},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return f},h:function(){return l}});var r=n(6540),a=(n(2729),n(5556)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function f(e,t,n,r,a,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],m=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,n=s(e,d);return r.createElement(r.Fragment,null,r.createElement(m,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],g=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:l}=e,c=s(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,y);const l=o.sizes||(null==t?void 0:t.sizes),c=r.createElement(g,i({},o,t,{sizes:l,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:`${t}-${o}-${n}`,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),c):c};var b;g.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=s(e,w);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},O={image:o().object.isRequired,alt:N},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],j=new Set;let T,M;const $=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:f,class:d,onStartLoad:m,onLoad:p,onError:h}=e,y=s(e,_);const{width:g,height:v,layout:b}=a,w=c(g,v,b),{style:E,className:x}=w,S=s(w,P),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);d&&(f=d);const N=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,g,v);return(0,r.useEffect)((()=>{T||(T=n.e(108).then(n.bind(n,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(M&&j.has(C))return;let t,r;return T.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(i({isLoading:!0,isLoaded:j.has(C),image:a},y)),j.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,C,j,o,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{j.has(C)&&M&&(k.current.innerHTML=M(i({isLoading:j.has(C),isLoaded:j.has(C),image:a},y)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},S,{style:i({},E,o,{backgroundColor:u}),className:`${x}${f?` ${f}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)($,e):null}));A.propTypes=O,A.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function I(e){return function(t){let{src:n,__imageData:a,__error:o}=t,l=s(t,z);return o&&console.warn(o),a?r.createElement(e,i({image:a},l)):(console.warn("Image not loaded",n),null)}}const L=I((function(e){let{as:t="div",className:n,class:a,style:o,image:l,loading:d="lazy",imgClassName:m,imgStyle:h,backgroundColor:y,objectFit:g,objectPosition:v}=e,b=s(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),h=i({objectFit:g,objectPosition:v,backgroundColor:y},h);const{width:w,height:N,layout:O,images:_,placeholder:P,backgroundColor:j}=l,T=c(w,N,O),{style:M,className:$}=T,A=s(T,k),z={fallback:void 0,sources:[]};return _.fallback&&(z.fallback=i({},_.fallback,{srcSet:_.fallback.srcSet?C(_.fallback.srcSet):void 0})),_.sources&&(z.sources=_.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},A,{style:i({},M,o,{backgroundColor:y}),className:`${$}${n?` ${n}`:""}`}),r.createElement(p,{layout:O,width:w,height:N},r.createElement(E,i({},f(P,!1,O,w,N,j,g,v))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:m},b,u("eager"===d,!1,z,d,h)))))})),H=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},R=new Set(["fixed","fullWidth","constrained"]),B={src:o().string.isRequired,alt:N,width:H,height:H,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};L.displayName="StaticImage",L.propTypes=B;const F=I(A);F.displayName="StaticImage",F.propTypes=B},2729:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=r(c)===c&&a(c)!==c,s=i,i=a(c)===c&&r(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2799:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case f:case o:case s:case i:case m:return e;default:switch(e=e&&e.$$typeof){case c:case d:case y:case h:case l:return e;default:return t}}case a:return t}}}function x(e){return E(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=y,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||E(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return E(e)===c},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===y},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===a},t.isProfiler=function(e){return E(e)===s},t.isStrictMode=function(e){return E(e)===i},t.isSuspense=function(e){return E(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===s||e===i||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g)},t.typeOf=E},2906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",a=window&&window.location,o=r?a.pathname+a.search+r:a.pathname+a.search;t?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,r){if(r)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var a=n(t,(function(t){return t===e||t===document})),o=a.offsetTop;if(a.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var i=function(e){return e===document};return n(t,i).offsetTop-n(e,i).offsetTop}}},3367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3999);var r,a=n(2906),o=(r=a)&&r.__esModule?r:{default:r};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return o.default.getHash()},changeHash:function(e,t){this.isInitialized()&&o.default.getHash()!==e&&o.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},3845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(6540)),i=l(n(9679)),s=l(n(5556));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,o.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(o.default.Component);c.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(c)},3999:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,r){var a=r.name;a||(a=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var o=n.get(t);if(!o.has(a)){var i=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,r,!!i&&{passive:!0}),o.add(a)}},t.removePassiveEventListener=function(e,t,r){e.removeEventListener(t,r),n.get(t).delete(r.name||t)};var n=new Map},4146:function(e,t,n){"use strict";var r=n(4363),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var a=m(n);a&&a!==p&&e(t,a,r)}var i=u(n);f&&(i=i.concat(f(n)));for(var s=l(t),h=l(n),y=0;y<i.length;++y){var g=i[y];if(!(o[g]||r&&r[g]||h&&h[g]||s&&s[g])){var v=d(n,g);try{c(t,g,v)}catch(b){}}}}return t}},4177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(5858),o=(r=a)&&r.__esModule?r:{default:r},i=n(3999);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,o.default)(e,t)}((function(t){s.scrollHandler(e)}),t);return s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",n),function(){(0,i.removePassiveEventListener)(e,"scroll",n),s.scrollSpyContainers.splice(s.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.scrollY,n="CSS1Compat"===(document.compatMode||"");return t?window.scrollX:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.scrollX,n="CSS1Compat"===(document.compatMode||"");return t?window.scrollY:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionX(e),s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e)},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(e)>-1&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},4363:function(e,t,n){"use strict";e.exports=n(2799)},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(6540)),i=u(n(4177)),s=u(n(649)),l=u(n(5556)),c=u(n(3367));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t.beforeUnmountCallbacks=[],t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),a(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();if(!i.default.isMounted(e)){var t=i.default.mount(e,this.props.spyThrottle);this.beforeUnmountCallbacks.push(t)}this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach((function(e){return e()}))}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var a=r({},this.props);for(var i in f)a.hasOwnProperty(i)&&delete a[i];return a.className=t,a.style=n,a.onClick=this.handleClick,o.default.createElement(e,a)}}]),s}(o.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,r({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var a=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var o=e.props.horizontal,i=e.props.to,s=null,l=void 0,u=void 0;if(o){var f=0,d=0,m=0;if(a.getBoundingClientRect)m=a.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var p=s.getBoundingClientRect();d=(f=p.left-m+t)+p.width}var h=t-e.props.offset;l=h>=Math.floor(f)&&h<Math.floor(d),u=h<Math.floor(f)||h>=Math.floor(d)}else{var y=0,g=0,v=0;if(a.getBoundingClientRect)v=a.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var b=s.getBoundingClientRect();g=(y=b.top-v+r)+b.height}var w=r-e.props.offset;l=w>=Math.floor(y)&&w<Math.floor(g),u=w<Math.floor(y)||w>=Math.floor(g)}var E=n.getActiveLink();if(u){if(i===E&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===i){var x=e.props.saveHashHistory,S=void 0!==x&&x;c.default.changeHash("",S)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,s))}if(l&&(E!==i||!1===e.state.active)){n.setActiveLink(i);var k=e.props.saveHashHistory,C=void 0!==k&&k;e.props.hashSpy&&c.default.changeHash(i,C),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,s))}}}};return l.propTypes=f,l.defaultProps={offset:0},l}},5858:function(e,t,n){var r="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,h=function(){return f.Date.now()};function y(e,t,n){var a,o,i,s,l,c,u=0,f=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=a,r=o;return a=o=void 0,u=t,s=e.apply(r,n)}function w(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=i}function E(){var e=h();if(w(e))return x(e);l=setTimeout(E,function(e){var n=t-(e-c);return d?p(n,i-(e-u)):n}(e))}function x(e){return l=void 0,y&&a?b(e):(a=o=void 0,s)}function S(){var e=h(),n=w(e);if(a=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(E,t),f?b(e):s}(c);if(d)return l=setTimeout(E,t),b(c)}return void 0===l&&(l=setTimeout(E,t)),s}return t=v(t)||0,g(n)&&(f=!!n.leading,i=(d="maxWait"in n)?m(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=c=o=l=void 0},S.flush=function(){return void 0===l?s:x(h())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:a,maxWait:t,trailing:o})}},6848:function(e,t,n){"use strict";t.N_=void 0;var r=m(n(9365)),a=m(n(173)),o=m(n(3845)),i=m(n(649)),s=m(n(1290)),l=m(n(4177)),c=m(n(7384)),u=m(n(5303)),f=m(n(9679)),d=m(n(1038));function m(e){return e&&e.__esModule?e:{default:e}}t.N_=r.default,a.default,o.default,i.default,s.default,l.default,c.default,u.default,f.default,d.default,r.default,a.default,o.default,i.default,s.default,l.default,c.default,u.default,f.default,d.default},7384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(s(n(2906)),s(n(8373))),o=s(n(951)),i=s(n(1290));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return a.default[e.smooth]||a.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},d=function e(t,n,r){var a=n.data;if(n.ignoreCancelEvents||!a.cancel)if(a.delta=Math.round(a.targetPosition-a.startPosition),null===a.start&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:t(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var o=e.bind(null,t,n);c.call(window,o)}else i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPosition);else i.default.registered.end&&i.default.registered.end(a.to,a.target,a.currentPositionY)},m=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,r){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(o.default.subscribe((function(){t.data.cancel=!0})),m(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?u(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var a;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(a=t.duration)?a:function(){return a})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var s=l(t),p=d.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,p)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),c.call(window,p))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},h=function(e){return(e=r({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:l,scrollToTop:function(e){p(0,h(e))},scrollToBottom:function(e){e=h(e),m(e),p(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,h(t))},scrollMore:function(e,t){t=h(t),m(t);var n=t.horizontal?u(t):f(t);p(e+n,t)}}},8338:function(e,t,n){"use strict";e.exports=n(9998)},8373:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},8847:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Ut},default:function(){return Qt}});var r=n(6540),a=n.t(r,2),o=n(6848);var i=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),s=Math.abs,l=String.fromCharCode,c=Object.assign;function u(e){return e.trim()}function f(e,t,n){return e.replace(t,n)}function d(e,t){return e.indexOf(t)}function m(e,t){return 0|e.charCodeAt(t)}function p(e,t,n){return e.slice(t,n)}function h(e){return e.length}function y(e){return e.length}function g(e,t){return t.push(e),e}var v=1,b=1,w=0,E=0,x=0,S="";function k(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:v,column:b,length:i,return:""}}function C(e,t){return c(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function N(){return x=E>0?m(S,--E):0,b--,10===x&&(b=1,v--),x}function O(){return x=E<w?m(S,E++):0,b++,10===x&&(b=1,v++),x}function _(){return m(S,E)}function P(){return E}function j(e,t){return p(S,e,t)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M(e){return v=b=1,w=h(S=e),E=0,[]}function $(e){return S="",e}function A(e){return u(j(E-1,L(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(x=_())&&x<33;)O();return T(e)>2||T(x)>3?"":" "}function I(e,t){for(;--t&&O()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return j(e,P()+(t<6&&32==_()&&32==O()))}function L(e){for(;O();)switch(x){case e:return E;case 34:case 39:34!==e&&39!==e&&L(x);break;case 40:41===e&&L(e);break;case 92:O()}return E}function H(e,t){for(;O()&&e+x!==57&&(e+x!==84||47!==_()););return"/*"+j(t,E-1)+"*"+l(47===e?e:O())}function R(e){for(;!T(_());)O();return j(e,E)}var B="-ms-",F="-moz-",V="-webkit-",D="comm",Y="rule",X="decl",W="@keyframes";function G(e,t){for(var n="",r=y(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function q(e,t,n,r){switch(e.type){case"@import":case X:return e.return=e.return||e.value;case D:return"";case W:return e.return=e.value+"{"+G(e.children,r)+"}";case Y:e.value=e.props.join(",")}return h(n=G(e.children,r))?e.return=e.value+"{"+n+"}":""}function U(e){return $(Q("",null,null,null,[""],e=M(e),0,[0],e))}function Q(e,t,n,r,a,o,i,s,c){for(var u=0,p=0,y=i,v=0,b=0,w=0,E=1,x=1,S=1,k=0,C="",j=a,T=o,M=r,$=C;x;)switch(w=k,k=O()){case 40:if(108!=w&&58==m($,y-1)){-1!=d($+=f(A(k),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:$+=A(k);break;case 9:case 10:case 13:case 32:$+=z(w);break;case 92:$+=I(P()-1,7);continue;case 47:switch(_()){case 42:case 47:g(K(H(O(),P()),t,n),c);break;default:$+="/"}break;case 123*E:s[u++]=h($)*S;case 125*E:case 59:case 0:switch(k){case 0:case 125:x=0;case 59+p:b>0&&h($)-y&&g(b>32?Z($+";",r,n,y-1):Z(f($," ","")+";",r,n,y-2),c);break;case 59:$+=";";default:if(g(M=J($,t,n,u,p,a,s,C,j=[],T=[],y),o),123===k)if(0===p)Q($,t,M,M,j,o,y,s,T);else switch(99===v&&110===m($,3)?100:v){case 100:case 109:case 115:Q(e,M,M,r&&g(J(e,M,M,0,0,a,s,C,a,j=[],y),T),a,T,y,s,r?j:T);break;default:Q($,M,M,M,[""],T,0,s,T)}}u=p=b=0,E=S=1,C=$="",y=i;break;case 58:y=1+h($),b=w;default:if(E<1)if(123==k)--E;else if(125==k&&0==E++&&125==N())continue;switch($+=l(k),k*E){case 38:S=p>0?1:($+="\f",-1);break;case 44:s[u++]=(h($)-1)*S,S=1;break;case 64:45===_()&&($+=A(O())),v=_(),p=y=h(C=$+=R(P())),k++;break;case 45:45===w&&2==h($)&&(E=0)}}return o}function J(e,t,n,r,a,o,i,l,c,d,m){for(var h=a-1,g=0===a?o:[""],v=y(g),b=0,w=0,E=0;b<r;++b)for(var x=0,S=p(e,h+1,h=s(w=i[b])),C=e;x<v;++x)(C=u(w>0?g[x]+" "+S:f(S,/&\f/g,g[x])))&&(c[E++]=C);return k(e,t,n,0===a?Y:l,c,d,m)}function K(e,t,n){return k(e,t,n,D,l(x),p(e,2,-2),0)}function Z(e,t,n,r){return k(e,t,n,X,p(e,0,r),p(e,r+1,-1),r)}var ee=function(e,t,n){for(var r=0,a=0;r=a,a=_(),38===r&&12===a&&(t[n]=1),!T(a);)O();return j(e,E)},te=function(e,t){return $(function(e,t){var n=-1,r=44;do{switch(T(r)){case 0:38===r&&12===_()&&(t[n]=1),e[n]+=ee(E-1,t,n);break;case 2:e[n]+=A(r);break;case 4:if(44===r){e[++n]=58===_()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=l(r)}}while(r=O());return e}(M(e),t))},ne=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(n))&&!r){ne.set(e,!0);for(var a=[],o=te(t,a),i=n.props,s=0,l=0;s<o.length;s++)for(var c=0;c<i.length;c++,l++)e.props[l]=a[s]?o[s].replace(/&\f/g,i[c]):i[c]+" "+o[s]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function oe(e,t){switch(function(e,t){return 45^m(e,0)?(((t<<2^m(e,0))<<2^m(e,1))<<2^m(e,2))<<2^m(e,3):0}(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+F+e+B+e+e;case 6828:case 4268:return V+e+B+e+e;case 6165:return V+e+B+"flex-"+e+e;case 5187:return V+e+f(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return V+e+B+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return V+e+B+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return V+e+B+f(e,"shrink","negative")+e;case 5292:return V+e+B+f(e,"basis","preferred-size")+e;case 6060:return V+"box-"+f(e,"-grow","")+V+e+B+f(e,"grow","positive")+e;case 4554:return V+f(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(m(e,t+1)){case 109:if(45!==m(e,t+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+F+(108==m(e,t+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?oe(f(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==m(e,t+1))break;case 6444:switch(m(e,h(e)-3-(~d(e,"!important")&&10))){case 107:return f(e,":",":"+V)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+V+(45===m(e,14)?"inline-":"")+"box$3$1"+V+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(m(e,t+11)){case 114:return V+e+B+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+B+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+B+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return V+e+B+e+e}return e}var ie=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X:e.return=oe(e.value,e.length);break;case W:return G([C(e,{value:f(e.value,"@","@"+V)})],r);case Y:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return G([C(e,{props:[f(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return G([C(e,{props:[f(t,/:(plac\w+)/,":"+V+"input-$1")]}),C(e,{props:[f(t,/:(plac\w+)/,":-moz-$1")]}),C(e,{props:[f(t,/:(plac\w+)/,B+"input-$1")]})],r)}return""}))}}],se=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||ie;var a,o,s={},l=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;l.push(e)}));var c,u,f,d,m=[q,(d=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],p=(u=[re,ae].concat(r,m),f=y(u),function(e,t,n,r){for(var a="",o=0;o<f;o++)a+=u[o](e,t,n,r)||"";return a});o=function(e,t,n,r){c=n,G(U(e?e+"{"+t.styles+"}":t.styles),p),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new i({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:o};return h.sheet.hydrate(l),h};function le(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ue=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};var fe=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},de={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var me=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,he=function(e){return 45===e.charCodeAt(1)},ye=function(e){return null!=e&&"boolean"!=typeof e},ge=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return he(e)?e:e.replace(me,"-$&").toLowerCase()})),ve=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(pe,(function(e,t,n){return we={name:t,styles:n,next:we},t}))}return 1===de[e]||he(e)||"number"!=typeof t||0===t?t:t+"px"};function be(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return we={name:n.name,styles:n.styles,next:we},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)we={name:r.name,styles:r.styles,next:we},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=be(e,t,n[a])+";";else for(var o in n){var i=n[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":ye(i)&&(r+=ge(o)+":"+ve(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=be(e,t,i);switch(o){case"animation":case"animationName":r+=ge(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var l=0;l<i.length;l++)ye(i[l])&&(r+=ge(o)+":"+ve(o,i[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=we,o=n(e);return we=a,be(e,t,o)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var we,Ee=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var xe=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";we=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=be(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=be(n,t,e[i]),r&&(a+=o[i]);Ee.lastIndex=0;for(var s,l="";null!==(s=Ee.exec(a));)l+="-"+s[1];return{name:fe(a)+l,styles:a,next:we}},Se=!!a.useInsertionEffect&&a.useInsertionEffect,ke=Se||function(e){return e()},Ce={}.hasOwnProperty,Ne=(0,r.createContext)("undefined"!=typeof HTMLElement?se({key:"css"}):null);Ne.Provider;var Oe=function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(Ne);return e(t,a,n)}))},_e=(0,r.createContext)({});var Pe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",je=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;ce(t,n,r);ke((function(){return ue(t,n,r)}));return null},Te=Oe((function(e,t,n){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[Pe],i=[a],s="";"string"==typeof e.className?s=le(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var l=xe(i,void 0,(0,r.useContext)(_e));s+=t.key+"-"+l.name;var c={};for(var u in e)Ce.call(e,u)&&"css"!==u&&u!==Pe&&(c[u]=e[u]);return c.ref=n,c.className=s,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(je,{cache:t,serialized:l,isStringTag:"string"==typeof o}),(0,r.createElement)(o,c))}));n(4634),n(4146);function Me(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xe(t)}var $e=function(){var e=Me.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ae=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};var ze=function(e){var t=e.cache,n=e.serializedArr;ke((function(){for(var e=0;e<n.length;e++)ue(t,n[e],!1)}));return null},Ie=Oe((function(e,t){var n=[],a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o=xe(r,t.registered);return n.push(o),ce(t,o,!1),t.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],a=le(e,r,n);return r.length<2?n:a+t(r)}(t.registered,a,Ae(n))},theme:(0,r.useContext)(_e)},i=e.children(o);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(ze,{cache:t,serializedArr:n}),i)}));function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}const He=new Map,Re=new WeakMap;let Be,Fe=0;function Ve(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(Re.has(n)||(Fe+=1,Re.set(n,Fe.toString())),Re.get(n)):"0"):e[t]}`;var n})).toString()}function De(e,t,n={},r=Be){if(void 0===window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:i}=function(e){let t=Ve(e),n=He.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},He.set(t,n)}return n}(n);let s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),He.delete(a))}}const Ye=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Xe(e){return"function"!=typeof e.children}class We extends r.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),Xe(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=De(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Xe(this.props)){const{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}const e=this.props,{children:t,as:n}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Ye);return r.createElement(n||"div",Le({ref:this.handleNode},a),t)}}function Ge({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var f;const[d,m]=r.useState(null),p=r.useRef(),[h,y]=r.useState({inView:!!l,entry:void 0});p.current=u,r.useEffect((()=>{if(s||!d)return;let r;return r=De(d,((e,t)=>{y({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&i&&r&&(r(),r=void 0)}),{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,o,a,i,s,n,c,t]);const g=null==(f=h.entry)?void 0:f.target,v=r.useRef();d||!g||i||s||v.current===g||(v.current=g,y({inView:!!l,entry:void 0}));const b=[m,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var qe=n(8338),Ue=n(4848),Qe=Ue.Fragment;function Je(e,t,n){return Ce.call(t,"css")?(0,Ue.jsx)(Te,function(e,t){var n={};for(var r in t)Ce.call(t,r)&&(n[r]=t[r]);return n[Pe]=e,n}(e,t),n):(0,Ue.jsx)(e,t,n)}$e`
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
`,$e`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`;var Ke=$e`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ze=$e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,et=$e`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tt=$e`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=$e`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rt=$e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,at=$e`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ot=$e`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,it=$e`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=$e`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=$e`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=$e`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ut=$e`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ft(e,t){return n=>n?e():t()}function dt(e){return ft(e,(()=>null))}var mt=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,keyframes:s=rt,triggerOnce:l=!1,className:c,style:u,childClassName:f,childStyle:d,children:m,onVisibilityChange:p}=e,h=(0,r.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=rt,iterationCount:a=1}){return Me`
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
  `}({keyframes:s,duration:o})),[o,s]);return null==m?null:"string"==typeof(y=m)||"number"==typeof y||"boolean"==typeof y?Je(ht,{...e,animationStyles:h,children:String(m)}):(0,qe.isFragment)(m)?Je(yt,{...e,animationStyles:h}):Je(Qe,{children:r.Children.map(m,((s,m)=>{if(!(0,r.isValidElement)(s))return null;const y=a+(t?m*o*n:0);switch(s.type){case"ol":case"ul":return Je(Ie,{children:({cx:t})=>Je(s.type,{...s.props,className:t(c,s.props.className),style:Object.assign({},u,s.props.style),children:Je(mt,{...e,children:s.props.children})})});case"li":return Je(We,{threshold:i,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Je(Ie,{children:({cx:n})=>Je(s.type,{...s.props,ref:t,className:n(f,s.props.className),css:dt((()=>h))(e),style:Object.assign({},d,s.props.style,{animationDelay:y+"ms"})})})});default:return Je(We,{threshold:i,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Je("div",{ref:t,className:c,css:dt((()=>h))(e),style:Object.assign({},u,{animationDelay:y+"ms"}),children:Je(Ie,{children:({cx:e})=>Je(s.type,{...s.props,className:e(f,s.props.className),style:Object.assign({},d,s.props.style)})})})})}}))});var y},pt={display:"inline-block",whiteSpace:"pre"},ht=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:f}=e,{ref:d,inView:m}=Ge({triggerOnce:s,threshold:i,onChange:f});return ft((()=>Je("div",{ref:d,className:l,style:Object.assign({},c,pt),children:u.split("").map(((e,n)=>Je("span",{css:dt((()=>t))(m),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Je(yt,{...e,children:u})))(n)},yt=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:i,onVisibilityChange:s}=e,{ref:l,inView:c}=Ge({triggerOnce:r,threshold:n,onChange:s});return Je("div",{ref:l,className:a,css:dt((()=>t))(c),style:o,children:i})};$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,$e`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,$e`
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
`;var gt=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,vt=$e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,bt=$e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,wt=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Et=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,xt=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,St=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,kt=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ct=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Nt=$e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ot=$e`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,_t=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pt=$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var jt=e=>{const{big:t=!1,direction:n,reverse:a=!1,...o}=e,i=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?vt:Ze;case"bottom-right":return t?bt:et;case"down":return e?t?Et:nt:t?wt:tt;case"left":return e?t?St:at:t?xt:rt;case"right":return e?t?Ct:it:t?kt:ot;case"top-left":return t?Nt:st;case"top-right":return t?Ot:lt;case"up":return e?t?Pt:ut:t?_t:ct;default:return t?gt:Ke}}(t,a,n)),[t,n,a]);return Je(mt,{keyframes:i,...o})};$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`;$e`
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
`,$e`
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
`,$e`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;$e`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$e`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$e`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$e`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$e`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,$e`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;$e`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,$e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,$e`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;$e`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
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
`,$e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,$e`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,$e`
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
`;var Tt=()=>r.createElement("section",{id:"hero",className:"bg-gray-900 h-screen"},r.createElement("div",{className:"absolute inset-0 flex items-center text-center justify-center flex-col mx-10"},r.createElement(jt,{duration:1e3,delay:300},r.createElement("h1",{className:"text-white mb-8 font-extrabold text-4xl md:text-6xl lg:text-7xl"},"This is a portfolio about",r.createElement("br",null),r.createElement("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"},"Mizuki Sango"),r.createElement("br",null))),r.createElement(jt,{duration:1e3,delay:1e3},r.createElement(o.N_,{to:"about",smooth:!0,duration:600},r.createElement("button",{className:"text-blue-400 text-xl md:text-3xl lg:text-4xl hover:text-primary-600 focus:text-primary-600 focus:outline-none"},"About me...")))));var Mt=e=>{let{title:t}=e;return r.createElement(jt,{duration:1e3,delay:300},r.createElement("h2",{className:"mb-10 text-center font-bold text-3xl md:text-5xl lg:text-6xl"},t))},$t=n(2532),At=n(4794);var zt=()=>{const e=(0,At.useStaticQuery)("399934830").file.childImageSharp.gatsbyImageData;return r.createElement("section",{id:"about",className:"bg-slate-300"},r.createElement(Mt,{title:"About me"}),r.createElement(jt,{duration:1e3,delay:600,className:"mx-8"},r.createElement("div",{className:"text-black md:flex md:flex-row md:justify-evenly md:items-center"},r.createElement("div",{className:"md:w-1/3"},r.createElement($t.G,{image:e,alt:"Profile picture of Mizuki Sango in Tokyo, Japan",className:"rounded-lg"}),r.createElement("div",{className:"text-sm md:text-base lg:text-xl"},"※台湾 九份で撮影したもの")),r.createElement("div",{className:"mt-6 md:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"氏名"),r.createElement("span",{className:"w-3/4"},"珊瑚 彩主紀 (さんご みずき)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"生年月日"),r.createElement("span",{className:"w-3/4"},"1994年 6月 22日")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"mail"),r.createElement("span",{className:"w-3/4"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"mailto:msageha+info@gmail.com","aria-label":"Send Email"},"msageha+info -at- gmail.com"))),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"趣味、嗜好"),r.createElement("span",{className:"w-3/4"},"オンラインゲーム、旅行。",r.createElement("br",null),"海外は20ヶ国以上。",r.createElement("br",null),"フランス ブルゴーニュ地方のワインが好き。")),r.createElement("div",{className:"flex mt-2"},r.createElement("span",{className:"w-1/4 font-semibold"},"技術スタック",r.createElement("br",null),"(業務経験",r.createElement("br",null),"1年以上)"),r.createElement("span",{className:"w-3/4"},"言語: Python, Golang, Typescript, Dart(Flutter)",r.createElement("br",null),"データベース: MySQL, PostgreSQL, BigQuery, Redis, Elasticsearch",r.createElement("br",null),"クラウド: AWS, GCP",r.createElement("br",null),"コンテナ: Docker, Kubernetes",r.createElement("br",null),"分散処理: Apache Beam, Apache Spark",r.createElement("br",null),"その他: Apache Airflow, Terraform, Git, CircleCI"))))))};var It=e=>{let{title:t}=e;return r.createElement("h3",{className:"my-4 font-semibold text-center text-xl md:text-3xl lg:text-4xl"},t)};var Lt=()=>r.createElement("section",{id:"career",className:"bg-gray-900 text-white text-sm md:text-base lg:text-xl text-center"},r.createElement(Mt,{title:"Career"}),r.createElement(jt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},r.createElement(It,{title:"経歴"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3"},r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"w-2/5 font-semibold"},"2023 / 11 - 現在"),r.createElement("a",{href:"https://aidaptive.com/about/",target:"_blank","aria-label":"JarvisML Inc.",className:"w-3/5 no-underline hover:underline"},r.createElement("div",null,"株式会社Dope 代表取締役"))),r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),r.createElement("a",{href:"https://dope-inc.com/",target:"_blank","aria-label":"JarvisML Inc.",className:"w-3/5 no-underline hover:underline"},r.createElement("div",null,"JarvisML Inc."))),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2020 / 6 - 2021 / 4"),r.createElement("span",{className:"w-3/5"},"株式会社スパイスコード")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2020 / 5"),r.createElement("span",{className:"w-3/5"},"株式会社メルカリ")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2019 / 4 - 2023 / 3"),r.createElement("span",{className:"w-3/5"},"東京工業大学 博士課程(中退)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 4 - 2019 / 3"),r.createElement("span",{className:"w-3/5"},"東京工業大学 修士課程(修了)")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2013 / 4 - 2017 / 3"),r.createElement("span",{className:"w-3/5"},"東北大学 工学部(卒業)")))),r.createElement("br",null),r.createElement("br",null),r.createElement(jt,{duration:1e3,delay:600,className:"md:flex md:justify-center"},r.createElement(It,{title:"インターン / 業務委託 / その他"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3"},r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2024 / 5 - 現在"),r.createElement("span",{className:"w-3/5"},"株式会社テクノフェイス 業務委託")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2021 / 5 - 現在"),r.createElement("span",{className:"w-3/5"},"株式会社アイモバイル 業務委託")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 9"),r.createElement("span",{className:"w-3/5"},"株式会社リクルートホールディングス インターン")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 8 - 2018 / 3"),r.createElement("span",{className:"w-3/5"},"LINE株式会社 インターン・アルバイト")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2017 / 5 - 2018 / 3"),r.createElement("span",{className:"w-3/5"},"SecHack365 1期生")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2015 / 8 - 2016 / 3"),r.createElement("span",{className:"w-3/5"},"トロワ工科大学 (Université de technologie de Troyes) 留学")),r.createElement("div",{className:"flex my-2"},r.createElement("span",{className:"w-2/5 font-semibold"},"2015 / 7"),r.createElement("span",{className:"w-3/5"},"シンガポール国立大学 (National University of Singapore) 留学")),r.createElement("div",{className:"flex"},r.createElement("span",{className:"w-2/5 font-semibold"},"2014 / 4 - 2019 / 3"),r.createElement("span",{className:"w-3/5"},"Life is Tech! メンター")))));const Ht=e=>{let{title:t,author:n,paper:a}=e;return r.createElement("div",{className:"mb-12"},r.createElement("h4",null,t),r.createElement("div",null,n),r.createElement("div",null,a))},Rt=()=>r.createElement(jt,{duration:1e3,delay:600,className:"mx-8 flex justify-center"},r.createElement(It,{title:"執筆論文"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement(Ht,{title:"Auto Content Moderation in C2C e-Commerce",author:r.createElement(r.Fragment,null,"Shunya Ueta, Suganprabu Nagarajan,",r.createElement("span",{className:"underline"},"Mizuki Sango")),paper:"2020 USENIX Conference on Operational Machine Learning (OpML’20)"}),r.createElement(Ht,{title:"外界一人称と二人称を考慮する日本語述語項構造解析の分野適応",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:"第5回自然言語処理シンポジウム（第238回自然言語処理研究発表会）"}),r.createElement(Ht,{title:"Effectiveness of Domain Adaptation in Japanese Predicate-ArgumentStructure Analysis",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"Mizuki Sango"),", Hitoshi Nishikawa, Takenobu Tokunaga"),paper:"The 32nd Pacific Asia Conference on Language(PACLIC 32)"}),r.createElement(Ht,{title:"スマートスピーカーにおける文章読み上げの課題とその解決",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 佐藤 敏紀, 植田 禎子, 橋本 泰一"),paper:"言語処理学会第24回年次大会(NLP2018)"}),r.createElement(Ht,{title:"Monitoring Geographical Entities with Temporal Awareness in Tweets",author:r.createElement(r.Fragment,null,"Koji Matsuda, ",r.createElement("span",{className:"underline"},"Mizuki Sango"),", Naoaki Okazaki, Kentaro Inui"),paper:"International Conference on Computational Linguistics and Intelligent Text Processing (CICLing 2017)"}),r.createElement(Ht,{title:"ツイート中の地理情報に対する時間的極性の自動推定",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 松田耕史, 岡崎直観, 乾健太郎"),paper:"2016年度 人工知能学会全国大会（第30回）"}),r.createElement(Ht,{title:"ジャーナル",author:r.createElement(r.Fragment,null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 西川 仁, 徳永 健伸"),paper:" 会誌「自然言語処理」"})));var Bt=()=>r.createElement("section",{id:"publish",className:"bg-slate-300 text-black mx-auto"},r.createElement(Mt,{title:"成果"}),r.createElement(jt,{duration:1e3,delay:600,className:"mx-8 flex justify-center"},r.createElement(It,{title:"特許"}),r.createElement("div",{className:"md:w-1/2 2xl:w-1/3 text-sm md:text-base lg:text-xl"},r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2021189670A"},r.createElement("h4",null,"プログラム、情報処理方法、及び情報処理装置"),r.createElement("div",null,"株式会社メルカリ"),r.createElement("div",null,"新井 康平, 本間 和尊, 東原 秀亮, 櫻木 善将,"," ",r.createElement("span",{className:"underline"},"珊瑚 彩主紀"),", 紫藤 佑介"))),r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2021092890A"},r.createElement("h4",null,"端末装置、データ共有方法及びプログラム"),r.createElement("div",null,"株式会社メルカリ"),r.createElement("div",null,r.createElement("span",{className:"underline"},"珊瑚 彩主紀")))),r.createElement("div",{className:"mb-12"},r.createElement("a",{className:"text-black no-underline hover:underline",href:"https://patents.google.com/patent/JP2020009249A"},r.createElement("h4",null,"情報処理方法、情報処理装置、及びプログラム"),r.createElement("div",null,"LINE株式会社"),r.createElement("div",null,"佐藤 敏紀, ",r.createElement("span",{className:"underline"},"珊瑚 彩主紀")))))),r.createElement(Rt,null));const Ft=()=>r.createElement("a",{href:"https://github.com/msageha",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),Vt=()=>r.createElement("a",{href:"https://x.com/mzking622",target:"_blank",rel:"noopener noreferrer","aria-label":"X Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))),Dt=()=>r.createElement("a",{href:"https://instagram.com/msageha",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))),Yt=()=>r.createElement("a",{href:"https://www.linkedin.com/in/mizuki-sango",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"white",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})));var Xt=()=>r.createElement("section",{id:"sns",className:"bg-gray-900 text-white"},r.createElement(Mt,{title:"SNS"}),r.createElement(jt,{duration:1e3,delay:600,className:" md:flex md:justify-center"},r.createElement("div",{className:"flex items-center justify-evenly md:w-1/2"},r.createElement(Ft,null),r.createElement(Vt,null),r.createElement(Dt,null),r.createElement(Yt,null))));var Wt=()=>r.createElement("footer",{className:"bg-gray-900 text-white md:flex md:justify-center pt-12 pb-8"},r.createElement("div",{className:"md:w-1/2 mx-4"},"Copyright © ",(new Date).getFullYear()," - Developed by"," ",r.createElement("a",{href:"https://github.com/msageha",target:"_blank"},"Mizuki Sango")));var Gt=e=>{let{bgColor:t,waveRGB:n}=e;return r.createElement("div",{className:"relative w-full overflow-hidden",style:{height:"15vh",minHeight:"100px"}},r.createElement("div",{className:"absolute w-full h-full top-0 left-0",style:{background:`rgb(${n})`}},r.createElement("div",{className:`${t} w-full h-full`},r.createElement("svg",{className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},r.createElement("defs",null,r.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),r.createElement("g",{className:"parallax"},r.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:`rgba(${n},0.5)`}),r.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:`rgba(${n},0.3)`}),r.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:`rgba(${n},0.15)`}),r.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:`rgba(${n},1)`}))))))};var qt=function(){return r.createElement(r.Fragment,null,r.createElement(Tt,null),r.createElement(Gt,{bgColor:"bg-gray-900",waveRGB:"203,213,225"}),r.createElement(zt,null),r.createElement(Gt,{bgColor:"bg-slate-300",waveRGB:"17,24,39"}),r.createElement(Lt,null),r.createElement(Gt,{bgColor:"bg-gray-900",waveRGB:"203,213,225"}),r.createElement(Bt,null),r.createElement(Gt,{bgColor:"bg-slate-300",waveRGB:"17,24,39"}),r.createElement(Xt,null),r.createElement(Wt,null))};function Ut(){return r.createElement(r.Fragment,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",{key:"title"},"Portfolio"),r.createElement("meta",{property:"og:title",content:"mizuki's Portfolio"}),r.createElement("html",{lang:"ja"}),r.createElement("meta",{name:"description",content:"mzk Portfolio"}),r.createElement("meta",{property:"og:locale",content:"ja_JP"}),r.createElement("meta",{property:"og:site_name",content:"mizuki msageha mzk Portfolio"}),r.createElement("meta",{name:"description",property:"og:description",content:"mizuki's Portfolio\n珊瑚 彩主紀のポートフォリオページ"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:"https://raw.githubusercontent.com/msageha/portfolio/main/src/images/profile.jpg"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"}))}var Qt=()=>r.createElement(r.Fragment,null,r.createElement(qt,null))},9365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(6540)),a=o(n(5303));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.render=function(){return r.default.createElement("a",a.props,a.props.children)},i(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,a.default)(s)},9679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(6540)),i=(l(n(961)),l(n(649))),s=l(n(5556));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),a(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return o.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(o.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},9998:function(e,t){"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case s:case i:case d:case m:return e;default:switch(e=e&&e.$$typeof){case u:case c:case f:case h:case p:case l:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return g(e)===o}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-174c66a09aa564359680.js.map