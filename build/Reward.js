(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Reward',[],b):'object'==typeof exports?exports.Reward=b():a.Reward=b()})('undefined'==typeof self?this:self,function(){var a=Math.sin,b=Math.cos,c=Math.PI;return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=7)}([function(d,e){'use strict';Object.defineProperty(e,'__esModule',{value:!0});const f=c,g=['#A45BF1','#25C6F6','#72F753','#F76C88','#F5F770'],h=(a,b,c,d,e)=>Array.from({length:b}).map((b,f)=>{const g=document.createElement('span'),h=e[f%e.length];return g.style['background-color']=h,g.style.width=`${c}px`,g.style.height=`${c}px`,g.style.position='absolute',g.style.zIndex=d,a.appendChild(g),g}),i=(a)=>a*(f/180),j=(a,b,c,d)=>{const e=i(a),g=i(b);return{x:0,y:0,wobble:10*d(),velocity:0.5*c+d()*c,angle2D:-e+(0.5*g-d()*g),angle3D:-(f/4)+d()*(f/2),tiltAngle:d()*f}},k=(c,d,e)=>{c.physics.x+=b(c.physics.angle2D)*c.physics.velocity,c.physics.y+=a(c.physics.angle2D)*c.physics.velocity,c.physics.z+=a(c.physics.angle3D)*c.physics.velocity,c.physics.wobble+=0.1,c.physics.velocity*=e,c.physics.y+=3,c.physics.tiltAngle+=0.1;var f=c.physics;const g=f.x,h=f.y,i=f.tiltAngle,j=f.wobble,k=g+10*b(j),l=h+10*a(j),m=`translate3d(${k}px, ${l}px, 0) rotate3d(1, 1, 1, ${i}rad)`;c.element.style.transform=m,c.element.style.opacity=1-d},l=(a,b,c,d)=>{const e=d;let f=0;const g=()=>{b.forEach((a)=>k(a,f/e,c)),f+=1,f<e?requestAnimationFrame(g):b.forEach((b)=>{if(b.element.parentNode===a)return a.removeChild(b.element)})};requestAnimationFrame(g)};e['default']=(a,{elementCount:b=50,elementSize:c=8,colors:d=g,angle:e=90,spread:f=45,decay:i=0.9,lifetime:k=200,startVelocity:m=35,zIndex:n=0,random:o=Math.random}={})=>{const p=h(a,b,c,n,d),q=p.map((a)=>({element:a,physics:j(e,f,m,o)}));l(a,q,i,k)}},function(d,e){'use strict';Object.defineProperty(e,'__esModule',{value:!0});const f=c,g=['\uD83D\uDC4D','\uD83D\uDE0A','\uD83C\uDF89'],h=(a,b,c,d,e)=>Array.from({length:b}).map((b,f)=>{const g=document.createElement('span'),h=e[f%e.length];return g.innerHTML=h,g.style.fontSize=`${c}px`,g.style.position='absolute',g.style.zIndex=d,a.appendChild(g),g}),i=(a)=>a*(f/180),j=(a,b,c,d)=>{const e=i(a),g=i(b);return{x:0,y:0,wobble:10*d(),velocity:0.5*c+d()*c,angle2D:-e+(0.5*g-d()*g),angle3D:-(f/4)+d()*(f/2),tiltAngle:d()*f}},k=(c,d,e)=>{c.physics.x+=b(c.physics.angle2D)*c.physics.velocity,c.physics.y+=a(c.physics.angle2D)*c.physics.velocity,c.physics.wobble+=0,c.physics.velocity*=e,c.physics.y+=5,c.physics.tiltAngle+=0.1;var f=c.physics;const g=f.x,h=f.y,i=f.tiltAngle,j=`translate3d(${g+0}px, ${h+0}px, 0) rotate(${i}rad)`;c.element.style.transform=j,c.element.style.opacity=1-d},l=(a,b,c,d)=>{const e=d;let f=0;const g=()=>{b.forEach((a)=>k(a,f/e,c)),f+=1,f<e?requestAnimationFrame(g):b.forEach((b)=>{if(b.element.parentNode===a)return a.removeChild(b.element)})};requestAnimationFrame(g)};e['default']=(a,{angle:b=90,decay:c=0.9,spread:d=45,startVelocity:e=35,elementCount:f=50,elementSize:i=25,lifetime:k=200,zIndex:m=0,emoji:n=g,random:o=Math.random}={})=>{const p=h(a,f,i,m,n),q=p.map((a)=>({element:a,physics:j(b,d,e,o)}));l(a,q,c,k)}},function(a){a.exports=require('react')},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),c.d(b,'default',function(){return l});var d=c(2),e=c.n(d),f=c(4),g=c.n(f),h=c(0),i=c(1);const j=g.a.div({clicked:{y:5,transition:{type:'spring',stiffness:200,damping:2}},resting:{y:0,transition:{type:'spring',stiffness:200,damping:2}}}),k=g.a.div({punished:{x:5,transition:{type:'spring',stiffness:200,damping:2}},notPunished:{x:0,transition:{type:'spring',stiffness:200,damping:2}}});class l extends d.Component{constructor(...a){var b;return b=super(...a),Object.defineProperty(this,'state',{enumerable:!0,writable:!0,value:{animate:!1,punish:!1}}),Object.defineProperty(this,'rewardMe',{enumerable:!0,writable:!0,value:()=>{const a=[this.container,this.props.config];switch(this.props.type){case'confetti':{this.handleAnimation(),Object(h['default'])(...a);break}case'emoji':{this.handleAnimation(),Object(i['default'])(...a);break}default:{this.handleAnimation(),Object(h['default'])(...a);break}}}}),Object.defineProperty(this,'punishMe',{enumerable:!0,writable:!0,value:()=>{this.handlePunishAnimation()}}),Object.defineProperty(this,'handleAnimation',{enumerable:!0,writable:!0,value:()=>{this.setState({animate:!0},()=>{setTimeout(()=>{this.setState({animate:!1})},100)})}}),Object.defineProperty(this,'handlePunishAnimation',{enumerable:!0,writable:!0,value:()=>{this.setState({punish:!0},()=>{setTimeout(()=>{this.setState({punish:!1})},100)})}}),b}render(){var a=this.props,b=a.config;const c=b===void 0?{}:b,e=a.children;var f=c.springAnimation;const g=!(f!==void 0)||f;var h=this.state;const i=h.animate,l=h.punish;return Object(d.createElement)('span',null,Object(d.createElement)('div',{ref:(a)=>{this.container=a}}),Object(d.createElement)(k,{pose:g&&(l?'punished':'notPunished')},Object(d.createElement)(j,{pose:g&&(i?'clicked':'resting')},e)))}}},function(a){a.exports=require('react-pose')},,,function(a,b,c){a.exports=c(3)}])});
//# sourceMappingURL=Reward.js.map