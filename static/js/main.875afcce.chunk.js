(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports=[{"Company Name":"C1","1/1/2019":500,"1/2/2019":600,"1/3/2019":700,"1/4/2019":800,"1/5/2019":901,"1/6/2019":1001,"1/7/2019":999},{"Company Name":"C2","1/1/2019":404,"1/2/2019":506,"1/3/2019":634,"1/4/2019":456,"1/5/2019":787,"1/6/2019":235,"1/7/2019":433},{"Company Name":"C3","1/1/2019":1001,"1/2/2019":1231,"1/3/2019":1341,"1/4/2019":999,"1/5/2019":823,"1/6/2019":787,"1/7/2019":1321},{"Company Name":"C4","1/1/2019":781,"1/2/2019":888,"1/3/2019":567,"1/4/2019":982,"1/5/2019":687,"1/6/2019":452,"1/7/2019":154},{"Company Name":"C5","1/1/2019":143,"1/2/2019":342,"1/3/2019":143,"1/4/2019":451,"1/5/2019":871,"1/6/2019":341,"1/7/2019":485},{"Company Name":"C6","1/1/2019":241,"1/2/2019":253,"1/3/2019":560,"1/4/2019":141,"1/5/2019":673,"1/6/2019":351,"1/7/2019":361},{"Company Name":"C7","1/1/2019":897,"1/2/2019":971,"1/3/2019":691,"1/4/2019":813,"1/5/2019":991,"1/6/2019":941,"1/7/2019":934}]},26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},37:function(e,t){},39:function(e,t){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=(a(31),a(1)),u=a(23),m=a.n(u),s=function(e){var t=e.split("\n");if(t.length<2)return!1;var a=["'",'"'];return[" ",",","\t"].find(function(e){return a.find(function(a){return function(e,t,a){t=t.replace(/\//g,"\\\\");var n="(?:(?:(".concat(a,"[^").concat(a,"]*?").concat(a,")|(\\S+))(?:").concat(t,"+|$))"),l=new RegExp(n,"g"),c=e[0].match(l),r=e[1].match(l);return c&&r&&c.length===r.length}(t,e,a)})})},i=a(25),b=a(12),f=a.n(b),d=(a(48),function(e){var t=e.label,a=e.active,n=e.sortDir,c=Object(i.a)(e,["label","active","sortDir"]);return l.a.createElement("th",Object.assign({className:"cursor-pointer"},c),l.a.createElement("span",{className:f()(a&&"uk-text-emphasis")},t),l.a.createElement("span",{className:f()("sort-icons",!a&&"invisible")},l.a.createElement("span",{"data-uk-icon":"triangle-up",hidden:"asc"!==n}),l.a.createElement("span",{"data-uk-icon":"triangle-down",hidden:"desc"!==n})))}),E=function(e){var t,a=e.list,c=Object(n.useState)(0),r=Object(o.a)(c,2),u=r[0],m=r[1],s=Object(n.useState)("asc"),i=Object(o.a)(s,2),b=i[0],f=i[1],E=a&&a.length&&Object.keys(a[0]),v=(t=u,Object.keys(a[0]||{})[t]);return a.sort(function(e,t){var a="asc"===b?t:e;return String(("asc"===b?e:t)[v]).localeCompare(a[v])}),l.a.createElement("div",{className:"uk-overflow-auto"},l.a.createElement("table",{className:"uk-table uk-table-divider uk-table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,(E||[]).map(function(e,t){return l.a.createElement(d,{key:e,label:e,active:t===u,sortDir:b,onClick:(a=t,function(){m(a),f(a===u&&"asc"===b?"desc":"asc")})},e);var a}))),l.a.createElement("tbody",null,(a||[]).map(function(e,t){return l.a.createElement("tr",{key:t},Object.values(e).map(function(e,t){return l.a.createElement("td",{key:t},e)}))}))))},v="Company Name\t1/1/2019\t1/2/2019\t1/3/2019\t1/4/2019\t1/5/2019\t1/6/2019\t1/7/2019\nC1\t500\t600\t700\t800\t901\t1001\t999\nC2\t404\t506\t634\t456\t787\t235\t433\nC3\t1001\t1231\t1341\t999\t823\t787\t1321\nC4\t781\t888\t567\t982\t687\t452\t154\nC5\t143\t342\t143\t451\t871\t341\t485\nC6\t241\t253\t560\t141\t673\t351\t361\nC7\t897\t971\t691\t813\t991\t941\t934\n",p=a(24),k=function(){var e=Object(n.useState)(v),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),i=u[0],b=u[1],f=Object(n.useState)("tab"),d=Object(o.a)(f,2),k=d[0],N=d[1],C=Object(n.useState)("double"),h=Object(o.a)(C,2),g=h[0],O=h[1],S=Object(n.useState)(""),y=Object(o.a)(S,2),j=y[0],w=y[1];Object(n.useEffect)(function(){if(w(""),a){var e=x(a);b(e||[])}},[a]);var x=function(e){try{return JSON.parse(e)}catch(t){try{if(!s(e))throw new Error("Not a csv");return function(e){return m.a.toObject(e,{delimiter:{comma:",",space:/\s+/,tab:/\t+/}[k],quote:{single:"'",double:'"'}[g]})}(e)}catch(a){w("Data not in a JSON or CSV format")}}};return l.a.createElement("div",{className:"uk-container"},l.a.createElement("article",{className:"uk-section"},l.a.createElement("h2",null,"Sortable Challenge"),l.a.createElement("h3",null,"Input"),l.a.createElement("form",{className:"uk-form-stacked"},l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",{className:"uk-form-label"},"Data"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("textarea",{className:"uk-textarea",rows:"8",placeholder:"Paste JSON or CSV here...",value:a,onChange:function(e){c(e.target.value)}}),j&&l.a.createElement("div",{className:"uk-text-danger uk-text-small mt-1"},j),!j&&l.a.createElement("div",{className:"uk-text-muted uk-text-small mt-1"},"Specify data in JSON or CSV format"))),l.a.createElement("div",{"data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("label",{className:"uk-form-label"},"Delimiter"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("select",{className:"uk-select",value:k,onChange:function(e){return N(e.target.value)}},l.a.createElement("option",{value:"comma"},"Comma"),l.a.createElement("option",{value:"space"},"Space"),l.a.createElement("option",{value:"tab"},"Tab")))),l.a.createElement("div",null,l.a.createElement("label",{className:"uk-form-label"},"Quote"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("select",{className:"uk-select",value:g,onChange:function(e){return O(e.target.value)}},l.a.createElement("option",{value:"single"},"Single"),l.a.createElement("option",{value:"double"},"Double")))))),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("button",{className:"uk-button uk-button-default",type:"button",onClick:function(){c(JSON.stringify(p,null,2))}},"Paste sample JSON"),l.a.createElement("button",{className:"uk-button uk-button-default ml-1",type:"button",onClick:function(){c(v)}},"Paste sample CSV")),l.a.createElement("h3",null,"Sortable List"),l.a.createElement(E,{list:i}),l.a.createElement("h3",null,"Raw List"),l.a.createElement("pre",null,JSON.stringify(i,null,2))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.875afcce.chunk.js.map