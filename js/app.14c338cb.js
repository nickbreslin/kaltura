(function(t){function e(e){for(var r,c,s=e[0],o=e[1],u=e[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/kaltura-analytics/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"257b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={class:"container my-5"};function i(t,e,a,i,c,s){var o=Object(r["z"])("TheHeader"),u=Object(r["z"])("router-view"),l=Object(r["z"])("TheFooter");return Object(r["s"])(),Object(r["e"])("div",n,[Object(r["h"])(o),Object(r["h"])(u),Object(r["h"])(l)])}var c={class:"h1 border-bottom mb-5"};function s(t,e,a,n,i,s){return Object(r["s"])(),Object(r["e"])("div",c,Object(r["B"])(i.title),1)}var o=a("9224"),u={name:"Footer",data:function(){return{title:o.title}}},l=a("6b0d"),d=a.n(l);const b=d()(u,[["render",s]]);var f=b,p={class:"row justify-content-center"},h={class:"col-lg-6 col-md-8 mt-5"},v={class:"footer border-top mb-5 pt-3"},m={class:"m-0"},j=Object(r["f"])("a",{rel:"noopener",target:"_blank",href:"https://www.nickbreslin.com"},"Nick Breslin",-1),O=Object(r["g"])(". "),y=Object(r["f"])("p",{class:"m-0"},[Object(r["g"])(" Proudly built with "),Object(r["f"])("a",{rel:"noopener",target:"_blank",href:"https://https://vuejs.org/"},"Vue"),Object(r["g"])(" and "),Object(r["f"])("a",{rel:"noopener",target:"_blank",href:"https://getbootstrap.com/"},"Bootstrap"),Object(r["g"])(". ")],-1);function g(t,e,a,n,i,c){return Object(r["s"])(),Object(r["e"])("div",p,[Object(r["f"])("div",h,[Object(r["f"])("div",v,[Object(r["f"])("p",m,[Object(r["g"])(Object(r["B"])(i.title)+" ("+Object(r["B"])(i.version)+") made by ",1),j,O]),y])])])}var w={name:"Footer",data:function(){return{title:o.title,version:o.version}}};const k=d()(w,[["render",g]]);var x=k,P={name:"Home",components:{TheHeader:f,TheFooter:x}};const B=d()(P,[["render",i]]);var E=B,S=a("bc3a"),T=a.n(S),_=a("6c02");function D(t,e,a,n,i,c){var s=Object(r["z"])("Viewer");return Object(r["s"])(),Object(r["d"])(s)}var F=Object(r["f"])("div",{id:"myEmbedTarget",style:{width:"100%",height:"600px"}},null,-1),M={class:"mb-3 mt-3 border rounded bg-secondary p-3"},C={class:"row"},A={class:"row mb-5"},z={class:"col"},W={class:"card"},q=Object(r["f"])("div",{class:"card-header"},"Total watch time",-1),I={class:"card-body h2"},N={class:"col"},V={class:"card"},H=Object(r["f"])("div",{class:"card-header"},"Thoroughness",-1),J={class:"card-body h2"};function L(t,e,a,n,i,c){var s=Object(r["z"])("EventMarker"),o=Object(r["z"])("StackChart");return Object(r["s"])(),Object(r["e"])(r["a"],null,[F,Object(r["f"])("div",M,[Object(r["f"])("div",C,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(t.events,(function(t){return Object(r["s"])(),Object(r["d"])(s,Object(r["m"])({class:"col",key:t.id},t),null,16)})),128))])]),Object(r["f"])("div",A,[Object(r["f"])("div",z,[Object(r["f"])("div",W,[q,Object(r["f"])("div",I,Object(r["B"])(c.totalWatchTime)+" seconds",1)])]),Object(r["f"])("div",N,[Object(r["f"])("div",V,[H,Object(r["f"])("div",J,Object(r["B"])(c.uniqueWatchTime)+" seconds ("+Object(r["B"])(c.uniquePercent)+"%) ",1)])])]),Object(r["h"])(o,{chartData:t.watches,duration:t.duration},null,8,["chartData","duration"])],64)}var Q=a("2909"),K=(a("b680"),a("a9e3"),a("d81d"),a("d3b7"),a("4e82"),a("159b"),a("c740"),a("99af"),{class:"d-flex flex-row"}),R={class:""},U={key:0,class:"bi bi-check-circle text-muted"},$={key:1,class:"bi bi-check-circle-fill text-success"},G={class:"ms-3 align-middle"};function X(t,e,a,n,i,c){return Object(r["s"])(),Object(r["e"])("div",null,[Object(r["f"])("div",K,[Object(r["f"])("div",R,[a.fired?(Object(r["s"])(),Object(r["e"])("i",$)):(Object(r["s"])(),Object(r["e"])("i",U))]),Object(r["f"])("div",G,[Object(r["f"])("div",{class:Object(r["o"])(["text-start label",{"text-muted":!a.fired,"text-success":a.fired}])},Object(r["B"])(a.label),3)])])])}var Y={name:"EventMarker",props:{id:String,label:String,fired:Boolean}};a("e320");const Z=d()(Y,[["render",X],["__scopeId","data-v-639e76fc"]]);var tt=Z,et={class:"height: 20px"},at={ref:"canvas"};function rt(t,e,a,n,i,c){return Object(r["s"])(),Object(r["e"])("div",et,[Object(r["f"])("canvas",at,null,512)])}var nt=a("9b4a"),it={name:"StackChart",data:function(){return this.chart=null,{}},props:{chartData:Array,duration:Number},methods:{formatData:function(){for(var t=this,e=[],a=function(a){var r=0;t.chartData.forEach((function(t){a>=t.start&&a<t.start+t.duration&&(r+=1)})),e.push(r)},r=0;r<this.duration;r+=1)a(r);return e},formatLabels:function(){for(var t=[],e=0;e<this.duration;e+=1)t.push(e);return t}},watch:{duration:function(){this.chart.data.labels=this.formatLabels(),this.chart.update()},chartData:{deep:!0,handler:function(){this.chart.data.datasets[0].data=this.formatData(),this.chart.update()}}},mounted:function(){nt["a"].register.apply(nt["a"],Object(Q["a"])(nt["b"])),this.chart=new nt["a"](this.$refs.canvas.getContext("2d"),{type:"bar",data:{labels:this.formatLabels(),datasets:[{data:this.formatData()}]},options:{scales:{xAxis:{grid:{display:!1}},yAxis:{display:!1}},maintainAspectRatio:!1,responsive:!0,plugins:{legend:{display:!1},title:{display:!1}}}})}};const ct=d()(it,[["render",rt]]);var st=ct,ot={name:"Viewer",components:{EventMarker:tt,StackChart:st},data:function(){return{duration:0,isPlaying:!1,startFrom:0,watches:[],events:[{id:"firstPlay",label:"First Play",fired:!1},{id:"firstQuartile",label:"25%",fired:!1},{id:"secondQuartile",label:"50%",fired:!1},{id:"thirdQuartile",label:"75%",fired:!1},{id:"playerPlayEnd",label:"100%",fired:!1}]}},computed:{totalWatchTime:function(){if(0==this.watches.length)return Number(0).toFixed(2);if(1==this.watches.length)return this.watches[0].duration.toFixed(2);var t=this.watches.map((function(t){return t.duration})),e=t.reduce((function(t,e){return t+e}));return e.toFixed(2)},uniqueWatchTime:function(){var t=Object(Q["a"])(this.watches);t.sort((function(t,e){return t.start>e.start?1:-1}));var e=0,a=0;return t.forEach((function(t){e<t.start&&(e=t.start);var r=t.start+t.duration;r>e&&(a+=r-e,e=r)})),a.toFixed(2)},uniquePercent:function(){return Math.round(100/this.duration*this.uniqueWatchTime)}},methods:{setEvent:function(t){var e=this.events.findIndex((function(e){return e.id==t}));e>=0&&(this.events[e].fired=!0)},setStart:function(t){this.startFrom=t},setEnd:function(t){this.watches.push({start:this.startFrom,duration:t-this.startFrom})},setDuration:function(t){this.duration=t},setPlayState:function(t){this.isPlaying=t}},mounted:function(){var t=391241,e=22119142,a="1_9y74c1on",r=document.createElement("script");r.setAttribute("src","https://cdnapisec.kaltura.com/p/".concat(t,"/sp/").concat(t,"00/embedIframeJs/uiconf_id/").concat(e,"/partner_id/").concat(t)),document.head.appendChild(r);var n=this;setTimeout((function(){window.kWidget.embed({targetId:"myEmbedTarget",wid:"_".concat(t),uiconf_id:"".concat(e),entry_id:"".concat(a),flashvars:{autoPlay:!1},params:{wmode:"transparent"},readyCallback:function(t){var e=document.getElementById(t);n.setStart(0),n.setDuration(e.evaluate("{duration}")),n.events.forEach((function(t){e.kBind(t.id,(function(){n.setEvent(t.id)}))})),e.kBind("doPlay",(function(){var t=e.evaluate("{video.player.currentTime}");n.setStart(t),n.setPlayState(!0)})),e.kBind("playerPlayEnd",(function(){var t=e.evaluate("{video.player.currentTime}");n.isPlaying&&(n.setEnd(t),n.setPlayState(!1))})),e.kBind("durationChange",(function(t){n.setDuration(t.newValue)})),e.kBind("pause",(function(){var t=e.evaluate("{video.player.currentTime}");n.isPlaying&&(n.setEnd(t),n.setPlayState(!1))})),e.kBind("playerPlayEnd",(function(){n.setEnd(n.duration)})),e.kBind("play",(function(){var t=e.evaluate("{video.player.currentTime}");n.setStart(t),n.setPlayState(!0)})),e.kBind("seek",(function(t){n.isPlaying&&n.setEnd(t)})),e.kBind("seeked",(function(t){n.setStart(t)}))}})}),1e3)}};const ut=d()(ot,[["render",L]]);var lt=ut,dt={name:"Home",components:{Viewer:lt},data:function(){return{}},methods:{},computed:{}};const bt=d()(dt,[["render",D]]);var ft=bt,pt=[{path:"/",name:"Main",component:ft}],ht=Object(_["a"])({mode:"history",linkExactActiveClass:"active",history:Object(_["b"])("/kaltura-analytics/"),routes:pt}),vt=ht,mt=a("5502"),jt=Object(mt["a"])({state:{},mutations:{},actions:{},getters:{},modules:{}}),Ot=(a("f9e3"),a("cd74"),a("e4c4"),a("f33e"),Object(r["c"])(E).use(jt).use(vt));Ot.config.globalProperties.axios=T.a,Ot.mount("#app")},9224:function(t){t.exports=JSON.parse('{"name":"kaltura-analytics","title":"Kaltura Analytics Demo","version":"1.0.0","description":"vue3 bootstrap5 boilerplate","license":"Unlicense","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","deploy":"vue-cli-service build && gh-pages -d dist"},"contributors":[{"name":"Nick Breslin","email":"nickbreslin@gmail.com"}],"homepage":"https://github.com/nickbreslin/vue3-bootstrap5-boilerplate#readme","bugs":{"url":"https://github.com/nickbreslin/vue3-bootstrap5-boilerplate/issues"},"repository":{"type":"git","url":"https://github.com/nickbreslin/vue3-bootstrap5-boilerplate.git"},"funding":{"type":"patreon","url":"https://www.patreon.com/slybootsstudio/"},"dependencies":{"axios":"^0.26.1","bootstrap":"^5.1.3","bootstrap-icons":"^1.8.1","moment":"^2.29.3","chart.js":"^3.5.0","bootswatch":"^5.0.0","core-js":"^3.12.1","vue":"^3.0.0","vue-router":"^4.0.0-0","vuex":"^4.0.0-0"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.13","@vue/cli-plugin-eslint":"~4.5.13","@vue/cli-plugin-router":"~4.5.13","@vue/cli-plugin-vuex":"~4.5.13","@vue/cli-service":"^4.5.13","@vue/compiler-sfc":"^3.2.21","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.0","eslint-plugin-vue":"^7.9.0","gh-pages":"^3.2.3","prettier":"^2.3.0"}}')},e320:function(t,e,a){"use strict";a("257b")},f33e:function(t,e,a){}});
//# sourceMappingURL=app.14c338cb.js.map