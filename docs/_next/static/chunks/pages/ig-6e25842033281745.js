(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{745:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ig",function(){return l(4117)}])},4117:function(e,t,l){"use strict";l.r(t);var n=l(1527),r=l(758);let o=(0,r.Z)("https://www.instagram.com/mistress_lasciva");t.default=()=>(0,n.jsx)(o,{children:"Redirecting to instagram..."})},5518:function(e,t,l){e.exports=l(1993)},1240:function(e,t,l){e.exports=l(3427)},758:function(e,t,l){"use strict";let n="src/index.tsx";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){let t;let l=e[0],n=1;for(;n<e.length;){let r=e[n],o=e[n+1];if(n+=2,("optionalAccess"===r||"optionalCall"===r)&&null==l)return;"access"===r||"optionalAccess"===r?(t=l,l=o(l)):("call"===r||"optionalCall"===r)&&(l=o((...e)=>l.call(t,...e)),t=void 0)}return l}var s=r(l(959)),a=r(l(1240)),i=r(l(5518));let c="Option {params: true} require the url to be the name of the param to search for: `redirect('to', {params:true})` will work with `/redirect?to=https://example.com`",u=e=>{if("undefined"==typeof window)return"";let t=new URL(window.location.href),l=t.searchParams.get(e);if(!l)throw Error(c);return l};t.Z=(e,t)=>class extends s.default.Component{static async getInitialProps({res:l,query:n}){if(o([l,"optionalAccess",e=>e.writeHead])){var r;let s=e;if(!0===o([t,"optionalAccess",e=>e.params])){if(!o([n,"optionalAccess",t=>t[e]]))throw Error(c);s=n[e]}l.writeHead((r=o([t,"optionalAccess",e=>e.statusCode]),null!=r?r:301),{Location:s}),l.end()}else if("undefined"!=typeof window){let a=e;!0===o([t,"optionalAccess",e=>e.params])&&(a=u(a)),window.location.href=a}return{}}componentDidMount(){!0===o([t,"optionalAccess",e=>e.params])?window.location.href=u(e):null!=o([t,"optionalAccess",e=>e.asUrl])?a.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?a.default.push(e):window.location.href=e}render(){var l;let r=(l=o([t,"optionalAccess",e=>e.asUrl]),null!=l?l:e);return null!=o([t,"optionalAccess",e=>e.params])&&(r=u(e)),s.default.createElement(s.default.Fragment,null,s.default.createElement(i.default,{__self:this,__source:{fileName:n,lineNumber:76}},s.default.createElement("noscript",{__self:this,__source:{fileName:n,lineNumber:78}},s.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${r}`,__self:this,__source:{fileName:n,lineNumber:79}})),(void 0===o([t,"optionalAccess",e=>e.statusCode])||301===o([t,"optionalAccess",e=>e.statusCode]))&&s.default.createElement("link",{rel:"canonical",href:r,__self:this,__source:{fileName:n,lineNumber:83}})),this.props.children?this.props.children:s.default.createElement("p",{__self:this,__source:{fileName:n,lineNumber:90}},"Redirecting to ",s.default.createElement("a",{href:r,__self:this,__source:{fileName:n,lineNumber:91}},r),"…"))}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=745)}),_N_E=e.O()}]);