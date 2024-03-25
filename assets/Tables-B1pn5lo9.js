import{r as v,_ as N,R as p,b as t,c as k,P as i,d as R,j as e}from"./index-Cpf_8M0q.js";import{a as j}from"./DefaultLayout-knEUf8XN.js";import"./index.es-BVhJ6VmL.js";import{C as Q}from"./CRow-BxlJEftq.js";import{C as g}from"./CCol-Caebxd24.js";import{C as y,a as u}from"./CCardBody-Cq9YJtsZ.js";import{C}from"./CCardHeader-USPrFVWd.js";import"./cil-user-Dlmw-Gem.js";var d=v.forwardRef(function(c,o){var n,m=c.children,f=c.className,b=c.color,w=N(c,["children","className","color"]);return p.createElement("thead",t({className:k((n={},n["table-".concat(b)]=b,n),f)||void 0},w,{ref:o}),m)});d.propTypes={children:i.node,className:i.string,color:R};d.displayName="CTableHead";var r=v.forwardRef(function(c,o){var n,m=c.children,f=c.className,b=c.color,w=N(c,["children","className","color"]);return p.createElement("th",t({className:k((n={},n["table-".concat(b)]=b,n),f)||void 0},w,{ref:o}),m)});r.propTypes={children:i.node,className:i.string,color:R};r.displayName="CTableHeaderCell";var h=v.forwardRef(function(c,o){var n,m=c.children,f=c.className,b=c.color,w=N(c,["children","className","color"]);return p.createElement("tbody",t({className:k((n={},n["table-".concat(b)]=b,n),f)||void 0},w,{ref:o}),m)});h.propTypes={children:i.node,className:i.string,color:R};h.displayName="CTableBody";var s=v.forwardRef(function(c,o){var n,m=c.children,f=c.active,b=c.align,w=c.className,H=c.color,T=N(c,["children","active","align","className","color"]),B=T.scope?"th":"td";return p.createElement(B,t({className:k((n={},n["align-".concat(b)]=b,n["table-active"]=f,n["table-".concat(H)]=H,n),w)||void 0},T,{ref:o}),m)});s.propTypes={active:i.bool,align:i.oneOf(["bottom","middle","top"]),children:i.node,className:i.string,color:R};s.displayName="CTableDataCell";var l=v.forwardRef(function(c,o){var n,m=c.children,f=c.active,b=c.align,w=c.className,H=c.color,T=N(c,["children","active","align","className","color"]);return p.createElement("tr",t({className:k((n={},n["align-".concat(b)]=b,n["table-active"]=f,n["table-".concat(H)]=H,n),w)||void 0},T,{ref:o}),m)});l.propTypes={active:i.bool,align:i.oneOf(["bottom","middle","top"]),children:i.node,className:i.string,color:R};l.displayName="CTableRow";var J=v.forwardRef(function(c,o){var n,m=c.children,f=c.className,b=c.color,w=N(c,["children","className","color"]);return p.createElement("tfoot",t({className:k((n={},n["table-".concat(b)]=b,n),f)||void 0},w,{ref:o}),m)});J.propTypes={children:i.node,className:i.string,color:R};J.displayName="CTableFoot";var L=v.forwardRef(function(c,o){var n=c.children,m=N(c,["children"]);return p.createElement("caption",t({},m,{ref:o}),n)});L.propTypes={children:i.node};L.displayName="CTableCaption";var P=function(c){var o=c.children,n=c.responsive,m=N(c,["children","responsive"]);return n?p.createElement("div",t({className:typeof n=="boolean"?"table-responsive":"table-responsive-".concat(n)},m),o):p.createElement(p.Fragment,null,o)};P.propTypes={children:i.node,responsive:i.oneOfType([i.bool,i.oneOf(["sm","md","lg","xl","xxl"])])};P.displayName="CTableResponsiveWrapper";var D=function(c){return c.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map(function(o){return o.charAt(0).toUpperCase()+o.slice(1)}).join(" ")},X=function(c){var o;return typeof c=="object"?(o=c.label)!==null&&o!==void 0?o:D(c.key):D(c)},_=function(c,o){return c?c.map(function(n){return typeof n=="object"?n.key:n}):o&&ee(o)},ee=function(c){return Object.keys(c[0]||{}).filter(function(o){return o.charAt(0)!=="_"})},a=v.forwardRef(function(c,o){var n,m=c.children,f=c.align,b=c.borderColor,w=c.bordered,H=c.borderless,T=c.caption,B=c.captionTop,I=c.className,F=c.color,E=c.columns,A=c.footer,q=c.hover,S=c.items,W=c.responsive,z=c.small,V=c.striped,$=c.stripedColumns,Y=c.tableFootProps,Z=c.tableHeadProps,G=N(c,["children","align","borderColor","bordered","borderless","caption","captionTop","className","color","columns","footer","hover","items","responsive","small","striped","stripedColumns","tableFootProps","tableHeadProps"]),U=v.useMemo(function(){return _(E,S)},[E,S]);return p.createElement(P,{responsive:W},p.createElement("table",t({className:k("table",(n={},n["align-".concat(f)]=f,n["border-".concat(b)]=b,n["caption-top"]=B||T==="top",n["table-bordered"]=w,n["table-borderless"]=H,n["table-".concat(F)]=F,n["table-hover"]=q,n["table-sm"]=z,n["table-striped"]=V,n["table-striped-columns"]=$,n),I)},G,{ref:o}),(T&&T!=="top"||B)&&p.createElement(L,null,T||B),E&&p.createElement(d,t({},Z),p.createElement(l,null,E.map(function(x,O){return p.createElement(r,t({},x._props&&t({},x._props),x._style&&{style:t({},x._style)},{key:O}),X(x))}))),S&&p.createElement(h,null,S.map(function(x,O){return p.createElement(l,t({},x._props&&t({},x._props),{key:O}),U&&U.map(function(M,K){return x[M]!==void 0?p.createElement(s,t({},x._cellProps&&t(t({},x._cellProps.all&&t({},x._cellProps.all)),x._cellProps[M]&&t({},x._cellProps[M])),{key:K}),x[M]):null}))})),m,A&&p.createElement(J,t({},Y),p.createElement(l,null,A.map(function(x,O){return p.createElement(s,t({},typeof x=="object"&&x._props&&t({},x._props),{key:O}),typeof x=="object"?x.label:x)})))))});a.propTypes={align:i.oneOf(["bottom","middle","top"]),borderColor:i.string,bordered:i.bool,borderless:i.bool,caption:i.oneOfType([i.string,i.oneOf(["top"])]),captionTop:i.string,children:i.node,className:i.string,color:R,columns:i.array,footer:i.array,hover:i.bool,items:i.array,responsive:i.oneOfType([i.bool,i.oneOf(["sm","md","lg","xl","xxl"])]),small:i.bool,striped:i.bool,stripedColumns:i.bool,tableFootProps:i.shape(t({},J.propTypes)),tableHeadProps:i.shape(t({},d.propTypes))};a.displayName="CTable";const he=()=>e.jsxs(Q,{children:[e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Basic example"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Using the most basic table CoreUI, here's how ",e.jsx("code",{children:"<CTable>"}),"-based tables look in CoreUI."]}),e.jsx(j,{href:"components/table",children:e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Variants"})]}),e.jsxs(u,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Use contextual classes to color tables, table rows or individual cells."}),e.jsx(j,{href:"components/table#variants",children:e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"Default"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"primary",children:[e.jsx(r,{scope:"row",children:"Primary"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"secondary",children:[e.jsx(r,{scope:"row",children:"Secondary"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"success",children:[e.jsx(r,{scope:"row",children:"Success"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"danger",children:[e.jsx(r,{scope:"row",children:"Danger"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"warning",children:[e.jsx(r,{scope:"row",children:"Warning"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"info",children:[e.jsx(r,{scope:"row",children:"Info"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"light",children:[e.jsx(r,{scope:"row",children:"Light"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]}),e.jsxs(l,{color:"dark",children:[e.jsx(r,{scope:"row",children:"Dark"}),e.jsx(s,{children:"Cell"}),e.jsx(s,{children:"Cell"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Striped rows"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Use ",e.jsx("code",{children:"striped"})," property to add zebra-striping to any table row within the"," ",e.jsx("code",{children:"<CTableBody>"}),"."]}),e.jsx(j,{href:"components/table#striped-rows",children:e.jsxs(a,{striped:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx("p",{className:"text-body-secondary small",children:"These classes can also be added to table variants:"}),e.jsx(j,{href:"components/table#striped-rows",children:e.jsxs(a,{color:"dark",striped:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#striped-rows",children:e.jsxs(a,{color:"success",striped:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Hoverable rows"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Use ",e.jsx("code",{children:"hover"})," property to enable a hover state on table rows within a"," ",e.jsx("code",{children:"<CTableBody>"}),"."]}),e.jsx(j,{href:"components/table#hoverable-rows",children:e.jsxs(a,{hover:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#hoverable-rows",children:e.jsxs(a,{color:"dark",hover:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#hoverable-rows",children:e.jsxs(a,{striped:!0,hover:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Active tables"})]}),e.jsxs(u,{children:[e.jsx(j,{href:"components/table#active-tables",children:e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{active:!0,children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,active:!0,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#active-tables",children:e.jsxs(a,{color:"dark",children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{active:!0,children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,active:!0,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Bordered tables"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"bordered"})," property for borders on all sides of the table and cells."]}),e.jsx(j,{href:"components/table#bordered-tables",children:e.jsxs(a,{bordered:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsxs("p",{className:"text-body-secondary small",children:[e.jsx("a",{href:"https://coreui.io/docs/utilities/borders#border-color",children:"Border color utilities"})," ","can be added to change colors:"]}),e.jsx(j,{href:"components/table#bordered-tables",children:e.jsxs(a,{bordered:!0,borderColor:"primary",children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Tables without borders"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"borderless"})," property for a table without borders."]}),e.jsx(j,{href:"components/table#tables-without-borders",children:e.jsxs(a,{borderless:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#tables-without-borders",children:e.jsxs(a,{color:"dark",borderless:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Small tables"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"small"})," property to make any ",e.jsx("code",{children:"<CTable>"})," more compact by cutting all cell ",e.jsx("code",{children:"padding"})," in half."]}),e.jsx(j,{href:"components/table#small-tables",children:e.jsxs(a,{small:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Vertical alignment"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Table cells of ",e.jsx("code",{children:"<CTableHead>"})," are always vertical aligned to the bottom. Table cells in ",e.jsx("code",{children:"<CTableBody>"})," inherit their alignment from"," ",e.jsx("code",{children:"<CTable>"})," and are aligned to the the top by default. Use the align property to re-align where needed."]}),e.jsx(j,{href:"components/table#vertical-alignment",children:e.jsxs(a,{align:"middle",responsive:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",className:"w-25",children:"Heading 1"}),e.jsx(r,{scope:"col",className:"w-25",children:"Heading 2"}),e.jsx(r,{scope:"col",className:"w-25",children:"Heading 3"}),e.jsx(r,{scope:"col",className:"w-25",children:"Heading 4"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsx(s,{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells."})]}),e.jsxs(l,{align:"bottom",children:[e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsx(s,{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells."})]}),e.jsxs(l,{children:[e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs(s,{children:["This cell inherits ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsx(s,{align:"top",children:"This cell is aligned to the top."}),e.jsx(s,{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells."})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Nesting"})]}),e.jsxs(u,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Border styles, active styles, and table variants are not inherited by nested tables."}),e.jsx(j,{href:"components/table#nesting",children:e.jsxs(a,{striped:!0,children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsx(l,{children:e.jsx(r,{colSpan:4,children:e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"Header"}),e.jsx(r,{scope:"col",children:"Header"}),e.jsx(r,{scope:"col",children:"Header"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"A"}),e.jsx(s,{children:"First"}),e.jsx(s,{children:"Last"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"B"}),e.jsx(s,{children:"First"}),e.jsx(s,{children:"Last"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"C"}),e.jsx(s,{children:"First"}),e.jsx(s,{children:"Last"})]})]})]})})}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Table head"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Similar to tables and dark tables, use the modifier prop"," ",e.jsx("code",{children:'color="light"'})," or ",e.jsx("code",{children:'color="dark"'})," to make"," ",e.jsx("code",{children:"<CTableHead>"}),"s appear light or dark gray."]}),e.jsx(j,{href:"components/table#table-head",children:e.jsxs(a,{children:[e.jsx(d,{color:"light",children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{children:"Larry"}),e.jsx(s,{children:"the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsx(j,{href:"components/table#table-head",children:e.jsxs(a,{children:[e.jsx(d,{color:"dark",children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Table foot"})]}),e.jsx(u,{children:e.jsx(j,{href:"components/table#table-foot",children:e.jsxs(a,{children:[e.jsx(d,{color:"light",children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{colSpan:2,children:"Larry the Bird"}),e.jsx(s,{children:"@twitter"})]})]}),e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(s,{children:"Footer"}),e.jsx(s,{children:"Footer"}),e.jsx(s,{children:"Footer"}),e.jsx(s,{children:"Footer"})]})})]})})})]})}),e.jsx(g,{xs:12,children:e.jsxs(y,{className:"mb-4",children:[e.jsxs(C,{children:[e.jsx("strong",{children:"React Table"})," ",e.jsx("small",{children:"Captions"})]}),e.jsxs(u,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["A ",e.jsx("code",{children:"<CTableCaption>"})," functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it."]}),e.jsx(j,{href:"components/table#captions",children:e.jsxs(a,{children:[e.jsx(L,{children:"List of users"}),e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{children:"Larry"}),e.jsx(s,{children:"the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})}),e.jsxs("p",{className:"text-body-secondary small",children:["You can also put the ",e.jsx("code",{children:"<CTableCaption>"})," on the top of the table with"," ",e.jsx("code",{children:'caption="top"'}),"."]}),e.jsx(j,{href:"components/table#captions",children:e.jsxs(a,{caption:"top",children:[e.jsx(L,{children:"List of users"}),e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(r,{scope:"col",children:"#"}),e.jsx(r,{scope:"col",children:"Class"}),e.jsx(r,{scope:"col",children:"Heading"}),e.jsx(r,{scope:"col",children:"Heading"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"1"}),e.jsx(s,{children:"Mark"}),e.jsx(s,{children:"Otto"}),e.jsx(s,{children:"@mdo"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"2"}),e.jsx(s,{children:"Jacob"}),e.jsx(s,{children:"Thornton"}),e.jsx(s,{children:"@fat"})]}),e.jsxs(l,{children:[e.jsx(r,{scope:"row",children:"3"}),e.jsx(s,{children:"Larry"}),e.jsx(s,{children:"the Bird"}),e.jsx(s,{children:"@twitter"})]})]})]})})]})]})})]});export{he as default};
