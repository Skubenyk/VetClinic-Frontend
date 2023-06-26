"use strict";(self.webpackChunkVetClinic=self.webpackChunkVetClinic||[]).push([[2],{2002:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var r=t(4165),n=t(5861),o={icon:"authorization_icon__GwWI0",modal:"authorization_modal__SLJiI",active:"authorization_active__ty9gE",form:"authorization_form__1fKgL",title:"authorization_title__cN6uh",wrapper:"authorization_wrapper__y6zQ+",input:"authorization_input__ucNxf",email:"authorization_email__C9tZD",buttonSubmit:"authorization_buttonSubmit__gIchs",buttonClose:"authorization_buttonClose__y+qw9",error:"authorization_error__OXhDQ"},i=t(1694),s=t.n(i),l=t(5705),u=t(7103),c=t(1243),m=t(184),h=function(e){var a=e.active,t=e.setActive,i=(0,l.TA)({initialValues:{email:"",password:""},validationSchema:u.Ry({email:u.Z_().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),password:u.Z_().min(6,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c  6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!")}),onSubmit:function(e,a){var t=a.setSubmitting,r=a.resetForm;console.log(JSON.stringify(e,null,2)),setTimeout((function(){t(!1),r()}),400),h(e)}}),h=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(a){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("https://vetclinic-backend.onrender.com/api/users/authorization",a,{headers:{Authorization:"form authorization"}});case 3:t=e.sent,console.log(t.data),alert("\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f\u0446\u0438\u044f!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0),alert("\u041d\u0435\u0443\u0434\u0430\u0447\u043d\u0430\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:a?s()(o.modal,o.active):o.modal,onClick:function(){return t(!1)},children:(0,m.jsxs)("form",{className:o.form,method:"post",onSubmit:i.handleSubmit,children:[(0,m.jsx)("h2",{className:o.title,children:"\u0410\u0412\u0422\u041e\u0420\u0418\u0417\u0410\u0426\u0418\u042f"}),(0,m.jsxs)("div",{className:o.wrapper,children:[(0,m.jsx)("label",{className:o.label,htmlFor:"email"}),(0,m.jsx)("input",{className:s()(o.input,o.email),name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",type:"email",value:i.values.email,onChange:i.handleChange,onBlur:i.handleBlur,onClick:function(e){return e.stopPropagation()}}),i.errors.email&&i.touched.email?(0,m.jsx)("div",{className:o.error,children:i.errors.email}):null,(0,m.jsx)("label",{className:o.label,htmlFor:"password"}),(0,m.jsx)("input",{className:s()(o.input,o.password),name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur,onClick:function(e){return e.stopPropagation()}}),i.errors.password&&i.touched.password?(0,m.jsx)("div",{className:o.error,children:i.errors.password}):null,(0,m.jsxs)("div",{className:o.button,children:[(0,m.jsx)("button",{className:o.buttonSubmit,type:"submit",onClick:function(e){return e.stopPropagation()},children:(0,m.jsx)("span",{children:"\u0412\u0425\u041e\u0414"})}),(0,m.jsx)("button",{className:o.buttonClose,type:"button",children:(0,m.jsx)("span",{children:"\u0417\u0410\u041a\u0420\u042b\u0422\u042c"})})]})]})]})})}}}]);
//# sourceMappingURL=2.540e4a0c.chunk.js.map