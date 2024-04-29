import{r as I,q as T,d as v,k as _,c as m,y as j,m as k}from"./index-eveRkr_s.js";function ot(){}const at=Object.assign,z=typeof window<"u",D=t=>t!==null&&typeof t=="object",l=t=>t!=null,y=t=>typeof t=="function",ct=t=>D(t)&&y(t.then)&&y(t.catch),R=t=>typeof t=="number"||/^\d+(\.\d+)?$/.test(t),it=()=>z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function A(t,e){const n=e.split(".");let u=t;return n.forEach(o=>{var c;u=D(u)&&(c=u[o])!=null?c:""}),u}function ft(t,e,n){return e.reduce((u,o)=>((!n||t[o]!==void 0)&&(u[o]=t[o]),u),{})}const dt=t=>Array.isArray(t)?t:[t],lt=null,E=[Number,String],L={type:Boolean,default:!0},Et=t=>({type:Number,default:t}),gt=t=>({type:E,default:t}),b=t=>({type:String,default:t});function i(t){if(l(t))return R(t)?`${t}px`:String(t)}function pt(t){if(l(t)){if(Array.isArray(t))return{width:i(t[0]),height:i(t[1])};const e=i(t);return{width:e,height:e}}}function mt(t){const e={};return t!==void 0&&(e.zIndex=+t),e}const K=/-(\w)/g,S=t=>t.replace(K,(e,n)=>n.toUpperCase());function h(t,e,n){const u=t.indexOf(e);return u===-1?t:e==="-"&&u!==0?t.slice(0,u):t.slice(0,u+1)+t.slice(u).replace(n,"")}function Bt(t,e=!0,n=!0){e?t=h(t,".",/\./g):t=t.split(".")[0],n?t=h(t,"-",/-/g):t=t.replace(/-/,"");const u=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(u,"")}const{hasOwnProperty:M}=Object.prototype;function U(t,e,n){const u=e[n];l(u)&&(!M.call(t,n)||!D(u)?t[n]=u:t[n]=w(Object(t[n]),u))}function w(t,e){return Object.keys(e).forEach(n=>{U(t,e,n)}),t}var Y={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(t,e)=>`${t}年${e}月`,rangePrompt:t=>`最多选择 ${t} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:t=>`${t}折`,condition:t=>`满${t}元可用`},vanCouponCell:{title:"优惠券",count:t=>`${t}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const C=I("zh-CN"),O=T({"zh-CN":Y}),Z={messages(){return O[C.value]},use(t,e){C.value=t,this.add({[t]:e})},add(t={}){w(O,t)}};var q=Z;function H(t){const e=S(t)+".";return(n,...u)=>{const o=q.messages(),c=A(o,e+n)||A(o,n);return y(c)?c(...u):c}}function F(t,e){return e?typeof e=="string"?` ${t}--${e}`:Array.isArray(e)?e.reduce((n,u)=>n+F(t,u),""):Object.keys(e).reduce((n,u)=>n+(e[u]?F(t,u):""),""):""}function V(t){return(e,n)=>(e&&typeof e!="string"&&(n=e,e=""),e=e?`${t}__${e}`:t,`${e}${F(e,n)}`)}function $(t){const e=`van-${t}`;return[e,V(e),H(e)]}const B="van-hairline",yt=`${B}--top`,bt=`${B}--left`,Ft=`${B}--surround`,Dt=`${B}--top-bottom`,$t="van-haptics-feedback",At=Symbol("van-form"),ht=5;function N(t){return t.install=e=>{const{name:n}=t;n&&(e.component(n,t),e.component(S(`-${n}`),t))},t}const[W,P]=$("badge"),G={dot:Boolean,max:E,tag:b("div"),color:String,offset:Array,content:E,showZero:L,position:b("top-right")};var X=v({name:W,props:G,setup(t,{slots:e}){const n=()=>{if(e.content)return!0;const{content:s,showZero:r}=t;return l(s)&&s!==""&&(r||s!==0&&s!=="0")},u=()=>{const{dot:s,max:r,content:a}=t;if(!s&&n())return e.content?e.content():l(r)&&R(a)&&+a>+r?`${r}+`:a},o=s=>s.startsWith("-")?s.replace("-",""):`-${s}`,c=_(()=>{const s={background:t.color};if(t.offset){const[r,a]=t.offset,{position:g}=t,[f,p]=g.split("-");e.default?(typeof a=="number"?s[f]=i(f==="top"?a:-a):s[f]=f==="top"?i(a):o(a),typeof r=="number"?s[p]=i(p==="left"?r:-r):s[p]=p==="left"?i(r):o(r)):(s.marginTop=i(a),s.marginLeft=i(r))}return s}),d=()=>{if(n()||t.dot)return m("div",{class:P([t.position,{dot:t.dot,fixed:!!e.default}]),style:c.value},[u()])};return()=>{if(e.default){const{tag:s}=t;return m(s,{class:P("wrapper")},{default:()=>[e.default(),d()]})}return d()}}});const J=N(X),[Q,Ct]=$("config-provider"),tt=Symbol(Q),[et,x]=$("icon"),nt=t=>t==null?void 0:t.includes("/"),ut={dot:Boolean,tag:b("i"),name:String,size:E,badge:E,color:String,badgeProps:Object,classPrefix:String};var st=v({name:et,props:ut,setup(t,{slots:e}){const n=j(tt,null),u=_(()=>t.classPrefix||(n==null?void 0:n.iconPrefix)||x());return()=>{const{tag:o,dot:c,name:d,size:s,badge:r,color:a}=t,g=nt(d);return m(J,k({dot:c,tag:o,class:[u.value,g?"":`${u.value}-${d}`],style:{color:a,fontSize:i(s)},content:r},t.badgeProps),{default:()=>{var f;return[(f=e.default)==null?void 0:f.call(e),g&&m("img",{class:x("image"),src:d},null)]}})}}});const Ot=N(st);export{Dt as B,At as F,$t as H,Ot as I,ht as T,D as a,l as b,$ as c,ct as d,at as e,y as f,gt as g,i as h,z as i,dt as j,Bt as k,Et as l,b as m,E as n,ot as o,ft as p,bt as q,yt as r,mt as s,L as t,lt as u,it as v,N as w,pt as x,Ft as y};