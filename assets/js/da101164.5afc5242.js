"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",slug:"refine-react-invoice-generator-5",authors:"abdullah_numan",tags:["refine-week","refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/refine-react-invoice-generator-5",source:"@site/blog/2023-04-14-refine-invoicer-5.md",title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:8.42,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",slug:"refine-react-invoice-generator-5",authors:"abdullah_numan",tags:["refine-week","refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/social.png",hide_table_of_contents:!1},prevItem:{title:"How to implement a date picker in React",permalink:"/blog/react-date-picker"},nextItem:{title:"Creating Mission and Invoice Pages",permalink:"/blog/refine-react-invoice-generator-4"},relatedPosts:[{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:5.075,date:"2022-02-12T00:00:00.000Z"},{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.405,date:"2021-10-04T00:00:00.000Z"},{title:"refine.new - Introducing the Fastest Way to Create refine Apps",description:"Discover how refine.new and the refine framework are transforming the way developers create front-end applications in the React ecosystem",permalink:"/blog/what-is-refine-new",formattedDate:"May 10, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.98,date:"2023-05-10T00:00:00.000Z"}],authorPosts:[{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.925,date:"2022-10-10T00:00:00.000Z"},{title:"Setting Up the Invoicer App",description:"We start with setting up the Invoicer app by choosing Ant Design as a UI framework and Strapi as a dataprovider",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.115,date:"2023-04-11T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",permalink:"/blog/typescript-enum",formattedDate:"May 21, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.595,date:"2023-05-21T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"refineWeek ft. Strapi series",id:"refineweek-ft-strapi-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Adding PDF Renderer",id:"adding-pdf-renderer",level:2},{value:"React PDF Layout",id:"react-pdf-layout",level:3},{value:"Displaying PDF Renderer in refine Modal",id:"displaying-pdf-renderer-in-refine-modal",level:3},{value:"Series Wrap Up",id:"series-wrap-up",level:2}],m={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this post, we add pdf renderer to ",(0,a.kt)("strong",{parentName:"p"},"PDF Invoice Generator")," app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series."),(0,a.kt)("p",null,"This is Day 5, the final day of the running ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.kt)("strong",{parentName:"a"},"#refineWeek"))," series and this ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.kt)("strong",{parentName:"a"},"#refineWeek"))," is a five-part tutorial that aims to help developers learn the ins-and-outs of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s powerful capabilities and get going with ",(0,a.kt)("a",{parentName:"p",href:"https://strapi.io/"},(0,a.kt)("strong",{parentName:"a"},"Strapi"))," within a week."),(0,a.kt)("h3",{id:"refineweek-ft-strapi-series"},"refineWeek ft. Strapi series"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Day 1 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-1/"},"Pilot & refine architecture")),(0,a.kt)("li",{parentName:"ul"},"Day 2 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-2/"},"Setting Up the Invoicer App")),(0,a.kt)("li",{parentName:"ul"},"Day 3 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-3/"},"Adding CRUD Actions & Views")),(0,a.kt)("li",{parentName:"ul"},"Day 4 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-4/"},"Creating Mission and Invoices Pages"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://invoice-generator.refine.dev/"},"\ud83d\udc49 The live version of the app is be available here.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/refine-week-invoice-generator"},"\ud83d\udc49 The final apps source code is available on GitHub.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Over the last two episodes, we have implemented CRUD operations on several resources of our ",(0,a.kt)("strong",{parentName:"p"},"PDF Invoice Generator")," app. On the way, we have explored ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," and their corresponding hooks that give ",(0,a.kt)("strong",{parentName:"p"},"refine")," powerful tools to rapidly build data heavy applications. We became familiar with some sophisticated hooks such as ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm()")," that makes building with ",(0,a.kt)("strong",{parentName:"p"},"refine")," a convenience many developers seek."),(0,a.kt)("p",null,"In this article, we come past the ",(0,a.kt)("strong",{parentName:"p"},"refine")," features and add a pdf renderer to display our invoices in a PDF screen."),(0,a.kt)("p",null,"We are going to add the pdf renderer inside a modal and make it accessible from the invoices ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page at ",(0,a.kt)("inlineCode",{parentName:"p"},"/invoices"),"."),(0,a.kt)("p",null,"Let's get it done!"),(0,a.kt)("h2",{id:"adding-pdf-renderer"},"Adding PDF Renderer"),(0,a.kt)("p",null,"We are going to render an ",(0,a.kt)("inlineCode",{parentName:"p"},"invoices")," record data inside a pdf layout. We are using ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-pdf/renderer")," ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," package as our pdf renderer. So let's go ahead and install the package first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-npm"},"npm install @react-pdf --save\n")),(0,a.kt)("h3",{id:"react-pdf-layout"},"React PDF Layout"),(0,a.kt)("p",null,"And build the PDF layout component like this:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show PDFlayout code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/pd/pdfLayout.tsx"',title:'"src/components/pd/pdfLayout.tsx"'},'import { Document, Image, Page, StyleSheet, View, Text, PDFViewer } from "@react-pdf/renderer";\nimport { IInvoice } from "interfaces";\nimport { API_URL } from "../../constants";\n\ntype PdfProps = {\n  record: IInvoice | undefined;\n};\n\nexport const PdfLayout: React.FC<PdfProps> = ({ record }) => {\n  const subtotal =\n    record?.missions.reduce((prev, cur) => {\n      return prev + cur?.day * cur?.daily_rate;\n    }, 0) ?? 0;\n\n  return (\n    <PDFViewer style={styles.viewer}>\n      <Document>\n        <Page style={styles.page} size="A4">\n          <View>\n            <Image src={API_URL + record?.company?.logo?.url} style={{ width: "120px", height: "auto" }} />\n            <View style={styles.invoiceTextNumberContainer}>\n              <Text style={styles.invoiceText}>{`Invoice: Invoice_#${record?.id}${record?.name}`}</Text>\n              <Text style={styles.invoiceId}>{`Invoice ID: INVOICE_#${record?.id}`}</Text>\n            </View>\n          </View>\n          <View style={styles.dividerLG} />\n\n          <View style={styles.invoiceForFromContainer}>\n            <View style={styles.invoiceFor}>\n              <Text style={styles.invoiceForFromTitle}>invoice For:</Text>\n              <View>\n                <Text style={styles.invoiceForFromText}>{record?.contact?.client?.name}</Text>\n                <Text style={styles.invoiceForFromText}>{record?.contact?.first_name}</Text>\n                <Text style={styles.invoiceForFromText}>{record?.contact?.last_name}</Text>\n                <Text style={styles.invoiceForFromText}>{record?.contact?.email}</Text>\n              </View>\n            </View>\n\n            <View style={styles.invoiceFrom}>\n              <Text style={styles.invoiceForFromTitle}>From:</Text>\n              <View>\n                <Text style={styles.invoiceForFromText}>{record?.company.name}</Text>\n                <Text style={styles.invoiceForFromText}>{record?.company.city}</Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.company.address}, {record?.company.country}\n                </Text>\n              </View>\n              <View style={styles.dividerSM} />\n              <View>\n                <Text style={styles.invoiceForFromText}>{`Invoice ID: ${record?.id}`}</Text>\n                <Text style={styles.invoiceForFromText}>{`Invoice Custom ID: ${record?.custom_id}`}</Text>\n                <Text style={styles.invoiceForFromText}>{`Invoice Date: ${record?.date}`}</Text>\n              </View>\n            </View>\n          </View>\n\n          <View style={styles.table}>\n            <View style={styles.tableHeader}>\n              <Text style={[styles.tableHeaderItem, { width: "40%" }]}>Mission</Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>Day</Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>Day Rate</Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>Total</Text>\n            </View>\n            {record?.missions.map((item) => {\n              return (\n                <View key={item.id} style={styles.tableRow}>\n                  <Text style={[styles.tableCol, { width: "40%" }]}>{item.mission}</Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>{item?.day}</Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>{item?.daily_rate}</Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>{item?.daily_rate * item?.day}</Text>\n                </View>\n              );\n            })}\n          </View>\n\n          <View style={styles.signatureTotalContainer}>\n            <View style={styles.signatureContainer}>\n              <Text style={styles.signatureText}>Signature: ________________</Text>\n              <Text style={styles.signatureText}>Date: {record?.date.toString()}</Text>\n            </View>\n\n            <View style={styles.totalContainer}>\n              <Text style={styles.totalText}>SUBTOTAL: {subtotal}</Text>\n              <Text style={styles.totalText}>Discount(%): {record?.discount}</Text>\n              <Text style={styles.totalText}>Tax(%): {record?.tax}</Text>\n              <Text style={styles.totalText}>\n                Total($):\n                {subtotal +\n                  (subtotal * (record?.tax as number)) / 100 -\n                  (subtotal * (record?.discount as number)) / 100}\n              </Text>\n            </View>\n          </View>\n          <View style={styles.footer}>\n            <Text style={styles.footerText}>{record?.company.city}</Text>\n            <Text style={styles.footerText}>\n              {record?.company.address}, {record?.company.country}\n            </Text>\n          </View>\n        </Page>\n      </Document>\n    </PDFViewer>\n  );\n};\n\nconst styles = StyleSheet.create({\n  viewer: {\n    paddingTop: 32,\n    width: "100%",\n    height: "80vh",\n    border: "none",\n  },\n  page: {\n    display: "flex",\n    padding: "0.4in 0.4in",\n    fontSize: 12,\n    color: "#333",\n    backgroundColor: "#fff",\n  },\n  invoiceTextNumberContainer: {\n    display: "flex",\n    flexDirection: "row",\n    alignItems: "center",\n    justifyContent: "space-between",\n  },\n  invoiceText: {\n    color: "#3aabf0",\n  },\n  invoiceId: {\n    textAlign: "center",\n  },\n  invoiceForFromContainer: {\n    display: "flex",\n    flexDirection: "row",\n    justifyContent: "space-between",\n  },\n  invoiceForFromTitle: {\n    marginBottom: 24,\n  },\n  invoiceFor: {\n    flex: 1.5,\n  },\n  invoiceFrom: {\n    flex: 1,\n  },\n  invoiceForFromText: {\n    color: "#787878",\n    lineHeight: 1.5,\n  },\n  dividerSM: {\n    width: "100%",\n    height: 1,\n    marginTop: 12,\n    marginBottom: 12,\n    backgroundColor: "#e5e5e5",\n  },\n  dividerLG: {\n    width: "100%",\n    height: 1,\n    marginTop: 40,\n    marginBottom: 40,\n    backgroundColor: "#e5e5e5",\n  },\n  table: {\n    marginTop: 32,\n  },\n  tableHeader: {\n    display: "flex",\n    flexDirection: "row",\n    textAlign: "center",\n  },\n  tableHeaderItem: {\n    paddingVertical: 8,\n    border: "1px solid #000",\n    borderBottom: "none",\n  },\n  tableRow: {\n    display: "flex",\n    flexDirection: "row",\n  },\n  tableCol: {\n    paddingVertical: 8,\n    paddingHorizontal: 4,\n    border: "1px solid #000",\n  },\n  signatureTotalContainer: {\n    display: "flex",\n    flexDirection: "row",\n    justifyContent: "space-between",\n    marginTop: 32,\n  },\n  signatureContainer: {},\n  totalContainer: {},\n  signatureText: {\n    marginTop: 32,\n  },\n  totalText: {\n    marginTop: 16,\n  },\n  footer: {\n    borderTop: "1px solid #e5e5e5",\n    paddingTop: 8,\n    marginTop: "auto",\n  },\n  footerText: {\n    color: "#787878",\n    lineHeight: 1.5,\n  },\n});\n')))),(0,a.kt)("p",null,"Everything here is React-PDF stuff so we won't be delving into any of the components here. However, if you are interested in exploring what's happening, please feel free to check out the cool ",(0,a.kt)("a",{parentName:"p",href:"https://react-pdf.org/components"},(0,a.kt)("inlineCode",{parentName:"a"},"@react-pdf/renderer")," docs here"),"."),(0,a.kt)("h3",{id:"displaying-pdf-renderer-in-refine-modal"},"Displaying PDF Renderer in refine Modal"),(0,a.kt)("p",null,"As implemented on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/refine-react-invoice-generator-4/"},"Day 4"),", our ",(0,a.kt)("inlineCode",{parentName:"p"},"invoices")," ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page renders the ",(0,a.kt)("inlineCode",{parentName:"p"},"<InvoiceList />")," component, which displays invoice data in rows of a table."),(0,a.kt)("p",null,"We are going to display a button on each row which, when clicked, opens up a modal. The modal will show the pdf document created from the invoice record."),(0,a.kt)("p",null,"Here's the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"<InvoiceList />")," component:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show InvoiceList.tsx code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/invoices/list.tsx"',title:'"src/pages/invoices/list.tsx"'},'import { useState } from "react";\nimport { useModal } from "@refinedev/core";\nimport { List, useTable, DateField, TagField, EmailField, DeleteButton, EditButton } from "@refinedev/antd";\n\n// It is recommended to use explicit import as seen below to reduce bundle size.\n// import { IconName } from "@ant-design/icons";\nimport * as Icons from "@ant-design/icons";\n\nimport { Table, Space, Button, Modal } from "antd";\n\nimport { IInvoice, IMission } from "interfaces";\nimport { PdfLayout } from "components/pdf";\n\nconst { FilePdfOutlined } = Icons;\n\nexport const InvoiceList: React.FC = () => {\n  const [record, setRecord] = useState<IInvoice>();\n\n  const { tableProps } = useTable<IInvoice>({\n    meta: {\n      populate: {\n        contact: { populate: ["client"] },\n        company: { populate: ["logo"] },\n        missions: "*",\n      },\n    },\n  });\n\n  const { show, visible, close } = useModal();\n\n  return (\n    <>\n      <List>\n        <Table {...tableProps}>\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column<IInvoice>\n            dataIndex="name"\n            title="Invoice Name"\n            render={(_, record) => {\n              return `Invoice_#${record.id}${record?.name}`;\n            }}\n          />\n          <Table.Column<IInvoice>\n            dataIndex="date"\n            title="Invoice Date"\n            render={(value) => <DateField format="LL" value={value} />}\n          />\n          <Table.Column dataIndex={["company", "name"]} title="Company" />\n          <Table.Column\n            dataIndex={"missions"}\n            title="Missions"\n            render={(value) => {\n              return value.map((item: IMission) => {\n                return <TagField key={item?.id} color="blue" value={item?.mission} />;\n              });\n            }}\n          />\n          <Table.Column\n            dataIndex="discount"\n            title="Discount(%)"\n            render={(value) => <TagField color="blue" value={value} />}\n          />\n          <Table.Column dataIndex="tax" title="Tax(%)" render={(value) => <TagField color="cyan" value={value} />} />\n          <Table.Column dataIndex="custom_id" title="Custom Invoice ID" />\n\n          <Table.Column\n            dataIndex={["contact", "email"]}\n            title="Contact"\n            render={(value) => <EmailField value={value} />}\n          />\n          <Table.Column<IInvoice>\n            title="Actions"\n            dataIndex="actions"\n            render={(_, record) => {\n              return (\n                <Space>\n                  <EditButton hideText size="small" recordItemId={record?.id} />\n                  <DeleteButton hideText size="small" recordItemId={record?.id} />\n                  {record.company && (\n                    <Button\n                      size="small"\n                      icon={<FilePdfOutlined />}\n                      onClick={() => {\n                        setRecord(record);\n                        show();\n                      }}\n                    />\n                  )}\n                </Space>\n              );\n            }}\n          />\n        </Table>\n      </List>\n      <Modal visible={visible} onCancel={close} width="80%" footer={null}>\n        <PdfLayout record={record} />\n      </Modal>\n    </>\n  );\n};\n')))),(0,a.kt)("p",null,"With the amended code, we have added the ",(0,a.kt)("inlineCode",{parentName:"p"},"<FilePdfOutlined />")," icon on each row under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," column, which is basically the button we need. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal />")," component houses the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PdfLayout />")," which displays the pdf document for each invoice record loaded."),(0,a.kt)("p",null,"Do take note of the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.populate")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable()")," hook's argument object. Its nested, nasty. We can even get deeper collecting all associated collections. Basically, what we did was for each ",(0,a.kt)("inlineCode",{parentName:"p"},"invoices")," record, populate all associated ",(0,a.kt)("inlineCode",{parentName:"p"},"contacts")," with each of their associated ",(0,a.kt)("inlineCode",{parentName:"p"},"clients"),"; and populate all associated ",(0,a.kt)("inlineCode",{parentName:"p"},"companies")," with each of their ",(0,a.kt)("inlineCode",{parentName:"p"},"logo"),"s; and also populate all associated ",(0,a.kt)("inlineCode",{parentName:"p"},"missions"),"."),(0,a.kt)("p",null,"OK. With this done, we can now go ahead and test our app and should be able to view the pdf document by clicking on the pdf document icon."),(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/pdf.gif",alt:"react invoice generator"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"series-wrap-up"},"Series Wrap Up"),(0,a.kt)("p",null,"In this ",(0,a.kt)("strong",{parentName:"p"},"#refineWeek")," series, we built a pdf invoice generator which allows users to create companies, add their clients, their contacts. They are also able to create missions with payment details such as daily rate and number of days for the mission to be completed, and issue invoices on those missions."),(0,a.kt)("p",null,"While building the app, we covered several core ",(0,a.kt)("strong",{parentName:"p"},"refine")," concepts, particularly how data providers and hooks interact in data fetching and authentication. We made use of ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," props, along with ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider"),"."),(0,a.kt)("p",null,"We also made distinction between ",(0,a.kt)("strong",{parentName:"p"},"refine")," core modules and support packages such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/strapi-4")," which provides support to core features like ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," with respect to communicating with the backend API."),(0,a.kt)("p",null,"We became familiar with the new ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and routing definitions in ",(0,a.kt)("strong",{parentName:"p"},"refine")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"v4"),", where a particular resource item specifies the path to all its pages, instead of the exact component to render. The component to render is now specified in the route definitions, giving us more flexibility and control over defining a better routing system."),(0,a.kt)("p",null,"We delved into the details about the fantastic support ",(0,a.kt)("strong",{parentName:"p"},"refine")," has for ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," components. We saw that ",(0,a.kt)("strong",{parentName:"p"},"refine")," lets us use ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," components out of the box, but also has its own library of support package in ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),". We experienced the convenience of powerful ",(0,a.kt)("strong",{parentName:"p"},"refine-Ant Design")," hooks such as ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm()")," that handle tremendous amount of heavy tasks such as data fetching and state management. We explored the excruciating details of how ",(0,a.kt)("strong",{parentName:"p"},"refine")," accomplishes these heavylifting in the background by digging into the source code of some of these hooks."),(0,a.kt)("p",null,"There are a lot more to ",(0,a.kt)("strong",{parentName:"p"},"refine")," than what we have covered in this series. We have made great strides in covering these topics so far by going through the documentation, especially to understand the provider - hooks interactions."),(0,a.kt)("p",null,"We can always build on what we have covered so far. There are plenty of things that we can do moving forward, like implementing access control with the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),", audit logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),", customizing the layout, header, auth pages, etc."),(0,a.kt)("p",null,"Please feel free to reach out to the refine team or join the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/refine"},"refine Discord Channel")," to learn more and / or contribute!"))}u.isMDXComponent=!0}}]);