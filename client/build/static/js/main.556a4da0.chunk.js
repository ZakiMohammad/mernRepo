(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),s=n.n(l),r=(n(24),n(13)),c=n(14),i=n(15),u=n(17),h=n(16),m=n(18),d=n(2),p=n.n(d),g=(n(42),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",body:"",posts:[]},n.componentDidMount=function(){n.getBlogPost()},n.getBlogPost=function(){p.a.get("/api").then((function(e){var t=e.data;n.setState({posts:t}),console.log("data Has Been Recieved")})).catch((function(){alert("Error Retreiving Data!!!")}))},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(r.a)({},a,o))},n.submit=function(e){e.preventDefault();var t={title:n.state.title,body:n.state.body};p()({url:"/api/save",method:"POST",data:t}).then((function(){console.log("Data Has Been Sent to the Server"),n.resetUserInputs(),n.getBlogPost()})).catch((function(){console.log("Internal Server Error")}))},n.resetUserInputs=function(){n.setState({title:"",body:""})},n.displayBlogPost=function(e){return e.length?e.map((function(e,t){return o.a.createElement("div",{key:t,className:"blog-post_display"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))})):null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("State ",this.state),o.a.createElement("div",{className:"app"},o.a.createElement("h2",null,"Welcome To My React App"),o.a.createElement("form",{onSubmit:this.submit},o.a.createElement("div",{className:"form-input"},o.a.createElement("input",{value:this.state.title,type:"text",name:"title",placeholder:"Title",onChange:this.handleChange})),o.a.createElement("div",{className:"form-input"},o.a.createElement("textarea",{placeholder:"Body",name:"body",cols:"30",rows:"10",value:this.state.body,onChange:this.handleChange})),o.a.createElement("button",null,"Submit")),o.a.createElement("div",{className:"blog-post"},this.displayBlogPost(this.state.posts)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.556a4da0.chunk.js.map