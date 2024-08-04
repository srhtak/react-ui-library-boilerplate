import{l as c,d as Y,a as o,F as s,j as _}from"./styled-components.browser.esm-597f1414.js";import{I as U,v as H}from"./preview-errors-dde4324f.js";import{R as Q}from"./index-8b3efc3f.js";import"./index-356e4a49.js";import"./_commonjsHelpers-de833af9.js";const{addons:Z}=__STORYBOOK_MODULE_PREVIEW_API__,{global:G}=__STORYBOOK_MODULE_GLOBAL__;var ee="storybook/actions",te=`${ee}/action-event`,ne={depth:10,clearOnStoryChange:!0,limit:50},q=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:q(t,n)},oe=e=>!!(typeof e=="object"&&e&&q(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),re=e=>{if(oe(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),a=t==null?void 0:t.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(a.constructor.prototype)}),n}return e},ae=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?H():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(e,n={}){let t={...ne,...n},a=function(...d){var O,S;if(n.implicit){let E=(O="__STORYBOOK_PREVIEW__"in G?G.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(E){let l=!((S=window==null?void 0:window.FEATURES)!=null&&S.disallowImplicitActionsInRenderV8),C=new U({phase:E.phase,name:e,deprecated:l});if(l)console.warn(C);else throw C}}let B=Z.getChannel(),h=ae(),b=5,v=d.map(re),K=d.length>1?v:v[0],W={id:h,count:0,data:{name:e,args:K},options:{...t,maxDepth:b+(t.depth||3),allowFunction:t.allowFunction||!1}};B.emit(te,W)};return a.isAction=!0,a}const ie={primary:c`
    background-color: #007bff;
    color: white;
  `,secondary:c`
    background-color: #6c757d;
    color: white;
  `,danger:c`
    background-color: #dc3545;
    color: white;
  `},ce={small:c`
    font-size: 12px;
    padding: 5px 10px;
  `,medium:c`
    font-size: 14px;
    padding: 8px 12px;
  `,large:c`
    font-size: 16px;
    padding: 10px 15px;
  `},se=Y.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({variant:e})=>ie[e]}
  ${({size:e})=>ce[e]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,f=Q.forwardRef((e,n)=>{f.displayName="Button";const{variant:t="primary",size:a="medium",disabled:d=!1,onClick:B,children:h,...b}=e;return o(se,{ref:n,variant:t,size:a,disabled:d,...b,children:h})}),r=f;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement>)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const le={click:i("click")},ke={title:"AG—React (Beta)/Button",component:r,on:{...le}},u=()=>o(s,{children:o(r,{variant:"primary",onClick:i("click"),children:"Go"})}),p=()=>o(s,{children:o(r,{variant:"secondary",onClick:i("click"),children:"Go"})}),m=()=>o(s,{children:o(r,{onClick:i("click"),children:"Go"})}),y=()=>_(s,{children:[o(r,{onClick:i("click"),size:"small",children:"Go"}),o(r,{onClick:i("click"),size:"large",children:"Go"})]}),k=()=>_(s,{children:[o(r,{disabled:!0,children:"Go"}),o(r,{onClick:i("click"),variant:"primary",disabled:!0,children:"Go"}),o(r,{onClick:i("click"),variant:"secondary",disabled:!0,children:"Go"})]}),g=()=>_(s,{children:[o(r,{onClick:i("click"),type:"reset",children:"Go"}),o(r,{onClick:i("click"),type:"submit",children:"Go"})]});var R,w,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`(): JSX.Element => <>
    <Button variant="primary" onClick={action("click")}>
      Go
    </Button>
  </>`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,x,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(): JSX.Element => <>
    <Button variant="secondary" onClick={action("click")}>
      Go
    </Button>
  </>`,...(A=(x=p.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var j,I,P;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`(): JSX.Element => <>
    <Button onClick={action("click")}>Go</Button>
  </>`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var V,T,J;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`(): JSX.Element => <>
    <Button onClick={action("click")} size="small">
      Go
    </Button>
    <Button onClick={action("click")} size="large">
      Go
    </Button>
  </>`,...(J=(T=y.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var X,$,F;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`(): JSX.Element => <>
    <Button disabled>Go</Button>
    <Button onClick={action("click")} variant="primary" disabled>
      Go
    </Button>
    <Button onClick={action("click")} variant="secondary" disabled>
      Go
    </Button>
  </>`,...(F=($=k.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var L,M,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`(): JSX.Element => <>
    <Button onClick={action("click")} type="reset">
      Go
    </Button>
    <Button onClick={action("click")} type="submit">
      Go
    </Button>
  </>`,...(N=(M=g.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const ge=["Primary","Secondary","Default","Sizes","DisabledAll","Types"];export{m as Default,k as DisabledAll,u as Primary,p as Secondary,y as Sizes,g as Types,ge as __namedExportsOrder,ke as default};
