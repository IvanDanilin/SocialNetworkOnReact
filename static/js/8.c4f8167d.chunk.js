(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[8],{151:function(e,t,n){e.exports={messages:"Messages_messages__1W4yH",message:"Messages_message__2OzvQ",newMessageWrap:"Messages_newMessageWrap__2Z1RN",newMessage:"Messages_newMessage__LsmP3",emptyBlock:"Messages_emptyBlock__3gvPp"}},159:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(4),s=n(0),c=n.n(s),u=n(16),i=n(3),f=n(10),l=n(88),m=n(43),p=n(93),b=n(151),g=n.n(b),y=n(100),d=n(119),h=d.a().shape({newMessage:d.b()}),v=function(e){return e.messages.map((function(e){return c.a.createElement("div",{key:e.id,className:g.a.message},e.message)}))},E=function(e){return c.a.createElement(y.b,{initialValues:{newMessage:""},validationSchema:h,onSubmit:function(){var t=Object(o.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.newMessage){t.next=5;break}return t.next=3,e.sendMessage(n.newMessage,e.userId);case 3:r.resetForm(),e.scrollToBottom();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},(function(e){var t=e.handleSubmit,n=e.values,r=e.errors,a=e.touched;return c.a.createElement("form",{className:g.a.newMessage,onSubmit:t},c.a.createElement(y.a,{as:p.b,name:"newMessage",placeholder:"Enter your message...",serverError:r.newMessage,touched:a.newMessage,maxLength:"500",onKeyDown:function(e){(e.ctrlKey||e.altKey)&&"Enter"===e.key&&t()}}),n.newMessage&&c.a.createElement("button",{type:"submit"},"Send"))}))};t.default=Object(f.d)(Object(u.b)((function(e){return{dialogs:e.dialogs}}),{sendMessage:m.b}),i.h,l.a)((function(e){var t=e.match.params.userId,n=function(){window.scrollTo(0,document.body.scrollHeight)};return Object(s.useEffect)((function(){n()}),[]),c.a.createElement("div",{className:g.a.messages},c.a.createElement("div",{className:g.a.openMessages},c.a.createElement(i.b,{path:"/dialog/".concat(t),render:function(){return c.a.createElement(v,{messages:e.dialogs[t].messagesAll})}})),c.a.createElement("div",{className:g.a.newMessageWrap},c.a.createElement("div",{className:g.a.emptyBlock}),c.a.createElement(E,{scrollToBottom:n,sendMessage:e.sendMessage,userId:t})))}))},88:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return g}));var f=n(0),l=n.n(f),m=n(3),p=n(16),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(g,t);var n,u,f,p,b=(n=g,function(){var e,t=s(n);if(c()){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return i(this,e)});function g(){return r(this,g),b.apply(this,arguments)}return u=g,(f=[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(m.a,{to:"/login"})}}])&&a(u.prototype,f),p&&a(u,p),g}(l.a.Component);return Object(p.b)(b)(t)}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(20),a=n(24),o=n(123),s=n(0),c=n.n(s),u=n(97),i=n.n(u),f=n(25),l=n.n(f),m=function(e){var t=e.error,n=e.touched,u=e.serverError,f=Object(o.a)(e,["error","touched","serverError"]),m=f.element,p=Object(s.useState)(!1),b=Object(a.a)(p,2),g=b[0],y=b[1];return Object(s.useEffect)((function(){var e;return t&&n&&(y(!0),e=setTimeout((function(){y(!1)}),1e3)),function(){return clearTimeout(e)}}),[t,n]),Object(s.useEffect)((function(){var e;return u&&(y(!0),e=setTimeout((function(){y(!1)}),1e3)),function(){return clearTimeout(e)}}),[u]),c.a.createElement(m,Object.assign({},f,{className:l()([i.a.defaultElement],Object(r.a)({},i.a.error,g))}))},p=function(e){return c.a.createElement(m,Object.assign({element:"input"},e))},b=function(e){return c.a.createElement(m,Object.assign({element:"textarea"},e))}},97:function(e,t,n){e.exports={defaultElement:"FormControls_defaultElement__3jSSc",error:"FormControls_error___hLaz"}}}]);
//# sourceMappingURL=8.c4f8167d.chunk.js.map