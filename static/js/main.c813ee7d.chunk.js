(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"Container_container__21uZV"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2CETE",form_group:"ContactForm_form_group__2ajos",form__input:"ContactForm_form__input__1_UVj",form__label:"ContactForm_form__label__ELXDC",btnContact:"ContactForm_btnContact__FRwIX"}},29:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__3R3qj",itemList:"ContactList_itemList__3VfWf",text:"ContactList_text__1kx7y",deleteBtn:"ContactList_deleteBtn__2FbTC"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),o=n(15),s=n(5),l=n(6),u=n(8),m=n(7),d=n(12),b=n.n(d),h=n(0),f=function(t){var e=t.children;return Object(h.jsx)("div",{className:b.a.container,children:e})},j=n(13),p=n(2),_=n.n(p),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.form,children:[Object(h.jsx)("input",{className:_.a.form__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,placeholder:"Full name"}),Object(h.jsx)("input",{className:_.a.form__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,placeholder:"Phone number"}),Object(h.jsx)("button",{type:"submit",className:_.a.btnContact,children:"Add contact"})]})}}]),n}(a.Component),O=C,x=n(3),v=n.n(x),F=function(t){var e=t.contacts,n=t.onDeleteClick;return Object(h.jsx)("ul",{className:v.a.List,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(h.jsxs)("li",{className:v.a.itemList,children:[Object(h.jsxs)("p",{className:v.a.text,children:[a,": ",r]}),Object(h.jsx)("button",{className:v.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(9),y=n.n(g),S=function(t){var e=t.value,n=t.changeFilterInput;return Object(h.jsxs)("label",{className:y.a.labelFind,children:[Object(h.jsx)("span",{className:y.a.spanFind,children:"Find contacts by name"}),Object(h.jsx)("input",{className:y.a.inputFind,type:"text",name:"filter",value:e,onChange:n,placeholder:"Type contact"})]})},N=n(14),k=n.n(N),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.OnDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilterInput=function(e){t.setState({filter:e.target.value})},t.onFilteredContacts=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r={id:k.a.generate(),name:n,number:a};t.state.contacts.some((function(t){return t.name===r.name}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)(f,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsxs)("section",{children:[Object(h.jsx)(S,{value:t,changeFilterInput:this.changeFilterInput}),Object(h.jsx)(F,{contacts:this.onFilteredContacts(),onDeleteClick:this.OnDeleteContact})]})]})}}]),n}(a.Component),w=L;n(29);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={labelFind:"Filter_labelFind__3DoXB",inputFind:"Filter_inputFind__bC96x",spanFind:"Filter_spanFind__1hyGQ"}}},[[30,1,2]]]);
//# sourceMappingURL=main.c813ee7d.chunk.js.map