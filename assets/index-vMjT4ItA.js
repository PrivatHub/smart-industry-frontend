import{_ as I}from"./BasicTable.vue_vue_type_script_setup_true_lang-DebEXKlU.js";import"./TableImg.vue_vue_type_style_index_0_lang-DpR9lumP.js";import{_ as R}from"./index-D8xM5a2h.js";import{u as T}from"./useTable-BhWI8D1Q.js";import{g as F}from"./system-BZW2kWY5.js";import{P as M}from"./index-BmgEq7VP.js";import{_ as N}from"./DeptTree.vue_vue_type_script_setup_true_lang-kKv6wChe.js";import{b as V}from"./index-DwFgnsRx.js";import{_ as $}from"./AccountModal.vue_vue_type_script_setup_true_lang-RdJkk9tD.js";import{c as E,s as A}from"./account.data-D1Ik3kIF.js";import{aN as B}from"./entry/index-Bih4eRQ3.js";import{d as D,r as G,a7 as H,Z as l,a8 as p,a9 as e,k as o,u as n,G as d,ab as P}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-D6TTEelU.js";import"./FormItem.vue_vue_type_script_lang-C0edDPHt.js";import"./componentMap-DugKaXsO.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DBXv6V3L.js";import"./index-TBmZ9eon.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-HHXHS6sg.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-Ccdfhv_A.js";import"./index-XNYHRE5W.js";import"./base64Conver-bBv-IO2K.js";import"./helper-DwLEzZnu.js";import"./BasicForm.vue_vue_type_style_index_0_lang-D3m1s9ij.js";import"./useForm-DIMnUl9w.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useWindowSizeFn-Crw2Y3p_.js";import"./useSortable-BrRMSjyc.js";import"./download-Ddsav_Km.js";import"./useContentViewHeight-h1gELXp4.js";import"./index-BApu4tfi.js";import"./useContextMenu-BuLIFB-p.js";const wt=D({name:"AccountManagement",__name:"index",setup(U){const u=B(),[f,{openModal:a}]=V(),s=G({}),[_,{reload:m,updateTableDataRecord:h,getSearchInfo:W}]=T({title:"账号列表",api:F,rowKey:"id",columns:E,formConfig:{labelWidth:120,schemas:A,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){return t},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function g(){a(!0,{isUpdate:!1})}function b(t){a(!0,{record:t,isUpdate:!0})}function C(t){}function x(){}function y({isUpdate:t,values:i}){t?h(i.id,i):m()}function S(t=""){s.deptId=t,m()}function k(t){u("/system/account_detail/"+t.id)}return(t,i)=>{const c=H("a-button");return l(),p(n(M),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:e(()=>[o(N,{class:"w-1/4 xl:w-1/5",onSelect:S}),o(n(I),{onRegister:n(_),class:"w-3/4 xl:w-4/5",searchInfo:s},{toolbar:e(()=>[o(c,{type:"primary",onClick:g},{default:e(()=>[d("新增账号")]),_:1}),o(c,{type:"primary",onClick:x},{default:e(()=>[d("导出账号")]),_:1})]),bodyCell:e(({column:w,record:r})=>[w.key==="action"?(l(),p(n(R),{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:k.bind(null,r)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:b.bind(null,r)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:C.bind(null,r)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister","searchInfo"]),o($,{onRegister:n(f),onSuccess:y},null,8,["onRegister"])]),_:1})}}});export{wt as default};
