(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n),a=s(4),h=s.n(a),o=s(1),r=s(2),c=s(7),d=s(6),u=s(5),l=s.n(u),y=function(){function t(e){Object(o.a)(this,t),this.p5=e,this.x=[300],this.y=[300],this.speedX=0,this.speedY=0,this.dir="",this.score=0}return Object(r.a)(t,[{key:"changeDirection",value:function(t,e){this.speedX=t,this.speedY=e}},{key:"checkEat",value:function(t,e,s){if(Math.abs(this.x[this.x.length-1]-t.x)<20&&Math.abs(this.y[this.x.length-1]-t.y)<20)return"UP"===this.dir?(this.x.push(t.x),this.y.push(t.y-20)):"LEFT"===this.dir?(this.x.push(t.x-20),this.y.push(t.y)):"RIGHT"===this.dir?(this.x.push(t.x+20),this.y.push(t.y)):"DOWN"===this.dir&&(this.x.push(t.x),this.y.push(t.y+20)),t.x=t.getRandomFood(e),t.y=t.getRandomFood(s),this.score++,this.score}},{key:"update",value:function(t,e){var s=this.x[this.x.length-1],n=this.y[this.y.length-1];this.x.shift(),this.y.shift(),s+=this.speedX,n+=this.speedY,this.x.push(s),this.y.push(n);for(var i=0;i<this.x.length;i++)this.x[i]+20>t?this.x[i]=0:this.x[i]<0?this.x[i]=t:this.y[i]+20>e?this.y[i]=0:this.y[i]<0&&(this.y[i]=e)}},{key:"draw",value:function(){for(var t=0;t<this.x.length;t++)this.p5.fill(0,255,0),this.p5.noStroke(),this.p5.rect(this.x[t],this.y[t],20,20)}},{key:"checkDeath",value:function(){for(var t=0,e=0;e<this.x.length-1;e++)Math.abs(this.x[this.x.length-1]-this.x[e])<20&&Math.abs(this.y[this.y.length-1]-this.y[e])<20&&(this.p5.noLoop(),t=1);return 1===t}}]),t}(),k=function(){function t(e,s,n,i){var a=this;Object(o.a)(this,t),this.getRandomFood=function(t){var e=Math.floor(Math.random()*t)-20;return e%20===0&&e>0&&!a.snake.x.includes(e)&&!a.snake.y.includes(e)&&a.cnt<20?(a.cnt++,e):(a.cnt=0,a.getRandomFood(t))},this.p5=e,this.snake=i,this.cnt=0,this.x=this.getRandomFood(s),this.y=this.getRandomFood(n)}return Object(r.a)(t,[{key:"draw",value:function(){this.p5.fill(255,0,0),this.p5.noStroke(),this.p5.rect(this.x,this.y,20,20)}}]),t}(),p=function(t){Object(c.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={},n.setup=function(t,e){t.createCanvas(600,600).parent(e),t.frameRate(12),n.snake=new y(t),n.food=new k(t,t.width,t.height,n.snake)},n.draw=function(t){t.background(0),n.food.draw(),n.snake.update(t.width,t.height),n.snake.checkEat(n.food,t.width,t.height);var e=n.snake.score;n.setState({score:e});var s=n.snake.checkDeath();n.setState({gameEnded:s}),n.snake.draw()},n.keyPressed=function(t){38===t.keyCode?(n.snake.changeDirection(0,-20),n.snake.dir="UP"):37===t.keyCode?(n.snake.changeDirection(-20,0),n.snake.dir="LEFT"):39===t.keyCode?(n.snake.changeDirection(20,0),n.snake.dir="RIGHT"):40===t.keyCode&&(n.snake.changeDirection(0,20),n.snake.dir="DOWN")},n.getPlayAgainButton=function(){return n.state.gameEnded?i.a.createElement("button",{className:"btn",onClick:n.playAgain}," ","Play Again"):i.a.createElement("div",null)},n.playAgain=function(){window.location.reload()},n.snake=null,n.state.score=0,n.state.gameEnded=!1,n}return Object(r.a)(s,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"score"},"Score: ",this.state.score),i.a.createElement(l.a,{setup:this.setup,draw:this.draw,keyPressed:this.keyPressed}),this.getPlayAgainButton())}}]),s}(n.Component);s(13);h.a.render(i.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,s){t.exports=s(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.429bf007.chunk.js.map