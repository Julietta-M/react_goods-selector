(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),s=n.n(c),l=n(6),r=n(3),i=n(4),d=n(8),u=n(7),m=(n(14),n(5)),b=n.n(m),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:["Jam"]},e.addGoods=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.removeGoods=function(){e.setState({selectedGoods:[]})},e.title=function(){var t=e.state.selectedGoods;return 1===t.length?"".concat(t.join(", "),"\n      is selected"):t.length>1?"".concat(t.slice(0,-1).join(", "),"\n      and\n      ").concat(t[t.length-1],"\n      are selected"):"No goods selected"},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return a.a.createElement("div",null,a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,this.title()),0!==t.length&&a.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.removeGoods},"Remove All")),a.a.createElement("div",{className:"container shadow p-3 mb-5 bg-body rounded"},a.a.createElement("ul",{className:"list-group list-group-flush"},p.map((function(n){return a.a.createElement("li",{className:b()("list-group-item",{highlight:t.includes(n)}),key:n},n,t.includes(n)?a.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){e.removeGood(n)}},"Remove"):a.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:function(){e.addGoods(n)}},"Add"))})))))}}]),n}(a.a.Component);s.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3d431398.chunk.js.map