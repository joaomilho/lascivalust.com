(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{3956:function(e,t,o){"use strict";o.d(t,{PB:function(){return s}});var n=o(959),r=o(5518),a=o.n(r);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var p=["keyOverride"],l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,o){void 0===t&&(t=[]);var r=void 0===o?{}:o,a=r.defaultWidth,i=r.defaultHeight;return t.reduce(function(t,o,r){return t.push(n.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:o.url})),o.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.width.toString()})):a&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:a.toString()})),o.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(n.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:i.toString()})),t},[])},h=function(e){var t,o,r,a,h,d=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,l.templateTitle&&(s=l.templateTitle.replace(/%s/g,function(){return s}))):e.defaultTitle&&(s=e.defaultTitle),s&&d.push(n.createElement("title",{key:"title"},s));var u=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,m=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,G=g.maxSnippet,k=g.maxImagePreview,v=g.maxVideoPreview,w=g.noarchive,E=g.noimageindex,b=g.notranslate,_=g.unavailableAfter;f=(y?",nosnippet":"")+(G?",max-snippet:"+G:"")+(k?",max-image-preview:"+k:"")+(w?",noarchive":"")+(_?",unavailable_after:"+_:"")+(E?",noimageindex":"")+(v?",max-video-preview:"+v:"")+(b?",notranslate":"")}if(u||m?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),d.push(n.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(m?"nofollow":"follow")+f}))):d.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&d.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&d.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&d.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){d.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&d.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&d.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&d.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&d.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||s)&&d.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(a=e.openGraph)?void 0:a.title)||s})),(null!=(o=e.openGraph)&&o.description||e.description)&&d.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(h=e.openGraph)?void 0:h.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&d.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();d.push(n.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&d.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&d.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&d.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&d.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){d.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&d.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&d.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&d.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&d.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&d.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){d.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&d.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&d.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&d.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&d.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&d.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&d.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&d.push.apply(d,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&d.push.apply(d,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.audio&&d.push.apply(d,c("audio",e.openGraph.audio)),e.openGraph.locale&&d.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&d.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&d.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,r=e.keyOverride,a=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,p);d.push(n.createElement("meta",i({key:"meta:"+(null!=(t=null!=(o=null!=r?r:a.name)?o:a.property)?t:a.httpEquiv)},a)))}),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach(function(e){var t;d.push(n.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),d},d=function(e){return n.createElement(a(),null,h(e))},s=function(e){var t=e.title,o=e.themeColor,r=e.noindex,a=void 0!==r&&r,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,s=e.openGraph,u=e.facebook,m=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,G=e.mobileAlternate,k=e.languageAlternates,v=e.additionalLinkTags,w=e.useAppDir;return n.createElement(n.Fragment,null,void 0!==w&&w?h({title:t,themeColor:o,noindex:a,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:u,openGraph:s,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:v}):n.createElement(d,{title:t,themeColor:o,noindex:a,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:u,openGraph:s,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:v}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},7653:function(e){e.exports={style:{fontFamily:"'__EB_Garamond_f3e4c7', '__EB_Garamond_Fallback_f3e4c7'",fontStyle:"normal"},className:"__className_f3e4c7"}},5518:function(e,t,o){e.exports=o(1993)},4451:function(e,t,o){"use strict";o.d(t,{Y:function(){return r}});var n=o(959);let r="undefined"==typeof window?n.useEffect:n.useLayoutEffect},526:function(e,t,o){"use strict";o.d(t,{g:function(){return l}});var n=o(959),r=o(4451);let a=()=>{};function i(e,t,o,i={},p=!0,l=!1){let c=function(e){let t=function(e,t=!1){let o=t?r.Y:n.useEffect,a=(0,n.useRef)(e);return o(()=>{a.current=e}),a}(e);return function(...e){"function"==typeof t.current&&t.current(...e)}}(o),h=l?r.Y:n.useEffect;h(()=>(a(void 0!==e,"[useGlobalObjectEventListener]: Cannot attach event handlers to undefined."),void 0!==e&&p)?(e.addEventListener(t,c,i),()=>{e.removeEventListener(t,c,i)}):()=>{},[t,i])}function p(){return"undefined"==typeof window?{scrollX:0,scrollY:0}:{scrollX:window.scrollX||window.pageXOffset,scrollY:window.scrollY||window.pageYOffset}}function l(){let[e,t]=(0,n.useState)(p);return!function(e,t=!0,n=!1){i(o.g.window,"scroll",e,{passive:!0},t,n)}(()=>{t(p())},!0,!0),!function(e,t=!0,n=!1){i(o.g.window,"resize",e,{passive:!0},t,n)}(()=>{t(p())},!0,!0),e}},1281:function(e,t,o){"use strict";o.d(t,{i:function(){return p}});var n=o(959),r=o(4451);let a={innerHeight:null,innerWidth:null,outerHeight:null,outerWidth:null};function i(){return{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}}function p(){let[e,t]=(0,n.useState)(()=>"undefined"==typeof window?a:i());function o(){t(i())}return(0,r.Y)(()=>"undefined"==typeof window?()=>{}:(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),e}}}]);