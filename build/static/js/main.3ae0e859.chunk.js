(this.webpackJsonpplants=this.webpackJsonpplants||[]).push([[0],{230:function(e,t,a){},232:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(100),i=a.n(s),r=a(6),o=a(11),l=a(4),d=a(10),j=a(12),p=a(7),b=a.n(p),u=(a(230),a(0)),h=j.a().shape({password:j.b().min(8,"Must be at least 8 characters long").max(24,"Must be no more than 24 characters long").required("Some value is required to update your password")}),m=j.a().shape({phoneNumber:j.b().min(7,"Number is too short").max(15,"Number is too long").required("Must enter a valid number if you plan to update")}),x=localStorage.getItem("jwtToken"),O=localStorage.getItem("userId"),g=function(e){var t=e.pageTitle;return Object(n.useEffect)((function(){t("SETTINGS")}),[]),Object(u.jsx)("div",{className:"settings-container",children:x?Object(u.jsxs)("div",{className:"settings-forms-container",children:[Object(u.jsx)(d.c,{initialValues:{password:""},validationSchema:h,onSubmit:function(e,t){t.stopPropagation(),b.a.put("https://tt157-backend.herokuapp.com/api/users/".concat(O),{password:e.password},{headers:{authorization:"bearer ".concat(x)}}).then((function(e){return e.data}))},children:function(e){var t=e.errors,a=e.touched,n=e.isValid,c=e.dirty,s=e.values;return Object(u.jsxs)(d.b,{className:"settings_forms",testid:"form1",children:[Object(u.jsx)("label",{className:"update_pass",children:"Update Password"}),Object(u.jsx)(d.a,{name:"password",placeholder:"abcD1234?"}),t.password&&a.password?Object(u.jsx)("div",{testid:"error-div-password",children:t.password}):null,Object(u.jsx)("span",{testid:"settings-password-span",children:Object(u.jsx)("button",{type:"submit",disabled:!(c&&n&&s.password),testid:"settings-password-submit",children:"Submit"})})]})}}),Object(u.jsx)(d.c,{initialValues:{phoneNumber:""},validationSchema:m,onSubmit:function(e,t){t.stopPropagation();var a=parseInt(e.phoneNumber.replace(/[^0-9]/g,""));b.a.put("https://tt157-backend.herokuapp.com/api/users/".concat(O),{phone_number:a},{headers:{authorization:"bearer ".concat(x)}}).then((function(e){return e.data}))},children:function(e){var t=e.errors,a=e.touched,n=e.isValid,c=e.dirty,s=e.values;return Object(u.jsxs)(d.b,{className:"settings_forms",testid:"form2",children:[Object(u.jsx)("label",{className:"update_phone",children:"Update Phone Number"}),Object(u.jsx)(d.a,{name:"phoneNumber",placeholder:"555-123-4567"}),t.phoneNumber&&a.phoneNumber?Object(u.jsx)("div",{testid:"error-div-phoneNumber",children:t.phoneNumber}):null,Object(u.jsx)("span",{testid:"settings-phoneNumber-span",children:Object(u.jsx)("button",{type:"submit",disabled:!(c&&n&&s.phoneNumber),testid:"settings-phoneNumber-submit",children:"Submit"})})]})}})]}):Object(u.jsx)("div",{children:"..."})})},f=a(68),v=(a(232),function(e){var t=e.propsTitle,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],i=c[1];Object(n.useEffect)((function(){return i(t),s}),[e.propsTitle]);return"LOGIN"===s||"CREATE ACCOUNT"===s||window.screen.availWidth<670?Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{className:"headerLogo",children:"".concat(s)})}):Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{className:"headerLogo",children:"".concat(s)}),Object(u.jsx)(r.b,{to:"/settings",children:Object(u.jsx)(f.a,{className:"set-icon"})}),Object(u.jsx)("span",{className:"set",children:"Settings"}),Object(u.jsx)(f.b,{className:"log-icon",onClick:function(){return localStorage.clear(),void window.location.replace("/")}}),Object(u.jsx)("span",{className:"log",children:"Logout"})]})}),N=(a(236),function(){return Object(u.jsxs)("div",{className:"menu-container",children:[Object(u.jsx)("input",{type:"checkbox",className:"openSidebarMenu",id:"openSidebarMenu"}),Object(u.jsxs)("label",{htmlFor:"openSidebarMenu",className:"sidebarIconToggle",children:[Object(u.jsx)("div",{className:"spinner diagonal part-1"}),Object(u.jsx)("div",{className:"spinner horizontal"}),Object(u.jsx)("div",{className:"spinner diagonal part-2"})]}),Object(u.jsx)("div",{id:"sidebarMenu",children:Object(u.jsxs)("ul",{className:"sidebarMenuInner",children:[Object(u.jsxs)("li",{className:"menu-title",children:["Plants ",Object(u.jsx)("span",{children:"Menu Options"})]}),Object(u.jsx)(r.b,{to:"/home",children:Object(u.jsx)("li",{className:"menu-home",children:"Home"})}),Object(u.jsx)(r.b,{to:"/plants",children:Object(u.jsx)("li",{className:"menu-plants",children:"Plants"})}),Object(u.jsx)(r.b,{to:"/create-plant",children:Object(u.jsx)("li",{className:"menu-create",children:"Create Plant"})}),Object(u.jsx)(r.b,{to:"/settings",children:Object(u.jsx)("li",{className:"menu-settings",children:"Settings"})}),Object(u.jsx)("li",{onClick:function(){return localStorage.clear(),void window.location.replace("/")},className:"menu-logout",children:"Logout"})]})})]})}),w=(a(237),function(e){var t=localStorage.getItem("jwtToken"),a=localStorage.getItem("userId");return Object(u.jsx)("div",{className:"plant_box",children:Object(u.jsxs)("div",{className:"myplant",children:[Object(u.jsx)(r.b,{testid:"plant-img-link",to:"/plant-page/".concat(e.plantData.id,"?nickname=").concat(e.plantData.nickname,"&species=").concat(e.plantData.species,"&h2o_frequency=").concat(e.plantData.h2o_frequency,"&image=").concat(e.plantData.image,"&id=").concat(e.plantData.id),className:"plant_img ",children:Object(u.jsx)("img",{testid:"plant-img",src:"".concat(e.plantData.image?"".concat(e.plantData.image):"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"),alt:"plant"})}),Object(u.jsx)("div",{className:"plant_data",children:Object(u.jsxs)("div",{testid:"plant-data-container",children:[Object(u.jsxs)("span",{className:"nickname",children:[Object(u.jsx)("label",{testid:"plant-nickname-label",children:"Nickname: "}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{testid:"plant-nickname-par",children:"".concat(e.plantData.nickname)})]}),Object(u.jsxs)("span",{className:"species",children:[Object(u.jsx)("label",{testid:"plant-species-label",children:"Species: "}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{testid:"plant-species-par",children:"".concat(e.plantData.species)})]}),Object(u.jsxs)("span",{className:"h2o-frequency",children:[Object(u.jsx)("label",{testid:"plant-h2o-label",children:"H2o Frequency: "}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{testid:"plant-h2o-par",children:"".concat(e.plantData.h2o_frequency)})]})]})}),Object(u.jsxs)("div",{className:"edit_delete_buttons",children:[Object(u.jsx)(r.b,{testid:"plant-edit-link",to:"/edit-plant/".concat(e.plantData.id),children:Object(u.jsx)("button",{testid:"plant-edit-button",children:"Edit"})}),Object(u.jsx)("button",{testid:"plant-delete-button",onClick:function(){b.a.delete("https://tt157-backend.herokuapp.com/api/users/".concat(a,"/plant"),{data:{plant_id:e.plantData.id}},{headers:{authorization:"bearer ".concat(t)}}).then((function(e){return e.data})).catch((function(e){return e}))},children:"Delete"})]})]})})}),k=(a(238),localStorage.getItem("jwtToken")),S=localStorage.getItem("userId"),y=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],s=a[1],i=e.pageTitle;return Object(n.useEffect)((function(){b.a.get("https://tt157-backend.herokuapp.com/api/users/".concat(S),{headers:{authorization:"bearer ".concat(k)}}).then((function(e){i("PLANTS"),s(e.data.plants)}))}),[]),Object(u.jsx)("div",{className:"plants-container",children:k?Object(u.jsx)("div",{className:"plants",children:Object(u.jsx)("div",{className:"plants-wrapper",children:c.map((function(e){return Object(u.jsx)(w,{plantData:e},e.id)}))})}):Object(u.jsx)("div",{children:"..."})})},T=(a(254),a(245),{image:"",nickname:"",species:"",h2o_frequency:0,id:999999}),_=function(e){var t=localStorage.getItem("jwtToken"),a=localStorage.getItem("userId"),c=Object(n.useState)(T),s=Object(o.a)(c,2),i=s[0],l=s[1],d=e.pageTitle,j=new URLSearchParams(window.location.search);Object(n.useEffect)((function(){d("".concat(j.get("nickname").toUpperCase())),l({image:j.get("image"),nickname:j.get("nickname"),species:j.get("species"),h2o_frequency:j.get("h2o_frequency"),id:j.get("id")}),console.log(),console.log(j.get("species"))}),[]);return Object(u.jsx)("div",{className:"plant-page-container",children:t?Object(u.jsx)("div",{className:"plant_box",children:Object(u.jsxs)("div",{className:"myplant",children:[Object(u.jsx)("div",{className:"plant_img",testid:"plant-img-container",children:Object(u.jsx)("img",{testid:"plant-image",src:"".concat(i.image?"".concat(i.image):"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"),alt:"plant"})}),Object(u.jsx)("div",{className:"plant_data",children:Object(u.jsxs)("div",{testid:"plant-data",children:[Object(u.jsxs)("span",{className:"name",testid:"plant-nickname-span",children:[Object(u.jsx)("label",{testid:"plant-nickname-label",children:"Nickname: "}),Object(u.jsx)("p",{testid:"plant-nickname-par",children:"".concat(i.nickname)})]}),Object(u.jsxs)("span",{testid:"plant-species-span",className:"spec",children:[Object(u.jsx)("label",{testid:"plant-species-label",children:"Species: "}),Object(u.jsx)("p",{testid:"plant-species-par",children:"".concat(i.species)})]}),Object(u.jsxs)("span",{testid:"plant-h2o-span",className:"h2o",children:[Object(u.jsx)("label",{testid:"plant-h2o-label",children:"H2o Frequency: "}),Object(u.jsx)("p",{testid:"plant-h2o-par",children:"".concat(i.h2o_frequency)})]})]})}),Object(u.jsxs)("div",{testid:"plant-btns-container",className:"edit_delete_buttons",children:[Object(u.jsx)(r.b,{testid:"plant-edit-btn-link",to:"/edit-plant/".concat(i.id),children:Object(u.jsx)("button",{testid:"plant-edit-btn",children:"Edit"})}),Object(u.jsx)("button",{testid:"plant-delete-btn",onClick:function(){b.a.delete("https://tt157-backend.herokuapp.com/api/users/".concat(a,"/plant"),{data:{plant_id:i.id}},{headers:{authorization:"bearer ".concat(t)}}).then((function(e){return e.data})).catch((function(e){return e}))},children:"Delete"})]})]})}):Object(u.jsx)("div",{children:"..."})})},I=a(31),q=a(32),M=(a(246),{nickname:"",species:"",h2o_frequency:"",image:""}),D=localStorage.getItem("jwtToken"),C=localStorage.getItem("userId"),P=function(e){var t=Object(n.useState)(M),a=Object(o.a)(t,2),c=a[0],s=a[1],i=e.pageTitle;Object(n.useEffect)((function(){i("ADD A PLANT")}),[]);var r=function(e){s(Object(q.a)(Object(q.a)({},c),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{testid:"create-container",children:D?Object(u.jsxs)("form",{className:"add_plant_form",onSubmit:function(e){e.preventDefault(),b.a.post("https://tt157-backend.herokuapp.com/api/plants",{nickname:c.nickname,species:c.species,h2o_frequency:c.h2o_frequency,image:c.image},{headers:{authorization:"bearer ".concat(D)}}).then((function(e){b.a.post("https://tt157-backend.herokuapp.com/api/users/".concat(C),{plant_id:e.data.id},{headers:{authorization:"bearer ".concat(D)}}).then((function(e){console.log(e),window.location.replace("/plants")}))})).catch((function(e){return console.log("cannot post plant",{err:e})}))},children:[Object(u.jsx)("h2",{testid:"create-title",children:"Add a New Plant"}),Object(u.jsx)("input",{type:"text",name:"nickname",placeholder:"Nick Name",onChange:r,value:c.nickname}),Object(u.jsx)("input",{type:"text",name:"species",placeholder:"Species",onChange:r,value:c.species}),Object(u.jsx)("input",{type:"number",name:"h2o_frequency",placeholder:"H2oFrequency",onChange:r,value:c.h2o_frequency}),Object(u.jsx)("input",{type:"string",name:"image",placeholder:"Image URL",onChange:r,value:c.image}),Object(u.jsx)("button",{className:"add_plant_button",disabled:!(c.nickname&&c.species&&c.h2o_frequency),children:"Add Plant"})]}):Object(u.jsx)("div",{children:"..."})})},E=(a(247),function(e){var t=localStorage.getItem("jwtToken"),a=Object(n.useState)({nickname:"",species:"",h2o_frequency:"",image:""}),c=Object(o.a)(a,2),s=c[0],i=c[1],r=e.pageTitle,d="".concat(Object(l.g)().pathname).split("/");d=d[d.length-1],Object(n.useEffect)((function(){r("EDIT YOUR PLANT"),b.a.get("https://tt157-backend.herokuapp.com/api/plants/".concat(d)).then((function(e){return i(e.data),e.data}))}),[]);var j=function(e){i(Object(q.a)(Object(q.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{className:"edit-plant-container",children:t?Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.put("https://tt157-backend.herokuapp.com/api/plants/".concat(d),{id:d,nickname:s.nickname,species:s.species,h2o_frequency:s.h2o_frequency,image:s.image},{headers:{authorization:"bearer ".concat(t)}}).then((function(e){console.log(e),window.location.replace("/plants")})).catch((function(e){return console.log("cannot post plant",{err:e})}))},testid:"edit-plant-form",children:[Object(u.jsx)("h2",{testid:"edit-plant-title",children:"Edit Your Plant"}),Object(u.jsx)("input",{type:"text",name:"nickname",placeholder:"Nick Name",onChange:j,value:s.nickname}),Object(u.jsx)("input",{type:"text",name:"species",placeholder:"Species",onChange:j,value:s.species}),Object(u.jsx)("input",{type:"number",name:"h2o_frequency",placeholder:"H2oFrecuency",onChange:j,value:s.h2o_frequency}),Object(u.jsx)("input",{type:"string",name:"image",placeholder:"Image URL",onChange:j,value:s.image}),Object(u.jsx)("button",{testid:"edit-plant-submit",children:"Update Plant"})]}):Object(u.jsx)("div",{children:"..."})})}),H=(a(248),j.a().shape({username:j.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),phoneNumber:j.b().min(7,"Number is too short").max(15,"Number is too long").required("Required"),password:j.b().min(8,"Must be at least 8 characters long").max(24,"Must be 24 characters or less").required("Required")})),A=function(e){var t=e.pageTitle;return Object(n.useEffect)((function(){t("CREATE ACCOUNT")}),[]),Object(u.jsx)("div",{className:"form-container",children:Object(u.jsx)(d.c,{initialValues:{username:"",phoneNumber:"",password:""},validationSchema:H,onSubmit:function(e){b.a.post("https://tt157-backend.herokuapp.com/api/auth/register",{username:e.username,password:e.password,phone_number:parseInt(e.phoneNumber.replace(/[^0-9]/g,""))}).then((function(e){localStorage.setItem("jwtToken",e.data.token);var t=function(e){if(e){var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}}(e.data.token).subject;localStorage.setItem("userId",t),window.location.replace("/home")}))},children:function(e){var t=e.errors,a=e.touched,n=e.isValid,c=e.dirty;return Object(u.jsxs)(d.b,{className:"signup_form",children:[Object(u.jsx)("label",{children:"Username: "}),Object(u.jsx)(d.a,{name:"username"}),t.username&&a.username?Object(u.jsx)("div",{className:"error-div",children:t.username}):null,Object(u.jsx)("label",{children:"Phone Number: "}),Object(u.jsx)(d.a,{name:"phoneNumber"}),t.phoneNumber&&a.phoneNumber?Object(u.jsx)("div",{className:"error-div",children:t.phoneNumber}):null,Object(u.jsx)("label",{children:"Password: "}),Object(u.jsx)(d.a,{name:"password",type:"password"}),t.password&&a.password?Object(u.jsx)("div",{className:"error-div",children:t.password}):null,Object(u.jsx)("span",{className:"button-container",children:Object(u.jsx)("button",{className:"signup_button",type:"submit",disabled:!(c&&n),children:"Sign Me Up!"})})]})}})})},L=(a(249),j.a().shape({username:j.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:j.b().min(8,"Must be at least 8 characters long").max(24,"Must be 24 characters or less").required("Required")}));var G=function(e){var t=e.pageTitle;return Object(n.useEffect)((function(){var e=(new Date).getHours();0===e||e<11?localStorage.setItem("greetingTime","Good Morning, "):e>10&&e<17?localStorage.setItem("greetingTime","Good Afternoon, "):e>16&&e<20?localStorage.setItem("greetingTime","Good Evening, "):localStorage.setItem("greetingTime","Goodnight, "),t("LOGIN")}),[]),Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)(d.c,{initialValues:{username:"",password:""},validationSchema:L,onSubmit:function(e){b.a.post("https://tt157-backend.herokuapp.com/api/auth/login",{username:e.username,password:e.password}).then((function(e){localStorage.setItem("loginMsg","".concat(localStorage.getItem("greetingTime")).concat(e.data.message.split(" ")[0],"!")),localStorage.setItem("jwtToken",e.data.token);var t=function(e){if(e){var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}}(localStorage.getItem("jwtToken")).subject;localStorage.setItem("userId",t),window.location.replace("/home")}))},children:function(e){var t=e.errors,a=e.touched,n=e.isValid,c=e.dirty;return Object(u.jsxs)(d.b,{className:"login_form",children:[Object(u.jsx)("label",{children:"Username: "}),Object(u.jsx)(d.a,{name:"username"}),t.username&&a.username?Object(u.jsx)("div",{className:"error-div",children:t.username}):null,Object(u.jsx)("label",{children:"Password: "}),Object(u.jsx)(d.a,{name:"password",type:"password"}),t.password&&a.password?Object(u.jsx)("div",{className:"error-div",children:t.password}):null,Object(u.jsx)("button",{className:"login_button",type:"submit",disabled:!(c&&n),children:"Log me in!"})]})}}),Object(u.jsx)("div",{className:"create-account-link-container",children:Object(u.jsxs)("p",{className:"create-account-link",children:["Don't have an account? ",Object(u.jsx)(r.b,{to:"/signup",children:Object(u.jsx)("span",{className:"click_here",children:"Click Here"})})]})})]})})},U=(a(250),localStorage.getItem("jwtToken")),V=localStorage.getItem("loginMsg"),R=function(e){var t=e.pageTitle;return Object(n.useEffect)((function(){t("HOME")}),[]),Object(u.jsx)("div",{className:"container",children:U&&V?Object(u.jsxs)("div",{testid:"home-login-msg-div",children:[Object(u.jsx)("h1",{testid:"home-title",children:"Water My Plants"}),Object(u.jsx)("div",{testid:"home-container",children:Object(u.jsxs)("div",{testid:"login-with-message",children:[Object(u.jsx)("p",{testid:"login-message",children:"".concat(V)}),Object(u.jsx)("div",{className:"plant-img-container",children:Object(u.jsx)("img",{src:"https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"plant_picture"})})]})})]}):Object(u.jsxs)("div",{testid:"home-container",children:[Object(u.jsx)("h1",{testid:"home-title",children:"Water My Plants"}),Object(u.jsxs)("div",{testid:"login-without-message",children:[Object(u.jsxs)("p",{testid:"get-started-message",children:["Get started by ",Object(u.jsx)(r.b,{to:"/create-plant",testid:"create-plant-link",children:"creating a plant"})]}),Object(u.jsx)("div",{className:"plant-img-container",children:Object(u.jsx)("img",{src:"https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"plant_picture"})})]})]})})};a(251),a(252);var B=function(){var e=Object(n.useState)("Water My Plants"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=localStorage.getItem("jwtToken"),i=function(e){return c(e),e};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{pageTitle:i,propsTitle:a}),Object(u.jsx)(N,{pageTitle:i}),Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",children:s?Object(u.jsx)(l.a,{to:"/home"}):Object(u.jsx)(G,{pageTitle:i})}),Object(u.jsx)(l.b,{exact:!0,path:"/signup",children:Object(u.jsx)(A,{pageTitle:i})}),Object(u.jsx)(l.b,{exact:!0,path:"/home",children:s?Object(u.jsx)(R,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})}),Object(u.jsx)(l.b,{exact:!0,path:"/plants",children:s?Object(u.jsx)(y,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})}),Object(u.jsx)(l.b,{exact:!0,path:"/plant-page/:id?",children:s?Object(u.jsx)(_,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})}),Object(u.jsx)(l.b,{exact:!0,path:"/create-plant",children:s?Object(u.jsx)(P,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})}),Object(u.jsx)(l.b,{exact:!0,path:"/edit-plant/:id",children:s?Object(u.jsx)(E,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})}),Object(u.jsx)(l.b,{exact:!0,path:"/settings",children:s?Object(u.jsx)(g,{pageTitle:i}):Object(u.jsx)(l.a,{to:"/"})})]})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,256)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(253);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(B,{})})}),document.getElementById("root")),z()}},[[255,1,2]]]);
//# sourceMappingURL=main.3ae0e859.chunk.js.map