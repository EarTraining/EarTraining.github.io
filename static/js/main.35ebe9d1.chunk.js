(this["webpackJsonpsolfege-app"]=this["webpackJsonpsolfege-app"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),u=t.n(o),a=t(3),i=t.n(a),l=t(1);function c(e){var n=e.answerStatus;return u.a.createElement("div",null,n)}function r(e){var n=e.counterCorrectProp,t=e.counterTotalProp;return u.a.createElement("div",null,"Score: ",n," / ",t)}t(9),t(10),t(14);var s=function(){var e={Do:new Audio("/soundFiles/Do.mp3"),"Di/Ra":new Audio("/soundFiles/Di:Ra.mp3"),Re:new Audio("/soundFiles/Re.mp3"),"Ri/Me":new Audio("/soundFiles/Ri:Me.mp3"),Mi:new Audio("/soundFiles/Mi.mp3"),Fa:new Audio("/soundFiles/Fa.mp3"),"Fi/Se":new Audio("/soundFiles/Fi:Se.mp3"),Sol:new Audio("/soundFiles/Sol.mp3"),"Si/Le":new Audio("/soundFiles/Si:Le.mp3"),La:new Audio("/soundFiles/La.mp3"),"Li/Te":new Audio("/soundFiles/Li:Te.mp3"),Ti:new Audio("/soundFiles/Ti.mp3")},n=Object(o.useState)(""),t=Object(l.a)(n,2),a=t[0],i=t[1],s=Object(o.useState)(""),m=Object(l.a)(s,2),d=m[0],p=m[1],E=Object(o.useState)(0),b=Object(l.a)(E,2),f=b[0],F=b[1],S=Object(o.useState)(0),C=Object(l.a)(S,2),R=C[0],k=C[1],w=Object(o.useState)(!0),A=Object(l.a)(w,2),L=A[0],O=A[1];function T(e){a==e?(p("CORRECT!"),1==L&&F(f+1)):(p("WRONG!"),O(!1),console.log(!1))}return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,u.a.createElement("p",null,"SOLFEGE EAR TRAINING")),u.a.createElement("p",null,u.a.createElement("button",{onClick:function(){p(null),k(R+1),function(){var n=Object.keys(e),t=n[Math.floor(Math.random()*n.length)];return i(t),e[t]}().play().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),O(!0)}}," PLAY "),u.a.createElement("button",{onClick:function(){e[a].play()}}," REPLAY ")),u.a.createElement("p",null,u.a.createElement(c,{answerStatus:d})),u.a.createElement("button",{onClick:function(){return T("Do")}}," Do "),u.a.createElement("button",{onClick:function(){return T("Di/Ra")}}," Di/Ra "),u.a.createElement("button",{onClick:function(){return T("Re")}}," Re "),u.a.createElement("button",{onClick:function(){return T("Ri/Me")}}," Ri/Me "),u.a.createElement("button",{onClick:function(){return T("Mi")}}," Mi "),u.a.createElement("button",{onClick:function(){return T("Fa")}}," Fa "),u.a.createElement("button",{onClick:function(){return T("Fi/Se")}}," Fi/Se "),u.a.createElement("button",{onClick:function(){return T("Sol")}}," Sol "),u.a.createElement("button",{onClick:function(){return T("Si/Le")}}," Si/Le "),u.a.createElement("button",{onClick:function(){return T("La")}}," La "),u.a.createElement("button",{onClick:function(){return T("Li/Te")}}," Li/Te "),u.a.createElement("button",{onClick:function(){return T("Ti")}}," Ti "),u.a.createElement("p",null,u.a.createElement(r,{counterCorrectProp:f,counterTotalProp:R})))};i.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(s,null)),document.getElementById("root"))},4:function(e,n,t){e.exports=t(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.35ebe9d1.chunk.js.map