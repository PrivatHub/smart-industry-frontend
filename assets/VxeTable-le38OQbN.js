var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(r,o,e)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,g=(r,o)=>{for(var e in o||(o={}))k.call(o,e)&&f(r,e,o[e]);if(u)for(var e of u(o))C.call(o,e)&&f(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((s,m)=>{var t=i=>{try{a(e.next(i))}catch(p){m(p)}},n=i=>{try{a(e.throw(i))}catch(p){m(p)}},a=i=>i.done?s(i.value):Promise.resolve(i.value).then(t,n);a((e=e.apply(r,o)).next())});import"./componentMap-DugKaXsO.js";import{a as v}from"./entry/index-Bih4eRQ3.js";import"./helper-DwLEzZnu.js";import"./BasicForm.vue_vue_type_style_index_0_lang-D3m1s9ij.js";import"./antd-BmrhB3rb.js";import"./index-DwFgnsRx.js";import"./TableImg.vue_vue_type_style_index_0_lang-DpR9lumP.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import{_ as y}from"./index-D8xM5a2h.js";import{P as h}from"./index-BmgEq7VP.js";import{vxeTableColumns as T,vxeTableFormSchema as V}from"./tableData-CoiiBA_C.js";import{V as A}from"./index-DC_8dw2T.js";import{d as b}from"./table-D4IKJO9Q.js";import{d as B,f as S,r as w,Z as P,a8 as R,a9 as d,k as x,u as l,ac as q}from"./vue-BjERyvPm.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DBXv6V3L.js";import"./index-TBmZ9eon.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-HHXHS6sg.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-Ccdfhv_A.js";import"./index-XNYHRE5W.js";import"./base64Conver-bBv-IO2K.js";import"./useWindowSizeFn-Crw2Y3p_.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-BrRMSjyc.js";import"./download-Ddsav_Km.js";import"./useContentViewHeight-h1gELXp4.js";import"./select-BJQj9EBv.js";const pe=B({__name:"VxeTable",setup(r){const{createMessage:o}=v(),e=S(),s=w({id:"VxeTable",keepSource:!0,editConfig:{trigger:"click",mode:"cell",showStatus:!0},columns:T,toolbarConfig:{buttons:[{content:"在第一行新增",buttonRender:{name:"AButton",props:{type:"primary",preIcon:"mdi:page-next-outline"},events:{click:()=>{var t;(t=e.value)==null||t.insert({name:"新增的"}),o.success("新增成功")}}}},{content:"在最后一行新增",buttonRender:{name:"AButton",props:{type:"warning"},events:{click:()=>{var t;(t=e.value)==null||t.insertAt({name:"新增的"},-1)}}}}]},formConfig:{enabled:!0,items:V},height:"auto",proxyConfig:{ajax:{query:a=>c(this,[a],function*({page:t,form:n}){return b(g({page:t.currentPage,pageSize:t.pageSize},n))}),queryAll:n=>c(this,[n],function*({form:t}){return yield b(t)})}}}),m=t=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var a;(a=e.value)==null||a.remove(t)}}}];return(t,n)=>(P(),R(l(h),{title:"VxeTable表格",content:"只展示部分操作，详细功能请查看VxeTable官网事例",contentFullHeight:"",fixedHeight:""},{default:d(()=>[x(l(A),q({ref_key:"tableRef",ref:e},s),{action:d(({row:a})=>[x(l(y),{outside:"",actions:m(a)},null,8,["actions"])]),_:1},16)]),_:1}))}});export{pe as default};
