(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(15),r=e.n(c),o=e(6),a=e(3),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content," ",Object(u.jsx)("button",{onClick:e,children:c})]})},j=e(4),l=e.n(j),f="/api/notes",b=function(){var t=l.a.get(f),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},d=function(t){return l.a.post(f,t).then((function(t){return t.data}))},m=function(t,n){return l.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},p=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},O=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app Learnt from Full Stack open"})]})},h=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],c=n[1],r=Object(i.useState)(""),j=Object(a.a)(r,2),l=j[0],f=j[1],h=Object(i.useState)(!0),v=Object(a.a)(h,2),x=v[0],g=v[1],S=Object(i.useState)(null),k=Object(a.a)(S,2),w=k[0],y=k[1];Object(i.useEffect)((function(){b().then((function(t){c(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(p,{message:w}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(u.jsxs)("p",{children:["Curently showing ",x?"all":"important"]}),Object(u.jsx)("ul",{children:N.map((function(t,n){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),r=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});m(t,r).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(r){y("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:l,date:new Date,important:Math.random()<.5};d(n).then((function(t){c(e.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:l,onChange:function(t){f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(O,{})]})};e(39);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.14ea764a.chunk.js.map