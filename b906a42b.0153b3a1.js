(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(90)),i={id:"upgrading",title:"Upgrading",sidebar_label:"Upgrading from V2"},s={unversionedId:"upgrading",id:"upgrading",isDocsHomePage:!1,title:"Upgrading",description:"Just like V2, V3 is available in the PowerShell gallery. Due to its nature, it's only",source:"@site/docs/upgrading.md",slug:"/upgrading",permalink:"/oh-my-posh3/docs/upgrading",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/upgrading.md",version:"current",sidebar_label:"Upgrading from V2",sidebar:"docs",previous:{title:"Introduction",permalink:"/oh-my-posh3/docs/"},next:{title:"Manual Installation",permalink:"/oh-my-posh3/docs/installation"}},l=[{value:"V2&#39;s problem statement",id:"v2s-problem-statement",children:[]},{value:"Enter V3",id:"enter-v3",children:[]},{value:"Import",id:"import",children:[]},{value:"Configuration",id:"configuration",children:[{value:"I use an out-of-the-box theme",id:"i-use-an-out-of-the-box-theme",children:[]},{value:"I use a custom theme/settings",id:"i-use-a-custom-themesettings",children:[]},{value:"I have no idea just yet",id:"i-have-no-idea-just-yet",children:[]}]},{value:"All set, now what",id:"all-set-now-what",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Just like V2, V3 is available in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.powershellgallery.com/packages/oh-my-posh"}),"PowerShell gallery"),". Due to its nature, it's only\navailable as a prerelease while we work out the kinks and get it on par with V2."),Object(r.b)("h2",{id:"v2s-problem-statement"},"V2's problem statement"),Object(r.b)("p",null,"V2 has Powershell module files as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh/tree/master/Themes"}),"themes"),". That way of working was inspired from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ohmyzsh/ohmyzsh"}),"oh-my-zsh")," and other\nprompt rendering tools, but that approach has a few important downsides."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"hard to extend/adjust when you're not proficient"),Object(r.b)("li",{parentName:"ul"},"the need to expose a lot of functions/settings to allow ease of personalization"),Object(r.b)("li",{parentName:"ul"},"limited to Powershell")),Object(r.b)("h2",{id:"enter-v3"},"Enter V3"),Object(r.b)("p",null,"This bring us to the first change, to allow a cross platform experience, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/"}),"Oh My Posh V3")," is written entirely in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://golang.org/"}),"Go"),".\nThat way, cross platform binaries can be shipped which render the same prompt using the same config anywhere."),Object(r.b)("p",null,"The configuration is changed from ",Object(r.b)("inlineCode",{parentName:"p"},"$ThemeSettings")," towards a ",Object(r.b)("inlineCode",{parentName:"p"},".json")," file that only contains the configuration for the\nblocks and segments you want to render. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/#concept"}),"concept")," for more context on that part."),Object(r.b)("p",null,"Let's have a look at the V2 commands and how to move towards V3."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("p",null,"Stays the same! Alright. All you need to do is update to the ",Object(r.b)("strong",{parentName:"p"},"beta"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Update-Module -Name oh-my-posh -AllowPrerelease -Scope CurrentUser\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Here we have a few options. If you're using an out-of-the box theme, you can simply change the current command to the\nnew one, provided your V2 theme has already been added to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"V3"),"."),Object(r.b)("h3",{id:"i-use-an-out-of-the-box-theme"},"I use an out-of-the-box theme"),Object(r.b)("p",null,"Change the current prompt setting function to the new one."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"# Set-Theme Agnoster\nSet-PoshPrompt -Theme agnoster\n")),Object(r.b)("h3",{id:"i-use-a-custom-themesettings"},"I use a custom theme/settings"),Object(r.b)("p",null,"The first thing to do is to look for the theme you based your theme on.\nIf you don't remember which one, preview them all and take the one closest to yours."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Get-PoshThemes\n")),Object(r.b)("p",null,"If you see one you like, set it, export its config so you can customize/extend the blocks ans segmnts."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme jandedobbeleer\nWrite-PoshTheme | Out-File -FilePath ~/.go-my-posh.json\n")),Object(r.b)("p",null,"Adjust the config (",Object(r.b)("inlineCode",{parentName:"p"},"~/.go-my-posh.json"),") to your liking by going through the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/configure"}),"configuration")," guide.\nSet your custom theme and enjoy."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme  ~/.go-my-posh.json\n")),Object(r.b)("h3",{id:"i-have-no-idea-just-yet"},"I have no idea just yet"),Object(r.b)("p",null,"Great! There's an option for that too. You can easily list all available themes and pick the one you like best."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Get-PoshThemes\n")),Object(r.b)("p",null,"Choose and set the one you like."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"Set-PoshPrompt -Theme jandedobbeleer\n")),Object(r.b)("h2",{id:"all-set-now-what"},"All set, now what"),Object(r.b)("p",null,"You can either tweak the theme to your liking, add segments or ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/issues/new"}),"submit an issue")," for new functionality.\nDo not hesitate to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/issues/new"}),"ask for assistance")," when you notice an issue or unexpected behavior."))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,m=h["".concat(i,".").concat(u)]||h[u]||b[u]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);