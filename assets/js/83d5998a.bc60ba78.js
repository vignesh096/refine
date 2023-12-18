"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,g=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={},a=void 0,l={unversionedId:"ui-integrations/ant-design/hooks/use-select/sort-live-preview",id:"ui-integrations/ant-design/hooks/use-select/sort-live-preview",title:"sort-live-preview",description:"",source:"@site/docs/ui-integrations/ant-design/hooks/use-select/sort-live-preview.md",sourceDirName:"ui-integrations/ant-design/hooks/use-select",slug:"/ui-integrations/ant-design/hooks/use-select/sort-live-preview",permalink:"/docs/ui-integrations/ant-design/hooks/use-select/sort-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-select/sort-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1702891020,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{}},u={},p=[],f={toc:p};function d(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useSelect } from "@refinedev/antd";\nimport { Select, Button } from "antd";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\nconst PostCreate: React.FC = () => {\n  const [order, setOrder] = React.useState<"asc" | "desc">("asc");\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    // highlight-start\n    sorters: [\n      {\n        field: "title",\n        order,\n      },\n    ],\n    // highlight-end\n  });\n\n  return (\n    <>\n      <Select placeholder={`Ordered Categories: ${order}`} style={{ width: 300 }} {...selectProps} />\n      <Button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>Toggle Order</Button>\n    </>\n  );\n};\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      create: PostCreate,\n    },\n  ],\n});\nrender(<RefineAntdDemo />);\n')))}d.isMDXComponent=!0}}]);