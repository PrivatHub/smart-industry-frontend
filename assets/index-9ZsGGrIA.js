import{aJ as T,t as F,aK as x}from"./entry/index-Bih4eRQ3.js";import{u as i,d as w,f as y,r as W,a7 as B,n as D,m as E,Z as N,a8 as R,a9 as s,$ as V,k as t,G as c}from"./vue-BjERyvPm.js";import{P as A}from"./index-BmgEq7VP.js";import{aE as m}from"./antd-BmrhB3rb.js";import"./useContentViewHeight-h1gELXp4.js";import"./useWindowSizeFn-Crw2Y3p_.js";import"./onMountedOrActivated-DcvTUt7V.js";function _(r){let a,n=document.body;if(Reflect.has(r,"target")||Reflect.has(r,"props")){const o=r;a=o.props||{},n=o.target||document.body}else a=r;const e=T(a,void 0,!0),p=()=>{const o=i(n);o&&e.open(o)},u=()=>{e.close()},d=o=>{e.setTip(o)};return F(()=>{e.destroy()}),[p,u,d]}const $=w({__name:"index",setup(r){const a=y(null),n=y(!1),e=W({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"加载中..."}),[p,u]=_({tip:"加载中..."}),[d,o]=_({target:a,props:{tip:"加载中...",absolute:!0}});function g(f){e.absolute=f,e.loading=!0,setTimeout(()=>{e.loading=!1},2e3)}function L(){g(!1)}function b(){g(!0)}function k(){p(),setTimeout(()=>{u()},2e3)}function v(){d(),setTimeout(()=>{o()},2e3)}function C(){n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(f,P)=>{const l=B("a-button"),h=D("loading");return E((N(),R(i(A),{"loading-tip":"加载中...",title:"Loading组件示例"},{default:s(()=>[V("div",{ref_key:"wrapEl",ref:a},[t(i(m),{message:"组件方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:L},{default:s(()=>[c(" 全屏 Loading ")]),_:1}),t(l,{class:"my-4",type:"primary",onClick:b},{default:s(()=>[c(" 容器内 Loading ")]),_:1}),t(i(x),{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i(m),{message:"函数方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:k},{default:s(()=>[c(" 全屏 Loading ")]),_:1}),t(l,{class:"my-4",type:"primary",onClick:v},{default:s(()=>[c(" 容器内 Loading ")]),_:1}),t(i(m),{message:"指令方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:C},{default:s(()=>[c(" 打开指令Loading ")]),_:1})],512)]),_:1})),[[h,n.value]])}}});export{$ as default};
