(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{136:function(e,t,a){e.exports=a.p+"static/media/les_tuman_derevia.712fe5c8.jpg"},143:function(e,t,a){e.exports={pageInfoFormWrap:"PageInfoForm_pageInfoFormWrap__11WbP",inputItem:"PageInfoForm_inputItem__3cHDp",nameItem:"PageInfoForm_nameItem__3qxnx",checkboxField:"PageInfoForm_checkboxField__3H4-7",textField:"PageInfoForm_textField__Z8AlQ",contactsTitle:"PageInfoForm_contactsTitle__30fsG",buttons:"PageInfoForm_buttons__2dQIq",errorsWrap:"PageInfoForm_errorsWrap__2s1Bt",errors:"PageInfoForm_errors__3iYhj",blinkError:"PageInfoForm_blinkError__3TXjz"}},144:function(e,t,a){e.exports={error:"Error_error__2sZ_4"}},158:function(e,t,a){"use strict";a.r(t);var o=a(29),n=a(0),r=a.n(n),c=a(17),s=a(3),l=a(9),i=a(31),m=a.n(i),u=a(136),f=a.n(u),p=a(19),d=a(18),_=a(22),E=a(93),b=a.n(E),g=a(96),P=r.a.memo((function(e){var t=e.status,a=e.updateUserStatus,c=e.isMyProfile,s=Object(n.useState)(!1),l=Object(o.a)(s,2),i=l[0],m=l[1];return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("div",{className:b.a.status},r.a.createElement(g.b,{initialValues:{status:t},onSubmit:function(e,t){var o=e.status;a(o),m(!1)}},(function(e){var t=e.handleSubmit;return r.a.createElement(g.a,{onBlur:t,autoFocus:!0,component:"input",name:"status",maxLength:"300"})}))):t||c?r.a.createElement("div",{className:b.a.status},r.a.createElement("span",{onClick:c?function(){m(!0)}:void 0,title:c?"Click to change your status":"",className:c?t?b.a.myStatus:b.a.enterStatus:""},t||"Enter your status...")):void 0)})),v=function(e){var t,a=e.contacts,o=!1;return a&&(t=Object.entries(a).map((function(e){return e[1]?(o=!0,r.a.createElement("div",{key:e[0],className:b.a.contactsItem},r.a.createElement("span",null,"".concat(e[0],": ")),e[1])):""}))),o?r.a.createElement("div",{className:b.a.contactsBlock},r.a.createElement("div",{className:b.a.contactsTitle},"Contacts:"),t):""},k=function(e){var t=e.aboutMe,a=e.lookingForAJob,o=e.lookingForAJobDescription;return r.a.createElement("div",{className:b.a.aboutMeBlock},t?r.a.createElement("div",{className:b.a.pageInfoRow},r.a.createElement("span",null,"About me:"),t):"",r.a.createElement("div",{className:b.a.pageInfoRow},r.a.createElement("span",null,"Looking for a job: "),a?"Yes":"No"),o?r.a.createElement("div",{className:b.a.pageInfoRow},o):"")},N=function(e){var t=e.isMyProfile,a=e.setPageEditMode,o=e.aboutMe,n=e.lookingForAJob,c=e.lookingForAJobDescription,s=e.contacts;return r.a.createElement("div",{className:b.a.personalInfoWrap},r.a.createElement("div",{className:b.a.topBorder},"Personal information",t&&r.a.createElement("button",{onClick:function(){return a(!0)},className:b.a.editModeButton,type:"button"},"Edit")),r.a.createElement("div",{className:b.a.personalInfo},r.a.createElement(k,{aboutMe:o,lookingForAJob:n,lookingForAJobDescription:c}),r.a.createElement(v,{contacts:s})))},I=function(e){var t=e.defaultAvatar,a=e.isMyProfile,o=e.status,n=e.updateUserStatus,c=e.changeMyPhoto,s=e.setPageEditMode,l=e.profile,i=l.contacts,m=l.photos,u=l.fullName,f=l.aboutMe,p=l.lookingForAJob,d=l.lookingForAJobDescription;return r.a.createElement("div",{className:b.a.pageWrap},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:m&&m.large||t,alt:"avatar"}),a&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}})),r.a.createElement("div",{className:b.a.pageInfoWrap},r.a.createElement("div",{className:b.a.pageName},u),r.a.createElement(P,{isMyProfile:a,status:o,updateUserStatus:n}),r.a.createElement(N,{isMyProfile:a,setPageEditMode:s,aboutMe:f,lookingForAJob:p,lookingForAJobDescription:d,contacts:i})))},h=a(90),F=a(115),M=F.a().shape({newPostInput:F.b().required().max(30)}),j=r.a.memo((function(e){return r.a.createElement(g.b,{initialValues:{newPostInput:""},validationSchema:M,onSubmit:function(t,a){e.addPost(t.newPostInput),a.resetForm()}},(function(e){var t=e.handleSubmit,a=e.errors,o=e.touched;return r.a.createElement("form",{className:b.a.newPostBlock,onSubmit:t},r.a.createElement(g.a,{name:"newPostInput",as:h.a,placeholder:"What's up?",error:a.newPostInput,touched:o.newPostInput}),r.a.createElement("div",{className:b.a.buttonWrap},r.a.createElement("button",{type:"submit"},"Add post")))}))})),y=r.a.memo((function(e){return r.a.createElement("div",{className:b.a.existingPostsBlock},e.posts.map((function(e){return r.a.createElement("div",{key:e.id,className:b.a.post},r.a.createElement("div",null,e.textPost),r.a.createElement("div",{className:b.a.likes},e.amountLikes," likes"))})).reverse())})),A=a(1),B=a.n(A),O=a(4),S=a(30),x=a(143),w=a.n(x),D=a(99),W=a.n(D),J=function(e){var t=e.errors,a=Object(n.useState)(0),c=Object(o.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=m[0],f=m[1];return Object(n.useEffect)((function(){var e,a;return t&&t.any&&t.any.length>1&&(e=setTimeout((function(){t&&t.any&&s<t.any.length-1?(l(s+1),f(!0),a=setTimeout((function(){f(!1)}),500)):(l(0),f(!0),a=setTimeout((function(){f(!1)}),500))}),2e3)),function(){clearTimeout(e),clearTimeout(a)}}),[t,s]),r.a.createElement("div",{className:w.a.errorsWrap},t.any?r.a.createElement("div",{className:W()(w.a.errors,Object(S.a)({},w.a.blinkError,u))},t.any[s]):"")},T=function(e){var t=e.setPageEditMode,a=e.profile,o=a.contacts,n=a.fullName,c=a.aboutMe,s=a.lookingForAJob,l=a.lookingForAJobDescription,i=e.changeUserData;return r.a.createElement(g.b,{initialValues:{contacts:o,fullName:n,aboutMe:c,lookingForAJob:s,lookingForAJobDescription:l},onSubmit:function(){var e=Object(O.a)(B.a.mark((function e(t,a){var o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:(o=e.sent)&&a.setErrors(o);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.handleSubmit,n=e.errors,c=e.touched,s=e.values;return r.a.createElement("div",{className:w.a.pageInfoFormWrap},r.a.createElement("form",{onSubmit:a},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Personal info"),r.a.createElement("div",{className:W()(w.a.fullName,w.a.inputItem)},r.a.createElement("div",{className:w.a.nameItem},"Your name: "),r.a.createElement("div",{className:w.a.textField},r.a.createElement(g.a,{as:h.a,name:"fullName",placeholder:"Your name",error:n.fullName,touched:c.fullName}))),r.a.createElement("div",{className:w.a.aboutMeBlock},r.a.createElement("div",{className:w.a.inputItem},r.a.createElement("div",{className:w.a.nameItem},"About me: "),r.a.createElement("div",{className:w.a.textField},r.a.createElement(g.a,{as:h.b,name:"aboutMe",placeholder:"About me",error:n.aboutMe,touched:c.aboutMe}))),r.a.createElement("div",{className:w.a.inputItem},r.a.createElement("label",{className:w.a.nameItem,htmlFor:"lookingForAJob"},"Looking for a job:"," "),r.a.createElement("div",{className:w.a.checkboxField},r.a.createElement(g.a,{type:"checkbox",name:"lookingForAJob"}))),r.a.createElement("div",{className:w.a.inputItem},r.a.createElement("div",{className:w.a.nameItem},"Your skills: "),r.a.createElement("div",{className:w.a.textField},r.a.createElement(g.a,{as:h.b,name:"lookingForAJobDescription",placeholder:"Description",error:n.lookingForAJobDescription,touched:c.lookingForAJobDescription})))),r.a.createElement("div",{className:w.a.contactsBlock},r.a.createElement("div",{className:w.a.contactsTitle},"Contacts:"),Object.entries(o).map((function(e){return r.a.createElement("div",{key:e[0],className:W()(w.a.contactsItem,w.a.inputItem)},r.a.createElement("div",{className:w.a.nameItem},"".concat(e[0],": ")),r.a.createElement("div",{className:w.a.textField},r.a.createElement(g.a,{as:h.a,name:"contacts.".concat(e[0]),value:s.contacts[e[0]]||"",error:n&&n.contacts&&n.contacts[e[0]],touched:c&&c.contacts&&c.contacts[e[0]]})))}))),r.a.createElement("div",{className:w.a.buttons},r.a.createElement("button",{type:"submit",className:w.a.saveButton},"Save"),r.a.createElement("button",{onClick:function(){return t(!1)},className:w.a.cancelButton,type:"button"},"Cancel"))),r.a.createElement(J,{errors:n})))}))},U=r.a.memo((function(e){var t=e.topImage,a=e.isMyProfile,c=e.profile,s=e.defaultAvatar,l=e.status,i=e.updateUserStatus,m=e.addPost,u=e.existingPosts,f=e.isAuth,p=e.changeMyPhoto,d=e.userId,_=e.changeUserData,E=Object(n.useState)(!1),g=Object(o.a)(E,2),P=g[0],v=g[1];return P?r.a.createElement(T,{setPageEditMode:v,profile:c,changeUserData:_}):r.a.createElement("div",{className:b.a.profile},r.a.createElement("div",{className:b.a.topImage},r.a.createElement("img",{src:t,alt:"cover"})),r.a.createElement("div",{className:b.a.contentBlockWrapper},r.a.createElement("div",{className:b.a.contentBlock},r.a.createElement(I,{isMyProfile:a,profile:c,defaultAvatar:s,status:l,updateUserStatus:i,changeMyPhoto:p,userId:d,setPageEditMode:v}),r.a.createElement("div",{className:b.a.postsBlock},f?r.a.createElement(j,{addPost:m}):"",r.a.createElement(y,{posts:u})))))})),C=a(144),q=a.n(C),R=function(){return r.a.createElement("div",{className:q.a.error},"Oops! Something went wrong...")},Y={updateUserStatus:d.j,getAuthUserData:p.b,addPost:d.a,getProfile:d.f,changeMyPhoto:d.b,changeUserData:d.c,setUserProfile:d.i,setErrorDownloadProfile:d.g};t.default=Object(l.d)(Object(c.b)((function(e){return{topImage:f.a,defaultAvatar:m.a,profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authUserId:e.auth.userId,existingPosts:e.profilePage.existingPosts,errorDownloadProfile:e.profilePage.errorDownloadProfile,isFetchingProfile:e.profilePage.isFetchingProfile}}),Y),s.g,r.a.memo)((function(e){var t=e.match.params.userId,a=e.authUserId,c=e.getProfile,l=e.isAuth,i=e.profile,m=e.errorDownloadProfile,u=e.setErrorDownloadProfile,f=e.setUserProfile,p=+t,d=Object(n.useState)(!1),E=Object(o.a)(d,2),b=E[0],g=E[1];return Object(n.useEffect)((function(){if(p)return a===p&&g(!0),c(p),function(){u(!1),f(null)}}),[p,a,c,f,u]),Object(n.useEffect)((function(){l||g(!1)}),[l]),p?r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(R,null),i?r.a.createElement(U,Object.assign({},e,{isMyProfile:b})):r.a.createElement(_.a,null)):l?r.a.createElement(s.a,{to:"/profile/".concat(a)}):r.a.createElement(s.a,{to:"/login"})}))},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var o=a(30),n=a(29),r=a(119),c=a(0),s=a.n(c),l=a(95),i=a.n(l),m=a(99),u=a.n(m),f=function(e){var t=e.error,a=e.touched,l=e.serverError,m=Object(r.a)(e,["error","touched","serverError"]),f=m.element,p=Object(c.useState)(!1),d=Object(n.a)(p,2),_=d[0],E=d[1];return Object(c.useEffect)((function(){var e;return t&&a&&(E(!0),e=setTimeout((function(){E(!1)}),1e3)),function(){return clearTimeout(e)}}),[t,a]),Object(c.useEffect)((function(){var e;return l&&(E(!0),e=setTimeout((function(){console.log("oh"),E(!1)}),1e3)),function(){return clearTimeout(e)}}),[l]),s.a.createElement(f,Object.assign({},m,{className:u()([i.a.defaultElement],Object(o.a)({},i.a.error,_))}))},p=function(e){return s.a.createElement(f,Object.assign({element:"input"},e))},d=function(e){return s.a.createElement(f,Object.assign({element:"textarea"},e))}},93:function(e,t,a){e.exports={profile:"Profile_profile__3cqaC",topImage:"Profile_topImage__1QeV6",contentBlockWrapper:"Profile_contentBlockWrapper__1FqB6",contentBlock:"Profile_contentBlock__65spg",pageWrap:"Profile_pageWrap__3msTY",avatar:"Profile_avatar__2HO6t",pageInfoWrap:"Profile_pageInfoWrap__1UdYi",pageName:"Profile_pageName__13q-Z",status:"Profile_status__1rx6s",myStatus:"Profile_myStatus__mCoRb",enterStatus:"Profile_enterStatus__1MqOo",personalInfoWrap:"Profile_personalInfoWrap__2PMRp",topBorder:"Profile_topBorder__1s0dm",editModeButton:"Profile_editModeButton__P3IND",personalInfo:"Profile_personalInfo__1EwfG",aboutMeBlock:"Profile_aboutMeBlock__1vcdq",pageInfoRow:"Profile_pageInfoRow__JDm_r",contactsBlock:"Profile_contactsBlock__1OIs0",contactsTitle:"Profile_contactsTitle__3FTfj",contactsItem:"Profile_contactsItem__30pyP",postsBlock:"Profile_postsBlock__zeNoh",newPostBlock:"Profile_newPostBlock__giv8A",buttonWrap:"Profile_buttonWrap__1RmpI",existingPostsBlock:"Profile_existingPostsBlock__2kvb8",post:"Profile_post__2MTw2",likes:"Profile_likes__2O56D"}},95:function(e,t,a){e.exports={defaultElement:"FormControls_defaultElement__3jSSc",error:"FormControls_error___hLaz"}}}]);
//# sourceMappingURL=4.911bdd01.chunk.js.map