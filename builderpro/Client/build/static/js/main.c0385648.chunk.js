(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(51),o=n.n(s),l=(n(58),n(8)),c=n(9),u=n(12),i=n(10),m=n(6),d=n(11),h=n(118),f=n(121),p=n(120),g=(n(59),n(52)),b=n(14),v=n(2),E=n.n(v),w="https://api.datamuse.com/words?rel_jjb=",y={Thesaurus:function(e){return E.a.get("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+e+"?key=28b56967-484b-45f5-9b85-17a8fabea4ae")},Dictonary:function(e){return E.a.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+e+"?key=9a6569a8-75ff-478f-83c3-f71060038a88")},Categories:function(e){return E.a.get(w+e)},InsAdj:function(e){return E.a.get("https://api.datamuse.com/words?rel_jja="+e)},InsNoun:function(e){return E.a.get(w+e)},getWords:function(){return E.a.get("/api/saved")},saveWord:function(e){return E.a.post("/api/words",e)},FindClass:function(e){return E()({url:"https://wordsapiv1.p.rapidapi.com/words/"+e+"/typeOf",method:"get",headers:{"X-RapidAPI-Key":"f717eb135dmsh5cf690d2dcedf8fp1e873bjsnf904dfe7245b","X-RapidAPI-Host":"wordsapiv1.p.rapidapi.com"}})}};function C(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function k(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function j(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}var S=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:e.name,type:"text",className:"form-control",placeholder:"Search For a Word",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleFormSubmit(t)},className:"btn btn-primary"},"Search")))};n(76);function O(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group list-group-horizontal-md"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}n(77);var A=function(e){switch(e.type){case"success":var t="btn btn-success";break;case"danger":t="btn btn-danger";break;default:t="btn btn-warning"}return r.a.createElement("button",Object.assign({type:"button"},e,{className:t}),e.value)};n(78);var H=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).TypeOf=function(e){return n.state.class.filter(function(e,t){return t<=5}).join(" ")},n.Categories=function(e){return n.state.categories.map(function(e){return e.word}).join(" ")},n.Ants=function(e){return n.state.word.meta.ants[0]},n.Syns=function(e){if(n.state.word.meta.syns)return n.state.word.meta.syns[0].filter(function(e,t){return t<=5}).join(" ");console.log("no syns")},n.definition=function(e){return n.state.word.shortdef},n.partOfSpeech=function(e){return n.state.word.fl},n.firstLetter=function(e){return e.charAt(0)},n.lastLetter=function(e){return e[e.length-1]},n.Xletter=function(e){var t=window.prompt("Find the  __ letter");return e.substring(t-1,t)},n.vowelCount=function(e){var t=e.match(/[aeiou]/gi);return null===t?"0":t.length},n.letterCount=function(e){return e.length},n.testing=function(){n.state.speech?(console.log("here"),n.GetHelp(n.state.speech,n.state.search)):console.log("nooo")},n.searchWords=function(e){y.FindClass(e).then(function(e){return n.setState({class:e.data.typeOf})}),y.Thesaurus(e).then(function(e){return n.setState({word:e.data[0]})}),y.Dictonary(e).then(function(e){return n.setState({moreOfWord:e.data[0]})}).then(n.GetHelp(n.state.word.fl,n.state.search))},n.GetHelp=function(e,t){switch(e){case"noun":console.log("noun"),y.InsNoun(t).then(function(e){var t=e.data.slice(0,6);n.setState({categories:t})});break;case"adjective":console.log("Adj"),y.InsAdj(t).then(function(e){var t=e.data.slice(0,6);n.setState({categories:t})});break;default:console.log("nothing")}},n.handleFormSubmit=function(e){console.log(n.state.search),e.preventDefault(),n.searchWords(n.state.search),n.setState({calls:[]})},n.handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(b.a)({},a,t))},n.getData=function(e){console.log(e)},n.HandleGuess=function(e){e.preventDefault(),n.setState({value:e.target.value});var t=n.state.userGuess.toLowerCase().trim();console.log(t),t===n.state.search&&(console.log("You win!"),console.log(n.state.seconds),alert("You got it!, your time was "+n.state.seconds))},n.HandleActionButton=function(e,t,a){if(-1===a.indexOf(t)){var r=e(n.state.search);n.setState({calls:[].concat(Object(g.a)(n.state.calls),[t,r])})}else console.log("Try a different button")},n.getword=function(){y.getWords().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)},console.log("error"))},n.state={search:[],categories:[],class:[],calls:[],word:{},moreOfWord:{},results:{},userGuess:"",hasGuessed:!1,seconds:0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"tick",value:function(){this.setState(function(e){return{seconds:e.seconds+1}})}},{key:"componentDidMount",value:function(){var e=this;this.getword(),this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return r.a.createElement(C,null,r.a.createElement(S,{value:this.state.search,name:"search",handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement(k,null,r.a.createElement(j,{size:"md-4"},r.a.createElement(A,{type:"success",value:"Letter Count",onClick:function(){return e.HandleActionButton(e.letterCount,"Letter Count",e.state.calls)}}),r.a.createElement(A,{type:"success",value:"Part of Speech",onClick:function(){return e.HandleActionButton(e.partOfSpeech,"Part of Speech",e.state.calls)}}),r.a.createElement(A,{type:"success",value:"First Letter",onClick:function(){return e.HandleActionButton(e.firstLetter,"First Letter",e.state.calls)}}),r.a.createElement(A,{type:"success",value:"Last Letter",onClick:function(){return e.HandleActionButton(e.lastLetter,"Last Letter",e.state.calls)}})),r.a.createElement(j,{size:"md-4"},r.a.createElement(A,{type:"success",value:"X Letter",onClick:function(){return e.HandleActionButton(e.Xletter,"X letter",e.state.calls)}}),r.a.createElement(A,{type:"success",value:"Vowel Count",onClick:function(){return e.HandleActionButton(e.vowelCount,"Vowel Count",e.state.calls)}})),r.a.createElement(j,{size:"md-4"},r.a.createElement(A,{value:"Type of",onClick:function(){return e.HandleActionButton(e.TypeOf,"Type Of",e.state.calls)}}),r.a.createElement(A,{value:"Categories",onClick:function(){return e.HandleActionButton(e.Categories,"Categories",e.state.calls)}}))),r.a.createElement(k,null,r.a.createElement(j,{size:"md-6"},r.a.createElement(A,{type:"danger",value:"Definition",onClick:function(){return e.HandleActionButton(e.definition,"Definition",e.state.calls)}}),r.a.createElement(A,{type:"danger",value:"Syns",onClick:function(){return e.HandleActionButton(e.Syns,"Syns",e.state.calls)}}),r.a.createElement(A,{type:"danger",value:"Ants",onClick:function(){return e.HandleActionButton(e.Ants,"Ants",e.state.calls)}}))),r.a.createElement(k,null,r.a.createElement(j,{size:"md-12"},r.a.createElement("button",{type:"button",onClick:function(){return e.setState({hasGuessed:!0})},className:"btn btn-primary btn-lg btn-block"},"Guess!"))),r.a.createElement(H,null,this.state.calls.length&&this.state.search?r.a.createElement(O,null,this.state.calls.map(function(e){return r.a.createElement(N,{key:e},e)})):r.a.createElement("h3",null,"No Results to Display"),r.a.createElement(O,null,this.state.hasGuessed?r.a.createElement(S,{value:this.state.userGuess,handleInputChange:this.handleInputChange,handleFormSubmit:this.HandleGuess,name:"userGuess"}):r.a.createElement("h3",null,"Ready to guess?"))))}}]),t}(r.a.Component),F=n(119),G=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(b.a)({},a,n))},e.state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("handleSubmit"),E.a.post("/user/login",{username:this.state.username,password:this.state.password}).then(function(e){console.log("login response: "),console.log(e),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username}),t.setState({redirectTo:"/home"}))}).catch(function(e){console.log("login error: "),console.log(e)})}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(F.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username: "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.handleChange,name:"username",placeholder:"Enter username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.handleChange,name:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{className:"form-check-label"},"Check me out")),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"btn btn-primary"},"Submit"))}}]),t}(a.Component),L=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={username:"",password:"",confirmPassword:""},e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("sign-up-form, username: "),console.log(this.state.username),E.a.post("/user/",{username:this.state.username,password:this.state.password}).then(function(e){console.log(e),e.data.errmsg?console.log("username already taken"):(console.log("successful signup"),t.setState({redirectTo:"/login"}))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SignupForm"},r.a.createElement("h1",null,"Signup form"),r.a.createElement("label",{htmlFor:"username"},"Username: "),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password: "),r.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"Sign up"))}}]),t}(a.Component),D=n(117);var U=function(e){return e.loggedIn?r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"#",className:"nav-link",onClick:e.logout},"Logout")))):r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/home"},"Home"),r.a.createElement("a",{className:"navbar-brand",href:"/"},"Change User"),r.a.createElement("span",null,"Hello ",e.name,"!"))},B=(n(82),n(112).Strategy,function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(b.a)({},a,t))},n.handleFormSubmit=function(e){console.log(n.state.username,n.state.password),e.preventDefault(),E.a.post("/",{username:n.state.username,password:n.state.password}).then(function(e){console.log(e),Response.data?console.log("success"):console.log("error")}).catch(function(e){return console.log(e)})},n.handleClick=function(e){},n.state={search:"",username:"",password:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Guess WHAT?"),r.a.createElement("p",{className:"lead"},"Login or Sign-up!"))),r.a.createElement("a",{href:"/login",className:"btn btn-primary btn-lg btn-block"}," ",r.a.createElement("span",{className:"text-secondary"},"Login")),r.a.createElement("a",{href:"/sign-up",className:"btn btn-secondary btn-lg btn-block"}," ",r.a.createElement("span",{className:"text-primary"},"Sign-up")))}}]),t}(r.a.Component)),T=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={loggedIn:!1,username:null},e.getUser=e.getUser.bind(Object(m.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(m.a)(e)),e.updateUser=e.updateUser.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"_logout",value:function(e){var t=this;e.preventDefault(),console.log("logging out"),E.a.post("/auth/logout").then(function(e){console.log(e.data),200===e.status&&t.setState({loggedIn:!1,user:null})})}},{key:"getUser",value:function(){var e=this;E.a.get("/api/saved/").then(function(t){console.log("Get user response: "),console.log(t.data),t.data.user?(console.log("Get User: There is a user saved in the server session: "),e.setState({loggedIn:!0,username:t.data.user.username})):(console.log("Get user: no user"),e.setState({loggedIn:!1,username:null}))})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(U,{name:this.state.username}),r.a.createElement(f.a,null,r.a.createElement(p.a,{exact:!0,path:"/home",component:I}),r.a.createElement(p.a,{exact:!0,path:"/",component:B}),r.a.createElement(p.a,{exact:!0,path:"/sign-up",component:L}),r.a.createElement(p.a,{path:"/login",render:function(){return r.a.createElement(G,{updateUser:e.updateUser})}}),r.a.createElement(p.a,{path:"/login",render:function(){return r.a.createElement(L,{signup:e.signup})}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){e.exports=n(115)},58:function(e,t,n){},59:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.c0385648.chunk.js.map