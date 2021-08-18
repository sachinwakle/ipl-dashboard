(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(4)),j=c(2),m=(c(26),c(8)),h=c.n(m),l=c(10),d=c(11),o=(c(28),c(0)),b=function(e){var t=e.teamName;return Object(o.jsx)("div",{className:"TeamTile",children:Object(o.jsx)("h1",{children:Object(o.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})},u=(c(35),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))()}),[]),c?Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(o.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(o.jsx)(b,{teamName:e.teamName},e.id)}))})]}):Object(o.jsx)("h1",{children:"No Teams Available"})}),O=(c(36),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchDetailsCard won-card":"MatchDetailsCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h1",{children:Object(o.jsx)(i.b,{to:n,children:a})}),Object(o.jsx)("h2",{className:"match-date",children:t.date}),Object(o.jsxs)("h3",{className:"match-venue",children:["at ",t.venue]}),Object(o.jsxs)("h3",{className:"match-winner",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]}),Object(o.jsxs)("div",{className:"additional-details",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:t.team1}),Object(o.jsx)("h3",{children:"Secons Innings"}),Object(o.jsx)("p",{children:t.team2}),Object(o.jsx)("h3",{children:"Man of the Match"}),Object(o.jsx)("p",{children:t.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[t.umpire1,", ",t.umpire2]})]})]})}),x=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(o.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),f=(c(38),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))()}),[r,i]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year"}),Object(o.jsx)(x,{teamName:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(o.jsx)(O,{match:e,teamName:r},e.date)}))]})]})}),N=c(20),v=(c(39),function(e){var t=e.match,c=e.teamName,a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsx)("h3",{children:Object(o.jsxs)(i.b,{to:n,children:[" ",a]})}),Object(o.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}),p=(c(40),function(){var e=Object(a.useState)({matches:[]}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))()}),[s]),c&&c.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(o.jsx)(N.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(o.jsx)("div",{className:"match-detail-section",children:Object(o.jsx)(O,{match:c.matches[0],teamName:c.teamName})}),c.matches.slice(1).map((function(e){return Object(o.jsx)(v,{match:e,teamName:c.teamName},e.date)})),Object(o.jsx)("div",{className:"more-section",children:Object(o.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More \xbb"})})]}):Object(o.jsx)("h2",{children:"Team not found"})});var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(o.jsx)(f,{})}),Object(o.jsx)(j.a,{path:"/teams/:teamName",children:Object(o.jsx)(p,{})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(u,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.9adecefc.chunk.js.map