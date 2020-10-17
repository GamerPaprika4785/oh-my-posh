(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(90)),i={id:"session",title:"Session",sidebar_label:"Session"},c={unversionedId:"session",id:"session",isDocsHomePage:!1,title:"Session",description:"What",source:"@site/docs/segment-session.md",slug:"/session",permalink:"/oh-my-posh3/docs/session",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-session.md",version:"current",sidebar_label:"Session",sidebar:"docs",previous:{title:"Root",permalink:"/oh-my-posh3/docs/root"},next:{title:"Shell",permalink:"/oh-my-posh3/docs/shell"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Show the current user and host name."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "session",\n  "style": "diamond",\n  "foreground": "#ffffff",\n  "background": "#c386f1",\n  "leading_diamond": "\\uE0B6",\n  "trailing_diamond": "\\uE0B0"\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"user_info_separator: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - text/icon to put in between the user and host name - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"@")),Object(a.b)("li",{parentName:"ul"},"user_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - override the foreground color of the user name"),Object(a.b)("li",{parentName:"ul"},"host_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - override the foreground color of the host name"),Object(a.b)("li",{parentName:"ul"},"display_user: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - display the user name or not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"display_host: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - display the host name or not - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true"))))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);