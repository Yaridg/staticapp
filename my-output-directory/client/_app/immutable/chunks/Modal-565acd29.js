import{w as pe}from"./index-9de28fd4.js";import{U as xe,S as $e,i as et,s as tt,E as lt,a as Ne,c as He,b as J,G as M,f as B,g as z,t as W,d as G,H as nt,I as st,J as ot,h as L,V as it,W as at,o as ut,X as ft,k as j,v as ie,l as q,m as U,w as Ke,n as c,Y as O,F as T,D as ne,x as ae,Z as se,y as ue,L as Me,_ as oe,O as rt,e as fe,$ as we,A as Fe,a0 as ct}from"./index-bd0e4065.js";const Ct=pe(null);function dt(n,{delay:t=0,duration:l=400,easing:s=xe}={}){const r=+getComputedStyle(n).opacity;return{delay:t,duration:l,easing:s,css:o=>`opacity: ${o*r}`}}const{window:_t}=ft;function Ve(n){let t,l,s,r,o,i,f,a,u,w,m,S,v,C,b,F,V,_=n[1].closeButton&&Ae(n);var k=n[2];function A(y){return{}}return k&&(i=new k(A())),{c(){t=j("div"),l=j("div"),s=j("div"),_&&_.c(),r=Ne(),o=j("div"),i&&ie(i.$$.fragment),this.h()},l(y){t=q(y,"DIV",{class:!0,style:!0});var d=U(t);l=q(d,"DIV",{class:!0,style:!0});var E=U(l);s=q(E,"DIV",{class:!0,role:!0,"aria-modal":!0,"aria-label":!0,"aria-labelledby":!0,style:!0});var I=U(s);_&&_.l(I),r=He(I),o=q(I,"DIV",{class:!0,style:!0});var N=U(o);i&&Ke(i.$$.fragment,N),N.forEach(L),I.forEach(L),E.forEach(L),d.forEach(L),this.h()},h(){c(o,"class",f=O(n[1].classContent)+" svelte-1tk9ooe"),c(o,"style",n[9]),T(o,"content",!n[0]),c(s,"class",a=O(n[1].classWindow)+" svelte-1tk9ooe"),c(s,"role","dialog"),c(s,"aria-modal","true"),c(s,"aria-label",u=n[1].ariaLabelledBy?null:n[1].ariaLabel||null),c(s,"aria-labelledby",w=n[1].ariaLabelledBy||null),c(s,"style",n[8]),T(s,"window",!n[0]),c(l,"class",S=O(n[1].classWindowWrap)+" svelte-1tk9ooe"),c(l,"style",n[7]),T(l,"wrap",!n[0]),c(t,"class",v=O(n[1].classBg)+" svelte-1tk9ooe"),c(t,"style",n[6]),T(t,"bg",!n[0])},m(y,d){J(y,t,d),ne(t,l),ne(l,s),_&&_.m(s,null),ne(s,r),ne(s,o),i&&ae(i,o,null),n[49](s),n[50](l),n[51](t),b=!0,F||(V=[M(s,"introstart",function(){se(n[13])&&n[13].apply(this,arguments)}),M(s,"outrostart",function(){se(n[14])&&n[14].apply(this,arguments)}),M(s,"introend",function(){se(n[15])&&n[15].apply(this,arguments)}),M(s,"outroend",function(){se(n[16])&&n[16].apply(this,arguments)}),M(t,"mousedown",n[20]),M(t,"mouseup",n[21])],F=!0)},p(y,d){if(n=y,n[1].closeButton?_?(_.p(n,d),d[0]&2&&B(_,1)):(_=Ae(n),_.c(),B(_,1),_.m(s,r)):_&&(z(),W(_,1,1,()=>{_=null}),G()),k!==(k=n[2])){if(i){z();const E=i;W(E.$$.fragment,1,0,()=>{ue(E,1)}),G()}k?(i=new k(A()),ie(i.$$.fragment),B(i.$$.fragment,1),ae(i,o,null)):i=null}(!b||d[0]&2&&f!==(f=O(n[1].classContent)+" svelte-1tk9ooe"))&&c(o,"class",f),(!b||d[0]&512)&&c(o,"style",n[9]),(!b||d[0]&3)&&T(o,"content",!n[0]),(!b||d[0]&2&&a!==(a=O(n[1].classWindow)+" svelte-1tk9ooe"))&&c(s,"class",a),(!b||d[0]&2&&u!==(u=n[1].ariaLabelledBy?null:n[1].ariaLabel||null))&&c(s,"aria-label",u),(!b||d[0]&2&&w!==(w=n[1].ariaLabelledBy||null))&&c(s,"aria-labelledby",w),(!b||d[0]&256)&&c(s,"style",n[8]),(!b||d[0]&3)&&T(s,"window",!n[0]),(!b||d[0]&2&&S!==(S=O(n[1].classWindowWrap)+" svelte-1tk9ooe"))&&c(l,"class",S),(!b||d[0]&128)&&c(l,"style",n[7]),(!b||d[0]&3)&&T(l,"wrap",!n[0]),(!b||d[0]&2&&v!==(v=O(n[1].classBg)+" svelte-1tk9ooe"))&&c(t,"class",v),(!b||d[0]&64)&&c(t,"style",n[6]),(!b||d[0]&3)&&T(t,"bg",!n[0])},i(y){b||(B(_),i&&B(i.$$.fragment,y),Me(()=>{m||(m=oe(s,n[12],n[1].transitionWindowProps,!0)),m.run(1)}),Me(()=>{C||(C=oe(t,n[11],n[1].transitionBgProps,!0)),C.run(1)}),b=!0)},o(y){W(_),i&&W(i.$$.fragment,y),m||(m=oe(s,n[12],n[1].transitionWindowProps,!1)),m.run(0),C||(C=oe(t,n[11],n[1].transitionBgProps,!1)),C.run(0),b=!1},d(y){y&&L(t),_&&_.d(),i&&ue(i),n[49](null),y&&m&&m.end(),n[50](null),n[51](null),y&&C&&C.end(),F=!1,rt(V)}}}function Ae(n){let t,l,s,r,o;const i=[yt,bt],f=[];function a(u,w){return w[0]&2&&(t=null),t==null&&(t=!!u[17](u[1].closeButton)),t?0:1}return l=a(n,[-1,-1,-1]),s=f[l]=i[l](n),{c(){s.c(),r=fe()},l(u){s.l(u),r=fe()},m(u,w){f[l].m(u,w),J(u,r,w),o=!0},p(u,w){let m=l;l=a(u,w),l===m?f[l].p(u,w):(z(),W(f[m],1,1,()=>{f[m]=null}),G(),s=f[l],s?s.p(u,w):(s=f[l]=i[l](u),s.c()),B(s,1),s.m(r.parentNode,r))},i(u){o||(B(s),o=!0)},o(u){W(s),o=!1},d(u){f[l].d(u),u&&L(r)}}}function bt(n){let t,l,s,r;return{c(){t=j("button"),this.h()},l(o){t=q(o,"BUTTON",{class:!0,"aria-label":!0,style:!0,type:!0}),U(t).forEach(L),this.h()},h(){c(t,"class",l=O(n[1].classCloseButton)+" svelte-1tk9ooe"),c(t,"aria-label","Close modal"),c(t,"style",n[10]),c(t,"type","button"),T(t,"close",!n[0])},m(o,i){J(o,t,i),s||(r=M(t,"click",n[18]),s=!0)},p(o,i){i[0]&2&&l!==(l=O(o[1].classCloseButton)+" svelte-1tk9ooe")&&c(t,"class",l),i[0]&1024&&c(t,"style",o[10]),i[0]&3&&T(t,"close",!o[0])},i:Fe,o:Fe,d(o){o&&L(t),s=!1,r()}}}function yt(n){let t,l,s;var r=n[1].closeButton;function o(i){return{props:{onClose:i[18]}}}return r&&(t=new r(o(n))),{c(){t&&ie(t.$$.fragment),l=fe()},l(i){t&&Ke(t.$$.fragment,i),l=fe()},m(i,f){t&&ae(t,i,f),J(i,l,f),s=!0},p(i,f){if(r!==(r=i[1].closeButton)){if(t){z();const a=t;W(a.$$.fragment,1,0,()=>{ue(a,1)}),G()}r?(t=new r(o(i)),ie(t.$$.fragment),B(t.$$.fragment,1),ae(t,l.parentNode,l)):t=null}},i(i){s||(t&&B(t.$$.fragment,i),s=!0)},o(i){t&&W(t.$$.fragment,i),s=!1},d(i){i&&L(l),t&&ue(t,i)}}}function wt(n){let t,l,s,r,o=n[2]&&Ve(n);const i=n[48].default,f=lt(i,n,n[47],null);return{c(){o&&o.c(),t=Ne(),f&&f.c()},l(a){o&&o.l(a),t=He(a),f&&f.l(a)},m(a,u){o&&o.m(a,u),J(a,t,u),f&&f.m(a,u),l=!0,s||(r=M(_t,"keydown",n[19]),s=!0)},p(a,u){a[2]?o?(o.p(a,u),u[0]&4&&B(o,1)):(o=Ve(a),o.c(),B(o,1),o.m(t.parentNode,t)):o&&(z(),W(o,1,1,()=>{o=null}),G()),f&&f.p&&(!l||u[1]&65536)&&nt(f,i,a,a[47],l?ot(i,a[47],u,null):st(a[47]),null)},i(a){l||(B(o),B(f,a),l=!0)},o(a){W(o),W(f,a),l=!1},d(a){o&&o.d(a),a&&L(t),f&&f.d(a),s=!1,r()}}}function mt(n,t={}){return function(s){return new n({...s,props:{...t,...s.props}})}}function gt(n,t,l){let{$$slots:s={},$$scope:r}=t;const o=it(),i=ct,f=e=>e.tabIndex>=0&&!e.hidden&&!e.disabled&&e.style.display!=="none"&&e.type!=="hidden"&&Boolean(e.offsetWidth||e.offsetHeight||e.getClientRects().length);let{isTabbable:a=f}=t,{show:u=null}=t,{key:w="simple-modal"}=t,{ariaLabel:m=null}=t,{ariaLabelledBy:S=null}=t,{closeButton:v=!0}=t,{closeOnEsc:C=!0}=t,{closeOnOuterClick:b=!0}=t,{styleBg:F={}}=t,{styleWindowWrap:V={}}=t,{styleWindow:_={}}=t,{styleContent:k={}}=t,{styleCloseButton:A={}}=t,{classBg:y=null}=t,{classWindowWrap:d=null}=t,{classWindow:E=null}=t,{classContent:I=null}=t,{classCloseButton:N=null}=t,{unstyled:re=!1}=t,{setContext:ce=i}=t,{transitionBg:R=dt}=t,{transitionBgProps:X={duration:250}}=t,{transitionWindow:de=R}=t,{transitionWindowProps:_e=X}=t,{disableFocusTrap:be=!1}=t;const me={ariaLabel:m,ariaLabelledBy:S,closeButton:v,closeOnEsc:C,closeOnOuterClick:b,styleBg:F,styleWindowWrap:V,styleWindow:_,styleContent:k,styleCloseButton:A,classBg:y,classWindowWrap:d,classWindow:E,classContent:I,classCloseButton:N,transitionBg:R,transitionBgProps:X,transitionWindow:de,transitionWindowProps:_e,disableFocusTrap:be,isTabbable:a,unstyled:re};let g={...me},H=null,Q,p,x,ye,ge,he,Be,Ce,We,ke,Oe,Te,Le,Ee,Pe;const Ye=e=>e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase(),Y=e=>e?Object.keys(e).reduce((Z,P)=>`${Z}; ${Ye(P)}: ${e[P]}`,""):"",De=e=>!!(e&&e.constructor&&e.call&&e.apply),Ze=()=>{l(6,ge=Y(Object.assign({},{width:window.innerWidth,height:window.innerHeight},g.styleBg))),l(7,he=Y(g.styleWindowWrap)),l(8,Be=Y(g.styleWindow)),l(9,Ce=Y(g.styleContent)),l(10,We=Y(g.styleCloseButton)),l(11,ke=g.transitionBg),l(12,Oe=g.transitionWindow)},$=()=>{};let Se=$,ee=$,ve=$,te=$;const Ie=(e,Z={},P={},h={})=>{l(2,H=mt(e,Z)),l(1,g={...me,...P}),Ze(),ze(),l(13,Se=D=>{h.onOpen&&h.onOpen(D),o("open"),o("opening")}),l(14,ee=D=>{h.onClose&&h.onClose(D),o("close"),o("closing")}),l(15,ve=D=>{h.onOpened&&h.onOpened(D),o("opened")}),l(16,te=D=>{h.onClosed&&h.onClosed(D),o("closed")})},K=(e={})=>{!H||(l(14,ee=e.onClose||ee),l(16,te=e.onClosed||te),l(2,H=null),Ge())},je=e=>{if(g.closeOnEsc&&H&&e.key==="Escape"&&(e.preventDefault(),K()),H&&e.key==="Tab"&&!g.disableFocusTrap){const Z=x.querySelectorAll("*"),P=Array.from(Z).filter(g.isTabbable).sort((D,Qe)=>D.tabIndex-Qe.tabIndex);let h=P.indexOf(document.activeElement);h===-1&&e.shiftKey&&(h=0),h+=P.length+(e.shiftKey?-1:1),h%=P.length,P[h].focus(),e.preventDefault()}},qe=e=>{g.closeOnOuterClick&&(e.target===Q||e.target===p)&&(Pe=e.target)},Ue=e=>{g.closeOnOuterClick&&e.target===Pe&&(e.preventDefault(),K())},ze=()=>{ye=window.scrollY,Te=document.body.style.position,Le=document.body.style.overflow,Ee=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${ye}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},Ge=()=>{document.body.style.position=Te||"",document.body.style.top="",document.body.style.overflow=Le||"",document.body.style.width=Ee||"",window.scrollTo(0,ye)};ce(w,{open:Ie,close:K});let le=!1;at(()=>{le&&K()}),ut(()=>{l(46,le=!0)});function Je(e){we[e?"unshift":"push"](()=>{x=e,l(5,x)})}function Re(e){we[e?"unshift":"push"](()=>{p=e,l(4,p)})}function Xe(e){we[e?"unshift":"push"](()=>{Q=e,l(3,Q)})}return n.$$set=e=>{"isTabbable"in e&&l(22,a=e.isTabbable),"show"in e&&l(23,u=e.show),"key"in e&&l(24,w=e.key),"ariaLabel"in e&&l(25,m=e.ariaLabel),"ariaLabelledBy"in e&&l(26,S=e.ariaLabelledBy),"closeButton"in e&&l(27,v=e.closeButton),"closeOnEsc"in e&&l(28,C=e.closeOnEsc),"closeOnOuterClick"in e&&l(29,b=e.closeOnOuterClick),"styleBg"in e&&l(30,F=e.styleBg),"styleWindowWrap"in e&&l(31,V=e.styleWindowWrap),"styleWindow"in e&&l(32,_=e.styleWindow),"styleContent"in e&&l(33,k=e.styleContent),"styleCloseButton"in e&&l(34,A=e.styleCloseButton),"classBg"in e&&l(35,y=e.classBg),"classWindowWrap"in e&&l(36,d=e.classWindowWrap),"classWindow"in e&&l(37,E=e.classWindow),"classContent"in e&&l(38,I=e.classContent),"classCloseButton"in e&&l(39,N=e.classCloseButton),"unstyled"in e&&l(0,re=e.unstyled),"setContext"in e&&l(40,ce=e.setContext),"transitionBg"in e&&l(41,R=e.transitionBg),"transitionBgProps"in e&&l(42,X=e.transitionBgProps),"transitionWindow"in e&&l(43,de=e.transitionWindow),"transitionWindowProps"in e&&l(44,_e=e.transitionWindowProps),"disableFocusTrap"in e&&l(45,be=e.disableFocusTrap),"$$scope"in e&&l(47,r=e.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8388608|n.$$.dirty[1]&32768&&le&&(De(u)?Ie(u):K())},[re,g,H,Q,p,x,ge,he,Be,Ce,We,ke,Oe,Se,ee,ve,te,De,K,je,qe,Ue,a,u,w,m,S,v,C,b,F,V,_,k,A,y,d,E,I,N,ce,R,X,de,_e,be,le,r,s,Je,Re,Xe]}class Wt extends $e{constructor(t){super(),et(this,t,gt,wt,tt,{isTabbable:22,show:23,key:24,ariaLabel:25,ariaLabelledBy:26,closeButton:27,closeOnEsc:28,closeOnOuterClick:29,styleBg:30,styleWindowWrap:31,styleWindow:32,styleContent:33,styleCloseButton:34,classBg:35,classWindowWrap:36,classWindow:37,classContent:38,classCloseButton:39,unstyled:0,setContext:40,transitionBg:41,transitionBgProps:42,transitionWindow:43,transitionWindowProps:44,disableFocusTrap:45},null,[-1,-1,-1])}}export{Wt as M,mt as b,Ct as m};
