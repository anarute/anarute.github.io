(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2qYH":function(t,e,s){"use strict";s.r(e);s("ma9I"),s("oVuX"),s("2B1R"),s("rB9j"),s("EnZy"),s("UxlC");var n=s("UmD/"),a=s("94NO"),o=s("F5n6"),r={components:{PostItem:a.a,Pagination:o.a},metaInfo:function(){return{title:'Posts tagged "'.concat(this.$page.tag.title,'"'),meta:[{key:"description",name:"description",content:'Browse posts tagged "'.concat(this.$page.tag.title,'"')},{property:"og:type",content:"website"},{property:"og:title",content:'Posts tagged "'.concat(this.$page.tag.title,'"')},{property:"og:description",content:'Browse posts tagged "'.concat(this.$page.tag.title,'"')},{property:"og:url",content:"".concat(this.config.siteUrl,"/").concat(this.$page.tag.path,"/")},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:'Posts tagged "'.concat(this.$page.tag.title,'"')},{name:"twitter:description",content:'Browse posts tagged "'.concat(this.$page.tag.title,'"')},{name:"twitter:site",content:"@ana_rute"},{name:"twitter:creator",content:"@ana_rute"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}},computed:{config:function(){return n.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/card.png")}}},i=s("KHd+"),c=null,j=Object(i.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("main",[s("header",[s("div",[s("h1",[t._v("> "+t._s(t.$page.tag.title))]),s("p",[t._v(t._s(t.$page.tag.belongsTo.totalCount)+" posts in total")])])]),s("section",t._l(t.$page.tag.belongsTo.edges,function(t){return s("post-item",{key:t.node.id,attrs:{post:t.node}})}),1),t.$page.tag.belongsTo.pageInfo.totalPages>1?s("pagination",{attrs:{base:""+t.$page.tag.path,info:t.$page.tag.belongsTo.pageInfo}}):t._e()],1)])},[],!1,null,null,null);"function"==typeof c&&c(j);e.default=j.exports},"94NO":function(t,e,s){"use strict";s("rB9j"),s("UxlC"),s("ma9I"),s("+2oP"),s("oVuX"),s("2B1R"),s("EnZy");var n=s("wd/R"),a=s.n(n),o={props:["post"],computed:{formattedPublishDate:function(){return a()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return a()(t).format("YYYY-MM-DD")},excerpt:function(t,e,s){if(t.excerpt)return t.excerpt;e=e||280,s=s||" ...";var n=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return n.length>e?"".concat(n.slice(0,e)).concat(s):n},titleCase:function(t){return t.replace("-"," ").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}}},r=s("KHd+"),i=Object(r.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("div",{},[s("div",{},[s("header",[s("p",{staticClass:"post-title"},[s("time",{attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),t._v("\n          -\n          "),s("g-link",{attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1)])])])])},[],!1,null,null,null);e.a=i.exports},F5n6:function(t,e,s){"use strict";s("yq1k"),s("ma9I");var n={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,e){return e>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},a=s("KHd+"),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{},[s("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[s("ul",{},[s("li",{},[s("g-link",{attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),s("li",{},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),s("li",{},[s("g-link",{attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])},[],!1,null,null,null);e.a=o.exports},RnhZ:function(t,e,s){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="RnhZ"},yq1k:function(t,e,s){"use strict";var n=s("I+eb"),a=s("TWQb").includes,o=s("RNIs");n({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);