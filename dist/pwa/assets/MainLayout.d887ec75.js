import{c as be,a as b,h as T,b as De,u as Ne,r as S,d as Re,e as at,w as D,o as ot,f as nt,g as ne,i as it,j as fe,k as ye,s as ce,l as ze,m as j,_ as K,n as w,p as q,q as y,t as p,Q as Oe,v as Fe,x as Ve,y as je,z as _e,A as Ke,B as ke,C as rt,D as we,E as ut,F as st,G as he,H as xe,I as ct,J as dt,K as vt,L as ft,M as ht,N as mt,O as gt,P as pt,R as bt,S as yt,T as _t,U as St,V as zt,W as Me,X as kt,Y as wt,Z as xt,$ as Mt,a0 as Tt,a1 as $t,a2 as Lt,a3 as qt,a4 as Ct,a5 as Ht,a6 as P,a7 as Ie,a8 as U,a9 as me,aa as ge,ab as te,ac as Ue,ad as Et,ae as Pt,af as Bt,ag as Wt}from"./index.db886113.js";import{b as ee,Q as Te,a as At,T as $e,c as Qt,m as Dt,l as Nt,d as Rt,e as Ot,f as Ft,g as Vt,h as Xe,i as Ye,M as jt}from"./MobileNavBar.4dd00c79.js";import{Q as le,a as Ge}from"./QItemLabel.a4265979.js";var Kt=be({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const n=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:n.value},De(l.default))}});const Le=["vertical","horizontal"],de={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},qe={prevent:!0,mouse:!0,mouseAllDir:!0},Ce=e=>e>=250?50:Math.ceil(e/5);var It=be({name:"QScrollArea",props:{...Ne,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:l,emit:n}){const a=S(!1),i=S(!1),d=S(!1),o={vertical:S(0),horizontal:S(0)},t={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:s}=ye(),h=Re(e,s.$q);let m=null,x;const _=S(null),u=b(()=>"q-scrollarea"+(h.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=b(()=>{const r=t.vertical.size.value-o.vertical.value;if(r<=0)return 0;const c=ee(t.vertical.position.value/r,0,1);return Math.round(c*1e4)/1e4}),t.vertical.thumbHidden=b(()=>(e.visible===null?d.value:e.visible)!==!0&&a.value===!1&&i.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=b(()=>t.vertical.percentage.value*(o.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=b(()=>Math.round(ee(o.vertical.value*o.vertical.value/t.vertical.size.value,Ce(o.vertical.value),o.vertical.value))),t.vertical.style=b(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=b(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=b(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=b(()=>{const r=t.horizontal.size.value-o.horizontal.value;if(r<=0)return 0;const c=ee(Math.abs(t.horizontal.position.value)/r,0,1);return Math.round(c*1e4)/1e4}),t.horizontal.thumbHidden=b(()=>(e.visible===null?d.value:e.visible)!==!0&&a.value===!1&&i.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=b(()=>t.horizontal.percentage.value*(o.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=b(()=>Math.round(ee(o.horizontal.value*o.horizontal.value/t.horizontal.size.value,Ce(o.horizontal.value),o.horizontal.value))),t.horizontal.style=b(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=b(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=b(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const f=b(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),R=[[$e,r=>{M(r,"vertical")},void 0,{vertical:!0,...qe}]],W=[[$e,r=>{M(r,"horizontal")},void 0,{horizontal:!0,...qe}]];function A(){const r={};return Le.forEach(c=>{const g=t[c];r[c+"Position"]=g.position.value,r[c+"Percentage"]=g.percentage.value,r[c+"Size"]=g.size.value,r[c+"ContainerSize"]=o[c].value}),r}const O=at(()=>{const r=A();r.ref=s,n("scroll",r)},0);function k(r,c,g){if(Le.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?ze:ce)(_.value,c,g)}function C({height:r,width:c}){let g=!1;o.vertical.value!==r&&(o.vertical.value=r,g=!0),o.horizontal.value!==c&&(o.horizontal.value=c,g=!0),g===!0&&Q()}function z({position:r}){let c=!1;t.vertical.position.value!==r.top&&(t.vertical.position.value=r.top,c=!0),t.horizontal.position.value!==r.left&&(t.horizontal.position.value=r.left,c=!0),c===!0&&Q()}function B({height:r,width:c}){t.horizontal.size.value!==c&&(t.horizontal.size.value=c,Q()),t.vertical.size.value!==r&&(t.vertical.size.value=r,Q())}function M(r,c){const g=t[c];if(r.isFirst===!0){if(g.thumbHidden.value===!0)return;x=g.position.value,i.value=!0}else if(i.value!==!0)return;r.isFinal===!0&&(i.value=!1);const E=de[c],V=o[c].value,J=(g.size.value-V)/(V-g.thumbSize.value),Z=r.distance[E.dist],re=x+(r.direction===E.dir?1:-1)*Z*J;Y(re,c)}function $(r,c){const g=t[c];if(g.thumbHidden.value!==!0){const E=r[de[c].offset];if(E<g.thumbStart.value||E>g.thumbStart.value+g.thumbSize.value){const V=E-g.thumbSize.value/2;Y(V/o[c].value*g.size.value,c)}g.ref.value!==null&&g.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function H(r){$(r,"vertical")}function X(r){$(r,"horizontal")}function Q(){a.value=!0,m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,a.value=!1},e.delay),e.onScroll!==void 0&&O()}function Y(r,c){_.value[de[c].scroll]=r}let L=null;function G(){L!==null&&clearTimeout(L),L=setTimeout(()=>{L=null,d.value=!0},s.$q.platform.is.ios?50:0)}function ie(){L!==null&&(clearTimeout(L),L=null),d.value=!1}let F=null;return D(()=>s.$q.lang.rtl,r=>{_.value!==null&&ce(_.value,Math.abs(t.horizontal.position.value)*(r===!0?-1:1))}),ot(()=>{F={top:t.vertical.position.value,left:t.horizontal.position.value}}),nt(()=>{if(F===null)return;const r=_.value;r!==null&&(ce(r,F.left),ze(r,F.top))}),ne(O.cancel),Object.assign(s,{getScrollTarget:()=>_.value,getScroll:A,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:k,setScrollPercentage(r,c,g){k(r,c*(t[r].size.value-o[r].value)*(r==="horizontal"&&s.$q.lang.rtl===!0?-1:1),g)}}),()=>T("div",{class:u.value,onMouseenter:G,onMouseleave:ie},[T("div",{ref:_,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[T("div",{class:"q-scrollarea__content absolute",style:f.value},it(l.default,[T(Te,{debounce:0,onResize:B})])),T(At,{axis:"both",onScroll:z})]),T(Te,{debounce:0,onResize:C}),T("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:H}),T("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:X}),fe(T("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),R),fe(T("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),W)])}});const Ut=j({name:"NavLink",props:{title:{type:String,required:!0},link:{type:String},icon:{type:String}}});function Xt(e,l,n,a,i,d){return w(),q(_e,{clickable:"",tag:"a",to:{name:e.link}},{default:y(()=>[e.icon?(w(),q(le,{key:0,avatar:""},{default:y(()=>[p(Oe,{name:e.icon},null,8,["name"])]),_:1})):Fe("",!0),p(le,null,{default:y(()=>[p(Ge,{class:"text-white"},{default:y(()=>[Ve(je(e.title),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Je=K(Ut,[["render",Xt]]);const Yt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Gt({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:a,proxy:i,emit:d}=ye(),o=S(null);let t=null;function s(u){return o.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const h={};n===void 0&&(Object.assign(h,{hide(u){i.hide(u)},toggle(u){i.toggle(u),u.qAnchorHandled=!0},toggleKey(u){Ke(u,13)===!0&&h.toggle(u)},contextClick(u){i.hide(u),ke(u),rt(()=>{i.show(u),u.qAnchorHandled=!0})},prevent:ke,mobileTouch(u){if(h.mobileCleanup(u),s(u)!==!0)return;i.hide(u),o.value.classList.add("non-selectable");const f=u.target;we(h,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),t=setTimeout(()=>{t=null,i.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){o.value.classList.remove("non-selectable"),t!==null&&(clearTimeout(t),t=null),e.value===!0&&u!==void 0&&Qt()}}),n=function(u=a.contextMenu){if(a.noParentEvent===!0||o.value===null)return;let f;u===!0?i.$q.platform.is.mobile===!0?f=[[o.value,"touchstart","mobileTouch","passive"]]:f=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:f=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],we(h,"anchor",f)});function m(){st(h,"anchor")}function x(u){for(o.value=u;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function _(){if(a.target===!1||a.target===""||i.$el.parentNode===null)o.value=null;else if(a.target===!0)x(i.$el.parentNode);else{let u=a.target;if(typeof a.target=="string")try{u=document.querySelector(a.target)}catch{u=void 0}u!=null?(o.value=u.$el||u,n()):(o.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return D(()=>a.contextMenu,u=>{o.value!==null&&(m(),n(u))}),D(()=>a.target,()=>{o.value!==null&&m(),_()}),D(()=>a.noParentEvent,u=>{o.value!==null&&(u===!0?m():n())}),ut(()=>{_(),l!==!0&&a.modelValue===!0&&o.value===null&&d("update:modelValue",!1)}),ne(()=>{t!==null&&clearTimeout(t),m()}),{anchorEl:o,canShow:s,anchorEvents:h}}function Jt(e,l){const n=S(null);let a;function i(t,s){const h=`${s!==void 0?"add":"remove"}EventListener`,m=s!==void 0?s:a;t!==window&&t[h]("scroll",m,he.passive),window[h]("scroll",m,he.passive),a=s}function d(){n.value!==null&&(i(n.value),n.value=null)}const o=D(()=>e.noParentEvent,()=>{n.value!==null&&(d(),l())});return ne(o),{localScrollTarget:n,unconfigureScrollTarget:d,changeScrollEvent:i}}const{notPassiveCapture:ae}=he,N=[];function oe(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=xe.length-1;for(;n>=0;){const a=xe[n].$;if(a.type.name==="QTooltip"){n--;continue}if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;n--}for(let a=N.length-1;a>=0;a--){const i=N[a];if((i.anchorEl.value===null||i.anchorEl.value.contains(l)===!1)&&(l===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(l)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Zt(e){N.push(e),N.length===1&&(document.addEventListener("mousedown",oe,ae),document.addEventListener("touchstart",oe,ae))}function He(e){const l=N.findIndex(n=>n===e);l>-1&&(N.splice(l,1),N.length===0&&(document.removeEventListener("mousedown",oe,ae),document.removeEventListener("touchstart",oe,ae)))}let Ee,Pe;function Be(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function el(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const pe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{pe[`${e}#ltr`]=e,pe[`${e}#rtl`]=e});function We(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:pe[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function tl(e,l){let{top:n,left:a,right:i,bottom:d,width:o,height:t}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],a-=l[0],d+=l[1],i+=l[0],o+=l[0],t+=l[1]),{top:n,bottom:d,height:t,left:a,right:i,width:o,middle:a+(i-a)/2,center:n+(d-n)/2}}function ll(e,l,n){let{top:a,left:i}=e.getBoundingClientRect();return a+=l.top,i+=l.left,n!==void 0&&(a+=n[1],i+=n[0]),{top:a,bottom:a+1,height:1,left:i,right:i+1,width:1,middle:i,center:a}}function al(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Ae(e,l,n,a){return{top:e[n.vertical]-l[a.vertical],left:e[n.horizontal]-l[a.horizontal]}}function Ze(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ze(e,l+1)},10);return}const{targetEl:n,offset:a,anchorEl:i,anchorOrigin:d,selfOrigin:o,absoluteOffset:t,fit:s,cover:h,maxHeight:m,maxWidth:x}=e;if(ct.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:M,offsetTop:$}=window.visualViewport;M!==Ee&&(B.setProperty("--q-pe-left",M+"px"),Ee=M),$!==Pe&&(B.setProperty("--q-pe-top",$+"px"),Pe=$)}const{scrollLeft:_,scrollTop:u}=n,f=t===void 0?tl(i,h===!0?[0,0]:a):ll(i,t,a);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:x||"100vw",maxHeight:m||"100vh",visibility:"visible"});const{offsetWidth:R,offsetHeight:W}=n,{elWidth:A,elHeight:O}=s===!0||h===!0?{elWidth:Math.max(f.width,R),elHeight:h===!0?Math.max(f.height,W):W}:{elWidth:R,elHeight:W};let k={maxWidth:x,maxHeight:m};(s===!0||h===!0)&&(k.minWidth=f.width+"px",h===!0&&(k.minHeight=f.height+"px")),Object.assign(n.style,k);const C=al(A,O);let z=Ae(f,C,d,o);if(t===void 0||a===void 0)ve(z,f,C,d,o);else{const{top:B,left:M}=z;ve(z,f,C,d,o);let $=!1;if(z.top!==B){$=!0;const H=2*a[1];f.center=f.top-=H,f.bottom-=H+2}if(z.left!==M){$=!0;const H=2*a[0];f.middle=f.left-=H,f.right-=H+2}$===!0&&(z=Ae(f,C,d,o),ve(z,f,C,d,o))}k={top:z.top+"px",left:z.left+"px"},z.maxHeight!==void 0&&(k.maxHeight=z.maxHeight+"px",f.height>z.maxHeight&&(k.minHeight=k.maxHeight)),z.maxWidth!==void 0&&(k.maxWidth=z.maxWidth+"px",f.width>z.maxWidth&&(k.minWidth=k.maxWidth)),Object.assign(n.style,k),n.scrollTop!==u&&(n.scrollTop=u),n.scrollLeft!==_&&(n.scrollLeft=_)}function ve(e,l,n,a,i){const d=n.bottom,o=n.right,t=dt(),s=window.innerHeight-t,h=document.body.clientWidth;if(e.top<0||e.top+d>s)if(i.vertical==="center")e.top=l[a.vertical]>s/2?Math.max(0,s-d):0,e.maxHeight=Math.min(d,s);else if(l[a.vertical]>s/2){const m=Math.min(s,a.vertical==="center"?l.center:a.vertical===i.vertical?l.bottom:l.top);e.maxHeight=Math.min(d,m),e.top=Math.max(0,m-d)}else e.top=Math.max(0,a.vertical==="center"?l.center:a.vertical===i.vertical?l.top:l.bottom),e.maxHeight=Math.min(d,s-e.top);if(e.left<0||e.left+o>h)if(e.maxWidth=Math.min(o,h),i.horizontal==="middle")e.left=l[a.horizontal]>h/2?Math.max(0,h-o):0;else if(l[a.horizontal]>h/2){const m=Math.min(h,a.horizontal==="middle"?l.middle:a.horizontal===i.horizontal?l.right:l.left);e.maxWidth=Math.min(o,m),e.left=Math.max(0,m-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?l.middle:a.horizontal===i.horizontal?l.left:l.right),e.maxWidth=Math.min(o,h-e.left)}var ol=be({name:"QMenu",inheritAttrs:!1,props:{...Yt,...vt,...Ne,...ft,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Be},self:{type:String,validator:Be},offset:{type:Array,validator:el},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ht,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:a}){let i=null,d,o,t;const s=ye(),{proxy:h}=s,{$q:m}=h,x=S(null),_=S(!1),u=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Re(e,m),{registerTick:R,removeTick:W}=mt(),{registerTimeout:A}=gt(),{transitionProps:O,transitionStyle:k}=pt(e),{localScrollTarget:C,changeScrollEvent:z,unconfigureScrollTarget:B}=Jt(e,Z),{anchorEl:M,canShow:$}=Gt({showing:_}),{hide:H}=bt({showing:_,canShow:$,handleShow:E,handleHide:V,hideOnRouteChange:u,processOnMount:!0}),{showPortal:X,hidePortal:Q,renderPortal:Y}=yt(s,x,et,"menu"),L={anchorEl:M,innerRef:x,onClickOutside(v){if(e.persistent!==!0&&_.value===!0)return H(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&Lt(v),!0}},G=b(()=>We(e.anchor||(e.cover===!0?"center middle":"bottom start"),m.lang.rtl)),ie=b(()=>e.cover===!0?G.value:We(e.self||"top start",m.lang.rtl)),F=b(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),r=b(()=>e.autoClose===!0?{onClick:re}:{}),c=b(()=>_.value===!0&&e.persistent!==!0);D(c,v=>{v===!0?(Mt(ue),Zt(L)):(Me(ue),He(L))});function g(){Tt(()=>{let v=x.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function E(v){if(i=e.noRefocus===!1?document.activeElement:null,_t(Se),X(),Z(),d=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const se=St(v);if(se.left!==void 0){const{top:tt,left:lt}=M.value.getBoundingClientRect();d={left:se.left-lt,top:se.top-tt}}}o===void 0&&(o=D(()=>m.screen.width+"|"+m.screen.height+"|"+e.self+"|"+e.anchor+"|"+m.lang.rtl,I)),e.noFocus!==!0&&document.activeElement.blur(),R(()=>{I(),e.noFocus!==!0&&g()}),A(()=>{m.platform.is.ios===!0&&(t=e.autoClose,x.value.click()),I(),X(!0),n("show",v)},e.transitionDuration)}function V(v){W(),Q(),J(!0),i!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),A(()=>{Q(!0),n("hide",v)},e.transitionDuration)}function J(v){d=void 0,o!==void 0&&(o(),o=void 0),(v===!0||_.value===!0)&&(zt(Se),B(),He(L),Me(ue)),v!==!0&&(i=null)}function Z(){(M.value!==null||e.scrollTarget!==void 0)&&(C.value=kt(M.value,e.scrollTarget),z(C.value,I))}function re(v){t!==!0?(wt(h,v),n("click",v)):t=!1}function Se(v){c.value===!0&&e.noFocus!==!0&&$t(x.value,v.target)!==!0&&g()}function ue(v){n("escapeKey"),H(v)}function I(){Ze({targetEl:x.value,offset:e.offset,anchorEl:M.value,anchorOrigin:G.value,selfOrigin:ie.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(){return T(xt,O.value,()=>_.value===!0?T("div",{role:"menu",...a,ref:x,tabindex:-1,class:["q-menu q-position-engine scroll"+F.value,a.class],style:[a.style,k.value],...r.value},De(l.default)):null)}return ne(J),Object.assign(h,{focus:g,updatePosition:I}),Y}});function Qe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var nl=qt({name:"close-popup",beforeMount(e,{value:l}){const n={depth:Qe(l),handler(a){n.depth!==0&&setTimeout(()=>{const i=Ct(e);i!==void 0&&Ht(i,a,n.depth)})},handlerKey(a){Ke(a,13)===!0&&n.handler(a)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:l,oldValue:n}){l!==n&&(e.__qclosepopup.depth=Qe(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});const il=j({name:"NavMenu",components:{NavLink:Je},props:{title:{type:String,required:!0},icon:{type:String},children:{type:Array}}});function rl(e,l,n,a,i,d){const o=P("NavLink");return w(),q(_e,{clickable:""},{default:y(()=>[p(ol,{class:"bg-primary",anchor:"bottom middle",self:"top middle"},{default:y(()=>[p(Ie,{style:{"min-width":"100px"}},{default:y(()=>[(w(!0),U(te,null,me(e.children,t=>fe((w(),q(o,ge({class:"text-accent",key:t.title},t),null,16)),[[nl]])),128))]),_:1})]),_:1}),e.icon?(w(),q(le,{key:0,avatar:""},{default:y(()=>[p(Oe,{name:e.icon},null,8,["name"])]),_:1})):Fe("",!0),p(le,null,{default:y(()=>[p(Ge,{class:"text-white"},{default:y(()=>[Ve(je(e.title),1)]),_:1})]),_:1})]),_:1})}var ul=K(il,[["render",rl]]);const sl=j({name:"DesktopNavBar",components:{NavLink:Je,NavMenu:ul},setup(){const e=Ue();return{navMenus:Dt,navLinks:Nt,drawer:S(!1),miniState:S(!0),darkModeToggle:S(e.dark.isActive)}}});function cl(e,l,n,a,i,d){const o=P("NavMenu"),t=P("NavLink");return w(),U(te,null,[p(Ft,{class:"bg-primary"},{default:y(()=>[p(Rt,null,{default:y(()=>[p(Et,{flat:"",class:"text-accent",onClick:l[0]||(l[0]=s=>e.drawer=!e.drawer),round:"",dense:"",icon:"menu"}),p(Kt,null,{default:y(()=>[p(_e,{clickable:"",tag:"a",to:{name:"index"}},{default:y(()=>[p(Pt,{src:Bt,alt:"Chess Logo",height:"30px",width:"70px"})]),_:1})]),_:1}),p(Ot),p(Wt,{modelValue:e.darkModeToggle,"onUpdate:modelValue":l[1]||(l[1]=s=>e.darkModeToggle=s),"checked-icon":"dark_mode",color:"grey-8","unchecked-icon":"light_mode",onClick:e.$q.dark.toggle},null,8,["modelValue","onClick"])]),_:1})]),_:1}),p(Vt,{modelValue:e.drawer,"onUpdate:modelValue":l[2]||(l[2]=s=>e.drawer=s),"show-if-above":"",mini:e.miniState,onMouseover:l[3]||(l[3]=s=>e.miniState=!1),onMouseout:l[4]||(l[4]=s=>e.miniState=!0),width:150,breakpoint:500,bordered:"",class:"bg-secondary"},{default:y(()=>[p(It,{class:"fit","horizontal-thumb-style":{opacity:0}},{default:y(()=>[p(Ie,{padding:""},{default:y(()=>[(w(!0),U(te,null,me(e.navMenus,s=>(w(),q(o,ge({key:s.title},s),null,16))),128)),(w(!0),U(te,null,me(e.navLinks,s=>(w(),q(t,ge({key:s.title},s),null,16))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","mini"])],64)}var dl=K(sl,[["render",cl]]);const vl=j({name:"DesktopLayout",components:{DesktopNavBar:dl}});function fl(e,l,n,a,i,d){const o=P("DesktopNavBar"),t=P("router-view");return w(),q(Ye,{class:"desktop-layout",view:"hHh Lpr lFf"},{default:y(()=>[p(o),p(Xe,null,{default:y(()=>[p(t)]),_:1})]),_:1})}var hl=K(vl,[["render",fl]]);const ml=j({name:"MobileLayout",components:{MobileNavBar:jt}});function gl(e,l,n,a,i,d){const o=P("MobileNavBar"),t=P("router-view");return w(),q(Ye,{class:"mobile-layout",view:"hHh lpR fff"},{default:y(()=>[p(o),p(Xe,null,{default:y(()=>[p(t)]),_:1})]),_:1})}var pl=K(ml,[["render",gl]]);const bl=j({name:"MainLayout",components:{DesktopLayout:hl,MobileLayout:pl},setup(){const e=Ue(),l=S(window.innerWidth>e.screen.sizes.md);return{isLarge:b({get:()=>l.value,set:a=>l.value=a})}},methods:{onResize(){this.isLarge=window.innerWidth>this.$q.screen.sizes.md}},mounted(){window.addEventListener("resize",this.onResize)},unmounted(){window.removeEventListener("resize",this.onResize)}});function yl(e,l,n,a,i,d){const o=P("DesktopLayout"),t=P("MobileLayout");return w(),U("div",null,[e.isLarge?(w(),q(o,{key:0})):(w(),q(t,{key:1}))])}var kl=K(bl,[["render",yl]]);export{kl as default};
