(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22,594,281],{6493:function(e,t,r){let n=r(7294),i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});e.exports=i},6056:function(e,t,r){let n=r(7294),i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});e.exports=i},827:function(e,t,r){"use strict";r.d(t,{v:function(){return z}});var n,i,a,l,u=r(7294),o=r(2984),s=r(2351),c=r(9362),d=r(4192),f=r(6723),v=r(3784),p=r(9946),m=r(1363),h=((n=h||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n),g=r(4103),b=r(4575),E=r(9650),R=r(5466),y=r(6567);function I(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}var x=r(1074),T=r(3781);function S(e){return[e.screenX,e.screenY]}var w=((i=w||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),M=((a=M||{})[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a),P=((l=P||{})[l.OpenMenu=0]="OpenMenu",l[l.CloseMenu=1]="CloseMenu",l[l.GoToItem=2]="GoToItem",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterItem=5]="RegisterItem",l[l.UnregisterItem=6]="UnregisterItem",l);function k(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,b.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return -1===i&&(i=null),{items:n,activeItemIndex:i}}let C={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=k(e),i=function(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),i=null!=n?n:-1,a=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,n)=>(-1===i||!(n.length-r-1>=i))&&!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=i)&&!t.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===a?n:a}(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),a=i?e.items.indexOf(i):-1;return -1===a||a===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=k(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=k(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},F=(0,u.createContext)(null);function L(e){let t=(0,u.useContext)(F);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return t}function D(e,t){return(0,o.E)(t.type,C,e,t)}F.displayName="MenuContext";let O=u.Fragment,N=s.AN.RenderStrategy|s.AN.Static,A=u.Fragment,z=Object.assign((0,s.yV)(function(e,t){let r=(0,u.useReducer)(D,{menuState:1,buttonRef:(0,u.createRef)(),itemsRef:(0,u.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:i,buttonRef:a},l]=r,c=(0,v.T)(t);(0,E.O)([a,i],(e,t)=>{var r;l({type:1}),(0,b.sP)(t,b.tJ.Loose)||(e.preventDefault(),null==(r=a.current)||r.focus())},0===n);let d=(0,T.z)(()=>{l({type:1})}),f=(0,u.useMemo)(()=>({open:0===n,close:d}),[n,d]);return u.createElement(F.Provider,{value:r},u.createElement(y.up,{value:(0,o.E)(n,{0:y.ZM.Open,1:y.ZM.Closed})},(0,s.sY)({ourProps:{ref:c},theirProps:e,slot:f,defaultTag:O,name:"Menu"})))}),{Button:(0,s.yV)(function(e,t){var r;let n=(0,p.M)(),{id:i=`headlessui-menu-button-${n}`,...a}=e,[l,o]=L("Menu.Button"),c=(0,v.T)(l.buttonRef,t),b=(0,d.G)(),E=(0,T.z)(e=>{switch(e.key){case m.R.Space:case m.R.Enter:case m.R.ArrowDown:e.preventDefault(),e.stopPropagation(),o({type:0}),b.nextFrame(()=>o({type:2,focus:h.First}));break;case m.R.ArrowUp:e.preventDefault(),e.stopPropagation(),o({type:0}),b.nextFrame(()=>o({type:2,focus:h.Last}))}}),R=(0,T.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),y=(0,T.z)(t=>{if((0,g.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===l.menuState?(o({type:1}),b.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),o({type:0})))}),x=(0,u.useMemo)(()=>({open:0===l.menuState}),[l]),S={ref:c,id:i,type:function(e,t){let[r,n]=(0,u.useState)(()=>I(e));return(0,f.e)(()=>{n(I(e))},[e.type,e.as]),(0,f.e)(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}(e,l.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=l.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===l.menuState,onKeyDown:E,onKeyUp:R,onClick:y};return(0,s.sY)({ourProps:S,theirProps:a,slot:x,defaultTag:"button",name:"Menu.Button"})}),Items:(0,s.yV)(function(e,t){var r,n;let i=(0,p.M)(),{id:a=`headlessui-menu-items-${i}`,...l}=e,[o,g]=L("Menu.Items"),E=(0,v.T)(o.itemsRef,t),I=(0,x.i)(o.itemsRef),S=(0,d.G)(),w=(0,y.oJ)(),M=null!==w?(w&y.ZM.Open)===y.ZM.Open:0===o.menuState;(0,u.useEffect)(()=>{let e=o.itemsRef.current;e&&0===o.menuState&&e!==(null==I?void 0:I.activeElement)&&e.focus({preventScroll:!0})},[o.menuState,o.itemsRef,I]),function({container:e,accept:t,walk:r,enabled:n=!0}){let i=(0,u.useRef)(t),a=(0,u.useRef)(r);(0,u.useEffect)(()=>{i.current=t,a.current=r},[t,r]),(0,f.e)(()=>{if(!e||!n)return;let t=(0,R.r)(e);if(!t)return;let r=i.current,l=a.current,u=Object.assign(e=>r(e),{acceptNode:r}),o=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;o.nextNode();)l(o.currentNode)},[e,n,i,a])}({container:o.itemsRef.current,enabled:0===o.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let P=(0,T.z)(e=>{var t,r;switch(S.dispose(),e.key){case m.R.Space:if(""!==o.searchQuery)return e.preventDefault(),e.stopPropagation(),g({type:3,value:e.key});case m.R.Enter:if(e.preventDefault(),e.stopPropagation(),g({type:1}),null!==o.activeItemIndex){let{dataRef:e}=o.items[o.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,b.wI)(o.buttonRef.current);break;case m.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Next});case m.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Previous});case m.R.Home:case m.R.PageUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.First});case m.R.End:case m.R.PageDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Last});case m.R.Escape:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case m.R.Tab:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{(0,b.EO)(o.buttonRef.current,e.shiftKey?b.TO.Previous:b.TO.Next)});break;default:1===e.key.length&&(g({type:3,value:e.key}),S.setTimeout(()=>g({type:4}),350))}}),k=(0,T.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),C=(0,u.useMemo)(()=>({open:0===o.menuState}),[o]),F={"aria-activedescendant":null===o.activeItemIndex||null==(r=o.items[o.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=o.buttonRef.current)?void 0:n.id,id:a,onKeyDown:P,onKeyUp:k,role:"menu",tabIndex:0,ref:E};return(0,s.sY)({ourProps:F,theirProps:l,slot:C,defaultTag:"div",features:N,visible:M,name:"Menu.Items"})}),Item:(0,s.yV)(function(e,t){let r,n=(0,p.M)(),{id:i=`headlessui-menu-item-${n}`,disabled:a=!1,...l}=e,[o,d]=L("Menu.Item"),m=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===i,g=(0,u.useRef)(null),E=(0,v.T)(t,g);(0,f.e)(()=>{if(0!==o.menuState||!m||0===o.activationTrigger)return;let e=(0,c.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=g.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[g,m,o.menuState,o.activationTrigger,o.activeItemIndex]);let R=(0,u.useRef)({disabled:a,domRef:g});(0,f.e)(()=>{R.current.disabled=a},[R,a]),(0,f.e)(()=>{var e,t;R.current.textValue=null==(t=null==(e=g.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[R,g]),(0,f.e)(()=>(d({type:5,id:i,dataRef:R}),()=>d({type:6,id:i})),[R,i]);let y=(0,T.z)(()=>{d({type:1})}),I=(0,T.z)(e=>{if(a)return e.preventDefault();d({type:1}),(0,b.wI)(o.buttonRef.current)}),x=(0,T.z)(()=>{if(a)return d({type:2,focus:h.Nothing});d({type:2,focus:h.Specific,id:i})}),w=(r=(0,u.useRef)([-1,-1]),{wasMoved(e){let t=S(e);return(r.current[0]!==t[0]||r.current[1]!==t[1])&&(r.current=t,!0)},update(e){r.current=S(e)}}),M=(0,T.z)(e=>w.update(e)),P=(0,T.z)(e=>{w.wasMoved(e)&&(a||m||d({type:2,focus:h.Specific,id:i,trigger:0}))}),k=(0,T.z)(e=>{w.wasMoved(e)&&(a||m&&d({type:2,focus:h.Nothing}))}),C=(0,u.useMemo)(()=>({active:m,disabled:a,close:y}),[m,a,y]);return(0,s.sY)({ourProps:{id:i,ref:E,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:I,onFocus:x,onPointerEnter:M,onMouseEnter:M,onPointerMove:P,onMouseMove:P,onPointerLeave:k,onMouseLeave:k},theirProps:l,slot:C,defaultTag:A,name:"Menu.Item"})})})},4080:function(e,t,r){"use strict";r.d(t,{u:function(){return D}});var n,i=r(7294),a=r(2351),l=r(6567),u=r(2984),o=r(4879),s=r(6723),c=r(3855),d=r(2180),f=r(3784),v=r(9362);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=r(4192),g=r(3781),b=r(4067),E=r(7896);function R(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,i.createContext)(null);y.displayName="TransitionContext";var I=((n=I||{}).Visible="visible",n.Hidden="hidden",n);let x=(0,i.createContext)(null);function T(e){return"children"in e?T(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function S(e,t){let r=(0,c.E)(e),n=(0,i.useRef)([]),l=(0,o.t)(),s=(0,h.G)(),d=(0,g.z)((e,t=a.l4.Hidden)=>{let i=n.current.findIndex(({el:t})=>t===e);-1!==i&&((0,u.E)(t,{[a.l4.Unmount](){n.current.splice(i,1)},[a.l4.Hidden](){n.current[i].state="hidden"}}),s.microTask(()=>{var e;!T(n)&&l.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,g.z)(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>d(e,a.l4.Unmount)}),v=(0,i.useRef)([]),p=(0,i.useRef)(Promise.resolve()),m=(0,i.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.z)((e,r,n)=>{v.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{v.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(m.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),E=(0,g.z)((e,t,r)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=v.current.shift())||e()}).then(()=>r(t))});return(0,i.useMemo)(()=>({children:n,register:f,unregister:d,onStart:b,onStop:E,wait:p,chains:m}),[f,d,n,b,E,m,p])}function w(){}x.displayName="NestingContext";let M=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let r={};for(let n of M)r[n]=null!=(t=e[n])?t:w;return r}let k=a.AN.RenderStrategy,C=(0,a.yV)(function(e,t){let{show:r,appear:n=!1,unmount:u,...o}=e,c=(0,i.useRef)(null),v=(0,f.T)(c,t);(0,d.H)();let p=(0,l.oJ)();if(void 0===r&&null!==p&&(r=(p&l.ZM.Open)===l.ZM.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,h]=(0,i.useState)(r?"visible":"hidden"),g=S(()=>{h("hidden")}),[b,E]=(0,i.useState)(!0),R=(0,i.useRef)([r]);(0,s.e)(()=>{!1!==b&&R.current[R.current.length-1]!==r&&(R.current.push(r),E(!1))},[R,r]);let I=(0,i.useMemo)(()=>({show:r,appear:n,initial:b}),[r,n,b]);(0,i.useEffect)(()=>{if(r)h("visible");else if(T(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[r,g]);let w={unmount:u};return i.createElement(x.Provider,{value:g},i.createElement(y.Provider,{value:I},(0,a.sY)({ourProps:{...w,as:i.Fragment,children:i.createElement(F,{ref:v,...w,...o})},theirProps:{},defaultTag:i.Fragment,features:k,visible:"visible"===m,name:"Transition"})))}),F=(0,a.yV)(function(e,t){var r;let n,{beforeEnter:I,afterEnter:w,beforeLeave:M,afterLeave:C,enter:F,enterFrom:L,enterTo:D,entered:O,leave:N,leaveFrom:A,leaveTo:z,...Z}=e,H=(0,i.useRef)(null),U=(0,f.T)(H,t),V=Z.unmount?a.l4.Unmount:a.l4.Hidden,{show:B,appear:Q,initial:j}=function(){let e=(0,i.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[_,Y]=(0,i.useState)(B?"visible":"hidden"),G=function(){let e=(0,i.useContext)(x);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:J}=G,W=(0,i.useRef)(null);(0,i.useEffect)(()=>K(H),[K,H]),(0,i.useEffect)(()=>{if(V===a.l4.Hidden&&H.current){if(B&&"visible"!==_){Y("visible");return}return(0,u.E)(_,{hidden:()=>J(H),visible:()=>K(H)})}},[_,H,K,J,B,V]);let $=(0,c.E)({enter:R(F),enterFrom:R(L),enterTo:R(D),entered:R(O),leave:R(N),leaveFrom:R(A),leaveTo:R(z)}),q=(r={beforeEnter:I,afterEnter:w,beforeLeave:M,afterLeave:C},n=(0,i.useRef)(P(r)),(0,i.useEffect)(()=>{n.current=P(r)},[r]),n),X=(0,d.H)();(0,i.useEffect)(()=>{if(X&&"visible"===_&&null===H.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[H,_,X]);let ee=j&&!Q,et=!X||ee||W.current===B?"idle":B?"enter":"leave",er=function(e=0){let[t,r]=(0,i.useState)(e),n=(0,i.useCallback)(e=>r(t=>t|e),[t]),a=(0,i.useCallback)(e=>Boolean(t&e),[t]);return{flags:t,addFlag:n,hasFlag:a,removeFlag:(0,i.useCallback)(e=>r(t=>t&~e),[r]),toggleFlag:(0,i.useCallback)(e=>r(t=>t^e),[r])}}(0),en=(0,g.z)(e=>(0,u.E)(e,{enter:()=>{er.addFlag(l.ZM.Opening),q.current.beforeEnter()},leave:()=>{er.addFlag(l.ZM.Closing),q.current.beforeLeave()},idle:()=>{}})),ei=(0,g.z)(e=>(0,u.E)(e,{enter:()=>{er.removeFlag(l.ZM.Opening),q.current.afterEnter()},leave:()=>{er.removeFlag(l.ZM.Closing),q.current.afterLeave()},idle:()=>{}})),ea=S(()=>{Y("hidden"),J(H)},G);(function({container:e,direction:t,classes:r,onStart:n,onStop:i}){let a=(0,o.t)(),l=(0,h.G)(),d=(0,c.E)(t);(0,s.e)(()=>{let t=(0,v.k)();l.add(t.dispose);let o=e.current;if(o&&"idle"!==d.current&&a.current){var s,c,f,h;let e,a,l,g,b,E,R;return t.dispose(),n.current(d.current),t.add((s=o,c=r.current,f="enter"===d.current,h=()=>{t.dispose(),i.current(d.current)},a=f?"enter":"leave",l=(0,v.k)(),g=void 0!==h?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,h(...t)}):()=>{},"enter"===a&&(s.removeAttribute("hidden"),s.style.display=""),b=(0,u.E)(a,{enter:()=>c.enter,leave:()=>c.leave}),E=(0,u.E)(a,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),R=(0,u.E)(a,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),m(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),p(s,...b,...R),l.nextFrame(()=>{m(s,...R),p(s,...E),function(e,t){let r=(0,v.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[a,l]=[n,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),u=a+l;if(0!==u){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},u),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(s,()=>(m(s,...b),p(s,...c.entered),g()))}),l.dispose)),t.dispose}},[t])})({container:H,classes:$,direction:et,onStart:(0,c.E)(e=>{ea.onStart(H,e,en)}),onStop:(0,c.E)(e=>{ea.onStop(H,e,ei),"leave"!==e||T(ea)||(Y("hidden"),J(H))})}),(0,i.useEffect)(()=>{ee&&(V===a.l4.Hidden?W.current=null:W.current=B)},[B,ee,_]);let el=Z;return Q&&B&&E.O.isServer&&(el={...el,className:(0,b.A)(Z.className,...$.current.enter,...$.current.enterFrom)}),i.createElement(x.Provider,{value:ea},i.createElement(l.up,{value:(0,u.E)(_,{visible:l.ZM.Open,hidden:l.ZM.Closed})|er.flags},(0,a.sY)({ourProps:{ref:U},theirProps:el,defaultTag:"div",features:k,visible:"visible"===_,name:"Transition.Child"})))}),L=(0,a.yV)(function(e,t){let r=null!==(0,i.useContext)(y),n=null!==(0,l.oJ)();return i.createElement(i.Fragment,null,!r&&n?i.createElement(C,{ref:t,...e}):i.createElement(F,{ref:t,...e}))}),D=Object.assign(C,{Child:L,Root:C})}}]);