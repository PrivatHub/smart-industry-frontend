import{d as v,f as h,r as x,Z as a,a8 as p,a9 as c,$ as l,k as o,u as r,m as n,A as s,ab as u}from"./vue-BjERyvPm.js";import N from"./Step1-DTaEQnqr.js";import{_ as k}from"./Step2.vue_vue_type_script_setup_true_lang-ShQVEE9q.js";import{_ as P}from"./Step3.vue_vue_type_script_setup_true_lang-m10jYnXR.js";import{P as V}from"./index-BmgEq7VP.js";import{bj as i}from"./antd-BmrhB3rb.js";import{c as b}from"./entry/index-Bih4eRQ3.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-D6TTEelU.js";import"./FormItem.vue_vue_type_script_lang-C0edDPHt.js";import"./componentMap-DugKaXsO.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DBXv6V3L.js";import"./index-D8xM5a2h.js";import"./index-DwFgnsRx.js";import"./useWindowSizeFn-Crw2Y3p_.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BrRMSjyc.js";import"./download-Ddsav_Km.js";import"./base64Conver-bBv-IO2K.js";import"./index-TBmZ9eon.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-HHXHS6sg.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-Ccdfhv_A.js";import"./index-XNYHRE5W.js";import"./helper-DwLEzZnu.js";import"./BasicForm.vue_vue_type_style_index_0_lang-D3m1s9ij.js";import"./useForm-DIMnUl9w.js";import"./data-CaNweXRQ.js";import"./useContentViewHeight-h1gELXp4.js";import"./onMountedOrActivated-DcvTUt7V.js";const B={class:"step-form-form"},C={class:"mt-5"},g=v({name:"FormStepPage",__name:"index",setup(w){const t=h(0),e=x({initStep2:!1,initStep3:!1});function f(m){t.value++,e.initStep2=!0}function _(){t.value--}function d(m){t.value++,e.initStep3=!0}function S(){t.value=0,e.initStep2=!1,e.initStep3=!1}return(m,$)=>(a(),p(r(V),{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:c(()=>[l("div",B,[o(r(i),{current:t.value},{default:c(()=>[o(r(i).Step,{title:"填写转账信息"}),o(r(i).Step,{title:"确认转账信息"}),o(r(i).Step,{title:"完成"})]),_:1},8,["current"])]),l("div",C,[n(o(N,{onNext:f},null,512),[[s,t.value===0]]),e.initStep2?n((a(),p(k,{key:0,onPrev:_,onNext:d},null,512)),[[s,t.value===1]]):u("",!0),e.initStep3?n((a(),p(P,{key:1,onRedo:S},null,512)),[[s,t.value===2]]):u("",!0)])]),_:1}))}}),pt=b(g,[["__scopeId","data-v-778b6ab2"]]);export{pt as default};
