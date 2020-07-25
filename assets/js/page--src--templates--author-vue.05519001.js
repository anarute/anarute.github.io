(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,s,e){"use strict";var a={name:"Footer"},r=e(92),n=Object(r.a)(a,function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),s("div",{staticClass:"w-full sm:w-1/2"},[s("nav",[s("ul",{staticClass:"flex sm:justify-end -mx-2"},[s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/"}},[this._v("Home")])],1),s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:"/about/"}},[this._v("About")])],1),this._m(1),this._m(2)])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0"},[s("p",[this._v("Based on "),s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://github.com/cossssmin/gridsome-starter-bleda"}},[this._v("Bleda")]),this._v(" by "),s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"https://twitter.com/cossssmin"}},[this._v("@cossssmin")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);s.a=n.exports},349:function(t,s,e){"use strict";var a=e(1),r=e(95)(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(145)("includes")},350:function(t,s,e){"use strict";var a=e(1),r=e(96);a(a.P+a.F*e(97)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},351:function(t,s,e){"use strict";e(93),e(144),e(94);var a=e(220),r=e.n(a),n={props:["post"],computed:{formattedPublishDate:function(){return r()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return r()(t).format("DD MMMM, YYYY")},excerpt:function(t,s,e){if(t.excerpt)return t.excerpt;s=s||280,e=e||" ...";var a=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return a.length>s?"".concat(a.slice(0,s)).concat(e):a},titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}}},o=e(92),i=Object(o.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("div",{staticClass:"mx-auto max-w-3xl px-6"},[e("div",{staticClass:"py-8 sm:py-20 border-b border-gray-300"},[e("header",{staticClass:"text-center mb-8"},[e("time",{staticClass:"text-gray-700 text-xs mb-2 uppercase",attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),e("h2",{staticClass:"text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2"},[e("g-link",{staticClass:"text-black font-bold",attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1),e("p",{staticClass:"text-gray-700 leading-normal text-sm sm:text-base"},[t.post.author?e("span",[t._v("by "),t.post.author?e("g-link",{staticClass:"text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.author.path+"/"}},[t._v(t._s(t.titleCase(t.post.author.title)))]):t._e()],1):t._e(),t.post.tags&&t.post.tags.length>0?e("span",[t._v(" in "),e("g-link",{staticClass:"text-gray-700 border-b border-transparent hover:border-gray-400 transition-border-color",attrs:{to:t.post.tags[0].path+"/"}},[t._v(t._s(t.titleCase(t.post.tags[0].title)))])],1):t._e()])]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-normal text-gray-700 text-lg px-2 sm:px-4 md:px-10",domProps:{innerHTML:t._s(t.excerpt(t.post,280," ..."))}})])])])},[],!1,null,null,null);s.a=i.exports},352:function(t,s,e){"use strict";e(349),e(350);var a={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,s){return s>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=e(92),n=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"},[e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[e("li",{staticClass:"lg:w-1/5"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),e("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),e("li",{staticClass:"lg:w-1/5 text-right"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-color",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])},[],!1,null,null,null);s.a=n.exports},353:function(t,s,e){var a={"./af":222,"./af.js":222,"./ar":223,"./ar-dz":224,"./ar-dz.js":224,"./ar-kw":225,"./ar-kw.js":225,"./ar-ly":226,"./ar-ly.js":226,"./ar-ma":227,"./ar-ma.js":227,"./ar-sa":228,"./ar-sa.js":228,"./ar-tn":229,"./ar-tn.js":229,"./ar.js":223,"./az":230,"./az.js":230,"./be":231,"./be.js":231,"./bg":232,"./bg.js":232,"./bm":233,"./bm.js":233,"./bn":234,"./bn.js":234,"./bo":235,"./bo.js":235,"./br":236,"./br.js":236,"./bs":237,"./bs.js":237,"./ca":238,"./ca.js":238,"./cs":239,"./cs.js":239,"./cv":240,"./cv.js":240,"./cy":241,"./cy.js":241,"./da":242,"./da.js":242,"./de":243,"./de-at":244,"./de-at.js":244,"./de-ch":245,"./de-ch.js":245,"./de.js":243,"./dv":246,"./dv.js":246,"./el":247,"./el.js":247,"./en-SG":248,"./en-SG.js":248,"./en-au":249,"./en-au.js":249,"./en-ca":250,"./en-ca.js":250,"./en-gb":251,"./en-gb.js":251,"./en-ie":252,"./en-ie.js":252,"./en-il":253,"./en-il.js":253,"./en-nz":254,"./en-nz.js":254,"./eo":255,"./eo.js":255,"./es":256,"./es-do":257,"./es-do.js":257,"./es-us":258,"./es-us.js":258,"./es.js":256,"./et":259,"./et.js":259,"./eu":260,"./eu.js":260,"./fa":261,"./fa.js":261,"./fi":262,"./fi.js":262,"./fo":263,"./fo.js":263,"./fr":264,"./fr-ca":265,"./fr-ca.js":265,"./fr-ch":266,"./fr-ch.js":266,"./fr.js":264,"./fy":267,"./fy.js":267,"./ga":268,"./ga.js":268,"./gd":269,"./gd.js":269,"./gl":270,"./gl.js":270,"./gom-latn":271,"./gom-latn.js":271,"./gu":272,"./gu.js":272,"./he":273,"./he.js":273,"./hi":274,"./hi.js":274,"./hr":275,"./hr.js":275,"./hu":276,"./hu.js":276,"./hy-am":277,"./hy-am.js":277,"./id":278,"./id.js":278,"./is":279,"./is.js":279,"./it":280,"./it-ch":281,"./it-ch.js":281,"./it.js":280,"./ja":282,"./ja.js":282,"./jv":283,"./jv.js":283,"./ka":284,"./ka.js":284,"./kk":285,"./kk.js":285,"./km":286,"./km.js":286,"./kn":287,"./kn.js":287,"./ko":288,"./ko.js":288,"./ku":289,"./ku.js":289,"./ky":290,"./ky.js":290,"./lb":291,"./lb.js":291,"./lo":292,"./lo.js":292,"./lt":293,"./lt.js":293,"./lv":294,"./lv.js":294,"./me":295,"./me.js":295,"./mi":296,"./mi.js":296,"./mk":297,"./mk.js":297,"./ml":298,"./ml.js":298,"./mn":299,"./mn.js":299,"./mr":300,"./mr.js":300,"./ms":301,"./ms-my":302,"./ms-my.js":302,"./ms.js":301,"./mt":303,"./mt.js":303,"./my":304,"./my.js":304,"./nb":305,"./nb.js":305,"./ne":306,"./ne.js":306,"./nl":307,"./nl-be":308,"./nl-be.js":308,"./nl.js":307,"./nn":309,"./nn.js":309,"./pa-in":310,"./pa-in.js":310,"./pl":311,"./pl.js":311,"./pt":312,"./pt-br":313,"./pt-br.js":313,"./pt.js":312,"./ro":314,"./ro.js":314,"./ru":315,"./ru.js":315,"./sd":316,"./sd.js":316,"./se":317,"./se.js":317,"./si":318,"./si.js":318,"./sk":319,"./sk.js":319,"./sl":320,"./sl.js":320,"./sq":321,"./sq.js":321,"./sr":322,"./sr-cyrl":323,"./sr-cyrl.js":323,"./sr.js":322,"./ss":324,"./ss.js":324,"./sv":325,"./sv.js":325,"./sw":326,"./sw.js":326,"./ta":327,"./ta.js":327,"./te":328,"./te.js":328,"./tet":329,"./tet.js":329,"./tg":330,"./tg.js":330,"./th":331,"./th.js":331,"./tl-ph":332,"./tl-ph.js":332,"./tlh":333,"./tlh.js":333,"./tr":334,"./tr.js":334,"./tzl":335,"./tzl.js":335,"./tzm":336,"./tzm-latn":337,"./tzm-latn.js":337,"./tzm.js":336,"./ug-cn":338,"./ug-cn.js":338,"./uk":339,"./uk.js":339,"./ur":340,"./ur.js":340,"./uz":341,"./uz-latn":342,"./uz-latn.js":342,"./uz.js":341,"./vi":343,"./vi.js":343,"./x-pseudo":344,"./x-pseudo.js":344,"./yo":345,"./yo.js":345,"./zh-cn":346,"./zh-cn.js":346,"./zh-hk":347,"./zh-hk.js":347,"./zh-tw":348,"./zh-tw.js":348};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=353},355:function(t,s){},360:function(t,s,e){"use strict";var a=e(355),r=e.n(a);s.default=r.a},370:function(t){t.exports=JSON.parse('{"/author/anarute":[1,"614e8042"],"/author/anarute/2":[1,"5383f45e"]}')},378:function(t,s,e){"use strict";e.r(s);e(94),e(93),e(144),e(220);var a=e(10),r=e(351),n=e(221),o=e(352),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:n.a},metaInfo:function(){return{title:"Posts written by ".concat(this.titleCase(this.$page.author.title)),meta:[{key:"description",name:"description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:type",content:"website"},{property:"og:title",content:"Posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{property:"og:url",content:"".concat(this.config.siteUrl,"/").concat(this.$page.author.path,"/")},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Posts written by ".concat(this.titleCase(this.$page.author.title))},{name:"twitter:description",content:"Browse posts written by ".concat(this.titleCase(this.$page.author.title))},{name:"twitter:site",content:"@ana_rute"},{name:"twitter:creator",content:"@ana_rute"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}},computed:{config:function(){return a.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/card.png")}}},l=e(92),c=e(360),u=Object(l.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("main",[e("header",[e("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"},[e("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2"},[t._v(t._s(t.titleCase(t.$page.author.title)))]),e("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"authorIcon"}},[e("title",{attrs:{id:"authorIcon"}},[t._v("Author posts")]),e("path",{attrs:{d:"M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"}})])]),e("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[e("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity",attrs:{to:"/"}},[t._v("← Home")])],1)]),e("section",t._l(t.$page.author.belongsTo.edges,function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})}),1),t.$page.author.belongsTo.pageInfo.totalPages>1?e("pagination",{attrs:{base:""+t.$page.author.path,info:t.$page.author.belongsTo.pageInfo}}):t._e(),e("site-footer",{staticClass:"py-8 sm:py-16"})],1)])},[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(u);s.default=u.exports}}]);