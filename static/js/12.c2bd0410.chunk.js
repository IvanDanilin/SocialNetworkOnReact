(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[12],{145:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return y}));var l=n(0),f=n.n(l),m=n(4),p=n(17),g=function(e){return{isAuth:e.auth.isAuth}},y=function(e){var t=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,t);var n,u,l,p,g=(n=y,function(){var e,t=o(n);if(c()){var r=o(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return i(this,e)});function y(){return r(this,y),g.apply(this,arguments)}return u=y,(l=[{key:"render",value:function(){return this.props.isAuth?f.a.createElement(e,this.props):f.a.createElement(m.a,{to:"/login"})}}])&&a(u.prototype,l),p&&a(u,p),y}(f.a.Component);return Object(p.b)(g)(t)}},232:function(e,t,n){e.exports={messages:"Messages_messages__3KYXR",message:"Messages_message__3JBr6",myMessage:"Messages_myMessage__dezEt",newMessageWrap:"Messages_newMessageWrap__39FS-",newMessage:"Messages_newMessage__2Qhtq",newMessageField:"Messages_newMessageField__35jLz",emptyBlock:"Messages_emptyBlock__1_Xx2"}},263:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(5),o=n(27),c=n(0),u=n.n(c),i=n(17),l=n(4),f=n(12),m=n(145),p=n(69),g=n(232),y=n.n(g),b=n(159),d=n(164),h=n(28),w=n.n(h),M=n(137),_=n(267),v=d.a().shape({newMessage:d.b().max(10)}),E=function(e){return e.messages.map((function(e){return u.a.createElement("div",{key:e.id,className:w()(y.a.message,Object(o.a)({},y.a.myMessage,e.myMessage))},e.message)}))},O=function(e){return u.a.createElement(b.b,{initialValues:{newMessage:""},validationSchema:v,onSubmit:function(){var t=Object(s.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.newMessage){t.next=5;break}return t.next=3,e.sendMessage(n.newMessage,e.userId);case 3:r.resetForm(),e.scrollToBottom();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},(function(e){var t=e.handleSubmit,n=e.values,r=e.errors,a=e.touched;return u.a.createElement(M.a,{component:"form",className:y.a.newMessage,onSubmit:t,bgcolor:"primary.main"},u.a.createElement(b.a,{className:y.a.newMessageField,as:_.a,name:"newMessage",placeholder:"Enter your message...",error:r.newMessage,touched:a.newMessage,onKeyDown:function(e){(e.ctrlKey||e.altKey)&&"Enter"===e.key&&t()},multiline:!0,rowsMax:4,variant:"outlined"}),n.newMessage&&u.a.createElement("button",{type:"submit"},"Send"))}))};t.default=Object(f.d)(Object(i.b)((function(e){return{dialogs:e.dialogs}}),{sendMessage:p.b}),l.h,m.a)((function(e){var t=e.match.params.userId,n=function(){window.scrollTo(0,document.body.scrollHeight)};return Object(c.useEffect)((function(){n()}),[]),u.a.createElement(M.a,{className:y.a.messages,bgcolor:"primary.light"},u.a.createElement(l.b,{path:"/dialog/".concat(t),render:function(){return u.a.createElement(E,{messages:e.dialogs[t].messagesAll})}}),u.a.createElement("div",{className:y.a.newMessageWrap},u.a.createElement("div",{className:y.a.emptyBlock}),u.a.createElement(O,{scrollToBottom:n,sendMessage:e.sendMessage,userId:t})))}))}}]);
//# sourceMappingURL=12.c2bd0410.chunk.js.map