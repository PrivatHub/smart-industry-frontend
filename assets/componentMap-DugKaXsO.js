var Fe=Object.defineProperty,be=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var le=(u,d,e)=>d in u?Fe(u,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[d]=e,I=(u,d)=>{for(var e in d||(d={}))we.call(d,e)&&le(u,e,d[e]);if(re)for(var e of re(d))Se.call(d,e)&&le(u,e,d[e]);return u},V=(u,d)=>be(u,Ae(d));var D=(u,d,e)=>new Promise((S,m)=>{var h=b=>{try{g(e.next(b))}catch(v){m(v)}},y=b=>{try{g(e.throw(b))}catch(v){m(v)}},g=b=>b.done?S(b.value):Promise.resolve(b.value).then(h,y);g((e=e.apply(u,d)).next())});import{u as H}from"./useFormItem-B4KjxddK.js";import{p,r as ke,h as oe,I as Ce,O as Te}from"./entry/index-Bih4eRQ3.js";import{a as ue,e as A,ae as K,o as Z,al as W,am as N,W as ce,an as _e,ao as de,ap as fe,aq as pe,E as M,ar as Pe,as as Re,at as $e,a3 as me,au as Be,av as Ie,aw as J,ax as he,a4 as De}from"./antd-BmrhB3rb.js";import{d as O,f as w,c as G,w as P,u as o,Z as $,a8 as L,a9 as R,ac as Q,H as X,_ as ie,aa as Y,F as se,G as q,a0 as z,ad as x,ae as ee,aj as ae,ak as te,k as U,$ as ye,K as ve,o as ge,h as Ke}from"./vue-BjERyvPm.js";import{_ as Le}from"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DBXv6V3L.js";import{I as je,B as Ge}from"./index-D8xM5a2h.js";import{S as Oe}from"./index-TBmZ9eon.js";import{_ as Ne}from"./IconPicker.vue_vue_type_script_setup_true_lang-HHXHS6sg.js";import{C as Ue}from"./index-Ccdfhv_A.js";import{C as Me}from"./index-XNYHRE5W.js";const Ee=O({name:"ApiRadioGroup",__name:"ApiRadioGroup",props:{api:{type:Function,default:null},params:{type:[Object,String],default:()=>({})},value:{type:[String,Number,Boolean]},isBtn:{type:[Boolean],default:!1},numberToString:p.bool,resultField:p.string.def(""),labelField:p.string.def("label"),valueField:p.string.def("value"),immediate:p.bool.def(!0),beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null}},emits:["options-change","change","update:value"],setup(u,{emit:d}){const e=u,S=d,m=w([]),h=w(!1),y=w([]),g=ke(),[b]=H(e,"value","change",y),v=G(()=>{const{labelField:r,valueField:i,numberToString:t}=e;return o(m).reduce((n,a)=>{if(a){const l=a[i];n.push(I({label:a[r],value:t?`${l}`:l},Z(a,[r,i])))}return n},[])});P(()=>e.params,(r,i)=>{ue(r,i)||T()},{deep:!0,immediate:e.immediate});function T(){return D(this,null,function*(){let{api:r,beforeFetch:i,afterFetch:t,params:n,resultField:a}=e;if(!(!r||!A(r))){m.value=[];try{h.value=!0,i&&A(i)&&(n=(yield i(n))||n);let l=yield r(n);if(t&&A(t)&&(l=(yield t(l))||l),Array.isArray(l)){m.value=l,f();return}a&&(m.value=K(l,a)||[]),f()}catch(l){}finally{h.value=!1}}})}function f(){S("options-change",o(v))}function c(...r){y.value=r}return(r,i)=>($(),L(o(W).Group,Q(o(g),{value:o(b),"onUpdate:value":i[0]||(i[0]=t=>X(b)?b.value=t:null),"button-style":"solid"}),{default:R(()=>[($(!0),ie(se,null,Y(v.value,t=>($(),ie(se,{key:`${t.value}`},[e.isBtn?($(),L(o(W).Button,{key:0,value:t.value,disabled:t.disabled,onClick:n=>c(t)},{default:R(()=>[q(z(t.label),1)]),_:2},1032,["value","disabled","onClick"])):($(),L(o(W),{key:1,value:t.value,disabled:t.disabled,onClick:n=>c(t)},{default:R(()=>[q(z(t.label),1)]),_:2},1032,["value","disabled","onClick"]))],64))),128))]),_:1},16,["value"]))}}),Ve=O({name:"ApiSelect",inheritAttrs:!1,__name:"ApiSelect",props:{value:{type:[Array,Object,String,Number]},numberToString:p.bool,api:{type:Function,default:null},params:p.any.def({}),resultField:p.string.def(""),labelField:p.string.def("label"),valueField:p.string.def("value"),immediate:p.bool.def(!0),alwaysLoad:p.bool.def(!1),options:{type:Array,default:[]},beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null}},emits:["options-change","change","update:value"],setup(u,{emit:d}){const e=u,S=d,m=w([]),h=w(!1),y=w(!1),g=w([]),{t:b}=oe(),[v]=H(e,"value","change",g),T=G(()=>{const{labelField:t,valueField:n,numberToString:a}=e;let l=o(m).reduce((C,F)=>{if(F){const k=K(F,n);C.push(V(I({},Z(F,[t,n])),{label:K(F,t),value:a?`${k}`:k}))}return C},[]);return l.length>0?l:e.options});P(()=>v.value,t=>{S("update:value",t)}),P(()=>e.params,(t,n)=>{ue(t,n)||f()},{deep:!0,immediate:e.immediate});function f(){return D(this,null,function*(){let{api:t,beforeFetch:n,afterFetch:a,params:l,resultField:C}=e;if(!(!t||!A(t)||h.value)){m.value=[];try{h.value=!0,n&&A(n)&&(l=(yield n(l))||l);let F=yield t(l);if(a&&A(a)&&(F=(yield a(F))||F),y.value=!0,Array.isArray(F)){m.value=F,r();return}C&&(m.value=K(F,C)||[]),r()}catch(F){y.value=!1}finally{h.value=!1}}})}function c(t){return D(this,null,function*(){t&&(e.alwaysLoad?yield f():!e.immediate&&!o(y)&&(yield f()))})}function r(){S("options-change",o(T))}function i(t,...n){g.value=n}return(t,n)=>($(),L(o(ce),Q({onDropdownVisibleChange:c},t.$attrs,{onChange:i,options:T.value,value:o(v),"onUpdate:value":n[0]||(n[0]=a=>X(v)?v.value=a:null)}),x({_:2},[Y(Object.keys(t.$slots),a=>({name:a,fn:R(l=>[ee(t.$slots,a,ae(te(l||{})))])})),h.value?{name:"suffixIcon",fn:R(()=>[U(o(N),{spin:""})]),key:"0"}:void 0,h.value?{name:"notFoundContent",fn:R(()=>[ye("span",null,[U(o(N),{spin:"",class:"mr-1"}),q(" "+z(o(b)("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1040,["options","value"]))}}),We=O({name:"ApiTree",__name:"ApiTree",props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:{type:String,default:""},beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null},value:{type:Array}},emits:["options-change","change","update:value"],setup(u,{emit:d}){const e=u,S=d,m=ve(),h=w([]),y=w(!1),g=w(!1),b=w([]),[v]=H(e,"value","change",b),T=G(()=>I(I({},e.api?{treeData:o(h)}:{}),m));P(()=>v.value,c=>{S("update:value",c)}),P(()=>e.params,()=>{!o(y)&&f()},{deep:!0}),P(()=>e.immediate,c=>{c&&!y.value&&f()}),ge(()=>{e.immediate&&f()});function f(){return D(this,null,function*(){let{api:c,beforeFetch:r,afterFetch:i,params:t,resultField:n}=e;if(!c||!A(c))return;g.value=!0,h.value=[];let a;try{r&&A(r)&&(t=(yield r(t))||t),a=yield c(t),i&&A(i)&&(a=(yield i(a))||a)}catch(l){}g.value=!1,a&&(n&&(a=K(a,n)||[]),h.value=a||[],y.value=!0,S("options-change",h.value))})}return(c,r)=>($(),L(o(_e),Q(T.value,{selectedKeys:o(v),"onUpdate:selectedKeys":r[0]||(r[0]=i=>X(v)?v.value=i:null)}),x({_:2},[Y(Object.keys(c.$slots),i=>({name:i,fn:R(t=>[ee(c.$slots,i,ae(te(t||{})))])}))]),1040,["selectedKeys"]))}}),qe=O({name:"ApiTreeSelect",__name:"ApiTreeSelect",props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},async:{type:Boolean,default:!1},resultField:p.string.def(""),labelField:p.string.def("title"),valueField:p.string.def("value"),childrenField:p.string.def("children"),beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null}},emits:["options-change","change","load-data"],setup(u,{emit:d}){const e=u,S=d,m=ve(),h=w([]),y=w(!1),g=w(!1),b=G(()=>I(I({},e.api?{treeData:o(h)}:{}),m)),v={children:e.childrenField,value:e.valueField,label:e.labelField};function T(...r){S("change",...r)}P(()=>e.params,()=>{!o(y)&&c()},{deep:!0}),P(()=>e.immediate,r=>{r&&!y.value&&c()}),ge(()=>{e.immediate&&c()});function f(r){return new Promise(i=>{if(Ce(r.children)&&r.children.length>0){i();return}S("load-data",{treeData:h,treeNode:r,resolve:i})})}function c(){return D(this,null,function*(){let{api:r,beforeFetch:i,afterFetch:t,params:n,resultField:a}=e;if(!r||!A(r)||g.value)return;g.value=!0,h.value=[];let l;try{i&&A(i)&&(n=(yield i(n))||n),l=yield r(n),t&&A(t)&&(l=(yield t(l))||l)}catch(C){}g.value=!1,l&&(a&&(l=K(l,a)||[]),h.value=l||[],y.value=!0,S("options-change",h.value))})}return(r,i)=>($(),L(o(de),Q(b.value,{onChange:T,"field-names":v,"load-data":u.async?f:void 0}),x({_:2},[Y(Object.keys(r.$slots),t=>({name:t,fn:R(n=>[ee(r.$slots,t,ae(te(n||{})))])})),g.value?{name:"suffixIcon",fn:R(()=>[U(o(N),{spin:""})]),key:"0"}:void 0]),1040,["load-data"]))}}),ze=O({name:"ApiCascader",__name:"ApiCascader",props:{value:{type:Array},api:{type:Function,default:null},numberToString:p.bool,resultField:p.string.def(""),labelField:p.string.def("label"),valueField:p.string.def("value"),childrenField:p.string.def("children"),apiParamKey:p.string.def("parentCode"),immediate:p.bool.def(!0),initFetchParams:{type:Object,default:()=>({})},isLeaf:{type:Function,default:null},displayRenderArray:{type:Array},beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null}},emits:["change","defaultChange"],setup(u,{emit:d}){const e=u,S=d,m=w([]),h=w([]),y=w(!1),g=w([]),b=w(!0),{t:v}=oe(),[T]=H(e,"value","change",g);P(m,n=>{const a=f(n);h.value=a},{deep:!0});function f(n){const{labelField:a,valueField:l,numberToString:C,childrenField:F,isLeaf:k}=e;return n.reduce((E,_)=>{if(_){const B=_[l],j=V(I({},Z(_,[a,l])),{label:_[a],value:C?`${B}`:B,isLeaf:k&&typeof k=="function"?k(_):!1}),ne=Reflect.get(_,F);ne&&Reflect.set(j,F,f(ne)),E.push(j)}return E},[])}function c(){return D(this,null,function*(){let{api:n,beforeFetch:a,initFetchParams:l,afterFetch:C,resultField:F}=e;if(!(!n||!A(n))){m.value=[],y.value=!0;try{a&&A(a)&&(l=(yield a(l))||l);let k=yield n(l);if(C&&A(C)&&(k=(yield C(k))||k),Array.isArray(k)){m.value=k;return}F&&(m.value=K(k,F)||[])}catch(k){}finally{y.value=!1}}})}const r=n=>D(this,null,function*(){const a=n[n.length-1];a.loading=!0;let{api:l,beforeFetch:C,afterFetch:F,resultField:k,apiParamKey:E}=e;if(!(!l||!A(l)))try{let _={[E]:Reflect.get(a,"value")};C&&A(C)&&(_=(yield C(_))||_);let B=yield l(_);if(F&&A(F)&&(B=(yield F(B))||B),Array.isArray(B)){const j=f(B);a.children=j;return}if(k){const j=f(K(B,k)||[]);a.children=j}}catch(_){}finally{a.loading=!1}});P(()=>e.immediate,()=>{e.immediate&&c()},{immediate:!0}),P(()=>e.initFetchParams,()=>{!o(b)&&c()},{deep:!0});function i(n,a){g.value=a,S("defaultChange",n,a)}const t=({labels:n,selectedOptions:a})=>o(g).length===(a==null?void 0:a.length)?n.join(" / "):e.displayRenderArray?e.displayRenderArray.join(" / "):"";return(n,a)=>($(),L(o(fe),{value:o(T),"onUpdate:value":a[0]||(a[0]=l=>X(T)?T.value=l:null),options:h.value,"load-data":r,"change-on-select":"",onChange:i,displayRender:t},x({_:2},[y.value?{name:"suffixIcon",fn:R(()=>[U(o(N),{spin:""})]),key:"0"}:void 0,y.value?{name:"notFoundContent",fn:R(()=>[ye("span",null,[U(o(N),{spin:"",class:"mr-1"}),q(" "+z(o(v)("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1032,["value","options"]))}}),He=O({name:"ApiTransfer",__name:"ApiTransfer",props:{value:{type:Array},api:{type:Function,default:null},params:{type:Object},dataSource:{type:Array},immediate:p.bool.def(!0),alwaysLoad:p.bool.def(!1),beforeFetch:{type:Function,default:null},afterFetch:{type:Function,default:null},resultField:p.string.def(""),labelField:p.string.def("title"),valueField:p.string.def("key"),showSearch:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterOption:{type:Function},selectedKeys:{type:Array},showSelectAll:{type:Boolean,default:!1},targetKeys:{type:Array}},emits:["options-change","change"],setup(u,{emit:d}){const e=u,S=d,m=w([]),h=w([]),y=G(()=>{const{labelField:f,valueField:c}=e;return o(m).reduce((r,i)=>(i&&r.push(V(I({},Z(i,[f,c])),{title:i[f],key:i[c]})),r),[])}),g=G(()=>Array.isArray(e.value)?e.value:Array.isArray(e.targetKeys)?e.targetKeys:[]);function b(f,c,r){h.value=f,S("change",f)}Ke(()=>{e.immediate&&!e.alwaysLoad&&v()}),P(()=>e.params,()=>{v()},{deep:!0});function v(){return D(this,null,function*(){let{api:f,beforeFetch:c,afterFetch:r,params:i,resultField:t,dataSource:n}=e;if(!f||!A(f)){Array.isArray(n)&&(m.value=n);return}m.value=[];try{c&&A(c)&&(i=(yield c(i))||i);let a=yield f(i);if(r&&A(r)&&(a=(yield r(a))||a),Array.isArray(a)){m.value=a,T();return}t&&(m.value=K(a,t)||[]),T()}catch(a){}})}function T(){S("options-change",o(y))}return(f,c)=>($(),L(o(pe),{"data-source":y.value,"filter-option":u.filterOption,render:r=>r.title,showSelectAll:u.showSelectAll,selectedKeys:u.selectedKeys,targetKeys:g.value,showSearch:u.showSearch,disabled:u.disabled,onChange:b},null,8,["data-source","filter-option","render","showSelectAll","selectedKeys","targetKeys","showSearch","disabled"]))}}),s=new Map;s.set("Input",M);s.set("InputGroup",M.Group);s.set("InputPassword",M.Password);s.set("InputSearch",M.Search);s.set("InputTextArea",M.TextArea);s.set("InputNumber",Pe);s.set("AutoComplete",Re);s.set("ImageUpload",je);s.set("Select",ce);s.set("ApiSelect",Ve);s.set("ApiTree",We);s.set("TreeSelect",de);s.set("ApiTreeSelect",qe);s.set("ApiRadioGroup",Ee);s.set("Switch",$e);s.set("RadioButtonGroup",Le);s.set("RadioGroup",W.Group);s.set("Checkbox",me);s.set("CheckboxGroup",me.Group);s.set("ApiCascader",ze);s.set("Cascader",fe);s.set("Slider",Be);s.set("Rate",Ie);s.set("Transfer",pe);s.set("ApiTransfer",He);s.set("DatePicker",J);s.set("MonthPicker",J.MonthPicker);s.set("RangePicker",J.RangePicker);s.set("WeekPicker",J.WeekPicker);s.set("TimePicker",he);s.set("TimeRangePicker",he.TimeRangePicker);s.set("StrengthMeter",Oe);s.set("IconPicker",Ne);s.set("InputCountDown",Ue);s.set("Upload",Ge);s.set("Divider",De);s.set("CropperAvatar",Me);s.set("BasicTitle",Te);function la(u,d){s.set(u,d)}export{Ve as _,qe as a,Ee as b,s as c,la as d};
