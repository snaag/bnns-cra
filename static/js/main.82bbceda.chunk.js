(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,n){e.exports=n.p+"static/media/loading.2eea046d.gif"},162:function(e,t,n){e.exports=n(376)},167:function(e,t,n){},185:function(e,t){},197:function(e,t){},199:function(e,t){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(159),s=n.n(c),o=(n(167),n(31)),i=n.n(o),l=n(161),u=n(89),p=n(14),d=n(160),m=n.n(d),f=n(169),b=n(359),h=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(-1),o=Object(p.a)(s,2),d=o[0],h=o[1],g=Object(a.useState)([]),w=Object(p.a)(g,2),v=w[0],E=w[1],O=Object(a.useState)(-1),j=Object(p.a)(O,2),x=j[0],k=j[1],y=Object(a.useRef)([]),S=Object(a.useRef)(!1),N=Object(a.useRef)(!1),A=Object(a.useState)(""),C=Object(p.a)(A,2),R=C[0],B=C[1],_=Object(a.useState)(""),J=Object(p.a)(_,2),W=J[0],F=J[1],I=Object(a.useRef)(!1),$="https://cors-anywhere.herokuapp.com/",q=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a,r,s,o,u,p,d,m,h,g;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get($+"https://www.springfieldspringfield.co.uk/episode_scripts.php?tv-show=brooklyn-nine-nine",{headers:{"Access-Control-Allow-Origin":"*"}});case 3:for(t=e.sent,n=t.data,a=n.replace(/<br> /g,"\n"),r=f.load(a),s=r(".season-episodes").length,o=[],u=1;u<s+1;u++){for(p=r("#season".concat(u)).text().trim(),d=r("#season".concat(u," ~ a")),o.push(p),m=d.length,h=[],g=0;g<m;g++)h.push(d[g].children[0].data);y.current.push(h)}c(function(e){return[].concat(Object(l.a)(e),o)}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(){return e.apply(this,arguments)}}(),z=function(e){N.current=!0;var t=e.target.name-1;h(t+1),E(y.current[t]),k(-1),I.current=!1,F(""),B("")},D=function(e){k(e.target.name)},G=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a,r,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return F(""),t="s",t+=d>9?d:"0"+d,t+="e",t+=x>9?x:"0"+x,e.prev=5,e.next=8,b.get($+"https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=brooklyn-nine-nine&episode="+t,{headers:{"Access-Control-Allow-Origin":"*"}});case 8:n=e.sent,a=n.data.replace(/<br> /g,"\n"),r=f.load(a),c=r("h3").text().trim(),s=r("div.scrolling-script-container").text().trim(),F(c),B(s),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.error(e.t0);case 20:case"end":return e.stop()}},e,null,[[5,17]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){x>0&&G()},[x]),Object(a.useEffect)(function(){I.current=!0},[d]),Object(a.useEffect)(function(){S.current||(S.current=!0,q())},[n]),r.a.createElement(r.a.Fragment,null,y.current.length<1?r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("img",{src:m.a,alt:""})):r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("h2",null,"Brooklyn Nine-Nine Scripts  ",r.a.createElement("small",null,"\ube0c\ub098\ub098 \ub108\ubb34\uc88b\uc544")),r.a.createElement("h3",null,n.map(function(e){return r.a.createElement("button",{className:"btn btn-info btn-lg",name:/\d+/.exec(e),onClick:z,style:{margin:"2px"}},e)}))),N.current&&r.a.createElement("div",{style:{padding:"10px"}},v.map(function(e){return r.a.createElement("button",{className:"btn btn-success",name:/^\d+/.exec(e),onClick:D,style:{margin:"2px"}},e)}),r.a.createElement("h1",null," ")),I.current&&N.current&&(W.length<2?r.a.createElement("p",{className:"lead",style:{padding:"12px"}},r.a.createElement("mark",null,"S",d,"-E",x)," script is loading..."):r.a.createElement("div",{className:"",style:{padding:"12px"}},r.a.createElement("p",{class:"lead"},r.a.createElement("mark",null,"S",d,"-E",x)," ",W,"  "),r.a.createElement("pre",null,R))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.82bbceda.chunk.js.map