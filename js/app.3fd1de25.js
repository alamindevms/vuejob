(function(e){function t(t){for(var n,c,s=t[0],l=t[1],o=t[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuejob/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var b=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"557b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),i={class:"h-screen flex overflow-hidden bg-gray-100"},r={class:"flex flex-col w-0 flex-1 overflow-hidden"},c={class:"flex-1 relative overflow-y-auto focus:outline-none"},s={class:"py-6"},l={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},o={class:"py-4"};function b(e,t,a,b,u,d){var f=Object(n["y"])("MobileSidebar"),O=Object(n["y"])("DesktopSidebar"),j=Object(n["y"])("Header"),h=Object(n["y"])("router-view");return Object(n["t"])(),Object(n["g"])("div",i,[u.sidebarOpen?(Object(n["t"])(),Object(n["g"])(f,{key:0,onCloseSidebar:t[1]||(t[1]=function(e){return u.sidebarOpen=!1}),navigation:u.navigation},null,8,["navigation"])):Object(n["h"])("",!0),Object(n["i"])(O,{navigation:u.navigation},null,8,["navigation"]),Object(n["i"])("div",r,[Object(n["i"])(j,{onOpenSidebar:t[2]||(t[2]=function(e){return u.sidebarOpen=!0})}),Object(n["i"])("main",c,[Object(n["i"])("div",s,[Object(n["i"])("div",l,[Object(n["i"])("div",o,[Object(n["i"])(h)])])])])])])}a("b0c0");var u={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"},d={class:"absolute top-0 right-0 -mr-12 pt-2"},f=Object(n["i"])("span",{class:"sr-only"},"Close sidebar",-1),O=Object(n["i"])("div",{class:"flex-shrink-0 flex items-center px-4"},[Object(n["i"])("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg",alt:"Workflow"})],-1),j={class:"mt-5 flex-1 h-0 overflow-y-auto"},h={class:"px-2 space-y-1"},m={class:"list-none"},g=Object(n["i"])("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1);function p(e,t,a,i,r,c){var s=Object(n["y"])("DialogOverlay"),l=Object(n["y"])("TransitionChild"),o=Object(n["y"])("XIcon"),b=Object(n["y"])("router-link"),p=Object(n["y"])("Dialog"),y=Object(n["y"])("TransitionRoot");return Object(n["t"])(),Object(n["g"])(y,{as:"template",show:i.sidebarOpen},{default:Object(n["G"])((function(){return[Object(n["i"])(p,{as:"div",static:"",class:"fixed inset-0 flex z-40 md:hidden",onClose:t[2]||(t[2]=function(e){return i.sidebarOpen=!1}),open:i.sidebarOpen},{default:Object(n["G"])((function(){return[Object(n["i"])(l,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Object(n["G"])((function(){return[Object(n["i"])(s,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]})),_:1}),Object(n["i"])(l,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:Object(n["G"])((function(){return[Object(n["i"])("div",u,[Object(n["i"])(l,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Object(n["G"])((function(){return[Object(n["i"])("div",d,[Object(n["i"])("button",{class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[1]||(t[1]=function(t){return e.$emit("close-sidebar")})},[f,Object(n["i"])(o,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]})),_:1}),O,Object(n["i"])("div",j,[Object(n["i"])("nav",h,[Object(n["i"])("ul",m,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(a.navigation,(function(e){return Object(n["t"])(),Object(n["g"])(b,{custom:"",key:e.name,to:e.href},{default:Object(n["G"])((function(t){var a=t.href,r=(t.navigate,t.isActive);return[Object(n["i"])("li",{class:[[r&&"bg-gray-100 text-gray-900"],"flex items-center group px-2 rounded-md hover:bg-gray-50 hover:text-gray-900 "]},[(Object(n["t"])(),Object(n["g"])(Object(n["z"])(e.icon),{class:[r&&"text-gray-500","text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"],"aria-hidden":"true"},null,8,["class"])),Object(n["i"])("a",{href:a,onClick:function(e){return i.sidebarOpen=!1},class:"text-gray-600 text-sm font-medium w-full py-4"},Object(n["B"])(e.name),9,["href","onClick"])],2)]})),_:2},1032,["to"])})),128))])])])])]})),_:1}),g]})),_:1},8,["open"])]})),_:1},8,["show"])}var y=a("d511"),x=a("9510"),v={props:{navigation:{type:Array}},components:{Dialog:y["a"],DialogOverlay:y["b"],TransitionChild:y["g"],TransitionRoot:y["h"],XIcon:x["i"]},setup:function(){return{sidebarOpen:!0}}};v.render=p;var w=v,k={class:"hidden md:flex md:flex-shrink-0"},I={class:"flex flex-col w-64"},M={class:"flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"},B=Object(n["i"])("div",{class:"flex items-center flex-shrink-0 px-4"},[Object(n["i"])("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg",alt:"Workflow"})],-1),_={class:"mt-5 flex-grow flex flex-col"},S={class:"flex-1 px-2 bg-white space-y-1"},D={class:"list-none"};function G(e,t,a,i,r,c){var s=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["g"])("div",k,[Object(n["i"])("div",I,[Object(n["i"])("div",M,[B,Object(n["i"])("div",_,[Object(n["i"])("nav",S,[Object(n["i"])("ul",D,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(a.navigation,(function(e){return Object(n["t"])(),Object(n["g"])(s,{custom:"",key:e.name,to:e.href},{default:Object(n["G"])((function(t){var a=t.href,i=t.navigate,r=t.isActive;return[Object(n["i"])("li",{class:[[r&&"bg-gray-100 text-gray-900"],"flex items-center group px-2 rounded-md hover:bg-gray-50 hover:text-gray-900 "]},[(Object(n["t"])(),Object(n["g"])(Object(n["z"])(e.icon),{class:[r&&"text-gray-500","text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"],"aria-hidden":"true"},null,8,["class"])),Object(n["i"])("a",{href:a,onClick:i,class:"text-gray-600 text-sm font-medium w-full py-4"},Object(n["B"])(e.name),9,["href","onClick"])],2)]})),_:2},1032,["to"])})),128))])])])])])])}var T={name:"DesktopSidebar",props:{navigation:{type:Array}}};T.render=G;var C=T,P={class:"relative z-10 flex-shrink-0 flex h-16 bg-white shadow"},q=Object(n["i"])("span",{class:"sr-only"},"Open sidebar",-1),A={class:"flex-1 px-4 flex justify-between"},H={class:"flex-1 flex"},U={class:"w-full flex md:ml-0",action:"#",method:"GET"},W=Object(n["i"])("label",{for:"search-field",class:"sr-only"},"Search",-1),E={class:"relative w-full text-gray-400 focus-within:text-gray-600"},J={class:"absolute inset-y-0 left-0 flex items-center pointer-events-none"},z=Object(n["i"])("input",{id:"search-field",class:"block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",placeholder:"Search",type:"search",name:"search"},null,-1),R={class:"ml-4 flex items-center md:ml-6"},F={class:"bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},V=Object(n["i"])("span",{class:"sr-only"},"View notifications",-1),L=Object(n["i"])("span",{class:"sr-only"},"Open user menu",-1),Q=Object(n["i"])("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1);function N(e,t,a,i,r,c){var s=Object(n["y"])("MenuAlt2Icon"),l=Object(n["y"])("SearchIcon"),o=Object(n["y"])("BellIcon"),b=Object(n["y"])("MenuButton"),u=Object(n["y"])("MenuItem"),d=Object(n["y"])("MenuItems"),f=Object(n["y"])("Menu");return Object(n["t"])(),Object(n["g"])("div",P,[Object(n["i"])("button",{class:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:t[1]||(t[1]=function(t){return e.$emit("open-sidebar")})},[q,Object(n["i"])(s,{class:"h-6 w-6","aria-hidden":"true"})]),Object(n["i"])("div",A,[Object(n["i"])("div",H,[Object(n["i"])("form",U,[W,Object(n["i"])("div",E,[Object(n["i"])("div",J,[Object(n["i"])(l,{class:"h-5 w-5","aria-hidden":"true"})]),z])])]),Object(n["i"])("div",R,[Object(n["i"])("button",F,[V,Object(n["i"])(o,{class:"h-6 w-6","aria-hidden":"true"})]),Object(n["i"])(f,{as:"div",class:"ml-3 relative"},{default:Object(n["G"])((function(){return[Object(n["i"])("div",null,[Object(n["i"])(b,{class:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:Object(n["G"])((function(){return[L,Q]})),_:1})]),Object(n["i"])(n["c"],{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Object(n["G"])((function(){return[Object(n["i"])(d,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:Object(n["G"])((function(){return[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.userNavigation,(function(e){return Object(n["t"])(),Object(n["g"])(u,{key:e.name},{default:Object(n["G"])((function(t){var a=t.active;return[Object(n["i"])("a",{href:e.href,class:[a?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"]},Object(n["B"])(e.name),11,["href"])]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})])])])}var X=a("fd7f"),$=[{name:"Dashboard",href:"#",icon:x["e"],current:!0},{name:"Team",href:"#",icon:x["h"],current:!1},{name:"Projects",href:"#",icon:x["d"],current:!1},{name:"Calendar",href:"#",icon:x["b"],current:!1},{name:"Documents",href:"#",icon:x["f"],current:!1},{name:"Reports",href:"#",icon:x["c"],current:!1}],K=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}],Y={components:{Menu:y["c"],MenuButton:y["d"],MenuItem:y["e"],MenuItems:y["f"],BellIcon:x["a"],MenuAlt2Icon:x["g"],SearchIcon:X["g"]},setup:function(){return{navigation:$,userNavigation:K}}};Y.render=N;var Z=Y,ee=[{name:"Dashboard",href:"/",icon:x["e"],current:!0},{name:"Team",href:"/team",icon:x["h"],current:!1},{name:"Projects",href:"/projects",icon:x["d"],current:!1},{name:"Calendar",href:"/calendar",icon:x["b"],current:!1},{name:"Documents",href:"/documents",icon:x["f"],current:!1},{name:"Reports",href:"/reports",icon:x["c"],current:!1}],te={components:{MobileSidebar:w,DesktopSidebar:C,Header:Z},data:function(){var e=Object(n["w"])(!1);return{sidebarOpen:e,navigation:ee}}};te.render=b;var ae=te,ne=(a("557b"),a("6c02")),ie={class:"w-full mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"},re={class:"lg:col-span-12 xl:col-span-8"},ce={class:"px-4 sm:px-0"},se={class:"sm:hidden"},le=Object(n["i"])("label",{for:"question-tabs",class:"sr-only"},"Select a tab",-1),oe={id:"question-tabs",class:"block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"},be={class:"hidden sm:block"},ue={class:"relative z-0 rounded-lg shadow flex divide-x divide-gray-200","aria-label":"Tabs"},de={class:"mt-4"},fe=Object(n["i"])("h1",{class:"sr-only"},"Recent questions",-1),Oe={class:"space-y-4"},je={class:"flex space-x-3"},he={class:"flex-shrink-0"},me={class:"min-w-0 flex-1"},ge={class:"text-sm font-medium text-gray-900"},pe={class:"text-sm text-gray-500"},ye={class:"flex-shrink-0 self-center flex"},xe=Object(n["i"])("span",{class:"sr-only"},"Open options",-1),ve={class:"py-1"},we=Object(n["i"])("span",null,"Add to favorites",-1),ke=Object(n["i"])("span",null,"Embed",-1),Ie=Object(n["i"])("span",null,"Report content",-1),Me={class:"mt-6 flex justify-between space-x-8"},Be={class:"flex space-x-6"},_e={class:"inline-flex items-center text-sm"},Se={class:"inline-flex space-x-2 text-gray-400 hover:text-gray-500"},De={class:"font-medium text-gray-900"},Ge=Object(n["i"])("span",{class:"sr-only"},"likes",-1),Te={class:"inline-flex items-center text-sm"},Ce={class:"inline-flex space-x-2 text-gray-400 hover:text-gray-500"},Pe={class:"font-medium text-gray-900"},qe=Object(n["i"])("span",{class:"sr-only"},"replies",-1),Ae={class:"inline-flex items-center text-sm"},He={class:"inline-flex space-x-2 text-gray-400 hover:text-gray-500"},Ue={class:"font-medium text-gray-900"},We=Object(n["i"])("span",{class:"sr-only"},"views",-1),Ee={class:"flex text-sm"},Je={class:"inline-flex items-center text-sm"},ze={class:"inline-flex space-x-2 text-gray-400 hover:text-gray-500"},Re=Object(n["i"])("span",{class:"font-medium text-gray-900"},"Share",-1),Fe={class:"hidden xl:block xl:col-span-4"},Ve={class:"space-y-4"},Le={"aria-labelledby":"who-to-follow-heading"},Qe={class:"bg-white rounded-lg shadow"},Ne={class:"p-6"},Xe=Object(n["i"])("h2",{id:"who-to-follow-heading",class:"text-base font-medium text-gray-900"}," Who to follow ",-1),$e={class:"mt-6 flow-root"},Ke={class:"-my-4 divide-y divide-gray-200"},Ye={class:"flex-shrink-0"},Ze={class:"min-w-0 flex-1"},et={class:"text-sm font-medium text-gray-900"},tt={class:"text-sm text-gray-500"},at={class:"flex-shrink-0"},nt={type:"button",class:"inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"},it=Object(n["i"])("span",null," Follow ",-1),rt=Object(n["i"])("div",{class:"mt-6"},[Object(n["i"])("a",{href:"#",class:"w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," View all ")],-1),ct={"aria-labelledby":"trending-heading"},st={class:"bg-white rounded-lg shadow"},lt={class:"p-6"},ot=Object(n["i"])("h2",{id:"trending-heading",class:"text-base font-medium text-gray-900"}," Trending ",-1),bt={class:"mt-6 flow-root"},ut={class:"-my-4 divide-y divide-gray-200"},dt={class:"flex-shrink-0"},ft={class:"min-w-0 flex-1"},Ot={class:"text-sm text-gray-800"},jt={class:"mt-2 flex"},ht={class:"inline-flex items-center text-sm"},mt={class:"inline-flex space-x-2 text-gray-400 hover:text-gray-500"},gt={class:"font-medium text-gray-900"},pt=Object(n["i"])("div",{class:"mt-6"},[Object(n["i"])("a",{href:"#",class:"w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," View all ")],-1);function yt(e,t,a,i,r,c){var s=Object(n["y"])("DotsVerticalIcon"),l=Object(n["y"])("MenuButton"),o=Object(n["y"])("StarIcon"),b=Object(n["y"])("MenuItem"),u=Object(n["y"])("CodeIcon"),d=Object(n["y"])("FlagIcon"),f=Object(n["y"])("MenuItems"),O=Object(n["y"])("Menu"),j=Object(n["y"])("ThumbUpIcon"),h=Object(n["y"])("ChatAltIcon"),m=Object(n["y"])("EyeIcon"),g=Object(n["y"])("ShareIcon"),p=Object(n["y"])("PlusIcon");return Object(n["t"])(),Object(n["g"])("div",ie,[Object(n["i"])("div",re,[Object(n["i"])("div",ce,[Object(n["i"])("div",se,[le,Object(n["i"])("select",oe,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.tabs,(function(e){return Object(n["t"])(),Object(n["g"])("option",{key:e.name,selected:e.current},Object(n["B"])(e.name),9,["selected"])})),128))])]),Object(n["i"])("div",be,[Object(n["i"])("nav",ue,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.tabs,(function(e,t){return Object(n["t"])(),Object(n["g"])("a",{key:e.name,href:e.href,"aria-current":e.current?"page":void 0,class:[e.current?"text-gray-900":"text-gray-500 hover:text-gray-700",0===t?"rounded-l-lg":"",t===i.tabs.length-1?"rounded-r-lg":"","group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"]},[Object(n["i"])("span",null,Object(n["B"])(e.name),1),Object(n["i"])("span",{"aria-hidden":"true",class:[e.current?"bg-rose-500":"bg-transparent","absolute inset-x-0 bottom-0 h-0.5"]},null,2)],10,["href","aria-current"])})),128))])])]),Object(n["i"])("div",de,[fe,Object(n["i"])("ul",Oe,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.questions,(function(e){return Object(n["t"])(),Object(n["g"])("li",{key:e.id,class:"bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"},[Object(n["i"])("article",{"aria-labelledby":"question-title-"+e.id},[Object(n["i"])("div",null,[Object(n["i"])("div",je,[Object(n["i"])("div",he,[Object(n["i"])("img",{class:"h-10 w-10 rounded-full",src:e.author.imageUrl,alt:""},null,8,["src"])]),Object(n["i"])("div",me,[Object(n["i"])("p",ge,[Object(n["i"])("a",{href:e.author.href,class:"hover:underline"},Object(n["B"])(e.author.name),9,["href"])]),Object(n["i"])("p",pe,[Object(n["i"])("a",{href:e.href,class:"hover:underline"},[Object(n["i"])("time",{datetime:e.datetime},Object(n["B"])(e.date),9,["datetime"])],8,["href"])])]),Object(n["i"])("div",ye,[Object(n["i"])(O,{as:"div",class:"relative inline-block text-left"},{default:Object(n["G"])((function(){return[Object(n["i"])("div",null,[Object(n["i"])(l,{class:"-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"},{default:Object(n["G"])((function(){return[xe,Object(n["i"])(s,{class:"h-5 w-5","aria-hidden":"true"})]})),_:1})]),Object(n["i"])(n["c"],{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Object(n["G"])((function(){return[Object(n["i"])(f,{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:Object(n["G"])((function(){return[Object(n["i"])("div",ve,[Object(n["i"])(b,null,{default:Object(n["G"])((function(e){var t=e.active;return[Object(n["i"])("a",{href:"#",class:[t?"bg-gray-100 text-gray-900":"text-gray-700","flex px-4 py-2 text-sm"]},[Object(n["i"])(o,{class:"mr-3 h-5 w-5 text-gray-400","aria-hidden":"true"}),we],2)]})),_:1}),Object(n["i"])(b,null,{default:Object(n["G"])((function(e){var t=e.active;return[Object(n["i"])("a",{href:"#",class:[t?"bg-gray-100 text-gray-900":"text-gray-700","flex px-4 py-2 text-sm"]},[Object(n["i"])(u,{class:"mr-3 h-5 w-5 text-gray-400","aria-hidden":"true"}),ke],2)]})),_:1}),Object(n["i"])(b,null,{default:Object(n["G"])((function(e){var t=e.active;return[Object(n["i"])("a",{href:"#",class:[t?"bg-gray-100 text-gray-900":"text-gray-700","flex px-4 py-2 text-sm"]},[Object(n["i"])(d,{class:"mr-3 h-5 w-5 text-gray-400","aria-hidden":"true"}),Ie],2)]})),_:1})])]})),_:1})]})),_:1})]})),_:1})])]),Object(n["i"])("h2",{id:"question-title-"+e.id,class:"mt-4 text-base font-medium text-gray-900"},Object(n["B"])(e.title),9,["id"])]),Object(n["i"])("div",{class:"mt-2 text-sm text-gray-700 space-y-4",innerHTML:e.body},null,8,["innerHTML"]),Object(n["i"])("div",Me,[Object(n["i"])("div",Be,[Object(n["i"])("span",_e,[Object(n["i"])("button",Se,[Object(n["i"])(j,{class:"h-5 w-5","aria-hidden":"true"}),Object(n["i"])("span",De,Object(n["B"])(e.likes),1),Ge])]),Object(n["i"])("span",Te,[Object(n["i"])("button",Ce,[Object(n["i"])(h,{class:"h-5 w-5","aria-hidden":"true"}),Object(n["i"])("span",Pe,Object(n["B"])(e.replies),1),qe])]),Object(n["i"])("span",Ae,[Object(n["i"])("button",He,[Object(n["i"])(m,{class:"h-5 w-5","aria-hidden":"true"}),Object(n["i"])("span",Ue,Object(n["B"])(e.views),1),We])])]),Object(n["i"])("div",Ee,[Object(n["i"])("span",Je,[Object(n["i"])("button",ze,[Object(n["i"])(g,{class:"h-5 w-5","aria-hidden":"true"}),Re])])])])],8,["aria-labelledby"])])})),128))])])]),Object(n["i"])("aside",Fe,[Object(n["i"])("div",Ve,[Object(n["i"])("section",Le,[Object(n["i"])("div",Qe,[Object(n["i"])("div",Ne,[Xe,Object(n["i"])("div",$e,[Object(n["i"])("ul",Ke,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.whoToFollow,(function(e){return Object(n["t"])(),Object(n["g"])("li",{key:e.handle,class:"flex items-center py-4 space-x-3"},[Object(n["i"])("div",Ye,[Object(n["i"])("img",{class:"h-8 w-8 rounded-full",src:e.imageUrl,alt:""},null,8,["src"])]),Object(n["i"])("div",Ze,[Object(n["i"])("p",et,[Object(n["i"])("a",{href:e.href},Object(n["B"])(e.name),9,["href"])]),Object(n["i"])("p",tt,[Object(n["i"])("a",{href:e.href},Object(n["B"])("@"+e.handle),9,["href"])])]),Object(n["i"])("div",at,[Object(n["i"])("button",nt,[Object(n["i"])(p,{class:"-ml-1 mr-0.5 h-5 w-5 text-rose-400","aria-hidden":"true"}),it])])])})),128))])]),rt])])]),Object(n["i"])("section",ct,[Object(n["i"])("div",st,[Object(n["i"])("div",lt,[ot,Object(n["i"])("div",bt,[Object(n["i"])("ul",ut,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(i.trendingPosts,(function(e){return Object(n["t"])(),Object(n["g"])("li",{key:e.id,class:"flex py-4 space-x-3"},[Object(n["i"])("div",dt,[Object(n["i"])("img",{class:"h-8 w-8 rounded-full",src:e.user.imageUrl,alt:e.user.name},null,8,["src","alt"])]),Object(n["i"])("div",ft,[Object(n["i"])("p",Ot,Object(n["B"])(e.body),1),Object(n["i"])("div",jt,[Object(n["i"])("span",ht,[Object(n["i"])("button",mt,[Object(n["i"])(h,{class:"h-5 w-5","aria-hidden":"true"}),Object(n["i"])("span",gt,Object(n["B"])(e.comments),1)])])])])])})),128))])]),pt])])])])])])}var xt=[{name:"Recent",href:"#",current:!0},{name:"Most Liked",href:"#",current:!1},{name:"Most Answers",href:"#",current:!1}],vt=[{id:"81614",likes:"29",replies:"11",views:"2.7k",author:{name:"Dries Vincent",imageUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",href:"#"},date:"December 9 at 11:43 AM",datetime:"2020-12-09T11:43:00",href:"#",title:"What would you have done differently if you ran Jurassic Park?",body:"\n          <p>\n            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.\n          </p>\n          <p>\n            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;\n          </p>\n        "}],wt=[{name:"Leonard Krasner",handle:"leonardkrasner",href:"#",imageUrl:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}],kt=[{id:1,user:{name:"Floyd Miles",imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},body:"What books do you have on your bookshelf just to look smarter than you actually are?",comments:291}],It={components:{Menu:y["c"],MenuButton:y["d"],MenuItem:y["e"],MenuItems:y["f"],ChatAltIcon:X["a"],CodeIcon:X["b"],DotsVerticalIcon:X["c"],EyeIcon:X["d"],FlagIcon:X["e"],ShareIcon:X["h"],StarIcon:X["i"],ThumbUpIcon:X["j"],PlusIcon:X["f"]},setup:function(){return{tabs:xt,questions:vt,whoToFollow:wt,trendingPosts:kt}}};It.render=yt;var Mt=It,Bt={class:"space-y-4"},_t=Object(n["i"])("div",{class:"bg-white h-full rounded shadow px-4 py-6"},[Object(n["i"])("h1",{class:"text-lg text-gray-800 font-bold"},"This is an popular page")],-1),St=Object(n["i"])("div",{class:"bg-gray-200 h-full rounded px-4 py-6"},null,-1);function Dt(e,t){return Object(n["t"])(),Object(n["g"])("div",Bt,[_t,St])}const Gt={};Gt.render=Dt;var Tt=Gt,Ct={class:"space-y-4"},Pt=Object(n["i"])("div",{class:"bg-white h-full rounded shadow px-4 py-6"},[Object(n["i"])("h1",{class:"text-lg text-gray-800 font-bold"},"This is an document page")],-1),qt=Object(n["i"])("div",{class:"bg-gray-200 h-full rounded px-4 py-6"},null,-1);function At(e,t){return Object(n["t"])(),Object(n["g"])("div",Ct,[Pt,qt])}const Ht={};Ht.render=At;var Ut=Ht,Wt=[{path:"/",name:"Home",component:Mt},{path:"/projects",name:"Projects",component:Tt},{path:"/documents",name:"Documents",component:Ut}],Et=Object(ne["a"])({history:Object(ne["b"])("/vuejob/"),routes:Wt}),Jt=Et;Object(n["f"])(ae).use(Jt).mount("#app")}});
//# sourceMappingURL=app.3fd1de25.js.map