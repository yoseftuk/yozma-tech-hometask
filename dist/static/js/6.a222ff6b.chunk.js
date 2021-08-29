(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[6],{55:function(n,t,e){"use strict";e.r(t);var a,r,c,i=e(0),o=e(9),l=e(2),s=e(28),d=e(4),u=e(5),b=u.c.ul(a||(a=Object(d.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    li {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        width: 35px;\n        height: 35px;\n        font-size: 14px;\n        padding: 0;\n        margin: 24px 6px 0 6px;\n        &.pagination {\n            &__button {\n                cursor: pointer;\n                color: ",";\n                border: 1px solid ",";\n                border-radius: 8px;\n                &__active {\n                    border: 1px solid ",";\n                    background-color: ",";\n                    color: white;\n                }\n            }\n            &__dots {\n                color: ",";\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary})),p=e(1),h=function(n){var t=n.page,e=n.setPage,a=n.lastPage;return Object(p.jsxs)(b,{children:[t>2?Object(p.jsx)("li",{className:Object(s.a)("pagination__button",0===t&&"pagination__button__active"),onClick:function(){return e(1)},children:"1"}):null,t>3?Object(p.jsx)("li",{className:"pagination__dots",children:"..."}):null,[-2,-1,0,1,2].map((function(n){return t+n>a||t+n<0?null:Object(p.jsx)("li",{onClick:function(){return e(t+n)},className:Object(s.a)("pagination__button",t===t+n&&"pagination__button__active"),children:t+n+1},n)})),a-t>3?Object(p.jsx)("li",{className:"pagination__dots",children:"..."}):null,a-t>2?Object(p.jsx)("li",{className:Object(s.a)("pagination__button",t===a&&"pagination__button__active"),onClick:function(){return e(a)},children:a+1}):null]})},_=e(11),j=u.c.table(r||(r=Object(d.a)(["\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n    box-shadow: 4px 10px 20px #e1e1e1, 0 0 10px #f1f1f1;\n\n    .data-table {\n        &__head {\n            background-color: ",";\n            color: white;\n        }\n        &__th,\n        &__td {\n            text-align: left;\n            padding: 14px;\n            cursor: pointer;\n        }\n        &__tr {\n            border-bottom: 1px solid ",";\n            transition: color 0.3s ease;\n            will-change: color;\n            &:hover {\n                color: ",";\n            }\n        }\n    }\n    ","\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.primary}),Object(_.b)(c||(c=Object(d.a)(['\n          display: block;\n          box-shadow: none;\n          .data-table {\n            &__head {\n                display: none;\n            }\n            &__body {\n                display: block;\n            }\n            &__tr {\n                display: block;\n                padding: 14px 0;\n            }\n            &__td {\n                display: block;\n                padding: 10px 0;\n                &:before {\n                     content: attr(data-label)": ";\n                     font-weight: 700;\n                }\n            }\n          }\n          ']))));var m,x,f=function(n){var t=n.labels,e=n.keys,a=n.render,r=n.data,c=n.link,s=Object(i.useState)(0),d=Object(o.a)(s,2),u=d[0],b=d[1],_=Object(l.g)(),m=Object(i.useMemo)((function(){return r.slice(10*u,10*(u+1))}),[u]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(j,{className:"data-table",children:[Object(p.jsx)("thead",{className:"data-table__head",children:Object(p.jsx)("tr",{children:t.map((function(n){return Object(p.jsx)("th",{className:"data-table__th",children:n},n)}))})}),Object(p.jsx)("tbody",{className:"data-table__body",children:m.map((function(n,r){return Object(p.jsx)("tr",{className:"data-table__tr",onClick:function(){return _.push(c(n))},children:e.map((function(e,r){return Object(p.jsx)("td",{"data-label":t[r],className:"data-table__td",children:a&&e in a?a[e](n):n[e]},r)}))},r)}))})]}),Object(p.jsx)(h,{page:u,setPage:b,lastPage:Math.ceil(r.length/10-1)})]})},g=e(10),O=e(29),y=u.c.div(m||(m=Object(d.a)(["\n    max-width: 920px;\n    margin: auto;\n    .list {\n        &__title {\n            ",";\n        }\n    }\n"])),(function(n){return n.theme.fonts.title})),k=u.c.div(x||(x=Object(d.a)(["\n    ","\n    color: ",";\n"])),(function(n){return n.theme.fonts.paragraph}),(function(n){return n.theme.colors.secondary}));t.default=function(){var n=Object(O.b)().notes;return Object(p.jsxs)(y,{children:[Object(p.jsx)("h1",{className:"list-title",children:"Entries List"}),n.length?Object(p.jsx)(f,{labels:["ID","User","Time","Note"],keys:["id","user","time","note"],data:n,link:function(n){var t=n.id;return"".concat(g.a.LIST,"/").concat(t)},render:{note:function(n){var t=n.note;return Object(s.b)(t,30)},user:function(n){var t=n.user;return null===t||void 0===t?void 0:t.name},time:function(n){var t=n.time;return Object(s.c)(+t)}}}):Object(p.jsx)(k,{children:"No data yet"})]})}}}]);
//# sourceMappingURL=6.a222ff6b.chunk.js.map