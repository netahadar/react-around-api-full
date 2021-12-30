(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(19),c=n.n(s),o=n(8),r=(n(30),n(24)),l=n(2),u=n(3),d=n.p+"static/media/logo.c7581985.svg",p=n(0);function j(e){var t=e.link,n=e.text,a=e.loggedIn,i=e.email,s=e.onLogOut;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:d,alt:"around the u.s. logo"}),Object(p.jsx)("div",{className:"header__container",children:a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"header__email",children:i}),Object(p.jsx)(o.b,{to:t,className:"header__link",onClick:s,children:"Log Out"})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.b,{to:t,className:"header__link",children:n})})})]})}var b=i.a.createContext();function h(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onDeletePostClick,c=i.a.useContext(b);var o=t.owner===c._id,r="gallery__trash-button ".concat(o?"gallery__trash-button_visible":"gallery__trash-button_hidden"),l=t.likes.some((function(e){return e._id===c._id})),u="gallery__like-button ".concat(l&&"gallery__like-button_active");return Object(p.jsxs)("li",{className:"gallery__item",children:[Object(p.jsx)("button",{className:r,type:"button","aria-label":"delete button",onClick:function(){s(t)}}),Object(p.jsx)("div",{className:"gallery__photo",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(p.jsxs)("div",{className:"gallery__description",children:[Object(p.jsx)("h2",{className:"gallery__text",children:t.name}),Object(p.jsxs)("div",{className:"gallery__like-container",children:[Object(p.jsx)("button",{className:u,type:"button","aria-label":"like button",onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"gallery__like-counter",children:t.likes.length})]})]})]})}function m(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,a=e.onEditAvatarClick,s=e.onDeletePostClick,c=e.onCardClick,o=e.cards,r=e.onCardLike,l=i.a.useContext(b);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__avatar-container",style:{backgroundImage:'url("'.concat(l.avatar,'")')},children:Object(p.jsx)("button",{className:"profile__avatar-edit",onClick:a})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-title",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"edit button",onClick:t})]}),Object(p.jsx)("p",{className:"profile__job-description",children:l.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"add button",onClick:n})]}),Object(p.jsx)("section",{className:"gallery",children:Object(p.jsx)("ul",{className:"gallery__list",children:o.map((function(e){return Object(p.jsx)(h,{card:e,onCardClick:c,onCardLike:r,onDeletePostClick:s},e._id)}))})})]})}function f(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyrights",children:"\xa9 2021 Neta Hadar Itzhak"})})}function _(e){var t=e.card,n=e.onClose;return Object(p.jsx)("div",{className:"popup popup_type_photo ".concat(t.name?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container popup__container_type_photo",children:[Object(p.jsx)("button",{className:"popup__close-button popup__close-button_type_photo",type:"button",onClick:n}),Object(p.jsx)("div",{className:"popup__photo",style:{backgroundImage:"url(".concat(t.link,")")}}),Object(p.jsx)("h3",{className:"popup__text",children:t.name})]})})}var O=n(22),g=n(23),v=new(function(){function e(t,n){Object(O.a)(this,e),this._baseUrl=t,this._headers=n,this.fetchCall=this.fetchCall.bind(this)}return Object(g.a)(e,[{key:"fetchCall",value:function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("ERROR: ".concat(e.statusText))}))}},{key:"getUserInfo",value:function(){return this.fetchCall("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"setUserAvatar",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}},{key:"getInitialCards",value:function(){return this.fetchCall("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"createNewCard",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"_addLike",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"_dislike",value:function(e){return this.fetchCall("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._dislike(e):this._addLike(e)}}]),e}())("https://api.netahadar.students.nomoreparties.sbs",{authorization:"Bearer ".concat(localStorage.jwt),"Content-Type":"application/json"});function x(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[Object(p.jsx)("h2",{className:"popup__form-title",children:e.title}),e.children,Object(p.jsx)("button",{className:"popup__form-submit-button",type:"submit",children:e.buttonTitle})]})]})})}function C(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=i.a.useState(""),c=Object(l.a)(s,2),o=c[0],r=c[1],u=i.a.useState(""),d=Object(l.a)(u,2),j=d[0],h=d[1];var m=i.a.useContext(b);return i.a.useEffect((function(){r(m.name),h(m.about)}),[m,t]),Object(p.jsxs)(x,{name:"profile",title:"Edit Profile",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:o,about:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"name-input",type:"text",name:"name",value:o,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"full name",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{id:"name-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"job-input",type:"text",name:"about",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");h(t)},placeholder:"job title",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{id:"job-input-error"})]})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=i.a.useRef();return Object(p.jsxs)(x,{name:"avatar",title:"Change profile picture",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault();var t=s.current.value.replace(/[*|\"<>[\]{}`;&$]+/," ");a({avatar:t})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"avatar-link",type:"url",name:"link",placeholder:"avatar link",ref:s,required:!0}),Object(p.jsx)("span",{id:"avatar-link-error"})]})}function y(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlaceSubmit,s=i.a.useState(""),c=Object(l.a)(s,2),o=c[0],r=c[1],u=i.a.useState(""),d=Object(l.a)(u,2),j=d[0],b=d[1];return i.a.useEffect((function(){r(""),b("")}),[t]),Object(p.jsxs)(x,{name:"post",title:"New place",buttonTitle:"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:o,link:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"title-input",type:"text",name:"name",value:o,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(p.jsx)("span",{id:"title-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"link-input",type:"url",name:"link",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");b(t)},placeholder:"Image link",required:!0}),Object(p.jsx)("span",{id:"link-input-error"})]})}function N(e){var t=e.isOpen,n=e.onClose,a=e.onDeletePostSubmit;return Object(p.jsx)(x,{name:"delete",title:"Are you sure?",buttonTitle:"Yes",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()}})}var S=n(11),w=n(9);function L(e){var t=e.onLogin,n=(e.onClose,e.isOpen,i.a.useState({email:"",password:""})),a=Object(l.a)(n,2),s=a[0],c=a[1];function r(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");c(Object(w.a)(Object(w.a)({},s),{},Object(S.a)({},n,a)))}return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Log In"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:s.email,onChange:r}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:s.password,onChange:r}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Log In"})]}),Object(p.jsx)(o.b,{to:"/signup",className:"signing__link",children:"Not a member yet? Sign up here!"})]})})}function E(e){var t=e.onRegister,n=i.a.useState({email:"",password:""}),a=Object(l.a)(n,2),s=a[0],c=a[1];function r(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");c(Object(w.a)(Object(w.a)({},s),{},Object(S.a)({},n,a)))}return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Sign Up"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:s.email,onChange:r}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:s.password,onChange:r}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Sign Up"})]}),Object(p.jsx)(o.b,{to:"/signin",className:"signing__link",children:"Already a member? Log in here!"})]})})}var I=n(25),P=["children","loggedIn"];var U=function(e){var t=e.children,n=e.loggedIn,a=Object(I.a)(e,P);return Object(p.jsx)(u.b,Object(w.a)(Object(w.a)({},a),{},{children:n?t:Object(p.jsx)(u.a,{to:"/signin"})}))},T="https://api.netahadar.students.nomoreparties.sbs";function A(e){var t=e.src,n=e.title,a=e.name,i=e.isOpen,s=e.onClose;return Object(p.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(i?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__frame",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:s}),Object(p.jsx)("img",{src:t,className:"popup__status-image",alt:"request status"}),Object(p.jsx)("h2",{className:"popup__title",children:n})]})})}var D=n.p+"static/media/success.1b6082f8.svg",q=n.p+"static/media/fail.df8eddf6.svg";var F=function(){var e=Object(u.g)(),t=i.a.useState(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],c=i.a.useState(!1),o=Object(l.a)(c,2),d=o[0],h=o[1],O=i.a.useState(!1),g=Object(l.a)(O,2),x=g[0],S=g[1],w=i.a.useState(!1),I=Object(l.a)(w,2),P=I[0],F=I[1],J=i.a.useState(!1),$=Object(l.a)(J,2),R=$[0],B=$[1],z=i.a.useState(!1),H=Object(l.a)(z,2),G=H[0],Y=H[1],M=i.a.useState({name:"",link:""}),K=Object(l.a)(M,2),Q=K[0],V=K[1],W=i.a.useState({name:"",about:"",avatar:"",_id:""}),X=Object(l.a)(W,2),Z=X[0],ee=X[1],te=i.a.useState([]),ne=Object(l.a)(te,2),ae=ne[0],ie=ne[1],se=i.a.useState({_id:""}),ce=Object(l.a)(se,2),oe=ce[0],re=ce[1],le=i.a.useState(!1),ue=Object(l.a)(le,2),de=ue[0],pe=ue[1],je=i.a.useState(""),be=Object(l.a)(je,2),he=be[0],me=be[1],fe=i.a.useState(localStorage.getItem("jwt")),_e=Object(l.a)(fe,2),Oe=_e[0],ge=_e[1];function ve(){s(!1),h(!1),S(!1),F(!1),B(!1),V({name:"",link:""})}return i.a.useEffect((function(){Oe?function(e){return v.fetchCall("".concat(T,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}(Oe).then((function(t){pe(!0),me(t.email),e.push("/")})).catch(console.log):pe(!1)}),[Oe,e]),i.a.useEffect((function(){v._headers={authorization:"Bearer ".concat(Oe),"Content-Type":"application/json"}}),[Oe]),i.a.useEffect((function(){Oe&&v.getInitialCards().then((function(e){ie(e)})).catch(console.log)}),[Oe]),i.a.useEffect((function(){Oe&&v.getUserInfo().then((function(e){e&&ee({name:e.name,about:e.about,avatar:e.avatar,_id:e._id})}))}),[Oe]),i.a.useEffect((function(){var e=function(e){"Escape"===e.key&&ve()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(p.jsx)(b.Provider,{value:Z,children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)(u.d,{children:[Object(p.jsxs)(u.b,{path:"/signup",children:[Object(p.jsx)(j,{link:"/signin",text:"Log In",loggedIn:de}),Object(p.jsx)(E,{onRegister:function(t){(function(e){var t=e.email,n=e.password;return v.fetchCall("".concat(T,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){if(e)return e;throw new Error("User with this email address already exists")}))})(t).then((function(){Y(!0),e.push("/.signin")})).catch((function(e){console.log(e),Y(!1)})).finally((function(){B(!0)}))}})]}),Object(p.jsxs)(u.b,{path:"/signin",children:[Object(p.jsx)(j,{link:"/signup",text:"Sign Up",loggedIn:de}),Object(p.jsx)(L,{onLogin:function(t){(function(e){var t=e.email,n=e.password;return v.fetchCall("".concat(T,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e.token;throw new Error("the user with the specified email not found")}))})(t).then((function(t){ge(t),pe(!0),me(t.email),e.push("/")})).catch((function(e){console.log(e)}))},onClose:ve})]}),Object(p.jsxs)(U,{path:"/",loggedIn:de,children:[Object(p.jsx)(j,{link:"/signin",text:"Log Out",loggedIn:de,email:he,onLogOut:function(){pe(!1),localStorage.removeItem("jwt")}}),Object(p.jsx)(m,{onEditProfileClick:function(){h(!0)},onAddPlaceClick:function(){S(!0)},onEditAvatarClick:function(){s(!0)},onDeletePostClick:function(e){F(!0),re({_id:e._id})},onCardClick:function(e){V({name:e.name,link:e.link})},cards:ae,onCardLike:function(e){var t=e.likes.some((function(e){return e===Z._id}));v.changeLikeCardStatus(e._id,t).then((function(t){ie((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch(console.log)}}),Object(p.jsx)(f,{}),Object(p.jsxs)("section",{children:[Object(p.jsx)(C,{isOpen:d,onClose:ve,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){ee({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),ve()})).catch(console.log)}}),Object(p.jsx)(y,{isOpen:x,onClose:ve,onAddPlaceSubmit:function(e){v.createNewCard(e).then((function(e){e?ie([e].concat(Object(r.a)(ae))):console.log("invalid card link"),ve()})).catch(console.log)}}),Object(p.jsx)(_,{card:Q,onClose:ve}),Object(p.jsx)(N,{isOpen:P,onClose:ve,onDeletePostSubmit:function(){v.deleteCard(oe._id).then((function(){var e=ae.filter((function(e){return e._id!==oe._id}));ie(e),ve()})).catch(console.log)}}),Object(p.jsx)(k,{isOpen:a,onClose:ve,onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){e?ee({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}):console.log("invalid avatar link"),ve()})).catch(console.log)}})]})]})]}),Object(p.jsx)(A,{isOpen:R,name:"info",title:G?"Success! You have now been registered.":"Oops, something went wrong! Please try again.",src:G?D:q,onClose:ve})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.24426951.chunk.js.map