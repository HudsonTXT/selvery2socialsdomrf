!function(t){function e(e){for(var n,i,r=e[0],s=e[1],c=0,a=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&a.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(p&&p(e);a.length;)a.shift()()}var n={},o={0:0};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+({}[t]||t)+".js"}(t);var p=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(a);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",p.name="ChunkLoadError",p.type=i,p.request=r,n[1](p)}o[t]=void 0}};var a=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="js/",i.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=s;i(i.s=0)}([function(t,e,n){function o(t,e,o,i){this.purl=t,this.ptitle=e,this.pimg=o,this.text=i,this.vkOLD=function(){var t="http://vk.com/share.php?";this.purl&&(t+="url="+this.purl),this.ptitle&&(t+="&title="+encodeURIComponent(this.ptitle)),this.text&&(t+="&description="+encodeURIComponent(this.text)),this.pimg&&(t+="&image="+encodeURIComponent(this.pimg)),t+="&noparse=true",this.popup(t)},this.okOLD=function(){var t="https://connect.ok.ru/offer?";this.purl&&(t+="url="+encodeURIComponent(this.purl)),this.ptitle&&(t+="&title="+encodeURIComponent(this.ptitle)),this.pimg&&(t+="&imageUrl="+encodeURIComponent(this.pimg)),this.popup(t)},this.ok=function(){let t,e,o;const i=n.e(3).then(n.t.bind(null,1,7)),r=n.e(1).then(n.t.bind(null,2,7)),s=n.e(2).then(n.t.bind(null,3,7));Promise.all([i,r,s]).then(n=>{console.log(n),t=n[0].default,e=n[1].default,o=n[2].default,c()});const c=()=>{window.location;let n="https://connect.ok.ru/dk?st.cmd=WidgetMediatopicPost";const i={media:[{type:"text",text:this.text}]};let r=JSON.stringify(i);r=o.parse(r),n+="&st.app=512000487922",i&&(n+="&st.attachment="+encodeURIComponent(e.stringify(r)));let s="";s+="st.attachment="+e.stringify(r),s+="67F16EC1D0CCB6257DDA3118",n+="&st.signature="+t(s).toString(),this.popup(n)}},this.fb=function(){const t=this;var e,n,o,i,r;window.fbAsyncInit=function(){FB.init({appId:0x47645363a3e21,autoLogAppEvents:!0,xfbml:!0,version:"v8.0"}),s(),FB.AppEvents.logPageView()},e=document,n="script",o="facebook-jssdk",r=e.getElementsByTagName(n)[0],e.getElementById(o)||((i=e.createElement(n)).id=o,i.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(i,r));const s=function(){FB.login((function(e){if(console.log(e),"connected"===e.status){var n=t.text;FB.api("/me/feed","post",{message:n},(function(t){!t||t.error?(alert("Error occured"),console.error(t.error.message)):alert("Post ID: "+t.id)}))}}),{scope:"user_posts"})}},this.fbOLD=function(){var t="https://www.facebook.com/dialog/feed?";t+="app_id=1255939541450273",t+="&display=popup",this.purl&&(t+="&link="+encodeURIComponent(this.purl)),this.text&&(t+="&quote="+encodeURIComponent(this.text)),this.pimg,this.popup(t)},this.vk=function(){const t=this;let e,n=!1,o=!1,i=!1;window.vkAsyncInit=function(){VK.init({apiId:7629067}),r()},i||setTimeout((function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://vk.com/js/api/openapi.js?168",t.async=!0,document.getElementById("vk_api_transport").appendChild(t)}),0);const r=function(){window.VK&&(i=!0),i&&!n&&s(),i&&n&&c()},s=function(){n||VK.Auth.login(t=>{console.log(t),"connected"===t.status?(n=!0,e=t.session.sid,c()):n=!1},8192)},c=function(){n&&!o&&(console.log(t.text),VK.Api.call("wall.post",{message:t.text,v:"5.124"},t=>{console.log(t),o=!t.error}))}},this.popup=function(t){window.open(t,"","toolbar=0,status=0,width=626,height=436")}}document.addEventListener("DOMContentLoaded",()=>{!function(){document.querySelectorAll(".js-share-button").forEach(t=>{t.addEventListener("click",e)});const t={title:"Это поле title",text:"Чем больше семья, тем больше радости. Если у вас больше двух детей, и ипотечный кредит в любом банке, тогда у меня для вас есть хорошие новости.\n\n        Недавно",longText:"Чем больше семья, тем больше радости. Если у вас больше двух детей, и ипотечный кредит в любом банке, тогда у меня для вас есть хорошие новости.\n\nНедавно мы получили выплату по госпрограмме на погашение нашего ипотечного кредита. И вы тоже сможете получить до 450 тысяч рублей, если ваш третий или четвёртый (а может быть пятый или больше) ребёнок родился после 1 января 2019. Если ещё не родился, у вас есть время - программа действует до 31 декабря 2022 года. Возраст старших детей значения не имеет - им может быть больше 18 лет.\n\nУсловия: \nВсе дети и родитель, подающий заявление, должны быть гражданами РФ.\nЗаявитель должен являться заёмщиком по ипотеке.\nМожно получать компенсацию на договоры, заключенные до 1 июля 2023 года.\n3й или последующий ребенок родились после 1 января 2019 года.\n\nЕсли всё совпадает, то подавайте заявку в банк, где оформлена ипотека и получайте от государства до 450 тысяч рублей на погашение ипотеки.\n\nЧто потребуется.\nзаявление по форме банка;\nудостоверение личности, нотариально заверенные свидетельства о рождении детей;\nкредитный договор;\nдоговор купли-продажи жилого помещения или земельного участка, или договор участия в долевом строительстве.\n\nЗаявления принимают банки, которые выдали вам ипотеку. Они же проверяют документы, а затем направляют их в ДОМ.РФ. Если возникнут вопросы, всегда можно обратиться на горячую линию ДОМ.РФ: 8 800 775-11-22 - они помогут.\n\nЖелаю удачи!\n\n#domrf, #domrf450, #домрф, #450тысяч, #гасимипотеку, #гасимипотеку450 \n        ",img:"https://xn--h1alcedd.xn--d1aqf.xn--p1ai/wp-content/uploads/2019/03/GettyImages-870761572.jpg",url:"https://спроси.дом.рф"};function e(e){const{shareType:n}=e.target.dataset;new o(t.url,t.title,t.img,"ok"===n?t.longText:t.text)[n]()}}()})}]);