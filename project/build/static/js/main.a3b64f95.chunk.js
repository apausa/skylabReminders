(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(5),s=n.n(i),a=n(2),o="CREATE_TASK",u="REMOVE_TASK",j="UPDATE_TASK";var l=n(7),f=(n(21),n(1));function d(){var t=Object(a.b)(),e=Object(c.useState)(""),n=Object(l.a)(e,2),r=n[0],i=n[1],s=function(e,n){var c;13===n&&e&&(t((c={description:r,state:!1},function(t){t({type:o,task:c})})),i(""))};return Object(f.jsx)("input",{className:"main__input",type:"text",name:"input",placeholder:"Write your reminder",value:r,onChange:function(t){var e=t.target.value;return i(e)},onKeyPress:function(t){var e=t.target.value,n=t.which;s(e,n)}})}n(23);function b(){var t=Object(a.c)((function(t){return t.taskReducer})),e=Object(c.useState)(0),n=Object(l.a)(e,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){i(t.reduce((function(t,e){return!1===e.state?t+1:t}),0))}),[t]),Object(f.jsxs)("hgroup",{className:"main__titles",children:[Object(f.jsx)("h1",{className:"title__reminders",children:"Reminders"}),Object(f.jsx)("h2",{className:"title__length",children:r})]})}n(24);var m=function(){return Object(f.jsx)("div",{className:"main__placeholder",children:"Write you first task!"})};n(25);function p(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.taskReducer})),n=function(e){return t(function(t){return function(e){e({type:u,task:t})}}(e))},c=function(e){return t(function(t){return function(e){e({type:j,task:t})}}(e))};return Object(f.jsxs)("main",{className:"main",children:[Object(f.jsx)(b,{}),Object(f.jsx)(d,{}),0===e.length?Object(f.jsx)(m,{}):Object(f.jsx)("ul",{className:"main__list",children:e.map((function(t){return Object(f.jsx)("li",{className:"list__task",children:Object(f.jsxs)("form",{className:"task__form",children:[Object(f.jsx)("button",{className:!1===t.state?"form__text--unstriked":"form__text--striked",type:"button",onClick:function(){return c(t)},children:t.description}),Object(f.jsx)("button",{className:"form__remove",type:"button",onClick:function(){return n(t)},children:"X"})]})})}))})]})}var O=n(3),h=n(11),_=n(12),v=[{description:"Finalize kickoff materials",state:!1},{description:"Refine objectives",state:!1},{description:"Identify key resources",state:!1},{description:"Update contractor agreement",state:!1},{description:"Conduct risk assesment",state:!1},{description:"Monitor budget",state:!1},{description:"Develop communication plan",state:!1}];var k=Object(O.b)({taskReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0,n=t,c=function(t){return t!==e.task},r=function(t){return t===e.task&&(t.state=!1===t.state),t};return e.type===o&&(n=[e.task].concat(Object(_.a)(n))),e.type===u&&(n=n.filter(c)),e.type===j&&(n=n.map(r)),n}});function x(t){var e=Object(O.c)(Object(O.a)(h.a));return Object(O.d)(k,t,e)}var g=function(){return Object(f.jsx)(a.a,{store:x(),children:Object(f.jsx)(p,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};n(26);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.a3b64f95.chunk.js.map