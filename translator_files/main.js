(this["webpackJsonpevm-substrate-address-converter"]=this["webpackJsonpevm-substrate-address-converter"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},
	53:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(29),s=n.n(r),o=(n(51),n(0)),i=n.p+"",l=(n(52),n(53),n(72)),j=n(73),
	u=n(74),b=n(75),d=n(68),h=n(1);var p=function(){var e=Object(a.useState)("Shiden Network to Metamask"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),
	s=Object(o.a)(r,2),p=s[0],O=s[1],m=Object(a.useState)(5),x=Object(o.a)(m,2),v=x[0],g=x[1],
	f=Object(a.useCallback)((function(){return p&&"Shiden Network to Metamask"===n&&l.a(p,v)[0]?d.a(j.a(p,!0)):"The translator awaits your request."}),[p,n,v]),
	S=Object(a.useCallback)((function(){return p&&"Metamask to Shiden Network"===n&&u.a(p)?b.a(p,v):"The translator awaits your request."}),
		[p,v,n]),k=Object(a.useMemo)((function(){return"Metamask to Shiden Network"===n?S():f()}),[S,f,n]);return Object(h.jsx)("div",{className:"App",
		children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsxs)("p",{children:["The Shiden Administration has heard your plight at not being able to withdraw funds from KuCoin to Metamask."]}),
			Object(h.jsxs)("p",{children:["They could've used the funds they retrieved from that hooligan, the Shogun dev, to fund the US Army and Marine Corps, but instead, they decided to commission a translator through the Department of Foreign Affairs. This is our beloved Joe Shiden's way of thanking this great nation."]}),
			

			Object(h.jsxs)("p",{children:["Translation: ",n]}),Object(h.jsxs)("label",{className:"switch",
				children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(){c("Metamask to Shiden Network"===n?"Shiden Network to Metamask":"Metamask to Shiden Network")}}),Object(h.jsx)("span",{className:"slider round"})]}),
			
			Object(h.jsx)("p",{children:"Input address"}),Object(h.jsx)("input",{type:"text",value:p,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("p",{children:p}),
			Object(h.jsx)("p",{children:k}),Object(h.jsx)("a",{className:"App-link",href:"https://joeshiden.info",target:"_self",rel:"noopener noreferrer",children:"Click here to return to the JoeShiden homepage."})]})})};
		Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(c.a.StrictMode,
			{children:Object(h.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.614ea108.chunk.js.map
