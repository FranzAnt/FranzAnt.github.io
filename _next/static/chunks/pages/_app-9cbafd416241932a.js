(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5268)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),u=n(387),l=n(7190);var c={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(l.useIntersection({rootMargin:"200px"}),2),w=x[0],E=x[1],S=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=E&&n&&i.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,E,y,n,o]);var C={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}))}(e,o,d,p,m,h,b,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:o&&o.locale,P=o&&o.isLocaleDomain&&i.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);C.href=P||i.addBasePath(i.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(t,C)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),c=r(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||s||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},5268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Be}});var r=n(5893),o=(n(3602),n(1664)),a=n(1163),i=n(7294),u=n(9008);const l=(0,i.createContext)({setTheme:e=>{},themes:[]}),c=["light","dark"],s="(prefers-color-scheme: dark)",f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:a=["light","dark"],defaultTheme:u=(n?"system":"light"),attribute:f="data-theme",value:h,children:b})=>{const[y,g]=(0,i.useState)((()=>p(o,u))),[x,w]=(0,i.useState)((()=>p(o))),E=h?Object.values(h):a,S=(0,i.useCallback)((t=>{const n=m(t);w(n),"system"!==y||e||k(n,!1)}),[y,e]),C=(0,i.useRef)(S);C.current=S;const k=(0,i.useCallback)(((e,r=!0,a=!0)=>{let i=(null==h?void 0:h[e])||e;const u=t&&a?v():null;if(r)try{localStorage.setItem(o,e)}catch(e){}if("system"===e&&n){const e=m();i=(null==h?void 0:h[e])||e}if(a){const e=document.documentElement;"class"===f?(e.classList.remove(...E),e.classList.add(i)):e.setAttribute(f,i),null==u||u()}}),[]);(0,i.useEffect)((()=>{const e=function(){return C.current(...[].slice.call(arguments))},t=window.matchMedia(s);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const P=(0,i.useCallback)((t=>{e?k(t,!0,!1):k(t),g(t)}),[e]);return(0,i.useEffect)((()=>{const e=e=>{e.key===o&&P(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[P]),(0,i.useEffect)((()=>{if(!r)return;let t=e&&c.includes(e)?e:y&&c.includes(y)?y:"system"===y&&x||null;document.documentElement.style.setProperty("color-scheme",t)}),[r,y,x,e]),i.createElement(l.Provider,{value:{theme:y,setTheme:P,forcedTheme:e,resolvedTheme:"system"===y?x:y,themes:n?[...a,"system"]:a,systemTheme:n?x:void 0}},i.createElement(d,{forcedTheme:e,storageKey:o,attribute:f,value:h,enableSystem:n,defaultTheme:u,attrs:E}),b)},d=(0,i.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,defaultTheme:o,value:a,attrs:l})=>{const c="class"===n?`var d=document.documentElement.classList;d.remove(${l.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",f=(e,t)=>{e=(null==a?void 0:a[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},d="system"===o;return i.createElement(u.default,null,i.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${c}${f(e)}}()`}}:r?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${c}var e=localStorage.getItem('${t}');${d?"":f(o)+";"}if("system"===e||(!e&&${d})){var t="${s}",m=window.matchMedia(t);m.media!==t||m.matches?${f("dark")}:${f("light")}}else if(e) ${a?`var x=${JSON.stringify(a)};`:""}${f(a?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${c}var e=localStorage.getItem("${t}");if(e){${a?`var x=${JSON.stringify(a)};`:""}${f(a?"x[e]":"e",!0)}}else{${f(o)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),p=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},v=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},m=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");var h=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),i.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))};var b=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),i.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}))};var y=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),i.createElement("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}))};var g=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],o=(0,i.useContext)(l),a=o.theme,u=o.setTheme,c=o.resolvedTheme;return(0,i.useEffect)((function(){return n(!0)}),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:function(){return u("dark"===a||"dark"===c?"light":"dark")},children:!t||"dark"!==a&&"dark"!==c?(0,r.jsx)(b,{className:"text-gray-900"}):(0,r.jsx)(y,{className:"text-yellow-500"})})};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var E=function(e){var t=e.href,n=e.exact,i=e.children,u=e.activeClass,l=e.className,c=(0,a.useRouter)().pathname,s=n?c===t:c.startsWith(t),f="".concat(l," text-base  px-3 py-2 ").concat(s?u:"text-gray-600 dark:text-white font-normal ");return(0,r.jsx)(o.default,{href:t,children:(0,r.jsxs)("a",w({className:f},e,{children:[i," ",s&&(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down inline-block h-3 w-3",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})]}))})};E.defaultProps={exact:!1,activeClass:"text-gray-800 font-bold dark:text-gray-400",href:""};var S,C,k,P=E;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function L(e,t){if(e in t){for(var n=t[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof n?n.apply(void 0,o):n}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,L),i}function I(e){var t=e.props,n=e.slot,r=e.defaultTag,o=e.features,a=e.visible,i=void 0===a||a,u=e.name;if(i)return F(t,n,r,u);var l=null!=o?o:S.None;if(l&S.Static){var c=t.static,s=void 0!==c&&c,f=j(t,["static"]);if(s)return F(f,n,r,u)}if(l&S.RenderStrategy){var d,p=t.unmount,v=void 0===p||p,m=j(t,["unmount"]);return L(v?C.Unmount:C.Hidden,((d={})[C.Unmount]=function(){return null},d[C.Hidden]=function(){return F(O({},m,{hidden:!0,style:{display:"none"}}),n,r,u)},d))}return F(t,n,r,u)}function F(e,t,n,r){var o;void 0===t&&(t={});var a=M(e,["unmount","static"]),u=a.as,l=void 0===u?n:u,c=a.children,s=a.refName,f=void 0===s?"ref":s,d=j(a,["as","children","refName"]),p=void 0!==e.ref?((o={})[f]=e.ref,o):{},v="function"===typeof c?c(t):c;if(d.className&&"function"===typeof d.className&&(d.className=d.className(t)),l===i.Fragment&&Object.keys(d).length>0){if(!(0,i.isValidElement)(v)||Array.isArray(v)&&v.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(d).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(v,Object.assign({},function(e,t,n){for(var r,o=Object.assign({},e),a=function(){var n,a=r.value;void 0!==e[a]&&void 0!==t[a]&&Object.assign(o,((n={})[a]=function(n){n.defaultPrevented||e[a](n),n.defaultPrevented||t[a](n)},n))},i=N(n);!(r=i()).done;)a();return o}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(M(d,["ref"])),v.props,["onClick"]),p))}return(0,i.createElement)(l,Object.assign({},M(d,["ref"]),l!==i.Fragment&&p),v)}function A(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function M(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=N(t);!(n=o()).done;){var a=n.value;a in r&&delete r[a]}return r}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,i.useRef)(t);return(0,i.useEffect)((function(){r.current=t}),[t]),(0,i.useCallback)((function(e){for(var t,n=N(r.current);!(t=n()).done;){var o=t.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function H(e){for(var t,n,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!a||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(S||(S={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(C||(C={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(k||(k={}));var D="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,z={serverHandoffComplete:!1};function _(){var e=(0,i.useState)(z.serverHandoffComplete),t=e[0],n=e[1];return(0,i.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,i.useEffect)((function(){!1===z.serverHandoffComplete&&(z.serverHandoffComplete=!0)}),[]),t}var $=0;function B(){return++$}function U(){var e=_(),t=(0,i.useState)(e?B:null),n=t[0],r=t[1];return D((function(){null===n&&r(B())}),[n]),null!=n?""+n:void 0}var V,K,q,G,W=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function J(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(W))}function X(e,t){var n=Array.isArray(e)?e:J(e),r=document.activeElement,o=function(){if(t&(V.First|V.Next))return q.Next;if(t&(V.Previous|V.Last))return q.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=function(){if(t&V.First)return 0;if(t&V.Previous)return Math.max(0,n.indexOf(r))-1;if(t&V.Next)return Math.max(0,n.indexOf(r))+1;if(t&V.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=t&V.NoScroll?{preventScroll:!0}:{},u=0,l=n.length,c=void 0;do{var s;if(u>=l||u+l<=0)return K.Error;var f=a+u;if(t&V.WrapAround)f=(f+l)%l;else{if(f<0)return K.Underflow;if(f>=l)return K.Overflow}null==(s=c=n[f])||s.focus(i),u+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),K.Success}function Y(e,t,n){var r=(0,i.useRef)(t);r.current=t,(0,i.useEffect)((function(){function t(e){r.current.call(window,e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(V||(V={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(K||(K={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(q||(q={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(G||(G={}));var Q,Z,ee,te,ne=(0,i.createContext)(null);function re(){return(0,i.useContext)(ne)}function oe(e){var t=e.value,n=e.children;return i.createElement(ne.Provider,{value:t},n)}function ae(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"===typeof n&&"button"===n.toLowerCase()?"button":void 0}ne.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(Q||(Q={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(ee||(ee={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(te||(te={}));var ie=((Z={})[te.TogglePopover]=function(e){var t;return O({},e,{popoverState:L(e.popoverState,(t={},t[ee.Open]=ee.Closed,t[ee.Closed]=ee.Open,t))})},Z[te.ClosePopover]=function(e){return e.popoverState===ee.Closed?e:O({},e,{popoverState:ee.Closed})},Z[te.SetButton]=function(e,t){return e.button===t.button?e:O({},e,{button:t.button})},Z[te.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:O({},e,{buttonId:t.buttonId})},Z[te.SetPanel]=function(e,t){return e.panel===t.panel?e:O({},e,{panel:t.panel})},Z[te.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:O({},e,{panelId:t.panelId})},Z),ue=(0,i.createContext)(null);function le(e){var t=(0,i.useContext)(ue);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+me.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,le),n}return t}ue.displayName="PopoverContext";var ce=(0,i.createContext)(null);function se(e){var t=(0,i.useContext)(ce);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+me.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,se),n}return t}ce.displayName="PopoverAPIContext";var fe=(0,i.createContext)(null);function de(){return(0,i.useContext)(fe)}fe.displayName="PopoverGroupContext";var pe=(0,i.createContext)(null);function ve(e,t){return L(t.type,ie,e,t)}pe.displayName="PopoverPanelContext";function me(e){var t,n="headlessui-popover-button-"+U(),r="headlessui-popover-panel-"+U(),o=(0,i.useReducer)(ve,{popoverState:ee.Closed,button:null,buttonId:n,panel:null,panelId:r}),a=o[0],u=a.popoverState,l=a.button,c=a.panel,s=o[1];(0,i.useEffect)((function(){return s({type:te.SetButtonId,buttonId:n})}),[n,s]),(0,i.useEffect)((function(){return s({type:te.SetPanelId,panelId:r})}),[r,s]);var f=(0,i.useMemo)((function(){return{buttonId:n,panelId:r,close:function(){return s({type:te.ClosePopover})}}}),[n,r,s]),d=de(),p=null==d?void 0:d.registerPopover,v=(0,i.useCallback)((function(){var e;return null!=(e=null==d?void 0:d.isFocusWithinPopoverGroup())?e:(null==l?void 0:l.contains(document.activeElement))||(null==c?void 0:c.contains(document.activeElement))}),[d,l,c]);(0,i.useEffect)((function(){return null==p?void 0:p(f)}),[p,f]),Y("focus",(function(){u===ee.Open&&(v()||l&&c&&s({type:te.ClosePopover}))}),!0),Y("mousedown",(function(e){var t=e.target;u===ee.Open&&((null==l?void 0:l.contains(t))||(null==c?void 0:c.contains(t))||(s({type:te.ClosePopover}),function(e,t){var n;return void 0===t&&(t=G.Strict),e!==document.body&&L(t,((n={})[G.Strict]=function(){return e.matches(W)},n[G.Loose]=function(){for(var t=e;null!==t;){if(t.matches(W))return!0;t=t.parentElement}return!1},n))}(t,G.Loose)||(e.preventDefault(),null==l||l.focus())))}));var m=(0,i.useCallback)((function(e){s({type:te.ClosePopover});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:l:l;null==t||t.focus()}),[s,l]),h=(0,i.useMemo)((function(){return{close:m}}),[m]),b=(0,i.useMemo)((function(){return{open:u===ee.Open,close:m}}),[u,m]);return i.createElement(ue.Provider,{value:o},i.createElement(ce.Provider,{value:h},i.createElement(oe,{value:L(u,(t={},t[ee.Open]=Q.Open,t[ee.Closed]=Q.Closed,t))},I({props:e,slot:b,defaultTag:"div",name:"Popover"}))))}var he,be=A((function e(t,n){var r=le([me.name,e.name].join(".")),o=r[0],a=r[1],u=(0,i.useRef)(null),l=de(),c=null==l?void 0:l.closeOthers,s=(0,i.useContext)(pe),f=null!==s&&s===o.panelId,d=R(u,n,f?null:function(e){return a({type:te.SetButton,button:e})}),p=R(u,n),v=(0,i.useRef)(null),m=(0,i.useRef)("undefined"===typeof window?null:document.activeElement);Y("focus",(function(){m.current=v.current,v.current=document.activeElement}),!0);var h=(0,i.useCallback)((function(e){var t;if(f){if(o.popoverState===ee.Closed)return;switch(e.key){case k.Space:case k.Enter:e.preventDefault(),e.stopPropagation(),a({type:te.ClosePopover}),null==(t=o.button)||t.focus()}}else switch(e.key){case k.Space:case k.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===ee.Closed&&(null==c||c(o.buttonId)),a({type:te.TogglePopover});break;case k.Escape:if(o.popoverState!==ee.Open)return null==c?void 0:c(o.buttonId);if(!u.current)return;if(!u.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:te.ClosePopover});break;case k.Tab:if(o.popoverState!==ee.Open)return;if(!o.panel)return;if(!o.button)return;if(e.shiftKey){var n;if(!m.current)return;if(null==(n=o.button)?void 0:n.contains(m.current))return;if(o.panel.contains(m.current))return;var r=J(),i=r.indexOf(m.current);if(r.indexOf(o.button)>i)return;e.preventDefault(),e.stopPropagation(),X(o.panel,V.Last)}else e.preventDefault(),e.stopPropagation(),X(o.panel,V.First)}}),[a,o.popoverState,o.buttonId,o.button,o.panel,u,c,f]),b=(0,i.useCallback)((function(e){var t;if(!f&&(e.key===k.Space&&e.preventDefault(),o.popoverState===ee.Open&&o.panel&&o.button))switch(e.key){case k.Tab:if(!m.current)return;if(null==(t=o.button)?void 0:t.contains(m.current))return;if(o.panel.contains(m.current))return;var n=J(),r=n.indexOf(m.current);if(n.indexOf(o.button)>r)return;e.preventDefault(),e.stopPropagation(),X(o.panel,V.Last)}}),[o.popoverState,o.panel,o.button,f]),y=(0,i.useCallback)((function(e){var n,r;H(e.currentTarget)||(t.disabled||(f?(a({type:te.ClosePopover}),null==(n=o.button)||n.focus()):(o.popoverState===ee.Closed&&(null==c||c(o.buttonId)),null==(r=o.button)||r.focus(),a({type:te.TogglePopover}))))}),[a,o.button,o.popoverState,o.buttonId,t.disabled,c,f]),g=(0,i.useMemo)((function(){return{open:o.popoverState===ee.Open}}),[o]),x=function(e,t){var n=(0,i.useState)((function(){return ae(e)})),r=n[0],o=n[1];return D((function(){o(ae(e))}),[e.type,e.as]),D((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[r,t]),r}(t,u);return I({props:O({},t,f?{ref:p,type:x,onKeyDown:h,onClick:y}:{ref:d,id:o.buttonId,type:x,"aria-expanded":t.disabled?void 0:o.popoverState===ee.Open,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:h,onKeyUp:b,onClick:y}),slot:g,defaultTag:"button",name:"Popover.Button"})})),ye=S.RenderStrategy|S.Static,ge=A((function e(t,n){var r=le([me.name,e.name].join(".")),o=r[0].popoverState,a=r[1],u=R(n),l="headlessui-popover-overlay-"+U(),c=re(),s=null!==c?c===Q.Open:o===ee.Open,f=(0,i.useCallback)((function(e){if(H(e.currentTarget))return e.preventDefault();a({type:te.ClosePopover})}),[a]),d=(0,i.useMemo)((function(){return{open:o===ee.Open}}),[o]);return I({props:O({},t,{ref:u,id:l,"aria-hidden":!0,onClick:f}),slot:d,defaultTag:"div",features:ye,visible:s,name:"Popover.Overlay"})})),xe=S.RenderStrategy|S.Static,we=A((function e(t,n){var r=t.focus,o=void 0!==r&&r,a=j(t,["focus"]),u=le([me.name,e.name].join(".")),l=u[0],c=u[1],s=se([me.name,e.name].join(".")).close,f=(0,i.useRef)(null),d=R(f,n,(function(e){c({type:te.SetPanel,panel:e})})),p=re(),v=null!==p?p===Q.Open:l.popoverState===ee.Open,m=(0,i.useCallback)((function(e){var t;switch(e.key){case k.Escape:if(l.popoverState!==ee.Open)return;if(!f.current)return;if(!f.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),c({type:te.ClosePopover}),null==(t=l.button)||t.focus()}}),[l,f,c]);(0,i.useEffect)((function(){return function(){return c({type:te.SetPanel,panel:null})}}),[c]),(0,i.useEffect)((function(){var e;t.static||l.popoverState!==ee.Closed||null!=(e=t.unmount)&&!e||c({type:te.SetPanel,panel:null})}),[l.popoverState,t.unmount,t.static,c]),(0,i.useEffect)((function(){if(o&&l.popoverState===ee.Open&&f.current){var e=document.activeElement;f.current.contains(e)||X(f.current,V.First)}}),[o,f,l.popoverState]),Y("keydown",(function(e){if(l.popoverState===ee.Open&&f.current&&e.key===k.Tab&&document.activeElement&&f.current&&f.current.contains(document.activeElement)){e.preventDefault();var t,n=X(f.current,e.shiftKey?V.Previous:V.Next);if(n===K.Underflow)return null==(t=l.button)?void 0:t.focus();if(n===K.Overflow){if(!l.button)return;var r=J(),o=r.indexOf(l.button);X(r.splice(o+1).filter((function(e){var t;return!(null==(t=f.current)?void 0:t.contains(e))})),V.First)===K.Error&&X(document.body,V.First)}}})),Y("focus",(function(){var e;o&&l.popoverState===ee.Open&&f.current&&((null==(e=f.current)?void 0:e.contains(document.activeElement))||c({type:te.ClosePopover}))}),!0);var h=(0,i.useMemo)((function(){return{open:l.popoverState===ee.Open,close:s}}),[l,s]),b={ref:d,id:l.panelId,onKeyDown:m};return i.createElement(pe.Provider,{value:l.panelId},I({props:O({},a,b),slot:h,defaultTag:"div",features:xe,visible:v,name:"Popover.Panel"}))}));function Ee(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=N(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function Se(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function Ce(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function ke(e,t,n,r,o,a){var i=Ee(),u=void 0!==a?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(a):function(){};return Ce.apply(void 0,[e].concat(o)),Se.apply(void 0,[e].concat(t,n)),i.nextFrame((function(){Ce.apply(void 0,[e].concat(n)),Se.apply(void 0,[e].concat(r)),i.add(function(e,t){var n=Ee();if(!e)return n.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),a=o[0],i=o[1];return 0!==a?n.setTimeout((function(){t(he.Finished)}),a+i):t(he.Finished),n.add((function(){return t(he.Cancelled)})),n.dispose}(e,(function(n){return Ce.apply(void 0,[e].concat(r,t)),Se.apply(void 0,[e].concat(o)),u(n)})))})),i.add((function(){return Ce.apply(void 0,[e].concat(t,n,r,o))})),i.add((function(){return u(he.Cancelled)})),i.dispose}function Pe(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}me.Button=be,me.Overlay=ge,me.Panel=we,me.Group=function(e){var t=(0,i.useRef)(null),n=(0,i.useState)([]),r=n[0],o=n[1],a=(0,i.useCallback)((function(e){o((function(t){var n=t.indexOf(e);if(-1!==n){var r=t.slice();return r.splice(n,1),r}return t}))}),[o]),u=(0,i.useCallback)((function(e){return o((function(t){return[].concat(t,[e])})),function(){return a(e)}}),[o,a]),l=(0,i.useCallback)((function(){var e,n=document.activeElement;return!!(null==(e=t.current)?void 0:e.contains(n))||r.some((function(e){var t,r;return(null==(t=document.getElementById(e.buttonId))?void 0:t.contains(n))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(n))}))}),[t,r]),c=(0,i.useCallback)((function(e){for(var t,n=N(r);!(t=n()).done;){var o=t.value;o.buttonId!==e&&o.close()}}),[r]),s=(0,i.useMemo)((function(){return{registerPopover:u,unregisterPopover:a,isFocusWithinPopoverGroup:l,closeOthers:c}}),[u,a,l,c]),f=(0,i.useMemo)((function(){return{}}),[]),d={ref:t},p=e;return i.createElement(fe.Provider,{value:s},I({props:O({},p,d),slot:f,defaultTag:"div",name:"Popover.Group"}))},function(e){e.Finished="finished",e.Cancelled="cancelled"}(he||(he={}));var Oe,je=(0,i.createContext)(null);je.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(Oe||(Oe={}));var Te=(0,i.createContext)(null);function Ne(e){return"children"in e?Ne(e.children):e.current.filter((function(e){return e.state===Oe.Visible})).length>0}function Le(e){var t=(0,i.useRef)(e),n=(0,i.useRef)([]),r=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,i.useEffect)((function(){t.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var a;void 0===o&&(o=C.Hidden);var i=n.current.findIndex((function(t){return t.id===e}));-1!==i&&(L(o,((a={})[C.Unmount]=function(){n.current.splice(i,1)},a[C.Hidden]=function(){n.current[i].state=Oe.Hidden},a)),!Ne(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),a=(0,i.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==Oe.Visible&&(t.state=Oe.Visible):n.current.push({id:e,state:Oe.Visible}),function(){return o(e,C.Unmount)}}),[n,o]);return(0,i.useMemo)((function(){return{children:n,register:a,unregister:o}}),[a,o,n])}function Ie(){}Te.displayName="NestingContext";var Fe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ae(e){for(var t,n={},r=N(Fe);!(t=r()).done;){var o,a=t.value;n[a]=null!=(o=e[a])?o:Ie}return n}var Me=S.RenderStrategy;function Re(e){var t,n=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,a=e.afterLeave,u=e.enter,l=e.enterFrom,c=e.enterTo,s=e.entered,f=e.leave,d=e.leaveFrom,p=e.leaveTo,v=j(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),m=(0,i.useRef)(null),h=(0,i.useState)(Oe.Visible),b=h[0],y=h[1],g=v.unmount?C.Unmount:C.Hidden,x=function(){var e=(0,i.useContext)(je);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),w=x.show,E=x.appear,S=x.initial,k=function(){var e=(0,i.useContext)(Te);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),P=k.register,T=k.unregister,N=U(),F=(0,i.useRef)(!1),A=Le((function(){F.current||(y(Oe.Hidden),T(N),K.current.afterLeave())}));D((function(){if(N)return P(N)}),[P,N]),D((function(){var e;g===C.Hidden&&N&&(w&&b!==Oe.Visible?y(Oe.Visible):L(b,((e={})[Oe.Hidden]=function(){return T(N)},e[Oe.Visible]=function(){return P(N)},e)))}),[b,N,P,T,w,g]);var M=Pe(u),R=Pe(l),H=Pe(c),z=Pe(s),$=Pe(f),B=Pe(d),V=Pe(p),K=function(e){var t=(0,i.useRef)(Ae(e));return(0,i.useEffect)((function(){t.current=Ae(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:a}),q=_();(0,i.useEffect)((function(){if(q&&b===Oe.Visible&&null===m.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[m,b,q]);var G=S&&!E;D((function(){var e=m.current;if(e&&!G)return F.current=!0,w&&K.current.beforeEnter(),w||K.current.beforeLeave(),w?ke(e,M,R,H,z,(function(e){F.current=!1,e===he.Finished&&K.current.afterEnter()})):ke(e,$,B,V,z,(function(e){F.current=!1,e===he.Finished&&(Ne(A)||(y(Oe.Hidden),T(N),K.current.afterLeave()))}))}),[K,N,F,T,A,m,G,w,M,R,H,$,B,V]);var W={ref:m},J=v;return i.createElement(Te.Provider,{value:A},i.createElement(oe,{value:L(b,(t={},t[Oe.Visible]=Q.Open,t[Oe.Hidden]=Q.Closed,t))},I({props:O({},J,W),defaultTag:"div",features:Me,visible:b===Oe.Visible,name:"Transition.Child"})))}function He(e){var t,n=e.show,r=e.appear,o=void 0!==r&&r,a=e.unmount,u=j(e,["show","appear","unmount"]),l=re();void 0===n&&null!==l&&(n=L(l,((t={})[Q.Open]=!0,t[Q.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var c=(0,i.useState)(n?Oe.Visible:Oe.Hidden),s=c[0],f=c[1],d=Le((function(){f(Oe.Hidden)})),p=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}(),v=(0,i.useMemo)((function(){return{show:n,appear:o||!p,initial:p}}),[n,o,p]);(0,i.useEffect)((function(){n?f(Oe.Visible):Ne(d)||f(Oe.Hidden)}),[n,d]);var m={unmount:a};return i.createElement(Te.Provider,{value:d},i.createElement(je.Provider,{value:v},I({props:O({},m,{as:i.Fragment,children:i.createElement(Re,Object.assign({},m,u))}),defaultTag:i.Fragment,features:Me,visible:s===Oe.Visible,name:"Transition"})))}He.Child=function(e){var t=null!==(0,i.useContext)(je),n=null!==re();return!t&&n?i.createElement(He,Object.assign({},e)):i.createElement(Re,Object.assign({},e))},He.Root=He;var De=function(){(0,a.useRouter)();var e=(0,i.useState)(!1),t=(e[0],e[1],(0,i.useState)([{title:"Inicio",path:"/",exact:!0},{title:"Proyectos",path:"/projects",exact:!0},{title:"Experiencia",path:"/experience",exact:!0},{title:"Contacto",path:"/contact",exact:!0}])[0]);return(0,r.jsx)("nav",{className:"sticky top-0 z-20 py-2 bg-white md:py-6 dark:bg-black",children:(0,r.jsxs)("div",{className:"container px-4 mx-auto lg:max-w-4xl flex items-center justify-between",children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white",children:"Franz Bendezu"})}),(0,r.jsx)("div",{className:" flex items-center ",children:(0,r.jsxs)(me,{as:i.Fragment,children:[(0,r.jsx)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:t.map((function(e){return(0,r.jsxs)(P,{href:e.path,exact:e.exact,children:[" ",e.title]},e.title)}))}),(0,r.jsx)("div",{className:"mr-2 flex items-center",children:(0,r.jsx)(g,{})}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}),(0,r.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,r.jsxs)(me.Button,{className:" p-2 inline-flex items-center justify-center text-gray-600 dark:text-white focus:outline-none ",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,r.jsx)(h,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,r.jsx)(He,{as:i.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsx)(me.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,r.jsx)("div",{className:"rounded-lg shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden",children:(0,r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:t.map((function(e){return(0,r.jsxs)(P,{activeClass:"dark:bg-gray-400 font-bold ",className:"block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:text-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-50",href:e.path,exact:e.exact,children:[" ",e.title]},e.title)}))})})})})]})})]})})},ze=function(){return(0,r.jsxs)("footer",{className:" px-6 container mx-auto text-gray-800 dark:text-white bg-white py-6 dark:bg-black",children:[(0,r.jsx)("div",{className:"pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"}),(0,r.jsxs)("div",{className:"flex flex-col justify-between lg:flex-row items-center",children:[(0,r.jsx)("p",{children:"Dise\xf1ado por Franz Bendezu"}),(0,r.jsxs)("div",{className:"flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0",children:[(0,r.jsx)("a",{href:"https://twitter.com/franz_bendezu",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"Twitter"}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/franz-antony-bendezu-isidro/",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),(0,r.jsx)("a",{href:"https://github.com/franz-bendezu",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})};function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_e(e,t,n[t])}))}return e}var Be=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f,{attribute:"class",defaultTheme:"light",children:(0,r.jsxs)("div",{className:" bg-white dark:bg-black flex flex-col min-h-screen",children:[(0,r.jsx)(De,{}),(0,r.jsx)("main",{className:" flex-grow bg-white dark:bg-gray-900 justify-center text-center align-middle",children:(0,r.jsx)(t,$e({},n))}),(0,r.jsx)(ze,{})]})})})}},3602:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);