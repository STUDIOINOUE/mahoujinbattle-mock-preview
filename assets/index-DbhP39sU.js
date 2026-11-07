(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`mb.mute.v1`,t=null,n=null,r=null,i=!1,a=!1,o=!1;function s(){if(o)return a;o=!0;try{a=typeof localStorage<`u`&&localStorage.getItem(e)===`1`}catch{a=!1}return a}function c(){return s()}function l(t){a=t,o=!0;try{typeof localStorage<`u`&&localStorage.setItem(e,t?`1`:`0`)}catch{}}function u(e){let t=Math.max(1,Math.floor(e.sampleRate*.5)),n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;return n}function d(){if(typeof window<`u`)try{if(!t){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;t=new e({latencyHint:`interactive`}),n=t.createGain(),n.gain.value=1;let i=t.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=24,i.ratio.value=4,i.attack.value=.003,i.release.value=.15,n.connect(i),i.connect(t.destination),r=u(t)}t.state!==`running`&&t.resume().catch(()=>{}),!i&&typeof document<`u`&&(i=!0,document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&t&&t.state!==`running`&&t.resume().catch(()=>{})}));let e=t.createBuffer(1,1,t.sampleRate),a=t.createBufferSource();a.buffer=e,a.connect(t.destination),a.start(0)}catch{}}function f(){if(!t)return 0;let e=t;return(e.baseLatency??0)+(e.outputLatency??0)}function p(e,t,n,r,i){let a=e.gain;a.cancelScheduledValues(t),a.setValueAtTime(1e-4,t),a.linearRampToValueAtTime(Math.max(1e-4,n),t+r),a.exponentialRampToValueAtTime(1e-4,t+r+i)}function m(e,r,i,a){let o=t.createOscillator(),s=t.createGain();o.type=`square`,o.frequency.value=e,o.connect(s),s.connect(n),p(s,a,i*.35,.002,r),o.start(a),o.stop(a+r+.05)}function h(e,i,a,o){if(!r)return;let s=t.createBufferSource();s.buffer=r;let c=t.createBiquadFilter();c.type=`bandpass`,c.frequency.value=a,c.Q.value=.7;let l=t.createGain();s.connect(c),c.connect(l),l.connect(n),p(l,o,i*.4,.004,e),s.start(o),s.stop(o+e+.05)}function g(e,r,i,a){let o=t.createOscillator(),s=t.createGain();o.type=`sine`,o.frequency.value=e,o.connect(s),s.connect(n),p(s,a,i,.002,r),o.start(a),o.stop(a+r+.05)}function _(e,r,i,a){for(let[o,s]of[[1,.3],[2.76,.16],[4.2,.08]]){let c=t.createOscillator(),l=t.createGain();c.type=`sine`,c.frequency.value=e*o,c.connect(l),l.connect(n),p(l,a,i*s,.002,r),c.start(a),c.stop(a+r+.05)}}function v(e,t){g(520,.1,e*.3,t),g(780,.14,e*.35,t+.09)}function y(e,i,a,o){let s=t.createOscillator(),c=t.createGain();if(s.type=`sine`,s.frequency.setValueAtTime(e*2.2,o),s.frequency.exponentialRampToValueAtTime(Math.max(30,e*.6),o+i*.6),s.connect(c),c.connect(n),p(c,o,a*.5,.002,i),s.start(o),s.stop(o+i+.05),r){let i=t.createBufferSource();i.buffer=r;let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=e*3;let c=t.createGain();i.connect(s),s.connect(c),c.connect(n),p(c,o,a*.25,.001,.03),i.start(o),i.stop(o+.05)}}function b(e,r={}){if(!t||!n||s())return;let i=r.gain??1,a=t.currentTime;try{switch(e){case`tele`:m(180,.05,i,a);break;case`open`:m(1100,.045,i,a);break;case`dodge`:h(.12,i,2400,a);break;case`just`:_(1600,.18,i,a);break;case`full`:v(i,a);break;case`release`:y(90,.3,i,a);break;case`hit`:y(260,.08,i,a);break;case`finish`:y(70,.5,i*1.2,a)}}catch{}}function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}function S(e,t){if(x(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(x(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function C(e){var t=S(e,`string`);return x(t)==`symbol`?t:t+``}function w(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T={open:!1,fps:0,detect:null,features:null,quant:null,quantVector:null,monsterJson:``,notes:[],extra:{}};window.__mbDebug=T;var E=null;function D(e){T.notes.unshift(`${new Date().toLocaleTimeString()} ${e}`),T.notes.length>12&&T.notes.pop()}function O(){if(E)return;E=document.createElement(`div`),E.id=`debug-panel`,E.style.display=`none`,document.body.appendChild(E);let e=0,t=0,n=0,r=()=>{e&&(clearTimeout(e),e=0)};document.addEventListener(`pointerdown`,i=>{i.clientX>90||i.clientY>90||(t=i.clientX,n=i.clientY,r(),e=window.setTimeout(()=>{e=0,T.open=!T.open,A()},600))},{capture:!0}),document.addEventListener(`pointermove`,i=>{e&&Math.hypot(i.clientX-t,i.clientY-n)>12&&r()},{capture:!0}),document.addEventListener(`pointerup`,r,{capture:!0}),document.addEventListener(`pointercancel`,r,{capture:!0});let i=()=>{requestAnimationFrame(i),T.open&&A()};requestAnimationFrame(i)}var k=0;function A(){if(!E||(E.style.display=T.open?`block`:`none`,!T.open))return;let e=performance.now();if(e-k<250)return;k=e;let t=T.detect,n=t?`ellipse: ${t.ellipse?`c=(${t.ellipse.cx.toFixed(0)},${t.ellipse.cy.toFixed(0)}) a=${t.ellipse.a.toFixed(0)} b=${t.ellipse.b.toFixed(0)} ang=${(t.ellipse.angle*180/Math.PI).toFixed(0)}°`:`none`}
err=${t.err.toFixed(3)} cov=${t.coverage.toFixed(2)} circ=${t.circularity.toFixed(2)} cand=${t.candidates} ${t.ms.toFixed(1)}ms frame=${t.w}x${t.h}
locked=${t.locked} stable=${t.stable.toFixed(2)}s`:`-`,r=Object.entries(T.extra).map(([e,t])=>`${e}=${t}`).join(`  `),i=window.__mbBattle?.sim?.beatInfo?.(1)??null,a=i?`相手の拍 ${(i.interval>0?60/i.interval:0).toFixed(0)} BPM / 次の拍まで ${i.nextIn.toFixed(2)}s / 拍 #${i.index}`:`相手の拍 -(バトル外)`,o=`音レイテンシ ${(f()*1e3).toFixed(1)}ms`,s=T.quant,c=s?`hue=${s.hueBin}(${s.chromatic?`有彩`:`無彩`}) ink=${s.inkLevel} closed=${s.closedLevel} sharp=${s.sharpLevel} rough=${s.roughLevel}
radial=[${s.radial.join(`,`)}] angular=[${s.angular.join(`,`)}]
vector=[${T.quantVector?.join(`,`)??``}]`:`-`;E.innerHTML=`<div class="dbg-head">debug <span>${T.fps.toFixed(0)} fps</span> <button id="dbg-close">×</button></div>
<pre>${r}
[beat / audio]
${a}
${o}
[detect]
${n}
[quant]
${c}
[features]
${T.features?JSON.stringify(T.features,null,1):`-`}
[monster]
${T.monsterJson||`-`}
[log]
${T.notes.join(`
`)}</pre>`,E.querySelector(`#dbg-close`)?.addEventListener(`click`,()=>{T.open=!1,A()})}var j=class{constructor(){w(this,`frames`,0),w(this,`last`,performance.now())}tick(){this.frames++;let e=performance.now();e-this.last>=500&&(T.fps=this.frames*1e3/(e-this.last),this.frames=0,this.last=e)}};function M(e,t=2166136261){let n=t>>>0;for(let t=0;t<e.length;t++)n^=e[t]&255,n=Math.imul(n,16777619)>>>0;return n>>>0}var N=class{constructor(e){w(this,`s`,void 0),this.s=e>>>0,this.s===0&&(this.s=2654435769)}next(){let e=(this.s+=1831565813)>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}pick(e){return e[Math.floor(this.next()*e.length)]}weighted(e){let t=e.reduce((e,t)=>e+t.w,0),n=this.next()*t;for(let t of e)if(n-=t.w,n<=0)return t.v;return e[e.length-1].v}};function P(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),i=Math.min(e,t,n),a=(r+i)/2,o=r-i;if(o<1e-6)return{h:0,s:0,l:a};let s=a>.5?o/(2-r-i):o/(r+i),c;return c=r===e?((t-n)/o+(t<n?6:0))*60:r===t?((n-e)/o+2)*60:((e-t)/o+4)*60,{h:c,s,l:a}}function ee(e,t,n){if(e=(e%360+360)%360/360,t<=0){let e=Math.round(n*255);return[e,e,e]}let r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=e=>(e<0&&(e+=1),e>1&&--e,e<1/6?i+(r-i)*6*e:e<1/2?r:e<2/3?i+(r-i)*(2/3-e)*6:i);return[Math.round(a(e+1/3)*255),Math.round(a(e)*255),Math.round(a(e-1/3)*255)]}function F(e,t,n){let[r,i,a]=ee(e,t,n);return`#`+[r,i,a].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function te(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function ne(e){let[t,n,r]=te(e);return P(t,n,r)}var re=(e,t,n)=>Math.min(n,Math.max(t,e));function I(e,t,n){return F(e,t<.18?.06:re(t,.4,.9),re(n,.35,.75))}function ie(e){let{h:t,s:n,l:r}=ne(e);return F(t,re(n+.08,0,1),re(r-.18,0,1))}function ae(e,t=.18){let{h:n,s:r,l:i}=ne(e);return F(n,re(r-.1,0,1),re(i+t,0,.92))}var L=`#22201C`,oe=`#5A5650`;function se(e,t,n){let r=new Uint8Array(t*n);for(let t=0,n=0;t<r.length;t++,n+=4)r[t]=e[n]*77+e[n+1]*150+e[n+2]*29>>8;return r}function ce(e,t,n){let r=t+1,i=new Float64Array(r*(n+1));for(let a=1;a<=n;a++){let n=0,o=a*r,s=(a-1)*r,c=(a-1)*t;for(let r=1;r<=t;r++)n+=e[c+r-1],i[o+r]=i[s+r]+n}return i}function le(e,t,n,r,i){let a=ce(e,t,n),o=t+1,s=new Uint8Array(t*n);for(let c=0;c<n;c++){let l=Math.max(0,c-r),u=Math.min(n-1,c+r);for(let n=0;n<t;n++){let d=Math.max(0,n-r),f=Math.min(t-1,n+r),p=(f-d+1)*(u-l+1),m=a[(u+1)*o+f+1]-a[l*o+f+1]-a[(u+1)*o+d]+a[l*o+d];s[c*t+n]=+(e[c*t+n]<m/p-i)}}return s}function R(e,t,n){let r=new Float32Array(t*n);for(let i=1;i<n-1;i++){let n=i*t;for(let i=1;i<t-1;i++){let a=n+i,o=-e[a-t-1]-2*e[a-1]-e[a+t-1]+e[a-t+1]+2*e[a+1]+e[a+t+1],s=-e[a-t-1]-2*e[a-t]-e[a-t+1]+e[a+t-1]+2*e[a+t]+e[a+t+1];r[a]=Math.sqrt(o*o+s*s)}}return r}function ue(e,t,n,r=.92,i=18){let a=t*n,o=new Int32Array(256);for(let t=0;t<a;t++){let n=Math.min(255,Math.floor(e[t]/600*255));o[n]++}let s=0,c=255;for(let e=255;e>=0;e--)if(s+=o[e],s>=a*(1-r)){c=e;break}let l=Math.max(i,c/255*600),u=new Uint8Array(a);for(let t=0;t<a;t++)u[t]=+(e[t]>=l);return u}function de(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return Math.abs(t)/2}function fe(e,t,n){let r=new Uint8Array(t*n);for(let i=0;i<n;i++)for(let a=0;a<t;a++){if(!e[i*t+a])continue;let o=Math.max(0,i-1),s=Math.min(n-1,i+1),c=Math.max(0,a-1),l=Math.min(t-1,a+1);for(let e=o;e<=s;e++)for(let n=c;n<=l;n++)r[e*t+n]=1}return r}function z(e,t,n,r,i){let a=new Int32Array(t*n),o=[],s=new Int32Array(t*n),c=1;for(let l=0;l<t*n;l++){if(e[l]!==r||a[l]!==0)continue;let u=c++,d=0;s[d++]=l,a[l]=u;let f={label:u,area:0,minX:t,minY:n,maxX:-1,maxY:-1,cx:0,cy:0,touchesBorder:!1},p=0,m=0;for(;d>0;){let o=s[--d],c=o%t,l=(o-c)/t;if(f.area++,p+=c,m+=l,c<f.minX&&(f.minX=c),c>f.maxX&&(f.maxX=c),l<f.minY&&(f.minY=l),l>f.maxY&&(f.maxY=l),(c===0||l===0||c===t-1||l===n-1)&&(f.touchesBorder=!0),c>0){let t=o-1;e[t]===r&&a[t]===0&&(a[t]=u,s[d++]=t)}if(c<t-1){let t=o+1;e[t]===r&&a[t]===0&&(a[t]=u,s[d++]=t)}if(l>0){let n=o-t;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(l<n-1){let n=o+t;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(i){if(c>0&&l>0){let n=o-t-1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c<t-1&&l>0){let n=o-t+1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c>0&&l<n-1){let n=o+t-1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c<t-1&&l<n-1){let n=o+t+1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}}}f.cx=p/f.area,f.cy=m/f.area,o.push(f)}return{labels:a,comps:o}}function pe(e,t,n){let{labels:r,comps:i}=z(e,t,n,0,!1);return{labels:r,holes:i.filter(e=>!e.touchesBorder)}}function me(e,t,n,r,i=n.cx,a=n.cy){let o=new Float64Array(r).fill(-1),s=new Float64Array(r),c=new Float64Array(r);for(let l=n.minY;l<=n.maxY;l++)for(let u=n.minX;u<=n.maxX;u++){if(e[l*t+u]!==n.label)continue;let d=u-i,f=l-a,p=d*d+f*f,m=Math.atan2(f,d);m<0&&(m+=Math.PI*2);let h=Math.min(r-1,Math.floor(m/(Math.PI*2)*r));p>o[h]&&(o[h]=p,s[h]=u,c[h]=l)}let l=[],u=0;for(let e=0;e<r;e++)o[e]>=0&&(u++,l.push({x:s[e],y:c[e]}));return{pts:l,filled:u/r}}function he(e,t,n,r){let i=0;for(let a=r.minY;a<=r.maxY;a++)for(let o=r.minX;o<=r.maxX;o++){let s=a*t+o;e[s]===r.label&&(o===0||a===0||o===t-1||a===n-1||e[s-1]!==r.label||e[s+1]!==r.label||e[s-t]!==r.label||e[s+t]!==r.label)&&i++}return i}function ge(e,t){if(e.length<4)return e.slice();let n=0,r=-1;for(let t=1;t<e.length;t++){let i=ve(e[0],e[t]);i>r&&(r=i,n=t)}let i=_e(e.slice(0,n+1),t),a=_e(e.slice(n).concat([e[0]]),t);return i.concat(a.slice(1,-1))}function _e(e,t){if(e.length<=2)return e.slice();let n=new Uint8Array(e.length);n[0]=1,n[e.length-1]=1;let r=[[0,e.length-1]];for(;r.length;){let[i,a]=r.pop(),o=-1,s=-1;for(let t=i+1;t<a;t++){let n=B(e[t],e[i],e[a]);n>o&&(o=n,s=t)}o>t&&s>0&&(n[s]=1,r.push([i,s],[s,a]))}let i=[];for(let t=0;t<e.length;t++)n[t]&&i.push(e[t]);return i}function ve(e,t){let n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function B(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<1e-9)return Math.sqrt(ve(e,t));let o=((e.x-t.x)*r+(e.y-t.y)*i)/a;o=Math.max(0,Math.min(1,o));let s=t.x+o*r,c=t.y+o*i;return Math.hypot(e.x-s,e.y-c)}function ye(e){let t=e.length,n=[];for(let r=0;r<t;r++){let i=e[(r-1+t)%t],a=e[r],o=e[(r+1)%t],s=i.x-a.x,c=i.y-a.y,l=o.x-a.x,u=o.y-a.y,d=Math.hypot(s,c),f=Math.hypot(l,u);if(d<1e-6||f<1e-6){n.push(180);continue}let p=Math.max(-1,Math.min(1,(s*l+c*u)/(d*f)));n.push(Math.acos(p)*180/Math.PI)}return n}function V(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=Math.hypot(r.x-i.x,r.y-i.y)}return t}var be=[.02,.045,.14];function H(e){for(let t=0;t<be.length;t++)if(e<be[t])return t;return be.length}function xe(e){return e<=1?`S`:e<=2?`M`:`L`}function U(e){return Math.max(0,Math.min(4,Math.round(e)))}function W(e){return e<=0?0:e<=5?1:2}function Se(e,t){let n=+(t>=.18);return{hueBin:n?Math.min(11,Math.floor((e%360+360)%360/30)):0,chromatic:n}}function Ce(e){return e.chromatic?{hue:e.hueBin*30+15,sat:.65}:{hue:0,sat:0}}function we(e,t){return e===void 0?0:1+Se(e,t??1).hueBin}var Te=[.045,.14];function Ee(e){return e<Te[0]?0:e<Te[1]?1:2}function De(e){return e<.05?0:1}function Oe(e){return e<.12?0:e<.28?1:e<.5?2:3}function ke(e){return[e.hueBin,e.chromatic,e.inkLevel,e.closedLevel,e.sharpLevel,e.roughLevel,...e.radial,...e.angular,e.hue2Bin]}function Ae(e){let{w:t,h:n,data:r}=e,i=Math.min(t,n)/2,a=t/2,o=n/2,s=(i*.9)**2,c=se(r,t,n),l=[];for(let e=0;e<n;e+=2)for(let n=0;n<t;n+=2)(n-a)**2+(e-o)**2>s||l.push(c[e*t+n]);l.sort((e,t)=>e-t);let u=l[Math.floor(l.length*.6)]??200,d=0,f=0,p=0,m=0;for(let e=0;e<n;e+=2)for(let n=0;n<t;n+=2){if((n-a)**2+(e-o)**2>s)continue;let i=e*t+n;c[i]>=u&&(d+=r[i*4],f+=r[i*4+1],p+=r[i*4+2],m++)}m===0&&(m=1);let h=[d/m,f/m,p/m],g=le(c,t,n,10,16),_=new Uint8Array(t*n),v=new Float32Array(t*n),y=0;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let i=e*t+n;if((n-a)**2+(e-o)**2>s)continue;let c=r[i*4]-h[0],l=r[i*4+1]-h[1],u=r[i*4+2]-h[2],d=Math.sqrt(c*c+l*l+u*u);v[i]=d,d>y&&(y=d),(g[i]||d>64)&&(_[i]=1)}let b=Math.PI*(i*.9)**2,x=0;for(let e=0;e<_.length;e++)x+=_[e];let S=x/b,C=new Float64Array(36),w=[],T=[],E=[],D=Math.max(40,y*.55);for(let e=0;e<_.length;e++){if(!_[e]||v[e]<D)continue;let{h:t,s:n,l:i}=P(r[e*4],r[e*4+1],r[e*4+2]);w.push(n),T.push(i),E.push(t),C[Math.min(35,Math.floor(t/10))]+=n}let O=0,k=0,A=.3,j,M,N,ee=0;if(w.length>0){let e=0;for(let t=1;t<36;t++)C[t]>C[e]&&(e=t);let t=0,n=0;for(let r=0;r<E.length;r++){let i=Math.min(35,Math.floor(E[r]/10));if(Math.min((i-e+36)%36,(e-i+36)%36)<=1){let e=E[r]*Math.PI/180;t+=Math.cos(e),n+=Math.sin(e)}}O=(Math.atan2(n,t)*180/Math.PI+360)%360;let r=-1;for(let t=0;t<36;t++)Math.min((t-e+36)%36,(e-t+36)%36)<3||(r<0||C[t]>C[r])&&(r=t);if(r>=0&&C[r]>0){let e=0,t=0,n=[],i=[];for(let a=0;a<E.length;a++){let o=Math.min(35,Math.floor(E[a]/10));if(Math.min((o-r+36)%36,(r-o+36)%36)<=1){let r=E[a]*Math.PI/180;e+=Math.cos(r),t+=Math.sin(r),n.push(w[a]),i.push(T[a])}}let a=n.length/Math.max(1,x);n.length>0&&a>=.12&&(n.sort((e,t)=>e-t),i.sort((e,t)=>e-t),j=(Math.atan2(t,e)*180/Math.PI+360)%360,M=n[Math.floor(n.length/2)],N=i[Math.floor(i.length/2)],ee=a)}w.sort((e,t)=>e-t),T.sort((e,t)=>e-t),k=w[Math.floor(w.length/2)],A=T[Math.floor(T.length/2)]}else{let e=0,i=0,c=0,l=0;for(let u=0;u<n;u+=2)for(let n=0;n<t;n+=2){if((n-a)**2+(u-o)**2>s)continue;let d=u*t+n;e+=r[d*4],i+=r[d*4+1],c+=r[d*4+2],l++}if(l>0){let t=P(e/l,i/l,c/l);O=t.h,k=t.s,A=t.l}}let F=fe(_,t,n),{labels:te,comps:ne}=z(F,t,n,1,!0),I=ne.filter(e=>e.area>=24),{labels:ie,holes:ae}=pe(F,t,n),L=ae.filter(e=>e.area>=30),oe=0,ce=(e,n)=>{let r=e.maxX-e.minX+1,i=e.maxY-e.minY+1,a=r/i,o=e.area/(r/2*Math.PI*(i/2));if(!(a>.7&&a<1.43&&o>.75&&Math.max(r,i)>=8))return!1;let s=Math.round(e.cx);if(n[Math.round(e.cy)*t+s]!==e.label)return!1;let{pts:c}=me(n,t,e,24),l=1/0,u=0;for(let t of c){let n=Math.hypot(t.x-e.cx,t.y-e.cy);n<l&&(l=n),n>u&&(u=n)}return u>0&&l/u>.72};for(let e of L)e.area>=60&&ce(e,ie)&&oe++;let R=0,ue=0,de=0,_e=0,ve=0,B=[];for(let e of I){let r=e.maxX-e.minX+1,i=e.maxY-e.minY+1,a=Math.max(r,i);if(e.area>=60&&ce(e,te)&&oe++,a>=12&&e.area>=40){let{pts:r,filled:i}=me(te,t,e,120);if(r.length>=8){let a=ge(r,2);B.push(a);let o=ye(a);for(let e=0;e<a.length;e++){let t=a[(e-1+a.length)%a.length],n=a[(e+1)%a.length],r=Math.hypot(t.x-a[e].x,t.y-a[e].y),i=Math.hypot(n.x-a[e].x,n.y-a[e].y);o[e]<95&&r>=5&&i>=5&&R++}let s=re((ge(r,1.2).length/Math.max(1,r.length)/Math.max(.3,i)-.15)/.45,0,1),c=re((he(te,t,n,e)/e.area-.2)/.5,0,1);de+=(.7*s+.3*c)*e.area,ue+=e.area}}if(a>=t*.03&&a<=t*.15&&e.area>=20){_e++;let{pts:n}=me(te,t,e,60);ge(n,1.5).length>=6&&ve++}}let V=ue>0?re(de/ue,0,1):0,be=_e>=2&&ve>=1,xe=i*.9,Ce=new Float64Array(4),Te=new Float64Array(4),Ae=new Float64Array(6),je=new Float64Array(6);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=n-a,i=e-o,s=Math.hypot(r,i);if(s>xe)continue;let c=Math.min(3,Math.floor(s/xe*4)),l=Math.atan2(i,r);l<0&&(l+=Math.PI*2);let u=Math.min(5,Math.floor(l/(Math.PI*2)*6));Te[c]++,je[u]++,_[e*t+n]&&(Ce[c]++,Ae[u]++)}let Me=Array.from({length:4},(e,t)=>De(Te[t]>0?Ce[t]/Te[t]:0)),Ne=Array.from({length:6},(e,t)=>je[t]>0?Ae[t]/je[t]:0).map(Ee).sort((e,t)=>t-e),Pe={...Se(O,k),inkLevel:H(S),closedLevel:U(L.length),sharpLevel:W(R),roughLevel:Oe(V),radial:Me,angular:Ne,hue2Bin:we(j,M)},Fe=ke(Pe);return{features:{inkRatio:+S.toFixed(4),hue:Math.round(O),sat:+k.toFixed(3),lum:+A.toFixed(3),roughness:+V.toFixed(3),closedShapes:L.length,sharpCorners:R,circles:oe,hasText:be,components:I.length,...j===void 0?{}:{hue2:Math.round(j),sat2:+M.toFixed(3),lum2:+N.toFixed(3),ink2Ratio:+ee.toFixed(4)}},debug:{w:t,h:n,ink:_,polygons:B,holes:L,paper:h,note:`paper=${h.map(e=>Math.round(e)).join(`,`)} maxDist=${y.toFixed(0)}`,quant:Pe,quantVector:Fe}}}function je(e){return M(e)}var Me=[`ポ`,`グ`,`ラ`,`モ`,`ニ`,`ピ`,`ド`,`ガ`,`ル`,`ミ`,`ベ`,`ズ`,`キ`,`ヨ`,`ン`,`タ`,`ロ`,`ヌ`,`ビ`,`ワ`,`ケ`,`ム`,`チ`,`ゴ`];function Ne(e,t){let n=new N((t^1589690029)>>>0),{h:r,s:i,l:a}=ne(e),o=n.next()<.5?n.range(130,170):n.range(8,30),s=r+(n.next()<.5?1:-1)*o,c=.75-a,l=a-.35;return I(s,i,a+(c>=l?1:-1)*n.range(.15,Math.min(.3,Math.max(c,l))))}function Pe(e){let t=[1,1,1,1],n=8,r=0;for(;n>0&&r++<1e3;){let r=e.int(0,3);t[r]<5&&(t[r]++,n--)}return{hp:t[0],spd:t[1],atk:t[2],mag:t[3]}}function Fe(e,t,n={}){let r=new N(e),i=n.skeleton??r.weighted([{v:`biped`,w:30},{v:`quadruped`,w:30},{v:`multileg`,w:14},{v:`serpent`,w:13},{v:`floating`,w:13}]),a=Pe(r),o=n.stats??a,s=r.weighted([{v:2,w:60},{v:1,w:20},{v:3,w:20}]),c=r.next()<.2,l=Math.max(0,Math.min(4,t.closedShapes)),u=[{v:`horn`,w:t.sharpCorners>=3?40:18},{v:`spike`,w:t.sharpCorners>=3?30:10},{v:`wing`,w:18},{v:`tail`,w:18},{v:`antenna`,w:12},{v:`fin`,w:8},{v:`ornament`,w:10}],d=[],f=new Set;if(l>0&&t.sharpCorners>=3){let e=t.sharpCorners>=6?`spike`:`horn`;d.push({kind:e,size:+r.range(.8,1.3).toFixed(2),variant:+r.next().toFixed(3)}),f.add(e)}let p=0;for(;d.length<l&&p++<50;){let e=r.weighted(u.filter(e=>!f.has(e.v)));f.add(e),d.push({kind:e,size:+r.range(.7,1.3).toFixed(2),variant:+r.next().toFixed(3)})}let m=Oe(t.roughness),h=[];m>=1&&h.push({kind:r.pick([`spots`,`stripes`]),amount:+(m/3).toFixed(2)});let g=xe(H(t.inkRatio)),{hue:_,sat:v}=Ce(Se(t.hue,t.sat)),y=I(_,v,t.lum),b=2+e%2,x=n.name??``;if(!x)for(let e=0;e<b;e++)x+=r.pick(Me);let S;if(t.hue2!==void 0){let{hue:e,sat:n}=Ce(Se(t.hue2,t.sat2??1));S=I(e,n,t.lum2??t.lum)}else S=Ne(y,e);let C=n.createdAt??Date.now();return{seed:e,skeleton:i,color:y,color2:S,stats:o,parts:d,marks:h,eyes:s,size:g,crest:c,id:n.id??`${e.toString(16)}-${C.toString(36)}`,name:x,createdAt:C,features:t}}function Ie(e,t={}){let{features:n,debug:r}=Ae(e);return{monster:Fe(je(r.quantVector),n,t),features:n,debug:r,quant:r.quantVector}}var Le={hp:`体力`,spd:`素早さ`,atk:`力`,mag:`魔法`},Re={biped:`二足`,quadruped:`四足`,multileg:`多足`,serpent:`長物`,floating:`浮遊`},ze={S:`小型`,M:`中型`,L:`大型`},Be=`mb.monsters.v1`,Ve=`mb.settings.v1`;function He(){try{let e=localStorage.getItem(Be);if(!e)return[];let t=JSON.parse(e);if(!Array.isArray(t))return[];for(let e of t)!e.color2&&e.color&&typeof e.seed==`number`&&(e.color2=Ne(e.color,e.seed));return t}catch{return[]}}function Ue(e){try{localStorage.setItem(Be,JSON.stringify(e))}catch(e){console.warn(`localStorage save failed`,e)}}function We(e){let t=He().filter(t=>t.id!==e.id);for(t.unshift(e);t.length>3;)t.pop();return Ue(t),t}function Ge(e){let t=He(),n=t.findIndex(t=>t.id===e.id);n>=0?t[n]=e:t.unshift(e),Ue(t)}function Ke(e){Ue(He().filter(t=>t.id!==e))}function qe(e){return He().find(t=>t.id===e)}function Je(){try{let e=localStorage.getItem(Ve);return{castGuide:!0,...e?JSON.parse(e):{}}}catch{return{castGuide:!0}}}function Ye(e){localStorage.setItem(Ve,JSON.stringify(e))}var Xe=`v0.4`,Ze=`b6f27e7 2026-11-07 13:07`,Qe={S:.55,M:1,L:1.9};function G(e,t={},...n){let r=document.createElement(e);for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2).toLowerCase(),n):e===`text`?r.textContent=String(n):n===!0?r.setAttribute(e,``):r.setAttribute(e,String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e instanceof Node?e:String(e));return r}function $e(e){return`★`.repeat(e)+`☆`.repeat(Math.max(0,5-e))}function et(e){let t=G(`table`,{class:`stat`});for(let n of[`hp`,`spd`,`atk`,`mag`])t.append(G(`tr`,{},G(`td`,{},Le[n]),G(`td`,{class:`stars`},$e(e[n]))));return t}function tt(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function nt(e,t){let n=G(`div`,{class:`screen scroll`}),r=Je(),i=G(`div`,{class:`list`}),a=He();a.length===0&&i.append(G(`div`,{class:`notice`},`まだ誰もいない。紙に丸を描いて、カメラをかざそう。`));for(let e of a){let n=G(`div`,{class:`card mcard`,style:`cursor:pointer`},e.thumb?G(`img`,{class:`thumb`,src:e.thumb,alt:``}):G(`div`,{class:`thumb`,style:`background:${e.color}`}),G(`div`,{class:`grow`},G(`h2`,{},e.name,` `,G(`span`,{class:`chip`},`${Re[e.skeleton]} ・ ${ze[e.size]}`)),G(`p`,{class:`small sub`},`体力${$e(e.stats.hp)} 素早さ${$e(e.stats.spd)}`),G(`p`,{class:`small sub`},`力${$e(e.stats.atk)} 魔法${$e(e.stats.mag)} ${e.sign?`・ 印あり`:`・ 印なし`}`)));n.addEventListener(`click`,()=>t({name:`card`,id:e.id})),i.append(n)}let o=G(`input`,{type:`file`,accept:`image/*`});o.addEventListener(`change`,()=>{let e=o.files?.[0];e&&(rt=e,t({name:`summon`,mode:`image`}))});let s=G(`input`,{type:`checkbox`});s.checked=r.castGuide,s.addEventListener(`change`,()=>Ye({...Je(),castGuide:s.checked}));let u=G(`input`,{type:`checkbox`});return u.checked=!c(),u.addEventListener(`change`,()=>{l(!u.checked),u.checked&&(d(),b(`open`))}),n.append(G(`div`,{class:`pad col`,style:`gap:16px`},G(`div`,{},G(`h1`,{},`お絵かきモンスター`),G(`p`,{class:`sub`},`紙に描いた丸をカメラで読んで召喚。オートバトルで、ここぞの一筆。`)),G(`button`,{class:`btn primary`,onClick:()=>t({name:`summon`,mode:`camera`})},`カメラで召喚する`),G(`label`,{class:`btn file-label`,style:`text-align:center`},`画像ファイルから召喚する`,o),G(`h2`,{style:`margin-top:8px`},`うちの子`),i,G(`label`,{class:`toggle`,style:`margin-top:10px`},s,`詠唱中にガイド(登録した印)を薄く表示する`),G(`label`,{class:`toggle`},u,`効果音を鳴らす(iPhone はマナーモードだと鳴らない)`),G(`p`,{class:`small sub`},`デバッグ: 画面左上を長押しでパネル(検出・特徴量・JSON・fps)。モック ${Xe}(${Ze})`))),e.append(n),{unmount:()=>{tt(n),n.remove()}}}var rt=null;function it(){let e=rt;return rt=null,e}var at,ot,st,ct,lt,ut,dt,ft,pt,mt=1e3,ht=1001,gt=1002,_t=1003,vt=1004,yt=1005,bt=1006,xt=1007,St=1008,Ct=1009,wt=1010,Tt=1011,Et=1012,Dt=1013,Ot=1014,kt=1015,At=1016,jt=1017,Mt=1018,Nt=1020,Pt=35902,Ft=35899,It=1021,Lt=1022,Rt=1023,zt=1026,Bt=1027,Vt=1028,Ht=1029,Ut=1030,Wt=1031,Gt=1033,Kt=33776,qt=33777,Jt=33778,Yt=33779,Xt=35840,Zt=35841,Qt=35842,$t=35843,en=36196,tn=37492,nn=37496,rn=37488,an=37489,on=37490,sn=37491,cn=37808,ln=37809,un=37810,dn=37811,fn=37812,pn=37813,mn=37814,hn=37815,gn=37816,_n=37817,vn=37818,yn=37819,bn=37820,xn=37821,Sn=36492,Cn=36494,wn=36495,Tn=36283,En=36284,Dn=36285,On=36286,kn=2300,An=2301,jn=2302,Mn=2303,Nn=2400,Pn=2401,Fn=2402,In=3200,Ln=`srgb`,Rn=`srgb-linear`,zn=`linear`,Bn=`srgb`,Vn=7680,Hn=35044,Un=2e3;function Wn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Gn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qn(){let e=Kn(`canvas`);return e.style.display=`block`,e}var Jn={};function Yn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=Xn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=Xn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Zn(...e){let t=e.join(` `);t in Jn||(Jn[t]=!0,K(...e))}function Qn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $n={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tr=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nr=1234567,rr=Math.PI/180,ir=180/Math.PI;function ar(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tr[e&255]+tr[e>>8&255]+tr[e>>16&255]+tr[e>>24&255]+`-`+tr[t&255]+tr[t>>8&255]+`-`+tr[t>>16&15|64]+tr[t>>24&255]+`-`+tr[n&63|128]+tr[n>>8&255]+`-`+tr[n>>16&255]+tr[n>>24&255]+tr[r&255]+tr[r>>8&255]+tr[r>>16&255]+tr[r>>24&255]).toLowerCase()}function or(e,t,n){return Math.max(t,Math.min(n,e))}function sr(e,t){return(e%t+t)%t}function cr(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lr(e,t,n){return e===t?0:(n-e)/(t-e)}function ur(e,t,n){return(1-n)*e+n*t}function dr(e,t,n,r){return ur(e,t,1-Math.exp(-n*r))}function fr(e,t=1){return t-Math.abs(sr(e,t*2)-t)}function pr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function hr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gr(e,t){return e+Math.random()*(t-e)}function _r(e){return e*(.5-Math.random())}function vr(e){e!==void 0&&(nr=e);let t=nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yr(e){return e*rr}function br(e){return e*ir}function xr(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Sr(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Cr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wr(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Er(e,t){if(t.constructor===Float32Array)return e;let n=Tr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Dr(e,t){if(t.constructor===Float32Array)return e;let n=Tr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Or={DEG2RAD:rr,RAD2DEG:ir,generateUUID:ar,clamp:or,euclideanModulo:sr,mapLinear:cr,inverseLerp:lr,lerp:ur,damp:dr,pingpong:fr,smoothstep:pr,smootherstep:mr,randInt:hr,randFloat:gr,randFloatSpread:_r,seededRandom:vr,degToRad:yr,radToDeg:br,isPowerOfTwo:xr,ceilPowerOfTwo:Sr,floorPowerOfTwo:Cr,setQuaternionFromProperEuler:wr,normalize:Dr,denormalize:Er};dt=Symbol.iterator;var J=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=or(this.x,e.x,t.x),this.y=or(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=or(this.x,e,t),this.y=or(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(or(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(or(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[dt](){yield this.x,yield this.y}};at=J,at.prototype.isVector2=!0;var kr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(or(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};ft=Symbol.iterator;var Y=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=or(this.x,e.x,t.x),this.y=or(this.y,e.y,t.y),this.z=or(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=or(this.x,e,t),this.y=or(this.y,e,t),this.z=or(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(or(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(or(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[ft](){yield this.x,yield this.y,yield this.z}};ot=Y,ot.prototype.isVector3=!0;var Ar=new Y,jr=new kr,X=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Zn(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Mr.makeScale(e,t)),this}rotate(e){return Zn(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Mr.makeRotation(-e)),this}translate(e,t){return Zn(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};st=X,st.prototype.isMatrix3=!0;var Mr=new X,Nr=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pr=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fr(){let e={enabled:!0,workingColorSpace:Rn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Lr(e.r),e.g=Lr(e.g),e.b=Lr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Rr(e.r),e.g=Rr(e.g),e.b=Rr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?zn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Rn]:{primaries:t,whitePoint:r,transfer:zn,toXYZ:Nr,fromXYZ:Pr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:r,transfer:Bn,toXYZ:Nr,fromXYZ:Pr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),e}var Ir=Fr();function Lr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Rr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var zr,Br=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Kn(`canvas`)),zr.width=e.width,zr.height=e.height;let t=zr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Kn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lr(t[e]/255)*255):t[e]=Lr(t[e]);return{data:t,width:e.width,height:e.height}}return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Vr=0,Hr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ur(r[t].image)):e.push(Ur(r[t]))}else e=Ur(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ur(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Br.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var Wr=0,Gr=new Y,Kr=class e extends er{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ht,i=ht,a=bt,o=St,s=Rt,c=Ct,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=ar(),this.name=``,this.source=new Hr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?K(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mt:e.x-=Math.floor(e.x);break;case ht:e.x=e.x<0?0:1;break;case gt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case mt:e.y-=Math.floor(e.y);break;case ht:e.y=e.y<0?0:1;break;case gt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kr.DEFAULT_IMAGE=null,Kr.DEFAULT_MAPPING=300,Kr.DEFAULT_ANISOTROPY=1,pt=Symbol.iterator;var qr=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=or(this.x,e.x,t.x),this.y=or(this.y,e.y,t.y),this.z=or(this.z,e.z,t.z),this.w=or(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=or(this.x,e,t),this.y=or(this.y,e,t),this.z=or(this.z,e,t),this.w=or(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(or(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[pt](){yield this.x,yield this.y,yield this.z,yield this.w}};ct=qr,ct.prototype.isVector4=!0;var Jr=class extends er{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qr(0,0,e,t),this.scissorTest=!1,this.viewport=new qr(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Kr({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yr=class extends Jr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xr=class extends Kr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zr=class extends Kr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Qr=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),i=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ti,e,ni)}lookAt(e,t,n){let r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ri.crossVectors(n,ai),ri.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ri.crossVectors(n,ai)),ri.normalize(),ii.crossVectors(ai,ri),r[0]=ri.x,r[4]=ii.x,r[8]=ai.x,r[1]=ri.y,r[5]=ii.y,r[9]=ai.y,r[2]=ri.z,r[6]=ii.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=$r.set(r[0],r[1],r[2]).length(),o=$r.set(r[4],r[5],r[6]).length(),s=$r.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ei.copy(this);let c=1/a,l=1/o,u=1/s;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=l,ei.elements[5]*=l,ei.elements[6]*=l,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Un,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Un,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lt=Qr,lt.prototype.isMatrix4=!0;var $r=new Y,ei=new Qr,ti=new Y(0,0,0),ni=new Y(1,1,1),ri=new Y,ii=new Y,ai=new Y,oi=new Qr,si=new kr,ci=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(or(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-or(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(or(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-or(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(or(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-or(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return si.setFromEuler(this),this.setFromQuaternion(si,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER=`XYZ`;var li=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ui=0,di=new Y,fi=new kr,pi=new Qr,mi=new Y,hi=new Y,gi=new Y,_i=new kr,vi=new Y(1,0,0),yi=new Y(0,1,0),bi=new Y(0,0,1),xi={type:`added`},Si={type:`removed`},Ci={type:`childadded`,child:null},wi={type:`childremoved`,child:null},Ti=class e extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ui++}),this.uuid=ar(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new ci,r=new kr,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qr},normalMatrix:{value:new X}}),this.matrix=new Qr,this.matrixWorld=new Qr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new li,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(vi,e)}rotateY(e){return this.rotateOnAxis(yi,e)}rotateZ(e){return this.rotateOnAxis(bi,e)}translateOnAxis(e,t){return di.copy(e).applyQuaternion(this.quaternion),this.position.add(di.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vi,e)}translateY(e){return this.translateOnAxis(yi,e)}translateZ(e){return this.translateOnAxis(bi,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mi.copy(e):mi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(hi,mi,this.up):pi.lookAt(mi,hi,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(pi),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xi),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Si),wi.child=e,this.dispatchEvent(wi),wi.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xi),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,gi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,_i,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ti.DEFAULT_UP=new Y(0,1,0),Ti.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=class extends Ti{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Di={type:`move`},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Di)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ki={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Mi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ir.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ir.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ir.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ir.workingColorSpace){if(e=sr(e,1),t=or(t,0,1),n=or(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mi(i,r,e+1/3),this.g=Mi(i,r,e),this.b=Mi(i,r,e-1/3)}return Ir.colorSpaceToWorking(this,r),this}setStyle(e,t=Ln){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){let n=ki[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Ir.workingToColorSpace(Ni.copy(this),e),Math.round(or(Ni.r*255,0,255))*65536+Math.round(or(Ni.g*255,0,255))*256+Math.round(or(Ni.b*255,0,255))}getHexString(e=Ln){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ir.workingColorSpace){Ir.workingToColorSpace(Ni.copy(this),t);let n=Ni.r,r=Ni.g,i=Ni.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ir.workingColorSpace){return Ir.workingToColorSpace(Ni.copy(this),t),e.r=Ni.r,e.g=Ni.g,e.b=Ni.b,e}getStyle(e=Ln){Ir.workingToColorSpace(Ni.copy(this),e);let t=Ni.r,n=Ni.g,r=Ni.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ji);let n=ur(Ai.h,ji.h,t),r=ur(Ai.s,ji.s,t),i=ur(Ai.l,ji.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ni=new Z;Z.NAMES=ki;var Pi=class extends Ti{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new Y,Ii=new Y,Li=new Y,Ri=new Y,zi=new Y,Bi=new Y,Vi=new Y,Hi=new Y,Ui=new Y,Wi=new Y,Gi=new qr,Ki=new qr,qi=new qr,Ji=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fi.subVectors(e,t),r.cross(Fi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fi.subVectors(r,t),Ii.subVectors(n,t),Li.subVectors(e,t);let a=Fi.dot(Fi),o=Fi.dot(Ii),s=Fi.dot(Li),c=Ii.dot(Ii),l=Ii.dot(Li),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ri)!==null&&Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ri)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ri.x),s.addScaledVector(a,Ri.y),s.addScaledVector(o,Ri.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gi.setScalar(0),Ki.setScalar(0),qi.setScalar(0),Gi.fromBufferAttribute(e,t),Ki.fromBufferAttribute(e,n),qi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gi,i.x),a.addScaledVector(Ki,i.y),a.addScaledVector(qi,i.z),a}static isFrontFacing(e,t,n,r){return Fi.subVectors(n,t),Ii.subVectors(e,t),Fi.cross(Ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Fi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zi.subVectors(r,n),Bi.subVectors(i,n),Hi.subVectors(e,n);let s=zi.dot(Hi),c=Bi.dot(Hi);if(s<=0&&c<=0)return t.copy(n);Ui.subVectors(e,r);let l=zi.dot(Ui),u=Bi.dot(Ui);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zi,a);Wi.subVectors(e,i);let f=zi.dot(Wi),p=Bi.dot(Wi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yi=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zi):Zi.fromBufferAttribute(r,t),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),oa.subVectors(this.max,aa),$i.subVectors(e.a,aa),ea.subVectors(e.b,aa),ta.subVectors(e.c,aa),na.subVectors(ea,$i),ra.subVectors(ta,ea),ia.subVectors($i,ta);let t=[0,-na.z,na.y,0,-ra.z,ra.y,0,-ia.z,ia.y,na.z,0,-na.x,ra.z,0,-ra.x,ia.z,0,-ia.x,-na.y,na.x,0,-ra.y,ra.x,0,-ia.y,ia.x,0];return!la(t,$i,ea,ta,oa)||(t=[1,0,0,0,1,0,0,0,1],!la(t,$i,ea,ta,oa))?!1:(sa.crossVectors(na,ra),t=[sa.x,sa.y,sa.z],la(t,$i,ea,ta,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Zi=new Y,Qi=new Yi,$i=new Y,ea=new Y,ta=new Y,na=new Y,ra=new Y,ia=new Y,aa=new Y,oa=new Y,sa=new Y,ca=new Y;function la(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ca.fromArray(e,a);let o=i.x*Math.abs(ca.x)+i.y*Math.abs(ca.y)+i.z*Math.abs(ca.z),s=t.dot(ca),c=n.dot(ca),l=r.dot(ca);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ua=new Y,da=new J,fa=0,pa=class extends er{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Hn,this.updateRanges=[],this.gpuType=kt,this.version=0,this._normalizationScale=e===void 0?void 0:Tr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix4(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyNormalMatrix(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.transformDirection(e),this.setXYZ(t,ua.x,ua.y,ua.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Er(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Dr(e,this.array):Math.round(e*t)}},ma=class extends pa{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ha=class extends pa{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ga=class extends pa{constructor(e,t,n){super(new Float32Array(e),t,n)}},_a=new Yi,va=new Y,ya=new Y,ba=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_a.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);let t=va.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(va,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(ya)),this.expandByPoint(va.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xa=0,Sa=new Qr,Ca=new Ti,wa=new Y,Ta=new Yi,Ea=new Yi,Da=new Y,Oa=class e extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xa++}),this.uuid=ar(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Wn(e)?ha:ma)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sa.makeRotationFromQuaternion(e),this.applyMatrix4(Sa),this}rotateX(e){return Sa.makeRotationX(e),this.applyMatrix4(Sa),this}rotateY(e){return Sa.makeRotationY(e),this.applyMatrix4(Sa),this}rotateZ(e){return Sa.makeRotationZ(e),this.applyMatrix4(Sa),this}translate(e,t,n){return Sa.makeTranslation(e,t,n),this.applyMatrix4(Sa),this}scale(e,t,n){return Sa.makeScale(e,t,n),this.applyMatrix4(Sa),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ga(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ta.setFromBufferAttribute(n),this.morphTargetsRelative?(Da.addVectors(this.boundingBox.min,Ta.min),this.boundingBox.expandByPoint(Da),Da.addVectors(this.boundingBox.max,Ta.max),this.boundingBox.expandByPoint(Da)):(this.boundingBox.expandByPoint(Ta.min),this.boundingBox.expandByPoint(Ta.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(Ta.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ea.setFromBufferAttribute(n),this.morphTargetsRelative?(Da.addVectors(Ta.min,Ea.min),Ta.expandByPoint(Da),Da.addVectors(Ta.max,Ea.max),Ta.expandByPoint(Da)):(Ta.expandByPoint(Ea.min),Ta.expandByPoint(Ea.max))}Ta.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Da.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Da));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Da.fromBufferAttribute(a,t),o&&(wa.fromBufferAttribute(e,t),Da.add(wa)),r=Math.max(r,n.distanceToSquared(Da))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pa(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let l=new Y,u=new Y,d=new Y,f=new J,p=new J,m=new J,h=new Y,g=new Y;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new Y,b=new Y,x=new Y,S=new Y;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pa(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Da.fromBufferAttribute(e,t),Da.normalize(),e.setXYZ(t,Da.x,Da.y,Da.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pa(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ka=new Y,Aa=new Y,ja=new X,Ma=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ka.subVectors(n,t).cross(Aa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ka),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ja.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Na=0,Pa=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Na++}),this.uuid=ar(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?K(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ma().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new J().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fa=new Y,Ia=new Y,La=new Y,Ra=new Y,za=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,t),Fa.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(Ia);let i=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Ra.dot(this.direction),s=-Ra.dot(La),c=Ra.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ia).addScaledVector(La,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fa.subVectors(e.center,this.origin);let n=Fa.dot(this.direction),r=Fa.dot(Fa)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,ne=E-ee*D,re=O-P*A,I=k-ee*A,ie=j-P*N,ae=M-ee*N,L=ie*I-ae*re,oe=te*ae-ne*ie,se=re*ne-I*te;if(r){if(L<0||oe<0||se<0)return null}else if((L<0||oe<0||se<0)&&(L>0||oe>0||se>0))return null;let ce=L+oe+se;if(ce===0)return null;let le=F*(L*D+oe*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ba=class extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Va=new Qr,Ha=new za,Ua=new ba,Wa=new Y,Ga=new Y,Ka=new Y,qa=new Y,Ja=new Y,Ya=new Y,Xa=new Y,Za=new Y,Qa=class extends Ti{constructor(e=new Oa,t=new Ba){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ya.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ja.fromBufferAttribute(s,e),a?Ya.addScaledVector(Ja,r):Ya.addScaledVector(Ja.sub(t),r))}t.add(Ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ha.copy(e.ray).recast(e.near),Ua.containsPoint(Ha.origin)===!1&&(Ha.intersectSphere(Ua,Wa)===null||Ha.origin.distanceToSquared(Wa)>(e.far-e.near)**2)||(Va.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Va),(n.boundingBox===null||Ha.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ha)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=eo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=eo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=eo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=eo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function $a(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Za.copy(s),Za.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:e}}function eo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ga),e.getVertexPosition(c,Ka),e.getVertexPosition(l,qa);let u=$a(e,t,n,r,Ga,Ka,qa,Xa);if(u){let e=new Y;Ji.getBarycoord(Xa,Ga,Ka,qa,e),i&&(u.uv=Ji.getInterpolatedAttribute(i,s,c,l,e,new J)),a&&(u.uv1=Ji.getInterpolatedAttribute(a,s,c,l,e,new J)),o&&(u.normal=Ji.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Ji.getNormal(Ga,Ka,qa,t.normal),u.face=t,u.barycoord=e}return u}var to=class extends Kr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=_t,l=_t,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},no=new ba,ro=new J(.5,.5),io=new Y,ao=class{constructor(e=new Ma,t=new Ma,n=new Ma,r=new Ma,i=new Ma,a=new Ma){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476+ro.distanceTo(e.center),no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(io.x=r.normal.x>0?e.max.x:e.min.x,io.y=r.normal.y>0?e.max.y:e.min.y,io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oo=new Qr,so=class e{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];oo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ao),n[e].setFromProjectionMatrix(oo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ao),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},co=class extends Kr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lo=class extends Kr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},uo=class extends Kr{constructor(e,t,n=Ot,r,i,a,o=_t,s=_t,c,l=zt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fo=class extends uo{constructor(e,t=Ot,n=301,r,i,a=_t,o=_t,s,c=zt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},po=class extends Kr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mo=class e extends Oa{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ga(c,3)),this.setAttribute(`normal`,new ga(l,3)),this.setAttribute(`uv`,new ga(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ho=class e extends Oa{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new Y,g=new Y;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new ga(o,3)),this.setAttribute(`normal`,new ga(s,3)),this.setAttribute(`uv`,new ga(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},go=class e extends Oa{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Y,l=new J;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new ga(a,3)),this.setAttribute(`normal`,new ga(o,3)),this.setAttribute(`uv`,new ga(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_o=class e extends Oa{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new ga(u,3)),this.setAttribute(`normal`,new ga(d,3)),this.setAttribute(`uv`,new ga(f,2));function _(){let a=new Y,_=new Y,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new J,m=new Y,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class e extends _o{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yo=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){K(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new J:new Y);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,r=[],i=[],a=[],o=new Y,s=new Qr;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Y)}i[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(or(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(or(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},bo=class extends yo{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new J){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xo=class extends bo{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function So(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Co=new Y,wo=new Y,To=new So,Eo=new So,Do=new So,Oo=class extends yo{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(wo.subVectors(r[0],r[1]).add(r[0]),c=wo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Co.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Co),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),To.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Eo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Do.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(To.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Eo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Do.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(To.calc(s),Eo.calc(s),Do.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ko(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ao(e,t){let n=1-e;return n*n*t}function jo(e,t){return 2*(1-e)*e*t}function Mo(e,t){return e*e*t}function No(e,t,n,r){return Ao(e,t)+jo(e,n)+Mo(e,r)}function Po(e,t){let n=1-e;return n*n*n*t}function Fo(e,t){let n=1-e;return 3*n*n*e*t}function Io(e,t){return 3*(1-e)*e*e*t}function Lo(e,t){return e*e*e*t}function Ro(e,t,n,r,i){return Po(e,t)+Fo(e,n)+Io(e,r)+Lo(e,i)}var zo=class extends yo{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ro(e,r.x,i.x,a.x,o.x),Ro(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends yo{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ro(e,r.x,i.x,a.x,o.x),Ro(e,r.y,i.y,a.y,o.y),Ro(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends yo{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends yo{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends yo{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(No(e,r.x,i.x,a.x),No(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends yo{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(No(e,r.x,i.x,a.x),No(e,r.y,i.y,a.y),No(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:Oo,CubicBezierCurve:zo,CubicBezierCurve3:Bo,EllipseCurve:bo,LineCurve:Vo,LineCurve3:Ho,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Wo,SplineCurve:class extends yo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new J){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ko(o,s.x,c.x,l.x,u.x),ko(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}}}),Ko=class e extends Oa{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ga(p,3)),this.setAttribute(`normal`,new ga(m,3)),this.setAttribute(`uv`,new ga(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},qo=class e extends Oa{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Y,p=new J;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new ga(s,3)),this.setAttribute(`normal`,new ga(c,3)),this.setAttribute(`uv`,new ga(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Jo=class e extends Oa{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Y,d=new Y,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new ga(p,3)),this.setAttribute(`normal`,new ga(m,3)),this.setAttribute(`uv`,new ga(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Yo=class e extends Oa{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Y,f=new Y,p=new Y;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new ga(c,3)),this.setAttribute(`normal`,new ga(l,3)),this.setAttribute(`uv`,new ga(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Xo=class e extends Oa{constructor(e=new Wo(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Y,s=new Y,c=new J,l=new Y,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new ga(u,3)),this.setAttribute(`normal`,new ga(d,3)),this.setAttribute(`uv`,new ga(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if($o(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if($o(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Qo(e){let t={};for(let n=0;n<e.length;n++){let r=Zo(e[n]);for(let e in r)t[e]=r[e]}return t}function $o(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function es(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ts(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ir.workingColorSpace}var ns={clone:Zo,merge:Qo},rs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,is=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,as=class extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rs,this.fragmentShader=is,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=es(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new qr().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Qr().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},os=class extends as{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ss=class extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=In,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cs=class extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function us(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ds=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},fs=class extends ds{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nn,endingEnd:Nn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pn:i=e,o=2*t-n;break;case Fn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pn:a=e,s=2*n-t;break;case Fn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ps=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ms=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},hs=class extends ds{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=vs(n,t,g,y,r);i[p]=gs(x,o,_,b,m)}return i}};function gs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function _s(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function vs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=gs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=_s(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ys=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),us(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ms(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ps(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kn:t=this.InterpolantFactoryMethodDiscrete;break;case An:t=this.InterpolantFactoryMethodLinear;break;case jn:t=this.InterpolantFactoryMethodSmooth;break;case Mn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kn;case this.InterpolantFactoryMethodLinear:return An;case this.InterpolantFactoryMethodSmooth:return jn;case this.InterpolantFactoryMethodBezier:return Mn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;us(this.settings)&&(bs(this.settings.inTangents,e),bs(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;us(this.settings)&&(xs(this.settings.inTangents,e),xs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Gn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,us(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function bs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function xs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ys.prototype.ValueTypeName=``,ys.prototype.TimeBufferType=Float32Array,ys.prototype.ValueBufferType=Float32Array,ys.prototype.DefaultInterpolation=An;var Ss=class extends ys{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName=`bool`,Ss.prototype.ValueBufferType=Array,Ss.prototype.DefaultInterpolation=kn,Ss.prototype.InterpolantFactoryMethodLinear=void 0,Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends ys{constructor(e,t,n,r){super(e,t,n,r)}};Cs.prototype.ValueTypeName=`color`;var ws=class extends ys{constructor(e,t,n,r){super(e,t,n,r)}};ws.prototype.ValueTypeName=`number`;var Ts=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Es=class extends ys{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}};Es.prototype.ValueTypeName=`quaternion`,Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends ys{constructor(e,t,n){super(e,t,n)}};Ds.prototype.ValueTypeName=`string`,Ds.prototype.ValueBufferType=Array,Ds.prototype.DefaultInterpolation=kn,Ds.prototype.InterpolantFactoryMethodLinear=void 0,Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends ys{constructor(e,t,n,r){super(e,t,n,r)}};Os.prototype.ValueTypeName=`vector`;var ks=new Y,As=new kr,js=new Y,Ms=class extends Ti{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Qr,this.projectionMatrix=new Qr,this.projectionMatrixInverse=new Qr,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ks,As,js),js.x===1&&js.y===1&&js.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,As,js.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ks,As,js),js.x===1&&js.y===1&&js.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ks,As,js.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new Y,Ps=new J,Fs=new J,Is=class extends Ms{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ps,Fs),t.subVectors(Fs,Ps)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=class extends Ms{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=-90,zs=1,Bs=class extends Ti{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Is(Rs,zs,e,t);r.layers=this.layers,this.add(r);let i=new Is(Rs,zs,e,t);i.layers=this.layers,this.add(i);let a=new Is(Rs,zs,e,t);a.layers=this.layers,this.add(a);let o=new Is(Rs,zs,e,t);o.layers=this.layers,this.add(o);let s=new Is(Rs,zs,e,t);s.layers=this.layers,this.add(s);let c=new Is(Rs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vs=class extends Is{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Hs=`\\[\\]\\.:\\/`,Us=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ws=`[^\\[\\]\\.:\\/]`,Gs=`[^`+Hs.replace(`\\.`,``)+`]`,Ks=`((?:WC+[\\/:])*)`.replace(`WC`,Ws),qs=`(WCOD+)?`.replace(`WCOD`,Gs),Js=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ws),Ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ws),Xs=RegExp(`^`+Ks+qs+Js+Ys+`$`),Zs=[`material`,`materials`,`bones`,`map`],Qs=class{constructor(e,t,n){let r=n||$s.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$s=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Us,``)}static parseTrackName(e){let t=Xs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Zs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$s.Composite=Qs,$s.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$s.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$s.prototype.GetterByBindingType=[$s.prototype._getValue_direct,$s.prototype._getValue_array,$s.prototype._getValue_arrayElement,$s.prototype._getValue_toArray],$s.prototype.SetterByBindingTypeAndVersioning=[[$s.prototype._setValue_direct,$s.prototype._setValue_direct_setNeedsUpdate,$s.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_array,$s.prototype._setValue_array_setNeedsUpdate,$s.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_arrayElement,$s.prototype._setValue_arrayElement_setNeedsUpdate,$s.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_fromArray,$s.prototype._setValue_fromArray_setNeedsUpdate,$s.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],ut=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},ut.prototype.isMatrix2=!0;function ec(e,t,n,r){let i=tc(r);switch(n){case It:return e*t;case Vt:return e*t/i.components*i.byteLength;case Ht:return e*t/i.components*i.byteLength;case Ut:return e*t*2/i.components*i.byteLength;case Wt:return e*t*2/i.components*i.byteLength;case Lt:return e*t*3/i.components*i.byteLength;case Rt:return e*t*4/i.components*i.byteLength;case Gt:return e*t*4/i.components*i.byteLength;case Kt:case qt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Jt:case Yt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zt:case $t:return Math.max(e,16)*Math.max(t,8)/4;case Xt:case Qt:return Math.max(e,8)*Math.max(t,8)/2;case en:case tn:case rn:case an:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nn:case on:case sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ln:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case un:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case dn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case mn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case hn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _n:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Sn:case Cn:case wn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Tn:case En:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Dn:case On:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function tc(e){switch(e){case Ct:case wt:return{byteLength:1,components:1};case Et:case Tt:case At:return{byteLength:2,components:1};case jt:case Mt:return{byteLength:2,components:4};case Ot:case Dt:case kt:return{byteLength:4,components:1};case Pt:case Ft:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function nc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ic={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},ac={basic:{uniforms:Qo([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:ic.meshbasic_vert,fragmentShader:ic.meshbasic_frag},lambert:{uniforms:Qo([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:ic.meshlambert_vert,fragmentShader:ic.meshlambert_frag},phong:{uniforms:Qo([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ic.meshphong_vert,fragmentShader:ic.meshphong_frag},standard:{uniforms:Qo([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag},toon:{uniforms:Qo([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Z(0)}}]),vertexShader:ic.meshtoon_vert,fragmentShader:ic.meshtoon_frag},matcap:{uniforms:Qo([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:ic.meshmatcap_vert,fragmentShader:ic.meshmatcap_frag},points:{uniforms:Qo([Q.points,Q.fog]),vertexShader:ic.points_vert,fragmentShader:ic.points_frag},dashed:{uniforms:Qo([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ic.linedashed_vert,fragmentShader:ic.linedashed_frag},depth:{uniforms:Qo([Q.common,Q.displacementmap]),vertexShader:ic.depth_vert,fragmentShader:ic.depth_frag},normal:{uniforms:Qo([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:ic.meshnormal_vert,fragmentShader:ic.meshnormal_frag},sprite:{uniforms:Qo([Q.sprite,Q.fog]),vertexShader:ic.sprite_vert,fragmentShader:ic.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ic.background_vert,fragmentShader:ic.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:ic.backgroundCube_vert,fragmentShader:ic.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ic.cube_vert,fragmentShader:ic.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ic.equirect_vert,fragmentShader:ic.equirect_frag},distance:{uniforms:Qo([Q.common,Q.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ic.distance_vert,fragmentShader:ic.distance_frag},shadow:{uniforms:Qo([Q.lights,Q.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:ic.shadow_vert,fragmentShader:ic.shadow_frag}};ac.physical={uniforms:Qo([ac.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new X},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag};var oc={r:0,b:0,g:0},sc=new Qr,cc=new X;cc.set(-1,0,0,0,1,0,0,0,1);function lc(e,t,n,r,i,a){let o=new Z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Qa(new mo(1,1,1),new as({name:`BackgroundCubeMaterial`,uniforms:Zo(ac.backgroundCube.uniforms),vertexShader:ac.backgroundCube.vertexShader,fragmentShader:ac.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cc),l.material.toneMapped=Ir.getTransfer(i.colorSpace)!==Bn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Qa(new Ko(2,2),new as({name:`BackgroundMaterial`,uniforms:Zo(ac.background.uniforms),vertexShader:ac.background.vertexShader,fragmentShader:ac.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ir.getTransfer(i.colorSpace)!==Bn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oc,ts(e)),n.buffers.color.setClear(oc.r,oc.g,oc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function uc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&K(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ma,s=new X,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mc=class extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new co(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mo(5,5,5),i=new as({name:`CubemapFromEquirect`,uniforms:Zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Qa(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=bt),new Bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},hc=256,gc=3,_c=20,vc=256,yc=16,bc=3,xc=new Y,Sc=new Z,Cc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bs(1,10,null),this._boxMesh=new Qa(new mo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Sc));let h=new Bs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hc,Cr(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?hc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wc(e,!1,!1),n=Math.log2(e)-gc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ec(),this._integrationMaterial=Dc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/yc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-bc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(vc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Oc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function wc(e,t,n){return new mc(e,{minFilter:St,generateMipmaps:t,type:At,colorSpace:Rn,depthBuffer:n})}function Tc(e,t,n){return new as({name:e,uniforms:t,vertexShader:ic.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ec(){return Tc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dc(){return Tc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Oc(){return Tc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_c}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kc(){return Tc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ac(){return Tc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new mc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Zn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Nc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ha:ma)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Pc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ic(e,t,n){let r=new WeakMap,i=new qr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Xr(h,p,m,u);g.type=kt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new J(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zc(e,t,n,r,i,a){let o=new Yr(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Oa;u.setAttribute(`position`,new ga([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new ga([0,2,0,0,2,0],2));let d=new os({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qa(u,d),p=new Ls(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Yr(t,n,{type:At,depthBuffer:!1,stencilBuffer:!1}),c=new Yr(t,n,{type:At,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new uo(t,n),a===!0&&(l.format=Bt,l.type=Nt)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ir.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Rc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Bc=new Kr,Vc=new uo(1,1),Hc=new fo(1),Uc=new Xr,Wc=new Zr,Gc=new co,Kc=[],qc=[],Jc=new Float32Array(16),Yc=new Float32Array(9),Xc=new Float32Array(4);function Zc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Kc[i];if(a===void 0&&(a=new Float32Array(i),Kc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $c(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function el(e,t){let n=qc[t];n===void 0&&(n=new Int32Array(t),qc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2fv(this.addr,t),$c(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qc(n,t))return;e.uniform3fv(this.addr,t),$c(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4fv(this.addr,t),$c(n,t)}}function al(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Xc.set(r),e.uniformMatrix2fv(this.addr,!1,Xc),$c(n,r)}}function ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Yc.set(r),e.uniformMatrix3fv(this.addr,!1,Yc),$c(n,r)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Jc.set(r),e.uniformMatrix4fv(this.addr,!1,Jc),$c(n,r)}}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2iv(this.addr,t),$c(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3iv(this.addr,t),$c(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4iv(this.addr,t),$c(n,t)}}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2uiv(this.addr,t),$c(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3uiv(this.addr,t),$c(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4uiv(this.addr,t),$c(n,t)}}function gl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function _l(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?gl(Vc):Bc,n.setTexture2D(t||a,i)}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wc,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?gl(Hc):Gc,n.setTextureCube(t||a,i)}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Uc,i)}function xl(e){switch(e){case 5126:return tl;case 35664:return nl;case 35665:return rl;case 35666:return il;case 35674:return al;case 35675:return ol;case 35676:return sl;case 5124:case 35670:return cl;case 35667:case 35671:return ll;case 35668:case 35672:return ul;case 35669:case 35673:return dl;case 5125:return fl;case 36294:return pl;case 36295:return ml;case 36296:return hl;case 35678:case 36198:case 36298:case 36306:case 35682:return _l;case 35679:case 36299:case 36307:return vl;case 35680:case 36300:case 36308:case 36293:return yl;case 36289:case 36303:case 36311:case 36292:return bl}}function Sl(e,t){e.uniform1fv(this.addr,t)}function Cl(e,t){let n=Zc(t,this.size,2);e.uniform2fv(this.addr,n)}function wl(e,t){let n=Zc(t,this.size,3);e.uniform3fv(this.addr,n)}function Tl(e,t){let n=Zc(t,this.size,4);e.uniform4fv(this.addr,n)}function El(e,t){let n=Zc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dl(e,t){let n=Zc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ol(e,t){let n=Zc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kl(e,t){e.uniform1iv(this.addr,t)}function Al(e,t){e.uniform2iv(this.addr,t)}function jl(e,t){e.uniform3iv(this.addr,t)}function Ml(e,t){e.uniform4iv(this.addr,t)}function Nl(e,t){e.uniform1uiv(this.addr,t)}function Pl(e,t){e.uniform2uiv(this.addr,t)}function Fl(e,t){e.uniform3uiv(this.addr,t)}function Il(e,t){e.uniform4uiv(this.addr,t)}function Ll(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gl(Vc):Bc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wc,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?gl(Hc):Gc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Bl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Uc,a[e])}function Vl(e){switch(e){case 5126:return Sl;case 35664:return Cl;case 35665:return wl;case 35666:return Tl;case 35674:return El;case 35675:return Dl;case 35676:return Ol;case 5124:case 35670:return kl;case 35667:case 35671:return Al;case 35668:case 35672:return jl;case 35669:case 35673:return Ml;case 5125:return Nl;case 36294:return Pl;case 36295:return Fl;case 36296:return Il;case 35678:case 36198:case 36298:case 36306:case 35682:return Ll;case 35679:case 36299:case 36307:return Rl;case 35680:case 36300:case 36308:case 36293:return zl;case 36289:case 36303:case 36311:case 36292:return Bl}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xl(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vl(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function Kl(e,t){e.seq.push(t),e.map[t.id]=t}function ql(e,t,n){let r=e.name,i=r.length;for(Gl.lastIndex=0;;){let a=Gl.exec(r),o=Gl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Kl(n,l===void 0?new Hl(s,e,t):new Ul(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wl(s),Kl(n,e)),n=e}}}var Jl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ql(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Yl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xl=37297,Zl=0;function Ql(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $l=new X;function eu(e){Ir._getMatrix($l,Ir.workingColorSpace,e);let t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(Ir.getTransfer(e)){case zn:return[t,`LinearTransferOETF`];case Bn:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ql(e.getShaderSource(t),r)}return i}function nu(e,t){let n=eu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ru={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function iu(e,t){let n=ru[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var au=new Y;function ou(){return Ir.getLuminanceCoefficients(au),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${au.x.toFixed(4)}, ${au.y.toFixed(4)}, ${au.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function su(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(uu).join(`
`)}function cu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function uu(e){return e!==``}function du(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pu=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(e){return e.replace(pu,hu)}function hu(e,t){let n=ic[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return mu(n)}var gu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(e){return e.replace(gu,vu)}function vu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xu(e){return bu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Su={302:`ENVMAP_MODE_REFRACTION`};function Cu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Su[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wu[e.combine]||`ENVMAP_BLENDING_NONE`}function Eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Cu(n),d=Tu(n),f=su(n),p=cu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uu).join(`
`),g.length>0&&(g+=`
`)):(h=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(uu).join(`
`),g=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ic.tonemapping_pars_fragment,n.toneMapping===0?``:iu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ic.colorspace_pars_fragment,nu(`linearToOutputTexel`,n.outputColorSpace),ou(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(uu).join(`
`)),o=mu(o),o=du(o,n),o=fu(o,n),s=mu(s),s=du(s,n),s=fu(s,n),o=_u(o),s=_u(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Yl(i,i.VERTEX_SHADER,v),x=Yl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=tu(i,b,`vertex`),n=tu(i,x,`fragment`);q(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Jl(i,m),w=lu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Xl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Du=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=Du++,this.code=e,this.usedTimes=0}};function Au(e){return e===1030||e===37490||e===36285}function ju(e,t,n,r,i,a){let o=new li,s=new Ou,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ac[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,I=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,L=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,R=i.diffuseRoughness>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,z=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=R&&!!i.diffuseRoughnessMap,B=fe&&!!i.iridescenceMap,ye=fe&&!!i.iridescenceThicknessMap,V=z&&!!i.sheenColorMap,be=z&&!!i.sheenRoughnessMap,H=!!i.specularMap,xe=!!i.specularColorMap,U=!!i.specularIntensityMap,W=pe&&!!i.transmissionMap,Se=pe&&!!i.thicknessMap,Ce=!!i.gradientMap,we=!!i.alphaMap,Te=i.alphaTest>0,Ee=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ae={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ir.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?ke.length-1:null,envMapSize:te?ke[0].width:null,aoMap:ne,lightMap:re,bumpMap:I,normalMap:ie,displacementMap:ae,emissiveMap:L,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Au(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,diffuseRoughness:R,diffuseRoughnessMap:ve,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:B,iridescenceThicknessMap:ye,sheen:z,sheenColorMap:V,sheenRoughnessMap:be,specularMap:H,specularColorMap:xe,specularIntensityMap:U,transmission:pe,transmissionMap:W,thicknessMap:Se,gradientMap:Ce,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:I&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:L&&p(i.emissiveMap.channel),metalnessMapUv:oe&&p(i.metalnessMap.channel),roughnessMapUv:se&&p(i.roughnessMap.channel),anisotropyMapUv:me&&p(i.anisotropyMap.channel),clearcoatMapUv:he&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:B&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:V&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(i.sheenRoughnessMap.channel),specularMapUv:H&&p(i.specularMap.channel),specularColorMapUv:xe&&p(i.specularColorMap.channel),specularIntensityMapUv:U&&p(i.specularIntensityMap.channel),transmissionMapUv:W&&p(i.transmissionMap.channel),thicknessMapUv:Se&&p(i.thicknessMap.channel),alphaMapUv:we&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||we),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Ir.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&Ir.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ac[t];n=ns.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Mu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nu),r.length>1&&r.sort(t||Pu),i.length>1&&i.sort(t||Pu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Iu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fu,e.set(t,[i])):n>=r.length?(i=new Fu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new Z};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new Z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new Z,groundColor:new Z};break;case`RectAreaLight`:n={color:new Z,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function Ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zu=0;function Bu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vu(e){let t=new Lu,n=Ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Qr,o=new Qr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hu(e){let t=new Vu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Uu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hu(e),t.set(n,[a])):r>=i.length?(a=new Hu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ku=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],qu=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ju=new Qr,Yu=new Y,Xu=new Y;function Zu(e,t,n){let r=new ao,i=new J,a=new J,o=new qr,s=new ss,c=new cs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Wu,fragmentShader:Gu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Oa;m.setAttribute(`position`,new pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Qa(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Yr(i.x,i.y,{format:Ut,type:At,minFilter:bt,magFilter:bt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new uo(i.x,i.y,kt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=zt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_t,d.map.depthTexture.magFilter=_t}else l.isPointLight?(d.map=new mc(i.x),d.map.depthTexture=new fo(i.x,Ot)):(d.map=new Yr(i.x,i.y),d.map.depthTexture=new uo(i.x,i.y,Ot)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=zt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=bt,d.map.depthTexture.magFilter=bt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_t,d.map.depthTexture.magFilter=_t);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yu),Xu.copy(e.position),Xu.add(Ku[t]),e.up.copy(qu[t]),e.lookAt(Xu),e.updateMatrixWorld(),n.makeTranslation(-Yu.x,-Yu.y,-Yu.z),Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Yr(i.x,i.y,{format:Ut,type:At}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qu(e,t){function n(){let t=!1,n=new qr,r=null,i=new qr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$n[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),I=new qr().fromArray(ne),ie=new qr().fromArray(re);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),oe(e.CULL_FACE),fe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function z(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function _e(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function B(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function ye(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function V(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function H(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function xe(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function U(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function W(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Se(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ce(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ee(t){return d[t]===void 0?e.getParameter(t):d[t]}function De(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Oe(t){I.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))}function ke(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Ae(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function je(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,I.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:R,setBlending:fe,setMaterial:z,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:B,unbindTexture:ye,compressedTexImage2D:V,compressedTexImage3D:be,texImage2D:we,texImage3D:Te,pixelStorei:De,getParameter:Ee,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:H,texSubImage3D:xe,compressedTexSubImage2D:U,compressedTexSubImage3D:W,scissor:Oe,viewport:ke,reset:Me}}function $u(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Kn(`canvas`)}function v(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?zn:Ir.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),P(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ee=0;function F(){ee=0}function te(){return ee}function ne(e){ee=e}function re(){let e=ee;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ee+=1,e}function I(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&U(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{z(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?z(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function L(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?z(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[mt]:e.REPEAT,[ht]:e.CLAMP_TO_EDGE,[gt]:e.MIRRORED_REPEAT},ce={[_t]:e.NEAREST,[vt]:e.NEAREST_MIPMAP_NEAREST,[yt]:e.NEAREST_MIPMAP_LINEAR,[bt]:e.LINEAR,[xt]:e.LINEAR_MIPMAP_NEAREST,[St]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function R(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=I(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function z(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ir.getPrimaries(Ir.workingColorSpace),r=o.colorSpace===``?null:Ir.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=W(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);R(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Bt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=ec(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ec(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Se(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ir.getPrimaries(Ir.workingColorSpace),r=o.colorSpace===``?null:Ir.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=W(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);R(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Bt,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,H(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,H(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,H(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,H(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,H(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?oe(i.depthTexture,0):ie(i.depthTexture,0);let u=c.__webglTexture,d=H(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ge(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?ge(i.__webglFramebuffer[0],t,0):ge(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function B(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&xe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=H(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),R(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),R(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),R(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&_e(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let V=[];function be(t){if(t.samples>0){if(xe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(V.length=0,V.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&V.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function H(e){return Math.min(i.maxSamples,e.samples)}function xe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function U(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function W(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ir.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=F,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=L,this.setTextureCube=oe,this.rebindTextures=ve,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xe,this.dispose=j}function ed(e,t){function n(n,r=``){let i,a=Ir.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var td=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new as({vertexShader:td,fragmentShader:nd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qa(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends er{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rd,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new J,C=null,w=null,T=new Is;T.viewport=new qr;let E=new Is;E.viewport=new qr;let D=[T,E],O=new Vs,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Oi,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Oi,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Oi,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Bt:zt,a=_.stencil?Nt:Ot);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Yr(d.textureWidth,d.textureHeight,{format:Rt,type:Ct,depthTexture:new uo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yr(f.framebufferWidth,f.framebufferHeight,{format:Rt,type:Ct,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;P(O,i);for(let e=0;e<a.length;e++)P(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ee(e,O,i)};function ee(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ir*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let F=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Is,o.layers.enable(n),o.viewport=new qr,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new po,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new nc;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},ad=new Qr,od=new X;od.set(-1,0,0,0,1,0,0,0,1);function sd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ts(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ad.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ld=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ud=null;function dd(){return ud===null&&(ud=new to(ld,16,16,Ut,At),ud.name=`DFG_LUT`,ud.minFilter=bt,ud.magFilter=bt,ud.wrapS=ht,ud.wrapT=ht,ud.generateMipmaps=!1,ud.needsUpdate=!0),ud}var fd=class{constructor(e={}){let{canvas:t=qn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ct}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Gt,Wt,Ht]),g=new Set([Ct,Ot,Et,Nt,jt,Mt]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Ln;let j=0,M=0,N=null,P=-1,ee=null,F=new qr,te=new qr,ne=null,re=new Z(0),I=0,ie=t.width,ae=t.height,L=1,oe=null,se=null,ce=new qr(0,0,ie,ae),le=new qr(0,0,ie,ae),R=!1,ue=new ao,de=new so,fe=!1,z=!1,pe=new Qr,me=new Y,he=new qr,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ve(){return N===null?L:1}let B=n;function ye(e,n){return t.getContext(e,n)}let V,be,H,xe,U,W,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),B===null){let t=`webgl2`;if(B=ye(t,e),B===null)throw ye(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),q(`WebGLRenderer: `+e.message),e}function ze(){V=new Mc(B),V.init(),Ie=new ed(B,V),be=new fc(B,V,e,Ie),H=new Qu(B,V),be.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),O=B.createFramebuffer(),k=B.createFramebuffer(),A=B.createFramebuffer(),xe=new Fc(B),U=new Mu,W=new $u(B,V,H,U,be,Ie,xe),Se=new jc(T),Ce=new rc(B),Le=new uc(B,Ce),we=new Nc(B,Ce,xe,Le),Te=new Lc(B,we,Ce,Le,xe),Ne=new Ic(B,be,W),Ae=new pc(U),Ee=new ju(T,Se,V,be,Le,Ae),De=new sd(T,U),Oe=new Iu,ke=new Uu(V),Me=new lc(T,Se,H,Te,p,s),je=new Zu(T,Te,be),Re=new cd(B,xe,be,H),Pe=new dc(B,V,xe),Fe=new Pc(B,V,xe),xe.programs=Ee.programs,T.capabilities=be,T.extensions=V,T.properties=U,T.renderLists=Oe,T.shadowMap=je,T.state=H,T.info=xe}m!==1009&&(w=new zc(m,t.width,t.height,o,r,i));let Be=new id(T,B);this.xr=Be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=V.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=V.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(e){e!==void 0&&(L=e,this.setSize(ie,ae,!1))},this.getSize=function(e){return e.set(ie,ae)},this.setSize=function(e,n,r=!0){Be.isPresenting?K(`WebGLRenderer: Can't change size while VR device is presenting.`):(ie=e,ae=n,t.width=Math.floor(e*L),t.height=Math.floor(n*L),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ie*L,ae*L).floor()},this.setDrawingBufferSize=function(e,n,r){ie=e,ae=n,L=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)q(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),H.viewport(F.copy(ce).multiplyScalar(ve()).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),H.scissor(te.copy(le).multiplyScalar(ve()).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(e){H.setScissorTest(R=e)},this.setOpaqueSort=function(e){oe=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,B.clearBufferiv(B.COLOR,0,v))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Me.dispose(),Oe.dispose(),ke.dispose(),W.dispose(),U.dispose(),Se.dispose(),Te.dispose(),we.dispose(),Le.dispose(),Re.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,Xe),Be.removeEventListener(`sessionend`,Ze),Qe.stop()};function Ve(e){e.preventDefault(),Yn(`WebGLRenderer: Context Lost.`),E=!0}function He(){Yn(`WebGLRenderer: Context Restored.`),E=!1;let e=xe.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;ze(),xe.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function Ue(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){Ke(e),U.remove(e)}function Ke(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ee.releaseProgram(e)}),e.isShaderMaterial&&Ee.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ge);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ct(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=we.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=Ce.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*ve()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*ve()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(V.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ce.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),fe===!0&&Ae.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,it(e,t,r),e.side=0,e.needsUpdate=!0,it(e,t,r),e.side=2):it(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),z=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,z),fe===!0&&Ae.setGlobalState(this.clippingPlanes,t),D!==null&&je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];qe(o,n,t,e),r.add(o)}else qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}V.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new nc;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Be.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Be.addEventListener(`sessionstart`,Xe),Be.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=ke.get(e,C.length),x.init(t),x.state.textureUnits=W.getTextureUnits(),C.push(x),pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?de.setFromArrayCamera(t):ue.setFromProjectionMatrix(pe,Un,t.reversedDepth),z=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,z),b=Oe.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&G(e,t,-1/0,T.sortObjects)}G(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(oe,se),_e=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,_e&&Me.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ae.beginShadows();let i=x.state.shadowsArray;if(je.render(i,e,t),fe===!0&&Ae.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];et(n,r,e,a)}_e&&Me.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];$e(b,e,n,n.viewport)}}else r.length>0&&et(n,r,e,t),_e&&Me.render(e),$e(b,e,t)}N!==null&&M===0&&(W.updateMultisampleRenderTarget(N),W.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),P=-1,ee=null,C.pop(),C.length>0?(x=C[C.length-1],W.setTextureUnits(x.state.textureUnits),fe===!0&&Ae.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function G(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?de:ue;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&he.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pe);let i=Te.update(e),a=e.material;a.visible&&b.push(e,i,a,n,he.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?de:ue;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Te.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),he.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),he.copy(e.boundingSphere.center)),he.applyMatrix4(e.matrixWorld).applyMatrix4(pe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,he.z,s,t)}}else a.visible&&b.push(e,i,a,n,he.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)G(i[e],t,n,r)}function $e(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),fe===!0&&Ae.setGlobalState(T.clippingPlanes,n),r&&H.viewport(F.copy(r)),i.length>0&&tt(i,t,n),a.length>0&&tt(a,t,n),o.length>0&&tt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=V.has(`EXT_color_buffer_half_float`)||V.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Yr(1,1,{generateMipmaps:!0,type:e?At:Ct,minFilter:St,samples:Math.max(4,be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ir.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),I=T.getClearAlpha(),I<1&&T.setClearColor(16777215,.5),T.clear(),_e&&Me.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),fe===!0&&Ae.setGlobalState(T.clippingPlanes,r),tt(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),V.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,nt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,I),d!==void 0&&(r.viewport=d),T.toneMapping=u}function tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&nt(o,t,n,s,l,c)}}function nt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function rt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function it(e,t,n){t.isScene!==!0&&(t=ge);let r=U.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ee.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ee.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Se.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=Ee.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ee.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ae.uniform),st(e,s),r.needsLights=ut(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=rt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function at(e,t,n,r,i){let a=U.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=it(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t,n,r,i){t.isScene!==!0&&(t=ge),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ir.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Se.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),b=x.state.lights;if(fe===!0&&(z===!0||e!==ee)){let t=e===ee&&r.id===P;Ae.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ae.numPlanes||v.numIntersection!==Ae.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===rt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?at(r,t,i,s,h):it(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(H.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==P&&(P=r.id,O=!0),E||ee!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(B,`projectionMatrix`,e.projectionMatrix),A.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(B,me.setFromMatrixPosition(e.matrixWorld)),be.logarithmicDepthBuffer&&A.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),ee!==e&&(ee=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(B,`sunShadowMap`,b.state.sunShadowMap,W),b.state.directionalShadowMap.length>0&&A.setValue(B,`directionalShadowMap`,b.state.directionalShadowMap,W),b.state.spotShadowMap.length>0&&A.setValue(B,`spotShadowMap`,b.state.spotShadowMap,W),b.state.pointShadowMap.length>0&&A.setValue(B,`pointShadowMap`,b.state.pointShadowMap,W)),i.isSkinnedMesh){A.setOptional(B,i,`bindMatrix`),A.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(B,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(A.setOptional(B,i,`batchingTexture`),A.setValue(B,`batchingTexture`,i._matricesTexture,W),A.setOptional(B,i,`batchingIdTexture`),A.setValue(B,`batchingIdTexture`,i._indirectTexture,W),A.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(B,`batchingColorTexture`,i._colorsTexture,W));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Ne.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=dd()),O){if(A.setValue(B,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&lt(j,k),a&&r.fog===!0&&De.refreshFogUniforms(j,a),De.refreshMaterialUniforms(j,r,L,ae,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Jl.upload(B,ot(v),j,W)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jl.upload(B,ot(v),j,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(B,`center`,i.center),A.setValue(B,`modelViewMatrix`,i.modelViewMatrix),A.setValue(B,`normalMatrix`,i.normalMatrix),A.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,w),Re.bind(n,w)}}return w}function lt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ut(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,H.viewport(F),H.scissor(te),H.setScissorTest(ne),P=-1;return}if(o.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(o.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else F.copy(ce).multiplyScalar(L).floor(),te.copy(le).multiplyScalar(L).floor(),ne=R;if(n!==0&&(r=O),H.bindFramebuffer(B.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(F),H.scissor(te),H.setScissorTest(ne),i){let r=U.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}P=-1};function dt(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=be.textureFormatReadable(e.format),t.__typeReadable=be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){H.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=dt(o);if(u.__formatReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a)}finally{let e=N===null?null:U.get(N).__webglFramebuffer;H.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=N===null?null:U.get(N).__webglFramebuffer;H.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qn(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=B.TEXTURE_2D),H.activeTexture(B.TEXTURE0),H.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(B.UNPACK_ROW_LENGTH),b=H.getParameter(B.UNPACK_IMAGE_HEIGHT),x=H.getParameter(B.UNPACK_SKIP_PIXELS),S=H.getParameter(B.UNPACK_SKIP_ROWS),C=H.getParameter(B.UNPACK_SKIP_IMAGES);H.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(B.UNPACK_SKIP_PIXELS,l),H.pixelStorei(B.UNPACK_SKIP_ROWS,u),H.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.DEPTH_BUFFER_BIT,B.NEAREST);H.bindFramebuffer(B.READ_FRAMEBUFFER,null),H.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(B.READ_FRAMEBUFFER,k),H.bindFramebuffer(B.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.COLOR_BUFFER_BIT,B.NEAREST);H.bindFramebuffer(B.READ_FRAMEBUFFER,null),H.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(B.UNPACK_ROW_LENGTH,y),H.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(B.UNPACK_SKIP_PIXELS,x),H.pixelStorei(B.UNPACK_SKIP_ROWS,S),H.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&B.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,H.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ir._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ir._getUnpackColorSpace()}},pd=class e{constructor(e,t){w(this,`video`,void 0),w(this,`stream`,void 0),w(this,`kind`,`camera`),this.video=e,this.stream=t}get width(){return this.video.videoWidth||1280}get height(){return this.video.videoHeight||720}get element(){return this.video}static async open(t){if(!navigator.mediaDevices?.getUserMedia)throw Error(`getUserMedia unavailable (https が必要)`);let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:`environment`},width:{ideal:1280},height:{ideal:720}},audio:!1});return t.srcObject=n,t.setAttribute(`playsinline`,``),t.muted=!0,t.autoplay=!0,await new Promise(e=>{t.readyState>=1?e():t.onloadedmetadata=()=>e()}),await t.play().catch(()=>{}),new e(t,n)}dispose(){for(let e of this.stream.getTracks())e.stop();this.video.srcObject=null}},md=class e{constructor(e){w(this,`element`,void 0),w(this,`kind`,`image`),this.element=e}get width(){return this.element instanceof HTMLImageElement?this.element.naturalWidth:this.element.width}get height(){return this.element instanceof HTMLImageElement?this.element.naturalHeight:this.element.height}dispose(){}static async fromFile(t){let n=URL.createObjectURL(t);try{let t=new Image;await new Promise((e,r)=>{t.onload=()=>e(),t.onerror=()=>r(Error(`画像を読めません`)),t.src=n});let r=1600;if(Math.max(t.naturalWidth,t.naturalHeight)>r){let n=r/Math.max(t.naturalWidth,t.naturalHeight),i=document.createElement(`canvas`);return i.width=Math.round(t.naturalWidth*n),i.height=Math.round(t.naturalHeight*n),i.getContext(`2d`).drawImage(t,0,0,i.width,i.height),new e(i)}return new e(t)}finally{setTimeout(()=>URL.revokeObjectURL(n),5e3)}}};function hd(e,t,n,r){let i=Math.max(n/e,r/t);return{s:i,ox:(n-e*i)/2,oy:(r-t*i)/2}}function gd(e,t,n,r){let i=hd(t.width,t.height,n,r);e.drawImage(t.element,i.ox,i.oy,t.width*i.s,t.height*i.s)}function _d(e){if(e.length<6)return null;let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;t/=e.length,n/=e.length;let r=0;for(let i of e)r+=Math.hypot(i.x-t,i.y-n);if(r/=e.length,r<1e-6)return null;let i=new Float64Array(25),a=new Float64Array(5),o=new Float64Array(5);for(let s of e){let e=(s.x-t)/r,c=(s.y-n)/r;o[0]=e*e,o[1]=e*c,o[2]=c*c,o[3]=e,o[4]=c;for(let e=0;e<5;e++){a[e]+=o[e];for(let t=0;t<5;t++)i[e*5+t]+=o[e]*o[t]}}let s=vd(i,a);if(!s)return null;let[c,l,u,d,f]=s,p=4*c*u-l*l;if(p<=1e-12)return null;let m=(l*f-2*u*d)/p,h=(l*d-2*c*f)/p,g=1-(c*m*m+l*m*h+u*h*h+d*m+f*h);if(g<=0)return null;let _=c/g,v=l/(2*g),y=u/g,b=_+y,x=Math.sqrt(Math.max(0,((_-y)/2)**2+v*v)),S=b/2-x,C=b/2+x;if(S<=0||C<=0)return null;let w=Math.sqrt(1/S)*r,T=Math.sqrt(1/C)*r,E;return E=Math.abs(v)<1e-12?_<=y?0:Math.PI/2:Math.atan2(S-_,v),{cx:m*r+t,cy:h*r+n,a:w,b:T,angle:E}}function vd(e,t){let n=new Float64Array(30);for(let r=0;r<5;r++){for(let t=0;t<5;t++)n[r*6+t]=e[r*5+t];n[r*6+5]=t[r]}for(let e=0;e<5;e++){let t=e;for(let r=e+1;r<5;r++)Math.abs(n[r*6+e])>Math.abs(n[t*6+e])&&(t=r);if(Math.abs(n[t*6+e])<1e-12)return null;if(t!==e)for(let r=0;r<=5;r++){let i=n[e*6+r];n[e*6+r]=n[t*6+r],n[t*6+r]=i}for(let t=0;t<5;t++){if(t===e)continue;let r=n[t*6+e]/n[e*6+e];if(r!==0)for(let i=e;i<=5;i++)n[t*6+i]-=r*n[e*6+i]}}let r=[];for(let e=0;e<5;e++)r.push(n[e*6+5]/n[e*6+e]);return r}function yd(e,t,n=36){let r=Math.cos(t.angle),i=Math.sin(t.angle),a=new Uint8Array(n),o=0;for(let s of e){let e=s.x-t.cx,c=s.y-t.cy,l=(e*r+c*i)/t.a,u=(-e*i+c*r)/t.b;o+=Math.abs(Math.hypot(l,u)-1);let d=Math.atan2(u,l);d<0&&(d+=Math.PI*2),a[Math.min(n-1,Math.floor(d/(Math.PI*2)*n))]=1}let s=0;for(let e=0;e<n;e++)s+=a[e];return{err:o/e.length,coverage:s/n}}var bd={minDiameterRatio:.15,maxErr:.1,minCoverage:.85,minAspect:.45,minCircularity:.8,threshRadius:7,threshC:10};function xd(e,t,n,r={}){let i={...bd,...r},a=performance.now(),o=le(e,t,n,i.threshRadius,i.threshC),s=ue(R(e,t,n),t,n),c=new Uint8Array(t*n);for(let e=0;e<c.length;e++)c[e]=o[e]||s[e]?1:0;let l=fe(c,t,n),{labels:u,comps:d}=z(l,t,n,1,!0),f=i.minDiameterRatio*Math.min(t,n),p=[];for(let e of d){let r=e.maxX-e.minX+1,a=e.maxY-e.minY+1;if(Math.max(r,a)<f)continue;let o=r/a;if(o<.3||o>3.3||e.area<40)continue;let s={x:(e.minX+e.maxX)/2,y:(e.minY+e.maxY)/2},c=me(u,t,e,72,s.x,s.y).pts,l=_d(c);if(!l)continue;s={x:l.cx,y:l.cy},c=me(u,t,e,72,s.x,s.y).pts;let d=_d(c);if(d&&(l=d),!(l.a>0)||!(l.b>0)||l.b/l.a<i.minAspect||l.a*2>Math.max(t,n)*1.2||l.a*2<f)continue;let{err:m,coverage:h}=yd(c,l,36);if(m>i.maxErr||h<i.minCoverage)continue;let g=c.length>=6?4*Math.PI*de(c)/V(c)**2:0;if(g<i.minCircularity)continue;let _=.5+.5*Math.min(1,l.a*2/(.6*Math.min(t,n))),v=(1-m/i.maxErr)*h*_;p.push({ellipse:l,err:m,coverage:h,circularity:g,score:v,contour:c,comp:e})}p.sort((e,t)=>t.score-e.score);let m=p[0]??null,h=p.filter(e=>e.err<=i.maxErr*.7&&e.coverage>=.92);return h.length>0&&(m=h.reduce((e,t)=>t.ellipse.a>e.ellipse.a?t:e)),{best:m,candidates:p,mask:l,ms:performance.now()-a}}function Sd(e,t,n=.92){let r=document.createElement(`canvas`);r.width=256,r.height=256;let i=r.getContext(`2d`,{willReadFrequently:!0});return Cd(i,e,t,n),{image:{w:256,h:256,data:i.getImageData(0,0,256,256).data},canvas:r}}function Cd(e,t,n,r=.92){e.setTransform(1,0,0,1,0,0),e.fillStyle=`#FFFFFF`,e.fillRect(0,0,256,256),e.save(),e.beginPath(),e.arc(128,128,128*r,0,Math.PI*2),e.clip(),e.translate(128,128),e.scale(128/n.a,128/n.b),e.rotate(-n.angle),e.translate(-n.cx,-n.cy),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function wd(e,t,n,r){return Sd(e,{cx:t,cy:n,a:r,b:r,angle:0},1)}var Td=class{constructor(e=256,t=72){w(this,`binMap`,void 0),w(this,`n`,void 0),w(this,`size`,void 0),w(this,`bins`,void 0),this.size=e,this.bins=t,this.n=e*e,this.binMap=new Int16Array(this.n);let n=e/2,r=n*.12,i=n*.88;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=o+.5-n,c=a+.5-n,l=Math.hypot(s,c);if(l<r||l>i){this.binMap[a*e+o]=-1;continue}let u=Math.atan2(c,s);u<0&&(u+=Math.PI*2);let d=l<n*.4?0:l<n*.65?1:2;this.binMap[a*e+o]=d*t+Math.min(t-1,Math.floor(u/(Math.PI*2)*t))}}signature(e){let{data:t}=e,n=this.n,r=new Int32Array(256),i=new Uint8Array(n);for(let e=0;e<n;e++){if(this.binMap[e]<0)continue;let n=t[e*4]*77+t[e*4+1]*150+t[e*4+2]*29>>8;i[e]=n,r[n]++}let a=0;for(let e=0;e<256;e++)a+=r[e];if(a===0)return null;let o=0,s=255;for(let e=255;e>=0;e--)if(o+=r[e],o>=a*.3){s=e;break}let c=new Float32Array(this.bins*3),l=0;for(let e=0;e<n;e++){let t=this.binMap[e];if(t<0)continue;let n=Math.min(1,Math.max(0,(s-i[e]-12)/60));n>0&&(c[t]+=n,l+=n)}if(l<30)return null;let u=this.bins;for(let e=0;e<3;e++){let t=0;for(let n=0;n<u;n++)t+=c[e*u+n];t/=u;for(let n=0;n<u;n++)c[e*u+n]-=t}let d=0;for(let e=0;e<c.length;e++)d+=c[e]*c[e];if(d=Math.sqrt(d),d<1e-6)return null;for(let e=0;e<c.length;e++)c[e]/=d;return c}static bestShift(e,t,n=72){let r=n,i=Math.floor(e.length/r),a=new Float64Array(r),o=0;for(let n=0;n<r;n++){let s=0;for(let a=0;a<i;a++){let i=a*r;for(let a=0;a<r;a++)s+=e[i+a]*t[i+(a+n)%r]}a[n]=s,s>a[o]&&(o=n)}let s=a[(o-1+r)%r],c=a[o],l=a[(o+1)%r],u=s-2*c+l,d=Math.abs(u)>1e-9?Math.max(-.5,Math.min(.5,.5*(s-l)/u)):0,f=o+d;return f>r/2&&(f-=r),{shift:f,radians:f/r*Math.PI*2,score:c}}};function Ed(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var Dd={analysisWidth:320,everyNFrames:3,lockSeconds:1.5,confirmMatches:3,confirmTimeoutSeconds:1,timeoutSeconds:10,loseSeconds:.6},Od=class{constructor(e,t={}){w(this,`source`,void 0),w(this,`opt`,void 0),w(this,`frame`,0),w(this,`acv`,void 0),w(this,`actx`,void 0),w(this,`refEllipse`,null),w(this,`stableSince`,0),w(this,`lastSeen`,0),w(this,`startedAt`,0),w(this,`timeoutFired`,!1),w(this,`lostFired`,!1),w(this,`confirmSince`,0),w(this,`confirmStreak`,0),w(this,`lastConfirmSeed`,null),w(this,`confirmCv`,null),w(this,`confirmCtx`,null),w(this,`locked`,null),w(this,`lockedScreen`,null),w(this,`spin`,0),w(this,`spinScore`,0),w(this,`spinMeter`,new Td(256)),w(this,`sig0`,null),w(this,`lockAngle`,0),w(this,`lockCrop`,null),w(this,`spinCv`,null),w(this,`spinCtx`,null),w(this,`lastSpinRaw`,0),w(this,`viewW`,1),w(this,`viewH`,1),w(this,`last`,null),this.source=e,this.opt={...Dd,...t},this.acv=document.createElement(`canvas`),this.actx=this.acv.getContext(`2d`,{willReadFrequently:!0})}setView(e,t){this.viewW=e,this.viewH=t}reset(){this.refEllipse=null,this.stableSince=0,this.lastSeen=0,this.startedAt=0,this.timeoutFired=!1,this.lostFired=!1,this.locked=null,this.lockedScreen=null,this.spin=0,this.spinScore=0,this.sig0=null,this.confirmSince=0,this.confirmStreak=0,this.lastConfirmSeed=null}sampleSeed(e){this.confirmCv||(this.confirmCv=document.createElement(`canvas`),this.confirmCv.width=256,this.confirmCv.height=256,this.confirmCtx=this.confirmCv.getContext(`2d`,{willReadFrequently:!0})),Cd(this.confirmCtx,this.source.element,this.toSource(e));let{debug:t}=Ae({w:256,h:256,data:this.confirmCtx.getImageData(0,0,256,256).data});return je(t.quantVector)}measureSpin(e){if(!this.locked||!this.sig0)return;this.spinCv||(this.spinCv=document.createElement(`canvas`),this.spinCv.width=256,this.spinCv.height=256,this.spinCtx=this.spinCv.getContext(`2d`,{willReadFrequently:!0}));let t=this.spinCtx;Cd(t,this.source.element,this.toSource(e));let n={w:256,h:256,data:t.getImageData(0,0,256,256).data},r=this.spinMeter.signature(n);if(!r)return;let i=Td.bestShift(this.sig0,r);if(this.spinScore=i.score,this.lastSpinRaw=i.radians,i.score<.45)return;let a=Ed(Ed(i.radians+Ed(e.angle-this.lockAngle))-this.spin);this.spin=Ed(this.spin+a*.5)}get stableSeconds(){return this.refEllipse&&this.stableSince?(performance.now()-this.stableSince)/1e3:0}toScreen(e){let t=this.acv.width,n=this.source.width/t,r=hd(this.source.width,this.source.height,this.viewW,this.viewH),i=n*r.s;return{cx:e.cx*i+r.ox,cy:e.cy*i+r.oy,a:e.a*i,b:e.b*i,angle:e.angle}}toSource(e){let t=this.source.width/this.acv.width;return{cx:e.cx*t,cy:e.cy*t,a:e.a*t,b:e.b*t,angle:e.angle}}contourToScreen(e){let t=this.source.width/this.acv.width,n=hd(this.source.width,this.source.height,this.viewW,this.viewH),r=t*n.s;return e.map(e=>({x:e.x*r+n.ox,y:e.y*r+n.oy}))}update(e){let t=[];if(this.startedAt||(this.startedAt=e),this.frame++,this.frame%this.opt.everyNFrames!==0)return t;let n=this.source.width,r=this.source.height;if(n<2||r<2)return t;let i=this.opt.analysisWidth,a=Math.max(2,Math.round(r/n*i));(this.acv.width!==i||this.acv.height!==a)&&(this.acv.width=i,this.acv.height=a),this.actx.drawImage(this.source.element,0,0,i,a);let o=this.actx.getImageData(0,0,i,a).data,s=xd(se(o,i,a),i,a);this.last={best:s.best,count:s.candidates.length,ms:s.ms,w:i,h:a};let c=s.best;if(this.locked){let n=this.locked,r=null,i=1/0;for(let e of s.candidates){let t=Math.hypot(e.ellipse.cx-n.cx,e.ellipse.cy-n.cy)/n.a,a=Math.abs(e.ellipse.a-n.a)/n.a;t<.35&&a<.22&&t+a<i&&(i=t+a,r=e)}let a=!1;if(!r&&s.best&&e-this.lastSeen>800&&Math.abs(s.best.ellipse.a-n.a)/n.a<.3&&(r=s.best,a=!0),r){let i=r.ellipse,o=a?1:.6;this.locked={cx:n.cx+(i.cx-n.cx)*o,cy:n.cy+(i.cy-n.cy)*o,a:n.a+(i.a-n.a)*o,b:n.b+(i.b-n.b)*o,angle:kd(n.angle,i.angle,o)},this.lockedScreen=this.toScreen(this.locked),this.lastSeen=e,this.lostFired=!1,this.measureSpin(i),t.push({type:`track`,screen:this.lockedScreen,spin:this.spin,spinScore:this.spinScore})}else!this.lostFired&&e-this.lastSeen>this.opt.loseSeconds*1e3&&(this.lostFired=!0,t.push({type:`lost`}));return t}if(c){let n=c.ellipse;this.lastSeen=e;let r=this.refEllipse;if(r&&Math.hypot(n.cx-r.cx,n.cy-r.cy)<r.a*.12&&Math.abs(n.a-r.a)/r.a<.15&&r){let e=.3;this.refEllipse={cx:r.cx+(n.cx-r.cx)*e,cy:r.cy+(n.cy-r.cy)*e,a:r.a+(n.a-r.a)*e,b:r.b+(n.b-r.b)*e,angle:kd(r.angle,n.angle,e)}}else this.refEllipse={...n},this.stableSince=e,this.confirmSince=0,this.confirmStreak=0,this.lastConfirmSeed=null;let i=(e-this.stableSince)/1e3;if(t.push({type:`candidate`,screen:this.toScreen(this.refEllipse),contour:this.contourToScreen(c.contour),stable:i}),i>=this.opt.lockSeconds){this.confirmSince||(this.confirmSince=e);let r=this.sampleSeed(n);this.confirmStreak=r===this.lastConfirmSeed?this.confirmStreak+1:1,this.lastConfirmSeed=r;let i=this.confirmStreak>=this.opt.confirmMatches,a=e-this.confirmSince>this.opt.confirmTimeoutSeconds*1e3;if(t.push({type:`confirming`,streak:Math.min(this.confirmStreak,this.opt.confirmMatches),needed:this.opt.confirmMatches,seed:r}),i||a){this.locked={...this.refEllipse},this.lockedScreen=this.toScreen(this.locked);let e=this.toSource(this.locked),n=Sd(this.source.element,e),{debug:r}=Ae(n.image);this.sig0=this.spinMeter.signature(n.image),this.lockCrop=n.canvas,this.lockAngle=this.locked.angle,this.spin=0,this.spinScore=+!!this.sig0,t.push({type:`lock`,screen:this.lockedScreen,source:e,crop:n,quant:r.quantVector,confirmedByTimeout:!i}),this.confirmSince=0,this.confirmStreak=0,this.lastConfirmSeed=null}}}else this.refEllipse&&e-this.lastSeen>this.opt.loseSeconds*1e3&&(this.refEllipse=null,this.stableSince=0,this.confirmSince=0,this.confirmStreak=0,this.lastConfirmSeed=null),!this.timeoutFired&&e-this.startedAt>this.opt.timeoutSeconds*1e3&&e-this.lastSeen>this.opt.timeoutSeconds*1e3&&(this.timeoutFired=!0,t.push({type:`timeout`}));return t}};function kd(e,t,n){let r=t-e;for(;r>Math.PI/2;)r-=Math.PI;for(;r<-Math.PI/2;)r+=Math.PI;return e+r*n}function Ad(e,t,n,r,i=0,a=null,o=null){let s=r/2/Math.tan(Or.degToRad(t.fov)/2),c=s*1/(2*e.a),l=new Y((e.cx-n/2)/s*c,-(e.cy-r/2)/s*c,-c),u=Math.min(1,e.b/e.a),d=Math.acos(u),f=e.angle+Math.PI/2,p=Math.cos(f),m=-Math.sin(f),h=new Y(p*Math.sin(d),m*Math.sin(d),Math.cos(d)).normalize(),g=new Y(-p*Math.sin(d),-m*Math.sin(d),Math.cos(d)).normalize(),_;_=a?h.dot(a)>=g.dot(a)?h:g:m>=0?h:g;let v=a?a.clone():_,y;if(o)y=o.clone();else{let e=l.clone().negate().normalize();if(y=e.clone().sub(v.clone().multiplyScalar(e.dot(v))),y.lengthSq()<1e-4){let e=new Y(0,-1,0);y=e.clone().sub(v.clone().multiplyScalar(e.dot(v))),y.lengthSq()<1e-6&&y.set(0,0,1)}}i&&y.applyAxisAngle(v,-i),y.sub(v.clone().multiplyScalar(y.dot(v))),y.lengthSq()<1e-6?y.set(0,0,1).sub(v.clone().multiplyScalar(v.z)).normalize():y.normalize();let b=new Y().crossVectors(v,y).normalize(),x=new Qr().makeBasis(b,v,y);return{position:l,quaternion:new kr().setFromRotationMatrix(x),diameter:1,tilt:d}}function jd(e,t,n){return{position:e.position.clone().lerp(t.position,n),quaternion:e.quaternion.clone().slerp(t.quaternion,n),diameter:1,tilt:e.tilt+(t.tilt-e.tilt)*n}}function Md(e,t){let n=e.clone().sub(t.clone().multiplyScalar(e.dot(t)));return n.lengthSq()>1e-6?n.normalize():null}function Nd(e,t){let n=new Y(0,1,0).applyQuaternion(e.quaternion),r=new Y(0,0,1).applyQuaternion(e.quaternion),i=Md(e.position.clone().negate(),n),a=Md(r,n),o=Md(r.clone().applyAxisAngle(n,t),n);if(!i||!a||!o)return null;let s=(e,t)=>Math.atan2(new Y().crossVectors(e,t).dot(n),e.dot(t));return{deviation:s(o,i),yawToCamera:s(a,i)}}var Pd=class{constructor(){w(this,`available`,!1),w(this,`latest`,null),w(this,`handler`,e=>{let t=e.accelerationIncludingGravity;if(!t||t.x==null||t.y==null||t.z==null)return;let n=(screen.orientation?.angle??0)*Math.PI/180||0,r=Math.cos(n),i=Math.sin(n),a=new Y(t.x*r+t.y*i,-t.x*i+t.y*r,t.z);a.lengthSq()<1e-6||(this.latest=a.normalize(),this.available=!0)})}async requestPermission(){if(!(`DeviceMotionEvent`in window))return!1;let e=window.DeviceMotionEvent;if(typeof e.requestPermission==`function`)try{if(await e.requestPermission()!==`granted`)return!1}catch{return!1}return window.addEventListener(`devicemotion`,this.handler),await new Promise(e=>setTimeout(e,300)),this.available=this.latest!==null,this.available||window.removeEventListener(`devicemotion`,this.handler),this.available}get up(){return this.available&&this.latest?this.latest.clone():null}dispose(){window.removeEventListener(`devicemotion`,this.handler)}},Fd={uViewport:{value:new J(390,844)},uWidthPx:{value:3}};function Id(e,t,n){Fd.uViewport.value.set(e*n,t*n),Fd.uWidthPx.value=e/390*3*n}var Ld=`
#include <common>
#include <clipping_planes_pars_vertex>
uniform vec2 uViewport;
uniform float uWidthPx;
uniform float uWidthMul;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec3 n = normalize(normalMatrix * normal);
  float pxToWorld = 2.0 * max(0.05, -mvPosition.z) / (projectionMatrix[1][1] * uViewport.y);
  mvPosition.xyz += n * (uWidthPx * uWidthMul * pxToWorld);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}
`,Rd=`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 uColor;
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4(uColor, 1.0);
  #include <colorspace_fragment>
}
`;function zd(){return new as({vertexShader:Ld,fragmentShader:Rd,side:1,clipping:!0,uniforms:{uViewport:Fd.uViewport,uWidthPx:Fd.uWidthPx,uWidthMul:{value:1},uColor:{value:new Z(L)}}})}var Bd=null;function Vd(){return Bd||(Bd=zd()),Bd}function Hd(e,t=Vd()){let n=new Qa(e.geometry,t);return n.name=`outline`,n.renderOrder=-1,e.add(n),n}var Ud=class{constructor(e,t={}){w(this,`canvas`,void 0),w(this,`renderer`,void 0),w(this,`scene`,new Pi),w(this,`camera`,void 0),w(this,`cssW`,1),w(this,`cssH`,1),this.canvas=e,this.renderer=new fd({canvas:e,alpha:!!t.alpha,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.localClippingEnabled=!0,this.renderer.outputColorSpace=Ln,t.alpha?this.renderer.setClearColor(0,0):this.scene.background=new Z(t.background??`#FFFFFF`),this.camera=new Is(t.fov??50,1,.05,50)}resize(e,t){(e!==this.cssW||t!==this.cssH)&&(this.cssW=e,this.cssH=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),Id(e,t,this.renderer.getPixelRatio()))}fit(e){let t=e.getBoundingClientRect();this.resize(Math.max(1,Math.round(t.width)),Math.max(1,Math.round(t.height)))}render(){this.renderer.render(this.scene,this.camera)}project(e,t=new J){return Wd.copy(e).project(this.camera),t.set((Wd.x+1)/2*this.cssW,(1-Wd.y)/2*this.cssH),t}dispose(){this.renderer.dispose()}},Wd=new Y,Gd=new Y;function Kd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Gd.copy(t),Gd[r]=0,Gd.normalize();let l=.5*o/(o+s),u=1-Gd.angleTo(e)/c;return Math.sign(Gd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var qd=class e extends mo{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new Y,c=new Y,l=new Y(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new Y,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Kd(m,c,`z`,`y`,i,n),f[a+1]=1-Kd(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Kd(m,c,`z`,`y`,i,n),f[a+1]=1-Kd(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Kd(m,c,`x`,`z`,i,e),f[a+1]=Kd(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Kd(m,c,`x`,`z`,i,e),f[a+1]=1-Kd(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Kd(m,c,`x`,`y`,i,e),f[a+1]=1-Kd(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Kd(m,c,`x`,`y`,i,e),f[a+1]=1-Kd(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Jd=new Y(-.45,.65,.62).normalize(),Yd=`
#include <common>
#include <clipping_planes_pars_vertex>
varying vec3 vNormalV;
varying vec3 vPosO;
void main() {
  vPosO = position;
  vNormalV = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}
`,Xd=`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 uLight;
uniform vec3 uDark;
uniform vec3 uLightDir;
uniform int uPattern;
uniform float uPatScale;
uniform float uPatAmount;
uniform vec3 uPatColor;
uniform vec3 uPatDark;
uniform float uFlash;
varying vec3 vNormalV;
varying vec3 vPosO;
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
void main() {
  #include <clipping_planes_fragment>
  float ndl = dot(normalize(vNormalV), normalize(uLightDir));
  bool lit = ndl > 0.12;
  vec3 col = lit ? uLight : uDark;
  if (uPattern == 1) {
    vec3 p = vPosO * uPatScale;
    vec3 c = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 off = (vec3(hash3(c), hash3(c + 7.0), hash3(c + 13.0)) - 0.5) * 0.5;
    float d = length(f - off);
    float r = 0.16 + 0.2 * uPatAmount;
    if (d < r && hash3(c + 31.0) < 0.35 + 0.6 * uPatAmount) col = lit ? uPatColor : uPatDark;
  } else if (uPattern == 2) {
    float s = sin(vPosO.y * uPatScale * 6.2831853);
    if (s > 1.0 - 0.9 * uPatAmount) col = lit ? uPatColor : uPatDark;
  }
  col = mix(col, vec3(1.0), uFlash);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Zd(e,t,n=6,r){let i=r??ie(e);return new as({vertexShader:Yd,fragmentShader:Xd,clipping:!0,uniforms:{uLight:{value:new Z(e)},uDark:{value:new Z(ie(e))},uLightDir:{value:Jd},uPattern:{value:t?t.kind===`spots`?1:2:0},uPatScale:{value:n},uPatAmount:{value:t?t.amount:0},uPatColor:{value:new Z(i)},uPatDark:{value:new Z(ie(i))},uFlash:{value:0}}})}function Qd(e){let t=document.createElement(`canvas`);t.width=512,t.height=384;let n=t.getContext(`2d`);n.clearRect(0,0,512,384),n.lineCap=`round`,n.lineJoin=`round`;let r=14.336,i=(e,t,i)=>{n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fillStyle=`#FFFFFF`,n.fill(),n.lineWidth=r,n.strokeStyle=L,n.stroke(),n.beginPath(),n.arc(e+i*.2,t+i*.15,i*.42,0,Math.PI*2),n.fillStyle=L,n.fill()},a=61.44;e.eyes===1?i(256,384*.46,a*1.3):e.eyes===2?(i(163.84,180.48,a),i(348.16,180.48,a)):(i(153.6,199.68,a*.9),i(358.4,199.68,a*.9),i(256,384*.3,a*.8)),e.nose&&(n.beginPath(),n.moveTo(240.64,384*.63),n.lineTo(271.36,384*.63),n.lineTo(256,261.12),n.closePath(),n.fillStyle=L,n.fill()),n.beginPath(),n.lineWidth=r,n.strokeStyle=L;let o=e.nose?299.52:384*.74;if(e.mouth===`smile`?(n.moveTo(204.8,o),n.quadraticCurveTo(256,o+34.56,307.2,o),n.stroke()):e.mouth===`small`?(n.moveTo(230.4,o+7.68),n.quadraticCurveTo(256,o+23.04,281.6,o+7.68),n.stroke()):(n.moveTo(215.04,o),n.quadraticCurveTo(256,o+46.08,296.96,o),n.closePath(),n.fillStyle=L,n.fill()),e.crest){let t=e.eyes===3?46.08:65.28,i=25.6;n.beginPath(),n.moveTo(256,t-i),n.lineTo(276.48,t),n.lineTo(256,t+i),n.lineTo(256-i*.8,t),n.closePath(),n.fillStyle=e.accent,n.fill(),n.lineWidth=r*.8,n.strokeStyle=L,n.stroke()}let s=new lo(t);return s.colorSpace=Ln,s.anisotropy=4,s}function $d(e,t){let n=120*Math.PI/180,r=90*Math.PI/180,i=new Qa(new Jo(e*1.012,24,16,Math.PI/2-n/2,n,Math.PI/2-r/2,r),new Ba({map:t,transparent:!0,depthWrite:!1}));return i.renderOrder=2,i.name=`face`,i}function ef(e,t,n,r){let i=new Qa(new Ko(e*.92,t*.92),new Ba({map:r,transparent:!0,depthWrite:!1}));return i.position.z=n/2+.004,i.renderOrder=2,i.name=`face`,i}function tf(e=.35){let t=new Qa(new go(e,36),new Ba({color:new Z(oe),transparent:!0,opacity:.32,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.004,t.renderOrder=-2,t.name=`shadow`,t}function nf(e){let t=e=>(e-1)/4,n=t(e.stats.hp),r=t(e.stats.spd),i=t(e.stats.atk),a=t(e.stats.mag);return{scale:.85+.4*n,belly:.85+.5*n,limbLen:.75+.6*r,limbThin:1.15-.5*r,armThick:.7+.9*i,chest:.85+.45*i,hover:.22*a,hornLen:.8+.8*a,animSpeed:.7+.9*r}}var rf=class{constructor(e){w(this,`m`,void 0),w(this,`mats`,[]),w(this,`geos`,[]),w(this,`body`,void 0),w(this,`plain`,void 0),w(this,`accent`,void 0),w(this,`light`,void 0),w(this,`sub`,void 0),w(this,`tip`,void 0),w(this,`part`,void 0),w(this,`variant`,void 0),w(this,`ink`,void 0),w(this,`outline`,void 0),w(this,`rng`,void 0),this.m=e,this.rng=new N(e.seed^20973),this.outline=zd();let t=e.color2??Ne(e.color,e.seed);this.variant=this.rng.int(0,2),this.body=Zd(e.color,e.marks[0],6,t),this.plain=Zd(e.color),this.sub=Zd(t),this.accent=this.sub,this.light=Zd(ae(this.variant===0?t:e.color)),this.tip=this.variant===1?this.sub:this.body,this.part=this.variant===2?this.sub:this.plain,this.mats.push(this.body,this.plain,this.sub,this.light),this.ink=new Ba({color:new Z(L)})}geo(e){return this.geos.push(e),e}mesh(e,t,n=!0){let r=new Qa(this.geo(e),t);return n&&Hd(r,this.outline),r}sphere(e,t=this.body,n=!0){return this.mesh(new Jo(e,20,14),t,n)}rbox(e,t,n,r,i=this.body){return this.mesh(new qd(e,t,n,4,Math.min(r,e/2,t/2,n/2)),i)}cone(e,t,n=this.plain){return this.mesh(new vo(e,t,14),n)}limb(e,t,n,r=this.body,i=0,a=r){let o=t.clone().sub(e),s=o.length(),c=Math.max(.01,s-n),l=new ho(n,c,5,12),u=this.mesh(l,r);u.position.y=-(c/2);let d=new Ei;if(d.position.copy(e),d.quaternion.setFromUnitVectors(new Y(0,-1,0),o.normalize()),d.add(u),i>0){let e=this.sphere(i,a);e.position.y=-s,d.add(e)}return{pivot:d,mesh:u,len:s}}tube(e,t,n=this.body,r=16){let i=new Oo(e);return this.mesh(new Xo(i,r,t,10,!1),n)}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();this.ink.dispose(),this.outline.dispose()}};function af(e){let t=new rf(e),n=nf(e),r=new Ei;r.name=`monster:${e.name}`;let i=new Ei;r.add(i);let a=[],o={root:i,limbs:a,shadow:tf(.3),hover:n.hover,animSpeed:n.animSpeed,heavy:(e.stats.atk-1)/4,bulk:(e.stats.hp-1)/4};r.add(o.shadow);let s=e.color2??Ne(e.color,e.seed),c=Qd({eyes:e.eyes,crest:e.crest,accent:s,nose:e.skeleton===`quadruped`,mouth:e.skeleton===`multileg`?`small`:e.stats.atk>=4?`open`:`smile`}),l=null,u=new Y(0,.5,-.1),d=new Y(0,.3,-1).normalize(),f=new Y(0,.6,.1),p=new Y(0,.6,-.1),m=e=>a.push(e);switch(e.skeleton===`multileg`||e.skeleton===`serpent`||e.skeleton,e.skeleton){case`quadruped`:{let r=(e=>(e-1)/4)(e.stats.spd),a=.5*(.85+.35*r),s=.19*n.belly*(1-.15*r),h=.18*n.belly,g=.2*n.limbLen,_=.05*n.limbThin,v=g+s*.75,y=t.sphere(1);y.scale.set(h,s,a/2),y.position.set(0,v,0),i.add(y),o.torso=y;let b=t.sphere(1,t.light,!1);b.scale.set(h*.8,s*.55,a*.42),b.position.set(0,v-s*.5,.02),i.add(b),[[h*.6,a*.34,!0],[-h*.6,a*.34,!0],[h*.6,-a*.34,!1],[-h*.6,-a*.34,!1]].forEach(([e,r,a],o)=>{let c=_*(a?Math.sqrt(n.armThick):1),l=new Y(e,v-s*.4,r),u=new Y(e,.02,r),{pivot:d}=t.limb(l,u,c);i.add(d),m({pivot:d,rest:d.quaternion.clone(),phase:o%2*Math.PI+(a?0:Math.PI/2),kind:`leg`,amp:.35})});let x=.19,S=new Y(0,v+s*.55+.06,a/2+.08),C=t.limb(new Y(0,v+s*.3,a*.4),S,.075*n.armThick**.6*n.belly);i.add(C.pivot);let w=t.sphere(x);w.position.copy(S),w.add($d(x,c)),i.add(w),o.head=w,l={obj:w,r:x,top:new Y(0,x,0),kind:`sphere`,w:x*2};for(let e of[-1,1]){let n=t.cone(.055,.14,t.tip);n.position.set(e*x*.6,x*.85,-.02),n.rotation.z=-e*.5,w.add(n),m({pivot:n,rest:n.quaternion.clone(),phase:e,kind:`ear`,amp:.08})}let T=new Y(0,v+s*.2,-a/2+.02),E=n.hornLen,D=new Ei;D.position.copy(T);let O=t.tube([new Y(0,0,0),new Y(0,.08*E,-.12*E),new Y(0,.24*E,-.16*E),new Y(0,.38*E,-.1*E)],.045*n.belly,t.tip);D.add(O),i.add(D),m({pivot:D,rest:D.quaternion.clone(),phase:0,kind:`tail`,amp:.25}),u=new Y(0,v+s*.9,-a*.1),d=new Y(0,1,-.2).normalize(),f=new Y(0,v+s,a*.3),p=new Y(0,v+s*.9,-a*.4),o.shadow.scale.set(h*2.6,a*1.6,1);break}case`multileg`:{let r=.2*n.belly,a=.26,s=.19*n.belly,h=.36,g=t.sphere(1);g.scale.set(r,a,s),g.position.set(0,h,0),i.add(g),o.torso=g;let _=e.stats.spd>=4?8:6,v=.024*n.limbThin;for(let a=0;a<_/2;a++){let o=Or.lerp(.12,-.14,a/(_/2-1));for(let s of[-1,1]){let c=new Y(s*r*.8,.38,o),l=new Y(s*(r+.14*n.limbLen),.48,o),u=new Y(s*(r+.22*n.limbLen),.01,o+.04),d=a===0&&e.stats.atk>=4,f=d?v*2.2:v,p=t.limb(c,l,f);i.add(p.pivot);let h=t.limb(l,u,f*.9,t.tip);if(i.add(h.pivot),d){let e=t.cone(f*1.6,.12,t.tip);e.position.copy(u).add(new Y(0,.05,.08)),e.rotation.x=1.2,i.add(e)}m({pivot:p.pivot,rest:p.pivot.quaternion.clone(),phase:a*1.3+(s>0?Math.PI:0),kind:`leg`,amp:.12})}}for(let e=0;e<2;e++){let n=new Qa(t.geo(new Yo(1,.012,6,32)),t.ink);n.rotation.x=Math.PI/2;let o=.33999999999999997-e*.1,c=Math.sqrt(Math.max(.01,1-((o-h)/a)**2));n.scale.set(r*c*1,s*c*1,1),n.position.y=o,i.add(n)}let y=.15,b=new Y(0,.62+.06,.06),x=t.sphere(y);x.position.copy(b),x.add($d(y,c)),i.add(x),o.head=x,l={obj:x,r:y,top:new Y(0,y,0),kind:`sphere`,w:y*2};for(let e of[-1,1]){let r=of(t,e,y,n.hornLen,t.accent);x.add(r),m({pivot:r,rest:r.quaternion.clone(),phase:e*.7,kind:`antenna`,amp:.12})}for(let e of[-1,1]){let n=t.cone(.02,.07,t.tip);n.position.set(e*.05,-.15*.75,y*.6),n.rotation.x=Math.PI,n.rotation.z=e*.3,x.add(n)}u=new Y(0,.516,-s*.8),d=new Y(0,.6,-1).normalize(),f=new Y(0,.607,.02),p=new Y(0,.38,-s*.95),o.shadow.scale.set(r*2+.3*n.limbLen,s*2+.2,1);break}case`serpent`:{let r=(e=>(e-1)/4)(e.stats.spd),a=.11*n.belly*(1-.25*r),s=.9+.5*r,h=[new Y(.28*s,a*.6,.22),new Y(.05*s,a,.3),new Y(-.2*s,a*1.1,.1),new Y(-.08*s,a+.14,-.12),new Y(.1*s,a+.32,-.08),new Y(.02,a+.5,.04)],g=t.tube(h,a,t.body,40);i.add(g),o.torso=g;let _=t.cone(a*1.1,.16,t.tip);_.position.copy(h[0]).add(new Y(.08,0,0)),_.rotation.z=-Math.PI/2,i.add(_);let v=.16,y=h[h.length-1].clone().add(new Y(0,.08,.06)),b=t.sphere(v);b.position.copy(y),b.add($d(v,c)),i.add(b),o.head=b,l={obj:b,r:v,top:new Y(0,v,0),kind:`sphere`,w:v*2};for(let e of[-1,1]){let n=t.cone(.06,.12,t.tip);n.position.set(e*v*.95,-.02,0),n.rotation.z=e*-1.3,n.scale.z=.35,b.add(n),m({pivot:n,rest:n.quaternion.clone(),phase:e,kind:`ear`,amp:.1})}u=y.clone().add(new Y(0,-.1,-.12)),d=new Y(0,.5,-1).normalize(),f=h[4].clone().add(new Y(0,a,0)),p=h[2].clone().add(new Y(0,a,0)),o.shadow.scale.set(.6*s,.5,1);break}case`floating`:{let r=e=>(e-1)/4,a=r(e.stats.atk),s=.28*(1-.15*r(e.stats.spd))*(.95+.15*a);o.hover=.18+n.hover;let m=t.sphere(1);m.scale.set(s*(1+.15*a),s*.95,s),m.position.set(0,s*.95,0),i.add(m),o.torso=m;for(let e=0;e<5;e++){let n=e/5*Math.PI*2,r=t.sphere(s*.28,t.tip);r.position.set(Math.cos(n)*s*.78*(1+.15*a),s*.22,Math.sin(n)*s*.78),i.add(r)}let h=$d(s*1,c);h.position.copy(m.position),h.scale.copy(m.scale).multiplyScalar(1/s),i.add(h),o.head=m,l={obj:m,r:s,top:new Y(0,s*.95,0),kind:`sphere`,w:s*2},u=new Y(0,s*1.1,-s*.7),d=new Y(0,.7,-1).normalize(),f=new Y(0,s*1.9,s*.3),p=new Y(0,s*1.6,-s*.7),o.shadow.scale.set(s*2.2,s*2.2,1);break}default:{let e=.22*n.limbLen,r=.055*n.limbThin*n.belly**.3,a=.36*n.chest*Math.sqrt(n.belly),s=.28,h=.26*n.belly,g=e+s/2-.03,_=t.rbox(a,s,h,.1);_.position.set(0,g,0),i.add(_),o.torso=_;let v=t.sphere(.035,t.accent);v.position.set(0,g-.02,h/2),i.add(v);for(let e of[-1,1]){let n=new Y(e*a*.26,g-s/2+.04,0),o=new Y(e*a*.26,.02,0),{pivot:c}=t.limb(n,o,r);i.add(c),m({pivot:c,rest:c.quaternion.clone(),phase:e>0?0:Math.PI,kind:`leg`,amp:.3})}let y=.03*n.armThick**.9*n.limbThin**.3;for(let e of[-1,1]){let r=new Y(e*(a/2-.01),g+s/2-.07,0),o=r.clone().add(new Y(e*.17*n.limbLen,-.15*n.limbLen,.04)),{pivot:c}=t.limb(r,o,y,t.body,.05*Math.sqrt(n.armThick),t.tip);i.add(c),m({pivot:c,rest:c.quaternion.clone(),phase:e>0?Math.PI:0,kind:`arm`,amp:.25})}let b=.46,x=.36,S=.38,C=g+s/2+x/2-.02,w=t.rbox(b,x,S,.13);w.position.set(0,C,0),w.add(ef(b,x,S,c)),i.add(w),o.head=w,l={obj:w,r:b/2,top:new Y(0,x/2,0),kind:`box`,w:b};let T=of(t,0,x/2,n.hornLen,t.accent);w.add(T),m({pivot:T,rest:T.quaternion.clone(),phase:0,kind:`antenna`,amp:.1}),u=new Y(0,g+s*.3,-h/2),d=new Y(0,.4,-1).normalize(),f=new Y(0,C+x/2,-.38*.15),p=new Y(0,g,-h/2),o.shadow.scale.set(a*1.9,h*1.9,1)}}let h=new N(e.seed^2577);for(let r of e.parts)sf(t,i,r,n,l,u,d,f,p,h,m);i.scale.setScalar(n.scale),i.position.y=o.hover,o.shadow.scale.multiplyScalar(n.scale);let g=new Yi().setFromObject(i);return{group:r,height:Math.max(.2,g.max.y-Math.min(0,g.min.y)),rig:o,materials:t.mats,outline:t.outline,skeleton:e.skeleton,dispose:()=>{t.dispose(),c.dispose()}}}function of(e,t,n,r,i){let a=new Ei,o=.14*r,s=e.mesh(new ho(.012,o,3,8),e.ink,!1);s.position.y=o/2,a.add(s);let c=e.sphere(.04*Math.sqrt(r),i);return c.position.y=o+.02,a.add(c),a.position.set(t*.08,n-.01,0),a.rotation.z=-t*.35,a}function sf(e,t,n,r,i,a,o,s,c,l,u){let d=n.size;switch(n.kind){case`horn`:{if(!i)break;let t=n.variant<.3?1:2,a=.16*d*r.hornLen;for(let r=0;r<t;r++){let o=t===1?0:r===0?-1:1,s=e.cone(.05*d,a,e.part);s.position.set(o*i.w*.28,i.top.y+a*.35,i.kind===`box`?.02:-.02),s.rotation.z=-o*(.35+.3*n.variant),i.obj.add(s)}break}case`spike`:{let i=3+Math.round(n.variant*2);for(let n=0;n<i;n++){let a=(n+.5)/i,o=s.clone().lerp(c,a),l=e.cone(.035*d,.1*d*r.hornLen,e.part);l.position.copy(o),l.rotation.x=-.4,t.add(l)}break}case`wing`:for(let n of[-1,1]){let r=new Ei;r.position.copy(a);let i=e.cone(.11*d,.3*d,e.part);i.scale.z=.18,i.position.set(n*.17*d,.1*d,0),i.rotation.z=-n*(Math.PI/2-.5),r.add(i),r.rotation.x=.4,t.add(r),u({pivot:r,rest:r.quaternion.clone(),phase:0,kind:`wing`,amp:.35})}break;case`tail`:{let n=new Ei;n.position.copy(a);let i=r.hornLen*d,o=e.tube([new Y(0,0,0),new Y(0,-.05*i,-.14*i),new Y(0,.08*i,-.26*i),new Y(0,.26*i,-.26*i)],.035*d,e.part);n.add(o);let s=e.sphere(.055*d,e.accent);s.position.set(0,.28*i,-.26*i),n.add(s),t.add(n),u({pivot:n,rest:n.quaternion.clone(),phase:1,kind:`tail`,amp:.3});break}case`antenna`:if(!i)break;for(let t of[-1,1]){let n=of(e,t*1.6,i.top.y,r.hornLen*d,e.accent);n.position.x=t*i.w*.3,i.obj.add(n),u({pivot:n,rest:n.quaternion.clone(),phase:t,kind:`antenna`,amp:.15})}break;case`fin`:if(!i)break;for(let t of[-1,1]){let n=e.cone(.07*d,.14*d,e.part);n.scale.z=.3,n.position.set(t*i.w*.5,0,0),n.rotation.z=t*-1.4,i.obj.add(n)}break;case`ornament`:{if(!i)break;let t=e.mesh(new Yo(i.w*.42*d,.025*d,8,24),e.accent);t.rotation.x=Math.PI/2,t.position.set(0,-i.r*.95,0),i.obj.add(t);break}}}var cf=.5,lf=Or.degToRad(60),uf=Or.degToRad(35),df=.05,ff=.45,pf=.45,mf=class{constructor(e){w(this,`state`,`idle`),w(this,`stateT`,0),w(this,`summonProgress`,1),w(this,`baseScale`,1),w(this,`speed`,0),w(this,`yaw`,0),w(this,`dodgeKind`,`sidestep`),w(this,`dodgeDur`,.35),w(this,`dodgeDir`,1),w(this,`telegraphDur`,.45),w(this,`telegraphGlow`,!0),w(this,`springNext`,!1),w(this,`outlineBoost`,0),w(this,`chargePower`,1),w(this,`built`,void 0),w(this,`flash`,0),w(this,`glow`,0),w(this,`turnFrom`,0),w(this,`turnTarget`,0),w(this,`lookTarget`,null),w(this,`lookYaw`,0),w(this,`lookPitch`,0),w(this,`headRest`,void 0),w(this,`shadowBase`,void 0),w(this,`knockDist`,1.1),this.built=e,this.headRest=e.rig.head?e.rig.head.quaternion.clone():null,this.shadowBase=e.rig.shadow.scale.clone(),e.rig.root.rotation.order=`YXZ`}play(e){this.state=e,this.stateT=0,e===`hit`&&(this.flash=1)}flashOnly(){this.flash=1}dodge(e,t,n=1){this.dodgeKind=e,this.dodgeDur=Math.max(.1,t),this.dodgeDir=n,e===`coil`&&(this.springNext=!0),this.play(`dodge`)}knockback(e=1.1){this.knockDist=e,this.play(`knockback`)}turnTo(e){let t=Cf(e-this.yaw);Math.abs(t)<.02?this.yaw=e:(this.turnFrom=this.yaw,this.turnTarget=this.yaw+t,this.play(`turn`))}face(e,t=1){this.yaw+=Cf(e-this.yaw)*Math.min(1,t)}lookAt(e){e?this.lookTarget?this.lookTarget.copy(e):this.lookTarget=e.clone():this.lookTarget=null}update(e,t){let{rig:n,skeleton:r}=this.built;this.stateT+=t;let i=n.animSpeed,a=n.root,o=this.built.height,s=Math.sin(e*3.2*i)*.012,c=n.hover+s+(n.hover>0?Math.sin(e*1.7)*.03:0),l=0,u=0,d=1,f=1,p=0,m=0,h=0,g=1,_=1,v=0,y=0,b=1;this.flash=Math.max(0,this.flash-t*4);let x=this.state===`idle`?Math.min(1,this.speed):0;if(x>.02)switch(r){case`quadruped`:{let t=e*7.5*i;_=1+1.6*x,g=1+.7*x,c+=Math.abs(Math.sin(t))*.045*x,p=Math.sin(t)*.07*x;break}case`multileg`:_=1+2.6*x,g=1+.3*x,m=Math.sin(e*9*i)*.03*x,c+=.005*x;break;case`serpent`:h=Math.sin(e*5*i)*.2*x,m=Math.cos(e*5*i)*.08*x,c+=Math.abs(Math.sin(e*5*i))*.02*x;break;case`floating`:c+=Math.sin(e*2.6)*.05*x,m=Math.sin(e*2.2)*.1*x,p=.12*x;break;default:_=1+1.4*x,g=1+.9*x,c+=Math.abs(Math.sin(e*6.4*i*(1+.5*x)))*.03*x,p=.12*x}switch(this.state){case`attack`:{let e=Math.min(1,this.stateT/.6),t=n.heavy,r=Math.sin(Math.PI*e);u=r*(.35+.1*t),d=1+Math.sin(Math.PI*2*e)*(.12+.1*t),f=1/Math.sqrt(d),p=r*.25,g=2.5,e>=1&&this.play(`idle`);break}case`telegraph`:{let e=Math.min(1,this.stateT/Math.max(.1,this.telegraphDur)),t=Math.min(1,e/.35),n=e>.5?(e-.5)/.5:0;u=-.16*t-.06*n-.03*Math.sin(this.stateT*30)*t,d=1-.08*t-.05*n,f=1/Math.sqrt(d),p=-.22*t-.1*n,g=.2,this.telegraphGlow&&(y=.5+.3*Math.abs(Math.sin(this.stateT*18))+.2*n);break}case`strike`:{let e=n.heavy,t=this.springNext?1.5:1,r=this.stateT;if(r<.05){let n=r/df;u=-.16+((.45+.12*e)*t+.16)*n,p=-.22+.5*n,d=.92+.2*n}else{let n=Math.min(1,(r-df)/.45),i=1-(1-n)**2;u=(.45+.12*e)*t*(1-i),p=.28*(1-i),d=1+.12*(1-i)*Math.cos(n*Math.PI*2)}f=1/Math.sqrt(d),g=2.5,r>=.5&&(this.springNext=!1,this.play(`idle`));break}case`stumble`:{let e=Math.min(1,this.stateT/.4),t=Math.sin(Math.PI*Math.min(1,e*1.2));u=.35*t,p=.55*t,c-=.06*t,d=1-.1*t,f=1/Math.sqrt(d),g=.5,e>=1&&this.play(`idle`);break}case`hit`:{let e=Math.min(1,this.stateT/.3);u=-Math.sin(Math.PI*e)*.08,l=Math.sin(this.stateT*60)*.02*(1-e),p=-Math.sin(Math.PI*e)*.15,e>=1&&this.play(`idle`);break}case`cast`:{let e=Math.sin(this.stateT*9)*.03;d=.93+e,f=1.04-e,c-=.02,g=.3;break}case`charge`:{let e=this.chargePower,t=Math.min(1,this.stateT/.25),n=Math.sin(this.stateT*42)*.012*e*Math.min(1,this.stateT/.6);d=1-.18*t*e+n,f=1/Math.sqrt(d),p=.16*t*e,c-=.04*t,l=Math.sin(this.stateT*55)*.008*e,g=.2,y=.25*e*Math.min(1,this.stateT/.8),v=-.3*t;break}case`release`:{let e=Math.min(1,this.stateT/.4),t=1-(1-Math.min(1,e*1.6))**3;d=1-.18+.32*t,f=1/Math.sqrt(d),p=.16-.36*t,u=.12*t,c+=.06*t,v=1.2*t,g=.6,y=.6*(1-e);break}case`dead`:{let e=Math.min(1,this.stateT/.6),t=1-(1-e)*(1-e);p=-Math.PI/2*t,c=n.hover*(1-t)+.03*t,u=-.1*t,g=0,b=1-t*.6;break}case`knockback`:{let e=this.stateT;if(e<.45){let t=e/ff,r=1-(1-t)**2;u=-this.knockDist*.75*r,c=n.hover*(1-t)+Math.sin(Math.PI*Math.min(1,t*.9))*.5*o,p=-Math.PI*.35*t-Math.sin(t*Math.PI)*.5,m=Math.sin(t*Math.PI*2)*.3,b=1-.5*t}else{let t=Math.min(1,(e-ff)/pf),n=1-(1-t)**2;u=-this.knockDist*(.75+.25*n),c=Math.max(.03,.5*o*.35*(1-n)),p=-Math.PI*.35-Math.PI*.15*n,m=.3*(1-n),b=.5+.3*n,t>=1&&(c=.03,p=-Math.PI/2,m=0)}g=0;break}case`win`:c+=Math.abs(Math.sin(this.stateT*6))*.12,g=2,v=1;break;case`pose`:{let e=Math.min(1,this.stateT/.12);d=1+.1*e+Math.sin(this.stateT*12)*.015,f=1/Math.sqrt(d),p=-.18*e,m=.08*e,v=e,g=.4,c+=.03*e;break}case`dodge`:{let e=Math.min(1,this.stateT/this.dodgeDur),t=this.stateT<.07?1-this.stateT/.07:0;switch(this.dodgeKind){case`jump`:{let t=Math.sin(Math.PI*e);if(c+=1.2*o*t,d=1-.18*t,f=1/Math.sqrt(d),p=t*.5,g=.6,b=1-.45*t,e>.92){let t=(e-.92)/.08;d=1-.18*(1-t)-.12*Math.sin(Math.PI*t),f=1/Math.sqrt(d)}break}case`burrow`:{let t=.15,r=.2,i;i=this.stateT<t?this.stateT/t:e<1&&this.stateT>this.dodgeDur-r?Math.max(0,(this.dodgeDur-this.stateT)/r):e>=1?0:1;let a=1-(1-i)**2;c-=(o*1.15+.1)*a,f=1-.1*a,d=1+.1*a,g=2,_=2.5,b=1+.5*a*(.4+.6*n.bulk);break}case`twist`:{let t=Math.sin(Math.PI*e);h=this.dodgeDir*1.1*Math.sin(Math.PI*2*Math.min(1,e*1.15))*(1-e*.3),f=1-.12*t,d=1+.12*t,m=-this.dodgeDir*.3*t,g=.3;break}case`coil`:{let t=Math.sin(Math.PI*e);f=1+.2*t,d=1-.3*t,p=-.4*t,h=this.dodgeDir*.6*Math.sin(Math.PI*2*e),c+=.04*t,g=.3;break}case`blink`:{let t=e<.5?e/.5:(e-.5)/.5,n=e<.5?t:1-t;d=1+.5*n,f=Math.max(.05,1-.9*n),c+=.1*n,g=.5;break}default:{let t=Math.sin(Math.PI*e);c+=t*.12,m=-this.dodgeDir*.6*t,d=1-.12*t,f=1/Math.sqrt(d),g=2.4,_=2}}t>0&&(d*=1+.22*t,f*=1-.12*t),e>=1&&this.play(`idle`);break}case`turn`:{let e=Math.min(1,this.stateT/cf),t=e<.5?2*e*e:1-(-2*e+2)**2/2;this.yaw=this.turnFrom+(this.turnTarget-this.turnFrom)*t,c+=Math.abs(Math.sin(e*Math.PI*3))*.035,g=2.2,_=2.4,e>=1&&(this.yaw=Cf(this.turnTarget),this.play(`idle`));break}case`summon`:{let e=this.summonProgress;if(e<.7){let t=e/.7;c=-o*(1-wf(t))+n.hover*wf(t),g=.2}else{let t=(e-.7)/.3,r=Math.sin(Math.PI*t)*.06;c=n.hover+r,d=1+Math.sin(Math.PI*t)*.1,f=1/Math.sqrt(d)}break}}a.position.set(l,c,u),a.rotation.set(p,this.yaw+h,m);let S=this.baseScale;a.scale.set(S*f,S*d,S*f),n.shadow.position.x=l,n.shadow.position.z=u,n.shadow.scale.set(this.shadowBase.x*b,this.shadowBase.y*b,1);for(let t of n.limbs){let n=0;if(g>0){let r=t.kind===`antenna`||t.kind===`ear`?2.2:t.kind===`wing`?6:t.kind===`tail`?2.6:3.2*_;n=Math.sin(e*r*i+t.phase)*t.amp*(t.kind===`leg`||t.kind===`arm`?g:1)}t.kind===`arm`&&v!==0&&(n-=2.4*v);let r=t.kind===`tail`?yf:t.kind===`wing`?bf:vf;hf.setFromAxisAngle(r,n),t.pivot.quaternion.copy(t.rest).multiply(hf)}this.updateHead(t),this.glow+=(y-this.glow)*Math.min(1,t*18);for(let e of this.built.materials)e.uniforms.uFlash.value=Math.max(this.flash*.7,this.glow*.25);let C=this.built.outline.uniforms;C.uColor.value.copy(xf).lerp(Sf,this.glow),C.uWidthMul.value=1+.7*this.glow+1.3*this.outlineBoost}updateHead(e){let t=this.built.rig.head;if(!t||!this.headRest)return;let n=0,r=0;if(this.lookTarget&&t.parent){this.built.group.updateMatrixWorld(!0),_f.copy(this.lookTarget),t.parent.worldToLocal(_f),_f.sub(t.position);let e=Math.hypot(_f.x,_f.z);n=Math.atan2(_f.x,_f.z),r=-Math.atan2(_f.y,e),n=Or.clamp(n,-lf,lf),r=Or.clamp(r,-uf,uf),_f.z<0&&Math.abs(_f.x)<e*.3&&(n=0,r=0)}let i=Math.min(1,e*9);this.lookYaw+=(n-this.lookYaw)*i,this.lookPitch+=(r-this.lookPitch)*i,gf.set(this.lookPitch,this.lookYaw,0,`YXZ`),hf.setFromEuler(gf),t.quaternion.copy(this.headRest).multiply(hf)}},hf=new kr,gf=new ci,_f=new Y,vf=new Y(1,0,0),yf=new Y(0,1,0),bf=new Y(0,0,1),xf=new Z(L),Sf=new Z(`#FFFFFF`);function Cf(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function wf(e){return 1-(1-e)**3}function Tf(e,t,n,r){e.save(),e.lineCap=`round`,e.lineJoin=`round`,e.strokeStyle=r.color??`#22201C`,e.lineWidth=r.width??8,e.globalAlpha=r.alpha??1,r.glow&&(e.shadowColor=r.color??`#22201C`,e.shadowBlur=18);let i=r.offsetX??0,a=r.offsetY??0,o=n?[...t,n]:t;for(let t of o)if(t.length!==0){e.beginPath(),e.moveTo(i+t[0].x*r.scale,a+t[0].y*r.scale);for(let n=1;n<t.length;n++)e.lineTo(i+t[n].x*r.scale,a+t[n].y*r.scale);t.length===1&&e.lineTo(i+t[0].x*r.scale+.01,a+t[0].y*r.scale),e.stroke()}e.restore()}function Ef(e,t,n){let r=Math.min(window.devicePixelRatio||1,3),i=Math.round(t*r),a=Math.round(n*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),e.getContext(`2d`).setTransform(r,0,0,r,0,0),{w:t,h:n,dpr:r}}function Df(e,t,n,r,i,a={}){let o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of t)for(let t of e)t.x<o&&(o=t.x),t.y<s&&(s=t.y),t.x>c&&(c=t.x),t.y>l&&(l=t.y);if(!isFinite(o))return;let u=Math.max(1e-6,c-o),d=Math.max(1e-6,l-s),f=i*.8/Math.max(u,d),p=n+(i-u*f)/2-o*f,m=r+(i-d*f)/2-s*f;Tf(e,t,null,{...a,scale:f,offsetX:p,offsetY:m})}var Of=`#FFD24A`,kf=`#E0603A`,Af=class{constructor(e){w(this,`ctx`,void 0),w(this,`fx`,[]),this.ctx=e}update(e,t,n,r=e){let i=this.ctx;for(let a=this.fx.length-1;a>=0;a--){let o=this.fx[a];o.t+=o.world?r:e;let s=Math.min(1,o.t/o.dur);i.save(),o.draw(i,s,t,n),i.restore(),s>=1&&(this.fx.splice(a,1),o.onEnd?.())}}clear(){this.fx.length=0}add(e){this.fx.push(e)}ringShatter(e,t,n){let r=Math.random()*Math.PI;this.add({t:0,dur:.4,draw(i,a){i.lineCap=`round`;let o=1-(1-a)*(1-a);for(let s=0;s<14;s++){let c=r+s/14*Math.PI*2,l=c+Math.PI*2/14*.55,u=n+o*(26+s%3*10);i.globalAlpha=1-a,i.beginPath(),i.arc(e,t,u,c+a*.4,l+a*.4),i.strokeStyle=L,i.lineWidth=8*(1-a)+1,i.stroke(),i.strokeStyle=`#FFFFFF`,i.lineWidth=4.5*(1-a)+.5,i.stroke()}}})}ringClose(e,t,n){this.add({t:0,dur:.28,draw(r,i){r.globalAlpha=1-i,r.beginPath(),r.arc(e,t,Math.max(2,n*(1-i*.75)),0,Math.PI*2),r.strokeStyle=kf,r.lineWidth=6+6*i,r.stroke()}})}hit(e,t,n=!1,r=L){let i=n?12:8,a=Math.random()*Math.PI;this.add({t:0,dur:n?.42:.32,draw(o,s){o.strokeStyle=r,o.lineCap=`round`,o.lineWidth=n?5:3.5,o.globalAlpha=1-s;let c=(n?26:16)+s*(n?70:44);for(let r=0;r<i;r++){let l=a+r/i*Math.PI*2,u=(n?22:14)*(1-s*.6);o.beginPath(),o.moveTo(e+Math.cos(l)*c,t+Math.sin(l)*c),o.lineTo(e+Math.cos(l)*(c+u),t+Math.sin(l)*(c+u)),o.stroke()}o.beginPath(),o.arc(e,t,(n?10:6)+s*(n?40:24),0,Math.PI*2),o.lineWidth=n?6*(1-s)+1:4*(1-s)+1,o.stroke()}})}damage(e,t,n,r=!1,i=kf){let a=(Math.random()-.5)*30;this.add({t:0,dur:r?1.1:.85,draw(o,s){let c=(r?70:46)*(1-(1-s)**2),l=r?1+Math.sin(Math.min(1,s*4)*Math.PI/2)*.35:1;o.globalAlpha=s<.75?1:1-(s-.75)/.25,o.font=`700 ${Math.round((r?44:28)*l)}px 'Zen Maru Gothic', sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.lineWidth=r?8:6,o.lineJoin=`round`,o.strokeStyle=`#FFFFFF`,o.strokeText(String(n),e+a,t-c),o.fillStyle=i,o.fillText(String(n),e+a,t-c)}})}text(e,t,n,r=L,i=1.2,a=22){this.add({t:0,dur:i,draw(i,o){i.globalAlpha=o<.8?1:1-(o-.8)/.2,i.font=`700 ${a}px 'Zen Maru Gothic', sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.lineWidth=6,i.lineJoin=`round`,i.strokeStyle=`#FFFFFF`,i.strokeText(n,e,t-o*10),i.fillStyle=r,i.fillText(n,e,t-o*10)}})}signFly(e,t,n,r,i,a=.55){let o={to:{...n},divert(e){o.to={...e}}};return this.add({t:0,dur:a,world:!0,onEnd:i,draw(n,i){let a=i<.2?0:(i-.2)/.8,s=a*a,c=t.x+(o.to.x-t.x)*s,l=t.y+(o.to.y-t.y)*s,u=1-.65*s;n.translate(c,l),n.scale(u,u),n.translate(-t.x,-t.y),n.globalAlpha=.95,Tf(n,e,null,{scale:1,color:`#FFFFFF`,width:16,glow:!0}),Tf(n,e,null,{scale:1,color:r,width:8,glow:!0})}}),o}signScatter(e,t,n=.8,r=!1){let i=[];for(let t of e)for(let e=0;e<t.length;e+=3){let n=Math.random()*Math.PI*2,r=120+Math.random()*220;i.push({x:t[e].x,y:t[e].y,vx:Math.cos(n)*r,vy:Math.sin(n)*r-80})}this.add({t:0,dur:n,world:r,draw(e,n){e.globalAlpha=1-n,e.fillStyle=t;for(let t of i){let r=t.x+t.vx*n,i=t.y+t.vy*n+300*n*n;e.beginPath(),e.arc(r,i,4,0,Math.PI*2),e.fill()}}})}callout(e,t,n,r,i=.7,a=46,o=-.1){this.add({t:0,dur:i,draw(s,c){let l=Math.min(1,c*i/.12),u=l<1?.6+.55*Math.sin(l*Math.PI*.5)*(1+.25*(1-l)):1+Math.sin(c*9)*.015;s.globalAlpha=c<.7?1:1-(c-.7)/.3,s.translate(e,t),s.rotate(o),s.scale(u,u),Mf(s,n,0,0,a,r)}})}flash(e=.1,t=.95){this.add({t:0,dur:e,draw(e,n,r,i){e.globalAlpha=t*(1-n),e.fillStyle=`#FFFFFF`,e.fillRect(0,0,r,i)}})}fidelity(e,t,n,r,i,a,o=!1,s=.4){let c=Math.round(n*100),l=n>=.9?62:n<.6?36:48;this.add({t:0,dur:a,draw(n,u){let d=u*a,f=Math.min(1,d/s),p=Math.round(c*(1-(1-f)**3));n.globalAlpha=u>.9?1-(u-.9)/.1:1,n.translate(e,t),n.rotate(-.06);let m=f>=1&&d<s+.12?1+.12*Math.sin((d-s)/.12*Math.PI):1;n.scale(m,m),Mf(n,`再現度 ${p}%`,0,0,l,r),o&&f>=1&&Mf(n,`画数ちがい`,0,l*.78,Math.round(l*.4),`#8A8680`),i!==null&&f>=1&&Mf(n,i?`射程内`:`射程外…`,0,-l*.85,Math.round(l*.42),i?r:`#8A8680`)}})}shock(e,t,n,r=L){this.add({t:0,dur:.35+.15*n,draw(i,a){i.globalAlpha=(1-a)*.9,i.strokeStyle=r,i.lineWidth=3+3*n*(1-a),i.beginPath(),i.ellipse(e,t,(18+50*n)*(.3+.7*a)+8,((18+50*n)*(.3+.7*a)+8)*.45,0,0,Math.PI*2),i.stroke()}})}slash(e,t,n,r=90){this.add({t:0,dur:.28,draw(i,a){i.translate(e,t),i.rotate(n);let o=1-(1-a)**2;i.globalAlpha=1-a*a,i.lineCap=`round`;for(let e=0;e<2;e++){let t=r*(.5+.2*e);i.beginPath(),i.arc(0,0,t,-.9+o*.4,-.9+o*.4+1.4*o+.2,!1),i.strokeStyle=L,i.lineWidth=10-3*e,i.stroke(),i.strokeStyle=`#FFFFFF`,i.lineWidth=6-2*e,i.stroke()}}})}dust(e,t,n,r=5){let i=Array.from({length:r},(e,t)=>({dx:-n*(10+t*12+Math.random()*8),dy:-(Math.random()*10),r:6+Math.random()*7,d:.1*t}));this.add({t:0,dur:.55,draw(n,r){for(let a of i){let i=Math.max(0,Math.min(1,(r-a.d)/(1-a.d)));i<=0||(n.globalAlpha=(1-i)*.7,n.fillStyle=`#E9E5DC`,n.strokeStyle=`#B5B1A8`,n.lineWidth=2,n.beginPath(),n.arc(e+a.dx*(.4+.6*i),t+a.dy*i-6*i,a.r*(.6+.8*i),0,Math.PI*2),n.fill(),n.stroke())}}})}gaugeFly(e,t,n,r,i){this.add({t:0,dur:.55,onEnd:i,draw(i,a){let o=.3,s=a<o?0:((a-o)/.7)**2,c=e.x+(t.x-e.x)*s,l=e.y-18*Math.min(1,a/o)+(t.y-e.y+18)*s,u=1-.5*s;i.translate(c,l),i.scale(u,u),Mf(i,n,0,0,r,Of)}})}sparkle(e,t,n=6,r=Of){let i=Array.from({length:n},(e,t)=>{let r=-Math.PI/2+(t/n-.5)*Math.PI*1.4+(Math.random()-.5)*.4,i=90+Math.random()*110;return{vx:Math.cos(r)*i,vy:Math.sin(r)*i,r:3+Math.random()*3}});this.add({t:0,dur:.6,draw(n,a){n.globalAlpha=1-a;for(let o of i){let i=e+o.vx*a,s=t+o.vy*a+160*a*a,c=o.r*(1-a*.5);n.fillStyle=`#FFFFFF`,n.beginPath(),n.moveTo(i,s-c*2),n.lineTo(i+c,s),n.lineTo(i,s+c*2),n.lineTo(i-c,s),n.closePath(),n.fill(),n.strokeStyle=r,n.lineWidth=2,n.stroke()}}})}summonPillar(e,t,n,r,i,a=`#FFD24A`){this.add({t:0,dur:2,draw(o,s,c,l){let u=s<.5?s/.5:1-(s-.5)/.5;o.save(),o.translate(e,t),o.rotate(i),o.globalAlpha=Math.max(0,u),o.strokeStyle=a,o.lineWidth=10,o.shadowColor=a,o.shadowBlur=30,o.beginPath(),o.ellipse(0,0,n,r,0,0,Math.PI*2),o.stroke(),o.restore();let d=s<.15?s/.15:s<.7?1:1-(s-.7)/.3,f=o.createLinearGradient(0,t,0,t-l*.6);f.addColorStop(0,jf(a,.75*d)),f.addColorStop(1,jf(a,0)),o.fillStyle=f,o.globalAlpha=1,o.beginPath(),o.moveTo(e-n*.75,t),o.lineTo(e+n*.75,t),o.lineTo(e+n*.55,t-l*.6),o.lineTo(e-n*.55,t-l*.6),o.closePath(),o.fill(),o.fillStyle=`#FFFFFF`;for(let r=0;r<10;r++){let i=(s*1.3+r*.1)%1,a=e+Math.sin(r*2.4+s*3)*n*.6,c=t-i*l*.5;o.globalAlpha=(1-i)*d,o.beginPath(),o.arc(a,c,3+r%3,0,Math.PI*2),o.fill()}}})}};function jf(e,t){let n=parseInt(e.replace(`#`,``),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${Math.max(0,Math.min(1,t))})`}function Mf(e,t,n,r,i,a){e.font=`700 ${Math.round(i)}px 'Zen Maru Gothic', sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineJoin=`round`,e.lineWidth=Math.max(3,i*.16),e.strokeStyle=L,e.strokeText(t,n,r),e.fillStyle=a,e.fillText(t,n,r)}function Nf(e,t,n,r,i,a=40){e.save(),e.translate(t,n),e.rotate(r);let o=.8+.2*Math.sin(i*Math.PI*6),s=a*.5*o;e.lineCap=`round`,e.lineJoin=`round`;for(let t=0;t<2;t++){let n=t*s*.55;e.beginPath(),e.moveTo(n+s*.1,-s*.55),e.lineTo(n+s*.7,0),e.lineTo(n+s*.1,s*.55),e.strokeStyle=L,e.lineWidth=9,e.globalAlpha=.9,e.stroke(),e.strokeStyle=`#FFFFFF`,e.lineWidth=4.5,e.stroke()}e.restore()}function Pf(e,t,n,r,i,a,o=!1,s=1){e.save(),e.globalAlpha=s*(o?.55:1),e.lineCap=`round`,e.lineJoin=`round`;let c=(i,a)=>{e.beginPath();for(let o=0;o<4;o++){let s=Math.PI/4+o*Math.PI/2,c=Math.cos(s),l=Math.sin(s),u=-l,d=c;e.moveTo(t+c*r+u*a,n+l*r+d*a),e.lineTo(t+c*(r+i),n+l*(r+i)),e.lineTo(t+c*r-u*a,n+l*r-d*a)}};a?(e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=L,e.lineWidth=10,e.globalAlpha*=.75,e.stroke(),c(15,7),e.fillStyle=L,e.fill(),e.stroke(),e.globalAlpha=s,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=`#FFFFFF`,e.lineWidth=6,e.stroke(),c(12,5),e.fillStyle=`#FFFFFF`,e.fill()):(e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.setLineDash(o?[4,7]:[9,7]),e.strokeStyle=L,e.lineWidth=o?3:4.5,e.globalAlpha*=.35,e.stroke(),e.globalAlpha=s*(o?.55:1),e.strokeStyle=i,e.lineWidth=o?1.6:2.6,e.stroke(),e.setLineDash([]),c(o?7:10,o?3:4.5),e.fillStyle=i,e.fill()),e.restore()}function Ff(e,t,n,r,i,a,o){if(a<=0)return;let s=1.2+3.8*a,c=.5+.5*Math.sin(o*Math.PI*2*s),l=(.08+.32*a)*(.45+.55*c);e.save();let u=r*(1.25+.15*c*a),d=e.createRadialGradient(t,n,r*.4,t,n,u);d.addColorStop(0,jf(i,0)),d.addColorStop(.7,jf(i,l)),d.addColorStop(1,jf(i,0)),e.fillStyle=d,e.beginPath(),e.arc(t,n,u,0,Math.PI*2),e.fill(),e.restore()}function If(e,t,n,r){if(r<=0)return;e.save();let i=e.createRadialGradient(t/2,n/2,Math.min(t,n)*.3,t/2,n/2,Math.max(t,n)*.75);i.addColorStop(0,`rgba(255,255,255,0)`),i.addColorStop(1,`rgba(255,255,255,${Math.min(1,r)})`),e.fillStyle=i,e.fillRect(0,0,t,n),e.restore()}function Lf(e,t,n,r,i,a,o=1){e.save(),e.fillStyle=r,e.fillRect(0,0,t,n);let s=t/2,c=n*.46;if(i===`lines`||i===`mix`){let r=i===`lines`?56:28;e.fillStyle=`rgba(255,255,255,0.55)`;let l=Math.hypot(t,n),u=Math.min(t,n)*(.22+.5*(1-o));for(let i=0;i<r;i++){let o=i/r*Math.PI*2+Math.sin(i*7.1)*.05+a*.3,d=.012+.014*Math.abs(Math.sin(i*3.3)),f=u+Math.min(t,n)*.1*Math.abs(Math.sin(i*1.7+a*4));e.beginPath(),e.moveTo(s+Math.cos(o-d)*l,c+Math.sin(o-d)*l),e.lineTo(s+Math.cos(o)*f,c+Math.sin(o)*f),e.lineTo(s+Math.cos(o+d)*l,c+Math.sin(o+d)*l),e.closePath(),e.fill()}}if(i===`dots`||i===`mix`){e.fillStyle=`rgba(255,255,255,0.35)`;for(let r=-46;r<n+46;r+=46)for(let n=-46;n<t+46;n+=46){let t=Math.sin(n*.37+r*.11)*10,i=Math.cos(n*.21+r*.29)*10,o=7+5*Math.abs(Math.sin(n*.13+r*.07+a));e.beginPath(),e.arc(n+t,r+i,o,0,Math.PI*2),e.fill()}}e.restore()}function Rf(e,t,n,r,i,a,o,s){if(!(a<=0)){e.save();for(let c=0;c<7;c++){let l=(s*(.9+.25*o)+c/7)%1,u=Math.sin(c*2.1)*r*.32,d=n-l*r*(.9+.5*o),f=(14+10*o)*(1-l)*a;e.globalAlpha=(1-l)*.55*a*(.4+.6*o),e.fillStyle=`#FFFFFF`,e.beginPath(),e.ellipse(t+u,d,f*.5,f*1.6,0,0,Math.PI*2),e.fill(),e.strokeStyle=i,e.lineWidth=3,e.stroke()}e.restore()}}function zf(e,t,n,r,i,a,o,s,c=0,l=0){e.save(),t&&Df(e,t,r-a/2,i-a/2,a,{color:`rgba(255,255,255,0.55)`,width:12});let u=1/0,d=1/0,f=-1/0,p=-1/0;for(let e of n)for(let t of e)t.x<u&&(u=t.x),t.y<d&&(d=t.y),t.x>f&&(f=t.x),t.y>p&&(p=t.y);if(!isFinite(u)){e.restore();return}let m=Math.max(1e-6,f-u),h=Math.max(1e-6,p-d),g=a*.8/Math.max(m,h),_=r-a/2+(a-m*g)/2-u*g,v=i-a/2+(a-h*g)/2-d*g,y=0;for(let e of n)for(let t=1;t<e.length;t++)y+=Math.hypot(e[t].x-e[t-1].x,e[t].y-e[t-1].y);let b=y*Math.max(0,Math.min(1,s)),x=[];for(let e of n){if(b<=0)break;let t=[e[0]];for(let n=1;n<e.length;n++){let r=Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y);if(r<=b)t.push(e[n]),b-=r;else{let i=b/Math.max(1e-6,r);t.push({x:e[n-1].x+(e[n].x-e[n-1].x)*i,y:e[n-1].y+(e[n].y-e[n-1].y)*i,t:e[n].t}),b=0;break}}(t.length>1||e.length===1)&&x.push(t)}let S=c>0?x.map(e=>e.map((e,t)=>({...e,x:e.x+Math.sin(l*40+t*1.7)*c*.006,y:e.y+Math.cos(l*37+t*2.3)*c*.006}))):x;Tf(e,S,null,{scale:g,color:`#FFFFFF`,width:16,glow:!0,offsetX:_,offsetY:v}),Tf(e,S,null,{scale:g,color:o,width:9,glow:!0,offsetX:_,offsetY:v});let C=x[x.length-1];if(C&&s<1){let t=C[C.length-1];e.globalAlpha=.9,e.fillStyle=`#FFFFFF`,e.shadowColor=o,e.shadowBlur=20,e.beginPath(),e.arc(_+t.x*g,v+t.y*g,9,0,Math.PI*2),e.fill()}e.restore()}function Bf(e,t,n){if(!(t.length<2)){e.save(),e.globalAlpha=n*.5,e.strokeStyle=`#B5B1A8`,e.lineWidth=7,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let n=1;n<t.length;n++)e.lineTo(t[n].x,t[n].y);e.stroke(),e.restore()}}var Vf=6.8,Hf=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Uf=`
uniform vec3 uPaper;
uniform vec3 uLine;
uniform float uFogNear;
uniform float uFogFar;
varying vec3 vWorld;
void main() {
  vec2 p = vWorld.xz;
  vec2 f = abs(fract(p) - 0.5);
  vec2 fw = fwidth(p) * 1.2;
  float half_w = 0.012;
  float arm = 0.11;
  // 交線(+): 横棒と縦棒
  float h = (1.0 - smoothstep(half_w, half_w + fw.y, f.y)) * (1.0 - smoothstep(arm, arm + fw.x, f.x));
  float v = (1.0 - smoothstep(half_w, half_w + fw.x, f.x)) * (1.0 - smoothstep(arm, arm + fw.y, f.y));
  float mark = max(h, v);
  float dist = distance(vWorld, cameraPosition);
  float fog = 1.0 - smoothstep(uFogNear, uFogFar, dist);
  vec3 col = mix(uPaper, uLine, mark * fog);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Wf(e=1.3){let t=new Ei;t.name=`field`;let n=new Qa(new Ko(160,160),new as({vertexShader:Hf,fragmentShader:Uf,uniforms:{uPaper:{value:new Z(`#FFFFFF`)},uLine:{value:new Z(`#D9D5CC`)},uFogNear:{value:10},uFogFar:{value:24}}}));n.rotation.x=-Math.PI/2,n.position.y=-.002,t.add(n);let r=new Ba({color:`#E3E0D8`}),i=new Qa(new qo(6.76,Vf,160),r);i.rotation.x=-Math.PI/2,i.position.y=5e-4,t.add(i);for(let n of[e,-e]){let e=new Qa(new go(.62,48),new Ba({color:`#F4F2ED`}));e.rotation.x=-Math.PI/2,e.position.set(n,8e-4,0),t.add(e);let r=new Qa(new qo(.59,.62,48),new Ba({color:`#DAD7D0`}));r.rotation.x=-Math.PI/2,r.position.set(n,.001,0),t.add(r)}let a=new Z(`#FFFFFF`),o=new Z(`#B9B5AD`),s=new Z(`#D9D5CC`),c=new Z(`#A39F97`);return t.setDim=e=>{let t=n.material.uniforms;t.uPaper.value.copy(a).lerp(o,e),t.uLine.value.copy(s).lerp(c,e),r.color.copy(new Z(`#E3E0D8`)).lerp(new Z(`#A8A49C`),e)},t}var Gf=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Kf=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uDash; // 1 で破線
uniform float uTime;
varying vec2 vUv;
void main() {
  float a = atan(vUv.y - 0.5, vUv.x - 0.5);
  float seg = fract(a / 6.2831853 * 30.0 + uTime * 0.12);
  if (uDash > 0.5 && seg < 0.42) discard;
  gl_FragColor = vec4(uColor, uAlpha);
  #include <colorspace_fragment>
}
`;function qf(e,t,n,r){let i=new Qa(new qo(1-e,1,128),new as({vertexShader:Gf,fragmentShader:Kf,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Z(t)},uAlpha:{value:n},uDash:{value:+!!r},uTime:{value:0}}}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-3,i}var Jf=.35,Yf=.15;function Xf(e){let t=[];for(let n of e)for(let e of n)t.push({x:e.x,y:e.y});if(t.length<2)return null;let n=Zf(t,64),r=0,i=0;for(let e of n)r+=e.x,i+=e.y;r/=n.length,i/=n.length;let a=1/0,o=1/0,s=-1/0,c=-1/0;for(let e of n)e.x<a&&(a=e.x),e.y<o&&(o=e.y),e.x>s&&(s=e.x),e.y>c&&(c=e.y);let l=Math.max(s-a,c-o,1e-6),u=n.map(e=>({x:(e.x-r)/l,y:(e.y-i)/l})),d=0;for(let e=1;e<u.length;e++)d+=Math.hypot(u[e].x-u[e-1].x,u[e].y-u[e-1].y);return{pts:u,length:d,strokeCount:e.length}}function Zf(e,t){let n=0;for(let t=1;t<e.length;t++)n+=Math.hypot(e[t].x-e[t-1].x,e[t].y-e[t-1].y);if(n<1e-9)return Array.from({length:t},()=>({...e[0]}));let r=n/(t-1),i=[{...e[0]}],a=0,o=e.map(e=>({...e}));for(let e=1;e<o.length;e++){let t=Math.hypot(o[e].x-o[e-1].x,o[e].y-o[e-1].y);if(a+t>=r&&t>0){let n=(r-a)/t,s={x:o[e-1].x+n*(o[e].x-o[e-1].x),y:o[e-1].y+n*(o[e].y-o[e-1].y)};i.push(s),o.splice(e,0,s),a=0}else a+=t}for(;i.length<t;)i.push({...o[o.length-1]});return i.slice(0,t)}function Qf(e,t){let n=Math.min(e.length,t.length),r=0;for(let i=0;i<n;i++)r+=Math.hypot(e[i].x-t[i].x,e[i].y-t[i].y);return r/n}function $f(e,t){let n=Xf(e),r=Xf(t);if(!n||!r)return{similarity:0,distance:1/0,strokePenalty:!1};let i=Qf(n.pts,r.pts),a=Math.max(0,Math.min(1,1-i/Jf)),o=n.strokeCount!==r.strokeCount;return o&&(a=Math.max(0,a-Yf)),{similarity:a,distance:i,strokePenalty:o}}function ep(e){let t=Xf(e);return t?Math.max(.5,Math.min(2,t.length/4)):.5}function tp(e,t,n){let r=G(`div`,{class:`screen scroll`}),i=G(`canvas`,{style:`width:100%; height:300px; display:block; border-radius:16px; background:#fff`}),a=G(`canvas`,{style:`width:120px; height:120px; display:block`}),o=new Ud(i,{alpha:!1,background:`#FFFFFF`,fov:40});o.scene.add(Wf(.9));let s=af(t),c=.85*Qe[t.size];s.group.scale.setScalar(c/s.height),s.group.position.set(0,0,.9),o.scene.add(s.group);let l=new mf(s),u=t.size===`L`?1.5:1,d=t.size===`L`?.7:.4;o.camera.position.set(0,.4+.7*u,.9+2.2*u),o.camera.lookAt(0,d,.9),T.monsterJson=JSON.stringify(rp(t),null,1),T.features=t.features??null;let f=!1,p=G(`button`,{class:`btn ghost`},`けす`);p.addEventListener(`click`,()=>{f?(Ke(t.id),n({name:`home`})):(f=!0,p.textContent=`本当にけす?`,p.style.borderColor=`#E0603A`,p.style.color=`#E0603A`,setTimeout(()=>{f=!1,p.textContent=`けす`,p.style.borderColor=``,p.style.color=``},3e3))});let m=G(`div`,{class:`row`,style:`align-items:center; gap:14px`});t.sign?m.append(a,G(`div`,{},G(`b`,{},`覚えた印`),G(`p`,{class:`small sub`},`${t.sign.length}画 ・ 複雑さ ${ep(t.sign).toFixed(2)}`),G(`button`,{class:`btn sm`,onClick:()=>n({name:`sign`,id:t.id})},`描き直す`))):m.append(G(`div`,{class:`grow`},G(`b`,{},`まだ印を覚えていない`),G(`p`,{class:`small sub`},`必殺を撃つには印が要る。1〜6画で描いて登録する。`)),G(`button`,{class:`btn`,onClick:()=>n({name:`sign`,id:t.id})},`印を覚えさせる`)),r.append(G(`div`,{class:`pad col`,style:`gap:14px`},G(`div`,{class:`row`},G(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`home`})},`← ホーム`),G(`span`,{class:`grow`}),G(`span`,{class:`chip`},`モンスターカード`)),i,G(`div`,{class:`card`},G(`div`,{class:`row`,style:`align-items:flex-start`},G(`div`,{class:`grow`},G(`h1`,{},t.name),G(`p`,{class:`sub`},`${Re[t.skeleton]} ・ ${ze[t.size]} ・ 目${t.eyes}つ${t.crest?` ・ 額に紋`:``}`),et(t.stats)),t.thumb?G(`img`,{class:`thumb`,src:t.thumb,alt:`魔法陣`}):null),G(`p`,{class:`small sub`,style:`margin-top:8px`},`星12固定 ・ パーツ ${t.parts.length?t.parts.map(e=>np[e.kind]).join(`・`):`なし`} ・ 模様 ${t.marks.length?t.marks[0].kind===`spots`?`斑点`:`縞`:`なし`} ・ 体色 ${t.color}${t.color2?` / ${t.color2}`:``}`)),G(`div`,{class:`card flat`},m),G(`button`,{class:`btn primary`,onClick:()=>n({name:`battle`,id:t.id})},`この子でバトルへ`),G(`div`,{class:`row`},G(`button`,{class:`btn ghost grow`,onClick:()=>n({name:`summon`,mode:`camera`})},`もう一度召喚`),p),G(`p`,{class:`small sub`},`seed ${t.seed.toString(16)} ・ ${$e(t.stats.hp)}`))),e.append(r);let h=0,g=performance.now(),_=e=>{h=requestAnimationFrame(_);let t=Math.min(.05,(e-g)/1e3);g=e,o.fit(i),s.group.rotation.y=Math.sin(e/1800)*.6,l.update(e/1e3,t),o.render()};if(h=requestAnimationFrame(_),t.sign){let{w:e}=Ef(a,120,120),n=a.getContext(`2d`);n.clearRect(0,0,e,e),Df(n,t.sign,0,0,e,{color:t.color,width:6})}return{unmount(){cancelAnimationFrame(h),s.dispose(),o.dispose(),tt(r),r.remove()}}}var np={horn:`角`,spike:`トゲ`,wing:`翼`,tail:`尾`,antenna:`触角`,fin:`ヒレ`,ornament:`首輪`};function rp(e){let{thumb:t,features:n,...r}=e;return r}function ip(e,t,n){let r=G(`div`,{class:`screen`,style:`background:#111`}),i=G(`video`,{class:`layer`,playsinline:!0,muted:!0,autoplay:!0}),a=G(`canvas`,{class:`layer`,style:`display:none`}),o=G(`canvas`,{class:`layer`}),s=G(`canvas`,{class:`layer`}),c=G(`div`,{class:`hint`},``),l=G(`input`,{type:`file`,accept:`image/*`}),u=G(`div`,{class:`hud`,style:`top: calc(var(--sat) + 12px); padding: 0 14px; display:flex; justify-content:space-between`},G(`button`,{class:`btn sm ghost`,style:`background:#fff`,onClick:()=>n({name:`home`})},`← ホーム`),G(`label`,{class:`btn sm file-label`,style:`background:#fff`},`画像から`,l)),d=G(`div`,{style:`position:absolute; inset:0; display:none; align-items:center; justify-content:center; background:#111; z-index:5`},G(`button`,{class:`btn primary`,style:`font-size:18px; padding:16px 28px`},`タップしてはじめる`)),f=G(`div`,{class:`sheet`});r.append(i,a,o,s,c,u,f,d),e.append(r);let p=new Ud(o,{alpha:!0,fov:60}),m=s.getContext(`2d`),h=new Af(m),g=new j,_=new Pd,v=null,y=null,b=`init`,x=null,S=null,C=null,w=null,E=null,O=null,k=0,A=!1,M=!1,N=null,P=null,ee=!1,F=0,te=performance.now(),ne=``,re=Math.PI/3,I=e=>{c.textContent=e};window.__mbSummon={get pose(){return w},get built(){return x},get state(){return b},get scene(){return p.scene},get camera(){return p.camera}};async function ie(){try{i.style.display=`block`,a.style.display=`none`,I(`カメラを起動中…`),v=await pd.open(i),y=new Od(v,{lockSeconds:1.5,timeoutSeconds:10}),window.__mbTracker=y,b=`searching`,I(`紙に丸を描いて、かざして`),D(`camera ${v.width}x${v.height}`)}catch(e){D(`camera error: ${e.message}`),I(`カメラが使えません。右上の「画像から」で写真を選んでください`),b=`init`}}function ae(){if(typeof window.DeviceMotionEvent?.requestPermission!=`function`)return!1;let e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function L(){_.requestPermission().then(e=>{e||D(`gravity sensor unavailable: fallback to v0.1 pose estimate`)}),ie()}d.querySelector(`button`)?.addEventListener(`click`,()=>{d.style.display=`none`,L()});async function oe(e){try{v?.dispose(),v=null,y=null,se(),i.style.display=`none`,a.style.display=`block`,ne=``;let t=await md.fromFile(e);v=t,y=new Od(t,{lockSeconds:.25,timeoutSeconds:2.5}),window.__mbTracker=y,M=!1,b=`searching`,I(`円を探しています…`),D(`image ${t.width}x${t.height}`)}catch(e){I(e.message)}}l.addEventListener(`change`,()=>{let e=l.files?.[0];e&&oe(e),l.value=``});function se(){x&&(p.scene.remove(x.group),x.dispose(),x=null,S=null),C=null,w=null,E=null,O=null,P=null,p.renderer.clippingPlanes=[],f.classList.remove(`in`),tt(f),A=!1,h.clear()}function ce(e,t){let n=Ie(e.image);C=n.monster,C.thumb=e.canvas.toDataURL(`image/jpeg`,.72),We(C),T.features=n.features,T.quant=n.debug.quant,T.quantVector=n.debug.quantVector,T.monsterJson=JSON.stringify(rp(C),null,1),D(`summon seed=${C.seed.toString(16)} ${C.skeleton} ${C.color} ${C.size}`),x=af(C),S=new mf(x);let i=1.2*Qe[C.size];x.group.scale.setScalar(i/x.height),p.scene.add(x.group);let a=r.getBoundingClientRect();w=Ad(t,p.camera,a.width,a.height,0,_.up),O=new Y(0,0,1).applyQuaternion(w.quaternion),E=w,le();let o=new Y(0,1,0).applyQuaternion(w.quaternion);P=new Ma().setFromNormalAndCoplanarPoint(o,w.position),p.renderer.clippingPlanes=[P],S.play(`summon`),S.summonProgress=0,k=performance.now(),b=`summoning`,I(``),h.summonPillar(t.cx,t.cy,t.a,t.b,t.angle)}function le(){if(x&&w&&(x.group.position.copy(w.position),x.group.quaternion.copy(w.quaternion),P)){let e=new Y(0,1,0).applyQuaternion(w.quaternion);P.setFromNormalAndCoplanarPoint(e,w.position)}}function R(){if(!C)return;let e=C;tt(f),f.append(G(`div`,{class:`row`,style:`align-items:flex-start`},e.thumb?G(`img`,{class:`thumb`,src:e.thumb,alt:`魔法陣`}):null,G(`div`,{class:`grow`},G(`h2`,{},e.name),G(`p`,{class:`sub small`},`${Re[e.skeleton]} ・ ${ze[e.size]} ・ 目${e.eyes}つ`),et(e.stats))),G(`div`,{style:`height:12px`}),G(`button`,{class:`btn primary`,style:`width:100%`,onClick:()=>n({name:`battle`,id:e.id})},`この子でバトルへ`),G(`div`,{style:`height:8px`}),G(`div`,{class:`row`},G(`button`,{class:`btn grow`,onClick:()=>n({name:`sign`,id:e.id})},`印を覚えさせる`),G(`button`,{class:`btn ghost`,onClick:ue},`もう一度`))),requestAnimationFrame(()=>f.classList.add(`in`))}function ue(){se(),y?.reset(),M=!1,b=v?`searching`:`init`,I(v?v.kind===`camera`?`紙に丸を描いて、かざして`:`円を探しています…`:``)}s.addEventListener(`pointerdown`,e=>{if(b!==`searching`||!A||!v)return;let t=r.getBoundingClientRect(),n=Math.min(t.width,t.height)*.2,i=hd(v.width,v.height,t.width,t.height),a=(e.clientX-t.left-i.ox)/i.s,o=(e.clientY-t.top-i.oy)/i.s,s=Math.min(v.width,v.height)*.2,c=wd(v.element,a,o,s);M=!0,D(`fallback: tap summon`),ce(c,{cx:e.clientX-t.left,cy:e.clientY-t.top,a:n,b:n*.6,angle:0})});function de(e){switch(e.type){case`candidate`:N={screen:e.screen,contour:e.contour,stable:e.stable,at:performance.now()},b===`searching`&&I(e.stable>.25?`そのまま…`:`丸が見えた`);break;case`confirming`:b===`searching`&&I(`そのまま…`),T.extra.confirm=`${e.streak}/${e.needed} seed=${e.seed.toString(16)}`;break;case`lock`:T.extra.confirm=e.confirmedByTimeout?`timeout fallback`:`matched`,b===`searching`&&ce(e.crop,e.screen);break;case`track`:if(w&&O&&(b===`summoning`||b===`done`)){let t=r.getBoundingClientRect();E=Ad(e.screen,p.camera,t.width,t.height,e.spin,_.up,O),T.extra.spin=`${(e.spin*180/Math.PI).toFixed(0)}° (${e.spinScore.toFixed(2)})`}break;case`lost`:D(`circle lost: keep last pose`);break;case`timeout`:b===`searching`&&(A=!0,I(`見つからない? 画面をタップして呼ぶ`))}}let fe=e=>{if(ee)return;F=requestAnimationFrame(fe);let t=Math.min(.05,(e-te)/1e3);te=e,g.tick();let n=r.getBoundingClientRect(),i=Math.round(n.width),o=Math.round(n.height);if(p.resize(i,o),Ef(s,i,o),m.clearRect(0,0,i,o),v?.kind===`image`){let e=`${i}x${o}`;ne!==e&&(Ef(a,i,o),gd(a.getContext(`2d`),v,i,o),ne=e)}if(y&&v&&!M&&b!==`init`){y.setView(i,o);for(let t of y.update(e))de(t)}if(b===`searching`&&N&&e-N.at<450){let e=N.screen,t=y?.opt.lockSeconds??1.5,n=Math.min(1,N.stable/t);m.save(),m.translate(e.cx,e.cy),m.rotate(e.angle),m.strokeStyle=`rgba(255,255,255,${.45+.5*n})`,m.lineWidth=3+3*n,m.shadowColor=`rgba(255,255,255,0.9)`,m.shadowBlur=8+16*n,m.beginPath(),m.ellipse(0,0,e.a,e.b,0,0,Math.PI*2),m.stroke(),m.strokeStyle=`rgba(255,210,74,0.95)`,m.lineWidth=5,m.beginPath(),m.ellipse(0,0,e.a+8,e.b+8,0,-Math.PI/2,-Math.PI/2+Math.PI*2*n),m.stroke(),m.restore()}if(b===`summoning`&&S){let t=Math.min(1,(e-k)/2e3);S.summonProgress=t,t>=1&&(b=`done`,p.renderer.clippingPlanes=[],P=null,S.play(`idle`),R())}if(w&&E&&E!==w&&(w=jd(w,E,1-Math.exp(-t*7)),le()),w&&S&&(b===`summoning`||b===`done`)&&(S.lookAt(new Y(0,0,0)),b===`done`&&S.state!==`turn`)){let e=Nd(w,S.yaw);e&&Math.abs(e.deviation)>re&&S.turnTo(e.yawToCamera)}if(S?.update(e/1e3,t),p.render(),h.update(t,i,o),y?.last){let e=y.last;if(T.detect={ellipse:e.best?y.toScreen(e.best.ellipse):null,err:e.best?.err??0,coverage:e.best?.coverage??0,circularity:e.best?.circularity??0,candidates:e.count,ms:e.ms,w:e.w,h:e.h,locked:!!y.locked,stable:y.stableSeconds},T.open&&e.best){let t=y.contourToScreen(e.best.contour);m.save(),m.strokeStyle=`#E0603A`,m.lineWidth=2,m.beginPath(),t.forEach((e,t)=>t?m.lineTo(e.x,e.y):m.moveTo(e.x,e.y)),m.closePath(),m.stroke(),m.restore()}}T.extra.state=b;let c=_.up;if(T.extra.gravity=c?`up=(${c.x.toFixed(2)},${c.y.toFixed(2)},${c.z.toFixed(2)})`:`fallback(v0.1の推定)`,S&&(T.extra.yaw=`${(S.yaw*180/Math.PI).toFixed(0)}° ${S.state}`),w){let e=new Y(0,0,1).applyQuaternion(w.quaternion),t=p.project(w.position),n=p.project(w.position.clone().add(e.multiplyScalar(.3)));T.extra.fwdDeg=(Math.atan2(n.y-t.y,n.x-t.x)*180/Math.PI).toFixed(0)}};if(t===`camera`)ae()?d.style.display=`flex`:L();else{let e=it();e?oe(e):I(`右上の「画像から」で写真を選んでください`)}return F=requestAnimationFrame(fe),{unmount(){ee=!0,cancelAnimationFrame(F),se(),v?.dispose(),_.dispose(),p.dispose(),tt(r),r.remove()}}}function ap(e,t){let n=[],r=null,i=0,a=0,o=!0,s=null,c=t=>{let n=e.getBoundingClientRect(),r=n.width;return{x:(t.clientX-n.left)/r,y:(t.clientY-n.top)/r,t:Math.round(performance.now()-i)}},l=()=>{a&&(clearTimeout(a),a=0)},u=a=>{o&&s===null&&(n.length>=t.maxStrokes||(s=a.pointerId,l(),n.length===0&&(i=performance.now()),r=[c(a)],e.setPointerCapture?.(a.pointerId),t.onChange?.(n,r),a.preventDefault()))},d=e=>{if(!r||e.pointerId!==s)return;let i=c(e),a=r[r.length-1];Math.hypot(i.x-a.x,i.y-a.y)<.002||(r.push(i),t.onChange?.(n,r),e.preventDefault())},f=e=>{r&&e.pointerId===s&&(s=null,r.length===1&&r.push({...r[0],x:r[0].x+.001,t:r[0].t+1}),n.push(r),r=null,t.onChange?.(n,null),l(),n.length>=t.maxStrokes?t.onDone?.(n):a=window.setTimeout(()=>{a=0,n.length>0&&t.onDone?.(n)},t.idleMs))};return e.addEventListener(`pointerdown`,u),e.addEventListener(`pointermove`,d),e.addEventListener(`pointerup`,f),e.addEventListener(`pointercancel`,f),e.style.touchAction=`none`,{get strokes(){return n},reset(){l(),n=[],r=null,s=null,t.onChange?.(n,null)},destroy(){l(),e.removeEventListener(`pointerdown`,u),e.removeEventListener(`pointermove`,d),e.removeEventListener(`pointerup`,f),e.removeEventListener(`pointercancel`,f)},setEnabled(e){o=e}}}function op(e,t,n){let r=G(`div`,{class:`screen scroll`}),i=Math.min(window.innerWidth-40,420),a=G(`canvas`,{style:`width:${i}px; height:${i}px; display:block; border:3px solid ${L}; border-radius:20px; background:#fff; touch-action:none`}),o=G(`p`,{class:`sub small`},`1〜6画。指を離して0.8秒で描き終わり。`),s=G(`button`,{class:`btn primary`,disabled:!0},`この印で決定`),c=G(`button`,{class:`btn`},`描き直す`),l=null,u=a.getContext(`2d`),d=(e,n)=>{let{w:r}=Ef(a,i,i);u.clearRect(0,0,r,r),Tf(u,e,n,{scale:r,color:L,width:10}),Tf(u,e,n,{scale:r,color:t.color,width:6});let s=e.length+ +!!n;l||(o.textContent=s?`${s}画目… 指を離して0.8秒で描き終わり`:`1〜6画。指を離して0.8秒で描き終わり。`)},f=ap(a,{maxStrokes:6,idleMs:800,onChange:d,onDone:e=>{l=e,f.setEnabled(!1),s.disabled=!1,o.textContent=`${e.length}画 ・ 複雑さ ${ep(e).toFixed(2)}(丸一つで約0.8、星形で約1.2)`}});return c.addEventListener(`click`,()=>{l=null,f.reset(),f.setEnabled(!0),s.disabled=!0,d([],null)}),s.addEventListener(`click`,()=>{l&&(t.sign=l,Ge(t),n({name:`card`,id:t.id}))}),r.append(G(`div`,{class:`pad col`,style:`gap:14px; align-items:center`},G(`div`,{class:`row`,style:`align-self:stretch`},G(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`card`,id:t.id})},`← カードへ`),G(`span`,{class:`grow`})),G(`div`,{style:`align-self:stretch`},G(`h1`,{},`${t.name} に印を覚えさせる`),o),a,G(`div`,{class:`row`,style:`width:${i}px`},c,G(`span`,{class:`grow`}),s),G(`p`,{class:`small sub`,style:`align-self:stretch`},`バトルでは、この印を同じ向き・同じ書き順で再現すると威力が上がる(再現度)。複雑な印ほど強いが、崩れやすい。`))),e.append(r),d([],null),{unmount(){f.destroy(),tt(r),r.remove()}}}var sp=e=>({inkRatio:.07,hue:200,sat:.6,lum:.55,roughness:.1,closedShapes:2,sharpCorners:0,circles:0,hasText:!1,components:3,...e});function cp(e=40){let t=[];for(let n=0;n<=e;n++){let r=n/e*Math.PI*2-Math.PI/2;t.push({x:.5+.3*Math.cos(r),y:.5+.3*Math.sin(r),t:n*20})}return[t]}function lp(){return[[[.2,.3],[.4,.7],[.6,.3],[.8,.7]].map(([e,t],n)=>({x:e,y:t,t:n*120}))]}function up(){return[[{x:.25,y:.25,t:0},{x:.75,y:.75,t:200}],[{x:.75,y:.25,t:0},{x:.25,y:.75,t:200}]]}var dp=[{key:`tank`,label:`体力型`,desc:`どっしり耐えて、ゆっくり大技`,monster:Fe(2047987201,sp({hue:20,sat:.7,lum:.6,inkRatio:.14,closedShapes:1,roughness:.05}),{stats:{hp:5,spd:2,atk:3,mag:2},skeleton:`quadruped`,name:`ドンゴロ`,id:`npc-tank`,createdAt:0}),sign:cp(),castSeconds:2.4},{key:`speed`,label:`素早さ型`,desc:`ふわふわ避けて、距離を取る`,monster:Fe(1592593410,sp({hue:150,sat:.55,lum:.5,inkRatio:.035,closedShapes:2,sharpCorners:4,roughness:.35}),{stats:{hp:2,spd:5,atk:2,mag:3},skeleton:`floating`,name:`ピルキ`,id:`npc-speed`,createdAt:0}),sign:lp(),castSeconds:1.2},{key:`power`,label:`力型`,desc:`一撃が重い。腕が太い`,monster:Fe(2809841923,sp({hue:350,sat:.65,lum:.5,inkRatio:.09,closedShapes:2,sharpCorners:5,roughness:.15}),{stats:{hp:3,spd:2,atk:5,mag:2},skeleton:`biped`,name:`ガルボ`,id:`npc-power`,createdAt:0}),sign:up(),castSeconds:1.8}],$={HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,DODGE_WINDOW:.5,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_INV_BASE:.35,DODGE_INV_PER:.03,DODGE_CD:1.2,JUST_WINDOW:.2,JUST_DMG_MULT:.3,SIGN_FLIGHT:.55,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5};function fp(e){return $.HP_BASE+e.hp*$.HP_PER}function pp(e){return $.INTERVAL_NUM/(.6+e.spd*.2)}function mp(e){return $.ATK_BASE+e.atk*$.ATK_PER}function hp(e){return $.GAUGE_HIT+e.spd*$.GAUGE_HIT_PER}function gp(e){return $.ZONE_BASE+e.mag*$.ZONE_PER}function _p(e){return $.SPEED_BASE+e.spd*$.SPEED_PER}function vp(e){return $.DODGE_INV_BASE+e.spd*$.DODGE_INV_PER}function yp(e){return $.NPC_DODGE_BASE+e.spd*$.NPC_DODGE_PER}function bp(e){return Math.max(.3,$.TELEGRAPH_BASE-e.spd*$.TELEGRAPH_PER)}function xp(e,t,n,r=!0){return $.SIGN_K*t*n*n*(.7+e.mag*.15)*(r?1:$.ZONE_OUT_MULT)}function Sp(e,t){let n=.8+t.spd*.1;switch(e){case`quadruped`:return{kind:`jump`,dur:Math.max(.3,.5-.03*t.spd),du:0,landAt:1,landBeyond:1*n,attackBoost:1,lateral:0};case`multileg`:return{kind:`burrow`,dur:Math.max(.4,.65-.03*t.spd),du:.5*n,landAt:1,landBeyond:0,attackBoost:1,lateral:0};case`serpent`:return{kind:`coil`,dur:.45,du:-1.5*n,landAt:.5,landBeyond:0,attackBoost:.75-.1*t.spd,lateral:0};case`floating`:return{kind:`blink`,dur:Math.max(.18,.36-.03*t.spd),du:-(1+.1*t.mag)*n,landAt:.5,landBeyond:0,attackBoost:1,lateral:0};default:return{kind:`sidestep`,dur:Math.max(.25,.4-.02*t.spd),du:0,landAt:1,landBeyond:0,attackBoost:1,lateral:1.8*n}}}var Cp=class{constructor(e,t,n={}){w(this,`fighters`,void 0),w(this,`projectiles`,[]),w(this,`time`,0),w(this,`ended`,!1),w(this,`winner`,null),w(this,`endedBy`,null),w(this,`rng`,void 0),this.rng=new N(n.seed??(Date.now()^Math.random()*4294967295)>>>0);let r=n.startDistance??2.6;this.fighters=[Tp(e,{x:-r/2,z:0}),Tp(t,{x:r/2,z:0})]}get d(){return wp(this.fighters[0].pos,this.fighters[1].pos)}worldPos(e){return{...this.fighters[e].pos}}laneDir(){return this.dirTo(0)}dirTo(e){let t=this.fighters[e],n=this.fighters[+(e===0)],r=n.pos.x-t.pos.x,i=n.pos.z-t.pos.z,a=Math.hypot(r,i);return a<1e-6?{x:1,z:0}:{x:r/a,z:i/a}}inZone(e){return this.d<=gp(this.fighters[e].init.stats)+1e-9}telegraphInfo(e){let t=this.fighters[e];if(t.state!==`telegraph`)return null;let n=Math.max(0,1-t.stateT/t.telegraphDur);return{remain:n,open:n<=$.DODGE_WINDOW}}ringRemain(e){let t=this.fighters[e],n=t.telegraphDur+$.STRIKE_CONTACT;return t.state===`telegraph`?Math.max(0,1-t.stateT/n):t.state===`strike`&&!t.hitDone?Math.max(0,1-(t.telegraphDur+t.stateT)/n):null}incoming(e){return this.projectiles.find(t=>t.target===e)??null}update(e){let t=[];if(this.ended||e<=0)return t;this.time+=e;for(let n of[0,1]){let r=this.fighters[n],i=+(n===0),a=this.fighters[i];if(r.state===`dead`)continue;r.stateT+=e,r.dodgeCd=Math.max(0,r.dodgeCd-e),r.dodge&&this.updateDodge(n,e,t);let o=this.tickBeat(n,e);if(r.state===`idle`){if(o&&!r.init.isPlayer&&r.gauge>=$.GAUGE_FULL&&r.init.signComplexity>0&&!r.dodge&&this.inZone(n)&&r.beatIdx>$.FIRST_SIGN_BEAT){r.state=`casting`,r.stateT=0,r.castStartedAt=this.time,t.push({type:`cast-start`,who:n,zoneR:gp(r.init.stats),seconds:r.init.npcCastSeconds??$.NPC_CAST_SECONDS});continue}if(o&&!r.dodge&&a.state!==`dead`){if(this.d<=$.REACH+$.LUNGE_MAX+1e-9){if(r.state=`telegraph`,r.stateT=0,r.telegraphDur=bp(r.init.stats),r.lungeD=Math.max(0,this.d-$.REACH),r.lungeDone=0,r.attacks++,t.push({type:`attack-start`,who:n,telegraph:r.telegraphDur}),a.npcDodgeAt=null,!a.init.isPlayer&&a.state===`idle`&&!a.dodge&&a.dodgeCd<=0&&this.rng.next()<yp(a.init.stats)){let e=r.telegraphDur*(1-$.DODGE_WINDOW),t=this.rng.range(e+.02,r.telegraphDur-.02),n=t+Sp(a.init.skeleton,a.init.stats).dur+.05;a.beatT>t-.05&&a.beatT<n||(a.npcDodgeAt=t)}continue}r.intent=`rush`,r.intentUntil=-1}r.dodge||this.move(n,e)}else if(r.state===`telegraph`){if(r.lungeD>0&&r.lungeDone<1){let e=Math.min(1,r.stateT/(r.telegraphDur*$.LUNGE_PORTION)),t=e*e*(3-2*e),i=r.lungeD*(t-r.lungeDone);r.lungeDone=t;let a=Math.max(0,this.d-$.REACH*.9);if(i>0&&a>0){let e=this.dirTo(n),t=Math.min(i,a);this.setPos(n,{x:r.pos.x+e.x*t,z:r.pos.z+e.z*t}),this.clampField(n)}}if(a.npcDodgeAt!==null&&r.stateT>=a.npcDodgeAt&&(a.npcDodgeAt=null,this.tap(i,t)),r.stateT>=r.telegraphDur){r.state=`strike`,r.stateT=0,r.hitDone=!1,a.npcDodgeAt=null;let e=a.state===`casting`,o=Math.round(mp(r.init.stats)*(e?$.CAST_TAKEN_MULT:1)),s=a.state!==`dead`&&!(a.invincibleUntil>this.time+$.STRIKE_CONTACT);r.pendingDamage=o,r.pendingBonus=e,t.push({type:`strike`,who:n,target:i,willHit:s,lethal:s&&a.hp<=o,damage:o})}}else if(r.state===`strike`){if(!r.hitDone&&r.stateT>=$.STRIKE_CONTACT&&(r.hitDone=!0,a.state!==`dead`)){if(a.invincibleUntil>this.time)a.dodgeSuccess++,t.push({type:`miss`,who:n,target:i}),this.addGauge(i,$.GAUGE_DODGE,`dodge`,t),this.addGauge(n,$.GAUGE_WHIFF,`whiff`,t);else{let e=r.pendingDamage,o=r.pendingBonus;if(r.hitsLanded++,a.hitsTaken++,t.push({type:`hit`,who:n,target:i,damage:e,castingBonus:o}),this.applyDamage(n,i,e,`strike`,t),a.state===`idle`){let e=this.rng.next();a.intent=e<$.HIT_RETREAT?`retreat`:e<$.HIT_RETREAT+.2?`hold`:`advance`,a.intentUntil=this.time+$.HIT_REACT}this.addGauge(n,hp(r.init.stats),`hit`,t),a.hp>0&&this.addGauge(i,$.GAUGE_TAKEN,`taken`,t)}}r.stateT>=$.STRIKE&&(r.state=`idle`,r.stateT=0)}else r.state===`casting`&&!r.init.isPlayer&&r.stateT>=(r.init.npcCastSeconds??$.NPC_CAST_SECONDS)&&this.fire(n,r.init.npcFidelity??.7,t);if(this.ended)break}if(!this.ended)for(let n=this.projectiles.length-1;n>=0;n--){let r=this.projectiles[n];if(r.t+=e,r.t<r.dur)continue;this.projectiles.splice(n,1);let i=this.fighters[r.target];if(i.state===`dead`)continue;let a=i.state===`casting`,o=Math.round(r.damage*(a?$.CAST_TAKEN_MULT:1)*(r.just?$.JUST_DMG_MULT:1));if(i.signsTaken++,t.push({type:`sign-hit`,who:r.from,target:r.target,damage:o,castingBonus:a,just:r.just}),this.applyDamage(r.from,r.target,o,`sign`,t),this.ended)break}return t}tickBeat(e,t){let n=this.fighters[e];if(n.beatT-=t,!n.beatSwitched&&n.beatT<=n.beatLen*$.INTENT_SWITCH_PHASE&&(n.beatSwitched=!0,n.state===`idle`&&!n.dodge&&this.chooseIntent(e)),n.beatT>0)return!1;n.beatIdx++;let r=n.init.isPlayer?n.attackBoost:1;return n.attackBoost=1,n.beatLen=n.beatInterval*r*(1+this.rng.range(-$.BEAT_JITTER,$.BEAT_JITTER)),n.beatT+=n.beatLen,n.beatT<.1&&(n.beatT=n.beatLen),n.beatSwitched=!1,!0}beatInfo(e){let t=this.fighters[e];return{interval:t.beatInterval,nextIn:Math.max(0,t.beatT),index:t.beatIdx}}chooseIntent(e){let t=this.fighters[e],n=this.d,r=n>$.REACH+$.LUNGE_MAX-.6,i=this.rng.next(),a=$.INTENT_ADVANCE,o=a+$.INTENT_RETREAT,s=o+$.INTENT_HOLD,c=s+$.INTENT_CIRCLE,l=i<a?`advance`:i<o?`retreat`:i<s?`hold`:i<c?`circle`:n>=$.RUSH_MIN_D?`rush`:`advance`;r&&(l===`retreat`||l===`hold`||l===`circle`)&&(l=n>=$.RUSH_MIN_D?`rush`:`advance`),t.intent=l,t.intentUntil=-1,l===`circle`&&(t.circleDir=this.rng.next()<.5?-1:1,t.circleRemain=this.rng.range($.CIRCLE_MIN_DEG,$.CIRCLE_MAX_DEG)*Math.PI/180)}move(e,t){let n=this.fighters[e],r=this.fighters[+(e===0)],i=this.d;n.intentUntil>=0&&this.time>n.intentUntil&&(n.intent=`hold`,n.intentUntil=-1);let a=n.intent;if(a===`rush`&&i<=$.REACH&&(a=`hold`),a===`retreat`&&i>=$.RETREAT_LIMIT&&(a=`hold`),a===`advance`&&i<=$.D_MIN+.05&&(a=`hold`),a===`hold`)return;let o=_p(n.init.stats)*(a===`rush`?$.RUSH_MULT:1),s=this.dirTo(e);if(a===`circle`){let e={x:-s.z*n.circleDir,z:s.x*n.circleDir},a=o*t,c=n.pos.x+e.x*a,l=n.pos.z+e.z*a,u=c-r.pos.x,d=l-r.pos.z,f=Math.hypot(u,d)||1;n.pos={x:r.pos.x+u/f*i,z:r.pos.z+d/f*i},n.circleRemain-=a/Math.max(.5,i),n.circleRemain<=0&&(n.intent=`hold`)}else{let r=a===`retreat`?-1:1;this.setPos(e,{x:n.pos.x+s.x*o*t*r,z:n.pos.z+s.z*o*t*r})}this.clampField(e)}setPos(e,t){let n=this.fighters[e],r=this.fighters[+(e===0)],i=t.x-r.pos.x,a=t.z-r.pos.z,o=Math.hypot(i,a);if(o<1e-6){let t=this.dirTo(e);i=-t.x*$.D_MIN,a=-t.z*$.D_MIN,o=$.D_MIN}let s=Math.min($.D_MAX,Math.max($.D_MIN,o));n.pos={x:r.pos.x+i/o*s,z:r.pos.z+a/o*s}}clampField(e){let t=this.fighters[e],n=Math.hypot(t.pos.x,t.pos.z),r=$.FIELD_R-.5;n>r&&(t.pos={x:t.pos.x/n*r,z:t.pos.z/n*r})}updateDodge(e,t,n){let r=this.fighters[e],i=r.dodge,a=this.fighters[+(e===0)];i.t+=t;let o=i.t/i.spec.dur;if(!i.landed&&o>=i.spec.landAt){i.landed=!0;let t=this.dirTo(e);if(i.spec.kind===`jump`){let e=Math.max($.D_MIN,i.spec.landBeyond);r.pos={x:a.pos.x+t.x*e,z:a.pos.z+t.z*e}}else i.spec.du!==0&&this.setPos(e,{x:r.pos.x+t.x*i.spec.du,z:r.pos.z+t.z*i.spec.du});this.clampField(e),n.push({type:`dodge-land`,who:e,kind:i.spec.kind})}o>=1&&(r.dodge=null)}tap(e,t){let n=this.fighters[e],r=+(e===0),i=this.fighters[r];if(this.ended||n.dodge||n.state===`casting`||n.state===`dead`||n.state===`strike`&&!n.hitDone)return`ignored`;if(n.dodgeCd>0)return`cooldown`;n.state!==`idle`&&this.cancelAttack(e);let a=Sp(n.init.skeleton,n.init.stats),o=this.telegraphInfo(r),s=!!o&&o.open,c=!!o&&!o.open,l=!1,u=this.incoming(e);if(n.init.isPlayer&&u&&!u.just&&u.dur-u.t<=$.JUST_WINDOW&&(u.just=!0,l=!0),n.dodgeCd=$.DODGE_CD,n.dodgeTaps++,s){let e=i.telegraphDur-i.stateT+$.STRIKE_CONTACT+.15;n.invincibleUntil=this.time+Math.max(vp(n.init.stats),e)}else l||n.whiffs++;let d=t??[];u&&n.init.isPlayer&&n.justTaps++,l&&(n.justSuccess++,d.push({type:`just`,who:e,from:r}),this.addGauge(e,$.GAUGE_JUST,`just`,d));let f=n.dodgeTaps%2==0?-1:1,p={...n.pos},m=this.dirTo(e),h={...n.pos};if(a.kind===`jump`){let e=Math.max($.D_MIN,a.landBeyond);h={x:i.pos.x+m.x*e,z:i.pos.z+m.z*e}}else if(a.du!==0){let e=Math.min($.D_MAX,Math.max($.D_MIN,this.d-a.du));h={x:i.pos.x-m.x*e,z:i.pos.z-m.z*e}}return n.dodge={spec:a,t:0,dir:f,inWindow:s,landed:a.landAt<=0},a.attackBoost!==1&&(n.attackBoost=a.attackBoost),n.intent=`hold`,d.push({type:`dodge`,who:e,spec:a,dir:f,inWindow:s,early:c,from:p,to:h}),l?`just`:s?`dodge`:`whiff`}cancelAttack(e){let t=this.fighters[e];if(t.state!==`telegraph`&&t.state!==`strike`)return;let n=this.fighters[+(e===0)];n.npcDodgeAt=null,t.state=`idle`,t.stateT=0}startCast(e){let t=this.fighters[e];if(this.ended||t.gauge<$.GAUGE_FULL||t.init.signComplexity<=0||t.state===`casting`||t.state===`dead`||t.beatIdx<$.FIRST_SIGN_BEAT)return!1;(t.state===`telegraph`||t.state===`strike`)&&this.cancelAttack(e),t.dodge=null,t.state=`casting`,t.stateT=0,t.castStartedAt=this.time;let n=+(e===0);return t.castRing=this.ringRemain(n),t.castBeatIn=Math.max(0,this.fighters[n].beatT),`now`}cancelCast(e){let t=this.fighters[e];return this.ended||t.state!==`casting`?!1:(t.state=`idle`,t.stateT=0,!0)}finishCast(e,t){let n=[],r=this.fighters[e];return this.ended||r.state!==`casting`||this.fire(e,t,n),n}fire(e,t,n){let r=this.fighters[e],i=+(e===0),a=this.fighters[i],o=this.inZone(e),s=Math.round(xp(r.init.stats,r.init.signComplexity,t,o));r.gauge=0,r.state=`idle`,r.stateT=0,r.lastFidelity=t,r.signs.push({fidelity:t,inZone:o,damage:s,d:this.d,ringRemain:r.castRing,nextBeatIn:r.castBeatIn}),r.castRing=null,this.projectiles.push({from:e,target:i,t:0,dur:$.SIGN_FLIGHT,damage:s,fidelity:t,inZone:o,just:!1}),n.push({type:`sign-fire`,who:e,target:i,fidelity:t,damage:s,complexity:r.init.signComplexity,inZone:o,lethal:a.state!==`dead`&&a.hp<=s,flight:$.SIGN_FLIGHT})}addGauge(e,t,n,r){let i=this.fighters[e];if(i.state===`dead`)return;let a=i.gauge;i.gauge=Math.min($.GAUGE_FULL,i.gauge+t),r.push({type:`gauge`,who:e,amount:t,reason:n}),a<$.GAUGE_FULL&&i.gauge>=$.GAUGE_FULL&&r.push({type:`gauge-full`,who:e})}applyDamage(e,t,n,r,i){let a=this.fighters[e],o=this.fighters[t];o.state!==`dead`&&(o.hp=Math.max(0,o.hp-n),a.damageDealt+=n,o.hp<=0&&(o.state===`casting`&&i.push({type:`sign-fizzle`,who:t}),o.state=`dead`,o.dodge=null,this.projectiles=this.projectiles.filter(e=>e.target!==t&&e.from!==t),i.push({type:`dead`,who:t}),this.ended=!0,this.winner=e,this.endedBy=r,i.push({type:`end`,winner:e,by:r})))}};function wp(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function Tp(e,t){return{init:e,hp:fp(e.stats),maxHp:fp(e.stats),gauge:0,beatInterval:pp(e.stats),beatT:pp(e.stats)*(e.isPlayer?$.FIRST_BEAT_PLAYER:$.FIRST_BEAT_NPC),beatLen:pp(e.stats),beatIdx:0,beatSwitched:!0,lungeD:0,lungeDone:0,state:`idle`,stateT:0,telegraphDur:bp(e.stats),hitDone:!0,pendingDamage:0,pendingBonus:!1,pos:t,intent:`advance`,intentUntil:-1,circleDir:1,circleRemain:0,dodgeCd:0,invincibleUntil:-1,dodge:null,npcDodgeAt:null,attackBoost:1,castStartedAt:0,castRing:null,castBeatIn:0,attacks:0,hitsLanded:0,hitsTaken:0,dodgeTaps:0,dodgeSuccess:0,whiffs:0,justTaps:0,justSuccess:0,signsTaken:0,damageDealt:0,signs:[],lastFidelity:null}}var Ep={FOV:52,ELEV_NEAR:45,ELEV_FAR:55,DIAG:28,MARGIN_X:.15,MARGIN_Y:.22,D_MIN:7,D_MAX:12,LAG:.15,YAW_LAG:.7,OCCLUDE_DEG:9,OCCLUDE_RATE:.7},Dp=1.3,Op=new Y,kp=new Y,Ap=new Y,jp=new Z(oe),Mp=class{constructor(e,t,n,r){w(this,`viewer`,void 0),w(this,`player`,void 0),w(this,`enemy`,void 0),w(this,`field`,void 0),w(this,`reachRing`,void 0),w(this,`zoneRing`,void 0),w(this,`enemyZoneRing`,void 0),w(this,`mode`,`intro`),w(this,`modeT`,0),w(this,`t`,0),w(this,`d`,Dp*2),w(this,`cutinZoom`,0),w(this,`finishPush`,0),w(this,`dim`,0),w(this,`camPos`,new Y(0,6,9)),w(this,`camLook`,new Y(0,.5,0)),w(this,`yaw`,0),w(this,`yawOffset`,0),w(this,`dist`,9),w(this,`lookPt`,new Y(0,.5,0)),w(this,`savedPos`,new Y),w(this,`savedLook`,new Y),w(this,`cutinFrom`,new Y),w(this,`cutinTo`,new Y),w(this,`cutinLook`,new Y),w(this,`finishCenter`,new Y),w(this,`finishBack`,new Y),w(this,`finishRight`,new Y),w(this,`finishH`,1),w(this,`finishLook`,new Y),w(this,`finishTarget`,new Y),w(this,`cutinSide`,0),w(this,`ghosts`,[]),w(this,`sim`,void 0),this.sim=r,this.viewer=new Ud(e,{alpha:!0,fov:Ep.FOV}),this.field=Wf(Dp),this.viewer.scene.add(this.field),this.reachRing=qf(.012,`#CFCBC2`,.55,!1),this.reachRing.scale.setScalar($.REACH),this.viewer.scene.add(this.reachRing),this.zoneRing=qf(.022,t.color,.9,!0),this.zoneRing.visible=!1,this.viewer.scene.add(this.zoneRing),this.enemyZoneRing=qf(.014,n.color,.7,!0),this.enemyZoneRing.visible=!1,this.viewer.scene.add(this.enemyZoneRing),this.player=this.place(0,t),this.enemy=this.place(1,n),this.yaw=this.desiredYaw();let i=this.autoFrame(0,!0);this.dist=i.dist*1.7,this.lookPt.copy(i.look),this.applyCamera(this.yaw,Or.degToRad(28),this.dist,this.lookPt),this.viewer.camera.position.copy(this.camPos),this.viewer.camera.lookAt(this.camLook)}place(e,t){let n=af(t),r=1*Qe[t.size],i=r/n.height;n.group.scale.setScalar(i);let a=this.sim.worldPos(e),o=new Y(a.x,0,a.z);n.group.position.set(0,0,0),n.group.updateMatrixWorld(!0);let s=new Yi;n.group.traverse(e=>{e!==n.rig.shadow&&e.isMesh&&s.expandByObject(e,!1)});let c=s.isEmpty()?new Y(r,r,r):s.getSize(new Y),l=.5*Math.max(c.y,.8*Math.max(c.x,c.z));n.group.position.copy(o),this.viewer.scene.add(n.group);let u=new mf(n),d=n.rig.shadow.material,f={side:e,data:t,built:n,anim:u,pos:o,height:r,bodyR:l,lat:0,latStep:0,latPhase:e*2.1,arc:null,shadowMat:d,color:new Z(t.color),speedSmooth:0,realTime:!1};return u.yaw=Math.atan2(-a.x,-a.z),f}other(e){return e===0?this.enemy:this.player}get(e){return e===0?this.player:this.enemy}setMode(e,t={}){if(this.mode===e)return;let n=this.mode;if(this.mode=e,this.modeT=0,e===`cutin`){this.savedPos.copy(this.camPos),this.savedLook.copy(this.camLook),this.cutinSide=t.side??0;let e=this.get(this.cutinSide),n=Op.set(Math.sin(e.anim.yaw),0,Math.cos(e.anim.yaw)),r=e.height;this.cutinFrom.copy(e.pos).addScaledVector(n,2.4*r).add(kp.set(0,1*r,0)),this.cutinTo.copy(e.pos).addScaledVector(n,1.8*r).add(kp.set(0,.85*r,0)),this.cutinLook.copy(e.pos).add(kp.set(0,.58*r,0)).addScaledVector(n,.1),this.cutinZoom=0,this.camPos.copy(this.cutinFrom),this.camLook.copy(this.cutinLook),this.field.visible=!1,this.reachRing.visible=!1,this.other(this.cutinSide).built.group.visible=!1,e.realTime=!0}else n===`cutin`&&(this.field.visible=!0,this.reachRing.visible=!0,this.player.built.group.visible=!0,this.enemy.built.group.visible=!0,this.player.realTime=!1,this.enemy.realTime=!1,this.camPos.copy(this.savedPos),this.camLook.copy(this.savedLook));if(e===`finish`){let e=this.get(t.attacker??0),n=this.other(t.attacker??0),r=Op.copy(e.pos).sub(n.pos).setY(0);r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize(),this.finishBack.copy(r),this.finishRight.set(r.z,0,-r.x),this.finishH=e.height,this.finishCenter.copy(e.pos),this.finishLook.copy(n.pos).add(Ap.set(0,.45*n.height,0)).lerp(e.pos.clone().add(Ap.set(0,.5*e.height,0)),.35),this.finishTarget.copy(n.pos).add(Ap.set(0,.5*n.height,0)),this.finishPush=0,this.updateFinishCamera()}(e===`auto`||e===`result`)&&this.setDim(0)}setDim(e){this.dim=e,this.field.setDim(e)}get dimLevel(){return this.dim}screenPos(e,t=`center`){let n=this.get(e),r=n.height,i=n.built.rig.root.position.y*n.built.group.scale.y,a=t===`center`?r*.55:t===`head`?r*.85:t===`chest`?r*.62:t===`top`?r*1.08:0;Op.set(n.pos.x,n.pos.y+a+i,n.pos.z);let o=this.viewer.project(Op);return{x:o.x,y:o.y}}screenRadius(e){let t=this.get(e),n=this.viewer.camera,r=t.height,i=t.built.rig.root.position.y*t.built.group.scale.y;Op.set(t.pos.x,t.pos.y+r*.55+i,t.pos.z),kp.setFromMatrixColumn(n.matrixWorld,0).multiplyScalar(t.bodyR).add(Op);let a=this.viewer.project(Op),o=this.viewer.project(kp);return Math.max(18,Math.hypot(a.x-o.x,a.y-o.y))}screenHeight(e){let t=this.screenPos(e,`feet`),n=this.screenPos(e,`head`);return Math.abs(t.y-n.y)/.85}onDodge(e,t,n,r,i){let a=this.get(e);if(a.anim.dodge(t.kind,t.dur,n),t.kind===`sidestep`){a.latStep=n*t.lateral;let e=Np(a.built,a.color);e.mat.opacity=.45,this.viewer.scene.add(e.group),this.ghosts.push({...e,t:0,dur:.35})}t.kind===`jump`&&(a.arc={from:r,to:i,t:0,dur:t.dur}),t.kind===`twist`&&(a.latStep=n*.15)}onDodgeLand(e,t){let n=this.get(e);if(t===`blink`){let t=n.pos.clone(),r=this.sim.worldPos(e),i=new Y(r.x,0,r.z).add(this.lateral(n)),a=1+Math.round(n.data.stats.mag/2);for(let e=0;e<a;e++){let r=Np(n.built,n.color),o=a===1?0:e/a;r.group.position.copy(t).lerp(i,o).sub(n.pos),r.mat.opacity=.55-.3*o,this.viewer.scene.add(r.group),this.ghosts.push({...r,t:0,dur:.45+.08*e})}n.pos.copy(i)}t===`jump`&&(n.arc=null)}spawnTrail(e){let t=this.get(e),n=Np(t.built,t.color);n.mat.opacity=.3,this.viewer.scene.add(n.group),this.ghosts.push({...n,t:0,dur:.6})}lateral(e){let t=this.sim.laneDir();return new Y(-t.z,0,t.x).multiplyScalar(e.lat)}update(e,t,n,r=t){this.viewer.fit(n),this.t+=t,this.modeT+=t,this.d=this.sim.d;for(let t of[this.player,this.enemy])this.updateCombatant(t,e);for(let t of[this.player,this.enemy]){let n=t.anim.state;if(n===`dead`||n===`knockback`||n===`turn`)continue;let i=this.other(t.side),a;a=this.mode===`cutin`&&t.side===this.cutinSide?Math.atan2(this.camPos.x-t.pos.x,this.camPos.z-t.pos.z):Math.atan2(i.pos.x-t.pos.x,i.pos.z-t.pos.z),t.anim.face(a,1-Math.exp(-(t.realTime?r:e)*9))}this.reachRing.position.set(this.player.pos.x,0,this.player.pos.z);let i=[[this.zoneRing,this.player],[this.enemyZoneRing,this.enemy]];for(let[e,t]of i)e.material.uniforms.uTime.value=this.t,e.position.set(t.pos.x,0,t.pos.z);for(let e=this.ghosts.length-1;e>=0;e--){let n=this.ghosts[e];n.t+=t;let r=n.t/n.dur;n.mat.opacity=Math.max(0,(1-r)*.55),r>=1&&(this.viewer.scene.remove(n.group),n.mat.dispose(),this.ghosts.splice(e,1))}this.updateCamera(t),this.player.anim.update(this.t,this.player.realTime?r:e),this.enemy.anim.update(this.t,this.enemy.realTime?r:e),this.viewer.render()}updateCombatant(e,t){let n=this.sim.fighters[e.side],r=this.sim.worldPos(e.side),i=(n.state===`dead`?0:.3)*Math.sin(this.t*.7+e.latPhase);e.latStep*=Math.exp(-t*.35);let a=i+e.latStep;e.lat+=(a-e.lat)*(1-Math.exp(-t*(Math.abs(e.latStep)>.05?14:3)));let o=this.lateral(e);Op.set(r.x,0,r.z).add(o);let s=kp.copy(e.pos);if(e.arc){e.arc.t+=t;let n=Math.min(1,e.arc.t/e.arc.dur),r=n<.5?2*n*n:1-(-2*n+2)**2/2;e.pos.set(e.arc.from.x+(e.arc.to.x-e.arc.from.x)*r,0,e.arc.from.z+(e.arc.to.z-e.arc.from.z)*r).add(o),n>=1&&(e.arc=null)}else{let n=1-Math.exp(-t*12);e.pos.lerp(Op,n)}e.built.group.position.copy(e.pos);let c=t>1e-5?s.distanceTo(e.pos)/t:0,l=e.arc?0:Math.min(1,c/_p(e.data.stats));e.speedSmooth+=(l-e.speedSmooth)*(1-Math.exp(-t*10)),e.anim.speed=e.speedSmooth;let u=n.dodgeCd/$.DODGE_CD;e.shadowMat.color.copy(jp).lerp(e.color,u*.85),e.shadowMat.opacity=.32+.22*u}autoFrame(e,t=!1){let n=this.player,r=this.enemy,i=new Y((n.pos.x+r.pos.x)/2,(n.height*.5+r.height*.5)/2,(n.pos.z+r.pos.z)/2),a=Math.hypot(n.pos.x-r.pos.x,n.pos.z-r.pos.z),o=Or.degToRad(Or.lerp(Ep.ELEV_NEAR,Ep.ELEV_FAR,Or.clamp((a-1)/5,0,1))),s=this.desiredYaw()+this.yawOffset;t?this.yaw=s:this.yaw+=Cf(s-this.yaw)*(1-Math.exp(-e/Ep.YAW_LAG));let c=Op.set(Math.sin(this.yaw)*Math.cos(o),Math.sin(o),Math.cos(this.yaw)*Math.cos(o)),l=kp.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),u=Ap.crossVectors(c,l).normalize(),d=this.viewer.camera,f=Math.tan(Or.degToRad(d.fov)/2),p=f*Math.max(.3,d.aspect),m=1-2*Ep.MARGIN_X,h=1-2*Ep.MARGIN_Y,g=Ep.D_MIN,_=new Y;for(let e of[n,r]){let t=e.height,n=e.built.rig.root.position.y*e.built.group.scale.y,r=.3*t;for(let a=0;a<8;a++){_.set(e.pos.x+(a&1?r:-r),e.pos.y+n+(a&2?t*1.08:-.02),e.pos.z+(a&4?r:-r)).sub(i);let o=_.dot(c),s=Math.abs(_.dot(l)),d=Math.abs(_.dot(u));g=Math.max(g,o+s/(p*m),o+d/(f*h))}}if(g=Math.min(Ep.D_MAX,g),!t){let t=Op.copy(i).addScaledVector(c,g),a=Math.atan2(n.pos.x-t.x,n.pos.z-t.z),o=Math.atan2(r.pos.x-t.x,r.pos.z-t.z),s=Math.abs(Cf(a-o)),l=Math.hypot(n.pos.x-t.x,n.pos.z-t.z)<Math.hypot(r.pos.x-t.x,r.pos.z-t.z),u=Math.atan2(.35*n.height,Math.max(1,Math.hypot(n.pos.x-t.x,n.pos.z-t.z)));if(l&&s<Or.degToRad(Ep.OCCLUDE_DEG)+u){let t=Cf(a-o)>=0?1:-1;this.yawOffset+=t*Ep.OCCLUDE_RATE*e}else this.yawOffset*=Math.exp(-e*.6);this.yawOffset=Or.clamp(this.yawOffset,-1.2,1.2)}return{look:i,dist:g,elev:o}}desiredYaw(){let e=this.player,t=this.enemy;return Math.atan2(e.pos.x-t.pos.x,e.pos.z-t.pos.z)+Or.degToRad(Ep.DIAG)}applyCamera(e,t,n,r){this.camPos.set(r.x+Math.sin(e)*Math.cos(t)*n,r.y+Math.sin(t)*n,r.z+Math.cos(e)*Math.cos(t)*n),this.camLook.copy(r)}updateFinishCamera(){let e=this.finishPush,t=.35*e,n=Math.cos(t),r=Math.sin(t),i=Op.set(this.finishBack.x*n+this.finishRight.x*r,0,this.finishBack.z*n+this.finishRight.z*r),a=kp.set(i.z,0,-i.x),o=this.finishH,s=Or.lerp(2.9,2.1,e)*o;this.camPos.copy(this.finishCenter).addScaledVector(i,s).addScaledVector(a,1.1*o).add(Ap.set(0,Or.lerp(.55,.42,e)*o,0)),this.camLook.copy(this.finishLook).lerp(this.finishTarget,.3*e)}updateCamera(e){switch(this.mode){case`intro`:{let t=1-(1-Math.min(1,this.modeT/2))**3,n=this.autoFrame(e),r=Or.lerp(n.dist*1.7,n.dist,t),i=Or.lerp(Or.degToRad(28),n.elev,t);this.dist=r,this.lookPt.lerp(n.look,1-Math.exp(-e/Ep.LAG)),this.applyCamera(this.yaw,i,this.dist,this.lookPt);break}case`auto`:{let t=this.autoFrame(e),n=1-Math.exp(-e/Ep.LAG);this.dist+=(t.dist-this.dist)*n,this.lookPt.lerp(t.look,n),this.applyCamera(this.yaw,t.elev,this.dist,this.lookPt);break}case`cast`:break;case`cutin`:{let e=1-(1-Or.clamp(this.cutinZoom,0,1))**2;this.camPos.copy(this.cutinFrom).lerp(this.cutinTo,e),this.camLook.copy(this.cutinLook);break}case`finish`:this.updateFinishCamera();break;case`result`:{let t=this.sim.winner??0,n=this.get(t),r=this.yaw+this.modeT*.22,i=Or.degToRad(24),a=Op.set(n.pos.x,n.height*.45,n.pos.z),o=3.2+n.height*1.4,s=kp.set(a.x+Math.sin(r)*Math.cos(i)*o,a.y+Math.sin(i)*o,a.z+Math.cos(r)*Math.cos(i)*o),c=1-Math.exp(-e*2.5);this.camPos.lerp(s,c),this.camLook.lerp(a,c);break}}this.viewer.camera.position.copy(this.camPos),this.viewer.camera.lookAt(this.camLook),this.viewer.camera.updateMatrixWorld()}showZone(e,t){let n=e===0?this.zoneRing:this.enemyZoneRing;t===null?n.visible=!1:(n.visible=!0,n.scale.setScalar(t))}setZoneSolid(e,t){let n=e===0?this.zoneRing:this.enemyZoneRing;n.material.uniforms.uDash.value=+!t,n.material.uniforms.uAlpha.value=t?1:e===0?.9:.7}get cameraDistance(){return this.dist}get cameraPosition(){return this.camPos}dispose(){for(let e of this.ghosts)this.viewer.scene.remove(e.group),e.mat.dispose();this.ghosts.length=0,this.player.built.dispose(),this.enemy.built.dispose(),this.viewer.dispose()}};function Np(e,t){let n=new Ba({color:t,transparent:!0,opacity:.5,depthWrite:!1}),r=new Ei;return e.group.updateMatrixWorld(!0),e.rig.root.traverse(e=>{let t=e;if(!t.isMesh||t.name===`outline`||t.name===`face`)return;let i=new Qa(t.geometry,n);i.matrixAutoUpdate=!1,i.matrix.copy(t.matrixWorld),r.add(i)}),{group:r,mat:n}}var Pp=`mb.tuning.v1`;function Fp(){try{let e=localStorage.getItem(Pp);return e?JSON.parse(e):{}}catch{return{}}}function Ip(e){let t=Fp();for(let n of e){let e=t[`${n.group}.${n.key}`];typeof e==`number`&&Number.isFinite(e)&&(n.obj[n.key]=e)}}function Lp(e,t){let n=Fp(),r=[],i=[];for(let t of e){let e=G(`input`,{type:`range`,min:String(t.min),max:String(t.max),step:String(t.step),style:`flex:1`});e.value=String(t.obj[t.key]);let a=G(`span`,{class:`small`,style:`width:52px; text-align:right`},Rp(t.obj[t.key]));e.addEventListener(`input`,()=>{let r=+e.value;t.obj[t.key]=r,a.textContent=Rp(r),n[`${t.group}.${t.key}`]=r,localStorage.setItem(Pp,JSON.stringify(n))}),i.push({f:t,input:e,out:a}),r.push(G(`label`,{class:`row small`,style:`gap:8px`},G(`span`,{style:`width:150px; color:var(--sub)`},t.label),e,a))}let a=G(`button`,{class:`btn sm ghost`},`既定に戻す`);return a.addEventListener(`click`,()=>{localStorage.removeItem(Pp);for(let e of Object.keys(n))delete n[e];for(let{f:e,input:n,out:r}of i){let i=t[`${e.group}.${e.key}`];typeof i==`number`&&(e.obj[e.key]=i,n.value=String(i),r.textContent=Rp(i))}}),G(`details`,{class:`card flat`,style:`padding:10px 14px`},G(`summary`,{class:`small sub`,style:`cursor:pointer`},`数値の調整(デバッグ。値は端末に残る)`),G(`div`,{class:`col`,style:`gap:6px; margin-top:8px`},...r,G(`div`,{class:`row`},a)))}function Rp(e){return Number.isInteger(e)?String(e):e.toFixed(2).replace(/0+$/,``).replace(/\.$/,``)}var zp={TAP_MS:250,TAP_PX:24,CAST_START_PX:40,CAST_START_PX_WINDOW:80,CAST_CANCEL_PX:60,CAST_CANCEL_MS:350,CAST_IDLE_MS:400,MAX_STROKES:6},Bp={FLASH:.1,CUTIN_CHARGE:.8,CUTIN_CHARGE_LOW:.4,CUTIN_DRAW:.6,CUTIN_FID:.35,CUTIN_FREEZE:.15,CUTIN_RELEASE:.4,CUTIN_NPC:1,CUTIN_MAX:3.4,FINISH_CHARGE:1.2,FINISH_CHARGE_SCALE:.15,FINISH_BRINK:.3,FINISH_BRINK_SCALE:.03,FINISH_HITSTOP:.3,FINISH_FLY:1,FINISH_FLY_SCALE:.3,FINISH_MAX:7,MISS_HITSTOP:.08,JUST_HITSTOP:.2},Vp=[{group:`balance`,obj:$,key:`INTERVAL_NUM`,label:`攻撃間隔の分子`,min:2,max:4.5,step:.1},{group:`balance`,obj:$,key:`ATK_BASE`,label:`通常攻撃 基本`,min:2,max:12,step:1},{group:`balance`,obj:$,key:`ATK_PER`,label:`通常攻撃 力あたり`,min:1,max:5,step:1},{group:`balance`,obj:$,key:`SIGN_K`,label:`印の係数`,min:30,max:150,step:5},{group:`balance`,obj:$,key:`CAST_TAKEN_MULT`,label:`詠唱中の被ダメ倍率`,min:1,max:2.5,step:.1},{group:`balance`,obj:$,key:`ZONE_BASE`,label:`ゾーン 基本`,min:1,max:3,step:.1},{group:`balance`,obj:$,key:`ZONE_PER`,label:`ゾーン 魔法あたり`,min:.1,max:.8,step:.05},{group:`balance`,obj:$,key:`ZONE_OUT_MULT`,label:`ゾーン外の係数`,min:.1,max:1,step:.05},{group:`balance`,obj:$,key:`TELEGRAPH_BASE`,label:`予兆 基本(秒)`,min:.5,max:1.5,step:.05},{group:`balance`,obj:$,key:`TELEGRAPH_PER`,label:`予兆 素早さあたり(−)`,min:0,max:.2,step:.01},{group:`balance`,obj:$,key:`DODGE_WINDOW`,label:`受付(残りの割合)`,min:.2,max:1,step:.05},{group:`balance`,obj:$,key:`DODGE_INV_BASE`,label:`無敵 基本(秒)`,min:.2,max:.6,step:.05},{group:`balance`,obj:$,key:`DODGE_CD`,label:`回避クールダウン`,min:.5,max:2.5,step:.1},{group:`balance`,obj:$,key:`JUST_WINDOW`,label:`ジャストの窓(秒)`,min:.05,max:.5,step:.05},{group:`balance`,obj:$,key:`JUST_DMG_MULT`,label:`ジャストの被ダメ倍率`,min:0,max:1,step:.05},{group:`balance`,obj:$,key:`GAUGE_DODGE`,label:`ゲージ 回避成功`,min:10,max:50,step:5},{group:`balance`,obj:$,key:`GAUGE_JUST`,label:`ゲージ ジャスト`,min:10,max:60,step:5},{group:`balance`,obj:$,key:`GAUGE_WHIFF`,label:`ゲージ 避けられた側`,min:0,max:20,step:1},{group:`balance`,obj:$,key:`HIT_RETREAT`,label:`被弾後に下がる確率`,min:0,max:1,step:.1},{group:`balance`,obj:$,key:`BEAT_JITTER`,label:`拍のゆらぎ(±)`,min:0,max:.2,step:.01},{group:`balance`,obj:$,key:`LUNGE_MAX`,label:`踏み込みで詰める距離`,min:0,max:4,step:.1},{group:`balance`,obj:$,key:`NPC_DODGE_BASE`,label:`NPC 回避 基本`,min:0,max:.5,step:.05},{group:`balance`,obj:$,key:`SPEED_BASE`,label:`移動速度 基本`,min:.3,max:1.6,step:.05},{group:`balance`,obj:$,key:`D_MAX`,label:`距離の上限`,min:3,max:10,step:.5},{group:`camera`,obj:Ep,key:`DIAG`,label:`カメラ 斜め(度)`,min:0,max:60,step:2},{group:`camera`,obj:Ep,key:`ELEV_NEAR`,label:`カメラ 仰角 近`,min:30,max:60,step:1},{group:`camera`,obj:Ep,key:`ELEV_FAR`,label:`カメラ 仰角 遠`,min:35,max:70,step:1},{group:`camera`,obj:Ep,key:`D_MIN`,label:`カメラ 距離の下限`,min:4,max:10,step:.25},{group:`camera`,obj:Ep,key:`D_MAX`,label:`カメラ 距離の上限`,min:8,max:16,step:.5},{group:`input`,obj:zp,key:`TAP_MS`,label:`タップ(ms 以内)`,min:100,max:400,step:10},{group:`input`,obj:zp,key:`TAP_PX`,label:`タップ(px 未満)`,min:6,max:40,step:2},{group:`input`,obj:zp,key:`CAST_START_PX`,label:`詠唱開始(px)`,min:10,max:120,step:5},{group:`input`,obj:zp,key:`CAST_START_PX_WINDOW`,label:`詠唱開始 受付中(px)`,min:20,max:200,step:5},{group:`input`,obj:zp,key:`CAST_CANCEL_PX`,label:`取り消し 総長(px 未満)`,min:0,max:150,step:5},{group:`timing`,obj:Bp,key:`FINISH_CHARGE_SCALE`,label:`決着のスロー倍率`,min:.05,max:.5,step:.05},{group:`timing`,obj:Bp,key:`CUTIN_CHARGE`,label:`カットインのタメ(秒)`,min:.2,max:1.5,step:.1}],Hp=Object.fromEntries(Vp.map(e=>[`${e.group}.${e.key}`,e.obj[e.key]]));function Up(e,t,n,r){let i=G(`div`,{class:`screen`});e.append(i);let a=null;Ip(Vp);let o=()=>{tt(i),i.classList.add(`scroll`);let e=G(`div`,{class:`npc-grid`});for(let t of dp){let n=t.monster,r=G(`div`,{class:`card mcard`,style:`cursor:pointer`},G(`div`,{class:`thumb`,style:`background:${n.color}; display:grid; place-items:center; color:#fff; font-weight:700`},t.label.slice(0,1)),G(`div`,{class:`grow`},G(`h2`,{},`${n.name} `,G(`span`,{class:`chip`},t.label)),G(`p`,{class:`sub small`},t.desc),G(`p`,{class:`small sub`},`${Re[n.skeleton]} ・ 体力${$e(n.stats.hp)} 素早さ${$e(n.stats.spd)}`),G(`p`,{class:`small sub`},`力${$e(n.stats.atk)} 魔法${$e(n.stats.mag)} ・ 印の射程 ${gp(n.stats).toFixed(1)}`)));r.addEventListener(`click`,()=>s(t)),e.append(r)}i.append(G(`div`,{class:`pad col`},G(`h1`,{},`相手を選ぶ`),G(`p`,{class:`sub`},`${t.name} で挑む。相手の周りのリングが縮んで白くなったらタップで回避(輪郭に重なる瞬間が当たる瞬間)。相手の印は自分の周りのリングが白くなったらタップでジャスト回避。ゲージが溜まったら画面のどこでも、なぞって印。`),t.sign?null:G(`div`,{class:`notice`},`この子はまだ印を覚えていない。必殺は撃てないが、バトルはできる(回避はできる)。`),e,G(`div`,{class:`row`},G(`button`,{class:`btn ghost`,onClick:()=>r({name:`card`,id:t.id})},`← カードへ`)),Lp(Vp,Hp)))},s=e=>{d(),a?.(),i.classList.remove(`scroll`),tt(i),a=Wp(i,t,e,r,()=>s(e),o)},c=n?dp.find(e=>e.key===n):void 0;return c?s(c):o(),{unmount(){a?.(),i.remove()}}}function Wp(e,t,n,r,i,a){let o=Je(),s=G(`div`,{class:`stage`}),c=G(`canvas`,{class:`layer`,style:`pointer-events:none`}),l=G(`canvas`,{class:`layer`}),u=G(`canvas`,{class:`layer`,style:`pointer-events:none`});s.append(c,l,u);let f=G(`div`,{class:`layer input`}),p=G(`div`,{class:`pulse`,style:`--pulse-color:${t.color}`});e.style.background=`#FFFFFF`,e.append(s,p,f);let m=G(`i`,{style:`width:100%`}),h=G(`i`,{style:`width:0%; background:${n.monster.color}`}),g=G(`i`,{style:`width:100%`}),_=G(`i`,{style:`width:0%`}),v=G(`div`,{class:`gauge`},_),y=G(`div`,{class:`hud`,style:`top: calc(var(--sat) + 14px); padding: 0 18px`},G(`div`,{class:`row`,style:`justify-content:flex-end`},G(`div`,{style:`width:62%`},G(`div`,{class:`row small`,style:`justify-content:space-between`},G(`span`,{class:`chip`},n.label),G(`b`,{},n.monster.name)),G(`div`,{class:`hpbar enemy`},m),G(`div`,{class:`gauge enemy`},h)))),x=G(`div`,{class:`hint dark`,style:`top: calc(var(--sat) + 76px); font-size:15px`},``),S=G(`div`,{class:`hud`,style:`bottom: calc(var(--sab) + 14px); padding: 0 18px`},G(`div`,{class:`row`,style:`align-items:flex-end`},G(`div`,{class:`grow`},G(`div`,{class:`row small`,style:`justify-content:space-between`},G(`b`,{},t.name),G(`span`,{class:`sub`},t.sign?`ゲージ(溜まったら、なぞって印)`:`ゲージ(印なし)`)),G(`div`,{class:`hpbar`},g),G(`div`,{style:`height:6px`}),v))),C=G(`button`,{class:`btn sm ghost`,style:`position:absolute; left:14px; top: calc(var(--sat) + 12px); background:#fff`},`← やめる`);e.append(y,x,S,C);let w=t.sign?ep(t.sign):0,E=new Cp({name:t.name,stats:t.stats,skeleton:t.skeleton,isPlayer:!0,signComplexity:w},{name:n.monster.name,stats:n.monster.stats,skeleton:n.monster.skeleton,isPlayer:!1,signComplexity:ep(n.sign),npcFidelity:.7,npcCastSeconds:$.NPC_CAST_SECONDS}),O=new Mp(l,t,n.monster,E);O.player.anim.telegraphGlow=!1;let k=u.getContext(`2d`),A=c.getContext(`2d`),M=new Af(k),N=new j,P=`intro`,ee=0,F=1,te=0,ne=0,re=0,I=!1,ie=[],ae=null,oe=0,se=0,ce=0,le=0,R=null,ue=[],de=0,fe=[],z=null,pe=!1,me=0,he=0,ge=!1,_e=0,ve=performance.now(),B=!1,ye=!1,V=390,be=844,H=t.color,xe=n.monster.color,U=[],W=!1,Se=!1,Ce=!1,we=[],Te=e=>{x.textContent!==e&&(x.textContent=e)},Ee=()=>P===`fight`&&!I&&!z&&!fe.length&&!!t.sign&&E.fighters[0].gauge>=$.GAUGE_FULL&&E.fighters[0].state!==`dead`,De=()=>P===`fight`&&!B&&(!z||z.kind===`finish`&&!!E.incoming(0)),Oe=()=>!!E.telegraphInfo(1)?.open,ke=()=>{let e=E.fighters[0],t=E.fighters[1];m.style.width=`${Math.max(0,(t.hp+ne)/t.maxHp*100)}%`,h.style.width=`${Math.min(100,t.gauge/$.GAUGE_FULL*100)}%`,g.style.width=`${Math.max(0,(e.hp+re)/e.maxHp*100)}%`,_.style.width=`${Math.min(100,e.gauge/$.GAUGE_FULL*100)}%`,p.classList.toggle(`on`,Ee())},Ae=()=>{let t=v.getBoundingClientRect(),n=e.getBoundingClientRect(),r=Math.min(1,E.fighters[0].gauge/$.GAUGE_FULL);return{x:t.left-n.left+t.width*Math.max(.08,r),y:t.top-n.top+t.height/2}};window.__mbBattle={sim:E,scene:O,get phase(){return P},get casting(){return I},get current(){return z?{kind:z.kind,side:z.side,t:z.t}:null},get queue(){return fe.map(e=>e.kind)},get timeScale(){return F},get hitStop(){return te},get mode(){return O.mode},debugCast(e=1){Ue(e)},tap(){Re()}},O.player.anim.play(`summon`),O.enemy.anim.play(`summon`),O.player.anim.summonProgress=0,O.enemy.anim.summonProgress=0;let je=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},Me=(e,t)=>({x:e/V,y:t/V,t:Math.round(performance.now()-oe)}),Ne=()=>{le&&(clearTimeout(le),le=0)},Pe=(e,t,n)=>{T.extra.touch=`${e.toFixed(0)}ms ${t.toFixed(0)}px → ${n}`},Fe=e=>{!I||ie.length>=zp.MAX_STROKES||(Ne(),ie.length===0&&!ae&&(oe=performance.now()),ae=e.map(e=>Me(e.x,e.y)),ae.length||(ae=null))},Ie=(e,t)=>{if(!ae)return;let n=Me(e,t),r=ae[ae.length-1];Math.hypot(n.x-r.x,n.y-r.y)<.002||ae.push(n)},Le=()=>{ae&&(ae.length===1&&ae.push({...ae[0],x:ae[0].x+.001,t:ae[0].t+1}),ie.push(ae),ae=null,Ne(),ie.length===1&&ce<zp.CAST_CANCEL_PX&&performance.now()-se<zp.CAST_CANCEL_MS?(E.cancelCast(0),Ve(),Pe(performance.now()-se,ce,`cancel→tap`),D(`cast cancelled (too short) → tap`),Re()):ie.length>=zp.MAX_STROKES?He(ie):le=window.setTimeout(()=>{le=0,I&&ie.length>0&&He(ie)},zp.CAST_IDLE_MS))},Re=()=>{if(!De()||I)return;let e=E.tap(0,we);e===`dodge`?b(`dodge`):e===`just`&&b(`just`),e!==`ignored`&&D(`tap → ${e} (enemy ${E.fighters[1].state})`)};f.addEventListener(`pointerdown`,e=>{if(d(),!De()||R)return;let{x:t,y:n}=je(e);R={id:e.pointerId,x0:t,y0:n,t0:performance.now(),pts:[{x:t,y:n}],len:0,castStarted:!1},f.setPointerCapture?.(e.pointerId),e.preventDefault(),I&&(R.castStarted=!0,Fe([{x:t,y:n}]))}),f.addEventListener(`pointermove`,e=>{if(!R||e.pointerId!==R.id)return;let{x:t,y:n}=je(e),r=R.pts[R.pts.length-1];if(R.len+=Math.hypot(t-r.x,n-r.y),R.pts.push({x:t,y:n}),I)R.castStarted?Ie(t,n):(R.castStarted=!0,Fe(R.pts)),ce=R.len;else if(R.len>=zp.TAP_PX){let e=Oe()?zp.CAST_START_PX_WINDOW:zp.CAST_START_PX;R.len>=e&&Ee()&&E.startCast(0)===`now`?(Be(),se=R.t0,ce=R.len,R.castStarted=!0,oe=R.t0,Fe(R.pts),Pe(performance.now()-R.t0,R.len,`cast`),ue=[]):Ee()||(ue=R.pts.slice(),de=1)}e.preventDefault()});let ze=e=>{if(!R||e.pointerId!==R.id)return;let t=R;R=null;let n=performance.now()-t.t0;t.castStarted||I?Le():(Pe(n,t.len,n<=zp.TAP_MS&&t.len<zp.TAP_PX?`tap`:`tap(long)`),Re())};f.addEventListener(`pointerup`,ze),f.addEventListener(`pointercancel`,ze);let Be=()=>{I=!0,ie=[],ae=null,O.setMode(`cast`),O.player.anim.play(`cast`),Te(`印を描いて!(指を離して0.4秒で発動)`)},Ve=()=>{I=!1,Ne(),ie=[],ae=null,O.mode===`cast`&&O.setMode(`auto`),E.fighters[0].state===`idle`&&O.player.anim.state===`cast`&&O.player.anim.play(`idle`)},He=e=>{if(!I||E.ended||B)return;let n=t.sign,r=$f(n,e),i=E.finishCast(0,r.similarity),a=i.find(e=>e.type===`sign-fire`);Ve(),Te(``),a&&(D(`sign fired: fidelity=${(r.similarity*100).toFixed(0)}% d=${r.distance.toFixed(3)} zone=${a.inZone} dmg=${a.damage} lethal=${a.lethal}`),ne+=a.damage,We(qe({side:0,fidelity:r.similarity,inZone:a.inZone,dmg:a.damage,drawn:e,reg:n,penalty:r.strokePenalty,npc:!1})),a.lethal&&We(Xe(0,`sign`)),et(i.filter(e=>e.type!==`sign-fire`)))},Ue=e=>{if(P!==`fight`||I||E.startCast(0)!==`now`)return;Be();let n=Array.from({length:24},(e,t)=>{let n=-Math.PI/2+t/23*Math.PI*2;return{x:.5+.2*Math.cos(n),y:.6+.2*Math.sin(n),t:t*20}}),r=(t.sign??[n]).map(t=>t.map((t,n)=>({...t,x:t.x+(1-e)*.12*Math.sin(n),y:t.y+(1-e)*.12*Math.cos(n*1.3)})));He(r)},We=e=>{let t=fe.length;if(e.kind===`cutin`&&e.side===0)for(t=0;t<fe.length&&fe[t].kind===`cutin`&&fe[t].side===0;)t++;else if(e.kind===`cutin`)for(t=0;t<fe.length&&fe[t].kind===`cutin`;)t++;fe.splice(t,0,e)},Ge=()=>{z&&(z.end(),z=null,!fe.length&&P===`fight`&&O.setMode(`auto`))},Ke=e=>{if(!z&&fe.length&&(z=fe.shift(),z.t=0,z.start(),D(`cinematic start: ${z.kind} side=${z.side}`)),z){z.t+=e;let t=z.update(e);(t||z.t>z.maxDur)&&(t||D(`cinematic timeout: ${z.kind}`),Ge())}},qe=e=>{let t=e.side===0?H:xe,n=e.fidelity<.6,r=Bp.FLASH+Bp.CUTIN_CHARGE+Bp.CUTIN_DRAW+Bp.CUTIN_FID+Bp.CUTIN_FREEZE+Bp.CUTIN_RELEASE,i=e.npc?Bp.CUTIN_NPC/r:1,a=Bp.FLASH*i,o=(n?Bp.CUTIN_CHARGE_LOW:Bp.CUTIN_CHARGE)*i,s=Bp.CUTIN_DRAW*i,l=(e.npc?.05:Bp.CUTIN_FID)*i,u=Bp.CUTIN_FREEZE*i,d=Bp.CUTIN_RELEASE*i,f=a,p=f+o,m=p+s,h=m+l,g=h+u,_=g+d,v=n?.35:e.fidelity>=.9?1:.7,y=!1,x=!1,S=!1,C=O.get(e.side);return{kind:`cutin`,side:e.side,t:0,maxDur:Math.min(Bp.CUTIN_MAX,_+.6),start(){te=1/0,M.flash(a),Te(``)},update(){let r=this.t;if(!y&&r>=f&&(y=!0,O.setMode(`cutin`,{side:e.side}),C.anim.chargePower=v,C.anim.play(`charge`)),y){O.cutinZoom=Math.min(1,(r-f)/Math.max(.1,o+s+l)),pe=r>=h&&r<g;let i=e.fidelity>=.9?`lines`:n?`dots`:`mix`;Ef(c,V,be);let a=Math.min(1,(r-f)/Math.max(.1,o));Lf(A,V,be,t,i,pe?h:r,a),ye=!0;let u=O.screenHeight(e.side),d=O.screenPos(e.side,`feet`),y=O.screenPos(e.side,`chest`),w=r<p?Math.min(1,(r-f)/.25):Math.max(0,1-(r-p)/.3);if(Rf(k,d.x,d.y,u,t,w,v,pe?h:r),r>=p){let i=Math.min(1,(r-p)/Math.max(.05,s)),a=Math.min(V*.5,Math.max(120,u*.6));zf(k,e.reg,e.drawn,y.x,y.y-u*.05,a,t,i,+!!n,r)}!S&&r>=m&&(S=!0,M.fidelity(V/2,be*(e.side===0?.2:.22),e.fidelity,t,e.side===0?e.inZone:null,Math.max(.3,_-r+.05),e.penalty,e.npc?.01:l)),!x&&r>=g&&(x=!0,b(`release`),C.anim.play(`release`))}return r>=_},end(){pe=!1,ye=!0,te=0,O.setMode(`auto`),C.anim.play(`attack`),Ye(e)}}},Ye=e=>{let t=e.side,n=+(t===0),r=t===0?H:xe,i=O.screenPos(t,`chest`),a=Math.min(170,V*.42),o=Gp(e.drawn,i.x-a/2,i.y-a/2,a),s=O.screenPos(n,`center`),c=E.incoming(n),l=c?Math.max(.05,c.dur-c.t):$.SIGN_FLIGHT,u=!1,d=M.signFly(o,i,s,r,()=>{let e=U.findIndex(e=>e.handle===d);e>=0&&U.splice(e,1),u&&M.hit(d.to.x,d.to.y,!0,r)},l),f=d.divert;d.divert=e=>{u=!0,f(e)},U.push({target:n,handle:d})},Xe=(e,t)=>{let n=`charge`,r=0,i=0,a=!1,o=+(e===0),s=()=>{if(t===`strike`){let t=E.fighters[e];return t.state===`strike`?Math.max(.01,$.STRIKE_CONTACT-t.stateT):.02}let n=E.incoming(o);return n?Math.max(.01,n.dur-n.t):.02};return{kind:`finish`,side:e,t:0,maxDur:Bp.FINISH_MAX,start(){let n=s(),r=Bp.FINISH_BRINK*Bp.FINISH_BRINK_SCALE;if(F=Math.max(.005,Math.min(Bp.FINISH_CHARGE_SCALE,(n-r)/Bp.FINISH_CHARGE)),O.setMode(`finish`,{attacker:e}),O.finishPush=0,Te(``),I){let e=[...ie,...ae?[ae]:[]].map(e=>e.map(e=>({x:e.x*V,y:e.y*V,t:e.t})));M.signScatter(e,H,1.6),M.text(V/2,be*.4,`不発…`,`#E0603A`,1.6,30),Ve()}D(`finish by ${t}, attacker=${e}, scale=${F.toFixed(3)}`)},update(o){switch(r+=o,n!==`fall`&&O.setDim(Math.min(1,O.dimLevel+o*3)),n){case`charge`:O.finishPush=Math.min(1,r/Bp.FINISH_CHARGE),i+=o,i>.09&&t===`strike`&&(i=0,O.spawnTrail(e)),r>=Bp.FINISH_CHARGE&&(n=`brink`,r=0,F=Bp.FINISH_BRINK_SCALE);break;case`brink`:O.player.anim.outlineBoost=1,O.enemy.anim.outlineBoost=1,me=Math.min(1,r/Bp.FINISH_BRINK),r>=Bp.FINISH_BRINK&&(n=`wait`,r=0,F=.12);break;case`wait`:r>1&&(F=1);break;case`stop`:te<=0&&(n=`fly`,r=0,F=Bp.FINISH_FLY_SCALE,me=0);break;case`fly`:r>=Bp.FINISH_FLY&&(n=`fall`,r=0,F=1,O.get(e).anim.play(`win`));break;case`fall`:if(O.setDim(Math.max(0,O.dimLevel-o*1.5)),!a&&r>=.6){a=!0;let e=E.winner===0;M.callout(V/2,be*.42,e?`かち!`:`まけ…`,e?H:`#E0603A`,1.4,Math.min(72,V*.18),e?-.08:.06)}if(r>=1.8)return!0}return!1},end(){F=1,me=0,he=0,O.setDim(0),E.ended?nt():O.setMode(`auto`)},onHit(){n!==`stop`&&n!==`fly`&&n!==`fall`&&(n=`stop`,r=0)}}},Ze=e=>{z&&z.kind===`finish`||fe.some(e=>e.kind===`finish`)||We(Xe(e,`strike`)),M.flash(.14,1),b(`finish`),te=Bp.FINISH_HITSTOP,he=.45,O.player.anim.outlineBoost=1,O.enemy.anim.outlineBoost=1;let t=O.get(+(e===0)),n=O.get(e);t.anim.knockback(.9+.4*(n.data.stats.atk-1)/4),z?.onHit?.()},Qe=()=>{z&&z.kind===`finish`&&(D(`finish cancelled by just dodge`),F=1,me=0,O.player.anim.outlineBoost=0,O.enemy.anim.outlineBoost=0,O.setDim(0),z=null,fe.length||O.setMode(`auto`))},$e=(e,t)=>{let n=O.screenPos(0,`head`),r=Ae(),i=t===`just`?34:t===`dodge`?30:18;M.gaugeFly({x:n.x,y:n.y-24},r,`+${e}`,i,()=>{v.classList.remove(`bump`,`flash`),v.offsetWidth,v.classList.add(`bump`,`flash`);let e=Ae();M.sparkle(e.x,e.y,t===`hit`?3:6)})},et=e=>{for(let r of e)switch(r.type){case`attack-start`:{let e=O.get(r.who);e.anim.telegraphDur=r.telegraph,e.anim.play(`telegraph`),r.who===1&&z?.kind!==`finish`&&b(`tele`),W=!1;break}case`strike`:O.get(r.who).anim.play(`strike`),r.willHit&&r.lethal&&We(Xe(r.who,`strike`));break;case`hit`:{let e=O.screenPos(r.target,`center`);M.hit(e.x,e.y,r.castingBonus,r.who===0?H:xe),M.damage(e.x,e.y-8,r.damage,r.castingBonus);let t=O.get(r.target);if(r.who===1){let e=O.screenPos(1,`center`);M.ringClose(e.x,e.y,O.screenRadius(1))}E.fighters[r.target].state===`dead`?Ze(r.who):(b(`hit`),E.fighters[r.target].state===`casting`?t.anim.flashOnly():t.anim.play(`hit`));break}case`miss`:{let e=O.screenPos(r.target,`head`),t=r.target===0?H:xe;M.callout(e.x+(r.target===0?70:-70),e.y-30,`スカ!`,t,.5,40,r.target===0?-.12:.12);let n=O.screenPos(r.who,`chest`),i=O.screenPos(r.target,`chest`),a=Math.atan2(i.y-n.y,i.x-n.x);if(M.slash(n.x+Math.cos(a)*50,n.y+Math.sin(a)*50,a+.4,Math.max(60,O.screenHeight(r.who)*.6)),O.get(r.who).anim.play(`stumble`),te=Math.max(te,Bp.MISS_HITSTOP),r.who===1){let e=O.screenPos(1,`center`);M.ringShatter(e.x,e.y,O.screenRadius(1))}break}case`dodge`:if(O.onDodge(r.who,r.spec,r.dir,r.from,r.to),r.spec.kind===`sidestep`){let e=O.screenPos(r.who,`feet`);M.dust(e.x,e.y,r.dir*(r.who===0?1:-1))}break;case`dodge-land`:if(O.onDodgeLand(r.who,r.kind),r.kind===`jump`){let e=O.screenPos(r.who,`feet`);M.shock(e.x,e.y,(O.get(r.who).data.stats.atk-1)/4)}break;case`gauge`:r.who===0&&r.reason!==`taken`&&$e(r.amount,r.reason);break;case`gauge-full`:r.who===0&&t.sign&&b(`full`),r.who===0&&t.sign&&M.callout(V/2,be*.44,`印を刻め!!`,H,.7,Math.min(54,V*.13));break;case`cast-start`:r.who===1&&(O.enemy.anim.play(`cast`),O.showZone(1,r.zoneR),Te(`${n.monster.name} が印を描いている…`));break;case`sign-fire`:r.who===1&&(Te(``),O.showZone(1,null),re+=r.damage,We(qe({side:1,fidelity:r.fidelity,inZone:r.inZone,dmg:r.damage,drawn:n.sign,reg:null,penalty:!1,npc:!0})),r.lethal&&We(Xe(1,`sign`)),D(`npc sign: fidelity=${r.fidelity} zone=${r.inZone} dmg=${r.damage} lethal=${r.lethal}`));break;case`just`:{{let e=O.screenPos(0,`center`);M.ringShatter(e.x,e.y,O.screenRadius(0))}let e=O.screenPos(0,`head`);M.callout(e.x,e.y-60,`ジャスト!!`,H,.9,Math.min(64,V*.15),-.1),te=Math.max(te===1/0?0:te,Bp.JUST_HITSTOP);let t=O.screenPos(0,`center`),n=O.screenPos(1,`center`),r=t.x-n.x,i=t.y-n.y,a=Math.hypot(r,i)||1;for(let e of U)e.target===0&&e.handle.divert({x:t.x+r/a*110+-i/a*60,y:t.y+i/a*110+r/a*60});Qe();break}case`sign-hit`:{r.target===0?re=0:ne=0;let e=O.screenPos(r.target,`center`),t=r.who===0?H:xe;r.just||M.hit(e.x,e.y,!0,t),M.damage(e.x,e.y-10,r.damage,r.castingBonus&&!r.just);let n=O.get(r.target);r.target===0&&!r.just&&M.ringClose(e.x,e.y,O.screenRadius(0)),E.fighters[r.target].state!==`dead`&&b(`hit`),E.fighters[r.target].state===`dead`?Ze(r.who):r.just||E.fighters[r.target].state===`casting`?n.anim.flashOnly():n.anim.play(`hit`);break}case`sign-fizzle`:r.who===1&&(O.showZone(1,null),Te(``));break;case`dead`:break;case`end`:!z&&!fe.some(e=>e.kind===`finish`)&&We(Xe(r.winner,r.by))}},nt=()=>{if(ge||B)return;ge=!0,P=`result`,Ve(),O.setDim(0),O.setMode(`result`),p.classList.remove(`on`);let o=E.winner===0,s=E.fighters[0],c=E.fighters[1],l=s.signs,u=l.filter(e=>e.inZone).length,d=c.attacks?Math.round(s.dodgeSuccess/c.attacks*100):0,f=(e,t)=>G(`tr`,{},G(`td`,{},e),G(`td`,{},t)),m=G(`div`,{class:`result-box fade-in`},G(`div`,{class:`card`,style:`width: min(88vw, 380px)`},G(`div`,{class:`big`,style:`color:${o?L:`#E0603A`}`},o?`かち!`:`まけ…`),G(`p`,{class:`sub small`},`${n.monster.name} と ${E.time.toFixed(0)}秒で決着(${E.endedBy===`sign`?`印`:`通常攻撃`})`),G(`table`,{class:`stat result-stats`},f(`決着時間`,`${E.time.toFixed(1)}秒`),f(`残りHP`,`${t.name} ${s.hp}/${s.maxHp} ・ ${n.monster.name} ${c.hp}/${c.maxHp}`),f(`印の回数`,l.length?`${l.length}回: ${l.map(e=>`${(e.fidelity*100).toFixed(0)}% ${e.inZone?`内`:`外`} ${e.damage}`).join(` / `)}`:t.sign?`0回`:`印なし`),f(`ゾーン内率`,l.length?`${Math.round(u/l.length*100)}%(${u}/${l.length})`:`-`),f(`回避成功率`,`${d}%(${s.dodgeSuccess}/${c.attacks}、空振り ${s.whiffs})`),f(`ジャスト回避`,c.signs.length?`${s.justSuccess}回 / 相手の印 ${c.signs.length}回`:`-`),l.length?G(`tr`,{class:`tiny`},G(`td`,{},`描き始め`),G(`td`,{},l.map((e,t)=>`#${t+1} ${e.ringRemain===null?`リングなし`:`リング残り ${Math.round(e.ringRemain*100)}%`}・次の拍 ${e.nextBeatIn.toFixed(1)}s`).join(` / `))):null,f(`与ダメージ`,`${s.damageDealt}(相手 ${c.damageDealt}、相手の回避 ${c.dodgeSuccess}回)`)),G(`div`,{style:`height:12px`}),G(`div`,{class:`col`},G(`button`,{class:`btn primary`,onClick:i},`もう一度`),G(`button`,{class:`btn`,onClick:a},`相手を変える`),G(`button`,{class:`btn ghost`,onClick:()=>r({name:`card`,id:t.id})},`カードへ`))));e.append(m)};C.addEventListener(`click`,()=>r({name:`card`,id:t.id}));let rt=n=>{if(B)return;_e=requestAnimationFrame(rt);let r=Math.min(.05,(n-ve)/1e3);ve=n,N.tick();let i=e.getBoundingClientRect();V=i.width,be=i.height,Ef(u,V,be),k.clearRect(0,0,V,be);let a=r*F;if(te>0&&(te!==1/0&&(te-=r),a=0),P===`intro`){ee+=r;let e=Math.min(1,ee/2);O.player.anim.summonProgress=e,O.enemy.anim.summonProgress=e,e>=1?(P=`fight`,O.player.anim.play(`idle`),O.enemy.anim.play(`idle`),O.setMode(`auto`),Te(``)):Te(`対面!`)}else if(P===`fight`){we.length&&et(we.splice(0)),et(E.update(a)),Ke(r);let e=z?.kind===`finish`?.8:3;O.player.anim.outlineBoost=Math.max(0,O.player.anim.outlineBoost-r*e),O.enemy.anim.outlineBoost=Math.max(0,O.enemy.anim.outlineBoost-r*e)}if(he>0){let e=he/.45;s.style.transform=`translate(${(Math.random()-.5)*14*e}px, ${(Math.random()-.5)*14*e}px)`,he-=r}else s.style.transform&&(s.style.transform=``);if(O.update(a,r,e,pe?0:r),P===`fight`){let e=z?.kind===`cutin`;if(!e){let e=E.fighters[1],t=z?.kind===`finish`;if(e.gauge>=70&&e.state!==`casting`&&e.state!==`dead`){let t=O.screenPos(1,`center`);Ff(k,t.x,t.y,O.screenRadius(1),xe,Math.min(1,(e.gauge-70)/30),O.t)}let n=E.ringRemain(1);if(n!==null){let e=E.telegraphInfo(1),r=!e||e.open;r&&!W&&!t&&b(`open`),W=r;let i=O.screenPos(1,`center`),a=O.screenRadius(1);Pf(k,i.x,i.y,a*(1+2.2*n),xe,r);let o=O.screenPos(1,`feet`),s=O.screenPos(0,`feet`);e&&Nf(k,o.x,o.y+4,Math.atan2(s.y-o.y,s.x-o.x),1-e.remain,26)}if(e.state===`casting`){let t=Math.max(0,1-e.stateT/$.NPC_CAST_SECONDS),n=O.screenPos(1,`center`),r=O.screenRadius(1);Pf(k,n.x,n.y,r*(1.4+1.8*t),xe,!1,!0)}let r=E.incoming(0);if(r&&!r.just){let e=Math.max(0,1-r.t/r.dur),t=r.dur-r.t<=$.JUST_WINDOW;t&&!Se&&b(`open`),Se=t;let n=O.screenPos(0,`center`),i=O.screenRadius(0),a=Math.min(1,r.t/.15),o=a*(2-a),s=O.screenPos(1,`center`),c=O.screenRadius(1),l=s.x+(n.x-s.x)*o,u=s.y+(n.y-s.y)*o,d=c*1.4+(i*(1+2.2*e)-c*1.4)*o;Pf(k,l,u,d,xe,t)}else Se=!1}let n=!!t.sign&&(I||E.fighters[0].gauge>=$.GAUGE_FULL&&E.fighters[0].state!==`dead`);if(n!==Ce&&(Ce=n,O.showZone(0,n?gp(t.stats):null)),Ce&&O.setZoneSolid(0,E.inZone(0)),E.fighters[1].state===`casting`&&O.setZoneSolid(1,E.inZone(1)),I){if(k.fillStyle=`rgba(255,255,255,0.22)`,k.fillRect(0,0,V,be),o.castGuide&&t.sign){let e=Math.min(V,be)*.62;Df(k,t.sign,(V-e)/2,(be-e)/2-20,e,{color:`#B5B1A8`,width:10,alpha:.4})}Tf(k,ie,ae,{scale:V,color:L,width:11}),Tf(k,ie,ae,{scale:V,color:H,width:7,glow:!0})}ue.length&&(R||(de-=r*2.5),de<=0?(ue=[],de=0):Bf(k,ue,Math.min(1,de))),!e&&ye&&(Ef(c,V,be),A.clearRect(0,0,V,be),ye=!1),If(k,V,be,me)}M.update(r,V,be,a),ke(),T.extra.phase=P,T.extra.t=E.time.toFixed(1),T.extra.d=E.d.toFixed(2),T.extra.cam=O.cameraDistance.toFixed(1),T.extra.scale=F.toFixed(2),T.extra.cine=z?`${z.kind}:${z.t.toFixed(1)}`:fe.length?`queued ${fe.length}`:`-`,T.extra.intent=`${E.fighters[0].intent}/${E.fighters[1].intent}`};return _e=requestAnimationFrame(rt),()=>{B=!0,cancelAnimationFrame(_e),Ne(),O.dispose(),tt(e)}}function Gp(e,t,n,r){let i=1/0,a=1/0,o=-1/0,s=-1/0;for(let t of e)for(let e of t)e.x<i&&(i=e.x),e.y<a&&(a=e.y),e.x>o&&(o=e.x),e.y>s&&(s=e.y);let c=Math.max(1e-6,o-i),l=Math.max(1e-6,s-a),u=r*.8/Math.max(c,l),d=t+(r-c*u)/2-i*u,f=n+(r-l*u)/2-a*u;return e.map(e=>e.map(e=>({x:d+e.x*u,y:f+e.y*u,t:e.t})))}var Kp=document.getElementById(`app`),qp=null,Jp=e=>{switch(qp?.unmount(),qp=null,e.name){case`home`:qp=nt(Kp,Jp);break;case`summon`:qp=ip(Kp,e.mode,Jp);break;case`card`:{let t=qe(e.id);qp=t?tp(Kp,t,Jp):nt(Kp,Jp);break}case`sign`:{let t=qe(e.id);qp=t?op(Kp,t,Jp):nt(Kp,Jp);break}case`battle`:{let t=qe(e.id);qp=t?Up(Kp,t,e.npc,Jp):nt(Kp,Jp);break}}};O(),Jp({name:`home`});