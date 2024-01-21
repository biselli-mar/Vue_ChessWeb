import{c as K,g as U,h as i,Z as le,aK as se,aF as F,K as ue,u as de,M as re,d as ce,r as L,aE as N,R as ge,a as b,w as B,k as fe,aJ as A,z as me,j as he,aL as ve,b as be,Q as H,a2 as Se,m as Ie,_ as xe,n as y,a8 as O,p as j,q as I,t as x,aM as D,aN as M,v as w,aO as P,aP as R,aQ as _e,ad as pe,aR as Te}from"./index.d08d67fc.js";import{a as G,Q}from"./QItemLabel.6ea88fdd.js";var ye=K({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:d,emit:p}){let l=!1,g,a,o=null,r=null,c,T;function S(){g&&g(),g=null,l=!1,o!==null&&(clearTimeout(o),o=null),r!==null&&(clearTimeout(r),r=null),a!==void 0&&a.removeEventListener("transitionend",c),c=null}function s(n,u,m){u!==void 0&&(n.style.height=`${u}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,g=m}function f(n,u){n.style.overflowY=null,n.style.height=null,n.style.transition=null,S(),u!==T&&p(u)}function C(n,u){let m=0;a=n,l===!0?(S(),m=n.offsetHeight===n.scrollHeight?0:void 0):(T="hide",n.style.overflowY="hidden"),s(n,m,u),o=setTimeout(()=>{o=null,n.style.height=`${n.scrollHeight}px`,c=h=>{r=null,(Object(h)!==h||h.target===n)&&f(n,"show")},n.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}function q(n,u){let m;a=n,l===!0?S():(T="show",n.style.overflowY="hidden",m=n.scrollHeight),s(n,m,u),o=setTimeout(()=>{o=null,n.style.height=0,c=h=>{r=null,(Object(h)!==h||h.target===n)&&f(n,"hide")},n.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}return U(()=>{l===!0&&S()}),()=>i(le,{css:!1,appear:e.appear,onEnter:C,onLeave:q},d.default)}});const _=se({}),ke=Object.keys(F);var we=K({name:"QExpansionItem",props:{...F,...ue,...de,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...re,"click","afterShow","afterHide"],setup(e,{slots:d,emit:p}){const{proxy:{$q:l}}=fe(),g=ce(e,l),a=L(e.modelValue!==null?e.modelValue:e.defaultOpened),o=L(null),r=N(),{show:c,hide:T,toggle:S}=ge({showing:a});let s,f;const C=b(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),q=b(()=>{if(e.contentInsetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=b(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),u=b(()=>{const t={};return ke.forEach(v=>{t[v]=e[v]}),t}),m=b(()=>n.value===!0||e.expandIconToggle!==!0),h=b(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),Y=b(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),z=b(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:S,show:c,hide:T})),V=b(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":r,"aria-label":t}});B(()=>e.group,t=>{f!==void 0&&f(),t!==void 0&&$()});function J(t){n.value!==!0&&S(t),p("click",t)}function Z(t){t.keyCode===13&&E(t,!0)}function E(t,v){v!==!0&&o.value!==null&&o.value.focus(),S(t),Se(t)}function W(){p("afterShow")}function X(){p("afterHide")}function $(){s===void 0&&(s=N()),a.value===!0&&(_[e.group]=s);const t=B(a,k=>{k===!0?_[e.group]=s:_[e.group]===s&&delete _[e.group]}),v=B(()=>_[e.group],(k,oe)=>{oe===s&&k!==void 0&&k!==s&&T()});f=()=>{t(),v(),_[e.group]===s&&delete _[e.group],f=void 0}}function ee(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},v=[i(H,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:h.value})];return Y.value===!0&&(Object.assign(t,{tabindex:0,...V.value,onClick:E,onKeyup:Z}),v.unshift(i("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i(Q,t,()=>v)}function te(){let t;return d.header!==void 0?t=[].concat(d.header(z.value)):(t=[i(Q,()=>[i(G,{lines:e.labelLines},()=>e.label||""),e.caption?i(G,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i(Q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(H,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ee()),t}function ne(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:g.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return m.value===!0&&(t.clickable=!0,t.onClick=J,Object.assign(t,n.value===!0?u.value:V.value)),i(me,t,te)}function ae(){return he(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:q.value,id:r},be(d.default)),[[ve,a.value]])}function ie(){const t=[ne(),i(ye,{duration:e.duration,onShow:W,onHide:X},ae)];return e.expandSeparator===!0&&t.push(i(A,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:g.value}),i(A,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:g.value})),t}return e.group!==void 0&&$(),U(()=>{f!==void 0&&f()}),()=>i("div",{class:C.value},[i("div",{class:"q-expansion-item__container relative-position"},ie())])}});const Le=Ie({name:"AccordionItem",props:{title:String,expanded:Boolean,popupMode:Boolean,image:String,accordionGroup:String},setup(e){return{isOpen:L(e.expanded),dialogVisible:L(!1)}},methods:{toggleAccordion(){this.isOpen=!this.isOpen},openDialog(){this.dialogVisible=!0},closeDialog(){this.dialogVisible=!1}}}),Ce=["src"],qe={class:"description-section"},Be=["src"],Oe={class:"description-section"};function Qe(e,d,p,l,g,a){return y(),O("div",null,[e.popupMode?w("",!0):(y(),j(we,{key:0,label:e.title,modelValue:e.isOpen,"onUpdate:modelValue":d[0]||(d[0]=o=>e.isOpen=o),"header-class":"text-info",group:e.accordionGroup},{default:I(()=>[x(D,null,{default:I(()=>[x(M,{class:"flex"},{default:I(()=>[e.image?(y(),O("img",{key:0,src:e.image,alt:"Thumbnail",class:"thumbnail"},null,8,Ce)):w("",!0),P("div",qe,[R(e.$slots,"default",{},void 0,!0)])]),_:3})]),_:3})]),_:3},8,["label","modelValue","group"])),x(A),e.popupMode?(y(),j(Te,{key:1,modelValue:e.dialogVisible,"onUpdate:modelValue":d[1]||(d[1]=o=>e.dialogVisible=o)},{default:I(()=>[x(D,null,{default:I(()=>[x(M,{class:"flex"},{default:I(()=>[e.image?(y(),O("img",{key:0,src:e.image,alt:"Thumbnail",class:"thumbnail"},null,8,Be)):w("",!0),P("div",Oe,[R(e.$slots,"default",{},void 0,!0)])]),_:3}),x(_e,{align:"right"},{default:I(()=>[x(pe,{color:"primary",label:"Close",onClick:e.closeDialog},null,8,["onClick"])]),_:1})]),_:3})]),_:3},8,["modelValue"])):w("",!0)])}var Ee=xe(Le,[["render",Qe],["__scopeId","data-v-ab0232fc"]]);export{Ee as A};
