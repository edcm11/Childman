(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,a,t){e.exports=t(372)},175:function(e,a,t){},177:function(e,a,t){},372:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(9),o=t.n(l),c=(t(167),t(168),t(170),t(172),t(174),t(175),t(17)),i=t(18),s=t(20),m=t(19),u=t(21),d=t(382),p=(t(177),t(381)),h=t(365),g=t(378),E=t(373),v=function(e){var a=e.signup,t=e.loading,n=e.onChange,l=e.createUser;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:l,style:{width:600,margin:"0 auto",padding:20}},r.a.createElement("h2",null,"Registrate"),r.a.createElement("p",null,r.a.createElement(g.a,{name:"username",type:"text",onChange:n,value:a.username,placeholder:"Tu nombre de usuario"})),r.a.createElement("p",null,r.a.createElement(g.a,{name:"email",type:"email",onChange:n,value:a.email,placeholder:"Tu correo"})),r.a.createElement("p",null,r.a.createElement(g.a,{name:"password",type:"password",onChange:n,value:a.password,placeholder:"Tu contrase\xf1a"})),r.a.createElement("p",null,r.a.createElement(g.a,{name:"password2",type:"password",onChange:n,value:a.password2,placeholder:"Repite tu contrase\xf1a"})),r.a.createElement(E.a,{loading:t,type:"primary",htmlType:"submit"},"Registrarme")))},f=t(16),b=t.n(f),y=t(25),C=t.n(y),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={signup:{username:"User 1"},loading:!1},t.onChange=function(e){var a=e.target.name,n=e.target.value,r=t.state.signup;r[a]=n,t.setState({signup:r})},t.createUser=function(e){e.preventDefault();var a=t.state.signup;if(a.password!==a.password2)return b.a.error("tu contrase\xf1a no coincide");C.a.post("https://childman.herokuapp.com/signup",a).then(function(e){console.log(e),b.a.success("\xa1Te haz registrado con exito!")}).catch(function(e){return b.a.error("No se puede registrar, intente mas tarde")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.signup,t=e.loading;return r.a.createElement(v,{signup:a,loading:t,onChange:this.onChange,createUser:this.createUser})}}]),a}(n.Component),j=function(e){var a=e.auth,t=e.loading,n=e.onChange,l=e.login;return r.a.createElement("div",{className:"auth"},r.a.createElement("form",{onSubmit:l,style:{width:300,margin:"0 auto",padding:20},className:"form"},r.a.createElement("h2",{className:"title"},"Inicia sesi\xf3n"),r.a.createElement("p",null,r.a.createElement(g.a,{name:"email",type:"email",onChange:n,value:a.email,placeholder:"Tu correo"})),r.a.createElement("p",null,r.a.createElement(g.a,{name:"password",type:"password",onChange:n,value:a.password,placeholder:"Tu contrase\xf1a"})),r.a.createElement(E.a,{loading:t,type:"primary",htmlType:"submit"},"Inicia sesi\xf3n"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"A\xfan no tienes cuenta?")))},O="https://childman.herokuapp.com/",N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={auth:{},loading:!1},t.login=function(e){t.setState({loading:!0}),e.preventDefault();var a=t.state.auth;C.a.post(O,a).then(function(e){console.log(e),b.a.success("te haz logueado!"),localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",e.data.token),t.setState({loading:!1}),t.props.history.push("/profile")}).catch(function(e){b.a.error("Hay un error al intentar entrar, revisa tus datos."),t.setState({loading:!1})})},t.onChange=function(e){var a=e.target.name,n=e.target.value,r=t.state.auth;r[a]=n,t.setState({auth:r})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.auth,t=e.loading;return r.a.createElement(j,{auth:a,loading:t,onChange:this.onChange,login:this.login})}}]),a}(n.Component),k=function(e){var a=e.user;e.onChangeFile;return r.a.createElement("div",null,r.a.createElement("h2",{className:"title left"},"Mis dise\xf1os"),r.a.createElement("div",{class:"card profilediv"},r.a.createElement("div",{class:"card-image"},r.a.createElement("figure",{class:"image is-4by3"},r.a.createElement("img",{width:"200",src:a.photoURL||"https://bulma.io/images/placeholders/1280x960.png",alt:"user"}))),r.a.createElement("div",{class:"card-content"},r.a.createElement("div",{class:"media"},r.a.createElement("div",{class:"media-content"},r.a.createElement("p",{class:"title is-4"},a.username),r.a.createElement("p",{class:"subtitle is-6"},"@",a.username))),r.a.createElement("div",{class:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."))))},S="https://childman.herokuapp.com/",x=function(){var e=localStorage.getItem("token");return C.a.get(S+"pictures/own/",{headers:{Authorization:e}}).then(function(e){return console.log(e),e.data}).catch(function(e){return e})},D=function(e){var a=e.designs;return(void 0===a?[]:a).length<1?r.a.createElement("h1",null,"No hay fotos"):r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}})},M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={user:{},designs:[]},t.getDesigns=function(){x().then(function(e){t.setState({designs:e})}).catch(function(e){return b.a.error("no se pueden mostrar tus dise\xf1os")})},t.getPrivateInfo=function(){C.a.get("https://childman.herokuapp.com/profile",{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){console.log(e)}).catch(function(e){return b.a.error("algo fall\xf3",e.message)})},t.uploadPhoto=function(){t.refs.input.click()},t.onChangeFile=function(e){console.log(e.target.files[0]).then(function(e){return console.log(e)}).catch(function(e){return b.a.error("Error")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));if(!e)return this.props.history.push("/login");this.setState({user:e}),this.getDesigns()}},{key:"render",value:function(){var e=this.state,a=e.user,t=e.designs;return r.a.createElement("div",null,r.a.createElement(k,{user:a,onChangeFile:this.onChangeFile}),r.a.createElement(D,{designs:t}))}}]),a}(n.Component),A=t(377),I=t(375),T=t(11),L=function(e){var a=e.handleSelect,t=e.onChange,n=e.onChangeFile,l=e.onSubmit,o=e.loading,c=A.a.Option,i=I.a.Dragger,s={name:"pictures",multiple:!0,action:"//jsonplaceholder.typicode.com/posts/",onChange:function(e){var a=e.file.status;"uploading"!==a&&console.log(e.file,e.fileList),"done"===a?b.a.success("".concat(e.file.name," file uploaded successfully.")):"error"===a&&b.a.error("".concat(e.file.name," file upload failed."))}};return r.a.createElement("div",{className:"inputs"},r.a.createElement("h2",{className:"title"},"Crea un nuevo articulo"),r.a.createElement("form",{onSubmit:l},r.a.createElement(A.a,{name:"categoria",defaultValue:"Categoria",style:{width:120},onChange:a},r.a.createElement(c,{value:"Mujer"},"Mujer"),r.a.createElement(c,{value:"Hombre"},"Hombre"),r.a.createElement(c,{value:"Ni\xf1os"},"Ni\xf1os")),r.a.createElement("br",null),r.a.createElement(A.a,{name:"tallas",defaultValue:"Talla",style:{width:120},onChange:a},r.a.createElement(c,{value:"S"},"S"),r.a.createElement(c,{value:"M"},"M"),r.a.createElement(c,{value:"L"},"L")),r.a.createElement("br",null),r.a.createElement(g.a,{onChange:t,placeholder:"Nombre",name:"name",type:"text",style:{width:600,margin:"0 auto",padding:20}}),r.a.createElement("br",null),r.a.createElement(g.a,{onChange:t,placeholder:"Price",name:"price",type:"number",style:{width:600,margin:"0 auto",padding:20}}),r.a.createElement("br",null),r.a.createElement(g.a,{onChange:t,placeholder:"Description",name:"description",type:"text",style:{width:600,margin:"0 auto",padding:20}}),r.a.createElement("br",null),r.a.createElement(i,Object.assign({},s,{accept:"image/*",onChange:n}),r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(T.a,{type:"inbox"})),r.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),r.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),r.a.createElement("br",null),r.a.createElement(E.a,{loading:o,type:"primary",htmlType:"submit"},"New")))},F=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={form:{},loading:!1},t.onSubmit=function(e){e.preventDefault();var a=t.state.form;console.log(a),C.a.post("https://childman.herokuapp.com/admin",a).then(function(e){b.a.success("\xa1se ha creado un nuevo articulo!"),console.log(e)}),t.props.history.push("/hombre")},t.onChange=function(e){var a=e.target.name,n=e.target.value;t.state.form[a]=n},t.handleSelect=function(e,a){console.log(e);var n=e;t.state.form.categoria=n},t.handleSelect=function(e,a){console.log(e);var n=e;t.state.form.talla=n},t.handleDragger=function(e,a){console.log(e)},t.onChangeFile=function(e){var a=t.state.articleData;a.imageURL=e.target.files[0],t.setState({articleData:a})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.form,t=e.loading;return r.a.createElement("div",null,r.a.createElement(L,{onSubmit:this.onSubmit,onChange:this.onChange,onChangeFile:this.onChangeFile,handleSelect:this.handleSelect,loading:t,form:a}))}}]),a}(n.Component),U=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"function",value:function(){"div#froala-editor".froalaEditor({dragInline:!1,toolbarButtons:["bold","italic","underline","insertImage","insertLink","undo","redo"],pluginsEnabled:["image","link","draggable"]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"froala-editor fr-view"},r.a.createElement("h3",null,"Click here to edit the content"),r.a.createElement("p",null,r.a.createElement("img",{id:"edit",class:"fr-fil fr-dib",src:"https://http2.mlstatic.com/D_Q_NP_722309-MLM27794622417_072018-Q.jpg",alt:"Old Clock",width:"300"})),r.a.createElement("p",null,"The image can be dragged only between blocks and not inside them.")))}}]),a}(n.Component),P=t(374),W=function(){return r.a.createElement("div",null,r.a.createElement(P.a,{autoplay:!0,effect:"fade"},r.a.createElement("div",{className:"div1"}),r.a.createElement("div",{className:"div2"}),r.a.createElement("div",{className:"div3"}),r.a.createElement("div",{className:"div4"})))},z=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null))}}]),a}(n.Component),B=t(376),H=B.a.Meta,R=function(){return r.a.createElement("div",null,r.a.createElement(B.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})},r.a.createElement("p",null,"$200"),r.a.createElement(H,{title:"Europe Street beat shirt",description:""})),",")},J=B.a.Meta,Q=function(){return r.a.createElement("div",null,r.a.createElement(B.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://estasdemoda.com/wp-content/uploads/2014/11/moda-hombre-zara.jpg"})},r.a.createElement("p",null,"$160"),r.a.createElement(J,{title:"All black shirt",description:""})),",")},$=B.a.Meta,_=function(){return r.a.createElement("div",null,r.a.createElement(B.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://www.okchicas.com/wp-content/uploads/2016/05/Ni%C3%B1os-fashionistas-22.jpg"})},r.a.createElement("p",null,"$300"),r.a.createElement($,{title:"Sweater W&W",description:""})),",")},V=function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/signup",component:w}),r.a.createElement(h.a,{path:"/login",component:N}),r.a.createElement(h.a,{path:"/profile",component:M}),r.a.createElement(h.a,{path:"/admin",component:F}),r.a.createElement(h.a,{path:"/dise\xf1a",component:U}),r.a.createElement(h.a,{path:"/mujer",component:R}),r.a.createElement(h.a,{path:"/hombre",component:Q}),r.a.createElement(h.a,{path:"/ni\xf1os",component:_}),r.a.createElement(h.a,{path:"/",component:z}))},K=t(380),q=function(){return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/"},"CHILDMAN")),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},r.a.createElement(K.a,{class:"navbar-link",to:"/"},"\xbfQu\xe9 buscas?"),r.a.createElement("div",{class:"navbar-dropdown is-boxed"},r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/mujer"},"Mujer"),r.a.createElement("hr",null),r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/hombre"},"Hombre"),r.a.createElement("hr",null),r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/ni\xf1os"},"Ni\xf1os"),r.a.createElement("hr",null),r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/dise\xf1a"},"Dise\xf1a"),r.a.createElement("hr",{class:"navbar-divider"}),r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/profile"},"Mi cuenta"),r.a.createElement("hr",null),r.a.createElement(K.a,{activeClassName:"navbar-item",to:"/admin"},"Admin")))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("a",{className:"button is-info",href:"/dise\xf1a"},"Dise\xf1a")))))},G=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement(V,null))}}]),a}(n.Component),X=Object(d.a)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(379);t(366),t(368),t(370);o.a.render(r.a.createElement(function(){return r.a.createElement(Y.a,null,r.a.createElement(X,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,2,1]]]);
//# sourceMappingURL=main.8f1cee74.chunk.js.map