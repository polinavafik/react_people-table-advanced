(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=(c(36),c(37),c(8)),r=c(3),s=c(1),l=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(5),o=c(0),j=(c(39),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})}),d=["Name","Sex","Born","Died","Mother","Father"],u=["16","17","18","19","20"],b=c(10),h=c.n(b),O=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"".concat(t.slug),replace:!0,className:h()({"has-text-danger":"f"===t.sex,"has-text-link":"m"===t.sex}),children:t.name})},x=function(e){var t=e.person,c=e.selectedPerson;return Object(s.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":c===t.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(O,{person:t})}),Object(s.jsx)("td",{children:t.sex}),Object(s.jsx)("td",{children:t.born}),Object(s.jsx)("td",{children:t.died}),Object(s.jsx)("td",{children:t.mother?Object(s.jsx)(O,{person:t.mother}):t.motherName||"-"}),Object(s.jsx)("td",{children:t.father?Object(s.jsx)(O,{person:t.father}):t.fatherName||"-"})]})},m=c(15),p=c(27);function f(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var v=["children","params"],N=function(e){var t=e.children,c=e.params,n=Object(p.a)(e,v),r=Object(a.d)(),l=Object(i.a)(r,1)[0];return Object(s.jsx)(a.b,Object(m.a)(Object(m.a)({to:{search:f(l,c)}},n),{},{children:t}))},g=function(e){var t=e.sortBy,c=Object(a.d)(),n=Object(i.a)(c,1)[0],r="desc"===n.get("order"),l=n.get("sort")||"",o={order:t!==l||r?null:"desc",sort:t===l&&r?null:t};return Object(s.jsx)(N,{params:o,children:Object(s.jsx)("span",{className:"icon",children:Object(s.jsx)("i",{className:h()("fas",{"fa-sort":l!==t,"fa-sort-up":l===t&&!r,"fa-sort-down":l===t&&r})})})})},y=function(e){var t=e.people,c=Object(r.r)().personSlug,n=void 0===c?"":c;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:d.map((function(e){return"Mother"!==e&&"Father"!==e?Object(s.jsx)("th",{children:Object(s.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(s.jsx)(g,{sortBy:e.toLocaleLowerCase()})]})}):Object(s.jsx)("th",{children:e})}))})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(x,{person:e,selectedPerson:n},e.slug)}))})]})};var w=c(4),S=c(7),k="https://mate-academy.github.io/react_people-table/api/people.json";function L(e){return new Promise((function(t){return setTimeout(t,e)}))}function P(){return(P=Object(S.a)(Object(w.a)().mark((function e(){return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(500).then((function(){return fetch(k)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=c(9),A=function(e){return e.Sex="sex",e.Query="query",e.Centuries="centuries",e.Sort="sort",e.Order="order",e}({}),F=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.d)(),l=Object(i.a)(r,2),j=l[0],d=l[1],b=j.get(A.Sex),O=j.getAll(A.Centuries);return Object(s.jsxs)("nav",{className:"panel",children:[Object(s.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(s.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(s.jsx)(N,{className:h()({"is-active":!b}),params:{sex:null},children:"All"}),Object(s.jsx)(N,{className:h()({"is-active":"m"===b}),params:{sex:"m"},children:"Male"}),Object(s.jsx)(N,{className:h()({"is-active":"f"===b}),params:{sex:"f"},children:"Female"})]}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("p",{className:"control has-icons-left",children:[Object(s.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:c,onChange:function(e){d(f(j,{query:e.target.value||null})),n(e.target.value)}}),Object(s.jsx)("span",{className:"icon is-left",children:Object(s.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(s.jsx)("div",{className:"level-left",children:u.map((function(e){var t=O.includes(e);return Object(s.jsx)(N,{"data-cy":"century",className:h()("button","mr-1",{"is-info":t}),params:{centuries:t?O.filter((function(t){return t!==e})):[].concat(Object(C.a)(O),[e])},children:e},e)}))}),Object(s.jsx)("div",{className:"level-right ml-4",children:Object(s.jsx)(N,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsx)(N,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,query:null,centuries:null},onClick:function(){n("")},children:"Reset all filters"})})]})},M=function(e,t,c,n,a,r){var s=Object(C.a)(e);if(t&&(s=s.filter((function(e){return e.sex===t}))),n.length){s=s.filter((function(e){return n.includes(function(e){return Math.ceil(e.born/100)}(e).toString())}))}if(c){var l=c.toLocaleLowerCase();s=s.filter((function(e){return[e.name,e.motherName||"",e.fatherName||""].join(" ").toLocaleLowerCase().includes(l)}))}return a&&(s.sort((function(e,t){switch(a){case"name":case"sex":return e[a].localeCompare(t[a]);case"born":case"died":return e[a]-t[a];default:return 0}})),"desc"===r&&s.reverse()),s},E=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(!1),l=Object(i.a)(r,2),d=l[0],u=l[1],b=Object(o.useState)(!1),h=Object(i.a)(b,2),O=h[0],x=h[1],p=Object(a.d)(),f=Object(i.a)(p,1)[0],v=f.get(A.Sex),N=f.get(A.Query),g=f.getAll(A.Centuries),w=f.get(A.Sort),S=f.get(A.Order),k=M(c,v,N,g,w,S);Object(o.useEffect)((function(){u(!0),function(){return P.apply(this,arguments)}().then((function(e){n(function(e){return e.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){x(!0)})).finally((function(){u(!1)}))}),[]);var L=O&&!d,C=!c.length&&!d&&!O,E=!!c.length&&!O,_=!k.length&&!d&&!O;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(s.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(s.jsx)(F,{})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsxs)("div",{className:"box table-container",children:[d&&Object(s.jsx)(j,{}),L&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),C&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),_&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people matching the current search criteria"}),E&&!_&&Object(s.jsx)(y,{people:k})]})})]})})]})},_=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},B=function(){var e=function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})};return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(s.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})})},T=(c(40),function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(B,{}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(r.b,{})})})]})}),q=function(){return Object(s.jsx)(a.a,{children:Object(s.jsx)(r.e,{children:Object(s.jsxs)(r.c,{path:"/",element:Object(s.jsx)(T,{}),children:[Object(s.jsx)(r.c,{index:!0,element:Object(s.jsx)(l,{})}),Object(s.jsx)(r.c,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.c,{path:"people",element:Object(s.jsx)(E,{}),children:Object(s.jsx)(r.c,{path:":personSlug"})}),Object(s.jsx)(r.c,{path:"*",element:Object(s.jsx)(_,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(q,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.6983e394.chunk.js.map