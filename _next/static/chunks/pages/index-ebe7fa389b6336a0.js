(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7686)}])},8045:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,l=void 0!==r&&r,d=e.priority,u=void 0!==d&&d,h=e.loading,p=e.lazyBoundary,y=void 0===p?"200px":p,b=e.className,w=e.quality,v=e.width,x=e.height,S=e.objectFit,z=e.objectPosition,I=e.onLoadingComplete,O=e.loader,_=void 0===O?k:O,C=e.placeholder,B=void 0===C?"empty":C,D=e.blurDataURL,P=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),N=i?"responsive":"intrinsic";"layout"in P&&(P.layout&&(N=P.layout),delete P.layout);var R="";if(function(e){return"object"===typeof e&&(m(e)||function(e){return void 0!==e.src}(e))}(t)){var L=m(t)?t.default:t;if(!L.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(L)));if(D=D||L.blurDataURL,R=L.src,(!N||"fill"!==N)&&(x=x||L.height,v=v||L.width,!L.height||!L.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(L)))}t="string"===typeof t?t:R;var Q=E(v),M=E(x),q=E(w),U=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,U=!1);f.has(t)&&(U=!1);0;var F,T=n(s.useIntersection({rootMargin:y,disabled:!U}),2),W=T[0],H=T[1],K=!U||H,V={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},J=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:z},X="blur"===B?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===N)V.display="block",V.position="absolute",V.top=0,V.left=0,V.bottom=0,V.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof M){var Z=M/Q,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===N?(V.display="block",V.position="relative",J=!0,G.paddingTop=$):"intrinsic"===N?(V.display="inline-block",V.position="relative",V.maxWidth="100%",J=!0,G.maxWidth="100%",F='<svg width="'.concat(Q,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===N&&(V.display="inline-block",V.position="relative",V.width=Q,V.height=M)}else 0;var ee={src:g,srcSet:void 0,sizes:void 0};K&&(ee=j({src:t,unoptimized:l,layout:N,width:Q,quality:q,sizes:i,loader:_}));var te=t;0;return a.default.createElement("span",{style:V},J?a.default.createElement("span",{style:G},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},P,ee,{decoding:"async","data-nimg":N,className:b,ref:function(e){W(e),function(e,t,i,n,r){if(!e)return;var a=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),f.add(t),r){var i=e.naturalWidth,a=e.naturalHeight;r({naturalWidth:i,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,te,0,B,I)},style:A({},Y,X)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},P,j({src:t,unoptimized:l,layout:N,width:Q,quality:q,sizes:i,loader:_}),{decoding:"async","data-nimg":N,style:Y,className:b,loading:h||"lazy"}))),u?a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imagesrcset:ee.srcSet,imagesizes:ee.sizes})):null)};var a=u(i(7294)),o=u(i(5443)),c=i(6978),l=i(5809),s=i(7190);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e){return e&&e.__esModule?e:{default:e}}function A(e){for(var t=arguments,i=function(i){var n=null!=t[i]?t[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))},n=1;n<arguments.length;n++)i(n);return e}var f=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=new URL("".concat(t).concat(S(i))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(S(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(S(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://franzbendezu.me/",loader:"imgix"}||l.imageConfigDefault,y=p.deviceSizes,b=p.imageSizes,w=p.loader,v=p.path,x=(p.domains,r(y).concat(r(b)));function j(e){var t=e.src,i=e.unoptimized,n=e.layout,a=e.width,o=e.quality,c=e.sizes,l=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,a=/(^|\s)(1?\d?\d)vw/g,o=[];n=a.exec(i);n)o.push(parseInt(n[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,r(o));return{widths:x.filter((function(e){return e>=y[0]*l})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:y,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(a,n,c),d=s.widths,u=s.kind,A=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,i){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:l({src:t,quality:o,width:d[A]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=h.get(w);if(t)return t(A({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(w))}function S(e){return"/"===e[0]?e.slice(1):e}y.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},7686:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n=i(5893),r=i(9008),a=(i(7294),i(5675)),o={src:"/_next/static/media/profile.64143f78.jpeg",height:902,width:902,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKIR/8QAHBAAAgICAwAAAAAAAAAAAAAAAhEBAxIiAAYV/9oACAEBAAE/AKuyD6bOMRCmanlo52fP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAgEBPwBzD//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},c=function(){return(0,n.jsx)("div",{className:"container px-4 mx-auto",children:(0,n.jsxs)("div",{className:"lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left",children:[(0,n.jsx)("div",{className:"lg:px-4 lg:mt-12 ",children:(0,n.jsx)("div",{className:"mt-6 text-gray-800 dark:text-white",children:(0,n.jsx)("p",{className:"mb-4",children:"Undergraduate student of the Systems Engineering career at the National University of Engineering. Passionate about technology, I enjoy knowing and using new tools that allow me to solve problems in an optimal and efficient way according to the cases that come my way. I believe that you should always be in constant learning and I like to share the knowledge that I have acquired."})})}),(0,n.jsx)("div",{className:"flex-shrink-0 lg:mt-12 lg:px-4 mb-10",children:(0,n.jsx)(a.default,{src:o,alt:"Profile",priority:!0,className:"rounded-full",width:250,height:250,placeholder:"blur"})})]})})},l=function(){return(0,n.jsxs)("div",{className:"space-y-14 lg:space-y-24 ",children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"max-w-4xl mx-auto pt-16 antialiased",children:(0,n.jsx)(c,{})})]})}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);