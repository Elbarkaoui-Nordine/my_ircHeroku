(this.webpackJsonpmy_irc=this.webpackJsonpmy_irc||[]).push([[0],{122:function(e,t){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(65),s=a.n(o),l=(a(77),a(20)),c=a(21),i=a(22),m=a(12),u=a(25),h=a(24),d=a(6),p=a(15),f=a(17),v=(a(40),a(23)),g=a.n(v),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={username:"",rooms:[],selectRoom:"",adminName:"",room:"",error:""},n.socket=g()("localhost:4000"),n.toChat=n.toChat.bind(Object(m.a)(n)),n.Handler=n.Handler.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("getRooms",(function(t){var a=t.rooms;console.log(a),a.length>0?e.setState({rooms:a}):e.setState({rooms:["No room available"]})}))}},{key:"toChat",value:function(e){e.preventDefault()}},{key:"Handler",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value.replace(/\s+/,"")))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{position:"absolute",top:"10%",left:"40%"}},r.a.createElement("div",null,r.a.createElement("h1",null,"Connect to a room"),r.a.createElement(d.a,{onSubmit:this.toChat},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"username"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter a username",name:"username",onChange:this.Handler})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{as:"select",name:"selectRoom",onChange:this.Handler,multiple:!0},this.state.rooms.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(f.b,{onClick:function(t){return""===e.state.username||""===e.state.selectRoom?t.preventDefault():null},to:"/irc?room=".concat(this.state.selectRoom,"&username=").concat(this.state.username)},r.a.createElement(p.a,{className:"justify-content-center"},"Chat !")))),r.a.createElement("div",null,r.a.createElement("h1",null,"Create a room"),r.a.createElement(d.a,{onSubmit:this.toChat},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Room name"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter a room name",name:"room",onChange:this.Handler})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Username"),r.a.createElement(d.a.Control,{type:"text",placeholder:"Enter a room name",name:"adminName",onChange:this.Handler})),r.a.createElement(f.b,{onClick:function(t){return""===e.state.room||""===e.state.adminName?t.preventDefault():null},to:"/irc?createRoom=".concat(this.state.room,"&username=").concat(this.state.adminName)},r.a.createElement(p.a,{className:"justify-content-center"},"Create !")))))}}]),a}(r.a.Component),b=a(71),k=a(68),y=a.n(k),j=a(69),C=a.n(j);var w=function(e){return r.a.createElement("li",{style:{background:e.background,color:e.color},className:"p-2"}," ",C.a.toReact(e.message))},S=(a(146),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={username:"",room:"",users:[],error:"",owner:!1,children:[]},n.socket=g()("localhost:4000"),n.Handler=n.Handler.bind(Object(m.a)(n)),n.sendMessage=n.sendMessage.bind(Object(m.a)(n)),n.changeUsername=n.changeUsername.bind(Object(m.a)(n)),n.deleteRoom=n.deleteRoom.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.a.parse(this.props.location.search),a=t.username,n=t.room,r=t.createRoom;if(r&&a){this.socket.emit("join",{username:a,room:r,owner:!0},(function(t){var a=t.error;e.setState({error:a})})),""==this.state.error&&this.setState({owner:!0})}else a&&n?this.socket.emit("join",{username:a,room:n},(function(t){var a=t.error;e.setState({error:a})})):this.setState({error:"This page dosent exist"});this.socket.on("message",(function(t){var a=t.username,n=t.message,r=a?a+" : "+n:n;e.state.error||null===document.getElementById("box")||e.setState({children:[].concat(Object(b.a)(e.state.children),[r])});var o=document.getElementById("divBox");o.scrollTop=o.scrollHeight})),this.socket.on("users list",(function(t){e.setState({users:t})})),this.socket.on("redirection",(function(t){var a=t.link;e.props.history.push(a),window.location.reload()}))}},{key:"Handler",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"sendMessage",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("message").value.trim().replace(/\s+/g," "),n=a.split(" ");if(n.length>2&&a.startsWith("/")){if("/msg"==n[0]){var r=n[1];n.splice(0,2);var o=n.join(" ");this.socket.emit("whisper",{receiver:r,message:o},(function(e){var a=e.error,n=t.state.children;n.push(a),t.setState({children:n})}))}}else if(2==n.length&&a.startsWith("/"))switch(n[0]){case"/nick":this.changeUsername(n[1]);break;case"/list":this.socket.emit("getRegexList",n[1],(function(e){var a=t.state.children;a.push("List of the rooms on the server for this string :");for(var n=0;n<e.length;n++)e[n].room?a.push(e[n].room):a.push(e[n]);t.setState({children:a})}));break;case"/create":this.socket.emit("checkRoom",n[1],(function(e){var a=e.error;if(a){var n=t.state.children;n.push(a),t.setState({children:n})}}));break;case"/join":this.socket.emit("joinRoom",n[1],(function(e){var a=e.error;if(a){var n=t.state.children;n.push(a),t.setState({children:n})}}));break;default:alert("commande inconnue")}else if(a.startsWith("/"))switch(a){case"/users":var s=this.state.children;s.push("List of the users in this room :");for(var l=0;l<this.state.users.length;l++)s.push(this.state.users[l].username);this.setState({children:s});break;case"/list":this.socket.emit("getAllRooms",{},(function(e){var a=e.result,n=t.state.children;n.push("List of the rooms on the server :");for(var r=0;r<a.length;r++)n.push(a[r].room);t.setState({children:n})}));break;case"/delete":this.state.owner&&this.deleteRoom();break;case"/part":this.props.history.push("/"),window.location.reload();break;default:alert("commande inconnue")}else""!=a&&this.socket.emit("sendMessage",a,(function(e){var a=e.error;t.setState({error:a})}));document.getElementById("message").value=""}},{key:"changeUsername",value:function(e){this.state.users.find((function(t){return t.username===e}))?alert("Username already taken in this room"):this.socket.emit("Change username",e)}},{key:"deleteRoom",value:function(){var e=this;this.socket.emit("deleteRoom",{},(function(t){var a=t.error;e.setState({error:a})}))}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("h1",null,this.state.error):r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("ul",{className:"w-20 p-1 list-group scroll"},this.state.users.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e.username)}))),r.a.createElement("div",{id:"divBox",className:"w-100 p-3 border border-primary",style:{minHeight:"400px",maxHeight:"400px",overflow:"scroll"}},r.a.createElement("ul",{id:"box",style:{listStyleType:"none",paddingLeft:"0"}},this.state.children.map((function(e,t){return t%2==0?r.a.createElement(w,{key:t,message:e,background:"#6D7B8D",color:"white"}):r.a.createElement(w,{key:t,message:e})}))))),r.a.createElement(d.a,{onSubmit:this.sendMessage},r.a.createElement(d.a.Group,null,r.a.createElement("label",null,"Send a message")," ",r.a.createElement(d.a.Control,{type:"text",placeholder:"Send a message",id:"message",name:"message",onChange:this.Handler})),r.a.createElement(p.a,{type:"sumbit",className:"m-2 justify-content-center"},"Submit"),r.a.createElement(p.a,{onClick:function(){var t=prompt("What is your new username");e.changeUsername(t)},variant:"outline-secondary  justify-content-end"},"Change username"),this.state.owner?r.a.createElement(p.a,{onClick:this.deleteRoom,className:"m-2 justify-content-center"},"Delete room"):null))}}]),a}(r.a.Component)),R=(a(147),a(70)),x=a(5);var O=function(){return r.a.createElement(f.a,null,r.a.createElement(R.a,null,r.a.createElement(x.a,{exact:!0,path:"/",component:E}),r.a.createElement(x.a,{exact:!0,path:"/irc",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(148)},77:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.7af2025b.chunk.js.map