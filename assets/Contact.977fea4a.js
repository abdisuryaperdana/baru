import{e as m,o as p,c as r,a as t,t as b,r as u,b as s,w as g,F as _,f,g as V}from"./index.2f2355d4.js";const v={name:"BaseInput",emits:["update:modelValue"],props:{name:String,label:String,modelValue:String,type:{type:String,default:"text"}}},y=["for"],w=["type","placeholder","value"];function k(l,e,a,d,c,i){return p(),r("label",{for:a.name},[t("p",null,b(a.label),1),t("input",{type:a.type,placeholder:a.label,value:a.modelValue,onInput:e[0]||(e[0]=o=>l.$emit("update:modelValue",o.target.value))},null,40,w)],8,y)}const I=m(v,[["render",k]]);const B={name:"ContactView",components:{BaseInput:I},data:()=>({title:"contact",input:{name:"",email:"",class:"",phone:"",chat:""}}),methods:{submit(){console.log(this.input)}}},S=t("br",null,null,-1),C=t("br",null,null,-1),$=t("br",null,null,-1),G=t("br",null,null,-1),N={class:"contact"},U=t("br",null,null,-1),x=t("br",null,null,-1),D=t("br",null,null,-1),E=t("br",null,null,-1),F=t("br",null,null,-1),W=t("button",{type:"submit",class:"btn btn-primary"},"Kirim",-1),A=f('<br><br><br><br><br><br><br><br><div class="row pt-0 gx-0 gy-0 col-15"><div class="col-1"><a href="https://www.instagram.com/abdiisurya_/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/900px-Instagram-Icon.png?20190314235631" width="50" height="45"></a><p>Instagram</p></div><div class="col-1"><a href="https://wa.me/082285413093" target="_blank"><img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" width="50" height="45"></a><p>Whatsapp</p></div><div class="col-1"><a href="mailto:abdisury4@gmail.com" target="_blank"><img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png" width="50" height="45"></a><p>Gmail</p></div><div class="col-1"><a href="https://github.com/abdisuryaperdana" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" width="50" height="45"></a><p>GitHub</p></div></div>',9);function H(l,e,a,d,c,i){const o=u("BaseInput"),h=u("center");return p(),r(_,null,[s(h,null,{default:g(()=>[S,C,$,G,t("div",N,[t("form",{onSubmit:e[4]||(e[4]=V((...n)=>i.submit&&i.submit(...n),["prevent"]))},[s(o,{modelValue:l.input.name,"onUpdate:modelValue":e[0]||(e[0]=n=>l.input.name=n),name:"name",label:"name",type:"text"},null,8,["modelValue"]),U,s(o,{modelValue:l.input.email,"onUpdate:modelValue":e[1]||(e[1]=n=>l.input.email=n),name:"email",label:"Email",type:"email"},null,8,["modelValue"]),x,s(o,{modelValue:l.input.phone,"onUpdate:modelValue":e[2]||(e[2]=n=>l.input.phone=n),name:"phone",label:"phone",type:"number"},null,8,["modelValue"]),D,s(o,{modelValue:l.input.chat,"onUpdate:modelValue":e[3]||(e[3]=n=>l.input.chat=n),name:"chat",label:"chat",type:"text"},null,8,["modelValue"]),E,F,W],32)])]),_:1}),A],64)}const L=m(B,[["render",H]]);export{L as default};
