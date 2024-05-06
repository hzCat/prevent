import{_ as y,r,T as B,o as w,g as I,a6 as j,j as d,a3 as S,v as k,x as b,q as t,N as O,R as q,a7 as Z,a8 as J,k as Q,l as M,t as G,a4 as D,a as h,F as U,a9 as X,aa as z,$ as ee}from"./index-DcSzU1BN.js";import{b as E,s as V}from"./index-BfPAezUI.js";import{P as W}from"./mount-component-DfGsuC5f.js";import{C as te}from"./index-CLbNG_u9.js";const se="/prevent_page/assets/10001-LBhIaKv9.png",oe=e=>(k("data-v-ddd63547"),e=e(),b(),e),ae=oe(()=>t("img",{class:"start-img",src:se,alt:""},null,-1)),le=[ae],ne={__name:"Start",setup(e){let n=r(!1),o=r(!0);return B(()=>{setTimeout(()=>{n.value=!0,setTimeout(()=>{o.value=!1},2e3)},1e3)}),(c,a)=>(w(),I("div",{class:j(["lottery-shadow",{opacity:d(n)}]),style:S({display:d(o)?"block":"none"})},le,6))}},ce=y(ne,[["__scopeId","data-v-ddd63547"]]),re="/prevent_page/assets/10007-DEltKGUL.png",ie="/prevent_page/assets/10004-BfxYo3xs.png",ue="/prevent_page/assets/10008-CkGpkakW.png",pe="/prevent_page/assets/blink-YHyeKrvY.gif",Y=e=>(k("data-v-78f2b0e4"),e=e(),b(),e),_e={class:"lottery-circle"},de=Y(()=>t("img",{src:re,alt:"",class:"bg"},null,-1)),me=Y(()=>t("div",{class:"blink"},null,-1)),ve={class:"end-effect",src:pe,alt:""},fe={__name:"LotteryCircle",props:{finalDeg:{type:Number,default:0}},emits:["result"],setup(e,{emit:n}){const o=e,c=n;let a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,_=window.cancelAnimationFrame||window.mozCancelAnimationFrame,s=r(0),u=!1,p=r(!1),f=.5,l=0,$=30,i=r(0),x=null,m=r(0),P=O(()=>{let v=360-i.value%360+1800-o.finalDeg,g=15,H=Math.floor(v/g),T=g*2,K=T/H;return{calc:v,maxSpeed:T,step:K}});q(p,v=>{v&&setTimeout(()=>{p.value=!1,c("result","end")},2e3)});function A(){if(u){E("请等待本次转盘抽奖结束");return}s.value=0,l=0,i.value=0,x=null,m.value=Math.floor(Math.random()*11+-5)-o.finalDeg,u=!0,p.value=!1,x=a(C)}function C(){let v=l+f;if(v>=$&&(v=$,!i.value&&(i.value=s.value)),l=v,s.value=s.value+l,(s.value-i.value)/360>=3){L();return}x=a(C)}function L(){if(l=l-P.value.step,s.value=s.value+l,l<=1.5){l=1.5;let g=null;if(m.value<0){if(g=360+m.value,s.value%360<=360&&s.value%360>=g){N();return}}else if(g=m.value,[1,2].includes(Math.ceil(s.value%360)-g)){N();return}}x=a(L)}function N(){u=!1,_(x),p.value=!0}return(v,g)=>(w(),I("div",_e,[de,me,t("img",{class:"money",style:S({transform:`rotateZ(${d(s)}deg)`}),src:ie},null,4),t("img",{src:ue,alt:"",class:"btn",onClick:A}),Z(t("img",ve,null,512),[[J,d(p)]])]))}},he=y(fe,[["__scopeId","data-v-78f2b0e4"]]),ge="/prevent_page/assets/yidong-BTcR9NpN.png",ye={class:"rule-popup"},we=["innerHTML"],$e={__name:"RulePopup",props:{title:{type:String,default:""}},setup(e,{expose:n}){const o=e;let c=r(!1),a=r("");function _(s){a.value=s,c.value=!0}return n({open:_}),(s,u)=>{const p=W;return w(),Q(p,{show:d(c),"onUpdate:show":u[0]||(u[0]=f=>D(c)?c.value=f:c=f),round:"",teleport:"body"},{default:M(()=>[t("div",ye,[t("h3",null,G(o.title),1),t("p",{innerHTML:d(a)},null,8,we)])]),_:1},8,["show"])}}},xe=y($e,[["__scopeId","data-v-f9de88c7"]]),Ie=`"快手帮忙app"是由四川天月网络科技有限公司（以下简称“我们”）为您提供购买商品、查询订单、评价商品、咨询在线客服的平台。

我们非常重视您的隐私。本隐私政策是针对快手帮忙用户做出的隐私方面的陈述与承诺。

本隐私政策在制定时充分考虑到您的需求，您全面了解我们的个人信息收集和使用惯例，同时确保您最终能控制提供给我们的个人信息，这一点至关重要。本隐私政策规定我们如何收集、使用、披露、处理和存储您使用我们的快手帮忙时提供给我们的信息。本隐私政策下“个人信息”指通过信息本身或通过关联其他信息后能够识别特定个人的数据。我们将严格遵守本隐私政策来使用这些信息。

最后，我们希望为用户带来最好的体验。如果您对本隐私政策中描述的个人信息处理实践有任何疑问，请通过客服热线400-005-9927联系我们，以便我们处理您的特殊需求。我们很高兴收到您的反馈。

一、我们收集哪些信息以及如何使用信息

（一）您须授权我们收集和使用您个人信息的情形

收集个人信息的目的在于向您提供产品和/或服务，并且保证我们遵守适用的相关法律、法规及其他规范性文件。您有权自行选择是否提供该信息，但多数情况下，如果您不提供，我们可能无法向您提供相应的服务，也无法回应您遇到的问题。这些功能包括：

实现网上购物所必须的功能

（1）商品信息展示和搜索

为了让您快速地找到您所需要的商品，我们可能会直接或者间接地收集您使用的服务以及使用方式的信息并将这些信息进行关联，这些信息包括：

设备信息：我们会根据您在软件安装及使用中的具体操作，接受并记录您所使用的设备相关信息。例如：设备型号、操作系统版本、MAC地址、设备设置、设备标识符（IMEI/AndroidID/IDFA/OpenUDID/GUID/SIM卡IMSI信息）、移动应用列表等软硬件及设备环境信息、设备所在位置相关信息（包括IP地址、GPS位置以及WLAN接入点、蓝牙和基站等传感器信息）和设备权限信息（包括存储权限）。请注意，单独的设备信息、日志信息等是无法识别特定自然人身份的信息。

您也可以通过搜索来精准地找到您所需要的商品或服务。我们会保留您的搜索内容以方便您重复输入或为您展示与您搜索内容相关联的商品。请您注意，您的搜索关键词信息无法单独识别您的身份，不属于您的个人信息，我们有权以任何的目的对其进行使用；只有当您的搜索关键词信息与您的其他信息相互结合使用并可以识别您的身份时，则在结合使用期间，我们会将您的搜索关键词信息作为您的个人信息，与您的搜索历史记录一同按照本隐私政策对其进行处理与保护。

（2）下单

当您准备对您购物车内的商品进行结算时，系统会生成您购买该商品的订单。您需要在订单中至少填写您的手机号码，同时该订单中会载明订单号、您所购买的商品或服务信息（包括商品编号、商品名称、商品数量）、购买时间、您应支付的货款金额及支付方式。

上述所有信息构成您的“订单信息”。若您购买的商品或服务属于快手帮忙自营的，为帮助您实现订单相关服务，我们将使用您的订单信息来进行您的身份核验、确定交易、支付结算、完成配送、为您查询和展示订单详情以及提供客服咨询与售后服务。若您购买的商品或服务由第三方商家直接提供，且商品的配送、客服与售后服务由此类商家为您提供，则我们会将您的订单信息提供给此类商家来实现此类目的。若第三方商家委托快手帮忙提供上述的配送、客服与售后服务，我们也会使用您的订单信息来为您提供此类服务。

（3）支付功能

在您下单后，您可以选择快手帮忙的关联方或与快手帮忙合作的第三方支付机构（包括微信支付、支付宝等支付通道，以下称“支付机构”）所提供的支付服务。支付功能本身并不收集您的个人信息，但我们需要将您的订单号与交易金额信息与这些支付机构共享以实现其确认您的支付指令并完成支付。

（4）交付产品或服务功能

在当您下单实体产品并选择货到付款或在线完成支付后，与快手帮忙合作的第三方配送公司（包括中国邮政、顺丰、四达一通等，以下称“配送公司”）将为您完成订单的交付。您知晓并同意与快手帮忙合作的第三方配送公司会在上述环节内使用您的订单信息以保证您的订购的商品能够安全送达。若您购买的商品或服务由第三方商家直接提供，或者您购买的商品存放在与快手帮忙合作的第三方物流仓库，我们会将您的订单信息提供给此类商家或第三方仓储物流服务供应商来为您交付产品或服务。

您可以在订单详情中查看商品配送进度。为此，我们会从配送公司获得您购买的商品的配送信息，包括配送公司、配送单号、配送/妥投状态与时间，以为您展示商品配送进度。

（5）客服与售后功能

我们的电话客服和售后功能会使用您的账号信息和订单信息。为保证您的账号安全，我们的呼叫中心客服和在线客服会使用您的账号信息与您核验您的身份。当您需要我们提供与您订单信息相关的客服与售后服务时，我们将会查询您的订单信息。您有可能会在与我们的信息。客服热线400-005-9927`,Se=`感谢您选择注册成为快手帮忙的用户，本《用户注册协议》（以下简称“本协议”）由快手帮忙APP和您签署。

在您注册成为快手帮忙用户前，您已认真、仔细阅读并充分理解本协议的所有条款、内容。在您按照快手帮忙的流程成功注册后，本协议即产生法律效力。您将有权依据本协议的条款享受快手帮忙的服务，同时有义务接受本协议条款的约束。如果您不同意本授权书的任意内容，请不要进行后续操作。

快手帮忙可能根据法律法规的要求或业务运营的需要，对本协议不时进行修改，快手帮忙将通过快手帮忙APP提前公告，公告期满即为生效。在该等情况下，若您继续使用快手帮忙服务，即表明您接受此等变更或修改。如果您不同意本注册协议（包括任何修订内容）的全部规定，则请立即停止使用快手帮忙提供的所有服务。

一、定义

1、快手帮忙平台：指由快手帮忙运营并向您提供各项优惠权益服务的网络平台，包括但不限于快手帮忙现在正在运营的APP及其他电子操作环境等。

2、快手帮忙平台服务：快手帮忙通过快手帮忙平台向您提供的各项服务包括但不限于以下几类：

（1）购物电商渠道服务：指快手帮忙作为购物电商平台合作渠道方，由合作方向您提供的用于满足您需求的电商产品或服务。

（2）快手帮忙权益卡服务：指快手帮忙权益服务，可享受快手帮忙与第三方合作商家共同推出的尊贵特权体验和增值服务。快手帮忙有权根据市场情况对上述服务进行变更、调整、取消、增加。

3、快手帮忙平台规则：包括快手帮忙在快手帮忙平台已经发布及后续陆续发布的全部规则、实施细则、产品说明、公告、通知等。

二、用户资格

1、注册成为快手帮忙用户，您需满足下列条件:

（1）中华人民共和国大陆地区内居民(不包含台、港、澳地区);

（2）具有符合中华人民共和国法律规定的完全民事权利能力及行为能力。

2、您需接受快手帮忙全部协议条款及规则，方可成为快手帮忙注册用户，接受快手帮忙提供的服务。

3、您确认本协议全部条款并完成注册的，视为您符合注册条件，能够独立承担因接受快手帮忙服务所产生权利义务。

4、快手帮忙保留在中华人民共和国现行有效之法律、法规范围内接受、拒绝、终止/中止您接受快手帮忙服务之资格。

5、用户所填写的个人信息如有变动，应及时登录快手帮忙app更改个人信息，用户因未及时更改造成的损失，快手帮忙概不负责。

四、快手帮忙的服务内容

1、快手帮忙通过快手帮忙APP向您提供快手帮忙平台服务，包括但不限于电商渠道服务、权益卡服务以及其他快手帮忙后续不断新增的服务类型等，具体如下:

（1）快手帮忙依法向您提供便捷电商渠道购物服务，例如淘宝、京东、拼多多、唯品会、微商城等。

（2）权益卡服务，例如话费充值、增值服务充值、办卡进度查询等

（3）快手帮忙依法向您提供法律法规所允许的其他服务。

2、对于快手帮忙向您提供的服务，快手帮忙需要收取一次会员费。此外，您在使用快手帮忙服务过程中（如话费充值等）可能需要向第三方（如运营商等）支付一定的费用，具体收费标准详见第三方平台相关页面或本平台的提示。

3、服务的获取 您可以从快手帮忙APP获取本服务。

五、用户信息的提供、搜集及核实

1、您有义务在注册时提供自己的真实资料，并保证您的身份信息、联系信息（诸如姓名、身份证号、手机号码、手机验证码等内容）的真实性、有效性、安全性和及时更新，以便快手帮忙为您提供服务并与您进行及时、有效的联系。您应完全独自承担因通过这些联系方式无法与您取得联系而导致您在使用本服务过程中遭受的任何损失或增加任何费用等不利后果。实现您实名身份认证所必需的目的，您不可撤销地授权并同意快手帮忙向有关机构或单位(政府机关、事业单位、商业机构等)验证核对与您相关的个人信息并保留相关核查资料。

六、用户信息的使用和披露

1、快手帮忙对于您提供的、快手帮忙自行收集到的、经认证的个人信息将按照本协议及有关规则予以保护、使用或者披露。快手帮忙将采用行业标准惯例以保护您的个人资料。

2、您授权快手帮忙，将您提供给快手帮忙的信息、享受快手帮忙服务产生的信息（包括本协议签署之前提供和产生的信息）以及快手帮忙根据本条约定收集的信息，用于快手帮忙及快手帮忙的关联公司为您提供服务、推荐产品、开展市场调查与信息数据分析。您授权快手帮忙，除法律另有规定之外，基于为您提供更优质服务和产品的目的，向快手帮忙因服务必要开展合作的伙伴提供、查询、收集您的信息。为确保您个人信息的安全，快手帮忙、快手帮忙的关联公司及其合作伙伴对上述信息负有保密义务，并采取各种措施保证信息安全。本条款自本协议签署时生效，具有独立法律效力，不受合同成立与否及效力状态变化的影响。

3、快手帮忙有义务根据有关法律法规规定及监管部门要求向司法机关和政府部门提供您的个人资料。

七、涉及第三方网站、第三方产品/服务

1、快手帮忙平台的内容可能涉及由第三方所有、控制或者运营的其他网站的内容或链接（以下称“第三方网站”）。快手帮忙不能保证也没有义务保证第三方网站上的信息的真实性和有效性。对于该等内容或链接，您确认按照第三方网站的使用协`,ke={class:"agreement flex middle start"},be={__name:"Agreements",props:{checkColor:{type:String,defalut:"#ff511b"},color:{type:String,default:"#333"},itemColor:{type:String,defalut:"#999"}},emits:["change"],setup(e,{emit:n}){const o=e,c=n;let a=r(!0);B(()=>{c("change",a.value)}),q(a,f=>{c("change",f)});let _=r(null),s=r("");function u(){s.value="用户协议",_.value.open(Se)}function p(){s.value="隐私协议",_.value.open(Ie)}return(f,l)=>{const $=te;return w(),I(U,null,[t("div",ke,[h($,{modelValue:d(a),"onUpdate:modelValue":l[0]||(l[0]=i=>D(a)?a.value=i:a=i),"icon-size":"16","checked-color":e.checkColor},{default:M(()=>[t("span",{style:S({color:o.color})},"已阅读并同意",4),t("span",{class:"item",style:S({color:o.itemColor}),onClick:u},"《用户协议》",4),t("span",{class:"item",style:S({color:o.itemColor}),onClick:p},"《隐私协议》",4)]),_:1},8,["modelValue","checked-color"])]),h(xe,{title:d(s),ref_key:"rulePopup",ref:_},null,8,["title"])],64)}}},Ce=y(be,[["__scopeId","data-v-2a304a20"]]),Pe="/prevent_page/assets/share_icon-BfNSDhMY.png",Ae=e=>(k("data-v-0ad0ac07"),e=e(),b(),e),Me=Ae(()=>t("img",{class:"guide-img",src:Pe,alt:""},null,-1)),De={__name:"WxShareGuide",setup(e,{expose:n}){let o=r(!1);function c(){}function a(){o.value=!1}function _(){o.value=!0}return n({open:_}),(s,u)=>d(o)?(w(),I("div",{key:0,class:"guide-full",onTouchmove:c},[t("div",{class:"guide-bg",onClick:a}),Me],32)):X("",!0)}},Fe=y(De,[["__scopeId","data-v-0ad0ac07"]]),F=e=>(k("data-v-2870008c"),e=e(),b(),e),Re={class:"inside-box"},Le=F(()=>t("img",{src:ge,class:"services",alt:""},null,-1)),Ne={class:"money flex center bottom"},Te=F(()=>t("div",{class:"unit"},"¥",-1)),Ve={class:"money-num"},Be=F(()=>t("div",{class:"word"},[t("p",null,"话"),t("p",null,"费"),t("p",null,"券")],-1)),qe={__name:"LotteryPopup",setup(e,{expose:n}){const o=z(),c=ee();let{query:a,params:_}=o;function s(m){u.value=m}let u=r(!1),p=r(0);_.type==0?p.value=0:p.value=1;function f(){if(!u.value){E("请勾选协议");return}V({message:"正在登录",duration:1e3,onClose(){V({message:"登录失败",duration:2e3,onClose(){c.push("/wechat")}})}})}let l=r(!1),$=200,i=r(0);function x(){l.value=!0,i.value=0;let m=setInterval(()=>{i.value=i.value+7,i.value>=$&&(i.value=$,clearInterval(m),m=null)},50)}return n({open:x}),(m,P)=>{const A=W;return w(),I(U,null,[h(A,{show:d(l),"onUpdate:show":P[0]||(P[0]=C=>D(l)?l.value=C:l=C),round:"",closeable:""},{default:M(()=>[t("div",Re,[Le,t("div",Ne,[Te,t("div",Ve,G(d(i)),1),Be]),t("button",{class:"pay",onClick:f},"登录领取"),h(Ce,{checkColor:"#00bc5c",color:"#333",itemColor:"#00bc5c",onChange:s})])]),_:1},8,["show"]),h(Fe,{ref:"guideRef"},null,512)],64)}}},Ge=y(qe,[["__scopeId","data-v-2870008c"]]),R=e=>(k("data-v-57d5295d"),e=e(),b(),e),Ue=R(()=>t("div",null,"四川快手帮忙科技有限公司",-1)),ze=R(()=>t("div",null,"四川省成都市郫都区郫筒街道凉水井街388号",-1)),Ee=R(()=>t("div",null,"网站备案/许可证号：蜀ICP备2022018894号-1",-1)),We=[Ue,ze,Ee],Ye={__name:"Footer",props:{color:{type:String,default:"#b4b4b4"}},setup(e){const n=e;return(o,c)=>(w(),I("footer",{class:"footer",style:S({color:n.color})},We,4))}},He=y(Ye,[["__scopeId","data-v-57d5295d"]]),Ke=e=>(k("data-v-7e63ba21"),e=e(),b(),e),je={class:"lottery-index container"},Oe=Ke(()=>t("div",{class:"title"},"· 200元快手帮忙会员享 ·",-1)),Ze={class:"circle"},Je={class:"footer-box"},Qe={__name:"index",setup(e){z();const n=r(null);function o(){n.value.open()}return(c,a)=>(w(),I("div",je,[h(ce),Oe,t("main",Ze,[h(he,{onResult:o})]),h(Ge,{ref_key:"LotteryMain",ref:n},null,512),t("div",Je,[h(He)])]))}},ot=y(Qe,[["__scopeId","data-v-7e63ba21"]]);export{ot as default};
