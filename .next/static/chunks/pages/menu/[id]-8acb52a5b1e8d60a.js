(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{1111:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu/[id]",function(){return t(2665)}])},2665:function(e,s,t){"use strict";t.r(s);var r=t(5893),a=t(1163),c=t(7294),i=t(5441),n=t(753),l=t(8096);let o=()=>{let[e,s]=(0,c.useState)({price:0,size:0,expiration:0,id:"",name:"",description:[""],courses:[{id:"",name:"",img_url:"",category:""}]}),t=(0,a.useRouter)(),{id:o}=t.query;return(0,c.useEffect)(()=>{o&&fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/trays/".concat(o),{headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{s(e)}).catch(e=>console.error(e))},[o]),(0,r.jsx)(l.o,{meta:(0,r.jsx)(n.h,{title:"Donde Ibai",description:"\xbfQuieres comer como Ibai? \xbfQuieres vivir como Ibai? \xbfQuieres ser como Ibai? \xa1Pues aqu\xed tienes la oportunidad!"}),children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"my-36 mx-10",children:[(0,r.jsxs)("div",{className:"max-w-4xl",children:[(0,r.jsx)("h1",{id:"order-history-heading",className:"text-3xl font-bold tracking-tight text-gray-900",children:e.name}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:e.description}),(0,r.jsxs)("p",{className:"mt-2 text-sm text-gray-500",children:["Precio: ",function(e){let s=e.toLocaleString("es-CL",{style:"currency",currency:"CLP"});return s.replace(/\s/g,"")}(e.price)]}),(0,r.jsxs)("p",{className:"mt-2 text-sm text-gray-500",children:["Tama\xf1o: ",e.size," gr"]}),(0,r.jsxs)("p",{className:"mt-2 text-sm text-gray-500",children:["Vencimiento: ",e.expiration]})]}),(0,r.jsx)("div",{className:"mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4",children:e.courses.map(e=>(0,r.jsxs)("div",{className:"group relative",children:[(0,r.jsx)("div",{className:"aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75",children:(0,r.jsx)("img",{src:e.img_url,alt:e.img_url,className:"object-cover object-center"})}),(0,r.jsx)("h3",{className:"mt-4 text-lg text-gray-500",children:(0,r.jsxs)("a",{href:"/course/".concat(e.id),children:[(0,r.jsx)("span",{className:"absolute inset-0"}),e.name]})}),(0,r.jsx)("p",{className:"mt-1 text-sm font-medium",children:(0,r.jsxs)("span",{className:"text-gray-400",children:[e.category," "]})})]},e.id))})]}),(0,r.jsx)(i.Z,{id:o})]}):null})};s.default=o}},function(e){e.O(0,[342,879,606,774,888,179],function(){return e(e.s=1111)}),_N_E=e.O()}]);