(this.webpackJsonpkamoulox=this.webpackJsonpkamoulox||[]).push([[0],{23:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t(2),r=t.n(s),i=t(12),c=t.n(i),l=(t(23),t(13)),a=t(14),u=t(17),p=t(16),h=t(15),j=t.n(h),d=function(e){return Object(o.jsx)("h1",{children:e.enonce})},b=function(e){for(var n,t=0,s=0;s<e.reponses.length;s++)n=Object(o.jsx)("li",{onClick:function(){e.verifReponse(t),t++},children:e.reponses[t]},e.reponses[t]),t++;return n=e.reponses.map((function(n,t){return Object(o.jsx)("li",{onClick:function(){e.verifReponse(t)},children:n},n)})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("ul",{children:n}),Object(o.jsx)("div",{children:e.reponseCorrect?"Bonne r\xe9ponse !":e.reponseCliquer?"Mauvaise r\xe9ponse!":""})]})},v=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).initQuestions=function(){var e;(e=10,j.a.get("http://kamoulox.test/api/getQuestions/"+e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data}))).then((function(e){o.setState({listeQuestions:e,etape:0}),console.log(o.state.listeQuestions)}))},o.verifReponse=function(e){var n=o.state,t=n.listeQuestions,s=n.etape;n.reponseCliquer||(e===t[s].indexBonneReponse?(o.setState({reponseCorrect:!0,reponseCliquer:!0}),console.log("bonne r\xe9ponse")):(o.setState({reponseCorrect:!1,reponseCliquer:!0}),console.log("mauvaise r\xe9ponse")))},o.nextStep=function(e){o.setState({etape:e+1,reponseCorrect:null,reponseCliquer:!1}),console.log(o.state.listeQuestions.length),console.log(o.state.etape)},o.state={listeQuestions:[],etape:null,reponseCorrect:!1,reponseCliquer:!1},o}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.initQuestions()}},{key:"render",value:function(){var e=this,n=this.state,t=n.listeQuestions,s=n.etape,r=n.reponseCliquer,i=n.reponseCorrect;return t.length>0?Object(o.jsxs)("div",{children:[console.log(s),console.log(t.length),s<t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{enonce:t[s].enonce}),Object(o.jsx)(b,{reponses:t[s].reponses,etape:s,verifReponse:this.verifReponse,reponseCorrect:i,reponseCliquer:r}),Object(o.jsx)("button",{disabled:!(r&&t.length>=s),onClick:function(){return e.nextStep(s)},children:"Next"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Quiz termin\xe9"}),Object(o.jsx)("p",{children:"Merci !"}),Object(o.jsx)("button",{onClick:function(){return e.initQuestions()},children:"Nouveau Quiz"})]})]}):null}}]),t}(s.Component);t(41);var x=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(v,{})})})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),navigator.serviceWorker&&navigator.serviceWorker.register("serviceWorker.js").catch((function(e){return console.error("service worker NON enregistr\xe9",e)})),window.caches&&caches.open("veille-techno-1.0").then((function(e){e.addAll(["index.html","index.js"]).then(console.log("cache initialis\xe9")).catch(console.err)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.8fbd0394.chunk.js.map