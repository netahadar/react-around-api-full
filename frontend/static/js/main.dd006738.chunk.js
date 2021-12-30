(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(19),c=n.n(i),o=n(8),r=(n(30),n(24)),l=n(2),u=n(3),d=n.p+"static/media/logo.c7581985.svg",p=n(0);function j(e){var t=e.link,n=e.text,a=e.loggedIn,s=e.email,i=e.onLogOut;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:d,alt:"around the u.s. logo"}),Object(p.jsx)("div",{className:"header__container",children:a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"header__email",children:s}),Object(p.jsx)(o.b,{to:t,className:"header__link",onClick:i,children:"Log Out"})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.b,{to:t,className:"header__link",children:n})})})]})}var b=s.a.createContext();function h(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,i=e.onDeletePostClick,c=s.a.useContext(b);var o=t.owner===c._id,r="gallery__trash-button ".concat(o?"gallery__trash-button_visible":"gallery__trash-button_hidden"),l=t.likes.some((function(e){return e._id===c._id})),u="gallery__like-button ".concat(l&&"gallery__like-button_active");return Object(p.jsxs)("li",{className:"gallery__item",children:[Object(p.jsx)("button",{className:r,type:"button","aria-label":"delete button",onClick:function(){i(t)}}),Object(p.jsx)("div",{className:"gallery__photo",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(p.jsxs)("div",{className:"gallery__description",children:[Object(p.jsx)("h2",{className:"gallery__text",children:t.name}),Object(p.jsxs)("div",{className:"gallery__like-container",children:[Object(p.jsx)("button",{className:u,type:"button","aria-label":"like button",onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"gallery__like-counter",children:t.likes.length})]})]})]})}function m(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,a=e.onEditAvatarClick,i=e.onDeletePostClick,c=e.onCardClick,o=e.cards,r=e.onCardLike,l=s.a.useContext(b);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__avatar-container",style:{backgroundImage:'url("'.concat(l.avatar,'")')},children:Object(p.jsx)("button",{className:"profile__avatar-edit",onClick:a})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-title",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"edit button",onClick:t})]}),Object(p.jsx)("p",{className:"profile__job-description",children:l.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"add button",onClick:n})]}),Object(p.jsx)("section",{className:"gallery",children:Object(p.jsx)("ul",{className:"gallery__list",children:o.map((function(e){return Object(p.jsx)(h,{card:e,onCardClick:c,onCardLike:r,onDeletePostClick:i},e._id)}))})})]})}function f(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyrights",children:"\xa9 2021 Neta Hadar Itzhak"})})}function _(e){var t=e.card,n=e.onClose;return Object(p.jsx)("div",{className:"popup popup_type_photo ".concat(t.name?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container popup__container_type_photo",children:[Object(p.jsx)("button",{className:"popup__close-button popup__close-button_type_photo",type:"button",onClick:n}),Object(p.jsx)("div",{className:"popup__photo",style:{backgroundImage:"url(".concat(t.link,")")}}),Object(p.jsx)("h3",{className:"popup__text",children:t.name})]})})}var O=n(22),g=n(23),v=new(function(){function e(t,n){Object(O.a)(this,e),this._baseUrl=t,this._headers=n,this.fetchCall=this.fetchCall.bind(this)}return Object(g.a)(e,[{key:"fetchCall",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("ERROR: ".concat(e.statusText))}))}},{key:"getUserInfo",value:function(){return this.fetchCall("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"setUserAvatar",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}},{key:"getInitialCards",value:function(){return this.fetchCall("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"createNewCard",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"_addLike",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"_dislike",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._dislike(e):this._addLike(e)}}]),e}())("http://netahadar.students.nomoreparties.sbs",{authorization:"Bearer ".concat(localStorage.jwt),"Content-Type":"application/json"});function x(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[Object(p.jsx)("h2",{className:"popup__form-title",children:e.title}),e.children,Object(p.jsx)("button",{className:"popup__form-submit-button",type:"submit",children:e.buttonTitle})]})]})})}function C(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,i=s.a.useState(""),c=Object(l.a)(i,2),o=c[0],r=c[1],u=s.a.useState(""),d=Object(l.a)(u,2),j=d[0],h=d[1];var m=s.a.useContext(b);return s.a.useEffect((function(){r(m.name),h(m.about)}),[m,t]),Object(p.jsxs)(x,{name:"profile",title:"Edit Profile",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:o,about:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"name-input",type:"text",name:"name",value:o,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"full name",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{id:"name-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"job-input",type:"text",name:"about",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");h(t)},placeholder:"job title",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{id:"job-input-error"})]})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,i=s.a.useRef();return Object(p.jsxs)(x,{name:"avatar",title:"Change profile picture",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault();var t=i.current.value.replace(/[*|\"<>[\]{}`;&$]+/," ");a({avatar:t})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"avatar-link",type:"url",name:"link",placeholder:"avatar link",ref:i,required:!0}),Object(p.jsx)("span",{id:"avatar-link-error"})]})}function y(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlaceSubmit,i=s.a.useState(""),c=Object(l.a)(i,2),o=c[0],r=c[1],u=s.a.useState(""),d=Object(l.a)(u,2),j=d[0],b=d[1];return s.a.useEffect((function(){r(""),b("")}),[t]),Object(p.jsxs)(x,{name:"post",title:"New place",buttonTitle:"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:o,link:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"title-input",type:"text",name:"name",value:o,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(p.jsx)("span",{id:"title-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"link-input",type:"url",name:"link",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");b(t)},placeholder:"Image link",required:!0}),Object(p.jsx)("span",{id:"link-input-error"})]})}function N(e){var t=e.isOpen,n=e.onClose,a=e.onDeletePostSubmit;return Object(p.jsx)(x,{name:"delete",title:"Are you sure?",buttonTitle:"Yes",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()}})}var S=n(11),w=n(9);function L(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__frame",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(p.jsx)("img",{src:e.src,className:"popup__status-image",alt:"request status"}),Object(p.jsx)("h2",{className:"popup__title",children:e.title})]})})}var E=n.p+"static/media/fail.df8eddf6.svg";function P(e){var t=e.onLogin,n=e.onClose,a=e.isOpen,i=s.a.useState({email:"",password:""}),c=Object(l.a)(i,2),r=c[0],u=c[1];function d(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");u(Object(w.a)(Object(w.a)({},r),{},Object(S.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Log In"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:r.email,onChange:d}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:r.password,onChange:d}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Log In"})]}),Object(p.jsx)(o.b,{to:"/signup",className:"signing__link",children:"Not a member yet? Sign up here!"})]}),Object(p.jsx)(L,{isOpen:a,name:"info",title:"Oops, something went wrong! Please try again.",src:E,onClose:n})]})}var I=n.p+"static/media/success.1b6082f8.svg";function U(e){var t=e.onRegister,n=e.onClose,a=e.isOpen,i=e.isSuccess,c=s.a.useState({email:"",password:""}),r=Object(l.a)(c,2),u=r[0],d=r[1];function j(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");d(Object(w.a)(Object(w.a)({},u),{},Object(S.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Sign Up"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(u)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:u.email,onChange:j}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:u.password,onChange:j}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Sign Up"})]}),Object(p.jsx)(o.b,{to:"/signin",className:"signing__link",children:"Already a member? Log in here!"})]}),Object(p.jsx)(L,{isOpen:a,name:"info",title:i?"Success! You have now been registered.":"Oops, something went wrong! Please try again.",src:i?I:E,onClose:n})]})}var T=n(25),A=["children","loggedIn"];var D=function(e){var t=e.children,n=e.loggedIn,a=Object(T.a)(e,A);return Object(p.jsx)(u.b,Object(w.a)(Object(w.a)({},a),{},{children:n?t:Object(p.jsx)(u.a,{to:"/signin"})}))},q="http://netahadar.students.nomoreparties.sbs";var F=function(){var e=Object(u.g)(),t=s.a.useState(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],c=s.a.useState(!1),o=Object(l.a)(c,2),d=o[0],h=o[1],O=s.a.useState(!1),g=Object(l.a)(O,2),x=g[0],S=g[1],w=s.a.useState(!1),L=Object(l.a)(w,2),E=L[0],I=L[1],T=s.a.useState(!1),A=Object(l.a)(T,2),F=A[0],J=A[1],$=s.a.useState(!1),R=Object(l.a)($,2),B=R[0],z=R[1],H=s.a.useState({name:"",link:""}),G=Object(l.a)(H,2),Y=G[0],M=G[1],K=s.a.useState({name:"",about:"",avatar:"",_id:""}),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=s.a.useState([]),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ne=s.a.useState({_id:""}),ae=Object(l.a)(ne,2),se=ae[0],ie=ae[1],ce=s.a.useState(!1),oe=Object(l.a)(ce,2),re=oe[0],le=oe[1],ue=s.a.useState(""),de=Object(l.a)(ue,2),pe=de[0],je=de[1],be=s.a.useState(""),he=Object(l.a)(be,2);function me(){localStorage.getItem("jwt")&&function(e){return v.fetchCall("".concat(q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}(localStorage.getItem("jwt")).then((function(t){t&&(le(!0),je(t.email),W({name:t.name,about:t.about,avatar:t.avatar,_id:t._id}),v._headers={authorization:"Bearer ".concat(localStorage.jwt),"Content-Type":"application/json"},e.push("/"))})).catch(console.log)}function fe(){i(!1),h(!1),S(!1),I(!1),J(!1),M({name:"",link:""})}return he[0],he[1],s.a.useEffect((function(){v.getInitialCards().then((function(e){te(e)})).catch(console.log)}),[]),s.a.useEffect((function(){me()}),[]),s.a.useEffect((function(){var e=function(e){"Escape"===e.key&&fe()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(p.jsx)(b.Provider,{value:V,children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(u.d,{children:[Object(p.jsxs)(u.b,{path:"/signup",children:[Object(p.jsx)(j,{link:"/signin",text:"Log In",loggedIn:re}),Object(p.jsx)(U,{onRegister:function(t){(function(e){var t=e.email,n=e.password;return v.fetchCall("".concat(q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){if(e)return e;throw new Error("User with this email address already exists")}))})(t).then((function(){e.push("/.signin"),z(!0)})).catch((function(e){console.log(e),z(!1)})).finally((function(){J(!0)}))},onClose:fe,isOpen:F,isSuccess:B})]}),Object(p.jsxs)(u.b,{path:"/signin",children:[Object(p.jsx)(j,{link:"/signup",text:"Sign Up",loggedIn:re}),Object(p.jsx)(P,{onLogin:function(e){(function(e){var t=e.email,n=e.password;return v.fetchCall("".concat(q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){if(e)return localStorage.setItem("jwt",e.token);throw new Error("the user with the specified email not found")}))})(e).then(me).catch((function(e){console.log(e),J(!0)}))},onClose:fe,isOpen:F})]}),Object(p.jsxs)(D,{path:"/",loggedIn:re,children:[Object(p.jsx)(j,{link:"/signin",text:"Log Out",loggedIn:re,email:pe,onLogOut:function(){le(!1),localStorage.removeItem("jwt")}}),Object(p.jsx)(m,{onEditProfileClick:function(){h(!0)},onAddPlaceClick:function(){S(!0)},onEditAvatarClick:function(){i(!0)},onDeletePostClick:function(e){I(!0),ie({_id:e._id})},onCardClick:function(e){M({name:e.name,link:e.link})},cards:ee,onCardLike:function(e){var t=e.likes.some((function(e){return e===V._id}));v.changeLikeCardStatus(e._id,t).then((function(t){te((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch(console.log)}}),Object(p.jsx)(f,{}),Object(p.jsxs)("section",{children:[Object(p.jsx)(C,{isOpen:d,onClose:fe,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){W({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),fe()})).catch(console.log)}}),Object(p.jsx)(y,{isOpen:x,onClose:fe,onAddPlaceSubmit:function(e){v.createNewCard(e).then((function(e){Array.isArray(e)?te([e].concat(Object(r.a)(ee))):console.log("invalid card link"),fe()})).catch(console.log)}}),Object(p.jsx)(_,{card:Y,onClose:fe}),Object(p.jsx)(N,{isOpen:E,onClose:fe,onDeletePostSubmit:function(){v.deleteCard(se._id).then((function(){var e=ee.filter((function(e){return e._id!==se._id}));te(e),fe()})).catch(console.log)}}),Object(p.jsx)(k,{isOpen:a,onClose:fe,onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){e?W({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}):console.log("invalid avatar link"),fe()})).catch(console.log)}})]})]})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.dd006738.chunk.js.map