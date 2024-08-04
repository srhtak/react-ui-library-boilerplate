import{d as p,j as h,a as o,F as m}from"./styled-components.browser.esm-597f1414.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const P=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`,r=({title:a,children:g})=>h(P,{"data-testid":"page-container",children:[o("h1",{children:a}),o(m,{children:g})]}),u=r;try{r.displayName="Page",r.__docgenInfo={description:"",displayName:"Page",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const _={title:"MyComponents/Page",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{description:"The title of the Page",control:{type:"text"}},children:{description:"The children of the Page",control:{type:"text"}}}},e={args:{title:"This is the Page One title",children:"These are the Page One children"}},t={args:{title:"This is the Page Twoooooooooo title",children:"These are the Page Two children"}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "This is the Page One title",
    children: "These are the Page One children"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "This is the Page Twoooooooooo title",
    children: "These are the Page Two children"
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const f=["PageOne","PageTwo"];export{e as PageOne,t as PageTwo,f as __namedExportsOrder,_ as default};
