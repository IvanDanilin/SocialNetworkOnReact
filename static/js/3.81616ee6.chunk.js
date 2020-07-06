(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[3],{104:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(0),o=a.n(r),i=a(17),u=a(3),c=a(9),l=a(31),s=a.n(l),f=a(89),m=a.n(f),d=a(19),p=a(18),b=a(23),v=a(86),g=a.n(v),E=a(2),h=a.n(E),P=a(4),O=a(83),_=o.a.memo((function(e){var t=e.status,a=e.updateUserStatus,i=e.isMyProfile,u=Object(r.useState)(!1),c=Object(n.a)(u,2),l=c[0],s=c[1];return o.a.createElement(o.a.Fragment,null,l?o.a.createElement("div",{className:g.a.status},o.a.createElement(O.b,{initialValues:{status:t},onSubmit:function(e,t){var n=e.status;n!==t.getState().initialValues.status&&a(n),s(!1)},render:function(e){var t=e.handleSubmit;return o.a.createElement(O.a,{onBlur:t,autoFocus:!0,component:"input",name:"status",maxLength:"300",parse:function(e){return e}})}})):t||i?o.a.createElement("div",{className:g.a.status},o.a.createElement("span",{onDoubleClick:i?function(){s(!0)}:void 0,title:i?"Double click to change your status":"",className:i?t?g.a.myStatus:g.a.enterStatus:""},t||"Enter your status...")):void 0)})),y=a(85),k=function(e){var t,a=e.contacts,n=e.pageEditMode,r=!1;return a&&(t=Object.entries(a).map((function(e){return e[1]||n?(r=!0,o.a.createElement("div",{key:e[0],className:g.a.contactsItem},o.a.createElement("span",null,"".concat(e[0],": ")),n?o.a.createElement(O.a,{component:y.a,name:"contacts.".concat(e[0])}):e[1])):null}))),r||n?o.a.createElement("div",{className:g.a.contactsBlock},o.a.createElement("div",{className:g.a.contactsTitle},"Contacts:"),t):""},j=function(e){var t=e.aboutMe,a=e.lookingForAJob,n=e.lookingForAJobDescription,r=e.pageEditMode;return o.a.createElement("div",{className:g.a.aboutMeBlock},r?o.a.createElement("div",{className:g.a.pageInfoRow},o.a.createElement("span",null,"About me:"),o.a.createElement(O.a,{component:y.b,name:"aboutMe",placeholder:"About me"})):t?o.a.createElement("div",{className:g.a.pageInfoRow},o.a.createElement("span",null,"About me:")," ",t):"",o.a.createElement("div",{className:g.a.pageInfoRow},o.a.createElement("span",null,"Looking for a job: "),r?o.a.createElement(O.a,{component:"input",type:"checkbox",name:"lookingForAJob"}):a?"Yes":"No"),r?o.a.createElement(O.a,{component:y.b,name:"lookingForAJobDescription",placeholder:"Description"}):n?o.a.createElement("div",{className:g.a.pageInfoRow},n):"")},S=function(e){var t=e.isMyProfile,a=e.setPageEditMode,n=e.pageEditMode,r=e.aboutMe,i=e.lookingForAJob,u=e.lookingForAJobDescription,c=e.contacts,l=e.submitError;return o.a.createElement("div",{className:g.a.personalInfoWrap},o.a.createElement("div",{className:g.a.topBorder},"Personal information",t&&!n&&o.a.createElement("button",{onClick:function(){return a(!0)},className:g.a.editModeButton,type:"button"},"Edit")),o.a.createElement("div",{className:g.a.personalInfo},o.a.createElement(j,{pageEditMode:n,aboutMe:r,lookingForAJob:i,lookingForAJobDescription:u}),o.a.createElement(k,{pageEditMode:n,contacts:c,isMyProfile:t})),n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"submit",className:g.a.saveButton},"Save"),o.a.createElement("button",{onClick:function(){return a(!1)},className:g.a.cancelButton,type:"button"},"Cancel"),l&&o.a.createElement("div",{className:g.a.error},l)))},w=function(e){var t=e.defaultAvatar,a=e.isMyProfile,n=e.status,r=e.updateUserStatus,i=e.changeMyPhoto,u=e.pageEditMode,c=e.setPageEditMode,l=e.submitError,s=e.profile,f=s.contacts,m=s.photos,d=s.fullName,p=s.aboutMe,b=s.lookingForAJob,v=s.lookingForAJobDescription;return o.a.createElement("div",{className:g.a.pageWrap},o.a.createElement("div",{className:g.a.avatar},o.a.createElement("img",{src:m&&m.large||t,alt:"avatar"}),a&&o.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})),o.a.createElement("div",{className:g.a.pageInfoWrap},o.a.createElement("div",{className:g.a.pageName},u?o.a.createElement(O.a,{component:"input",name:"fullName"}):d),o.a.createElement(_,{isMyProfile:a,status:n,updateUserStatus:r}),o.a.createElement(S,{isMyProfile:a,setPageEditMode:c,pageEditMode:u,aboutMe:p,lookingForAJob:b,lookingForAJobDescription:v,contacts:f,submitError:l})))},N=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),i=a[0],u=a[1],c=e.profile,l=c.contacts,s=c.fullName,f=c.aboutMe,m=c.lookingForAJob,d=c.lookingForAJobDescription;return i?o.a.createElement(O.b,{initialValues:{contacts:l,fullName:s,aboutMe:f,lookingForAJob:m,lookingForAJobDescription:d},onSubmit:function(){var t=Object(P.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.changeUserData(a);case 2:if(!(n=t.sent)){t.next=5;break}return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),render:function(t){var a=t.handleSubmit,n=t.submitError;return o.a.createElement("form",{onSubmit:a},o.a.createElement(w,Object.assign({},e,{pageEditMode:i,setPageEditMode:u,submitError:n})))}}):o.a.createElement(w,Object.assign({setPageEditMode:u,pageEditMode:i},e))},F=a(87),M=o.a.memo((function(e){return o.a.createElement(O.b,{onSubmit:function(t,a){e.addPost(t.newPostInput),setTimeout(a.restart)},render:function(e){var t=e.handleSubmit;return o.a.createElement("form",{className:g.a.newPostBlock,onSubmit:t},o.a.createElement(O.a,{name:"newPostInput",component:y.a,validate:Object(F.a)("",1e3,"Enter the text of your message"),placeholder:"What's up?"}),o.a.createElement("div",{className:g.a.buttonWrap},o.a.createElement("button",{type:"submit"},"Add post")))}})})),B=o.a.memo((function(e){return o.a.createElement("div",{className:g.a.existingPostsBlock},e.posts.map((function(e){return o.a.createElement("div",{key:e.id,className:g.a.post},o.a.createElement("div",null,e.textPost),o.a.createElement("div",{className:g.a.likes},e.amountLikes," likes"))})).reverse())})),A=o.a.memo((function(e){var t=e.topImage,a=e.isMyProfile,n=e.profile,r=e.defaultAvatar,i=e.status,u=e.updateUserStatus,c=e.addPost,l=e.existingPosts,s=e.isAuth,f=e.changeMyPhoto,m=e.userId,d=e.changeUserData;return o.a.createElement("div",{className:g.a.profile},o.a.createElement("div",{className:g.a.topImage},o.a.createElement("img",{src:t,alt:"cover"})),o.a.createElement("div",{className:g.a.contentBlockWrapper},o.a.createElement("div",{className:g.a.contentBlock},o.a.createElement(N,{isMyProfile:a,profile:n,defaultAvatar:r,status:i,updateUserStatus:u,changeMyPhoto:f,userId:m,changeUserData:d}),o.a.createElement("div",{className:g.a.postsBlock},s?o.a.createElement(M,{addPost:c}):"",o.a.createElement(B,{posts:l})))))})),I=a(90),x=a.n(I),D=function(){return o.a.createElement("div",{className:x.a.error},"Oops! Something went wrong...")},V={updateUserStatus:p.j,getAuthUserData:d.b,addPost:p.a,getProfile:p.f,changeMyPhoto:p.b,changeUserData:p.c,setUserProfile:p.i,setErrorDownloadProfile:p.g};t.default=Object(c.d)(Object(i.b)((function(e){return{topImage:m.a,defaultAvatar:s.a,profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authUserId:e.auth.userId,existingPosts:e.profilePage.existingPosts,errorDownloadProfile:e.profilePage.errorDownloadProfile,isFetchingProfile:e.profilePage.isFetchingProfile}}),V),u.g)((function(e){var t=e.match.params.userId,a=e.authUserId,i=e.getProfile,c=e.isAuth,l=e.profile,s=e.errorDownloadProfile,f=e.setErrorDownloadProfile,m=e.setUserProfile,d=+t,p=Object(r.useState)(!1),v=Object(n.a)(p,2),g=v[0],E=v[1];return Object(r.useEffect)((function(){if(d)return a===d&&E(!0),i(d),function(){f(!1),m(null)}}),[d,a,i,m,f]),Object(r.useEffect)((function(){c||E(!1)}),[c]),d?o.a.createElement(o.a.Fragment,null,s&&o.a.createElement(D,null),l?o.a.createElement(A,Object.assign({},e,{userId:a,isMyProfile:g})):o.a.createElement(b.a,null)):c?o.a.createElement(u.a,{to:"/profile/".concat(a)}):o.a.createElement(u.a,{to:"/login"})}))},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return S})),a.d(t,"b",(function(){return E}));var n=a(1),r=a(5),o=a(0),i=a.n(o),u=a(21);function c(e,t,a){var n=e.render,i=e.children,u=e.component,c=Object(r.a)(e,["render","children","component"]);if(u)return Object(o.createElement)(u,Object.assign(t,c,{children:i,render:n}));if(n)return n(void 0===i?Object.assign(t,c):Object.assign(t,c,{children:i}));if("function"!==typeof i)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+a);return i(Object.assign(t,c))}function l(e,t,a){void 0===a&&(a=function(e,t){return e===t});var n=i.a.useRef(e);i.a.useEffect((function(){a(e,n.current)||(t(),n.current=e)}))}var s=function(e,t){if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var r=Object.prototype.hasOwnProperty.bind(t),o=0;o<a.length;o++){var i=a[o];if(!r(i)||e[i]!==t[i])return!1}return!0},f=function(e){return!(!e||"function"!==typeof e.stopPropagation)},m=Object(o.createContext)();function d(e){var t=i.a.useRef(e);return i.a.useEffect((function(){t.current=e})),t}var p=function(e,t,a){a.forEach((function(a){Object.defineProperty(e,a,{get:function(){return t[a]},enumerable:!0})}))},b=function(e,t){return p(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},v={"final-form":u.e,"react-final-form":"6.5.0"},g=u.d.reduce((function(e,t){return e[t]=!0,e}),{});function E(e){var t=e.debug,a=e.decorators,p=e.destroyOnUnregister,E=e.form,h=e.initialValues,P=e.initialValuesEqual,O=e.keepDirtyOnReinitialize,_=e.mutators,y=e.onSubmit,k=e.subscription,j=void 0===k?g:k,S=e.validate,w=e.validateOnBlur,N=Object(r.a)(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),F={debug:t,destroyOnUnregister:p,initialValues:h,keepDirtyOnReinitialize:O,mutators:_,onSubmit:y,validate:S,validateOnBlur:w},M=function(e){var t=i.a.useRef();return t.current||(t.current=e()),t.current}((function(){var e=E||Object(u.b)(F);return e.pauseValidation(),e})),B=Object(o.useState)((function(){var e={};return M.subscribe((function(t){e=t}),j)(),e})),A=B[0],I=B[1],x=d(A);Object(o.useEffect)((function(){M.isValidationPaused()&&M.resumeValidation();var e=[M.subscribe((function(e){s(e,x.current)||I(e)}),j)].concat(a?a.map((function(e){return e(M)})):[]);return function(){M.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[a]),l(t,(function(){M.setConfig("debug",t)})),l(p,(function(){M.destroyOnUnregister=!!p})),l(O,(function(){M.setConfig("keepDirtyOnReinitialize",O)})),l(h,(function(){M.setConfig("initialValues",h)}),P||s),l(_,(function(){M.setConfig("mutators",_)})),l(y,(function(){M.setConfig("onSubmit",y)})),l(S,(function(){M.setConfig("validate",S)})),l(w,(function(){M.setConfig("validateOnBlur",w)}));var D={form:Object(n.a)({},M,{reset:function(e){f(e)?M.reset():M.reset(e)}}),handleSubmit:function(e){return e&&("function"===typeof e.preventDefault&&e.preventDefault(),"function"===typeof e.stopPropagation&&e.stopPropagation()),M.submit()}};return b(D,A),Object(o.createElement)(m.Provider,{value:M},c(Object(n.a)({},N,{__versions:v}),D,"ReactFinalForm"))}function h(e){var t=Object(o.useContext)(m);if(!t)throw new Error((e||"useForm")+" must be used inside of a <Form> component");return t}var P="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,O=u.c.reduce((function(e,t){return e[t]=!0,e}),{}),_=function(e,t){return void 0===e?"":e},y=function(e,t){return""===e?void 0:e},k=function(e,t){return e===t};function j(e,t){void 0===t&&(t={});var a=t,r=a.afterSubmit,i=a.allowNull,u=a.component,c=a.data,l=a.defaultValue,s=a.format,f=void 0===s?_:s,m=a.formatOnBlur,b=a.initialValue,v=a.multiple,g=a.parse,E=void 0===g?y:g,j=a.subscription,S=void 0===j?O:j,w=a.type,N=a.validateFields,F=a.value,M=h("useField"),B=d(t),A=function(t,a){return M.registerField(e,t,S,{afterSubmit:r,beforeSubmit:function(){var t=B.current,a=t.beforeSubmit,n=t.formatOnBlur,r=t.format,o=void 0===r?_:r;if(n){var i=M.getFieldState(e).value,u=o(i,e);u!==i&&M.change(e,u)}return a&&a()},data:c,defaultValue:l,getValidator:function(){return B.current.validate},initialValue:b,isEqual:function(e,t){return(B.current.isEqual||k)(e,t)},silent:a,validateFields:N})},I=Object(o.useRef)(!0),x=Object(o.useState)((function(){var e={},t=M.destroyOnUnregister;return M.destroyOnUnregister=!1,A((function(t){e=t}),!0)(),M.destroyOnUnregister=t,e})),D=x[0],V=x[1];Object(o.useEffect)((function(){return A((function(e){I.current?I.current=!1:V(e)}),!1)}),[e,c,l,b]);var U={onBlur:Object(o.useCallback)((function(e){if(D.blur(),m){var t=M.getFieldState(D.name);D.change(f(t.value,D.name))}}),[D.name,f,m]),onChange:Object(o.useCallback)((function(t){var a=t&&t.target?function(e,t,a,n){if(!n&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(n&&e.nativeEvent)return e.nativeEvent.text;var r=e.target,o=r.type,i=r.value,u=r.checked;switch(o){case"checkbox":if(void 0!==a){if(u)return Array.isArray(t)?t.concat(a):[a];if(!Array.isArray(t))return t;var c=t.indexOf(a);return c<0?t:t.slice(0,c).concat(t.slice(c+1))}return!!u;case"select-multiple":return function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options);default:return i}}(t,D.value,F,P):t;D.change(E(a,e))}),[F,e,E,D.change,D.value,w]),onFocus:Object(o.useCallback)((function(e){D.focus()}),[])},C={};!function(e,t){p(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])}(C,D);var R=Object(n.a)({name:e,get value(){var t=D.value;return m?"input"===u&&(t=_(t)):t=f(t,e),null!==t||i||(t=""),"checkbox"===w||"radio"===w?F:"select"===u&&v?t||[]:t},get checked(){return"checkbox"===w?void 0===F?!!D.value:!(!Array.isArray(D.value)||!~D.value.indexOf(F)):"radio"===w?D.value===F:void 0}},U);return v&&(R.multiple=v),void 0!==w&&(R.type=w),{input:R,meta:C}}var S=Object(o.forwardRef)((function(e,t){var a=e.afterSubmit,i=e.allowNull,u=e.beforeSubmit,l=e.children,s=e.component,f=e.data,m=e.defaultValue,d=e.format,p=e.formatOnBlur,b=e.initialValue,v=e.isEqual,g=e.multiple,E=e.name,h=e.parse,P=e.subscription,O=e.type,_=e.validate,y=e.validateFields,k=e.value,S=Object(r.a)(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),w=j(E,{afterSubmit:a,allowNull:i,beforeSubmit:u,children:l,component:s,data:f,defaultValue:m,format:d,formatOnBlur:p,initialValue:b,isEqual:v,multiple:g,parse:h,subscription:P,type:O,validate:_,validateFields:y,value:k});if("function"===typeof l)return l(Object(n.a)({},w,S));if("string"===typeof s)return Object(o.createElement)(s,Object(n.a)({},w.input,{children:l,ref:t},S));if(!E)throw new Error("prop name cannot be undefined in <Field> component");return c(Object(n.a)({children:l,component:s,ref:t},S),w,"Field("+E+")")}))},85:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return c}));var r=a(0),o=a.n(r),i=function(e){var t=e.input,a=e.meta,r=n(e,["input","meta"]),i=r.element;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,Object.assign({},t,{placeholder:r.placeholder,autoFocus:r.autoFocus,maxLength:r.maxLength})),(a.submitError||a.error)&&(t.value.length>5||a.touched)&&o.a.createElement("span",null,a.submitError||a.error))},u=function(e){return o.a.createElement(i,Object.assign({element:"input"},e))},c=function(e){return o.a.createElement(i,Object.assign({element:"textarea"},e))}},86:function(e,t,a){e.exports={profile:"Profile_profile__3cqaC",topImage:"Profile_topImage__1QeV6",contentBlockWrapper:"Profile_contentBlockWrapper__1FqB6",contentBlock:"Profile_contentBlock__65spg",pageWrap:"Profile_pageWrap__3msTY",avatar:"Profile_avatar__2HO6t",pageInfoWrap:"Profile_pageInfoWrap__1UdYi",pageName:"Profile_pageName__13q-Z",status:"Profile_status__1rx6s",myStatus:"Profile_myStatus__mCoRb",enterStatus:"Profile_enterStatus__1MqOo",personalInfoWrap:"Profile_personalInfoWrap__2PMRp",topBorder:"Profile_topBorder__1s0dm",editModeButton:"Profile_editModeButton__P3IND",personalInfo:"Profile_personalInfo__1EwfG",aboutMeBlock:"Profile_aboutMeBlock__1vcdq",pageInfoRow:"Profile_pageInfoRow__JDm_r",contactsBlock:"Profile_contactsBlock__1OIs0",contactsTitle:"Profile_contactsTitle__3FTfj",contactsItem:"Profile_contactsItem__30pyP",postsBlock:"Profile_postsBlock__zeNoh",newPostBlock:"Profile_newPostBlock__giv8A",buttonWrap:"Profile_buttonWrap__1RmpI",existingPostsBlock:"Profile_existingPostsBlock__2kvb8",post:"Profile_post__2MTw2",likes:"Profile_likes__2O56D"}},87:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return function(t){return t?void 0:e}},r=function(e,t,a){return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce((function(t,a){return t||a(e)}),void 0)}}(function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}}(e),function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}(t),n(a))}},89:function(e,t,a){e.exports=a.p+"static/media/les_tuman_derevia.712fe5c8.jpg"},90:function(e,t,a){e.exports={error:"Error_error__2sZ_4"}}}]);
//# sourceMappingURL=3.81616ee6.chunk.js.map