(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=n(9),h=n(10),d=n(12),u=n(11),s=n(13),l=n(4),p=n(6),w=n(5),m=n(7),b=n(1),f=n(3),v=function(e){return e.join().split(" ").filter(function(e){return e}).reduce(function(e,t){return(e[t]=Symbol(t)||1)&&e},{})};function j(){var e=Object(l.a)(["\n  EDGE\n  SOLID\n"]);return j=function(){return e},e}v(j());window.atoms=v;var O={width:100,height:100,depth:100,color:16711680,edges:!1,x:0,y:0,z:0,castShadow:!0,receiveShadow:!0};var g=n(2);function y(){var e=Object(l.a)(["\n  SOLID\n\n"]);return y=function(){return e},e}v(y());var S={data:Object(m.a)(Array(100)).map(function(e,t){return[t,Math.log(10*Math.random())]}),xFn:function(e){return Object(g.a)(e,1)[0]},yFn:function(e){var t=Object(g.a)(e,2);t[0];return t[1]},width:2e3,height:90,strokeWidth:4,strokeDepth:30,color:16711680,edges:!1,x:0,y:0,z:0,castShadow:!0,receiveShadow:!0},M=function(e){var t=Object(g.a)(e,2),n=Object(g.a)(t[0],2),a=n[0],r=n[1],i=Object(g.a)(t[1],2),o=i[0],c=i[1],h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,d=function(e,t){var n=Object(g.a)(e,2),a=n[0],r=n[1],i=Object(g.a)(t,2),o=i[0],c=r-i[1],h=o-a,d=Math.hypot(c,h);return[c/d,h/d]}([a,r],[o,c]),u=Object(g.a)(d,2),s=u[0],l=u[1];return[[a+s*h,r+l*h],[o+s*h,c+l*h]]},k=function(e){var t=Object(g.a)(e,2),n=Object(g.a)(t[0],2),a=n[0],r=n[1],i=Object(g.a)(t[1],2),o=i[0];return(i[1]-r)/(o-a)},z=function(e,t){var n=Object(g.a)(e,2),a=Object(g.a)(n[0],2),r=a[0],i=a[1],o=Object(g.a)(n[1],2),c=o[0],h=o[1],d=Object(g.a)(t,2),u=d[0],s=d[1],l=Math.max(r,c),p=Math.max(i,h),w=Math.min(r,c),m=Math.min(i,h);return u>=w&&u<=l&&s>=m&&s<=p},x=function(e){return function(t,n,a){var r=Object(g.a)(t,2),i=r[0],o=r[1],c=[a[n-1]||[],t],h=[t,a[n+1]||[]],d=M(c,e),u=M(h,e);if(void 0===a[n-1])return[u[0]];if(void 0===a[n+1])return[d[1]];var s=k(d),l=k(u),p=l-s,w=[d[0][1]-s*d[0][0]],m=[u[0][1]-l*u[0][0]],b=(w-m)/(l-s),f=(w*l-m*s)/p,v=[b,f];if(z(d,v)||z(u,v))return[v];var j=b-i,O=f-o,y=Math.hypot(j,O),S=j/y,x=O/y;return[d[1],[e*S+i,e*x+o],u[0]]}};window.strokeWidthPath=x,window.translateLine=M;var E=p.b.div.withConfig({displayName:"View__StyledViewWrapper",componentId:"nl3h1c-0"})(["width:100%;height:100%;background-color:green;"]),I=2*Math.PI,A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).viewRef=r.a.createRef(),n.animate=n.animate.bind(Object(w.a)(Object(w.a)(n))),n}return Object(s.a)(t,e),Object(h.a)(t,[{key:"initialize",value:function(){var e=this.viewRef.current,t=e.getBoundingClientRect(),n=t.width,a=t.height,r=new b.n;r.background=new b.c(332337);var i=new b.d(16777215,.2);i.position.set(0,200,1e3).normalize(),r.add(i);var o=new b.a(13421772);r.add(o);var c=function(e){e=Object.assign({},O,e);var t=new b.g,n=new b.b(e.width,e.height,e.depth),a=new b.k({color:e.color}),r=new b.j(n,a);if(r.castShadow=e.castShadow,r.receiveShadow=e.receiveShadow,t.add(r),e.edges){var i={};i.geometry=new b.e(n),i.material=new b.h({color:16777215^e.color}),i.mesh=new b.i(i.geometry,i.material),t.add(i.mesh)}return t.position.set(e.x,e.y,e.z),t}({width:3e3,height:3e3,depth:10,color:2087,x:0,y:100,z:-200});r.add(c);var h=new b.p(16777215,.5);h.castShadow=!0,h.position.set(0,50,1200),h.angle=Math.PI/3,h.shadow.camera.near=200,h.shadow.camera.far=4e3,h.shadow.mapSize.width=4096,h.shadow.mapSize.height=4096,h.target=c,r.add(h);var d=new b.m(70,n/a,1,1e4),u=new b.q({antialias:!0});u.shadowMap.enabled=!0,u.shadowMap.type=b.l,u.setSize(n,a),e.appendChild(u.domElement),d.position.set(0,-1300,1200),d.lookAt(0,0,0),window.d3=f,Object.assign(this,{scene:r,camera:d,renderer:u})}},{key:"populateScene",value:function(){var e=this.scene,t=f.schemeSet3.map(function(e){return parseInt(e.slice(1),16)}),n=Object(m.a)(Array(20)).map(function(e,n){return function(e){var t=(e=Object.assign({},S,e)).data.map(e.xFn),n=e.data.map(e.yFn),a=[Math.min.apply(null,t),Math.max.apply(null,t)],r=[Math.min.apply(null,n),Math.max.apply(null,n)],i=f.scaleLinear().domain(a).range([-e.width/2,e.width/2]),o=f.scaleLinear().domain(r).range([-e.height/2,e.height/2]),c=f.zip(t.map(i),n.map(o)),h=x(e.strokeWidth),d=c.map(h).reduce(function(e,t){return e.concat(t)},[]),u=c.reverse().map(h).reduce(function(e,t){return e.concat(t)},[]),s=d.concat(u),l=new b.o,p=Object(g.a)(s[0],2),w=p[0],m=p[1];l.moveTo(w,m),s.slice(1).forEach(function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return l.lineTo(n,a)}),l.lineTo(w,m);var v=new b.f(l,{depth:e.strokeDepth,bevelEnabled:!1}),j=new b.k({color:e.color}),O=new b.j(v,j);return O.castShadow=e.castShadow,O.receiveShadow=e.receiveShadow,O.position.set(e.x,e.y,e.z),O}({color:t[Math.floor(10*Math.random())],data:Object(m.a)(Array(100)).map(function(e,t){return[t,Math.log(10*Math.random())]}),y:1e3-100*n})});e.add.apply(e,n),Object.assign(this,{ribbons:n})}},{key:"animate",value:function(e){var t=this.camera,n=this.renderer,a=this.scene;this.ribbons.forEach(function(t,n){t.position.z=10*(Math.sin(e*I/100+n*I/10)+1)+100}),n.render(a,t),requestAnimationFrame(this.animate.bind(this,++e%100))}},{key:"componentDidMount",value:function(){this.initialize(),this.populateScene(),this.animate(0)}},{key:"render",value:function(){return r.a.createElement(E,{ref:this.viewRef})}}]),t}(a.Component);function C(){var e=Object(l.a)(["\n  html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return C=function(){return e},e}var D=Object(p.a)(C()),F=p.b.div.withConfig({displayName:"App__StyledApp",componentId:"sc-1v7ouhs-0"})(["width:100%;height:100%;"]),L=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(D,null),r.a.createElement(A,null))}}]),t}(a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.b9e424e2.chunk.js.map