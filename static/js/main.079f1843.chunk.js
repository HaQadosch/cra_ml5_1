(window["webpackJsonpcat-detector"]=window["webpackJsonpcat-detector"]||[]).push([[0],{10:function(e,n,t){e.exports=t(32)},15:function(e,n,t){},16:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(8),a=t.n(r),i=(t(15),t(16),t(1)),l=t(9),s=t.n(l),u=t(2),f=t.n(u),d=new s.a({applicationId:"60a7c244bc7620f057bd3aa636f7c038bf6750a85de8aa5368b8a047d6f02763",secret:"e21ca645e7309b70440b80b977ff1f9de6711fdcfe09a9822a2b6a395d667dce"}),g=function(){var e,n=Object(o.useState)(""),t=Object(i.a)(n,2),r=t[0],a=t[1],l=Object(o.useState)(""),s=Object(i.a)(l,2),u=s[0],g=s[1],m=Object(o.useState)(0),h=Object(i.a)(m,2),w=h[0],p=h[1],b=Object(o.useState)(0),v=Object(i.a)(b,2),j=v[0],E=v[1],O=Object(o.useState)([]),y=Object(i.a)(O,2),k=y[0],P=y[1],I=Object(o.useRef)(null),S=Object(o.useRef)(null);function A(n,t){console.log("Model Loaded!",{options:n,model:t}),t&&t.predict(I.current,10,(function(e,n){console.log({modelPredict:n,err:e}),n&&P(n)})),e.predict(I.current,10,(function(e,n){console.log({classifierPredict:n,err:e}),n&&P(n)})),t&&t.predict(S.current,10,(function(e,n){console.log({modelPredict2:n,err:e}),n&&P(n)})),e.predict(S.current,10,(function(e,n){console.log({classifierPredict2:n,err:e}),n&&P(n)}));var o=new Image(400,400);o.src="/index.png",t&&t.predict(o,10,(function(e,n){console.log({newImgModelPredict:n,err:e,newImg:o}),n&&P(n)})),e.predict(o,10,(function(e,n){console.log({newImgClassifierPredict:n,err:e}),n&&P(n)}));var c=f.a.YOLO();c.detect(o,(function(e,n){console.log({yolo:c,err:e,newImg:n})})),c.detect(I.current,(function(e,n){console.log({yolo:c,err:e,newImg:n})}))}return Object(o.useEffect)((function(){d.photos.getRandomPhoto({query:"boat",count:1}).then((function(e){var n=e.ok,t=e.statusText;if(!n)throw new Error(t);return e})).then((function(e){return e.json()})).then((function(e){var n=Object(i.a)(e,1)[0],t=n.alt_description,o=n.width,c=n.height,r=n.urls.regular,l=n.user,s=l.first_name,u=l.last_name;g("Photo by ".concat(s," ").concat(u," on Unsplash, ").concat(t)),a(r),p(o),E(c)})).then((function(){e=f.a.imageClassifier("MobileNet",A)})).catch((function(e){return console.error(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("figure",null,c.a.createElement("img",{src:r,alt:u,ref:I,width:w,height:j}),c.a.createElement("figcaption",null,u)),c.a.createElement("figure",null,c.a.createElement("img",{src:"cat.jpeg",alt:"cat laying down",ref:S,width:2700,height:1800}),c.a.createElement("figcaption",null,"cat enjoying a comfy sofa")),c.a.createElement("section",null,c.a.createElement("ul",null,k.map((function(e){var n=e.label,t=e.confidence;return c.a.createElement("li",{key:t},n,": confidence ",t)})))))};var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("main",{className:"App-header"},c.a.createElement(g,null)))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(c.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra_ml5_1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cra_ml5_1","/service-worker.js");h?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.079f1843.chunk.js.map