(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{10:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.LIST="/list",e.ADD="/add"}(r||(r={}))},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r,a=n(4),c=n(5),o=n(13),i=function(e,t){var n=function(e){return Math.round(parseInt(e,16)*t).toString(16).padStart(2,"0")};return"#".concat(n(e.substring(1,3))).concat(n(e.substring(3,5))).concat(n(e.substring(5,7)))},l=function(e){return Object(c.b)(r||(r=Object(a.a)(["\n    @media all and (max-width: ","px) {\n        ","\n    }\n"])),o.a.mobile,e)}},13:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.desktop=1200]="desktop",e[e.tablet=920]="tablet",e[e.mobile=540]="mobile"}(r||(r={}))},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;Object(r.useEffect)((function(){return n.addEventListener(e,t),function(){return n.removeEventListener(e,t)}}),[])}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!!e})).join(" ")},a=function(e,t){return(e=e||"").length>t?e.substring(0,t-3)+"...":e},c=function(e){return"".concat(Math.floor(e)," h. ").concat(Math.round(e%1*60)," m.")}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var r,a=n(20),c=n(36),o=n(9),i=n(0);!function(e){e.USERS="https://jsonplaceholder.typicode.com/users"}(r||(r={}));var l=function(e,t){var n=JSON.parse(localStorage.getItem(t)||'""'),r=Object(i.useState)(n||e),a=Object(o.a)(r,2),c=a[0],l=a[1];return[c,function(e){localStorage.setItem(t,JSON.stringify(e)),l(e)}]},s=n(26),u=n.n(s),f=n(35);var d=n(1),h=Object(i.createContext)(null),p=function(){return Object(i.useContext)(h)},b=function(e){var t=e.children,n=l([],"notes"),s=Object(o.a)(n,2),p=s[0],b=s[1],m=l(1,"last_id"),g=Object(o.a)(m,2),v=g[0],j=g[1],O=Object(i.useState)([]),y=Object(o.a)(O,2),w=y[0],x=y[1];return Object(i.useEffect)((function(){var e,t;(e=r.USERS,fetch(e,t).then(function(){var e=Object(f.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,200===t.status){e.next=5;break}throw new Error(n.message||"some error occur, please try again later");case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;throw new Error((null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.message)||e.message)}))).then(x).catch((function(e){return alert("cannot fetch users ".concat(e.message))}))}),[]),Object(d.jsx)(h.Provider,{value:{users:w,notes:p,setNote:function(e){var t=v+1;return b([Object(a.a)({id:t},e)].concat(Object(c.a)(p))),j(t),t}},children:t})}},37:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(37);var r,a,c=n(0),o=n.n(c),i=n(31),l=n.n(i),s=n(14),u=n(5),f=n(2),d=n(4),h=n(11),p=u.c.div(r||(r=Object(d.a)(["\n    color: ",";\n    main {\n        display: block;\n        padding: 40px;\n        ","\n    }\n"])),(function(e){return e.theme.colors.dark}),Object(h.b)(a||(a=Object(d.a)(["\n            padding: 40px 26px;\n        "])))),b=n(10);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=c.createElement("defs",null,c.createElement("linearGradient",{id:"60672ce7-bfbc-4a60-a482-eb57e060a9c7",x1:521.94,y1:746.41,x2:521.94,y2:22.41,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:0,stopColor:"gray",stopOpacity:.25}),c.createElement("stop",{offset:.54,stopColor:"gray",stopOpacity:.12}),c.createElement("stop",{offset:1,stopColor:"gray",stopOpacity:.1})),c.createElement("linearGradient",{id:"b310ffb6-9937-4369-8bc9-4e3f67e27eb9",x1:748.44,y1:596.28,x2:748.44,y2:179.26,xlinkHref:"#60672ce7-bfbc-4a60-a482-eb57e060a9c7"})),j=c.createElement("circle",{cx:521.94,cy:384.41,r:356,fill:"#118AB2"}),O=c.createElement("circle",{cx:521.94,cy:384.41,r:283,fill:"#dde1ec"}),y=c.createElement("rect",{x:513.94,y:151.41,width:16,height:250,fill:"#535461",opacity:.3}),w=c.createElement("g",{opacity:.1},c.createElement("rect",{x:538.94,y:378.41,width:226,height:20}),c.createElement("rect",{x:516.95,y:333.31,width:20,height:160.52,transform:"translate(-164.99 624.63) rotate(-62.36)"}),c.createElement("circle",{cx:521.94,cy:388.41,r:30})),x=c.createElement("rect",{x:538.94,y:374.41,width:226,height:20,fill:"#535461"}),E=c.createElement("rect",{x:446.69,y:399.57,width:160.52,height:20,transform:"translate(169.1 -261.59) rotate(27.64)",fill:"#535461"}),k=c.createElement("circle",{cx:521.94,cy:384.41,r:30,fill:"#535461"}),S=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M342,482.27c0-156.3,126.7-283,283-283A282.56,282.56,0,0,1,851.16,312.11C803,224.59,710,165.27,603,165.27c-156.3,0-283,126.7-283,283a281.74,281.74,0,0,0,56.87,170.16A281.71,281.71,0,0,1,342,482.27Z",transform:"translate(-81.08 -63.86)"})),M=c.createElement("path",{d:"M864.5,240.09c-3.36-3.23-31.64,18-31.64,18s-10.07,1.84-7.67,8.75-10.55,45.61-10.55,45.61l-5.27-7.37c.51-8.65-1.87-14.78-4.19-18.6-.19-.31-.38-.61-.57-.89l.92-.32c-.35-4.72-7.9-11.91-11.91-15.43,0-.51,0-1,0-1.52.25-5.64,2.51-11.59,0-16.7-2.84-5.83-11.15-8.76-11.85-15.16-.42-3.82,2.16-7.27,3.3-10.95,2.72-8.8-2.93-17.78-8.33-25.36a35.47,35.47,0,0,0-6.61-7.62,32.08,32.08,0,0,0-7.94-4.24c-7.91-3.2-16-4.81-24.16-7-7.83-2.08-15.05-3.07-23-.46a11.31,11.31,0,0,0-5,2.87c-1.89,2.12-2.14,5.14-3.38,7.67-2,4.07-6.31,6.5-10.12,9.11s-7.63,6.19-7.65,10.69c0,6.39,7.3,10.41,9.74,16.36,2.28,5.54,0,11.71-1.27,17.55a11.79,11.79,0,0,0-.15,5.79,12.44,12.44,0,0,0,2.24,3.9c1.51,2,3.13,3.86,4.74,5.76l-.74.29c-13.42-1.38-22.05,15.66-22.05,15.66.62.13,1.21.28,1.79.45l-.57.74a72.75,72.75,0,0,0-9.85,17.23l-11,14.74s-2.4-36.86,3.36-45.15-5.27-13.36-5.27-13.36-24-26.72-27.33-24.42,8.15,31.33,18.22,35.94c0,0,1,9.21-1,15.2-1.21,3.79-7.67,43.77-7.67,43.77s-5.75,33.63,20.62,17c17.13-10.78,28.2-29.34,33.84-41q.59-1.23,1.11-2.35a28.15,28.15,0,0,1,.53,3.75l1,38.53a58.48,58.48,0,0,1-6.06,27.52L681.36,388.9l1.31.4-.79,1.14c-7.74,11.39-20.9,37,6.19,50.05l36,4.61-1.92,9.21s-14.86,28.1-19.18,47.45a142.19,142.19,0,0,1-12.47,34.09l1.11.59c-.23.26-.47.53-.7.81a17.38,17.38,0,0,0-4.16,8.72l-4.88,6.92s-1.92,28.56,1.92,35.48c2.1,3.78,9.07,6.18,15,7.58,8.8,2.09,15.9-7,11.23-14.49l-.06-.1h-.09c-1-4.65-4.06-19.08-3.06-24.56.28-1.56.54-3.11.67-4.69a16.58,16.58,0,0,1,1.86-5.93c.16-.31.33-.61.5-.91l.52.22c1.61.69,3.2,1.34,4.71,1.91-2.34,2.13-4,6.54-2,15.61,0,0,.19,22.69,1.92,26.26s21.09,8.29,24.45,4.61-2.16-16.36-2.16-16.36l-.17.12c-1.11-7.35-2.48-20.51.89-25.69,1.36-2.09,2.68-4.25,3.86-6.27l.73-1.25h0c6.26,3.12,12.88,5.47,16.5,3.84,0,0,15.82-36.86,14.86-41.46s24.45-56.67,24.45-56.67,21.57-24-4.79-40.54c-8.37-5.27-14.47-8.81-18.9-11.2L771,379a70.92,70.92,0,0,1,1-30.66L776,333.08h0l.33-1.3s10.07-20.73,9.59-30.41a7,7,0,0,1,.25-2.23c.11.46.23.94.36,1.44a185.88,185.88,0,0,0,10.42,29.36c7.65,17.26,19,15.89,25.22,13.44a8.61,8.61,0,0,0,5.31-6.22c2.24-10.74,8.39-40.83,8.78-49.14a139.79,139.79,0,0,1,2.4-19.35C854.44,259.44,867.86,243.32,864.5,240.09Z",transform:"translate(-81.08 -63.86)",fill:"url(#b310ffb6-9937-4369-8bc9-4e3f67e27eb9)"}),L=c.createElement("path",{d:"M747.11,535.31s-2.11,4.23-5,9.31c-1.13,2-2.39,4.15-3.68,6.22-4.57,7.31,0,30.6,0,30.6l-10,1.37-10-5-1.83-16.9V548.55L728,535.8l5-5.52Z",transform:"translate(-81.08 -63.86)",fill:"#f8bdc5"}),_=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M747.11,535.31s-2.11,4.23-5,9.31a123.85,123.85,0,0,1-12.78-7.86l-.88-.62-.47-.34,5-5.52Z",transform:"translate(-81.08 -63.86)"})),C=c.createElement("path",{d:"M796,449.89s-24.21,51.61-23.29,56.18-14.16,41.11-14.16,41.11c-3.44,1.62-9.76-.71-15.72-3.8a123.23,123.23,0,0,1-13-8l-.88-.62-.53-.38,39.74-110.08L733,398.51l-2.6-1.91L714.68,385l48,8.68s1.67-.21,10.5,4.73c4.24,2.37,10.13,5.92,18.27,11.26C816.54,426.14,796,449.89,796,449.89Z",transform:"translate(-81.08 -63.86)",fill:"#073B4C"}),Z=c.createElement("g",{opacity:.03},c.createElement("path",{d:"M796,449.89s-24.21,51.61-23.29,56.18-14.16,41.11-14.16,41.11c-3.44,1.62-9.76-.71-15.72-3.8a123.23,123.23,0,0,1-13-8l-.88-.62-.53-.38,39.74-110.08L733,398.51l-2.6-1.91L714.68,385l48,8.68s1.67-.21,10.5,4.73c4.24,2.37,10.13,5.92,18.27,11.26C816.54,426.14,796,449.89,796,449.89Z",transform:"translate(-81.08 -63.86)"})),I=c.createElement("path",{d:"M722.45,544.44s-11.88-1.83-7.76,17.36c0,0,.18,22.5,1.83,26s20.1,8.22,23.29,4.57-2.06-16.21-2.06-16.21-13.47,9.82-17.13-.69S722.45,544.44,722.45,544.44Z",transform:"translate(-81.08 -63.86)",fill:"#5d3e53"}),z=c.createElement("path",{d:"M714.22,540.79a14.4,14.4,0,0,0-3.11,4.32,16.92,16.92,0,0,0-1.77,5.88c-.12,1.56-.37,3.11-.63,4.65-1.14,6.51,3.23,25.8,3.23,25.8l-17.36,2.74-6.39-6.85-1.37-15.07a54.61,54.61,0,0,0,2.74-16c0-3.93,2-7.44,4-10a27.5,27.5,0,0,1,4.63-4.59S717.88,537.59,714.22,540.79Z",transform:"translate(-81.08 -63.86)",fill:"#f8bdc5"}),A=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M714.22,540.79a14.4,14.4,0,0,0-3.11,4.32c-7.11-3.21-14.58-7.26-17.3-8.76l-.21-.11a27.5,27.5,0,0,1,4.63-4.59S717.88,537.59,714.22,540.79Z",transform:"translate(-81.08 -63.86)"})),P=c.createElement("path",{d:"M770.41,436.19S759,457.66,751.68,475.47c-4.8,11.7-14.72,39.56-21,57.3l-.92,2.62c-2.76,7.85-4.6,13.16-4.6,13.16a11.89,11.89,0,0,1-3.59-.53c-1.08-.29-2.29-.68-3.58-1.16l-1.45-.55c-1.44-.56-3-1.21-4.49-1.89-7.26-3.24-15-7.46-17.81-9l-1.06-.59A144.48,144.48,0,0,0,705.09,501c4.11-19.18,18.27-47,18.27-47l1.83-9.14-34.26-4.57c-25.81-12.9-13.27-38.33-5.9-49.62A66.66,66.66,0,0,1,689.1,385L716.51,391s4.32,1.38,13.92,5.63l4.41,2c5.38,2.47,12,5.65,20,9.73C781.82,422,770.41,436.19,770.41,436.19Z",transform:"translate(-81.08 -63.86)",fill:"#073B4C"}),B=c.createElement("path",{d:"M711.77,580.07a9.7,9.7,0,0,1-10.7,14.36c-5.61-1.39-12.26-3.77-14.26-7.52-3.65-6.85-1.83-35.17-1.83-35.17l4.8-7.08s-2.51,31.29,3.43,34,18.5,1.27,18.5,1.27Z",transform:"translate(-81.08 -63.86)",fill:"#5d3e53"}),H=c.createElement("path",{d:"M716.63,182.86a10.68,10.68,0,0,0-4.8,2.85c-1.8,2.1-2,5.1-3.22,7.61-1.9,4-6,6.45-9.64,9s-7.27,6.14-7.29,10.6c0,6.34,7,10.32,9.28,16.21,2.17,5.5,0,11.61-1.21,17.4a12.15,12.15,0,0,0-.14,5.74,12.47,12.47,0,0,0,2.14,3.87c4.41,6,9.89,11.32,12.84,18.15,2.24,5.19,2.86,10.92,3.45,16.55.85,8.1,1.7,16.35.16,24.35a2.46,2.46,0,0,0,0,1.47,2.28,2.28,0,0,0,1.17,1,24,24,0,0,0,32.49-12c2-4.53,2.77-10,6.73-12.94a3.37,3.37,0,0,1,1.61-.73,4.71,4.71,0,0,1,2.6.87c5.14,2.78,11.37,2.86,17.1,1.72,3.46-.69,7-1.92,9.29-4.62,4.51-5.36,2-13.37,2.3-20.36.24-5.59,2.39-11.49,0-16.55-2.7-5.78-10.63-8.68-11.29-15-.4-3.78,2.06-7.21,3.15-10.85,2.59-8.73-2.79-17.63-7.93-25.14a34.81,34.81,0,0,0-6.29-7.55,30.19,30.19,0,0,0-7.56-4.2c-7.53-3.17-15.21-4.77-23-6.93C731.11,181.25,724.24,180.26,716.63,182.86Z",transform:"translate(-81.08 -63.86)",fill:"#85555c"}),T=c.createElement("path",{d:"M754.88,313.32H728.38V270.38a80,80,0,0,0,1.38-12.5c0-1.41,0-2.85,0-4.3-.25-5.12-1.31-10.23-4.09-13.35-7.31-8.22,23.75-6.85,23.75-6.85a77.31,77.31,0,0,0,3.7,11.06,67.25,67.25,0,0,0,8.9,15.67,36.26,36.26,0,0,0,12.07,10.27C792.33,279.52,754.88,313.32,754.88,313.32Z",transform:"translate(-81.08 -63.86)",fill:"#f8bdc5"}),F=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M753.09,244.44a24.25,24.25,0,0,1-23.36,9.14c-.25-5.12-1.31-10.23-4.09-13.35-7.31-8.22,23.75-6.85,23.75-6.85A77.31,77.31,0,0,0,753.09,244.44Z",transform:"translate(-81.08 -63.86)"})),N=c.createElement("circle",{cx:652.78,cy:164.51,r:24.21,fill:"#f8bdc5"}),D=c.createElement("path",{d:"M834.35,269.93a143.91,143.91,0,0,0-2.28,19.18c-.37,8.23-6.23,38.07-8.37,48.72a8.45,8.45,0,0,1-5.06,6.17c-5.94,2.43-16.74,3.79-24-13.32a189.36,189.36,0,0,1-9.93-29.1,78.65,78.65,0,0,1-2-10.18l16-8.68a19.71,19.71,0,0,1,3.78,4.85c2.21,3.79,4.48,9.87,4,18.44l5,7.31s12.33-38.37,10-45.22,7.31-8.68,7.31-8.68,26.95-21,30.15-17.81S849.42,260.79,834.35,269.93Z",transform:"translate(-81.08 -63.86)",fill:"#f8bdc5"}),V=c.createElement("path",{d:"M703.26,288.2a108,108,0,0,1-4.3,10.5c-5.38,11.57-15.92,30-32.24,40.66-25.12,16.44-19.64-16.9-19.64-16.9s6.15-39.64,7.31-43.39c1.83-5.94.91-15.07.91-15.07-9.59-4.57-20.55-33.34-17.36-35.63s26,24.21,26,24.21,10.51,5,5,13.25-3.2,44.76-3.2,44.76L676.31,296a72.9,72.9,0,0,1,9.39-17.08c2-2.73,3.4-4.38,3.4-4.38Z",transform:"translate(-81.08 -63.86)",fill:"#f8bdc5"}),W=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M802.5,287.57c-3.36,1.24-16.37,6.49-17.81,14a78.65,78.65,0,0,1-2-10.18l16-8.68A19.71,19.71,0,0,1,802.5,287.57Z",transform:"translate(-81.08 -63.86)"})),U=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M703.26,288.2a108,108,0,0,1-4.3,10.5c-.62-4.52-3.17-16.08-13.26-19.81,2-2.73,3.4-4.38,3.4-4.38Z",transform:"translate(-81.08 -63.86)"})),R=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M754.88,313.32H728.38V270.38a80,80,0,0,0,1.38-12.5c5.45,5.26,4.1,13.41,4.1,13.41l14.16,32L754.88,275l-2.28-3.65,9.4-11.18a36.26,36.26,0,0,0,12.07,10.27C792.33,279.52,754.88,313.32,754.88,313.32Z",transform:"translate(-81.08 -63.86)"})),J=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M773.6,401s-20.76-1.65-38.77-2.43l-1.81-.08c-2.56-.1-5-.18-7.39-.24-17.48-.42-37.25-6.53-40.61-7.6A66.66,66.66,0,0,1,689.1,385L716.51,391s4.32,1.38,13.92,5.63L714.68,385l48,8.68s1.67-.21,10.5,4.73Z",transform:"translate(-81.08 -63.86)"})),G=c.createElement("path",{d:"M754.88,276.78l-2.28-3.65L762.74,261s20.91,10.25,26.39,8c0,0,13.25,11,13.7,17.36,0,0-19.18,6.39-18.73,16S775,332.5,775,332.5l-4,16.42a73.09,73.09,0,0,0-1,30.4l3.65,20.33s-28.78-2.28-48-2.74-41.11-7.76-41.11-7.76l11.21-23.59a60,60,0,0,0,5.78-27.28l-1-38.19s-.91-19.18-16-22.38c0,0,8.22-16.9,21-15.53,0,0,18.62-7.77,24.15-2.52s4.17,13.48,4.17,13.48l14.16,32Z",transform:"translate(-81.08 -63.86)",fill:"#EF476F"}),q=c.createElement("g",{opacity:.1},c.createElement("path",{d:"M716.39,223.38c3.67,0,6.55-3.89,10.22-3.69,1.9.1,3.53,1.31,5.1,2.4a62.25,62.25,0,0,0,19.51,9c2.71.72,5.58,1.26,8.3.6s5.27-2.8,5.58-5.59a9.53,9.53,0,0,0-.48-3.63,44.87,44.87,0,0,0-19.54-25.79c-3.8-2.33-8.44-4.11-12.65-2.65-3.8,1.31-6.25,4.87-9,7.8a34.2,34.2,0,0,1-7,5.68c-2,1.21-5,2-6.15,4.22C708.11,215.87,711.52,223.34,716.39,223.38Z",transform:"translate(-81.08 -63.86)"})),X=c.createElement("path",{d:"M716.39,222.47c3.67,0,6.55-3.89,10.22-3.69,1.9.1,3.53,1.31,5.1,2.4a62.25,62.25,0,0,0,19.51,9c2.71.72,5.58,1.26,8.3.6s5.27-2.8,5.58-5.59a9.53,9.53,0,0,0-.48-3.63,44.87,44.87,0,0,0-19.54-25.79c-3.8-2.33-8.44-4.11-12.65-2.65-3.8,1.31-6.25,4.87-9,7.8a34.2,34.2,0,0,1-7,5.68c-2,1.21-5,2-6.15,4.22C708.11,215,711.52,222.42,716.39,222.47Z",transform:"translate(-81.08 -63.86)",fill:"#85555c"}),$=c.createElement("path",{d:"M705.32,326.79s22.38,8.22,37,1.83l7.31.46s12.15,8.52,25,4.71",transform:"translate(-81.08 -63.86)",opacity:.05});function K(e,t){var n=e.title,r=e.titleId,a=g(e,["title","titleId"]);return c.createElement("svg",m({id:"2b8e3008-3352-469a-8231-8c916447ef06","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:1037.94,height:772.29,viewBox:"0 0 1037.94 772.29",ref:t,"aria-labelledby":r},a),v,void 0===n?c.createElement("title",{id:r},"time management"):n?c.createElement("title",{id:r},n):null,j,O,y,w,x,E,k,S,M,L,_,C,Z,I,z,A,P,B,H,T,F,N,D,V,W,U,R,J,G,q,X,$)}var Q=c.forwardRef(K),Y=(n.p,n(28)),ee=n(9),te=n(13),ne=n(16),re=(n(20),n(1)),ae=function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(c.useState)(e()),n=Object(ee.a)(t,2),r=n[0],a=n[1];return Object(ne.a)("resize",(function(){a(e())})),r};function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ie=c.createElement("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"});function le(e,t){var n=e.title,r=e.titleId,a=oe(e,["title","titleId"]);return c.createElement("svg",ce({viewBox:"64 64 896 896",width:50,height:50,fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,ie)}var se=c.forwardRef(le);n.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=c.createElement("path",{d:"M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z"});function he(e,t){var n=e.title,r=e.titleId,a=fe(e,["title","titleId"]);return c.createElement("svg",ue({viewBox:"64 64 896 896",width:50,height:50,fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,de)}var pe,be,me,ge=c.forwardRef(he),ve=(n.p,[{name:"Add Entry",route:b.a.ADD,icon:se},{name:"View Entries",route:b.a.LIST,icon:ge}]),je=u.c.header(pe||(pe=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    padding: 14px 40px;\n    box-shadow: -2px 0 10px ",";\n    position: sticky;\n    top: 0;\n    background: white;\n    z-index: 10;\n    ","\n    .navbar {\n        &__logo {\n            height: 50px;\n            width: auto;\n            margin-right: 5px;\n        }\n        &__title {\n            ","\n            white-space: nowrap;\n        }\n        &__nav {\n            margin-left: auto;\n        }\n        &__menu {\n            display: flex;\n            margin: 0;\n            padding: 0;\n            justify-content: center;\n        }\n        &__item {\n            display: block;\n            padding: 0;\n            margin: -20px 20px;\n            ","\n            position: relative;\n            &:before {\n                content: '';\n                position: absolute;\n                left: 0;\n                right: 0;\n                margin: auto;\n                width: 0;\n                height: 2px;\n                bottom: -20px;\n                background-color: ",";\n                transition: all 0.3s ease;\n                ","\n            }\n            a {\n                text-decoration: none;\n                display: flex;\n                align-items: center;\n                height: 100%;\n                font-weight: 500;\n                color: ",";\n            }\n            svg {\n                height: 20px;\n                width: auto;\n            }\n            &__active {\n                &:before {\n                    width: 100%;\n                }\n                a {\n                    color: ",";\n                }\n            }\n        }\n    }\n"])),(function(e){return e.theme.colors.secondary}),Object(h.b)(be||(be=Object(d.a)(["\n        padding: 10px 10px;\n    "]))),(function(e){return e.theme.fonts.paragraph}),(function(e){return e.theme.fonts.paragraph}),(function(e){return e.theme.colors.primary}),Object(h.b)(me||(me=Object(d.a)(["\n                    content: none;\n                "]))),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.primary})),Oe=function(){var e=Object(f.h)().pathname,t=function(){var e=ae().width,t=Object(c.useState)(!1),n=Object(ee.a)(t,2),r=n[0],a=n[1];return Object(ne.a)("beforeprint",(function(){a(!0)})),Object(ne.a)("afterprint",(function(){return a(!1)})),!r&&e<=te.a.mobile}();return Object(re.jsxs)(je,{children:[Object(re.jsx)(Q,{className:"navbar__logo"}),Object(re.jsx)("h2",{className:"navbar__title",children:"Time Tracker"}),Object(re.jsx)("nav",{className:"navbar__nav",children:Object(re.jsx)("ul",{className:"navbar__menu",children:ve.map((function(n){var r=n.name,a=n.route,c=n.icon;return Object(re.jsx)("li",{className:Object(Y.a)("navbar__item",e===a&&"navbar__item__active"),children:Object(re.jsx)(s.b,{to:a,children:t?Object(re.jsx)(c,{}):r})},a)}))})})]})},ye=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,55))})),we=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,54))})),xe=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,56))})),Ee=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,52))}));var ke=function(){return Object(re.jsxs)(p,{children:[Object(re.jsx)(Oe,{}),Object(re.jsx)("main",{children:Object(re.jsx)(c.Suspense,{fallback:null,children:Object(re.jsxs)(f.d,{children:[Object(re.jsx)(f.a,{exact:!0,from:"/",to:b.a.LIST}),Object(re.jsx)(f.b,{exact:!0,path:b.a.LIST,component:ye}),Object(re.jsx)(f.b,{exact:!0,path:b.a.LIST+"/:id",component:xe}),Object(re.jsx)(f.b,{exact:!0,path:b.a.ADD,component:we}),Object(re.jsx)(f.b,{component:Ee})]})})})]})},Se=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _e,Ce,Ze,Ie,ze,Ae=n(29);!function(e){e.primary="#118AB2",e.dark="#073B4C",e.secondary="#9e9e9e",e.light="#e1e1e1",e.success="#06D6A0",e.warning="#FFD166",e.error="#EF476F"}(_e||(_e={}));var Pe={title:Object(u.b)(Ce||(Ce=Object(d.a)(["\n        font-size: 1.5rem;\n        font-weight: 700;\n        color: ",";\n    "])),_e.dark),subtitle:Object(u.b)(Ze||(Ze=Object(d.a)(["\n        font-size: 1.25rem;\n        font-weight: 500;\n        color: ",";\n    "])),_e.dark),paragraph:Object(u.b)(Ie||(Ie=Object(d.a)(["\n        font-size: 1rem;\n        color: ",";\n    "])),_e.dark),link:Object(u.b)(ze||(ze=Object(d.a)(["\n        color: ",";\n        transition: color 0.3s ease;\n        will-change: color;\n        cursor: pointer;\n        &:hover {\n            color: ",";\n        }\n    "])),_e.primary,Object(h.a)(_e.primary,.9))},Be={colors:_e,media:te.a,fonts:Pe};l.a.render(Object(re.jsx)(o.a.StrictMode,{children:Object(re.jsx)(u.a,{theme:Be,children:Object(re.jsx)(s.a,{children:Object(re.jsx)(Ae.a,{children:Object(re.jsx)(ke,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Le(t,e)}))}}(),Se()}},[[50,1,2]]]);
//# sourceMappingURL=main.5e6bc37c.chunk.js.map