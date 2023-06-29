"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{5873:function(n,t,e){e.d(t,{II:function(){return m},__:function(){return h},l0:function(){return g},zx:function(){return b}});var r,a,i,o,s,c,u,d,l,p=e(168),x=e(5706),h=(x.Z.h1(r||(r=(0,p.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n  margin-right: 20px;\n"]))),x.Z.label(a||(a=(0,p.Z)(["\n  font-size: 20px;\n  display: inline-grid;\n  margin-bottom: 15px;\n  margin-right: 10px;\n"])))),m=x.Z.input(i||(i=(0,p.Z)(["\n  font-size: 27px;\n  margin-top: 15px;\n  border-radius: 7px;\n"]))),g=x.Z.form(o||(o=(0,p.Z)(["\n  display: block;\n  padding: 20px;\n  border: 1px solid black;\n  width: 300px;\n  height: 270px;\n  border-radius: 10px;\n"]))),b=x.Z.button(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  margin-top: 40px;\n  width: 85px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: aqua;\n  }\n"])));x.Z.ul(c||(c=(0,p.Z)([""]))),x.Z.li(u||(u=(0,p.Z)(["\n  letter-spacing: 1px;\n  margin-bottom: 10px;\n"]))),x.Z.span(d||(d=(0,p.Z)(["\n  width: 160px;\n"]))),x.Z.span(l||(l=(0,p.Z)(["\n  width: 80px;\n"])))},3902:function(n,t,e){e.r(t),e.d(t,{default:function(){return D}});var r,a,i,o,s,c,u,d,l=e(9439),p=e(2791),x=e(3855),h=e(5873),m=e(184),g=function(n){var t=n.SubmitForm,e=n.ChangeInput,r=n.options,a=r.name,i=r.number;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(h.l0,{onSubmit:t,children:[(0,m.jsxs)(h.__,{children:["Name",(0,m.jsx)(h.II,{type:"text",name:"name",value:a,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:e})]}),(0,m.jsxs)(h.__,{children:["Number",(0,m.jsx)(h.II,{type:"tel",name:"number",value:i,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:e})]}),(0,m.jsx)(h.zx,{type:"submit",disabled:!a||!i,children:"Add contact"})]})})},b=e(7433),f=e(2286),Z=function(){var n=(0,x.v9)(f.h0),t=(0,x.I0)(),e=(0,p.useState)(""),r=(0,l.Z)(e,2),a=r[0],i=r[1],o=(0,p.useState)(""),s=(0,l.Z)(o,2),c=s[0],u=s[1],d={name:a,number:c};return(0,m.jsx)(g,{SubmitForm:function(e){e.preventDefault(),function(e){if(n.find((function(n){return n.name===e.name})))return alert("".concat(e.name," is already in contacts")),n;console.log(e),t((0,b.uK)(e))}(d),i(""),u("")},ChangeInput:function(n){switch(n.target.name){case"name":i(n.target.value);break;case"number":u(n.target.value);break;default:return}},options:d})},j=e(168),v=e(5706),y=v.Z.div(r||(r=(0,j.Z)(["\n  display: flex;\n  max-width: calc(100% - 40px);\n  padding: 20px;\n  margin: 20px auto;\n"]))),k=v.Z.h1(a||(a=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),w=v.Z.div(i||(i=(0,j.Z)(["\n  display: block;\n  margin-right: 300px;\n"]))),I=e(1352).u.actions.handleChangeFilter,C=function(){var n=(0,x.I0)(),t=(0,x.v9)(f.AD);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.__,{htmlFor:"1",children:"Find contacts by name"}),(0,m.jsx)(h.II,{id:"1",type:"text",name:"filter",title:"Use this field to filter contacts by contact's name",value:t,onChange:function(t){n(I(t.target.value))}})]})},_=v.Z.ul(o||(o=(0,j.Z)(["\n  max-width: calc(100% - 40px);\n  padding: 0 20px 20px;\n"]))),F=v.Z.li(s||(s=(0,j.Z)(["\n  display: flex;\n  cursor: pointer;\n  justify-content: start;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 10px;\n  &::before {\n    content: '';\n    width: 6px;\n    height: 6px;\n    background-color: #000000;\n    border-radius: 50%;\n    margin-right: 10px;\n  }\n  & > button {\n    display: none;\n    cursor: pointer;\n    width: 80px;\n    border-radius: 10px;\n    background-color: transparent;\n    margin-left: 20px;\n\n    &:hover {\n      background-color: aqua;\n    }\n  }\n  &:hover > button {\n    display: block;\n  }\n"]))),z=v.Z.span(c||(c=(0,j.Z)(["\n  width: 160px;\n"]))),S=v.Z.span(u||(u=(0,j.Z)(["\n  width: 80px;\n"]))),q=v.Z.li(d||(d=(0,j.Z)(["\n  margin: 0px;\n"]))),A=e(1989),N=function(){var n=(0,x.v9)(f.ur),t=(0,x.v9)(f.NH),e=(0,x.I0)();(0,p.useEffect)((function(){e((0,b.yF)())}),[e]);var r=function(n){var t=n.currentTarget.dataset.id;e((0,b.GK)(t))};return"pending"===t?(0,m.jsx)(A.a,{}):(0,m.jsx)(_,{children:0!==n.length?n.map((function(n){var t=n.id,e=n.name,a=n.number;return(0,m.jsxs)(F,{children:[(0,m.jsxs)(z,{children:[e,":"]}),(0,m.jsx)(S,{children:a}),(0,m.jsx)("button",{"data-id":t,onClick:r,children:"Delete"})]},t)})):(0,m.jsx)(q,{children:"Your contact list is empty"})})},D=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(y,{children:[(0,m.jsxs)(w,{children:[(0,m.jsx)(k,{children:"Phonebook"}),(0,m.jsx)(Z,{})]}),(0,m.jsxs)(w,{children:[(0,m.jsx)(k,{children:"Contacts"}),(0,m.jsx)(C,{}),(0,m.jsx)(N,{})]})]})})}}}]);
//# sourceMappingURL=902.081fa52b.chunk.js.map