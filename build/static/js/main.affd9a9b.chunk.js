(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},105:function(e,t,a){},12:function(e,t){e.exports={COMMUNITY_CHAT:"COMMUNITY_CHAT",USER_CONNECTED:"USER_CONNECTED",MESSAGE_RECIEVED:"MESSAGE_RECIEVED",MESSAGE_SENT:"MESSAGE_SENT",USER_DISCONNECTED:"USER_DISCONNECTED",TYPING:"TYPING",VERIFY_USER:"VERIFY_USER",LOGOUT:"LOGOUT",PRIVATE_MESSAGE:"PRIVATE_MESSAGE",NEW_CHAT_USER:"NEW_CHAT_USER",GAME_UPDATE:"GAME_UPDATE",CURRENTPLAYS:"CURRENTPLAYS"}},131:function(e,t){},134:function(e,t,a){},136:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(48),i=a.n(n),r=(a(101),a(103),a(0)),s=a.n(r),o=a(219),l=a(218),c=a(217),h=a(10),d=a(11),u=a(15),m=a(13),p=a(14),g=(a(105),function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"goTo",value:function(e){this.props.history.replace("/".concat(e))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return s.a.createElement("div",null,!e()&&s.a.createElement("div",{className:"hero"},s.a.createElement("h1",null,"Cards Against Humaity"),s.a.createElement("div",{className:"flip-card"},s.a.createElement("div",{className:"flip-card-inner"},s.a.createElement("div",{className:"flip-card-front"},s.a.createElement("h1",null,"Let the Fun Begin"),s.a.createElement("button",{className:"flip-card-button",onClick:this.login.bind(this),id:"qsLoginBtn"},"Log in | Sign Up")),s.a.createElement("div",{className:"flip-card-back"},s.a.createElement("h1",null,"Cards"),s.a.createElement("h1",null,"Against"),s.a.createElement("h1",null,"Humanity"))))),e()&&s.a.createElement("div",null,s.a.createElement("div",{className:"navbar",id:"homeid"},s.a.createElement("div",{className:"linkBox"},s.a.createElement("div",{className:"link",onClick:this.goTo.bind(this,"home")},"Cards Against Humanity"),s.a.createElement("div",{className:"link",onClick:this.logout.bind(this)},"Log Out")))))}}]),t}(r.Component)),f=a(51),k=a.n(f),y=a(87),b=a(88),v=a.n(b),E=a(12),A=(a(134),a(20)),w=a(37),S=(a(136),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).initSocket=function(e){e.on("connect",function(){}),e.on(E.GAME_UPDATE,function(e){a.setState(e)}),e.on(E.CURRENTPLAYS,function(e){a.setState({names:e})})},a.setUser=function(e){a.state.socket.emit(E.USER_CONNECTED,e),a.setState({user:e}),console.log(e.name)},a.deal=function(){a.setState({blackCards:w[0].blackCards,whiteCards:w[0].whiteCards,gameInProgress:!0},function(){for(var e=a.state.names.length,t=[],n=a.state.blackCards.length-1,i=Math.floor(Math.random()*n),r=a.state.blackCards[i].text,s=a.state.blackCards[i].pick,o=a.state.whiteCards,l=o.length-1;l>0;l--){var c=Math.floor(Math.random()*(l+1)),h=[o[c],o[l]];o[l]=h[0],o[c]=h[1]}for(var d=0;d<e;d++){var u=o.slice(0,7);o.splice(0,7),a.setState({whiteCards:o}),t.push({name:a.state.names[d].id,id:a.state.names[d].name,picture:a.state.names[d].picture,cardsInHand:u,score:0,bcardPick:s,bCard:r,dealer:!1,turn:1})}t[0].dealer=!0,a.setState({players:t},function(){var e=a.props.socket,t=a.state;e.emit(E.GAME_UPDATE,t)})})},a.playcard=function(e,t,n,i){var r=a.state.players,s=a.state.cardsinplay;if(i>0){if(0===s.length)a.state.cardsinplay.push({name:[a.state.players[t].cardsInHand[e]],playerIndex:t,cardOwner:n}),r[t].bcardPick--;else{for(var o,l,c=0;c<s.length;c++)s[c].playerIndex===t?(o=!0,l=c,c=s.length+1):o=!1;o?r[t].bcardPick>0&&(s[l].name.push(a.state.players[t].cardsInHand[e]),r[t].bcardPick--):(a.state.cardsinplay.push({name:[a.state.players[t].cardsInHand[e]],playerIndex:t,cardOwner:n}),r[t].bcardPick--)}r[t].cardsInHand.splice(e,1),a.setState({players:r},function(){var e=a.props.socket,t=a.state;e.emit(E.GAME_UPDATE,t)})}},a.updateScore=function(e){for(var t=a.state.players,n=a.state.blackCards.length-1,i=Math.floor(Math.random()*n),r=a.state.blackCards[i].text,s=a.state.blackCards[i].pick,o=0;o<t.length;o++)t[o].turn===t.length?(t[o].turn=1,t[o].dealer=!1,t[0].dealer=!0):t[o].turn<t.length&&t[o].turn===o?(t[o].turn++,t[o].dealer=!0):(t[o].turn++,t[o].dealer=!1);for(var l=0;l<t.length;l++)t[l].bcardPick=s,t[l].bCard=r;for(var c=a.state.players.map(function(e){return e}),h=0;h<c.length;h++){c[h].name===e&&(c[h].score++,7===c[h].score&&console.log(c[h].name+"wonnnnnn"));var d=void 0;for(d in t)t[d].cardsInHand.length<7&&t[d].cardsInHand.push(a.state.whiteCards.splice(0,7-t[d].cardsInHand.length));a.setState({players:t,cardsinplay:[]})}a.setState({players:c},function(){var e=a.props.socket;console.log(a.state.players);var t=a.state;e.emit(E.GAME_UPDATE,t)})},a.cardsinplay=function(e){for(var t=a.state.cardsinplay,n=0;n<a.state.smoke.length;n++)t[n].name},a.state={blackCards:"",whiteCards:"",cards:[],players:[],names:["john","dave","sven"],dealer:"",cardsinplay:[],score:[],gameInProgress:!1},a.handleSubmit=a.handleSubmit.bind(Object(A.a)(Object(A.a)(a))),a.handleChange=a.handleChange.bind(Object(A.a)(Object(A.a)(a))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){0===this.state.cards.length&&this.setState({cards:w})}},{key:"componentDidMount",value:function(){var e=this.props.socket;this.initSocket(e)}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({userInput:e.target.value}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props.socket.id,a=s.a.createElement("div",null,s.a.createElement("h1",null,"Cards In Play"),s.a.createElement("h3",null,"(You Are the Dealer)"),this.state.cardsinplay.map(function(t,a){return s.a.createElement("div",null,s.a.createElement("div",{className:"cardOutline",key:a},s.a.createElement("div",{className:"cardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},t.name),s.a.createElement("button",{className:"winnerButton",onClick:function(){return e.updateScore(t.cardOwner)}},"Pick a Winner")))))})),n=s.a.createElement("div",null,s.a.createElement("h1",null,"Cards In Play"),this.state.cardsinplay.map(function(e,t){return s.a.createElement("div",null,s.a.createElement("div",{className:"cardOutline",key:t},s.a.createElement("div",{className:"cardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},e.name)))))})),i=this.state.players.map(function(e){return s.a.createElement("div",{key:e.name},e.id,": ",e.score)}),r=this.state.players.map(function(r,o){return r.name===t?s.a.createElement("div",{key:o},s.a.createElement("div",{className:"cardFrame"},s.a.createElement("div",{className:"score"},i),s.a.createElement("div",{className:"whiteCardBox"},!0===r.dealer?s.a.createElement("div",null,s.a.createElement("div",{className:"dealerPicks"},a),r.cardsInHand.map(function(e,t){return s.a.createElement("div",null,s.a.createElement("div",{key:t+1,className:"cardOutline"},s.a.createElement("div",{className:"cardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},e)))))}),s.a.createElement("div",{className:"cardOutline",key:o},s.a.createElement("div",{className:"blackCardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},s.a.createElement("div",null,r.bCard),s.a.createElement("div",null,"Pick: ",r.bcardPick)))))):s.a.createElement("div",null,s.a.createElement("div",{className:"dealerPicks"},n),r.cardsInHand.map(function(t,a){return s.a.createElement("div",{key:a+1,className:"cardOutline"},s.a.createElement("div",{className:"cardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},t),s.a.createElement("button",{id:a+": "+o,className:"pickButton",onClick:function(){return e.playcard(a,o,r.name,r.bcardPick)}},"Play Card"))))}),s.a.createElement("div",{className:"cardOutline",key:o},s.a.createElement("div",{className:"blackCardInner"},s.a.createElement("div",{className:"cardFrame-back"},"Cards Against Humanity"),s.a.createElement("div",{className:"cardFrame-front"},s.a.createElement("div",{className:"cardName"},s.a.createElement("div",null,r.bCard),s.a.createElement("div",null,"Pick: ",r.bcardPick))))))))):s.a.createElement("div",{key:o})}),o=this.state.names.map(function(e,a){return e.id===t?s.a.createElement("div",{key:a},s.a.createElement("div",{className:"playerName"},e.name),s.a.createElement("img",{className:"playerPic",src:e.picture,alt:e.id+"'s avatar"})):null}),l=this.state.names.map(function(e,t){return s.a.createElement("div",{key:t+22},e.name)});return s.a.createElement("div",{className:"gameContainer"},this.state.gameInProgress?null:s.a.createElement("div",{className:"game-flip-card"},s.a.createElement("div",{className:"game-flip-card-inner"},s.a.createElement("div",{className:"game-flip-card-front"},s.a.createElement("div",{className:"heroGame"},s.a.createElement("h1",null,"Players In Game"),s.a.createElement("div",null,l)),this.state.names.length<3?s.a.createElement("div",null,s.a.createElement("h1",null,"You need ",3-this.state.names.length," more players to begin")):s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h1",null,"Would you like to start?"),s.a.createElement("button",{onClick:this.deal,className:"pickButton"},"Deal cards")))),s.a.createElement("div",{className:"game-flip-card-back"},s.a.createElement("h1",null,"Cards"),s.a.createElement("h1",null,"Against"),s.a.createElement("h1",null,"Humanity")))),s.a.createElement("div",null,o),s.a.createElement("div",null,r))}}]),t}(r.Component)),x=a(52),T=a.n(x),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).socketUser=function(){T.a.get("https://snydz.auth0.com/userinfo",{headers:{Authorization:"Bearer ".concat(localStorage.access_token)}}).then(function(e){return a.setState({profile:e.data.name})})},a.setUser=function(e){a.state.socket.emit(E.USER_CONNECTED,e),a.setState({user:e})},a.checkstate=function(){console.log(a.state)},a.logout=function(){a.state.socket.emit(E.LOGOUT),a.setState({user:null})},a.state={socket:null,user:null,allPlayers:null,profile:"weed"},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=v()("/"),a=function(){var e=Object(y.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("wild-rice-5480.auth0.com",{headers:{Authorization:"Bearer ".concat(localStorage.access_token)}});case 2:return t=e.sent,e.next=5,t.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();t.on("connect",function(){console.log(t.id),a().then(function(a){var n={name:a.name,id:t.id,picture:a.picture};e.setState({profile:a}),t.emit(E.CURRENTPLAYS,n)})}),t.on("disconnect",function(){for(var a=e.state.allPlayers,n=0;n<a.length;n++)a[n].id===t.id&&a.splice(n,1);e.setState({allPlayers:a})}),this.setState({socket:t})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.socket;this.setState({user:t.id}),t.on(E.CURRENTPLAYS,function(t){e.setState({allPlayers:t})})}},{key:"render",value:function(){var e=this.state.socket,t=this.state.allPlayers;return s.a.createElement("div",{className:"homeContainer"},null===this.state.user?s.a.createElement("div",null,"sign in"):s.a.createElement(S,{socket:e,currentUsers:t}))}}]),t}(r.Component),N=a(216),I=a(214),_=a(215),P=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={profile:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({profile:{}});var t=this.props.auth,a=t.userProfile,n=t.getProfile;a?this.setState({profile:a}):n(function(t,a){e.setState({profile:a})})}},{key:"render",value:function(){var e=this.state.profile;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"profile-area"},s.a.createElement("h1",null,e.name),s.a.createElement(N.a,{header:"Profile"},s.a.createElement("img",{src:e.picture,alt:"profile"}),s.a.createElement("div",null,s.a.createElement(I.a,null,s.a.createElement(_.a,{glyph:"user"})," Nickname"),s.a.createElement("h3",null,e.nickname)),s.a.createElement("pre",null,JSON.stringify(e,null,2)))))}}]),t}(r.Component),M=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,"I am loading ..."))}}]),t}(r.Component),O=a(94),W=a.n(O)()(),H=a(95),D={domain:"wild-rice-5480.auth0.com",clientId:"VSnsm6g1T2YGC9YKNwyBeL_pkC0ThXFa",callbackUrl:"https://cardsapplication.herokuapp.com/callback"},B=new(function(){function e(){Object(h.a)(this,e),this.auth0=new H.a.WebAuth({domain:D.domain,clientID:D.clientId,redirectUri:D.callbackUrl,responseType:"token id_token",scope:"openid profile email"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getProfile=this.getProfile.bind(this)}return Object(d.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,a){a&&a.accessToken&&a.idToken?(e.setSession(a),W.replace("/home")):t&&(W.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getProfile",value:function(e){var t=this;console.log(this.auth0.client),this.auth0.client.userInfo(this.accessToken,function(a,n){n&&(t.userProfile=n),e(a,n)})}},{key:"setSession",value:function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),W.replace("/home")}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,W.replace("/home")}},{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}}]),e}());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=s.a.createElement(o.a,{history:W},s.a.createElement("div",null,s.a.createElement(l.a,{path:"/",render:function(e){return s.a.createElement(g,Object.assign({auth:B},e))}}),s.a.createElement(l.a,{path:"/home",render:function(e){return B.isAuthenticated()?s.a.createElement(C,Object.assign({auth:B},e)):s.a.createElement(c.a,{to:"/"})}}),s.a.createElement(l.a,{path:"/profile",render:function(e){return B.isAuthenticated()?s.a.createElement(P,Object.assign({auth:B},e)):s.a.createElement(c.a,{to:"/"})}}),s.a.createElement(l.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&B.handleAuthentication()}(e),s.a.createElement(M,e)}})));i.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e){e.exports=[{blackCards:[{text:"Why can't I sleep at night?",pick:1},{text:"I got 99 problems but _ ain't one.",pick:1},{text:"What's a girl's best friend?",pick:1},{text:"What's that smell?",pick:1},{text:"This is the way the world ends / This is the way the world ends / Not with a bang but with _.",pick:1},{text:"What is Batman's guilty pleasure?",pick:1},{text:"TSA guidelines now prohibit _ on airplanes.",pick:1},{text:"What ended my last relationship?",pick:1},{text:"MTV's new reality show features eight washed-up celebrities living with _.",pick:1},{text:"I drink to forget _.",pick:1},{text:"I'm sorry, Professor, but I couldn't complete my homework because of _.",pick:1},{text:"Alternative medicine is now embracing the curative powers of _.",pick:1},{text:"What's that sound?",pick:1},{text:"What's the next Happy Meal toy?",pick:1},{text:"It's a pity that kids these days are all getting involved with _.",pick:1},{text:"In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.",pick:1},{text:"_. That's how I want to die.",pick:1},{text:"What does Dick Cheney prefer?",pick:1},{text:"What's the most emo?",pick:1},{text:"Instead of coal, Santa now gives the bad children _.",pick:1},{text:"Next from J.K. Rowling: Harry Potter and the Chamber of _.",pick:1},{text:"A romantic, candlelit dinner would be incomplete without _.",pick:1},{text:"White people like _.",pick:1},{text:"_. Betcha can't have just one!",pick:1},{text:"War!What is it good for?",pick:1},{text:"BILLY MAYS HERE FOR _.",pick:1},{text:"_. High five, bro.",pick:1},{text:"During sex, I like to think about _.",pick:1},{text:"What did I bring back from Mexico?",pick:1},{text:"What are my parents hiding from me?",pick:1},{text:"What will always get you laid?",pick:1},{text:"What would grandma find disturbing, yet oddly charming?",pick:1},{text:"What did the U.S. airdrop to the children of Afghanistan?",pick:1},{text:"What helps Obama unwind?",pick:1},{text:"What's there a ton of in heaven?",pick:1},{text:"Major League Baseball has banned _ for giving players an unfair advantage.",pick:1},{text:"When I am a billionaire, I shall erect a 50-foot statue to commemorate _.",pick:1},{text:"What's the new fad diet?",pick:1},{text:"When I am the President of the United States, I will create the Department of _.",pick:1},{text:"_. It's a trap!",pick:1},{text:"How am I maintaining my relationship status?",pick:1},{text:"What will I bring back in time to convince people that I am a powerful wizard?",pick:1},{text:"While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.",pick:1},{text:"Coming to Broadway this season, _: The Musical.",pick:1},{text:"What's my secret power?",pick:1},{text:"What gives me uncontrollable gas?",pick:1},{text:"But before I kill you, Mr. Bond, I must show you _.",pick:1},{text:"What never fails to liven up the party?",pick:1},{text:"What am I giving up for Lent?",pick:1},{text:"What do old people smell like? ",pick:1},{text:"The class field trip was completely ruined by _.",pick:1},{text:"When Pharaoh remained unmoved, Moses called down a plague of _.",pick:1},{text:"I do not know with which weapons World War III will be fought, but World War IV will be fought with _.",pick:1},{text:"What's Teach for America using to inspire inner city students to succeed?",pick:1},{text:"In Michael Jackson's final moments, he thought about _.",pick:1},{text:"Why do I hurt all over?",pick:1},{text:"Studies show that lab rats navigate mazes 50% faster after being exposed to _.",pick:1},{text:"Why am I sticky?",pick:1},{text:"What's my anti-drug?",pick:1},{text:"And the Academy Award for _ goes to _.",pick:2},{text:"For my next trick, I will pull _ out of _.",pick:2},{text:"_: Good to the last drop.",pick:1},{text:"What did Vin Diesel eat for dinner?",pick:1},{text:"_: kid-tested, mother-approved.",pick:1},{text:"What gets better with age?",pick:1},{text:"I never truly understood _ until I encountered _.",pick:2},{text:"Rumor has it that Vladimir Putin's favorite delicacy is _ stuffed with _.",pick:2},{text:"Lifetime presents _, the story of _.",pick:2},{text:"Make a haiku.",pick:3},{text:"In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",pick:2},{text:"_ is a slippery slope that leads to _.",pick:2},{text:"In a world ravaged by _, our only solace is _.",pick:2},{text:"That's right, I killed _. How, you ask? _.",pick:2},{text:"When I was tripping on acid, _ turned into _.",pick:2},{text:"_ + _ = _.",pick:3},{text:"What's the next superhero/sidekick duo?",pick:2},{text:"Dear Abby,I'm having some trouble with _ and would like your advice.",pick:1},{text:"After the earthquake, Sean Penn brought _ to the people of Haiti.",pick:1},{text:"In L.A. County Jail, word is you can trade 200 cigarettes for _.",pick:1},{text:"Maybe she's born with it. Maybe it's _.",pick:1},{text:"Life for American Indians was forever changed when the White Man introduced them to _.",pick:1},{text:"Next on ESPN2, the World Series of _.",pick:1},{text:"Step 1: _. Step 2: _. Step 3: Profit.",pick:2},{text:"Here is the church Here is the steeple Open the doors And there is _.",pick:1},{text:"How did I lose my virginity?",pick:1},{text:"During his childhood, Salvador Dali produced hundreds of paintings of _.",pick:1},{text:"In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",pick:1},{text:"What don't you want to find in your Kung Pao chicken?",pick:1},{text:"The Smithsonian Museum of Natural History has just opened an exhibit on _.",pick:1},{text:"Daddy, why is Mommy crying?",pick:1}],whiteCards:["Coat hanger abortions.","Man meat.","Autocannibalism.","Vigorous jazz hands.","Flightless birds.","Pictures of boobs.","Doing the right thing.","The violation of our most basic human rights.","Viagra.","Self-loathing.","Spectacular abs.","A balanced breakfast.","Roofies.","Concealing a boner.","Amputees.","The Big Bang.","Former President George W. Bush.","The Rev. Dr. Martin Luther King, Jr.","Smegma.","Being marginalized.","Cuddling.","Laying an egg.","The Pope.","Aaron Burr.","Genital piercings.","Fingering.","A bleached asshole.","Horse meat.","Fear itself.","Science.","Elderly Japanese men.","Stranger danger.","The terrorists.","Praying the gay away.","Same-sex ice dancing.","Ethnic cleansing.","Cheating in the Special Olympics.","German dungeon porn.","Bingeing and purging.","Making a pouty face.","William Shatner.","Heteronormativity.","Nickelback.","Tom Cruise.","The profoundly handicapped.","The placenta.","Chainsaws for hands.","Arnold Schwarzenegger.","An icepick lobotomy.","Goblins.","Object permanence.","Dying.","Foreskin.","A falcon with a cap on its head.","Hormone injections.","Dying of dysentery.","Sexy pillow fights.","The invisible hand.","A really cool hat.","Sean Penn.","Heartwarming orphans.","The clitoris.","The Three-Fifths compromise.","A sad handjob.","Men.","Historically black colleges.","A micropenis.","Raptor attacks.","Agriculture.","Vikings.","Pretending to care.","The Underground Railroad.","My humps.","Being a dick to children.","Geese.","Bling.","Sniffing glue.","The South.","An Oedipus complex.","Eating all of the cookies before the AIDS bake-sale.","Sexting.","YOU MUST CONSTRUCT ADDITIONAL PYLONS.","Mutually-assured destruction.","Sunshine and rainbows.","Count Chocula.","Sharing needles.","Being rich.","Skeletor.","A sausage festival.","Michael Jackson.","Emotions.","Farting and walking away.","The Chinese gymnastics team.","Necrophilia.","Spontaneous human combustion.","Yeast.","Leaving an awkward voicemail.","Dick Cheney.","White people.","Penis envy.","Teaching a robot to love.","Sperm whales.","Scrubbing under the folds.","Panda sex.","Whipping it out.","Catapults.","Masturbation.","Natural selection.","Opposable thumbs.","A sassy black woman.","AIDS.","The KKK.","Figgy pudding.","Seppuku.","Gandhi.","Preteens.","Toni Morrison's vagina.","Five-Dollar Footlongs","Land mines.","A sea of troubles.","A zesty breakfast burrito.","Christopher Walken.","Friction.","Balls.","Dental dams.","A can of whoop-ass.","A tiny horse.","Waiting 'til marriage.","Authentic Mexican cuisine.","Genghis Khan.","Old-people smell.","Feeding Rosie O'Donnell.","Pixelated bukkake.","Friends with benefits.","The token minority.","The Tempur-Pedic Swedish Sleep System","A thermonuclear detonation.","Take-backsies.","The Rapture.","A cooler full of organs.","Sweet, sweet vengeance.","RoboCop.","Keanu Reeves.","Drinking alone.","Giving 110%.","Flesh-eating bacteria.","The American Dream.","Taking off your shirt.","Me time.","A murder most foul.","The inevitable heat death of the universe.","The folly of man.","That thing that electrocutes your abs.","Cards Against Humanity.","Fiery poops.","Poor people.","Edible underpants.","Britney Spears at 55.","All-you-can-eat shrimp for $4.99.","Pooping back and forth. Forever.","Fancy Feast","Jewish fraternities.","Being a motherfucking sorcerer.","Pulling out.","Picking up girls at the abortion clinic.","The homosexual agenda.","The Holy Bible.","Passive-agression.","Ronald Reagan.","Vehicular manslaughter.","Nipple blades.","Assless chaps.","Full frontal nudity.","Hulk Hogan.","Daddy issues.","The hardworking Mexican.","Natalie Portman.","Waking up half-naked in a Denny's parking lot.","God.","Sean Connery.","Saxophone solos.","Gloryholes.","The World of Warcraft.","Homeless people.","Scalping.","Darth Vader.","Eating the last known bison.","Guys who don't call.","Hot Pockets","A time travel paradox.","The milk man.","Testicular torsion.","Dropping a chandelier on your enemies and riding the rope up.","World peace.","A salty surprise.","Poorly-timed Holocaust jokes.","Smallpox blankets.","Licking things to claim them as your own.","The heart of a child.","Robert Downey, Jr.","Lockjaw.","Eugenics.","A good sniff.","Friendly fire.","The taint; the grundle; the fleshy fun-bridge.","Wearing underwear inside-out to avoid doing laundry.","Hurricane Katrina.","Free samples.","Jerking off into a pool of children's tears.","A foul mouth.","The glass ceiling.","Republicans.","Explosions.","Michelle Obama's arms.","Getting really high.","Attitude.","Sarah Palin.","The bermensch.","Altar boys.","My soul.","My sex life.","Pedophiles.","72 virgins.","Pabst Blue Ribbon.","Domino's Oreo Dessert Pizza.","A snapping turtle biting the tip of your penis.","The Blood of Christ.","Half-assed foreplay.","My collection of high-tech sex toys.","A middle-aged man on roller skates.","Bitches.","Bill Nye the Science Guy.","Italians.","A windmill full of corpses.","Adderall","Crippling debt.","A stray pube.","Prancing.","Passing a kidney stone.","A brain tumor.","Leprosy.","Puppies!","Bees?","Frolicking.","Repression.","Road head.","A bag of magic beans.","An asymmetric boob job.","Dead parents.","Public ridicule.","A mating display.","A mime having a stroke.","Stephen Hawking talking dirty.","African children.","Mouth herpes.","Overcompensation.","Riding off into the sunset.","Being on fire.","Tangled Slinkys.","Civilian casualties.","Auschwitz.","My genitals.","Not reciprocating oral sex.","Lactation.","Being fabulous.","Shaquille O'Neal's acting career.","My relationship status.","Asians who aren't good at math.","Alcoholism.","Incest.","Grave robbing.","Hope.","8 oz. of sweet Mexican black-tar heroin.","Kids with ass cancer.","Winking at old people.","The Jews.","Justin Bieber.","Doin' it in the butt.","A lifetime of sadness.","The Hamburglar.","Swooping.","Classist undertones.","New Age music.","Not giving a shit about the Third World.","The Kool-Aid Man.","A hot mess.","Tentacle porn.","Lumberjack fantasies.","The gays.","Scientology.","Estrogen.","GoGurt","Judge Judy.","Dick fingers.","Racism.","Surprise sex!","Police brutality.","Passable transvestites.","The Virginia Tech Massacre.","When you fart and a little bit comes out.","Oompa-Loompas.","A fetus.","Obesity.","Tasteful sideboob.","Hot people.","BATMAN!!!","Black people.","A gassy antelope.","Sexual tension.","Third base.","Racially-biased SAT questions.","Porn stars.","A Super Soaker full of cat pee.","Muhammed (Praise Be Unto Him).","Puberty.","A disappointing birthday party.","An erection that lasts longer than four hours.","White privilege.","Getting so angry that you pop a boner.","Wifely duties.","Two midgets shitting into a bucket.","Queefing.","Wiping her butt.","Golden showers.","Barack Obama.","Nazis.","A robust mongoloid.","An M. Night Shyamalan plot twist.","Getting drunk on mouthwash.","Lunchables","Women in yogurt commercials.","John Wilkes Booth.","Powerful thighs.","Mr. Clean, right behind you.","Multiple stab wounds.","Cybernetic enhancements.","Serfdom.","Kanye West.","Women's suffrage.","Children on leashes.","Harry Potter erotica.","The Dance of the Sugar Plum Fairy.","Lance Armstrong's missing testicle.","Parting the Red Sea.","The Amish.","Dead babies.","Child beauty pageants.","AXE Body Spray.","Centaurs.","Copping a feel.","Grandma.","Famine.","The Trail of Tears.","The miracle of childbirth.","Finger painting.","A monkey smoking a cigar.","The Make-A-Wish Foundation.","Anal beads.","The Force.","Kamikaze pilots.","Dry heaving.","Active listening.","Ghosts.","The Hustle.","Peeing a little bit.","Another goddamn vampire movie.","Shapeshifters.","The Care Bear Stare.","Hot cheese.","A mopey zoo lion.","A defective condom.","Teenage pregnancy.","A Bop It","Expecting a burp and vomiting on the floor.","Horrifying laser hair removal accidents.","Boogers.","Unfathomable stupidity.","Breaking out into song and dance.","Soup that is too hot.","Morgan Freeman's voice.","Getting naked and watching Nickelodeon.","MechaHitler.","Flying sex snakes.","The true meaning of Christmas.","My inner demons.","Pac-Man uncontrollably guzzling cum.","My vagina.","A homoerotic volleyball montage.","Actually taking candy from a baby.","Crystal meth.","Exactly what you'd expect.","Natural male enhancement.","Passive-aggressive Post-it notes.","Inappropriate yodeling.","Lady Gaga.","The Little Engine That Could.","Vigilante justice.","A death ray.","Poor life choices.","A gentle caress of the inner thigh.","Embryonic stem cells.","Nicolas Cage.","Firing a rifle into the air while balls deep in a squealing hog.","Switching to Geico","The chronic.","Erectile dysfunction.","Home video of Oprah sobbing into a Lean Cuisine","A bucket of fish heads.","50,000 volts straight to the nipples.","Being fat and stupid.","Hospice care.","A pyramid of severed heads.","Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.","A subscription to Men's Fitness.","Crucifixion.","A micropig wearing a tiny raincoat and booties.","Some god-damn peace and quiet.","Used panties.","A tribe of warrior women.",'The penny whistle solo from "My Heart Will Go On."',"An oversized lollipop.","Helplessly giggling at the mention of Hutus and Tutsis.","Not wearing pants.","Consensual sex.","Her Majesty, Queen Elizabeth II.","Funky fresh rhymes.","The art of seduction.","The Devil himself.","Advice from a wise, old black man.","Destroying the evidence.","The light of a billion suns.","Wet dreams.","Synergistic management solutions.","Growing a pair.","Silence.","An M16 assault rifle.","Poopy diapers.","A live studio audience.","The Great Depression.","A spastic nerd.","Rush Limbaugh's soft, shitty body.","Tickling Sean Hannity, even after he tells you to stop.","Stalin.","Brown people.","Rehab.","Capturing Newt Gingrich and forcing him to dance in a monkey suit.","Battlefield amputations.","An uppercut.","Shiny objects.","An ugly face.","Menstrual rage.","A bitch slap.","One trillion dollars.","Chunks of dead prostitute.","The entire Mormon Tabernacle Choir.","The female orgasm.","Extremely tight pants.","The Boy Scouts of America.","Stormtroopers.","Throwing a virgin into a volcano."],Base:{name:"Base Set",black:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89],white:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459]},order:["Base"]}]},96:function(e,t,a){e.exports=a(211)}},[[96,2,1]]]);
//# sourceMappingURL=main.affd9a9b.chunk.js.map