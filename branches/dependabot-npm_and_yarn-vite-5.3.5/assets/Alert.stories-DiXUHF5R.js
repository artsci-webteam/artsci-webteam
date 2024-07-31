import{d as N,k as g,o as d,b as p,g as l,n as u,q as y,m as R,f as T}from"./vue.esm-bundler-DnqKWkEk.js";import{c as b}from"./utlity-DqUowty0.js";const E={key:0,class:"alert__icon"},W={class:"fa-stack fa-1x"},$=l("span",{role:"presentation",class:"fas fa-circle fa-stack-2x"},null,-1),O={key:1,"data-dismiss":"alert"},q=l("i",{class:"fas fa-times"},null,-1),z=[q],m=N({__name:"Alert",props:{type:{type:String,default:"info",validator:t=>["info","success","warning","danger"].indexOf(t)!==-1},centered:{type:Boolean},iconVisible:{type:Boolean},dismissible:{type:Boolean},verticallyCentered:{type:Boolean}},setup(t){const e=t,B=g(()=>{switch(e.type){case"success":return"check";case"warning":return"exclamation-triangle";case"danger":return"exclamation";default:return"info"}}),I=g(()=>{let r=["alert"];return e.type&&r.push(`alert--${b(e.type)}`),e.verticallyCentered&&r.push("alert--vertically-centered"),e.iconVisible&&r.push("alert--icon"),["centered","dismissible"].forEach(o=>{e[o]===!0&&r.push(`alert--${b(o)}`)}),r});return(r,o)=>(d(),p("div",{class:u(I.value)},[e.iconVisible?(d(),p("div",E,[l("span",W,[$,l("span",{role:"presentation",class:u("fas fa-stack-1x fa-inverse fa-"+B.value)},null,2)])])):y("",!0),R(r.$slots,"default",{class:"alert__content"},()=>[T("Body")]),e.dismissible?(d(),p("button",O,z)):y("",!0)],2))}});m.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"type",description:"Type of alert.",type:{name:"string"},defaultValue:{func:!1,value:"'info'"}},{name:"centered",description:"Content alignment.",type:{name:"boolean"}},{name:"iconVisible",description:"Icon visible.",type:{name:"boolean"}},{name:"dismissible",description:"Alert is removable.",type:{name:"boolean"}},{name:"verticallyCentered",description:"Vertically center alert.",type:{name:"boolean"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"class",title:"binding"}]}],sourceFiles:["/home/runner/work/artsci-webteam.github.io/artsci-webteam.github.io/src/components/alert/Alert.vue"]};const P={title:"Components/Alert",parameters:{docs:{source:{code:null}}},component:m,tags:["autodocs"],argTypes:{type:{name:"Type",options:["info","success","warning","danger"],control:{type:"select",labels:{info:"Info",success:"Success",warning:"Warning",danger:"Danger"}},table:{category:"Display options"}},centered:{name:"Centered",table:{category:"Display options"}},iconVisible:{name:"Display Icon",table:{category:"Display options"}},dismissible:{name:"Dismissible",table:{category:"Properties"}},verticallyCentered:{name:"Center Alert Vertically",table:{category:"Display options"}},default:{name:"Content",control:{type:"text"},table:{category:"Content"}}}},c=t=>({components:{ResearchAlert:m},setup(){return{args:t}},template:`
    <research-alert
      :type="args.type"
      :centered="args.centered"
      :iconVisible="args.iconVisible"
      :dismissible="args.dismissible"
      :verticallyCentered="args.verticallyCentered"
    >
      <div v-html="args.default"></div>
    </research-alert>`}),s=c.bind({});s.args={type:"info",centered:!1,iconVisible:!0,dismissible:!1,verticallyCentered:!1,default:`
    <h2 class="headline headline--serif">
      Alert title
    </h2>
    <p>Lorem ipsum sit dolor amet.</p>
`};const n=c.bind({});n.args={...s.args,type:"success"};const a=c.bind({});a.args={...s.args,type:"warning"};const i=c.bind({});i.args={...s.args,type:"danger"};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    ResearchAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <research-alert
      :type="args.type"
      :centered="args.centered"
      :iconVisible="args.iconVisible"
      :dismissible="args.dismissible"
      :verticallyCentered="args.verticallyCentered"
    >
      <div v-html="args.default"></div>
    </research-alert>\`
})`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,C,V;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    ResearchAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <research-alert
      :type="args.type"
      :centered="args.centered"
      :iconVisible="args.iconVisible"
      :dismissible="args.dismissible"
      :verticallyCentered="args.verticallyCentered"
    >
      <div v-html="args.default"></div>
    </research-alert>\`
})`,...(V=(C=n.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var A,x,k;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    ResearchAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <research-alert
      :type="args.type"
      :centered="args.centered"
      :iconVisible="args.iconVisible"
      :dismissible="args.dismissible"
      :verticallyCentered="args.verticallyCentered"
    >
      <div v-html="args.default"></div>
    </research-alert>\`
})`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,D,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ResearchAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <research-alert
      :type="args.type"
      :centered="args.centered"
      :iconVisible="args.iconVisible"
      :dismissible="args.dismissible"
      :verticallyCentered="args.verticallyCentered"
    >
      <div v-html="args.default"></div>
    </research-alert>\`
})`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const j=["Info","Success","Warning","Danger"];export{i as Danger,s as Info,n as Success,a as Warning,j as __namedExportsOrder,P as default};
