"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},u=void 0,c={unversionedId:"api-reference/core/hooks/auth/useGetIdentity",id:"version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",title:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1702891020,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"someSidebar",previous:{title:"useCheckError",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError"},next:{title:"useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin"}},l={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery"),"  which includes many properties, some of which being ",(0,n.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,n.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get the user information anywhere in your code."),(0,n.kt)("p",null,"Let's say that you want to show the user's name."),(0,n.kt)("p",null,"We have a logic in ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method like below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getUserIdentity: () =>\n            Promise.resolve({\n                id: 1,\n                fullName: "Jane Doe",\n            }),\n  // highlight-end\n  ...\n};\n')),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can access identity data like below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@pankod/refine-core";\n\nexport const User: React.FC = () => {\n    // highlight-next-line\n    const { data: identity } = useGetIdentity<{ id: number; fullName: string}>();\n\n    return <span>{identity?.fullName}</span>\n}\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}f.isMDXComponent=!0}}]);