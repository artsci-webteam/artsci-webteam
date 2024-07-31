import{d as g,k as f,o as h,b as _,m as b,n as y}from"./vue.esm-bundler-531372d3.js";import{B as o}from"./_background-6785cd8a.js";import{M as v}from"./media-1d760b2d.js";import{c as i}from"./utlity-04b79d70.js";import C from"./preview-9de9da90.js";const s=["","small","medium","large"],l=["","left","right","center"],k={inline_alignment:{type:String,default:"left",validator:function(e){return l.indexOf(e)!==-1}},inline_size:{type:String,default:"",validator:function(e){return s.indexOf(e)!==-1}}},w={inline_alignment:{name:"Alignment",table:{defaultValue:{summary:l[0]},category:"Display options"},options:l,control:{type:"select",labels:{"":"full width"}}},inline_size:{name:"Size",table:{defaultValue:{summary:s[0]},category:"Display options"},options:s,control:{type:"select",labels:{"":"full width"}}}},z=(e,t)=>{t.inline_size&&e.push(`inline--size-${i(t.inline_size)}`),t.inline_alignment&&e.push(`inline--align-${i(t.inline_alignment)}`)},c={props:k,argTypes:w,addClass:z},r=g({__name:"Callout",props:{...c.props,...o.props,...v.props},setup(e){const t=e,m=f(()=>{let n=["callout"];return o.addBackgroundClass(n,t),c.addClass(n,t),n});return(n,B)=>(h(),_("div",{class:y(m.value)},[b(n.$slots,"default")],2))}});r.__docgenInfo={exportName:"default",displayName:"Callout",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/artsci-webteam.github.io/artsci-webteam.github.io/src/components/callout/Callout.vue"]};const S={title:"Components/Callout",component:r,tags:["autodocs"],argTypes:{...o.argTypes,default:{name:"Content",control:{type:"text"}}},parameters:{docs:{source:{code:null}},viewport:{viewports:C.parameters.viewport.viewports,defaultViewport:"tablet"}}},T=e=>({components:{ResearchCallout:r},setup(){return{args:e}},template:`
    <research-callout
      :background="args.background"
    >
    <template v-if="args.default"><div v-html="args.default" ></div></template>
    </research-callout>
  `}),a=T.bind({});a.args={default:'<h4 class="headline block__headline headline headline--serif headline--underline block__headline headline--center"> <span class="headline__heading"> Title </span> </h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ante non efficitur laoreet. Suspendisse laoreet cursus dui, eget vehicula massa.</p>',background:"gray"};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchCallout
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-callout
      :background="args.background"
    >
    <template v-if="args.default"><div v-html="args.default" ></div></template>
    </research-callout>
  \`
})`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Callout"],N=Object.freeze(Object.defineProperty({__proto__:null,Callout:a,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{N as C,c as I,r as _};
