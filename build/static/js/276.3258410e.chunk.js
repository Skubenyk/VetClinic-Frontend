"use strict";(self.webpackChunkVetClinic=self.webpackChunkVetClinic||[]).push([[276],{1276:function(e,a,r){r.r(a),r.d(a,{default:function(){return d}});var s=r(4165),l=r(5861),t={icon:"registration_icon__mEnMQ",modal:"registration_modal__7FKFW",active:"registration_active__Ak5yS",form:"registration_form__7Va2K",title:"registration_title__Ie6+Q",wrapper:"registration_wrapper__kCX0D",input:"registration_input__kGqp0",firstName:"registration_firstName__+sNKC",buttonSubmit:"registration_buttonSubmit__kuPpT",error:"registration_error__JQBa7"},n=r(1694),i=r.n(n),o=r(5705),m=r(7103),u=r(1243),c=r(184),d=function(e){var a=e.active,r=e.setActive,n=(0,o.TA)({initialValues:{firstName:"",lastName:"",userName:"",email:"",password:""},validationSchema:m.Ry({firstName:m.Z_().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),lastName:m.Z_().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),userName:m.Z_().min(4,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),email:m.Z_().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),password:m.Z_().min(6,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!")}),onSubmit:function(e,a){var s=a.setSubmitting,l=a.resetForm;console.log(JSON.stringify(e,null,2)),s(!1),l(),d(e),r(!1)}}),d=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(a){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.post("https://vetclinic-backend.onrender.com/api/users/registration",a,{headers:{Registration:"form registration"}});case 3:r=e.sent,console.log(r.data),alert("\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0),alert("\u041d\u0435\u0443\u0434\u0430\u0447\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return(0,c.jsx)("div",{className:a?i()(t.modal,t.active):t.modal,onClick:function(){return r(!1)},children:(0,c.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:(0,c.jsxs)("form",{className:t.form,method:"post",onSubmit:n.handleSubmit,children:[(0,c.jsx)("h2",{className:t.title,children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,c.jsxs)("div",{className:t.wrapper,children:[(0,c.jsx)("label",{className:t.label,htmlFor:"firstName"}),(0,c.jsx)("input",{className:i()(t.input,t.firstName),name:"firstName",placeholder:"\u0418\u043c\u044f",type:"text",value:n.values.firstName,onChange:n.handleChange,onBlur:n.handleBlur}),n.errors.firstName&&n.touched.firstName?(0,c.jsx)("div",{className:t.error,children:n.errors.firstName}):null,(0,c.jsx)("label",{className:t.label,htmlFor:"lastName"}),(0,c.jsx)("input",{className:i()(t.input,t.lastName),name:"lastName",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",type:"text",value:n.values.lastName,onChange:n.handleChange,onBlur:n.handleBlur}),n.errors.lastName&&n.touched.lastName?(0,c.jsx)("div",{className:t.error,children:n.errors.lastName}):null,(0,c.jsx)("label",{className:t.label,htmlFor:"userName"}),(0,c.jsx)("input",{className:i()(t.input,t.userName),name:"userName",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"text",value:n.values.userName,onChange:n.handleChange,onBlur:n.handleBlur}),n.errors.userName&&n.touched.userName?(0,c.jsx)("div",{className:t.error,children:n.errors.userName}):null,(0,c.jsx)("label",{className:t.label,htmlFor:"email"}),(0,c.jsx)("input",{className:i()(t.input,t.email),name:"email",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"email",value:n.values.email,onChange:n.handleChange,onBlur:n.handleBlur}),n.errors.email&&n.touched.email?(0,c.jsx)("div",{className:t.error,children:n.errors.email}):null,(0,c.jsx)("label",{className:t.label,htmlFor:"password"}),(0,c.jsx)("input",{className:i()(t.input,t.password),name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",value:n.values.password,onChange:n.handleChange,onBlur:n.handleBlur}),n.errors.password&&n.touched.password?(0,c.jsx)("div",{className:t.error,children:n.errors.password}):null,(0,c.jsx)("div",{className:t.button,children:(0,c.jsx)("button",{className:t.buttonSubmit,type:"submit",children:(0,c.jsx)("span",{children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"})})})]})]})})})}}}]);
//# sourceMappingURL=276.3258410e.chunk.js.map