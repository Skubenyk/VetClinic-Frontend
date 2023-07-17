"use strict";(self.webpackChunkVetClinic=self.webpackChunkVetClinic||[]).push([[358],{8358:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(4165),o=n(5861),a=(n(2791),{icon:"formAppointment_icon__Pw6mB",modal:"formAppointment_modal__2+8Ko",active:"formAppointment_active__DfIZA",form:"formAppointment_form__8BK6n",tel:"formAppointment_tel__vaTvo",formContentText:"formAppointment_formContentText__91rS5",formWrapper:"formAppointment_formWrapper__rb8V1",titleForm:"formAppointment_titleForm__CKSMn",conntainerForm:"formAppointment_conntainerForm__h7iwz",formContent:"formAppointment_formContent__z3n+l",formButton:"formAppointment_formButton__9fmra",buttonSubmit:"formAppointment_buttonSubmit__B-vzh",error:"formAppointment_error__xFKv9"}),l=n(1694),m=n.n(l),i=n(5705),s=n(7103),c=n(1243),u=n(184),p=function(e){var t=e.active,n=e.setActive,l=(0,i.TA)({initialValues:{name:"",tel:"",text:""},validationSchema:s.Ry({name:s.Z_().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),tel:s.Z_().matches(/^\d+$/,"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430").min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),text:s.Z_().min(30,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!")}),onSubmit:function(e,t){var r=t.setSubmitting,o=t.resetForm;console.log(JSON.stringify(e,null,2)),r(!1),o(),p(e),n(!1)}}),p=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("https://vetclinic-backend.onrender.com/api/users/send-email",t,{headers:{Appointment:"form appointment"}});case 3:n=e.sent,console.log(n.data),alert("\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error:",e.t0),alert("\u041d\u0435\u0443\u0434\u0430\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c!");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{className:t?m()(a.modal,a.active):a.modal,onClick:function(){return n(!1)},children:(0,u.jsx)("div",{className:a.form,onClick:function(e){return e.stopPropagation()},children:(0,u.jsx)("div",{className:a.formWrapper,children:(0,u.jsx)("form",{action:"#",method:"post",onSubmit:l.handleSubmit,children:(0,u.jsxs)("div",{className:a.conntainerForm,children:[(0,u.jsx)("h2",{className:a.titleForm,children:"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0435\u043c"}),(0,u.jsxs)("div",{className:a.formContent,children:[(0,u.jsx)("label",{htmlFor:"name"}),(0,u.jsx)("input",{className:a.name,type:"text",placeholder:"\u0418\u043c\u044f",name:"name",value:l.values.name,onChange:l.handleChange,onBlur:l.handleBlur}),l.errors.name&&l.touched.name?(0,u.jsx)("div",{className:a.error,children:l.errors.name}):null,(0,u.jsx)("label",{htmlFor:"tel"}),(0,u.jsx)("input",{className:a.tel,type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"tel",value:l.values.tel,onChange:l.handleChange,onBlur:l.handleBlur}),l.errors.tel&&l.touched.tel?(0,u.jsx)("div",{className:a.error,children:l.errors.tel}):null,(0,u.jsx)("label",{htmlFor:"text"}),(0,u.jsx)("textarea",{className:a.formContentText,rows:"8",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e \u043e\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443",name:"text",value:l.values.text,onChange:l.handleChange,onBlur:l.handleBlur}),l.errors.text&&l.touched.text?(0,u.jsx)("div",{className:a.error,children:l.errors.text}):null]}),(0,u.jsx)("div",{className:a.formButton,children:(0,u.jsx)("button",{className:a.buttonSubmit,type:"submit",children:(0,u.jsx)("span",{children:"\u041e\u0422\u041f\u0420\u0410\u0412\u0418\u0422\u042c"})})})]})})})})})}}}]);
//# sourceMappingURL=358.5de745a2.chunk.js.map