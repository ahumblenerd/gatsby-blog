(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(t,e,a){"use strict";a.r(e);a(248);var n=a(0),r=a.n(n),o=a(242),l=a(241),i=a(94),s=(a(38),a(20)),c=a(243),u=a(224),m=a.n(u),g=a(240),p=a(245),d=a(250),f=function(t){var e=t.language,a=Object(g.d)().author;return r.a.createElement(s.Location,null,function(t){var n=t.location;return r.a.createElement("div",{className:m.a.author},r.a.createElement("div",{className:m.a.author__title},r.a.createElement("strong",null,a.name[e]),["github","linkedin","twitter"].map(function(t){return a.contacts[t]?r.a.createElement("span",{className:m.a["author__title__contacts-item"],key:t},r.a.createElement("a",{className:m.a["author__title__contacts-item-link"],href:Object(c.a)(t,a.contacts[t][e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:Object(c.b)(t)}))):null})),r.a.createElement("div",{className:m.a.author__bio},a.bio[Object(p.a)(n.pathname)],r.a.createElement("div",{className:m.a["author__bio-portfolio"]},r.a.createElement("a",{href:a.contacts.portfolio.en,rel:"noopener noreferrer",target:"_blank"},a.contacts.portfolio.en))))})},h=a(303),v=a.n(h),y=function(t){var e=t.postTitle,a=t.postSlug,n=Object(g.d)(),o=n.url,l=n.disqusShortname;return l?r.a.createElement(v.a,{shortname:l,identifier:e,title:e,url:o+a}):null},_=a(246),b=a.n(_),E=a(244),k=a(225),j=a.n(k),w=function(t){var e=t.language,a=t.fields,n=t.frontmatter,o=a.tagSlugs,l=a.categorySlug,s=n.tags,u=n.date,m=n.category;return r.a.createElement("div",null,r.a.createElement("div",{className:j.a.meta},r.a.createElement("div",{className:j.a.meta__date},b()(u).format("en"===e?"MMMM D, YYYY":"YYYY/MM/DD")),r.a.createElement("div",{className:j.a.meta__category},r.a.createElement("span",{className:j.a.meta__emoji}," ",r.a.createElement(E.a,{icon:Object(c.b)("category")})),r.a.createElement(i.Link,{to:l+("en"===e?"":"/ja"),className:j.a["meta__category-link"]},m)),s?r.a.createElement("div",{className:j.a.meta__tags},r.a.createElement("span",{className:j.a.meta__emoji}," ",r.a.createElement(E.a,{icon:Object(c.b)("tag")})),o&&o.map(function(t,a){return r.a.createElement("span",{className:j.a["meta__tags-item"],key:s[a]},r.a.createElement(i.Link,{to:t+("ja"===e?"/ja":""),className:j.a["meta__tags-item-link"]},s[a]))})):null))},C=a(226),N=a.n(C),M=function(t){var e=t.body,a=t.title,n=t.language,o=t.fields,l=t.frontmatter;return r.a.createElement("div",{className:N.a.content},r.a.createElement("h1",{className:N.a.content__title},a),r.a.createElement(w,{language:n,fields:o,frontmatter:l}),r.a.createElement("div",{className:N.a.content__body,dangerouslySetInnerHTML:{__html:e}}))},O=a(227),V=a.n(O),T=function(t){var e=t.date,a=t.language;return r.a.createElement("div",{className:V.a.meta},r.a.createElement("p",{className:V.a.meta__date},("en"===a?"Published":"投稿日:")+" ",b()(e).format("en"===a?"MMMM D, YYYY":"YYYY年M月D日")))},S=a(228),L=a.n(S),x=function(t){var e=t.tags,a=t.tagSlugs,n=t.language;return r.a.createElement("div",{className:L.a.tags},"en"===n?e.length>1?"Tags: ":"Tag: ":"タグ： ",r.a.createElement(r.a.Fragment,null,a&&a.map(function(t,a){return r.a.createElement("span",{className:L.a["tags__list-item"],key:e[a]},r.a.createElement(i.Link,{to:"en"===n?t:t+"/ja",className:L.a["tags__list-item-link"]},e[a]))})))},R=a(229),D=a.n(R),Y=function(t){var e=t.language,a=t.prev,n=t.next;return r.a.createElement("div",{className:D.a.pagination},function(t){return t&&t.slug?r.a.createElement("div",{className:D.a.pagination__prev},r.a.createElement(i.Link,{className:D.a.pagination__prev__link,to:t.slug},r.a.createElement("div",{className:D.a["pagination__prev__link-date"]},b()(t.date).format("en"===e?"MMMM D, YYYY":"YYYY-MM-DD")),r.a.createElement("div",{className:D.a["pagination__prev__link-title"]},r.a.createElement("span",null,"←")," ",t.title))):null}(a),function(t){return t&&t.slug?r.a.createElement("div",{className:D.a.pagination__next},r.a.createElement(i.Link,{className:D.a.pagination__next__link,to:t.slug},r.a.createElement("div",{className:D.a["pagination__next__link-date"]},b()(t.date).format("en"===e?"MMMM D, YYYY":"YYYY-MM-DD")),r.a.createElement("div",{className:D.a["pagination__next__link-title"]},t.title," ",r.a.createElement("span",null,"→")))):null}(n))},I=a(230),P=a.n(I),A=function(t){var e=t.language,a=t.posts;return r.a.createElement("div",{className:P.a["related-posts"]},r.a.createElement("h3",null,"en"===e?"Related "+(1===a.length?"post":"posts"):"関連ブログ"),r.a.createElement("ul",null,a.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement(i.Link,{to:t},Object(g.a)(t)))})))},B=a(231),H=a.n(B),z=function(t){var e=t.post,a=t.language,n=t.prev,o=t.next,l=t.backLink,s=t.stateForSearchPage,c=e.html,u=e.fields,m=u.categorySlug,g=u.tagSlugs,p=u.slug,d=e.frontmatter,h=d.category,v=d.tags,_=d.title,b=d.date;return r.a.createElement("div",{className:H.a.post},r.a.createElement("div",{className:H.a.post__inner},r.a.createElement("div",{className:H.a.post__content},r.a.createElement(M,{body:c,title:_,language:a,fields:e.fields,frontmatter:e.frontmatter})),r.a.createElement("div",{className:H.a.post__footer},r.a.createElement(T,{date:b,language:a}),r.a.createElement("div",{className:H.a["post__footer-category"]},"en"===a?"Category: ":"カテゴリー： ",r.a.createElement(i.Link,{to:m},h)),v&&g&&r.a.createElement(x,{tags:v,tagSlugs:g,language:a}),e.frontmatter.related?r.a.createElement(A,{language:a,posts:e.frontmatter.related}):null,r.a.createElement(i.Link,{className:H.a["post__home-button"],to:l||("en"===a?"/":"/ja"),state:l?s:null},"en"===a?"← Back":"← もどる"),r.a.createElement(Y,{language:a,prev:n,next:o}),r.a.createElement(f,{language:a})),r.a.createElement("div",{className:H.a.post__comments},r.a.createElement(y,{postSlug:p,postTitle:e.frontmatter.title}))))};a.d(e,"query",function(){return q});var q="1592126421";e.default=function(t){var e=t.data,a=t.pageContext,n=t.location,i=a.language,s=a.prev,c=a.next,u="en"===i?Object(g.d)().title:Object(g.d)().titleJa,m="en"===i?Object(g.d)().subtitle:Object(g.d)().subtitleJa,p=e.markdownRemark.frontmatter,d=p.title,f=p.description,h=null!==f?f:m,v={exist:!!e.markdownRemark.frontmatter.link,path:e.markdownRemark.frontmatter.link};return r.a.createElement(o.a,{title:d+" - "+u,description:h},r.a.createElement(l.a,{link:v}),r.a.createElement(z,{post:e.markdownRemark,language:a.language,prev:s,next:c,backLink:n.state?n.state.from:null,stateForSearchPage:!n.state||"/search"!==n.state.from&&"/search/ja"!==n.state.from?null:{year:n.state.year,month:n.state.month,selectedCategory:n.state.selectedCategory,selectedTags:n.state.selectedTags}}))}},240:function(t,e,a){"use strict";var n=a(259),r=function(){return n.data.site.siteMetadata},o=a(260),l=function(){return o.data.allMarkdownRemark.group},i=a(261),s=function(){return i.data.allMarkdownRemark.group},c=a(262),u=function(){return c.data.allMarkdownRemark.group},m=a(263),g=function(){return m.data.allMarkdownRemark.group},p=a(264),d=function(){return p.data.allMarkdownRemark.edges},f=function(t){return d().filter(function(e){return e.node.frontmatter.slug===t})[0].node.frontmatter.title};a.d(e,"d",function(){return r}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return s}),a.d(e,"e",function(){return u}),a.d(e,"f",function(){return g}),a.d(e,"a",function(){return f})},241:function(t,e,a){"use strict";a(248);var n=a(0),r=a.n(n),o=a(20),l=(a(38),a(94)),i=a(208),s=a.n(i),c=function(t){var e=t.author,a=t.isIndex,n=t.language;return r.a.createElement("div",{className:s.a.author},a?r.a.createElement("h1",{className:s.a.author__title},r.a.createElement(l.Link,{className:s.a["author__title-link"],to:"en"===n?"/":"/ja"},e.name[n])):r.a.createElement("h2",{className:s.a.author__title},r.a.createElement(l.Link,{className:s.a["author__title-link"],to:"en"===n?"/":"/ja"},e.name[n])),r.a.createElement("p",{className:s.a.author__subtitle},e.bio[n]))},u=(a(10),a(138),a(139),a(209)),m=a.n(u),g=(a(51),a(40),a(30),a(41),a(69),a(16),{personal:"ひとりごと",vancouver:"バンクーバー",react:"react","about-me":"about-me"}),p={};for(var d in g)p[g[d]]=d;var f={web:"web",life:"生活",cafe:"カフェ",english:"英語",dessert:"スイーツ",restaurant:"レストラン","about-me":"就活"},h={};for(var v in f)h[f[v].toString()]=v;var y=function(t){var e=t.substring(1,t.length).split("/");return e[1]=decodeURIComponent(e[1]),e},_=function(t){var e=y(t);return"category"===e[0]?"ja"===e[2]?"/category/"+p[e[1]]:"/category/"+g[e[1]]+"/ja":"ja"===e[2]?"/tag/"+h[e[1]]:"/tag/"+f[e[1]]+"/ja"},b=a(257),E=function(){return b.data.allSitePage.nodes},k=a(258),j=function(){return k.data.allSitePage.nodes},w=function(t){var e=t.link,a=t.language,o=t.path,i=Object(n.useState)(null),s=i[0],c=i[1],u=Object(n.useState)(null),g=u[0],p=u[1],d=o.includes("/tag/")?E():null,f=o.includes("/category/")?j():null,h=r.a.createRef();Object(n.useEffect)(function(){e&&!e.exist||(o.includes("/category/")||o.includes("/tag/")?function(t,e){t=_("/"+y(t).join("/"));var a=e,n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var o;if(n){if(r>=a.length)break;o=a[r++]}else{if((r=a.next()).done)break;o=r.value}if(t===o.path)return!0}return!1}(o,o.includes("/tag/")?d:f)&&("en"===a?p(!0):c(!0)):"en"===a?p(!0):c(!0))},[]);var v=function(t,n){if(t!==n&&(s||g)){var r="";if(e){if(!e.exist)return;r=e.path}else r=function(t,e){return e.includes("/page/")?"/ja"===t?"/":"/ja":e.includes("/category/")||e.includes("/tag/")?_(e):e.includes("/ja")?e.replace("/ja","").replace("/gatsby-blog",""):(e+"/ja").replace("/gatsby-blog","")}(a,location.pathname);h.current.style.left="/ja"===r.slice(-3)?"50%":"0",setTimeout(function(){return Object(l.navigate)(r)},30)}},b=function(t){return"en"===t?s?m.a["language-switcher__languages__pointer"]:m.a["language-switcher__languages__unavailable"]:g?m.a["language-switcher__languages__pointer"]:m.a["language-switcher__languages__unavailable"]};return r.a.createElement("div",{className:m.a["language-switcher"]},r.a.createElement("div",{ref:h,className:m.a["language-switcher__back"],style:{left:"en"===a?0:"50%"}}),r.a.createElement("div",{className:m.a["language-switcher__languages"]},r.a.createElement("span",{onClick:function(){return v("en",a)},className:("en"===a?m.a["language-switcher__languages-active"]:"")+" "+b("en")},"EN"),r.a.createElement("span",{onClick:function(){return v("ja",a)},className:("ja"===a?m.a["language-switcher__languages-active"]:"")+" "+b("ja")},"日")))},C=(a(31),a(50),a(243)),N=a(244),M=a(211),O=a.n(M),V=function(t){var e=t.contacts,a=t.language;return r.a.createElement("div",{className:O.a.contacts},r.a.createElement("ul",{className:O.a.contacts__list},Object.keys(e).map(function(t){return e[t]?r.a.createElement("li",{className:O.a["contacts__list-item"],key:t},r.a.createElement("span",{className:O.a["contacts__list-item-tooltip"]},t),r.a.createElement("a",{className:O.a["contacts__list-item-link"],href:Object(C.a)(t,e[t][a]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(N.a,{icon:Object(C.b)(t)}))):null})))},T=a(212),S=a.n(T),L=function(t){var e=t.copyright;return r.a.createElement("div",{className:S.a.copyright},e)},x=a(213),R=a.n(x),D=function(t){var e=t.menu,a=t.language;return r.a.createElement("nav",{className:R.a.menu},r.a.createElement("ul",{className:R.a.menu__list},e.map(function(t){return r.a.createElement("li",{className:R.a["menu__list-item"],key:t.path},r.a.createElement(l.Link,{to:t.path+("en"===a?"":"/ja"),className:R.a["menu__list-item-link"],activeClassName:R.a["menu__list-item-link--active"]},r.a.createElement(N.a,{icon:Object(C.b)(t.label.en.toLowerCase())}),r.a.createElement("span",null,t.label[a])))})))},Y=a(214),I=a.n(Y),P=a(240),A=a(245),B=function(t){var e=t.isIndex,a=t.link,n=Object(P.d)(),l=n.author,i=n.copyright,s=n.menu;return r.a.createElement(o.Location,null,function(t){var n=t.location,o=Object(A.a)(n.pathname);return r.a.createElement("div",{className:I.a.sidebar},r.a.createElement("div",{className:I.a.sidebar__inner},r.a.createElement(c,{author:l,isIndex:e,language:o}),r.a.createElement(w,{link:a,language:o,path:n.pathname}),r.a.createElement(D,{menu:s,language:o}),r.a.createElement(V,{contacts:l.contacts,language:o}),r.a.createElement(L,{copyright:i})))})};a.d(e,"a",function(){return B})},242:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(287),l=a.n(o),i=a(94),s=a(207),c=a.n(s),u=function(t){var e=t.children,a=t.title,o=t.description,s=t.language;return Object(n.useEffect)(function(){if(s||sessionStorage.getItem("visited")){if(!sessionStorage.getItem("visited")){var t=globalThis.window.navigator.language||globalThis.window.navigator.userLanguage;sessionStorage.setItem("visited","true"),"ja"===t&&Object(i.navigate)("/ja")}}else sessionStorage.setItem("visited","true")},[]),r.a.createElement("div",{className:c.a.layout},r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:o}),r.a.createElement("meta",{property:"og:site_name",content:a}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:title",content:a})),e)};a.d(e,"a",function(){return u})},243:function(t,e,a){"use strict";var n=a(252),r=function(t){var e;switch(t){case"twitter":e=n.a.TWITTER;break;case"github":e=n.a.GITHUB;break;case"vkontakte":e=n.a.VKONTAKTE;break;case"telegram":e=n.a.TELEGRAM;break;case"contact":e=n.a.EMAIL;break;case"rss":e=n.a.RSS;break;case"linkedin":e=n.a.LINKEDIN;break;case"portfolio":e=n.a.PORTFOLIO;break;case"search":e=n.a.SEARCH;break;case"home":e=n.a.HOME;break;case"category":e=n.a.FOLDER;break;case"tag":e=n.a.TAG;break;case"leftarrow":e=n.a.LEFTARROW;break;case"rightarrow":e=n.a.RIGHTARROW;break;default:e={}}return e},o=function(t,e){var a;switch(t){case"twitter":a="https://www.twitter.com/"+e;break;case"github":a="https://github.com/"+e;break;case"vkontakte":a="https://vk.com/"+e;break;case"telegram":a="https://t.me/"+e;break;case"email":a="mailto:"+e;break;default:a=e}return a};a.d(e,"b",function(){return r}),a.d(e,"a",function(){return o})},244:function(t,e,a){"use strict";var n=a(250);a.d(e,"a",function(){return n.a})},245:function(t,e,a){"use strict";a.d(e,"a",function(){return n});a(138),a(139);var n=function(t){return t.includes("/ja")?"ja":"en"}},250:function(t,e,a){"use strict";a(38);var n=a(0),r=a.n(n),o=a(210),l=a.n(o);e.a=function(t){var e=t.name,a=t.icon;return r.a.createElement("svg",{className:l.a.icon,viewBox:a.viewBox},r.a.createElement("title",null,e),r.a.createElement("path",{d:a.path}))}},252:function(t,e,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LINKEDIN:{path:"M95,59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.771-13.121   c-5.331,0-8.503,3.587-9.898,7.057c-0.509,1.24-0.64,2.967-0.64,4.703V93H36.104c0,0,0.26-52.58,0-58.028h19.294v8.225   c-0.039,0.062-0.09,0.128-0.127,0.188h0.127v-0.188c2.563-3.948,7.142-9.588,17.389-9.588C85.482,33.609,95,41.903,95,59.727    M15.919,7C9.318,7,5,11.33,5,17.024c0,5.57,4.193,10.031,10.663,10.031h0.129c6.729,0,10.914-4.46,10.914-10.031   C26.579,11.33,22.521,7,15.919,7 M6.146,93h19.289V34.972H6.146V93z",viewBox:"0 0 100 100"},PORTFOLIO:{path:"M135.657,88.47H6.078V5.204h129.58L135.657,88.47L135.657,88.47z M141.054,91.072L141.054,91.072V2.604   c0-1.438-1.209-2.604-2.697-2.604H3.378c-1.491,0.001-2.7,1.166-2.7,2.604v88.469c0,1.438,1.209,2.604,2.7,2.604h51.291v15.609   H33.073c-1.491,0-2.7,1.165-2.7,2.604c0,1.437,1.209,2.602,2.7,2.602h0.001h75.585c1.49,0,2.699-1.165,2.699-2.602   c0-1.438-1.209-2.604-2.699-2.604H87.064V93.674h51.291C139.845,93.674,141.054,92.511,141.054,91.072",viewBox:"0 0 141.732 141.732"},SEARCH:{path:"M15.7,14.3l-3.105-3.105C13.473,10.024,14,8.576,14,7c0-3.866-3.134-7-7-7S0,3.134,0,7s3.134,7,7,7  c1.576,0,3.024-0.527,4.194-1.405L14.3,15.7c0.184,0.184,0.38,0.3,0.7,0.3c0.553,0,1-0.447,1-1C16,14.781,15.946,14.546,15.7,14.3z   M2,7c0-2.762,2.238-5,5-5s5,2.238,5,5s-2.238,5-5,5S2,9.762,2,7z",viewBox:"0 0 16 16"},HOME:{path:"M0,69.023h0.026v-0.025L0,69.023z M136.448,66.373c0-0.77-0.33-1.461-0.854-1.942L72.026,0.836   C71.555,0.336,70.894,0.02,70.157,0v0.095c-0.737,0.018-1.398,0.335-1.869,0.835L4.72,64.521c-0.523,0.479-0.854,1.174-0.854,1.94   c0,1.467,1.188,2.65,2.65,2.65h15.067v12.529v57.629h35.078V98.799c0-1.487,1.203-2.696,2.688-2.696h21.571   c1.49,0,2.697,1.209,2.697,2.696v40.478h35.105v-57.63V69.043v-0.02h15.067C135.262,69.023,136.448,67.838,136.448,66.373    M140.315,69.115l-0.027-0.025v0.025H140.315z",viewBox:"-0.709 -1.23 141.732 141.732"},FOLDER:{path:"M20,6h-9L9,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z",viewBox:"0 0 24 24"},TAG:{path:"M47,5.5  C47,4.119,45.881,3,44.5,3c-0.156,0-14.876,0.002-14.876,0.002c-1.33,0-2.603-0.07-3.341,0.668L3.554,26.398  c-0.739,0.738-0.739,1.936,0,2.674l17.374,17.374c0.738,0.738,1.936,0.738,2.674,0L46.33,23.717c0.738-0.737,0.668-1.98,0.668-3.34  C46.998,20.377,47,5.656,47,5.5z",viewBox:"0 0 50 50"},LEFTARROW:{path:"M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z",viewBox:"0 0 32 32"},RIGHTARROW:{path:"M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z",viewBox:"0 0 32 32"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},257:function(t){t.exports={data:{allSitePage:{nodes:[{path:"/tag/about-me"},{path:"/tag/contact-me"},{path:"/tag/design"},{path:"/tag/gatsby"},{path:"/tag/handwriting"},{path:"/tag/helvetica"},{path:"/tag/history-of-typography"},{path:"/tag/learning-to-write"},{path:"/tag/linotype"},{path:"/tag/monotype"},{path:"/tag/open-source"},{path:"/tag/typography"},{path:"/tag/typography/page/1"},{path:"/tag/web-development"},{path:"/tag/about-me/ja"},{path:"/tag/contact-me/ja"},{path:"/tag/design/ja"},{path:"/tag/design/page/1/ja"},{path:"/tag/gatsby/ja"},{path:"/tag/helvetica/ja"},{path:"/tag/linotype/ja"},{path:"/tag/markdown/ja"},{path:"/tag/monotype/ja"},{path:"/tag/open-source/ja"},{path:"/tag/typography/ja"},{path:"/tag/typography/page/1/ja"},{path:"/tag/web-development/ja"},{path:"/tag/web開発/ja"},{path:"/tag/オープンソース/ja"},{path:"/tag/タイポグラフィ/ja"},{path:"/tag/ハンドライティング/ja"},{path:"/tag/マークダウン/ja"},{path:"/tag/書き方/ja"}]}}}},258:function(t){t.exports={data:{allSitePage:{nodes:[{path:"/category/design-culture"},{path:"/category/design-inspiration"},{path:"/category/personal"},{path:"/category/typography"},{path:"/category/typography/page/1"},{path:"/category/design-inspiration/ja"},{path:"/category/personal/ja"},{path:"/category/typography/ja"},{path:"/category/タイポグラフィ/ja"},{path:"/category/ツール/ja"},{path:"/category/テスト/ja"},{path:"/category/デザイン/ja"},{path:"/category/プライベート/ja"},{path:"/category/文化/ja"}]}}}},259:function(t){t.exports={data:{site:{siteMetadata:{author:{name:{en:"Sayaka Ono",ja:"小野 沙耶花"},bio:{en:"React developer based in Vancouver.",ja:"バンクーバー在住デベロッパー。"},photo:"/favicon.ico",contacts:{portfolio:{en:"https://sayaka-ono.com",ja:"https://sayaka-ono.com"},github:{en:"SayakaOno",ja:"SayakaOno"},linkedin:{en:"https://www.linkedin.com/in/sayakaono/",ja:"https://www.linkedin.com/in/sayakaono/"},twitter:{en:"saya_3981",ja:"38_ca"},rss:{en:"",ja:""}}},menu:[{label:{en:"Home",ja:"ホーム"},path:"/"},{label:{en:"Search",ja:"検索"},path:"/search"},{label:{en:"Contact",ja:"コンタクト"},path:"/pages/contacts"}],url:"https://sayakaono.github.io/gatsby-blog/",title:"Blog by Sayaka Ono",titleJa:"ブログ by 小野沙耶花",subtitle:"Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",subtitleJa:"日本語のサブタイトル",copyright:"© 2019 Sayaka Ono",disqusShortname:""}}}}},260:function(t){t.exports={data:{allMarkdownRemark:{group:[{fieldValue:"Design Culture",totalCount:3},{fieldValue:"Design Inspiration",totalCount:2},{fieldValue:"Personal",totalCount:2},{fieldValue:"Typography",totalCount:6}]}}}},261:function(t){t.exports={data:{allMarkdownRemark:{group:[{fieldValue:"Design Inspiration",totalCount:1},{fieldValue:"Personal",totalCount:5},{fieldValue:"Typography",totalCount:4},{fieldValue:"タイポグラフィ",totalCount:1},{fieldValue:"ツール",totalCount:2},{fieldValue:"テスト",totalCount:4},{fieldValue:"デザイン",totalCount:2},{fieldValue:"プライベート",totalCount:1},{fieldValue:"文化",totalCount:1}]}}}},262:function(t){t.exports={data:{allMarkdownRemark:{group:[{fieldValue:"About me",totalCount:1},{fieldValue:"Contact me",totalCount:1},{fieldValue:"Design",totalCount:3},{fieldValue:"Gatsby",totalCount:3},{fieldValue:"Handwriting",totalCount:1},{fieldValue:"Helvetica",totalCount:1},{fieldValue:"History of typography",totalCount:1},{fieldValue:"Learning to write",totalCount:1},{fieldValue:"Linotype",totalCount:1},{fieldValue:"Monotype",totalCount:1},{fieldValue:"Open source",totalCount:3},{fieldValue:"Typography",totalCount:6},{fieldValue:"Web Development",totalCount:3}]}}}},263:function(t){t.exports={data:{allMarkdownRemark:{group:[{fieldValue:"About me",totalCount:3},{fieldValue:"Contact me",totalCount:3},{fieldValue:"Design",totalCount:6},{fieldValue:"Gatsby",totalCount:3},{fieldValue:"Helvetica",totalCount:1},{fieldValue:"Linotype",totalCount:1},{fieldValue:"Markdown",totalCount:1},{fieldValue:"Monotype",totalCount:1},{fieldValue:"Open source",totalCount:2},{fieldValue:"Typography",totalCount:8},{fieldValue:"Web Development",totalCount:5},{fieldValue:"Web開発",totalCount:1},{fieldValue:"オープンソース",totalCount:1},{fieldValue:"タイポグラフィ",totalCount:2},{fieldValue:"ハンドライティング",totalCount:1},{fieldValue:"マークダウン",totalCount:1},{fieldValue:"書き方",totalCount:1}]}}}},264:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{slug:"/posts/test2",title:"Perfecting the Art of Perfection"}}},{node:{frontmatter:{slug:"/posts/test3",title:"The Origins of Social Stationery Lettering"}}},{node:{frontmatter:{slug:"/posts/test13",title:"test post"}}},{node:{frontmatter:{slug:"/posts/test5",title:"4th post"}}},{node:{frontmatter:{slug:"/posts/test4",title:"A Brief History of Typography"}}},{node:{frontmatter:{slug:"/posts/test7",title:"Humane Typography in the Digital Age"}}},{node:{frontmatter:{slug:"/posts/test11",title:"Contact me"}}},{node:{frontmatter:{slug:"/posts/test10about-me",title:"About me"}}},{node:{frontmatter:{slug:"/posts/test9",title:"The Digital Age"}}},{node:{frontmatter:{slug:"/posts/test3/ja",title:"テスト３"}}},{node:{frontmatter:{slug:"/posts/test1",title:"the first post"}}},{node:{frontmatter:{slug:"/posts/test1/ja",title:"テスト１"}}},{node:{frontmatter:{slug:"/posts/test2/ja",title:"テスト２"}}},{node:{frontmatter:{slug:"/posts/test6/ja",title:"テスト6"}}},{node:{frontmatter:{slug:"/posts/test4/ja",title:"テスト４"}}},{node:{frontmatter:{slug:"/posts/test7/ja",title:"テスト7"}}},{node:{frontmatter:{slug:"/posts/test5/ja",title:"テスト５"}}},{node:{frontmatter:{slug:"/posts/test10markdown/ja",title:"テスト10"}}},{node:{frontmatter:{slug:"/posts/test8/ja",title:"テスト8"}}},{node:{frontmatter:{slug:"/posts/test12contact-me/ja",title:"コンタクト"}}},{node:{frontmatter:{slug:"/posts/test13/ja",title:"テスト13"}}},{node:{frontmatter:{slug:"/posts/test11about-me",title:"テスト11"}}},{node:{frontmatter:{slug:"/posts/test16about-me/ja",title:"テスト16"}}},{node:{frontmatter:{slug:"/posts/test17contact-me/ja",title:"テスト17"}}},{node:{frontmatter:{slug:"/posts/test18/ja",title:"日本語の初ポスト"}}},{node:{frontmatter:{slug:"/posts/test15/ja",title:"マークダウン"}}},{node:{frontmatter:{slug:"/posts/test6",title:"Johannes Gutenberg: The Birth of Movable Type"}}},{node:{frontmatter:{slug:"/posts/test8",title:"8th post"}}},{node:{frontmatter:{slug:"/posts/test12",title:"7th post"}}},{node:{frontmatter:{slug:"/posts/test9/ja",title:"テスト9"}}},{node:{frontmatter:{slug:"/posts/test14/ja",title:"日本語の初ポスト"}}},{node:{frontmatter:{slug:"/posts/test21/ja",title:"日本語の初ポスト"}}},{node:{frontmatter:{slug:"/posts/test20/ja",title:"テスト20"}}},{node:{frontmatter:{slug:"/posts/test19/ja",title:"テスト19"}}}]}}}},303:function(t,e,a){"use strict";t.exports=a(304)},304:function(t,e,a){"use strict";a(10),a(52),a(142),a(30),a(31),a(16),a(50),a(143),a(39),a(141),a(96),a(17),a(97),Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=i(a(0)),l=i(a(54));function i(t){return t&&t.__esModule?t:{default:t}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function u(t,e){var a=e.onNewComment,n=e.language,r=function(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}(e,["onNewComment","language"]);for(var o in r)t.page[o]=r[o];t.language=n,a&&(t.callbacks={onNewComment:[a]})}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o["default"].Component),r(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce(function(e,a){return s.some(function(t){return t===a})?e:n({},e,function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({},a,t.props[a]))},{});return o.default.createElement("div",e,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),c=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};s.forEach(function(a){"shortname"!==a&&t.props[a]&&(e[a]=t.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,e)},this.addDisqusScript())}}]),e}();m.displayName="DisqusThread",m.propTypes={id:l.default.string,shortname:l.default.string.isRequired,identifier:l.default.string,title:l.default.string,url:l.default.string,category_id:l.default.string,onNewComment:l.default.func,language:l.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=m}}]);
//# sourceMappingURL=component---src-templates-post-template-js-089f4be7f89531e111e7.js.map