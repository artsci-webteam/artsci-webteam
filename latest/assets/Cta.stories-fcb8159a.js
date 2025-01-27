import{d as I,k as b,o as r,b as l,g as R,e as h,w as _,q as u,m as i,n as f,f as d,t as y}from"./vue.esm-bundler-531372d3.js";import{B as g}from"./_background-6f107708.js";import{_ as D}from"./Headline-33dfce86.js";import{_ as L}from"./Button-557191c2.js";import{c as v}from"./utlity-04b79d70.js";const j={class:"cta__container"},E={key:0,class:"cta__title"},q={key:1,class:"cta__content"},z={key:0,class:"cta__link"},p=I({__name:"Cta",props:{headline_style:{type:String,default:""},url:{type:String},details:{type:String},orientation:{type:String,default:""},button_align_right:{type:Boolean,default:!1},button_label:{type:String},button_icon:{type:String,default:""},...g.props},setup(e){const o=e,N=b(()=>{let t=["cta"];return g.addBackgroundClass(t,o),["button_align_right"].forEach(c=>{o[c]===!0&&t.push(`cta--${v(c)}`)}),o.orientation&&t.push(`cta--${v(o.orientation)}`),t}),A=b(()=>[""]);return(t,c)=>(r(),l("div",{class:f(N.value)},[R("div",j,[t.$slots.title?(r(),l("div",E,[h(D,{text_style:e.headline_style},{default:_(()=>[i(t.$slots,"title",{},()=>[d("Title")])]),_:3},8,["text_style"])])):u("",!0),e.details?(r(),l("div",q,[i(t.$slots,"details",{},()=>[d(y(e.details),1)])])):u("",!0)]),e.button_label?(r(),l("footer",z,[h(L,{class:f(A.value),url:e.url,size:"medium"},{default:_(()=>[i(t.$slots,"button_label",{},()=>[d(y(e.button_label),1)]),i(t.$slots,"button_icon")]),_:3},8,["class","url"])])):u("",!0)],2))}});p.__docgenInfo={exportName:"default",displayName:"Cta",description:"",tags:{},props:[{name:"headline_style",description:"Title style for the headline.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"url",type:{name:"string"}},{name:"details",type:{name:"string"}},{name:"orientation",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"button_align_right",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"button_label",type:{name:"string"}},{name:"button_icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title",description:"The title of the card. HTML is allowed."},{name:"details"},{name:"button_label"},{name:"button_icon"}],sourceFiles:["/home/runner/work/artsci-webteam.github.io/artsci-webteam.github.io/src/components/cta/Cta.vue"]};const G={title:"Components/CTA",parameters:{docs:{source:{code:null}}},component:p,tags:["autodocs"],argTypes:{headline_style:{name:"Title style",options:["uppercase","serif",""],control:{type:"select",labels:{uppercase:"Antonio (default)",serif:"Zilla Slab","":"Roboto"}},table:{category:"Display options"}},orientation:{name:"Orientation",options:["","left","inline"],control:{type:"select",labels:{"":"Centered (default)",left:"Left",inline:"Inline"}},table:{category:"Display options"}},url:{control:{type:"text"}},title:{control:{type:"text"}},details:{control:{type:"text"}},button_label:{control:{type:"text"}},button_icon:{control:{type:"text"}},button_align_right:{name:"Align button to right",table:{category:"Display options"}},...g.argTypes}},m=e=>({components:{ResearchCta:p},setup(){return{args:e}},template:`
    <research-cta
      :url="args.url"
      :background="args.background"
      :title="args.title"
      :button_label="args.button_label"
      :button_icon="args.button_icon"
      :button_align_right="args.button_align_right"
      :details="args.details"
      :headline_style="args.headline_style"
      :orientation="args.orientation"
    >
    <template #details v-if="args.details"><div v-html="args.details" ></div></template>
    <template #title v-if="args.title"><div :class="getClasses" v-html="args.title" ></div></template>
    <template #button_icon v-if="args.button_icon"><span v-html="args.button_icon" ></span></template>
    </research-cta>
  `}),a=m.bind({});a.args={url:"https://wustl.edu/",title:"Develop at washu",details:"<p>This is where great stories begin. It's time to start yours. Find out how.</p>",button_label:"Request Information",button_icon:'<i class="fas fa-arrow-right"></i>',button_align_right:!1,headline_style:"uppercase",background:"gray",orientation:""};const n=m.bind({});n.args={...a.args,orientation:"inline"};const s=m.bind({});s.args={...a.args,orientation:"left"};var C,k,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCta
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-cta
      :url="args.url"
      :background="args.background"
      :title="args.title"
      :button_label="args.button_label"
      :button_icon="args.button_icon"
      :button_align_right="args.button_align_right"
      :details="args.details"
      :headline_style="args.headline_style"
      :orientation="args.orientation"
    >
    <template #details v-if="args.details"><div v-html="args.details" ></div></template>
    <template #title v-if="args.title"><div :class="getClasses" v-html="args.title" ></div></template>
    <template #button_icon v-if="args.button_icon"><span v-html="args.button_icon" ></span></template>
    </research-cta>
  \`
})`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,S,$;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCta
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-cta
      :url="args.url"
      :background="args.background"
      :title="args.title"
      :button_label="args.button_label"
      :button_icon="args.button_icon"
      :button_align_right="args.button_align_right"
      :details="args.details"
      :headline_style="args.headline_style"
      :orientation="args.orientation"
    >
    <template #details v-if="args.details"><div v-html="args.details" ></div></template>
    <template #title v-if="args.title"><div :class="getClasses" v-html="args.title" ></div></template>
    <template #button_icon v-if="args.button_icon"><span v-html="args.button_icon" ></span></template>
    </research-cta>
  \`
})`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var x,V,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCta
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-cta
      :url="args.url"
      :background="args.background"
      :title="args.title"
      :button_label="args.button_label"
      :button_icon="args.button_icon"
      :button_align_right="args.button_align_right"
      :details="args.details"
      :headline_style="args.headline_style"
      :orientation="args.orientation"
    >
    <template #details v-if="args.details"><div v-html="args.details" ></div></template>
    <template #title v-if="args.title"><div :class="getClasses" v-html="args.title" ></div></template>
    <template #button_icon v-if="args.button_icon"><span v-html="args.button_icon" ></span></template>
    </research-cta>
  \`
})`,...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const J=["Centered","Inline","Left"];export{a as Centered,n as Inline,s as Left,J as __namedExportsOrder,G as default};
