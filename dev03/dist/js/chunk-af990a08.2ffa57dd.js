(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af990a08"],{1194:function(t,a,e){"use strict";var s=e("440b"),n=e.n(s);n.a},"159b":function(t,a,e){var s=e("da84"),n=e("fdbc"),r=e("17c2"),i=e("9112");for(var c in n){var d=s[c],o=d&&d.prototype;if(o&&o.forEach!==r)try{i(o,"forEach",r)}catch(l){o.forEach=r}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,n=e("a640"),r=e("ae40"),i=n("forEach"),c=r("forEach");t.exports=i&&c?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,a,e){var s=e("d039"),n=e("b622"),r=e("2d00"),i=n("species");t.exports=function(t){return r>=51||!s((function(){var a=[],e=a.constructor={};return e[i]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"21bb":function(t,a,e){"use strict";var s=e("2dad"),n=e.n(s);n.a},"2dad":function(t,a,e){},4160:function(t,a,e){"use strict";var s=e("23e7"),n=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"440b":function(t,a,e){},5056:function(t){t.exports=JSON.parse('{"star-empty":"M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z","star-half":"M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-0.029 0.015 0.029-17.837 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z","star-full":"M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"}')},"60a6":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{staticClass:"svg-icon",class:t.styleClasses,attrs:{viewBox:"0 0 32 32"}},[e("title",[t._v(t._s(t.title||t.name))]),t.desc?e("desc",[t._v(t._s(t.desc))]):t._e(),e("path",{attrs:{d:t.path}})])},n=[],r=(e("d81d"),e("b0c0"),e("5056")),i={name:"AppIcon",props:{name:String,title:String,desc:String,size:String,color:String},computed:{path:function(){return r[this.name]},styleClasses:function(){return[this.size,this.color].map((function(t){return t&&"is-".concat(t)}))}}},c=i,d=(e("1194"),e("2877")),o=Object(d["a"])(c,s,n,!1,null,null,null);a["default"]=o.exports},"65f0":function(t,a,e){var s=e("861d"),n=e("e8b5"),r=e("b622"),i=r("species");t.exports=function(t,a){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)?s(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},a640:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&s((function(){e.call(null,a||function(){throw 1},1)}))}},ae40:function(t,a,e){var s=e("83ab"),n=e("d039"),r=e("5135"),i=Object.defineProperty,c={},d=function(t){throw t};t.exports=function(t,a){if(r(c,t))return c[t];a||(a={});var e=[][t],o=!!r(a,"ACCESSORS")&&a.ACCESSORS,l=r(a,0)?a[0]:d,u=r(a,1)?a[1]:void 0;return c[t]=!!e&&!n((function(){if(o&&!s)return!0;var t={length:-1};o?i(t,1,{enumerable:!0,get:d}):t[1]=1,e.call(t,l,u)}))}},b0c0:function(t,a,e){var s=e("83ab"),n=e("9bf2").f,r=Function.prototype,i=r.toString,c=/^\s*function ([^ (]*)/,d="name";s&&!(d in r)&&n(r,d,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,a,e){var s=e("0366"),n=e("44ad"),r=e("7b0b"),i=e("50c4"),c=e("65f0"),d=[].push,o=function(t){var a=1==t,e=2==t,o=3==t,l=4==t,u=6==t,p=5==t||u;return function(_,f,v,h){for(var m,C,S=r(_),y=n(S),g=s(f,v,3),b=i(y.length),L=0,T=h||c,k=a?T(_,b):e?T(_,0):void 0;b>L;L++)if((p||L in y)&&(m=y[L],C=g(m,L,S),t))if(a)k[L]=C;else if(C)switch(t){case 3:return!0;case 5:return m;case 6:return L;case 2:d.call(k,m)}else if(l)return!1;return u?-1:o||l?l:k}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6)}},bb51:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home"},[t._m(0),e("section",{staticClass:"p-contents"},[e("div",{staticClass:"p-contents__wrap js-fadeIn"},[e("h2",[t._v("Profile")]),e("div",{staticClass:"p-contents__card"},[e("h3",[t._v("Basic")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.basicProfile,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap"},[e("dt",{staticClass:"p-contents__dataTitle p-contents__dataTitle--letterSpaceWide"},[t._v(" "+t._s(a.dt)+" ")]),e("dd",{staticClass:"p-contents__data"},[t._v(t._s(a.dd))])])})),0),e("h3",[t._v("Development")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.development,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap"},[e("dt",{staticClass:"p-contents__dataTitle p-contents__dataTitle--letterSpaceWide"},[t._v(" "+t._s(a.dt)+" ")]),e("dd",{staticClass:"p-contents__data"},[t._v(t._s(a.dd))])])})),0)]),e("div",{staticClass:"p-contents__card"},[e("h3",[t._v("Career")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.carrerSummary,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap"},[e("dt",{staticClass:"p-contents__dataTitle"},[t._v(t._s(a.dt))]),e("dd",{staticClass:"p-contents__data"},[t._v(t._s(a.dd))])])})),0),e("h3",[t._v("Details")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.carrerDetails,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap"},[e("dt",{staticClass:"p-contents__dataTitle"},[t._v(t._s(a.dt))]),t._l(a.dd,(function(a){return e("dd",{key:a,staticClass:"p-contents__data p-contents__data--widthWide"},[t._v(" "+t._s(a)+" ")])}))],2)})),0)])])]),e("section",{staticClass:"p-contents p-contents--bgWhite"},[e("div",{staticClass:"p-contents__wrap js-fadeIn"},[e("h2",[t._v("Skills")]),e("div",{staticClass:"p-contents__card p-contents__card--bgGray"},[e("h3",[t._v("Rate")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.skillRate,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap p-contents__dataWrap--mobileFlex"},[e("dt",{staticClass:"p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--alignCenter p-contents__dataTitle--letterSpaceWide"},[t._v(" "+t._s(a.dt)+" ")]),e("dd",{staticClass:"p-contents__data p-contents__data--widthHalf p-contents__dataTitle--alignCenter"},t._l(a.dd,(function(s,n){return e("app-icon",{key:n,attrs:{name:s,size:t.size,color:t.color,desc:a.svgDescription}})})),1)])})),0)]),e("div",{staticClass:"p-contents__card p-contents__card--bgGray"},[e("h3",[t._v("What I can do")]),e("dl",{staticClass:"p-contents__dataList"},t._l(t.dataBlock.skillRateContents,(function(a){return e("div",{key:a.dt,staticClass:"p-contents__dataWrap"},[e("dt",{staticClass:"p-contents__dataTitle p-contents__dataTitle--widthHalf p-contents__dataTitle--letterSpaceWide"},[t._v(" "+t._s(a.dt)+" ")]),e("dd",{staticClass:"p-contents__data p-contents__data--widthHalf"},[t._v(" "+t._s(a.dd)+" ")])])})),0)])])]),t._m(1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"p-head js-head"},[e("div",{staticClass:"p-head__wrap"},[e("div",{staticClass:"p-head__background"}),e("h1",[t._v("My Portforio")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"p-contents p-contents--works"},[e("div",{staticClass:"p-contents__wrap"},[e("h2",[t._v("Works")])])])}],r=(e("4160"),e("159b"),e("60a6")),i=e("133a"),c={name:"Home",components:{AppIcon:r["default"]},mounted:function(){this.textFadein(),this.headerBgChange()},data:function(){return{size:"medium",color:"primary",isInKv:"",dataBlock:{basicProfile:[{dt:"Name",dd:"T.K"},{dt:"Sex",dd:"男"},{dt:"Age",dd:"28（1991. 11. 30 〜）"},{dt:"Education",dd:"立命館大学国際関係学部国際関係学科卒業"},{dt:"Certifications",dd:"DELE B1（スペイン語の資格）"},{dt:"Tel",dd:"080 - 1480 - 4979"},{dt:"Mail",dd:"xxzera@gmail.com"}],development:[{dt:"OS",dd:"Mac OS"},{dt:"Tools",dd:"Git、 GitHub Pages、NPM、 Webpack、 Gulp"},{dt:"Language",dd:"HTML / Sass、 JavaScript（jQuery）"},{dt:"Framework",dd:"Vue.js"},{dt:"Library",dd:"jQuery.js"}],carrerSummary:[{dt:"2016. 4 - 2018. 8",dd:"スズキ株式会社にて営業職として従事（BtoB / BtoC)"},{dt:"2019. 2 - 2019. 4",dd:"株式会社アウトソーシングデザイナーに入社し研修を受ける"},{dt:"2019. 5 - 2020. 4",dd:"株式会社キューにて大手ECサイトの保守・運用業務に携わる"}],carrerDetails:[{dt:"研修内容",dd:["・PHP5におけるオブジェクト指向プログラムの基礎と応用","・JavaScriptを用いた動的なWebサイトの構築","・MySQLの基礎と応用、PHPからの実行","・illustrator、photoshopの基礎・応用"]},{dt:"業務内容",dd:["・カンプを元にLPの新規作成、更新","・サイト内コンポーネントの保守","・CMSを利用したサイト更新、NL管理、アプリ更新"]}],skillRate:[{dt:"HTML",dd:["star-full","star-full","star-full","star-full","star-empty"],svgDescription:"HTMLのスキル, 星の数"},{dt:"Sass（CSS）",dd:["star-full","star-full","star-full","star-full","star-empty"],svgDescription:"Sass（CSS）のスキル, 星の数"},{dt:"PHP",dd:["star-full","star-full","star-empty","star-empty","star-empty"],svgDescription:"PHPのスキル, 星の数"},{dt:"JavaScript",dd:["star-full","star-full","star-full","star-half","star-empty"],svgDescription:"JavaScriptのスキル, 星の数"},{dt:"Vue.js",dd:["star-full","star-full","star-half","star-empty","star-empty"],svgDescription:"Vue.jsのスキル, 星の数"},{dt:"WordPress",dd:["star-full","star-full","star-empty","star-empty","star-empty"],svgDescription:"WordPressのスキル, 星の数"}],skillRateContents:[{dt:"HTML",dd:"基本的マークアップ、SVGの利用"},{dt:"Sass（CSS）",dd:"レスポンシブ化、アニメーション、flocssを用いたCSS設計"},{dt:"PHP",dd:"研修の基礎知識のみ、実務経験なし"},{dt:"JavaScript（jQuery）",dd:"DOM操作、関数化、非同期処理、jQueryプラグインの利用"},{dt:"Vue",dd:"基礎"},{dt:"WordPress",dd:"テーマを用いたサイト構築、DB連携、サイトの更新"}],works:[{path:"",alt:"title",description:""}]}}},methods:{textFadein:function(){var t=document.querySelectorAll(".js-fadeIn"),a={root:null,rootMargin:"-50% 0px",threshold:0},e=function(t){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("is-onScreen"),s.unobserve(t.target))}))},s=new IntersectionObserver(e,a);t.forEach((function(t){return s.observe(t)}))},emitToHeader:function(t,a,e){var s=e;i["default"].$emit(t,s)},headerBgChange:function(){var t=this,a=document.querySelector(".js-head"),e={root:null,rootMargin:"",threshold:0},s=function(a){return a[0].isIntersecting?t.emitToHeader("changeBg-event",t.isInKv,!0):t.emitToHeader("changeBg-event",t.isInKv,!1)},n=new IntersectionObserver(s,e);n.observe(a)}}},d=c,o=(e("21bb"),e("2877")),l=Object(o["a"])(d,s,n,!1,null,null,null);a["default"]=l.exports},d81d:function(t,a,e){"use strict";var s=e("23e7"),n=e("b727").map,r=e("1dde"),i=e("ae40"),c=r("map"),d=i("map");s({target:"Array",proto:!0,forced:!c||!d},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,a,e){var s=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-af990a08.2ffa57dd.js.map