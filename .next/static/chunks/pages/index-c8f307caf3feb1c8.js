(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(85)}])},753:function(e,s,a){"use strict";a.d(s,{h:function(){return o}});var t=a(5893),l=a(9008),r=a.n(l),i=a(2962);let n={site_name:"Starter",title:"Nextjs Starter",description:"Starter code for your Nextjs Boilerplate with Tailwind CSS",locale:"en"},o=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"https://pbs.twimg.com/media/FX9gdMVXkAQ6bY4.png"},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https://pbs.twimg.com/media/FX9gdMVXkAQ6bY4.png"},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https://pbs.twimg.com/media/FX9gdMVXkAQ6bY4.png"},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"https://pbs.twimg.com/media/FX9gdMVXkAQ6bY4.png"},"favicon")]}),(0,t.jsx)(i.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:n.locale,site_name:n.site_name}})]})},85:function(e,s,a){"use strict";a.r(s);var t=a(5893),l=a(827),r=a(4080),i=a(6493),n=a(6056),o=a(7294),c=a(753),d=a(8096);function m(e){let s=e.toLocaleString("es-CL",{style:"currency",currency:"CLP"});return s.replace(/\s/g,"")}let x=()=>{let[e,s]=(0,o.useState)(1),[a,x]=(0,o.useState)(1),[g,h]=(0,o.useState)([]),[p,u]=(0,o.useState)("asc"),[f,y]=(0,o.useState)("name"),[j,b]=(0,o.useState)([{name:"Nombre: A-Z",sortBy:"name",order:"asc",current:!0},{name:"Nombre: Z-A",sortBy:"name",order:"desc",current:!1},{name:"Precio: Menor a Mayor",sortBy:"price",order:"asc",current:!1},{name:"Precio: Mayor a Menor",sortBy:"price",order:"desc",current:!1}]);return(0,o.useEffect)(()=>{fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/trays?sort=".concat(f,"&order=").concat(p,"&page=").concat(e,"&size=10"),{headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{h(e.items),x(e.pages)}).catch(e=>console.error(e))},[e,f,p]),(0,t.jsx)(d.o,{meta:(0,t.jsx)(c.h,{title:"Donde Ibai",description:"\xbfQuieres comer como Ibai? \xbfQuieres vivir como Ibai? \xbfQuieres ser como Ibai? \xa1Pues aqu\xed tienes la oportunidad!"}),children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14",children:[(0,t.jsx)("div",{className:"absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96","aria-hidden":"true"}),(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8",children:(0,t.jsxs)("div",{className:"mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8",children:[(0,t.jsx)("h1",{className:"max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto",children:"\xa1Ey, ey, ey! Hoy vengo a presentaros un sitio muy especial, se trata de mi nuevo lugar de tapas."}),(0,t.jsx)("div",{className:"mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1",children:(0,t.jsx)("p",{className:"text-lg leading-8 text-gray-600",children:"En Donde Ibai podr\xe9is encontrar platos deliciosos y sorprendentes, creados con los mejores ingredientes y elaborados por nuestros expertos chefs. Adem\xe1s, nuestro equipo de camareros estar\xe1 siempre a vuestra disposici\xf3n para hacer de vuestra experiencia en el restaurante algo \xfanico."})}),(0,t.jsx)("img",{src:"https://media.revistagq.com/photos/5eb277d25329b7e078a94336/3:2/w_4026,h_2684,c_limit/GettyImages-1030963330.jpg",alt:"",className:"mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"})]})}),(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"})]}),(0,t.jsx)("h2",{id:"menus",className:"mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8",children:"Nuestros men\xfas"}),(0,t.jsx)("div",{className:"mx-auto my-4 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8",children:(0,t.jsxs)(l.v,{as:"div",className:"relative inline-block text-left",children:[(0,t.jsx)("div",{children:(0,t.jsxs)(l.v.Button,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Ordenar",(0,t.jsx)(i,{className:"-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})}),(0,t.jsx)(r.u,{as:o.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,t.jsx)(l.v.Items,{className:"absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,t.jsx)("div",{className:"py-1",children:j.map((e,a)=>(0,t.jsx)(l.v.Item,{children:l=>{let{active:r}=l;return(0,t.jsx)("button",{onClick:()=>{y(e.sortBy),u(e.order),b(j.map((e,s)=>({...e,current:s===a}))),s(1)},className:function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.filter(Boolean).join(" ")}(e.current?"font-medium text-gray-900":"text-gray-500",r?"bg-gray-100":"","block px-4 py-2 text-sm"),children:e.name})}},e.name))})})})]})}),(0,t.jsxs)("div",{className:"shadow sm:hidden",children:[(0,t.jsx)("ul",{role:"list",className:"mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden",children:g.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/menu/".concat(e.id),className:"block bg-white p-4 hover:bg-gray-50",children:(0,t.jsxs)("span",{className:"flex items-center space-x-4",children:[(0,t.jsx)("span",{className:"flex flex-1 space-x-2 truncate",children:(0,t.jsxs)("span",{className:"flex flex-col truncate text-sm text-gray-500",children:[(0,t.jsx)("span",{className:"truncate",children:e.name}),(0,t.jsx)("span",{children:(0,t.jsx)("span",{className:"font-medium text-gray-900",children:m(e.price)})})]})}),(0,t.jsx)(n,{className:"h-5 w-5 shrink-0 text-gray-400","aria-hidden":"true"})]})})},e.id))}),(0,t.jsx)("nav",{className:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3","aria-label":"Pagination",children:(0,t.jsxs)("div",{className:"flex flex-1 justify-between",children:[e>1?(0,t.jsx)("button",{className:"relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:()=>{s(e-1)},children:"Anterior"}):null,e!==a?(0,t.jsx)("button",{className:"relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:()=>{s(e+1)},children:"Siguiente"}):null]})})]}),(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"mt-2 flex flex-col",children:(0,t.jsxs)("div",{className:"min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg",children:[(0,t.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900",scope:"col",children:"Men\xfa"}),(0,t.jsx)("th",{className:"bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900",scope:"col",children:"Precio"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-200 bg-white",children:g.map(e=>(0,t.jsxs)("tr",{className:"bg-white",children:[(0,t.jsx)("td",{className:"w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900",children:(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("a",{href:"/menu/".concat(e.id),className:"group inline-flex space-x-2 truncate text-sm",children:(0,t.jsx)("p",{className:"truncate text-gray-500 group-hover:text-gray-900",children:e.name})})})}),(0,t.jsx)("td",{className:"whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500",children:(0,t.jsx)("span",{className:"font-medium text-gray-900",children:m(e.price)})})]},e.id))})]}),(0,t.jsxs)("nav",{className:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6","aria-label":"Pagination",children:[(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsxs)("p",{className:"text-sm text-gray-700",children:["Mostrando"," ",(0,t.jsx)("span",{className:"font-medium",children:(e-1)*10+1})," ","a ",(0,t.jsx)("span",{className:"font-medium",children:10*e})," de"," ",(0,t.jsx)("span",{className:"font-medium",children:10*a})," ","resultados"]})}),(0,t.jsxs)("div",{className:"flex flex-1 justify-between gap-x-3 sm:justify-end",children:[e>1?(0,t.jsx)("button",{className:"relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:()=>{s(e-1)},children:"Anterior"}):null,e!==a?(0,t.jsx)("button",{className:"relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:()=>{s(e+1)},children:"Siguiente"}):null]})]})]})})})}),(0,t.jsx)("div",{className:"mt-32 overflow-hidden sm:mt-40",children:(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:flex lg:px-8",children:(0,t.jsxs)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8",children:[(0,t.jsxs)("div",{className:"lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Nuestro hogar"}),(0,t.jsx)("p",{className:"mt-6 text-xl leading-8 text-gray-600",children:"Pero no solo eso, en Donde Ibai tambi\xe9n podr\xe9is disfrutar de un ambiente muy especial. Hemos cuidado cada detalle para que os sint\xe1is como en casa, con una decoraci\xf3n acogedora y un ambiente relajado en el que podr\xe9is pasar un rato incre\xedble con vuestros amigos o familiares."}),(0,t.jsx)("p",{className:"mt-6 text-base leading-7 text-gray-600",children:"AY, por supuesto, no podemos olvidarnos de los streamings en vivo que podr\xe9is disfrutar en nuestro restaurante. \xa1S\xed, s\xed, como lo o\xeds! Adem\xe1s de la deliciosa comida y el ambiente acogedor, podr\xe9is disfrutar de mis directos en el restaurante mientras degust\xe1is vuestros platos favoritos. \xbfNo es genial?"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents",children:[(0,t.jsx)("div",{className:"w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",alt:"",className:"aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"})}),(0,t.jsxs)("div",{className:"contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8",children:[(0,t.jsx)("div",{className:"order-first flex w-64 flex-none justify-end self-end lg:w-auto",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80",alt:"",className:"aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"})}),(0,t.jsx)("div",{className:"flex w-96 flex-auto justify-end lg:w-auto lg:flex-none",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80",alt:"",className:"aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"})}),(0,t.jsx)("div",{className:"hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80",alt:"",className:"aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"})})]})]})]})})})]})})};s.default=x},8096:function(e,s,a){"use strict";a.d(s,{o:function(){return g}});var t=a(5893),l=a(8329),r=a(1799),i=a(5704),n=a(243),o=a(1664),c=a.n(o),d=a(1163),m=a(7294);let x=[{name:"Men\xfas",href:"/#menus"},{name:"Platos",href:"/courses"},{name:"Ingredientes",href:"/ingredients"}],g=e=>{let[s,a]=(0,m.useState)(!1),o=(0,d.useRouter)(),[g,h]=(0,m.useState)("");return(0,t.jsxs)("div",{className:"w-full bg-white px-1 text-gray-700 antialiased",children:[e.meta,(0,t.jsxs)("header",{className:"absolute inset-x-0 top-0 z-50",children:[(0,t.jsxs)("nav",{className:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[(0,t.jsx)("div",{className:"flex lg:flex-1",children:(0,t.jsxs)(c(),{href:"/",className:"-m-1.5 p-1.5",children:[(0,t.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,t.jsx)("img",{className:"h-8 w-auto",src:"https://pbs.twimg.com/media/FX9gdMVXkAQ6bY4.png",alt:""})]})}),(0,t.jsx)("div",{className:"flex lg:hidden",children:(0,t.jsxs)("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>a(!0),children:[(0,t.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,t.jsx)(r,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,t.jsx)("div",{className:"hidden lg:flex lg:gap-x-12",children:x.map(e=>(0,t.jsx)("a",{href:e.href,className:"text-sm font-semibold leading-6 text-gray-900",children:e.name},e.name))}),(0,t.jsx)("div",{className:"flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end",children:(0,t.jsxs)("div",{className:"w-full max-w-lg lg:max-w-xs",children:[(0,t.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Buscar"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,t.jsx)(i,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,t.jsx)("input",{id:"search",name:"search",className:"block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Buscar",type:"search",onKeyDown:e=>{"Enter"===e.key&&o.push({pathname:"/search",query:{query:g}})},onChange:e=>{h(e.target.value)}})]})]})})]}),(0,t.jsxs)(l.V,{as:"div",className:"lg:hidden",open:s,onClose:a,children:[(0,t.jsx)("div",{className:"fixed inset-0 z-50"}),(0,t.jsxs)(l.V.Panel,{className:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("a",{href:"#",className:"-m-1.5 p-1.5",children:[(0,t.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,t.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})]}),(0,t.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>a(!1),children:[(0,t.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,t.jsx)(n,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,t.jsx)("div",{className:"mt-6 flow-root",children:(0,t.jsxs)("div",{className:"-my-6 divide-y divide-gray-500/10",children:[(0,t.jsx)("div",{className:"space-y-2 py-6",children:x.map(e=>(0,t.jsx)("a",{href:e.href,className:"-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",children:e.name},e.name))}),(0,t.jsx)("div",{className:"py-6",children:(0,t.jsx)("a",{href:"#",className:"-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",children:"Log in"})})]})})]})]})]}),(0,t.jsx)("main",{className:"isolate",children:e.children}),(0,t.jsxs)("footer",{className:"mt-32 sm:mt-40","aria-labelledby":"footer-heading",children:[(0,t.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-6 pb-8 lg:px-8",children:(0,t.jsx)("div",{className:"mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24",children:(0,t.jsx)("p",{className:"mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0",children:"\xa9 2020 Donde Ibai, Inc. Todos los derechos reservados."})})})]})]})}}},function(e){e.O(0,[342,22,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);