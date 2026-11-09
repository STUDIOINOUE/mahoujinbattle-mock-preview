const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./esm-B8YUdFrb.js","./dist-BW-B4pLB.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`v0.4.8`;function t(){return[[`APP_VERSION`,e],[`SIM_VERSION`,1],[`BALANCE_VERSION`,1],[`GEN_VERSION`,1],[`SIGN_VERSION`,1],[`SAVE_SCHEMA`,2],[`OBJECT_READ_VERSION`,1],[`SHARE_CODE_VERSION`,1],[`LOG_VERSION`,1]]}var n={"common.toHome":`← ホーム`,"common.toCard":`← カードへ`,"common.toBattle":`この子でバトルへ`,"common.learnSign":`印を覚えさせる`,"common.again":`もう一度`,"common.circleAlt":`魔法陣`,"common.sep":` ・ `,"stat.hp":`体力`,"stat.spd":`素早さ`,"stat.atk":`力`,"stat.mag":`魔法`,"skeleton.biped":`二足`,"skeleton.quadruped":`四足`,"skeleton.multileg":`多足`,"skeleton.serpent":`長物`,"skeleton.floating":`浮遊`,"size.S":`小型`,"size.M":`中型`,"size.L":`大型`,"part.horn":`角`,"part.spike":`トゲ`,"part.wing":`翼`,"part.tail":`尾`,"part.antenna":`触角`,"part.fin":`ヒレ`,"part.ornament":`首輪`,"mark.spots":`斑点`,"mark.stripes":`縞`,"npc.tank.label":`体力型`,"npc.tank.desc":`どっしり耐えて、ゆっくり大技`,"npc.tank.name":`ドンゴロ`,"npc.speed.label":`素早さ型`,"npc.speed.desc":`ふわふわ避けて、距離を取る`,"npc.speed.name":`ピルキ`,"npc.power.label":`力型`,"npc.power.desc":`一撃が重い。腕が太い`,"npc.power.name":`ガルボ`,"home.title":`お絵かきモンスター`,"home.lead":`紙に描いた丸をカメラで読んで召喚。オートバトルで、ここぞの一筆。`,"home.summonCamera":`カメラで召喚する`,"home.summonImage":`画像ファイルから召喚する`,"home.myMonsters":`うちの子`,"home.empty":`まだ誰もいない。紙に丸を描いて、カメラをかざそう。`,"home.stats1":`体力{hp} 素早さ{spd}`,"home.stats2":`力{atk} 魔法{mag} {sign}`,"home.signYes":`・ 印あり`,"home.signNo":`・ 印なし`,"home.castGuide":`詠唱中にガイド(登録した印)を薄く表示する`,"home.sound":`効果音を鳴らす(iPhone はマナーモードだと鳴らない)`,"home.settings":`設定`,"home.debugHint":`デバッグ: 画面左上を長押しでパネル(検出・特徴量・JSON・fps)。モック {version}({build})`,"home.debug":`デバッグ(版・リプレイの検証・共有コード)`,"card.chip":`モンスターカード`,"card.delete":`けす`,"card.deleteConfirm":`本当にけす?`,"card.learnedSign":`覚えた印`,"card.signInfo":`{n}画 ・ 複雑さ {c}`,"card.redraw":`描き直す`,"card.noSign":`まだ印を覚えていない`,"card.noSignHint":`必殺を撃つには印が要る。1〜6画で描いて登録する。`,"card.summary":`{skeleton} ・ {size} ・ 目{eyes}つ{crest}{giant}`,"card.crest":` ・ 額に紋`,"card.giant":` ・ 巨大`,"card.detail":`星12固定 ・ パーツ {parts} ・ 模様 {marks} ・ 体色 {colors}`,"card.none":`なし`,"card.partSep":`・`,"card.realSize":`推定 約{cm}cm{giant}(実験・ARKit移行まで目安)`,"card.realGiant":`(巨大)`,"card.noCircle":`円陣なしで呼んだ`,"card.ink":`塗りの面積 {pct}% → {size}`,"card.summonAgain":`もう一度召喚`,"card.seed":`seed {seed} ・ {stars}`,"sign.title":`{name} に印を覚えさせる`,"sign.info":`1〜6画。指を離して0.8秒で描き終わり。`,"sign.progress":`{n}画目… 指を離して0.8秒で描き終わり`,"sign.done":`{n}画 ・ 複雑さ {c}(丸一つで約0.8、星形で約1.2)`,"sign.decide":`この印で決定`,"sign.redo":`描き直す`,"sign.explain":`バトルでは、この印を同じ向き・同じ書き順で再現すると威力が上がる(再現度)。複雑な印ほど強いが、崩れやすい。`,"summon.fromImage":`画像から`,"summon.start":`タップしてはじめる`,"summon.cameraStarting":`カメラを起動中…`,"summon.drawCircle":`紙に丸を描いて、かざして`,"summon.noCamera":`カメラが使えません。右上の「画像から」で写真を選んでください`,"summon.pickImage":`右上の「画像から」で写真を選んでください`,"summon.searching":`円を探しています…`,"summon.seen":`丸が見えた`,"summon.hold":`そのまま…`,"summon.dark":`暗いと認識しづらいです。明るいところで試してみてください`,"summon.notFound":`見つからない? 画面をタップして呼ぶ`,"summon.tooClose":`少し離れて`,"summon.summary":`{skeleton} ・ {size} ・ 目{eyes}つ`,"battle.selectTitle":`相手を選ぶ`,"battle.selectLead":`{name} で挑む。相手の周りで縮むリングが輪郭に重なる瞬間にタップ(ぴったりで完全回避、少しずれるとカスり)。相手の印は頭上に浮かんで、相手の拍で飛んでくる。自分の周りのリングが重なる瞬間にタップでジャスト。ゲージが溜まったら画面のどこでも、なぞって印。`,"battle.noSignNotice":`この子はまだ印を覚えていない。必殺は撃てないが、バトルはできる(回避はできる)。`,"battle.npc1":`{skeleton} ・ 体力{hp} 素早さ{spd}`,"battle.npc2":`力{atk} 魔法{mag} ・ 印の射程 {zone}`,"battle.quit":`← やめる`,"battle.gauge":`ゲージ(溜まったら、なぞって印)`,"battle.gaugeNoSign":`ゲージ(印なし)`,"battle.faceoff":`対面!`,"battle.drawPrompt":`印を描いて!(指を離して0.4秒で発動)`,"battle.enemyCasting":`{name} が印を描いている…`,"battle.replayCasting":`(リプレイ)印を描いている…`,"battle.engrave":`印を刻め!!`,"battle.fizzle":`不発…`,"battle.win":`かち!`,"battle.lose":`まけ…`,"judge.perfect":`ええやん`,"judge.graze":`カス`,"judge.enemyDodge":`スカ`,"judge.just":`ジャスト!!`,"judge.fast":`はやい`,"judge.slow":`おそい`,"cutin.fidelity":`再現度 {pct}%`,"cutin.strokePenalty":`画数ちがい`,"cutin.inZone":`射程内`,"cutin.outZone":`射程外…`,"result.summary":`{enemy} と {sec}秒で決着({by})`,"result.bySign":`印`,"result.byStrike":`通常攻撃`,"result.time":`決着時間`,"result.seconds":`{sec}秒`,"result.hpLeft":`残りHP`,"result.hpValue":`{p} {php}/{pmax} ・ {e} {ehp}/{emax}`,"result.signs":`印の回数`,"result.signsValue":`{n}回: {list}`,"result.signItem":`{pct}% {zone} {dmg}`,"result.in":`内`,"result.out":`外`,"result.zeroSigns":`0回`,"result.noSign":`印なし`,"result.zoneRate":`ゾーン内率`,"result.zoneRateValue":`{pct}%({a}/{b})`,"result.enemyAttacks":`相手の攻撃`,"result.enemyAttacksValue":`完全 {p} ・ カスり {g} ・ 被弾 {h}(全 {n}回、早すぎ {w})`,"result.enemySigns":`相手の印`,"result.enemySignsValue":`ジャスト {j} ・ カスり {g} ・ 被弾 {h}(全 {n}回)`,"result.castStart":`描き始め`,"result.castStartItem":`#{i} {ring}・次の拍 {beat}s`,"result.noRing":`リングなし`,"result.ringLeft":`リング残り {pct}%`,"result.damage":`与ダメージ`,"result.damageValue":`{dealt}(相手 {taken}、相手の回避 {dodges}回)`,"result.retry":`もう一度`,"result.changeEnemy":`相手を変える`,"result.toCard":`カードへ`,"settings.title":`設定`,"settings.sound":`音を鳴らす(iPhone はマナーモードだと鳴らない)`,"settings.sfxVolume":`効果音の音量`,"settings.bgmOn":`BGM を鳴らす`,"settings.bgmVolume":`BGM の音量`,"settings.inputOffset":`入力の補正`,"settings.inputOffsetHint":`タップが遅れて判定されると感じたら大きく。`,"settings.ms":`{ms}ms`,"settings.percent":`{pct}%`,"settings.reduceFlashing":`点滅を減らす(画面全体の白い光と揺れを弱める)`,"settings.vibration":`振動(アプリのときだけ)`,"settings.castGuide":`詠唱中にガイド(登録した印)を薄く表示する`};function r(e,t){let r=n[e]??e;return t?r.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e):r}function i(e){"@babel/helpers - typeof";return i=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},i(e)}function a(e,t){if(i(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(i(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function o(e){var t=a(e,`string`);return i(t)==`symbol`?t:t+``}function s(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t=2166136261){let n=t>>>0;for(let t=0;t<e.length;t++)n^=e[t]&255,n=Math.imul(n,16777619)>>>0;return n>>>0}var l=class{constructor(e){s(this,`s`,void 0),this.s=e>>>0,this.s===0&&(this.s=2654435769)}get state(){return this.s>>>0}next(){let e=(this.s+=1831565813)>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}pick(e){return e[Math.floor(this.next()*e.length)]}weighted(e){let t=e.reduce((e,t)=>e+t.w,0),n=this.next()*t;for(let t of e)if(n-=t.w,n<=0)return t.v;return e[e.length-1].v}};function u(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),i=Math.min(e,t,n),a=(r+i)/2,o=r-i;if(o<1e-6)return{h:0,s:0,l:a};let s=a>.5?o/(2-r-i):o/(r+i),c;return c=r===e?((t-n)/o+(t<n?6:0))*60:r===t?((n-e)/o+2)*60:((e-t)/o+4)*60,{h:c,s,l:a}}function d(e,t,n){if(e=(e%360+360)%360/360,t<=0){let e=Math.round(n*255);return[e,e,e]}let r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=e=>(e<0&&(e+=1),e>1&&--e,e<1/6?i+(r-i)*6*e:e<1/2?r:e<2/3?i+(r-i)*(2/3-e)*6:i);return[Math.round(a(e+1/3)*255),Math.round(a(e)*255),Math.round(a(e-1/3)*255)]}function f(e,t,n){let[r,i,a]=d(e,t,n);return`#`+[r,i,a].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function p(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function m(e){let[t,n,r]=p(e);return u(t,n,r)}var h=(e,t,n)=>Math.min(n,Math.max(t,e));function g(e,t,n){return f(e,t<.18?.06:h(t,.4,.9),h(n,.35,.75))}function _(e){let{h:t,s:n,l:r}=m(e);return f(t,h(n+.08,0,1),h(r-.18,0,1))}function v(e,t=.18){let{h:n,s:r,l:i}=m(e);return f(n,h(r-.1,0,1),h(i+t,0,.92))}var y=`#22201C`,b=`#5A5650`,x=[.045,.08,.15];function S(e){for(let t=0;t<x.length;t++)if(e<x[t])return t;return x.length}function C(e){return e<=1?`S`:e<=2?`M`:`L`}function w(e){return Math.max(0,Math.min(4,Math.round(e)))}function T(e){return e<=0?0:e<=5?1:2}function E(e,t){let n=+(t>=.18);return{hueBin:n?Math.min(11,Math.floor((e%360+360)%360/30)):0,chromatic:n}}function D(e){return e.chromatic?{hue:e.hueBin*30+15,sat:.65}:{hue:0,sat:0}}function O(e,t){return e===void 0?0:1+E(e,t??1).hueBin}var k=[.045,.14];function A(e){return e<k[0]?0:e<k[1]?1:2}function j(e){return e<.05?0:1}function ee(e){return e<.12?0:e<.28?1:e<.5?2:3}function M(e){return[e.hueBin,e.chromatic,e.inkLevel,e.closedLevel,e.sharpLevel,e.roughLevel,...e.radial,...e.angular,e.hue2Bin]}var te=Object.freeze([{id:`horn`,since:1,w:18,wSharp:40},{id:`spike`,since:1,w:10,wSharp:30},{id:`wing`,since:1,w:18},{id:`tail`,since:1,w:18},{id:`antenna`,since:1,w:12},{id:`fin`,since:1,w:8},{id:`ornament`,since:1,w:10}]);function ne(e,t=te){return t.filter(t=>t.since<=e)}var re=[`ポ`,`グ`,`ラ`,`モ`,`ニ`,`ピ`,`ド`,`ガ`,`ル`,`ミ`,`ベ`,`ズ`,`キ`,`ヨ`,`ン`,`タ`,`ロ`,`ヌ`,`ビ`,`ワ`,`ケ`,`ム`,`チ`,`ゴ`];function ie(e,t){let n=new l((t^1589690029)>>>0),{h:r,s:i,l:a}=m(e),o=n.next()<.5?n.range(130,170):n.range(8,30),s=r+(n.next()<.5?1:-1)*o,c=.75-a,u=a-.35;return g(s,i,a+(c>=u?1:-1)*n.range(.15,Math.min(.3,Math.max(c,u))))}function ae(e){let t=[1,1,1,1],n=8,r=0;for(;n>0&&r++<1e3;){let r=e.int(0,3);t[r]<5&&(t[r]++,n--)}return{hp:t[0],spd:t[1],atk:t[2],mag:t[3]}}function N(e,t={}){let n=e.seed>>>0,r=new l(n),i=t.skeleton??r.weighted([{v:`biped`,w:30},{v:`quadruped`,w:30},{v:`multileg`,w:14},{v:`serpent`,w:13},{v:`floating`,w:13}]),a=ae(r),o=r.weighted([{v:2,w:60},{v:1,w:20},{v:3,w:20}]),s=r.next()<.2,c=e.sharp>=1,u=Math.max(0,Math.min(4,e.closed)),d=ne(1,t.catalog).map(e=>({v:e.id,w:c?e.wSharp??e.w:e.w})),f=[],p=new Set;if(u>0&&c){let t=e.sharp>=2?`spike`:`horn`;f.push({kind:t,size:+r.range(.8,1.3).toFixed(2),variant:+r.next().toFixed(3)}),p.add(t)}let m=0;for(;f.length<u&&m++<50;){let e=r.weighted(d.filter(e=>!p.has(e.v)));p.add(e),f.push({kind:e,size:+r.range(.7,1.3).toFixed(2),variant:+r.next().toFixed(3)})}let h=[];e.rough>=1&&h.push({kind:r.pick([`spots`,`stripes`]),amount:+(e.rough/3).toFixed(2)});let _=C(e.inkLevel),v=e.lum/1e3,{hue:y,sat:b}=D({hueBin:e.hueBin,chromatic:e.chromatic}),x=g(y,b,v),S=2+n%2,w=``;for(let e=0;e<S;e++)w+=r.pick(re);let T;if(e.hue2>0){let{hue:t,sat:n}=D({hueBin:e.hue2-1,chromatic:e.chromatic2});T=g(t,n,e.lum2>=0?e.lum2/1e3:v)}else T=ie(x,n);return{genVersion:1,seed:n,skeleton:i,color:x,color2:T,stats:a,parts:f,marks:h,eyes:o,size:_,crest:s,giant:e.giant===1,name:w}}var oe={1:e=>N(e)};function se(e,t){let n=oe[e];if(!n)throw Error(`生成器 v${e} はない`);let r=ce(e,t);if(r)throw Error(`GenInput v${e} が不正: ${r}`);return n(t)}var P=(e,t,n)=>typeof e==`number`&&Number.isInteger(e)&&e>=t&&e<=n;function ce(e,t){if(e!==1)return`生成器 v${e} はない`;let n=t;if(!n||typeof n!=`object`||n.v!==1)return`v がちがう`;for(let[e,t,r]of[[`seed`,0,4294967295],[`hueBin`,0,11],[`chromatic`,0,1],[`lum`,0,1e3],[`inkLevel`,0,3],[`closed`,0,4],[`sharp`,0,2],[`rough`,0,3],[`hue2`,0,12],[`chromatic2`,0,1],[`lum2`,-1,1e3],[`giant`,0,1]])if(!P(n[e],t,r))return`${String(e)} が範囲外`;return n.hue2===0&&(n.chromatic2!==0||n.lum2!==-1)?`2 色目がないのに 2 色目の値がある`:null}function F(e,t,n){let r=Math.round(t.lum*1e3);if(Math.abs(r/1e3-t.lum)>1e-12||r<0||r>1e3)return null;let i=E(t.hue,t.sat),a=0,o=0,s=-1;if(t.hue2!==void 0){let e=E(t.hue2,t.sat2??1);if(a=e.hueBin+1,o=e.chromatic,t.lum2!==void 0&&(s=Math.round(t.lum2*1e3),Math.abs(s/1e3-t.lum2)>1e-12||s<0||s>1e3))return null}return!Number.isInteger(t.closedShapes)||!Number.isInteger(t.sharpCorners)?null:{v:1,seed:e>>>0,hueBin:i.hueBin,chromatic:i.chromatic,lum:r,inkLevel:S(t.inkRatio),closed:Math.max(0,Math.min(4,t.closedShapes)),sharp:t.sharpCorners>=6?2:+(t.sharpCorners>=3),rough:ee(t.roughness),hue2:a,chromatic2:o,lum2:s,giant:+!!n}}function le(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ue(e,t,n){let r=new Uint8Array(t*n);for(let t=0,n=0;t<r.length;t++,n+=4)r[t]=e[n]*77+e[n+1]*150+e[n+2]*29>>8;return r}function de(e,t,n){let r=t+1,i=new Float64Array(r*(n+1));for(let a=1;a<=n;a++){let n=0,o=a*r,s=(a-1)*r,c=(a-1)*t;for(let r=1;r<=t;r++)n+=e[c+r-1],i[o+r]=i[s+r]+n}return i}function fe(e,t,n,r,i){let a=de(e,t,n),o=t+1,s=new Uint8Array(t*n);for(let c=0;c<n;c++){let l=Math.max(0,c-r),u=Math.min(n-1,c+r);for(let n=0;n<t;n++){let d=Math.max(0,n-r),f=Math.min(t-1,n+r),p=(f-d+1)*(u-l+1),m=a[(u+1)*o+f+1]-a[l*o+f+1]-a[(u+1)*o+d]+a[l*o+d];s[c*t+n]=+(e[c*t+n]<m/p-i)}}return s}function pe(e){if(e.length===0)return 0;let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}function me(e,t,n){let r=new Uint8Array(t*n);for(let i=0;i<n;i++){let a=Math.max(0,i-1),o=Math.min(n-1,i+1);for(let n=0;n<t;n++){let s=Math.max(0,n-1),c=Math.min(t-1,n+1),l=0,u=0;for(let n=a;n<=o;n++)for(let r=s;r<=c;r++)l+=e[n*t+r],u++;r[i*t+n]=Math.round(l/u)}}return r}function he(e,t,n,r=.02,i=.98){let a=t*n,o=new Int32Array(256);for(let t=0;t<a;t++)o[e[t]]++;let s=0,c=0;for(;s<255&&(c+=o[s],!(c>=a*r));s++);let l=255,u=0;for(;l>0&&(u+=o[l],!(u>=a*(1-i)));l--);let d=new Uint8Array(a);if(l<=s)return d.set(e),d;let f=255/(l-s);for(let t=0;t<a;t++)d[t]=Math.max(0,Math.min(255,Math.round((e[t]-s)*f)));return d}function ge(e,t=1){let n=e.length;if(n<3)return e.slice();let r=e;for(let e=0;e<t;e++){let e=Array(n);for(let t=0;t<n;t++){let i=r[(t-1+n)%n],a=r[t],o=r[(t+1)%n];e[t]={x:(i.x+a.x+o.x)/3,y:(i.y+a.y+o.y)/3}}r=e}return r}function _e(e,t,n){let r=new Float32Array(t*n);for(let i=1;i<n-1;i++){let n=i*t;for(let i=1;i<t-1;i++){let a=n+i,o=-e[a-t-1]-2*e[a-1]-e[a+t-1]+e[a-t+1]+2*e[a+1]+e[a+t+1],s=-e[a-t-1]-2*e[a-t]-e[a-t+1]+e[a+t-1]+2*e[a+t]+e[a+t+1];r[a]=Math.sqrt(o*o+s*s)}}return r}function ve(e,t,n,r=.92,i=18){let a=t*n,o=new Int32Array(256);for(let t=0;t<a;t++){let n=Math.min(255,Math.floor(e[t]/600*255));o[n]++}let s=0,c=255;for(let e=255;e>=0;e--)if(s+=o[e],s>=a*(1-r)){c=e;break}let l=Math.max(i,c/255*600),u=new Uint8Array(a);for(let t=0;t<a;t++)u[t]=+(e[t]>=l);return u}function ye(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return Math.abs(t)/2}function be(e,t,n){let r=e.slice(),i=(e,i)=>e<0||i<0||e>=t||i>=n?0:r[i*t+e],a=!0;for(;a;){a=!1;for(let e of[1,2]){let o=[];for(let a=0;a<n;a++)for(let n=0;n<t;n++){if(!r[a*t+n])continue;let s=i(n,a-1),c=i(n+1,a-1),l=i(n+1,a),u=i(n+1,a+1),d=i(n,a+1),f=i(n-1,a+1),p=i(n-1,a),m=[s,c,l,u,d,f,p,i(n-1,a-1)],h=m.reduce((e,t)=>e+t,0);if(h<2||h>6)continue;let g=0;for(let e=0;e<8;e++)m[e]===0&&m[(e+1)%8]===1&&g++;if(g===1){if(e===1){if(s*l*d!==0||l*d*p!==0)continue}else if(s*l*p!==0||s*d*p!==0)continue;o.push(a*t+n)}}for(let e of o)r[e]=0;o.length>0&&(a=!0)}}return r}function xe(e,t,n){let r=new Uint8Array(t*n);for(let i=0;i<n;i++)for(let a=0;a<t;a++){if(!e[i*t+a])continue;let o=Math.max(0,i-1),s=Math.min(n-1,i+1),c=Math.max(0,a-1),l=Math.min(t-1,a+1);for(let e=o;e<=s;e++)for(let n=c;n<=l;n++)r[e*t+n]=1}return r}function Se(e,t,n,r,i){let a=new Int32Array(t*n),o=[],s=new Int32Array(t*n),c=1;for(let l=0;l<t*n;l++){if(e[l]!==r||a[l]!==0)continue;let u=c++,d=0;s[d++]=l,a[l]=u;let f={label:u,area:0,minX:t,minY:n,maxX:-1,maxY:-1,cx:0,cy:0,touchesBorder:!1},p=0,m=0;for(;d>0;){let o=s[--d],c=o%t,l=(o-c)/t;if(f.area++,p+=c,m+=l,c<f.minX&&(f.minX=c),c>f.maxX&&(f.maxX=c),l<f.minY&&(f.minY=l),l>f.maxY&&(f.maxY=l),(c===0||l===0||c===t-1||l===n-1)&&(f.touchesBorder=!0),c>0){let t=o-1;e[t]===r&&a[t]===0&&(a[t]=u,s[d++]=t)}if(c<t-1){let t=o+1;e[t]===r&&a[t]===0&&(a[t]=u,s[d++]=t)}if(l>0){let n=o-t;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(l<n-1){let n=o+t;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(i){if(c>0&&l>0){let n=o-t-1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c<t-1&&l>0){let n=o-t+1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c>0&&l<n-1){let n=o+t-1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}if(c<t-1&&l<n-1){let n=o+t+1;e[n]===r&&a[n]===0&&(a[n]=u,s[d++]=n)}}}f.cx=p/f.area,f.cy=m/f.area,o.push(f)}return{labels:a,comps:o}}function I(e,t,n){let{labels:r,comps:i}=Se(e,t,n,0,!1);return{labels:r,holes:i.filter(e=>!e.touchesBorder)}}function Ce(e,t,n,r,i=n.cx,a=n.cy){let o=new Float64Array(r).fill(-1),s=new Float64Array(r),c=new Float64Array(r);for(let l=n.minY;l<=n.maxY;l++)for(let u=n.minX;u<=n.maxX;u++){if(e[l*t+u]!==n.label)continue;let d=u-i,f=l-a,p=d*d+f*f,m=Math.atan2(f,d);m<0&&(m+=Math.PI*2);let h=Math.min(r-1,Math.floor(m/(Math.PI*2)*r));p>o[h]&&(o[h]=p,s[h]=u,c[h]=l)}let l=[],u=0;for(let e=0;e<r;e++)o[e]>=0&&(u++,l.push({x:s[e],y:c[e]}));return{pts:l,filled:u/r}}function we(e,t,n,r){let i=0;for(let a=r.minY;a<=r.maxY;a++)for(let o=r.minX;o<=r.maxX;o++){let s=a*t+o;e[s]===r.label&&(o===0||a===0||o===t-1||a===n-1||e[s-1]!==r.label||e[s+1]!==r.label||e[s-t]!==r.label||e[s+t]!==r.label)&&i++}return i}function Te(e,t){if(e.length<4)return e.slice();let n=0,r=-1;for(let t=1;t<e.length;t++){let i=Ee(e[0],e[t]);i>r&&(r=i,n=t)}let i=L(e.slice(0,n+1),t),a=L(e.slice(n).concat([e[0]]),t);return i.concat(a.slice(1,-1))}function L(e,t){if(e.length<=2)return e.slice();let n=new Uint8Array(e.length);n[0]=1,n[e.length-1]=1;let r=[[0,e.length-1]];for(;r.length;){let[i,a]=r.pop(),o=-1,s=-1;for(let t=i+1;t<a;t++){let n=R(e[t],e[i],e[a]);n>o&&(o=n,s=t)}o>t&&s>0&&(n[s]=1,r.push([i,s],[s,a]))}let i=[];for(let t=0;t<e.length;t++)n[t]&&i.push(e[t]);return i}function Ee(e,t){let n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function R(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<1e-9)return Math.sqrt(Ee(e,t));let o=((e.x-t.x)*r+(e.y-t.y)*i)/a;o=Math.max(0,Math.min(1,o));let s=t.x+o*r,c=t.y+o*i;return Math.hypot(e.x-s,e.y-c)}function z(e){let t=e.length,n=[];for(let r=0;r<t;r++){let i=e[(r-1+t)%t],a=e[r],o=e[(r+1)%t],s=i.x-a.x,c=i.y-a.y,l=o.x-a.x,u=o.y-a.y,d=Math.hypot(s,c),f=Math.hypot(l,u);if(d<1e-6||f<1e-6){n.push(180);continue}let p=Math.max(-1,Math.min(1,(s*l+c*u)/(d*f)));n.push(Math.acos(p)*180/Math.PI)}return n}function De(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=Math.hypot(r.x-i.x,r.y-i.y)}return t}function Oe(e){let{w:t,h:n,data:r}=e,i=Math.min(t,n)/2,a=t/2,o=n/2,s=(i*.9)**2,c=ue(r,t,n),l=[];for(let e=0;e<n;e+=2)for(let n=0;n<t;n+=2)(n-a)**2+(e-o)**2>s||l.push(c[e*t+n]);l.sort((e,t)=>e-t);let d=l[Math.floor(l.length*.6)]??200,f=0,p=0,m=0,g=0;for(let e=0;e<n;e+=2)for(let n=0;n<t;n+=2){if((n-a)**2+(e-o)**2>s)continue;let i=e*t+n;c[i]>=d&&(f+=r[i*4],p+=r[i*4+1],m+=r[i*4+2],g++)}g===0&&(g=1);let _=[f/g,p/g,m/g],v=fe(c,t,n,10,16),y=new Uint8Array(t*n),b=new Float32Array(t*n),x=0;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let i=e*t+n;if((n-a)**2+(e-o)**2>s)continue;let c=r[i*4]-_[0],l=r[i*4+1]-_[1],u=r[i*4+2]-_[2],d=Math.sqrt(c*c+l*l+u*u);b[i]=d,d>x&&(x=d),(v[i]||d>64)&&(y[i]=1)}let C=Math.PI*(i*.9)**2,D=0;for(let e=0;e<y.length;e++)D+=y[e];let k=D/C;if(k<.003){let e=be(ve(_e(c,t,n),t,n),t,n),r=0;for(let i=0;i<n;i++)for(let n=0;n<t;n++)(n-a)**2+(i-o)**2>s||e[i*t+n]&&r++;k=r/C}let te=new Float64Array(36),ne=[],re=[],ie=[],ae=Math.max(40,x*.55);for(let e=0;e<y.length;e++){if(!y[e]||b[e]<ae)continue;let{h:t,s:n,l:i}=u(r[e*4],r[e*4+1],r[e*4+2]);ne.push(n),re.push(i),ie.push(t),te[Math.min(35,Math.floor(t/10))]+=n}let N=0,oe=0,se=.3,P,ce,F,le=0;if(ne.length>0){let e=0;for(let t=1;t<36;t++)te[t]>te[e]&&(e=t);let t=0,n=0;for(let r=0;r<ie.length;r++){let i=Math.min(35,Math.floor(ie[r]/10));if(Math.min((i-e+36)%36,(e-i+36)%36)<=1){let e=ie[r]*Math.PI/180;t+=Math.cos(e),n+=Math.sin(e)}}N=(Math.atan2(n,t)*180/Math.PI+360)%360;let r=-1;for(let t=0;t<36;t++)Math.min((t-e+36)%36,(e-t+36)%36)<3||(r<0||te[t]>te[r])&&(r=t);if(r>=0&&te[r]>0){let e=0,t=0,n=[],i=[];for(let a=0;a<ie.length;a++){let o=Math.min(35,Math.floor(ie[a]/10));if(Math.min((o-r+36)%36,(r-o+36)%36)<=1){let r=ie[a]*Math.PI/180;e+=Math.cos(r),t+=Math.sin(r),n.push(ne[a]),i.push(re[a])}}let a=n.length/Math.max(1,D);n.length>0&&a>=.12&&(n.sort((e,t)=>e-t),i.sort((e,t)=>e-t),P=(Math.atan2(t,e)*180/Math.PI+360)%360,ce=n[Math.floor(n.length/2)],F=i[Math.floor(i.length/2)],le=a)}ne.sort((e,t)=>e-t),re.sort((e,t)=>e-t),oe=ne[Math.floor(ne.length/2)],se=re[Math.floor(re.length/2)]}else{let e=0,i=0,c=0,l=0;for(let u=0;u<n;u+=2)for(let n=0;n<t;n+=2){if((n-a)**2+(u-o)**2>s)continue;let d=u*t+n;e+=r[d*4],i+=r[d*4+1],c+=r[d*4+2],l++}if(l>0){let t=u(e/l,i/l,c/l);N=t.h,oe=t.s,se=t.l}}let de=xe(y,t,n),{labels:pe,comps:me}=Se(de,t,n,1,!0),he=me.filter(e=>e.area>=24),{labels:ge,holes:ye}=I(de,t,n),L=ye.filter(e=>e.area>=30),Ee=0,R=(e,n)=>{let r=e.maxX-e.minX+1,i=e.maxY-e.minY+1,a=r/i,o=e.area/(r/2*Math.PI*(i/2));if(!(a>.7&&a<1.43&&o>.75&&Math.max(r,i)>=8))return!1;let s=Math.round(e.cx);if(n[Math.round(e.cy)*t+s]!==e.label)return!1;let{pts:c}=Ce(n,t,e,24),l=1/0,u=0;for(let t of c){let n=Math.hypot(t.x-e.cx,t.y-e.cy);n<l&&(l=n),n>u&&(u=n)}return u>0&&l/u>.72};for(let e of L)e.area>=60&&R(e,ge)&&Ee++;let De=0,Oe=0,ke=0,Ae=0,je=0,Me=[];for(let e of he){let r=e.maxX-e.minX+1,i=e.maxY-e.minY+1,a=Math.max(r,i);if(e.area>=60&&R(e,pe)&&Ee++,a>=12&&e.area>=40){let{pts:r,filled:i}=Ce(pe,t,e,120);if(r.length>=8){let a=Te(r,2);Me.push(a);let o=z(a);for(let e=0;e<a.length;e++){let t=a[(e-1+a.length)%a.length],n=a[(e+1)%a.length],r=Math.hypot(t.x-a[e].x,t.y-a[e].y),i=Math.hypot(n.x-a[e].x,n.y-a[e].y);o[e]<95&&r>=5&&i>=5&&De++}let s=h((Te(r,1.2).length/Math.max(1,r.length)/Math.max(.3,i)-.15)/.45,0,1),c=h((we(pe,t,n,e)/e.area-.2)/.5,0,1);ke+=(.7*s+.3*c)*e.area,Oe+=e.area}}if(a>=t*.03&&a<=t*.15&&e.area>=20){Ae++;let{pts:n}=Ce(pe,t,e,60);Te(n,1.5).length>=6&&je++}}let Ne=Oe>0?h(ke/Oe,0,1):0,Pe=Ae>=2&&je>=1,B=i*.9,Fe=new Float64Array(4),Ie=new Float64Array(4),Le=new Float64Array(6),V=new Float64Array(6);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=n-a,i=e-o,s=Math.hypot(r,i);if(s>B)continue;let c=Math.min(3,Math.floor(s/B*4)),l=Math.atan2(i,r);l<0&&(l+=Math.PI*2);let u=Math.min(5,Math.floor(l/(Math.PI*2)*6));Ie[c]++,V[u]++,y[e*t+n]&&(Fe[c]++,Le[u]++)}let Re=Array.from({length:4},(e,t)=>j(Ie[t]>0?Fe[t]/Ie[t]:0)),ze=Array.from({length:6},(e,t)=>V[t]>0?Le[t]/V[t]:0),Be=ze.map(A).sort((e,t)=>t-e),Ve={...E(N,oe),inkLevel:S(k),closedLevel:w(L.length),sharpLevel:T(De),roughLevel:ee(Ne),radial:Re,angular:Be,hue2Bin:O(P,ce)},He=M(Ve);return{features:{inkRatio:+k.toFixed(4),hue:Math.round(N),sat:+oe.toFixed(3),lum:+se.toFixed(3),roughness:+Ne.toFixed(3),closedShapes:L.length,sharpCorners:De,circles:Ee,hasText:Pe,components:he.length,...P===void 0?{}:{hue2:Math.round(P),sat2:+ce.toFixed(3),lum2:+F.toFixed(3),ink2Ratio:+le.toFixed(4)}},debug:{w:t,h:n,ink:y,polygons:Me,holes:L,paper:_,note:`paper=${_.map(e=>Math.round(e)).join(`,`)} maxDist=${x.toFixed(0)}`,quant:Ve,quantVector:He,raw:{hue:N,sat:oe,radial:Array.from({length:4},(e,t)=>Ie[t]>0?Fe[t]/Ie[t]:0),angular:ze.slice().sort((e,t)=>t-e),hue2:P??null,sat2:ce??null}}}}function ke(e){return c(e)}var Ae={COLOR_R:.85,COLOR_MIN_V:40,SAT_TH:.25,HUE_MIN_SAT:.15,HUE_SECTORS:6,CLOSED:1,LUM_LIGHTER:620,LUM_DARKER:380};function je(e,t,n){let r=Math.max(e,t,n),i=r-Math.min(e,t,n);if(i===0)return 0;let a=r===e?(t-n)/i%6:r===t?(n-e)/i+2:(e-t)/i+4;return a*=60,a<0?a+360:a}function Me(e,t){let n=Ae,r=e.w,i=r/2,a=0,o=0,s=0,c=0;for(let t=0;t<r;t++)for(let l=0;l<r;l++){let u=l+.5-i,d=t+.5-i;if(u*u+d*d>(n.COLOR_R*i)**2)continue;let f=(t*r+l)*4,p=e.data[f],m=e.data[f+1],h=e.data[f+2],g=Math.max(p,m,h);if(g<n.COLOR_MIN_V)continue;let _=(g-Math.min(p,m,h))/g;if(a+=_,o++,_>=n.HUE_MIN_SAT){let e=je(p,m,h)*Math.PI/180;s+=Math.cos(e)*_,c+=Math.sin(e)*_}}let l=o?a/o:0,u=+(l>=n.SAT_TH),d=0,f=0;u&&(d=(Math.atan2(c,s)*180/Math.PI+360)%360,f=Math.floor((d+30)%360/60)%n.HUE_SECTORS);let p=[+(t===`lighter`),u,f];return{polarity:t,sat:+l.toFixed(4),chromatic:u,hue:+d.toFixed(1),hueSector:f,quant:p}}function Ne(e){return ke([167,1,...e.quant])}function Pe(e){return{inkRatio:.1,hue:e.chromatic?e.hueBin*30+15:0,sat:e.chromatic?.65:0,lum:e.lum/1e3,roughness:.2,closedShapes:e.closed,sharpCorners:0,circles:0,hasText:!1,components:0}}function B(e,t){return{v:1,seed:Ne(e)>>>0,hueBin:e.chromatic?e.hueSector*2:0,chromatic:e.chromatic,lum:e.polarity===`lighter`?Ae.LUM_LIGHTER:Ae.LUM_DARKER,inkLevel:2,closed:Ae.CLOSED,sharp:0,rough:1,hue2:0,chromatic2:0,lum2:-1,giant:+!!t}}var Fe=ie;function Ie(e,t,n={}){let r=N(F(e,t,!1)??Le(e,t),{skeleton:n.skeleton}),i=n.createdAt??Date.now();return{seed:r.seed,skeleton:r.skeleton,color:r.color,color2:r.color2,stats:n.stats??r.stats,parts:r.parts,marks:r.marks,eyes:r.eyes,size:r.size,crest:r.crest,id:n.id??`${r.seed.toString(16)}-${i.toString(36)}`,name:n.name||r.name,createdAt:i,features:t}}function Le(e,t){let n=e=>Math.max(0,Math.min(1e3,Math.round(e*1e3)));return F(e,{...t,lum:n(t.lum)/1e3,lum2:t.lum2===void 0?void 0:n(t.lum2)/1e3,closedShapes:Math.round(t.closedShapes),sharpCorners:Math.round(t.sharpCorners)},!1)}function V(e,t={}){let{features:n,debug:r}=Oe(e);return{monster:Ie(ke(r.quantVector),n,t),features:n,debug:r,quant:r.quantVector}}function Re(e,t,n={}){return{monster:Ie(ke(t),e,n),features:e,quant:t}}function ze(e,t={}){let n=B(e,!1),r=Pe(n);return{monster:Ie(n.seed,r,t),features:r,input:n,quant:[167,1,...e.quant]}}var Be={hp:r(`stat.hp`),spd:r(`stat.spd`),atk:r(`stat.atk`),mag:r(`stat.mag`)},Ve={biped:r(`skeleton.biped`),quadruped:r(`skeleton.quadruped`),multileg:r(`skeleton.multileg`),serpent:r(`skeleton.serpent`),floating:r(`skeleton.floating`)},He={S:r(`size.S`),M:r(`size.M`),L:r(`size.L`)},Ue=`cdc8c21 2026-11-09 17:03`,We={S:.55,M:1,L:1.9},Ge=3.2;function Ke(e){return e.giant?Ge:We[e.size]}function H(e,t={},...n){let r=document.createElement(e);for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`?r.setAttribute(`style`,String(n)):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2).toLowerCase(),n):e===`text`?r.textContent=String(n):n===!0?r.setAttribute(e,``):r.setAttribute(e,String(n)));for(let e of n)e!=null&&e!==!1&&r.append(e instanceof Node?e:String(e));return r}function qe(e){return`★`.repeat(e)+`☆`.repeat(Math.max(0,5-e))}function Je(e){let t=H(`table`,{class:`stat`});for(let n of[`hp`,`spd`,`atk`,`mag`])t.append(H(`tr`,{},H(`td`,{},Be[n]),H(`td`,{class:`stars`},qe(e[n]))));return t}function Ye(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var Xe=[523.25,587.33,659.26,783.99,880,1046.5,1174.66,1318.51,1567.98,1760],U=null,Ze=null,Qe=null,$e=!1,et={sound:!0,sfxVolume:1,bgmOn:!0,bgmVolume:1};function tt(e){Object.assign(et,e)}function nt(){return et}var rt=()=>!et.sound;function it(){return rt()}function at(e){let t=Math.max(1,Math.floor(e.sampleRate*.5)),n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;return n}function ot(){if(typeof window<`u`)try{if(!U){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;U=new e({latencyHint:`interactive`}),Ze=U.createGain(),Ze.gain.value=1;let t=U.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=24,t.ratio.value=4,t.attack.value=.003,t.release.value=.15,Ze.connect(t),t.connect(U.destination),Qe=at(U)}U.state!==`running`&&U.resume().catch(()=>{}),!$e&&typeof document<`u`&&($e=!0,document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&U&&U.state!==`running`&&U.resume().catch(()=>{})}));let e=U.createBuffer(1,1,U.sampleRate),t=U.createBufferSource();t.buffer=e,t.connect(U.destination),t.start(0)}catch{}}function st(){if(!U)return 0;let e=U;return(e.baseLatency??0)+(e.outputLatency??0)}function ct(e,t,n,r,i){let a=e.gain;a.cancelScheduledValues(t),a.setValueAtTime(1e-4,t),a.linearRampToValueAtTime(Math.max(1e-4,n),t+r),a.exponentialRampToValueAtTime(1e-4,t+r+i)}function lt(e,t,n,r){let i=U.createOscillator(),a=U.createGain();i.type=`square`,i.frequency.value=e,i.connect(a),a.connect(Ze),ct(a,r,n*.35,.002,t),i.start(r),i.stop(r+t+.05)}function ut(e,t,n,r){if(!Qe)return;let i=U.createBufferSource();i.buffer=Qe;let a=U.createBiquadFilter();a.type=`bandpass`,a.frequency.value=n,a.Q.value=.7;let o=U.createGain();i.connect(a),a.connect(o),o.connect(Ze),ct(o,r,t*.4,.004,e),i.start(r),i.stop(r+e+.05)}function dt(e,t){if(Qe){let n=U.createBufferSource();n.buffer=Qe;let r=U.createBiquadFilter();r.type=`lowpass`,r.frequency.value=650,r.Q.value=.5;let i=U.createGain();n.connect(r),r.connect(i),i.connect(Ze),ct(i,t,e*.5,.006,.14),n.start(t),n.stop(t+.2)}gt(150,.09,e*.5,t)}function ft(e,t,n,r){let i=U.createOscillator(),a=U.createGain();i.type=`sine`,i.frequency.value=e,i.connect(a),a.connect(Ze),ct(a,r,n,.002,t),i.start(r),i.stop(r+t+.05)}function pt(e,t,n,r){for(let[i,a,o]of[[1,1,`triangle`],[2,.35,`sine`]]){let s=U.createOscillator(),c=U.createGain();s.type=o,s.frequency.value=e*i,s.connect(c),c.connect(Ze),ct(c,r,n*a,.003,t),s.start(r),s.stop(r+t+.05)}}function mt(e,t,n,r){for(let[i,a]of[[1,.3],[2.76,.16],[4.2,.08]]){let o=U.createOscillator(),s=U.createGain();o.type=`sine`,o.frequency.value=e*i,o.connect(s),s.connect(Ze),ct(s,r,n*a,.002,t),o.start(r),o.stop(r+t+.05)}}function ht(e,t){ft(520,.1,e*.3,t),ft(780,.14,e*.35,t+.09)}function gt(e,t,n,r){let i=U.createOscillator(),a=U.createGain();if(i.type=`sine`,i.frequency.setValueAtTime(e*2.2,r),i.frequency.exponentialRampToValueAtTime(Math.max(30,e*.6),r+t*.6),i.connect(a),a.connect(Ze),ct(a,r,n*.5,.002,t),i.start(r),i.stop(r+t+.05),Qe){let t=U.createBufferSource();t.buffer=Qe;let i=U.createBiquadFilter();i.type=`lowpass`,i.frequency.value=e*3;let a=U.createGain();t.connect(i),i.connect(a),a.connect(Ze),ct(a,r,n*.25,.001,.03),t.start(r),t.stop(r+.05)}}function _t(){return U&&Ze?{ctx:U,master:Ze,noise:Qe}:null}function vt(e,t,n,r,i,a){if(!Qe)return;let o=U.createBufferSource();o.buffer=Qe;let s=U.createBiquadFilter();s.type=`bandpass`,s.Q.value=i,s.frequency.setValueAtTime(e,a),s.frequency.exponentialRampToValueAtTime(t,a+n);let c=U.createGain();o.connect(s),s.connect(c),c.connect(Ze),ct(c,a,r,.003,n),o.start(a),o.stop(a+n+.05)}var yt=[];function bt(e,t={}){if(!U||!Ze||rt())return;yt.push(e),yt.length>200&&yt.shift();let n=(t.gain??1)*et.sfxVolume,r=U.currentTime;try{switch(e){case`tele`:lt(180,.05,n,r);break;case`mid`:lt(440,.05,n,r);break;case`open`:lt(1100,.045,n,r);break;case`dodge`:ut(.12,n,2400,r);break;case`graze`:dt(n,r);break;case`just-graze`:dt(n,r),mt(900,.08,n*.4,r);break;case`just`:mt(1600,.18,n,r);break;case`full`:ht(n,r);break;case`release`:gt(90,.3,n,r);break;case`hit`:gt(260,.08,n,r);break;case`finish`:gt(70,.5,n*1.2,r);break;case`evade-perfect`:{let e=Xe[Math.max(0,Math.min(Xe.length-1,t.step??0))];vt(5200,1400,.08,n*.18,1.2,r),pt(e,.24,n*.5,r);break}case`evade-graze`:ut(.12,n*1.1,900,r),gt(140,.07,n*.4,r);break;case`evade-just`:vt(5200,1400,.08,n*.18,1.2,r);for(let e of[1046.5,1318.51,1567.98])pt(e,.45,n*.32,r+.005);mt(2093,.5,n*.8,r+.01)}}catch{}}var xt={ink:`紙`,edge:`紙(エッジ)`,object:`実物`};function St(e){let t=e.object,n=e.objectRejected,r=t?` 明暗=${t.polarity===`lighter`?`中が明るい`:`中が暗い`} 光線の網羅率=${t.rayCoverage.toFixed(2)} 縁の支え=${t.edgeSupport.toFixed(2)} 内外=${t.inOut.toFixed(2)}`:n?` 実物の道で弾いた=${n.reason}(網羅率=${n.rayCoverage.toFixed(2)} 支え=${n.edgeSupport.toFixed(2)} 内外=${n.inOut.toFixed(2)} 長径/短辺=${n.longAxisRatio.toFixed(2)})`:``,i=e.objectQuant?` 実物の列=[${e.objectQuant.join(`,`)}]`:``;return`道=${e.path?xt[e.path]:`-`}${e.objectRan?`(実物の道を回した)`:``}${r}${i} 解析 ${e.ms.toFixed(1)}ms`}var W={open:!1,fps:0,detect:null,features:null,quant:null,quantVector:null,monsterJson:``,notes:[],extra:{}};window.__mbDebug=W;var Ct=null;function wt(e){W.notes.unshift(`${new Date().toLocaleTimeString()} ${e}`),W.notes.length>12&&W.notes.pop()}function Tt(){if(Ct)return;Ct=document.createElement(`div`),Ct.id=`debug-panel`,Ct.style.display=`none`,document.body.appendChild(Ct);let e=0,t=0,n=0,r=()=>{e&&(clearTimeout(e),e=0)};document.addEventListener(`pointerdown`,i=>{i.clientX>90||i.clientY>90||(t=i.clientX,n=i.clientY,r(),e=window.setTimeout(()=>{e=0,W.open=!W.open,Dt()},600))},{capture:!0}),document.addEventListener(`pointermove`,i=>{e&&Math.hypot(i.clientX-t,i.clientY-n)>12&&r()},{capture:!0}),document.addEventListener(`pointerup`,r,{capture:!0}),document.addEventListener(`pointercancel`,r,{capture:!0});let i=()=>{requestAnimationFrame(i),W.open&&Dt()};requestAnimationFrame(i)}var Et=0;function Dt(){if(!Ct||(Ct.style.display=W.open?`block`:`none`,!W.open))return;let e=performance.now();if(e-Et<250)return;Et=e;let n=W.detect,r=n?.rejected,i=r?` 弾かれた理由=${r.reason}(circ=${r.circularity.toFixed(2)} axis=${r.aspect.toFixed(2)} err=${r.err.toFixed(3)} cov=${r.coverage.toFixed(2)}${r.longAxisRatio===void 0?``:` 長径/短辺=${r.longAxisRatio.toFixed(2)}`}${r.ringCoverage===void 0?``:` 輪網羅=${r.ringCoverage.toFixed(2)} 輪幅=${r.ringWidthRatio.toFixed(2)} 輪内外=${r.ringContrastFrac.toFixed(2)}`})`:``,a=n&&n.ringCoverage!==null?` 輪網羅=${n.ringCoverage.toFixed(2)} 輪幅=${n.ringWidthRatio.toFixed(2)} 輪内外=${n.ringContrastFrac.toFixed(2)}`:``,o=n?.realSize,s=o?`実寸推定: 俯角=${o.depressionDeg.toFixed(0)}° h仮定=${o.h===`desk`?`机(0.35m)`:`地面(1.3m)`} 推定${o.cm.toFixed(0)}cm`:`実寸推定: -(俯角が浅いか、机/地面を切り分けられない)`,c=n?`ellipse: ${n.ellipse?`c=(${n.ellipse.cx.toFixed(0)},${n.ellipse.cy.toFixed(0)}) a=${n.ellipse.a.toFixed(0)} b=${n.ellipse.b.toFixed(0)} ang=${(n.ellipse.angle*180/Math.PI).toFixed(0)}°`:`none`}
err=${n.err.toFixed(3)} cov=${n.coverage.toFixed(2)} circ=${n.circularity.toFixed(2)} cand=${n.candidates} ${n.ms.toFixed(1)}ms frame=${n.w}x${n.h}
locked=${n.locked} stable=${n.stable.toFixed(2)}s brightness=${n.brightness.toFixed(0)}${n.usedEdge?` edge併用`:``}${a}${i}
${St(n)}
${s}`:`-`,l=Object.entries(W.extra).map(([e,t])=>`${e}=${t}`).join(`  `),u=window.__mbBattle?.sim?.beatInfo?.(1)??null,d=u?`相手の拍 ${(u.interval>0?60/u.interval:0).toFixed(0)} BPM / 次の拍まで ${u.nextIn.toFixed(2)}s / 拍 #${u.index}`:`相手の拍 -(バトル外)`,f=`音レイテンシ ${(st()*1e3).toFixed(1)}ms`,p=W.quant,m=p?`hue=${p.hueBin}(${p.chromatic?`有彩`:`無彩`}) ink=${p.inkLevel} closed=${p.closedLevel} sharp=${p.sharpLevel} rough=${p.roughLevel}
radial=[${p.radial.join(`,`)}] angular=[${p.angular.join(`,`)}]
vector=[${W.quantVector?.join(`,`)??``}]`:`-`;Ct.innerHTML=`<div class="dbg-head">debug <span>${W.fps.toFixed(0)} fps</span> <button id="dbg-close">×</button></div>
<pre>${l}
[versions]
${t().map(([e,t])=>`${e}=${t}`).join(`  `)}  build=${Ue}
UA: ${navigator.userAgent}
[beat / audio]
${d}
${f}
[detect]
${c}
[quant]
${m}
[features]
${W.features?JSON.stringify(W.features,null,1):`-`}
[monster]
${W.monsterJson||`-`}
[log]
${W.notes.join(`
`)}</pre>`,Ct.querySelector(`#dbg-close`)?.addEventListener(`click`,()=>{W.open=!1,Dt()})}var Ot=class{constructor(){s(this,`frames`,0),s(this,`last`,performance.now())}tick(){this.frames++;let e=performance.now();e-this.last>=500&&(W.fps=this.frames*1e3/(e-this.last),this.frames=0,this.last=e)}},kt=.35,At=.15;function jt(e){let t=[];for(let n of e)for(let e of n)t.push({x:e.x,y:e.y});if(t.length<2)return null;let n=Mt(t,64),r=0,i=0;for(let e of n)r+=e.x,i+=e.y;r/=n.length,i/=n.length;let a=1/0,o=1/0,s=-1/0,c=-1/0;for(let e of n)e.x<a&&(a=e.x),e.y<o&&(o=e.y),e.x>s&&(s=e.x),e.y>c&&(c=e.y);let l=Math.max(s-a,c-o,1e-6),u=n.map(e=>({x:(e.x-r)/l,y:(e.y-i)/l})),d=0;for(let e=1;e<u.length;e++)d+=Math.hypot(u[e].x-u[e-1].x,u[e].y-u[e-1].y);return{pts:u,length:d,strokeCount:e.length}}function Mt(e,t){let n=0;for(let t=1;t<e.length;t++)n+=Math.hypot(e[t].x-e[t-1].x,e[t].y-e[t-1].y);if(n<1e-9)return Array.from({length:t},()=>({...e[0]}));let r=n/(t-1),i=[{...e[0]}],a=0,o=e.map(e=>({...e}));for(let e=1;e<o.length;e++){let t=Math.hypot(o[e].x-o[e-1].x,o[e].y-o[e-1].y);if(a+t>=r&&t>0){let n=(r-a)/t,s={x:o[e-1].x+n*(o[e].x-o[e-1].x),y:o[e-1].y+n*(o[e].y-o[e-1].y)};i.push(s),o.splice(e,0,s),a=0}else a+=t}for(;i.length<t;)i.push({...o[o.length-1]});return i.slice(0,t)}function Nt(e,t){let n=Math.min(e.length,t.length),r=0;for(let i=0;i<n;i++)r+=Math.hypot(e[i].x-t[i].x,e[i].y-t[i].y);return r/n}function Pt(e,t){let n=jt(e),r=jt(t);if(!n||!r)return{similarity:0,distance:1/0,strokePenalty:!1};let i=Nt(n.pts,r.pts),a=Math.max(0,Math.min(1,1-i/kt)),o=n.strokeCount!==r.strokeCount;return o&&(a=Math.max(0,a-At)),{similarity:a,distance:i,strokePenalty:o}}function Ft(e){let t=jt(e);return t?Math.max(.5,Math.min(2,t.length/4)):.5}var It=e=>Math.round(e*1e3)/1e3;function Lt(e){let t=e.flat(),n=jt(e),r=1/0,i=1/0,a=-1/0,o=-1/0;for(let e of t)r=Math.min(r,e.x),i=Math.min(i,e.y),a=Math.max(a,e.x),o=Math.max(o,e.y);let s=Math.max(1e-6,a-r),c=Math.max(1e-6,o-i),l=Math.max(s,c),u=t[0],d=t[t.length-1],f=!!u&&!!d&&Math.sqrt((u.x-d.x)**2+(u.y-d.y)**2)/l<.2,p=0;if(n){let e=0;for(let t of n.pts){let r=1/0;for(let e of n.pts){let n=-t.x-e.x,i=t.y-e.y,a=n*n+i*i;a<r&&(r=a)}e+=Math.sqrt(r)}p=Math.max(0,Math.min(1,1-e/n.pts.length/.2))}return{complexity:It(Ft(e)),strokeCount:e.length,closed:f,aspect:It(s/c),symmetry:It(p),totalLength:It(n?n.length:0)}}var Rt=Object.freeze({hp:0,spd:0,atk:0,mag:0});function zt(e){let t=e.spec.stats,n=e.growth;return{hp:t.hp+n.hp,spd:t.spd+n.spd,atk:t.atk+n.atk,mag:t.mag+n.mag}}function Bt(e){return{genVersion:1,seed:e.seed>>>0,skeleton:e.skeleton,color:e.color,color2:e.color2??Fe(e.color,e.seed),stats:{hp:e.stats.hp,spd:e.stats.spd,atk:e.stats.atk,mag:e.stats.mag},parts:e.parts.map(e=>({kind:e.kind,size:e.size,variant:e.variant})),marks:e.marks.map(e=>({kind:e.kind,amount:e.amount})),eyes:e.eyes,size:e.size,crest:e.crest,giant:!!e.giant,name:e.name}}function Vt(e,t){if(!t)return null;let n=F(e.seed,t,e.giant);if(!n)return null;try{return le(se(1,n),e)?n:null}catch{return null}}function Ht(e){return{strokes:e,signVersion:1,features:Lt(e)}}function Ut(e){let t=Bt(e),n={id:e.id,createdAt:e.createdAt,genVersion:1,genInput:Vt(t,e.features),spec:t,growth:{...Rt}};return e.sign&&(n.sign=Ht(e.sign)),e.thumb&&(n.thumb=e.thumb),e.realCm!==void 0&&(n.realCm=e.realCm),e.noCircle&&(n.noCircle=!0),e.features&&(n.features=e.features),n}function Wt(e){let t=e.spec,n={seed:t.seed,skeleton:t.skeleton,color:t.color,color2:t.color2,stats:zt(e),parts:t.parts,marks:t.marks,eyes:t.eyes,size:t.size,crest:t.crest,id:e.id,name:t.name,createdAt:e.createdAt};return t.giant&&(n.giant=!0),e.sign&&(n.sign=e.sign.strokes),e.thumb&&(n.thumb=e.thumb),e.features&&(n.features=e.features),e.realCm!==void 0&&(n.realCm=e.realCm),e.noCircle&&(n.noCircle=!0),n}var Gt=`modulepreload`,Kt=function(e,t){return new URL(e,t).href},qt={},Jt=function(e){return e.pathname.endsWith(`.css`)},Yt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Xt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Kt(t,n);let r=s(t),i=Jt(r);return Yt(qt,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Gt,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zt=()=>{try{return typeof localStorage<`u`?localStorage:null}catch{return null}},Qt={name:`localStorage`,async load(e){return Zt()?.getItem(e)??null},async save(e,t){Zt()?.setItem(e,t)},async loadLegacy(e){return Zt()?.getItem(e)??null}};function $t(e={}){let t={...e};return{name:`memory`,data:t,async load(e){return e in t?t[e]:null},async save(e,n){t[e]=n},async loadLegacy(e){return e in t?t[e]:null}}}async function en(){try{let{Capacitor:e}=await Xt(async()=>{let{Capacitor:e}=await import(`./dist-BW-B4pLB.js`);return{Capacitor:e}},[],import.meta.url);if(e.isNativePlatform()){let{Preferences:e}=await Xt(async()=>{let{Preferences:e}=await import(`./esm-B8YUdFrb.js`);return{Preferences:e}},__vite__mapDeps([0,1]),import.meta.url);return{name:`capacitor-preferences`,async load(t){return(await e.get({key:t})).value},async save(t,n){await e.set({key:t,value:n})},async loadLegacy(e){return Zt()?.getItem(e)??null}}}}catch{}return Qt}var tn=`mb.save.v2`,nn={monsters:`mb.monsters.v1`,settings:`mb.settings.v1`,logs:`mb.logs.v1`,mute:`mb.mute.v1`,tuning:`mb.tuning.v1`};function rn(){try{return typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function an(){return{castGuide:!0,sound:!0,sfxVolume:1,bgmOn:!0,bgmVolume:1,inputOffset:.04,reduceFlashing:rn(),vibration:!0}}an();function on(e){let t=an(),n={...t,...e&&typeof e==`object`?e:{}},r=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):r,i=(e,t)=>typeof e==`boolean`?e:t;return{castGuide:i(n.castGuide,t.castGuide),sound:i(n.sound,t.sound),sfxVolume:r(n.sfxVolume,0,1,t.sfxVolume),bgmOn:i(n.bgmOn,t.bgmOn),bgmVolume:r(n.bgmVolume,0,1,t.bgmVolume),inputOffset:r(n.inputOffset,0,.15,t.inputOffset),reduceFlashing:i(n.reduceFlashing,t.reduceFlashing),vibration:i(n.vibration,t.vibration)}}function sn(e){let t=e.settings&&typeof e.settings==`object`?{...e.settings}:{};(e.mute===`1`||e.mute===1||e.mute===!0)&&(t.sound=!1);let n=e.tuning&&typeof e.tuning==`object`?e.tuning:{};return typeof n[`input.OFFSET`]==`number`&&(t.inputOffset=n[`input.OFFSET`]),typeof n[`audio.ON`]==`number`&&(t.bgmOn=n[`audio.ON`]>=.5),on(t)}var cn=null,ln=$t(),un=Promise.resolve();function dn(){try{if(typeof crypto<`u`&&typeof crypto.randomUUID==`function`)return crypto.randomUUID()}catch{}let e=()=>Math.floor(Math.random()*16).toString(16);return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,t=>t===`x`?e():(8+Math.floor(Math.random()*4)).toString(16))}var fn=(e,t)=>{if(!e)return t;try{return JSON.parse(e)}catch{return t}};function pn(e,t){let n=[];if(Array.isArray(e.monsters)){for(let t of e.monsters)if(t&&typeof t.seed==`number`&&typeof t.color==`string`)try{n.push(Ut(t))}catch{}}let r=sn(e),i=Array.isArray(e.logs)?e.logs.slice(-20):[];return{schema:2,playerId:t,monsters:n.slice(0,3),settings:r,stats:[],logs:i}}function mn(e){return!e||typeof e!=`object`||e.schema!==2?null:{schema:2,playerId:typeof e.playerId==`string`&&e.playerId?e.playerId:dn(),monsters:Array.isArray(e.monsters)?e.monsters:[],settings:on(e.settings),stats:Array.isArray(e.stats)?e.stats:[],logs:Array.isArray(e.logs)?e.logs:[]}}async function hn(e=Qt){ln=e;let t=await e.load(tn),n=mn(fn(t,null));if(n){let r=fn(t,null);return r?.settings&&r.settings.sound===void 0&&(n.settings=sn({settings:r.settings,mute:await e.loadLegacy(nn.mute),tuning:fn(await e.loadLegacy(nn.tuning),null)})),cn=n,{migrated:!1,backend:e.name}}return cn=pn({monsters:fn(await e.loadLegacy(nn.monsters),null),settings:fn(await e.loadLegacy(nn.settings),null),logs:fn(await e.loadLegacy(nn.logs),null),mute:await e.loadLegacy(nn.mute),tuning:fn(await e.loadLegacy(nn.tuning),null)},dn()),await vn(),{migrated:!0,backend:e.name}}function gn(){return cn||(cn=pn({},dn())),cn}function _n(e){e(gn()),vn()}function vn(){let e=JSON.stringify(gn());return un=un.then(()=>ln.save(tn,e)).catch(e=>{console.warn(`save failed`,e)}),un}function yn(){return JSON.stringify(gn()).length}function bn(){return gn().monsters.map(Wt)}function xn(e){return _n(t=>{for(t.monsters=t.monsters.filter(t=>t.id!==e.id),t.monsters.unshift(Ut(e));t.monsters.length>3;)t.monsters.pop()}),bn()}function Sn(e){_n(t=>{let n=t.monsters.find(t=>t.id===e.id);n?e.sign?n.sign=Ht(e.sign):delete n.sign:t.monsters.unshift(Ut(e))})}function Cn(e){_n(t=>{for(t.monsters=t.monsters.filter(t=>t.id!==e.id),t.monsters.unshift(e);t.monsters.length>3;)t.monsters.pop()})}function wn(e){_n(t=>{t.monsters=t.monsters.filter(t=>t.id!==e)})}function Tn(e){let t=gn().monsters.find(t=>t.id===e);return t?Wt(t):void 0}function En(){return on(gn().settings)}function Dn(e){_n(t=>{t.settings=on({...t.settings,...e})}),On(En())}function On(e){tt({sound:e.sound,sfxVolume:e.sfxVolume,bgmOn:e.bgmOn,bgmVolume:e.bgmVolume})}function kn(t,n){let i=H(`div`,{class:`screen scroll`}),a=En(),o=H(`div`,{class:`list`}),s=bn();s.length===0&&o.append(H(`div`,{class:`notice`},r(`home.empty`)));for(let e of s){let t=H(`div`,{class:`card mcard`,style:`cursor:pointer`},e.thumb?H(`img`,{class:`thumb`,src:e.thumb,alt:``}):H(`div`,{class:`thumb`,style:`background:${e.color}`}),H(`div`,{class:`grow`},H(`h2`,{},e.name,` `,H(`span`,{class:`chip`},`${Ve[e.skeleton]}${r(`common.sep`)}${He[e.size]}`)),H(`p`,{class:`small sub`},r(`home.stats1`,{hp:qe(e.stats.hp),spd:qe(e.stats.spd)})),H(`p`,{class:`small sub`},r(`home.stats2`,{atk:qe(e.stats.atk),mag:qe(e.stats.mag),sign:e.sign?r(`home.signYes`):r(`home.signNo`)}))));t.addEventListener(`click`,()=>n({name:`card`,id:e.id})),o.append(t)}let c=H(`input`,{type:`file`,accept:`image/*`});c.addEventListener(`change`,()=>{let e=c.files?.[0];e&&(An=e,n({name:`summon`,mode:`image`}))});let l=H(`input`,{type:`checkbox`});l.checked=a.castGuide,l.addEventListener(`change`,()=>Dn({...En(),castGuide:l.checked}));let u=H(`input`,{type:`checkbox`});return u.checked=a.sound,u.addEventListener(`change`,()=>{Dn({sound:u.checked}),u.checked&&(ot(),bt(`open`))}),i.append(H(`div`,{class:`pad col`,style:`gap:16px`},H(`div`,{},H(`h1`,{},r(`home.title`)),H(`p`,{class:`sub`},r(`home.lead`))),H(`button`,{class:`btn primary`,onClick:()=>n({name:`summon`,mode:`camera`})},r(`home.summonCamera`)),H(`label`,{class:`btn file-label`,style:`text-align:center`},r(`home.summonImage`),c),H(`h2`,{style:`margin-top:8px`},r(`home.myMonsters`)),o,H(`label`,{class:`toggle`,style:`margin-top:10px`},l,r(`home.castGuide`)),H(`label`,{class:`toggle`},u,r(`home.sound`)),H(`p`,{class:`small sub`},r(`home.debugHint`,{version:e,build:Ue})),H(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`settings`})},r(`home.settings`)),H(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`debug`})},r(`home.debug`)))),t.append(i),{unmount:()=>{Ye(i),i.remove()}}}var An=null;function jn(){let e=An;return An=null,e}var Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn=1e3,Hn=1001,Un=1002,Wn=1003,Gn=1004,Kn=1005,qn=1006,Jn=1007,Yn=1008,Xn=1009,Zn=1010,Qn=1011,$n=1012,er=1013,tr=1014,nr=1015,rr=1016,ir=1017,ar=1018,or=1020,sr=35902,cr=35899,lr=1021,ur=1022,dr=1023,fr=1026,pr=1027,mr=1028,hr=1029,gr=1030,_r=1031,vr=1033,yr=33776,br=33777,xr=33778,Sr=33779,Cr=35840,wr=35841,Tr=35842,Er=35843,Dr=36196,Or=37492,kr=37496,Ar=37488,jr=37489,Mr=37490,Nr=37491,Pr=37808,Fr=37809,Ir=37810,Lr=37811,Rr=37812,zr=37813,Br=37814,Vr=37815,Hr=37816,Ur=37817,Wr=37818,Gr=37819,Kr=37820,qr=37821,Jr=36492,Yr=36494,Xr=36495,Zr=36283,Qr=36284,$r=36285,ei=36286,ti=2300,ni=2301,ri=2302,ii=2303,ai=2400,oi=2401,si=2402,ci=3200,li=`srgb`,ui=`srgb-linear`,di=`linear`,fi=`srgb`,pi=7680,mi=35044,hi=2e3;function gi(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _i(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vi(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function yi(){let e=vi(`canvas`);return e.style.display=`block`,e}var bi={};function xi(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Si(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=Si(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function K(...e){e=Si(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ci(...e){let t=e.join(` `);t in bi||(bi[t]=!0,G(...e))}function wi(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ti={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Di=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Oi=1234567,ki=Math.PI/180,Ai=180/Math.PI;function ji(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Di[e&255]+Di[e>>8&255]+Di[e>>16&255]+Di[e>>24&255]+`-`+Di[t&255]+Di[t>>8&255]+`-`+Di[t>>16&15|64]+Di[t>>24&255]+`-`+Di[n&63|128]+Di[n>>8&255]+`-`+Di[n>>16&255]+Di[n>>24&255]+Di[r&255]+Di[r>>8&255]+Di[r>>16&255]+Di[r>>24&255]).toLowerCase()}function Mi(e,t,n){return Math.max(t,Math.min(n,e))}function Ni(e,t){return(e%t+t)%t}function Pi(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Fi(e,t,n){return e===t?0:(n-e)/(t-e)}function Ii(e,t,n){return(1-n)*e+n*t}function Li(e,t,n,r){return Ii(e,t,1-Math.exp(-n*r))}function Ri(e,t=1){return t-Math.abs(Ni(e,t*2)-t)}function zi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Bi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Vi(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Hi(e,t){return e+Math.random()*(t-e)}function Ui(e){return e*(.5-Math.random())}function Wi(e){e!==void 0&&(Oi=e);let t=Oi+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gi(e){return e*ki}function Ki(e){return e*Ai}function qi(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ji(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Yi(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Xi(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:G(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Zi(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qi(e,t){if(t.constructor===Float32Array)return e;let n=Zi(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function $i(e,t){if(t.constructor===Float32Array)return e;let n=Zi(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var ea={DEG2RAD:ki,RAD2DEG:Ai,generateUUID:ji,clamp:Mi,euclideanModulo:Ni,mapLinear:Pi,inverseLerp:Fi,lerp:Ii,damp:Li,pingpong:Ri,smoothstep:zi,smootherstep:Bi,randInt:Vi,randFloat:Hi,randFloatSpread:Ui,seededRandom:Wi,degToRad:Gi,radToDeg:Ki,isPowerOfTwo:qi,ceilPowerOfTwo:Ji,floorPowerOfTwo:Yi,setQuaternionFromProperEuler:Xi,normalize:$i,denormalize:Qi};Rn=Symbol.iterator;var q=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mi(this.x,e.x,t.x),this.y=Mi(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mi(this.x,e,t),this.y=Mi(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Rn](){yield this.x,yield this.y}};Mn=q,Mn.prototype.isVector2=!0;var ta=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};zn=Symbol.iterator;var J=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ra.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ra.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mi(this.x,e.x,t.x),this.y=Mi(this.y,e.y,t.y),this.z=Mi(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mi(this.x,e,t),this.y=Mi(this.y,e,t),this.z=Mi(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[zn](){yield this.x,yield this.y,yield this.z}};Nn=J,Nn.prototype.isVector3=!0;var na=new J,ra=new ta,Y=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ci(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ia.makeScale(e,t)),this}rotate(e){return Ci(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return Ci(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pn=Y,Pn.prototype.isMatrix3=!0;var ia=new Y,aa=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sa(){let e={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=la(e.r),e.g=la(e.g),e.b=la(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ua(e.r),e.g=ua(e.g),e.b=ua(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?di:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ui]:{primaries:t,whitePoint:r,transfer:di,toXYZ:aa,fromXYZ:oa,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:fi,toXYZ:aa,fromXYZ:oa,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),e}var ca=sa();function la(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ua(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var da,fa=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{da===void 0&&(da=vi(`canvas`)),da.width=e.width,da.height=e.height;let t=da.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=da}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=vi(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=la(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(la(t[e]/255)*255):t[e]=la(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},pa=0,ma=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pa++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ha(r[t].image)):e.push(ha(r[t]))}else e=ha(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ha(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?fa.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var ga=0,_a=new J,va=class e extends Ei{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Hn,i=Hn,a=qn,o=Yn,s=dr,c=Xn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ga++}),this.uuid=ji(),this.name=``,this.source=new ma(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x-=Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Un:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y-=Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Un:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};va.DEFAULT_IMAGE=null,va.DEFAULT_MAPPING=300,va.DEFAULT_ANISOTROPY=1,Bn=Symbol.iterator;var ya=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mi(this.x,e.x,t.x),this.y=Mi(this.y,e.y,t.y),this.z=Mi(this.z,e.z,t.z),this.w=Mi(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mi(this.x,e,t),this.y=Mi(this.y,e,t),this.z=Mi(this.z,e,t),this.w=Mi(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Bn](){yield this.x,yield this.y,yield this.z,yield this.w}};Fn=ya,Fn.prototype.isVector4=!0;var ba=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ya(0,0,e,t),this.scissorTest=!1,this.viewport=new ya(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new va({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ma(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},xa=class extends ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends va{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ca=class extends va{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wa=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ta.setFromMatrixColumn(e,0).length(),i=1/Ta.setFromMatrixColumn(e,1).length(),a=1/Ta.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Da,e,Oa)}lookAt(e,t,n){let r=this.elements;return ja.subVectors(e,t),ja.lengthSq()===0&&(ja.z=1),ja.normalize(),ka.crossVectors(n,ja),ka.lengthSq()===0&&(Math.abs(n.z)===1?ja.x+=1e-4:ja.z+=1e-4,ja.normalize(),ka.crossVectors(n,ja)),ka.normalize(),Aa.crossVectors(ja,ka),r[0]=ka.x,r[4]=Aa.x,r[8]=ja.x,r[1]=ka.y,r[5]=Aa.y,r[9]=ja.y,r[2]=ka.z,r[6]=Aa.z,r[10]=ja.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ta.set(r[0],r[1],r[2]).length(),o=Ta.set(r[4],r[5],r[6]).length(),s=Ta.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ea.copy(this);let c=1/a,l=1/o,u=1/s;return Ea.elements[0]*=c,Ea.elements[1]*=c,Ea.elements[2]*=c,Ea.elements[4]*=l,Ea.elements[5]*=l,Ea.elements[6]*=l,Ea.elements[8]*=u,Ea.elements[9]*=u,Ea.elements[10]*=u,t.setFromRotationMatrix(Ea),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=hi,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=hi,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};In=wa,In.prototype.isMatrix4=!0;var Ta=new J,Ea=new wa,Da=new J(0,0,0),Oa=new J(1,1,1),ka=new J,Aa=new J,ja=new J,Ma=new wa,Na=new ta,Pa=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Mi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Mi(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Mi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Mi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Mi(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Mi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pa.DEFAULT_ORDER=`XYZ`;var Fa=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ia=0,La=new J,Ra=new ta,za=new wa,Ba=new J,Va=new J,Ha=new J,Ua=new ta,Wa=new J(1,0,0),Ga=new J(0,1,0),Ka=new J(0,0,1),qa={type:`added`},Ja={type:`removed`},Ya={type:`childadded`,child:null},Xa={type:`childremoved`,child:null},Za=class e extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ia++}),this.uuid=ji(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Pa,r=new ta,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wa},normalMatrix:{value:new Y}}),this.matrix=new wa,this.matrixWorld=new wa,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.premultiply(Ra),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(Va,Ba,this.up):za.lookAt(Ba,Va,this.up),this.quaternion.setFromRotationMatrix(za),r&&(za.extractRotation(r.matrixWorld),Ra.setFromRotationMatrix(za),this.quaternion.premultiply(Ra.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(K(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null):K(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ja),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,Ha),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,Ua,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Za.DEFAULT_UP=new J(0,1,0),Za.DEFAULT_MATRIX_AUTO_UPDATE=!0,Za.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qa=class extends Za{constructor(){super(),this.isGroup=!0,this.type=`Group`}},$a={type:`move`},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($a)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},to={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},no={h:0,s:0,l:0},ro={h:0,s:0,l:0};function io(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ca.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ca.workingColorSpace){return this.r=e,this.g=t,this.b=n,ca.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ca.workingColorSpace){if(e=Ni(e,1),t=Mi(t,0,1),n=Mi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=io(i,r,e+1/3),this.g=io(i,r,e),this.b=io(i,r,e-1/3)}return ca.colorSpaceToWorking(this,r),this}setStyle(e,t=li){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){let n=to[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return ca.workingToColorSpace(ao.copy(this),e),Math.round(Mi(ao.r*255,0,255))*65536+Math.round(Mi(ao.g*255,0,255))*256+Math.round(Mi(ao.b*255,0,255))}getHexString(e=li){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ca.workingColorSpace){ca.workingToColorSpace(ao.copy(this),t);let n=ao.r,r=ao.g,i=ao.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=ca.workingColorSpace){return ca.workingToColorSpace(ao.copy(this),t),e.r=ao.r,e.g=ao.g,e.b=ao.b,e}getStyle(e=li){ca.workingToColorSpace(ao.copy(this),e);let t=ao.r,n=ao.g,r=ao.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(no),this.setHSL(no.h+e,no.s+t,no.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(no),e.getHSL(ro);let n=Ii(no.h,ro.h,t),r=Ii(no.s,ro.s,t),i=Ii(no.l,ro.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ao=new X;X.NAMES=to;var oo=class extends Za{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},so=new J,co=new J,lo=new J,uo=new J,fo=new J,po=new J,mo=new J,ho=new J,go=new J,_o=new J,vo=new ya,yo=new ya,bo=new ya,xo=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),so.subVectors(e,t),r.cross(so);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){so.subVectors(r,t),co.subVectors(n,t),lo.subVectors(e,t);let a=so.dot(so),o=so.dot(co),s=so.dot(lo),c=co.dot(co),l=co.dot(lo),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,uo)!==null&&uo.x>=0&&uo.y>=0&&uo.x+uo.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,uo)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,uo.x),s.addScaledVector(a,uo.y),s.addScaledVector(o,uo.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return vo.setScalar(0),yo.setScalar(0),bo.setScalar(0),vo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vo,i.x),a.addScaledVector(yo,i.y),a.addScaledVector(bo,i.z),a}static isFrontFacing(e,t,n,r){return so.subVectors(n,t),co.subVectors(e,t),so.cross(co).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return so.subVectors(this.c,this.b),co.subVectors(this.a,this.b),so.cross(co).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;fo.subVectors(r,n),po.subVectors(i,n),ho.subVectors(e,n);let s=fo.dot(ho),c=po.dot(ho);if(s<=0&&c<=0)return t.copy(n);go.subVectors(e,r);let l=fo.dot(go),u=po.dot(go);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(fo,a);_o.subVectors(e,i);let f=fo.dot(_o),p=po.dot(_o);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(po,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return mo.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(mo,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(fo,a).addScaledVector(po,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},So=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wo.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wo.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,wo):wo.fromBufferAttribute(r,t),wo.applyMatrix4(e.matrixWorld),this.expandByPoint(wo);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wo),wo.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),No.subVectors(this.max,Mo),Eo.subVectors(e.a,Mo),Do.subVectors(e.b,Mo),Oo.subVectors(e.c,Mo),ko.subVectors(Do,Eo),Ao.subVectors(Oo,Do),jo.subVectors(Eo,Oo);let t=[0,-ko.z,ko.y,0,-Ao.z,Ao.y,0,-jo.z,jo.y,ko.z,0,-ko.x,Ao.z,0,-Ao.x,jo.z,0,-jo.x,-ko.y,ko.x,0,-Ao.y,Ao.x,0,-jo.y,jo.x,0];return!Io(t,Eo,Do,Oo,No)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Eo,Do,Oo,No))?!1:(Po.crossVectors(ko,Ao),t=[Po.x,Po.y,Po.z],Io(t,Eo,Do,Oo,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wo).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wo).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Co[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Co[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Co[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Co[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Co[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Co[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Co[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Co[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Co)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Co=[new J,new J,new J,new J,new J,new J,new J,new J],wo=new J,To=new So,Eo=new J,Do=new J,Oo=new J,ko=new J,Ao=new J,jo=new J,Mo=new J,No=new J,Po=new J,Fo=new J;function Io(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Fo.fromArray(e,a);let o=i.x*Math.abs(Fo.x)+i.y*Math.abs(Fo.y)+i.z*Math.abs(Fo.z),s=t.dot(Fo),c=n.dot(Fo),l=r.dot(Fo);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Lo=new J,Ro=new q,zo=0,Bo=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zo++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=mi,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e===void 0?void 0:Zi(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix4(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyNormalMatrix(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.transformDirection(e),this.setXYZ(t,Lo.x,Lo.y,Lo.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Qi(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?$i(e,this.array):Math.round(e*t)}},Vo=class extends Bo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ho=class extends Bo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Uo=class extends Bo{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wo=new So,Go=new J,Ko=new J,qo=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Wo.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);let t=Go.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Go,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Ko)),this.expandByPoint(Go.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jo=0,Yo=new wa,Xo=new Za,Zo=new J,Qo=new So,$o=new So,es=new J,ts=class e extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=ji(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(gi(e)?Ho:Vo)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yo.makeRotationFromQuaternion(e),this.applyMatrix4(Yo),this}rotateX(e){return Yo.makeRotationX(e),this.applyMatrix4(Yo),this}rotateY(e){return Yo.makeRotationY(e),this.applyMatrix4(Yo),this}rotateZ(e){return Yo.makeRotationZ(e),this.applyMatrix4(Yo),this}translate(e,t,n){return Yo.makeTranslation(e,t,n),this.applyMatrix4(Yo),this}scale(e,t,n){return Yo.makeScale(e,t,n),this.applyMatrix4(Yo),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zo).negate(),this.translate(Zo.x,Zo.y,Zo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Uo(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qo.setFromBufferAttribute(n),this.morphTargetsRelative?(es.addVectors(this.boundingBox.min,Qo.min),this.boundingBox.expandByPoint(es),es.addVectors(this.boundingBox.max,Qo.max),this.boundingBox.expandByPoint(es)):(this.boundingBox.expandByPoint(Qo.min),this.boundingBox.expandByPoint(Qo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&K(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if(Qo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$o.setFromBufferAttribute(n),this.morphTargetsRelative?(es.addVectors(Qo.min,$o.min),Qo.expandByPoint(es),es.addVectors(Qo.max,$o.max),Qo.expandByPoint(es)):(Qo.expandByPoint($o.min),Qo.expandByPoint($o.max))}Qo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)es.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(es));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)es.fromBufferAttribute(a,t),o&&(Zo.fromBufferAttribute(e,t),es.add(Zo)),r=Math.max(r,n.distanceToSquared(es))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&K(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){K(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Bo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let l=new J,u=new J,d=new J,f=new q,p=new q,m=new q,h=new J,g=new J;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new J,b=new J,x=new J,S=new J;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Bo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)es.fromBufferAttribute(e,t),es.normalize(),e.setXYZ(t,es.x,es.y,es.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Bo(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=mi,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rs(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rs(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function rs(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ji()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var is=new J,as=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Zi(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix4(e),this.setXYZ(t,is.x,is.y,is.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyNormalMatrix(e),this.setXYZ(t,is.x,is.y,is.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.transformDirection(e),this.setXYZ(t,is.x,is.y,is.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){xi(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Bo(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xi(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Qi(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?$i(e,this.data.array):Math.round(e*t)}},os=new J,ss=new J,cs=new Y,ls=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=os.subVectors(n,t).cross(ss.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(os),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cs.getNormalMatrix(e),r=this.coplanarPoint(os).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},us=0,ds=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:us++}),this.uuid=ji(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ls().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},fs=class extends ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,ms=new J,hs=new J,gs=new J,_s=new q,vs=new q,ys=new wa,bs=new J,xs=new J,Ss=new J,Cs=new q,ws=new q,Ts=new q,Es=class extends Za{constructor(e=new fs){if(super(),this.isSprite=!0,this.type=`Sprite`,ps===void 0){ps=new ts;let e=new ns(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute(`position`,new as(e,3,0,!1)),ps.setAttribute(`uv`,new as(e,2,3,!1))}this.geometry=ps,this.material=e,this.center=new q(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&K(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),hs.setFromMatrixScale(this.matrixWorld),ys.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-gs.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ds(bs.set(-.5,-.5,0),gs,a,hs,r,i),Ds(xs.set(.5,-.5,0),gs,a,hs,r,i),Ds(Ss.set(.5,.5,0),gs,a,hs,r,i),Cs.set(0,0),ws.set(1,0),Ts.set(1,1);let o=e.ray.intersectTriangle(bs,xs,Ss,!1,ms);if(o===null&&(Ds(xs.set(-.5,.5,0),gs,a,hs,r,i),ws.set(0,1),o=e.ray.intersectTriangle(bs,Ss,xs,!1,ms),o===null))return;let s=e.ray.origin.distanceTo(ms);s<e.near||s>e.far||t.push({distance:s,point:ms.clone(),uv:xo.getInterpolation(ms,bs,xs,Ss,Cs,ws,Ts,new q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ds(e,t,n,r,i,a){_s.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?vs.copy(_s):(vs.x=a*_s.x-i*_s.y,vs.y=i*_s.x+a*_s.y),e.copy(t),e.x+=vs.x,e.y+=vs.y,e.applyMatrix4(ys)}var Os=new J,ks=new J,As=new J,js=new J,Ms=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Os.copy(this.origin).addScaledVector(this.direction,t),Os.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ks.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),js.copy(this.origin).sub(ks);let i=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=js.dot(this.direction),s=-js.dot(As),c=js.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ks).addScaledVector(As,d),f}intersectSphere(e,t){if(e.radius<0)return null;Os.subVectors(e.center,this.origin);let n=Os.dot(this.direction),r=Os.dot(Os)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Os)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,N=O-te*A,oe=k-ne*A,se=j-te*M,P=ee-ne*M,ce=se*oe-P*N,F=ie*P-ae*se,le=N*ae-oe*ie;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=re*(ce*D+F*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ns=class extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ps=new wa,Fs=new Ms,Is=new qo,Ls=new J,Rs=new J,zs=new J,Bs=new J,Vs=new J,Hs=new J,Us=new J,Ws=new J,Gs=class extends Za{constructor(e=new ts,t=new Ns){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Hs.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Vs.fromBufferAttribute(s,e),a?Hs.addScaledVector(Vs,r):Hs.addScaledVector(Vs.sub(t),r))}t.add(Hs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Fs.copy(e.ray).recast(e.near),Is.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Is,Ls)===null||Fs.origin.distanceToSquared(Ls)>(e.far-e.near)**2)||(Ps.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(Ps),(n.boundingBox===null||Fs.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=qs(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=qs(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=qs(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=qs(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ks(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ws.copy(s),Ws.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ws);return l<n.near||l>n.far?null:{distance:l,point:Ws.clone(),object:e}}function qs(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Rs),e.getVertexPosition(c,zs),e.getVertexPosition(l,Bs);let u=Ks(e,t,n,r,Rs,zs,Bs,Us);if(u){let e=new J;xo.getBarycoord(Us,Rs,zs,Bs,e),i&&(u.uv=xo.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=xo.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=xo.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};xo.getNormal(Rs,zs,Bs,t.normal),u.face=t,u.barycoord=e}return u}var Js=class extends va{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Wn,l=Wn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ys=new qo,Xs=new q(.5,.5),Zs=new J,Qs=class{constructor(e=new ls,t=new ls,n=new ls,r=new ls,i=new ls,a=new ls){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476+Xs.distanceTo(e.center),Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$s=new wa,ec=class e{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];$s.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Qs),n[e].setFromProjectionMatrix($s,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Qs),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},tc=class extends va{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nc=class extends va{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rc=class extends va{constructor(e,t,n=tr,r,i,a,o=Wn,s=Wn,c,l=fr,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ic=class extends rc{constructor(e,t=tr,n=301,r,i,a=Wn,o=Wn,s,c=fr){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ac=class extends va{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oc=class e extends ts{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Uo(c,3)),this.setAttribute(`normal`,new Uo(l,3)),this.setAttribute(`uv`,new Uo(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sc=class e extends ts{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new J,g=new J;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Uo(o,3)),this.setAttribute(`normal`,new Uo(s,3)),this.setAttribute(`uv`,new Uo(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},cc=class e extends ts{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new q;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Uo(a,3)),this.setAttribute(`normal`,new Uo(o,3)),this.setAttribute(`uv`,new Uo(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},lc=class e extends ts{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Uo(u,3)),this.setAttribute(`normal`,new Uo(d,3)),this.setAttribute(`uv`,new Uo(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new q,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},uc=class e extends lc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){G(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new q:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new J,r=[],i=[],a=[],o=new J,s=new wa;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Mi(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Mi(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},fc=class extends dc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new q){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pc=class extends fc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function mc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var hc=new J,gc=new J,_c=new mc,vc=new mc,yc=new mc,bc=class extends dc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(gc.subVectors(r[0],r[1]).add(r[0]),c=gc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(hc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=hc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),_c.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),vc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),yc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(_c.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),vc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),yc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(_c.calc(s),vc.calc(s),yc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Sc(e,t){let n=1-e;return n*n*t}function Cc(e,t){return 2*(1-e)*e*t}function wc(e,t){return e*e*t}function Tc(e,t,n,r){return Sc(e,t)+Cc(e,n)+wc(e,r)}function Ec(e,t){let n=1-e;return n*n*n*t}function Dc(e,t){let n=1-e;return 3*n*n*e*t}function Oc(e,t){return 3*(1-e)*e*e*t}function kc(e,t){return e*e*e*t}function Ac(e,t,n,r,i){return Ec(e,t)+Dc(e,n)+Oc(e,r)+kc(e,i)}var jc=class extends dc{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ac(e,r.x,i.x,a.x,o.x),Ac(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends dc{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ac(e,r.x,i.x,a.x,o.x),Ac(e,r.y,i.y,a.y,o.y),Ac(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends dc{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends dc{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends dc{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Tc(e,r.x,i.x,a.x),Tc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends dc{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Tc(e,r.x,i.x,a.x),Tc(e,r.y,i.y,a.y),Tc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lc=Object.freeze({__proto__:null,ArcCurve:pc,CatmullRomCurve3:bc,CubicBezierCurve:jc,CubicBezierCurve3:Mc,EllipseCurve:fc,LineCurve:Nc,LineCurve3:Pc,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:Ic,SplineCurve:class extends dc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new q){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(xc(o,s.x,c.x,l.x,u.x),xc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}}}),Rc=class e extends ts{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Uo(p,3)),this.setAttribute(`normal`,new Uo(m,3)),this.setAttribute(`uv`,new Uo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},zc=class e extends ts{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new J,p=new q;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Uo(s,3)),this.setAttribute(`normal`,new Uo(c,3)),this.setAttribute(`uv`,new Uo(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Bc=class e extends ts{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Uo(p,3)),this.setAttribute(`normal`,new Uo(m,3)),this.setAttribute(`uv`,new Uo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Vc=class e extends ts{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new J,f=new J,p=new J;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Uo(c,3)),this.setAttribute(`normal`,new Uo(l,3)),this.setAttribute(`uv`,new Uo(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Hc=class e extends ts{constructor(e=new Ic(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new J,s=new J,c=new q,l=new J,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Uo(u,3)),this.setAttribute(`normal`,new Uo(d,3)),this.setAttribute(`uv`,new Uo(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Lc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Uc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Gc(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Gc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Wc(e){let t={};for(let n=0;n<e.length;n++){let r=Uc(e[n]);for(let e in r)t[e]=r[e]}return t}function Gc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Kc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ca.workingColorSpace}var Jc={clone:Uc,merge:Wc},Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zc=class extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uc(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ya().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new wa().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qc=class extends Zc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},$c=class extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ci,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tl(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function nl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var rl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},il=class extends rl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ai,endingEnd:ai}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case oi:i=e,o=2*t-n;break;case si:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case oi:a=e,s=2*n-t;break;case si:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},al=class extends rl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ol=class extends rl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},sl=class extends rl{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ul(n,t,g,y,r);i[p]=cl(x,o,_,b,m)}return i}};function cl(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ll(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ul(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=cl(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ll(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var dl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=tl(t,this.TimeBufferType),this.values=tl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tl(e.times,Array),values:tl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),nl(e.settings)&&(n.settings={inTangents:tl(e.settings.inTangents,Array),outTangents:tl(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ti:t=this.InterpolantFactoryMethodDiscrete;break;case ni:t=this.InterpolantFactoryMethodLinear;break;case ri:t=this.InterpolantFactoryMethodSmooth;break;case ii:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ti;case this.InterpolantFactoryMethodLinear:return ni;case this.InterpolantFactoryMethodSmooth:return ri;case this.InterpolantFactoryMethodBezier:return ii}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;nl(this.settings)&&(fl(this.settings.inTangents,e),fl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;nl(this.settings)&&(pl(this.settings.inTangents,e),pl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(K(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(K(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){K(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){K(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&_i(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){K(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ri,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,nl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function fl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function pl(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}dl.prototype.ValueTypeName=``,dl.prototype.TimeBufferType=Float32Array,dl.prototype.ValueBufferType=Float32Array,dl.prototype.DefaultInterpolation=ni;var ml=class extends dl{constructor(e,t,n){super(e,t,n)}};ml.prototype.ValueTypeName=`bool`,ml.prototype.ValueBufferType=Array,ml.prototype.DefaultInterpolation=ti,ml.prototype.InterpolantFactoryMethodLinear=void 0,ml.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}};hl.prototype.ValueTypeName=`color`;var gl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}};gl.prototype.ValueTypeName=`number`;var _l=class extends rl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ta.slerpFlat(i,0,a,c-o,a,c,s);return i}},vl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};vl.prototype.ValueTypeName=`quaternion`,vl.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends dl{constructor(e,t,n){super(e,t,n)}};yl.prototype.ValueTypeName=`string`,yl.prototype.ValueBufferType=Array,yl.prototype.DefaultInterpolation=ti,yl.prototype.InterpolantFactoryMethodLinear=void 0,yl.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends dl{constructor(e,t,n,r){super(e,t,n,r)}};bl.prototype.ValueTypeName=`vector`;var xl=new J,Sl=new ta,Cl=new J,wl=class extends Za{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new wa,this.projectionMatrix=new wa,this.projectionMatrixInverse=new wa,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xl,Sl,Cl),Cl.x===1&&Cl.y===1&&Cl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,Sl,Cl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xl,Sl,Cl),Cl.x===1&&Cl.y===1&&Cl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,Sl,Cl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tl=new J,El=new q,Dl=new q,Ol=class extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ai*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tl.x,Tl.y).multiplyScalar(-e/Tl.z),Tl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tl.x,Tl.y).multiplyScalar(-e/Tl.z)}getViewSize(e,t){return this.getViewBounds(e,El,Dl),t.subVectors(Dl,El)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ki*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kl=class extends wl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Al=-90,jl=1,Ml=class extends Za{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ol(Al,jl,e,t);r.layers=this.layers,this.add(r);let i=new Ol(Al,jl,e,t);i.layers=this.layers,this.add(i);let a=new Ol(Al,jl,e,t);a.layers=this.layers,this.add(a);let o=new Ol(Al,jl,e,t);o.layers=this.layers,this.add(o);let s=new Ol(Al,jl,e,t);s.layers=this.layers,this.add(s);let c=new Ol(Al,jl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Nl=class extends Ol{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Pl=`\\[\\]\\.:\\/`,Fl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Il=`[^\\[\\]\\.:\\/]`,Ll=`[^`+Pl.replace(`\\.`,``)+`]`,Rl=`((?:WC+[\\/:])*)`.replace(`WC`,Il),zl=`(WCOD+)?`.replace(`WCOD`,Ll),Bl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Il),Vl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Il),Hl=RegExp(`^`+Rl+zl+Bl+Vl+`$`),Ul=[`material`,`materials`,`bones`,`map`],Wl=class{constructor(e,t,n){let r=n||Gl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Fl,``)}static parseTrackName(e){let t=Hl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ul.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){K(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){K(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){K(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){K(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){K(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;K(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gl.Composite=Wl,Gl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Gl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Gl.prototype.GetterByBindingType=[Gl.prototype._getValue_direct,Gl.prototype._getValue_array,Gl.prototype._getValue_arrayElement,Gl.prototype._getValue_toArray],Gl.prototype.SetterByBindingTypeAndVersioning=[[Gl.prototype._setValue_direct,Gl.prototype._setValue_direct_setNeedsUpdate,Gl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gl.prototype._setValue_array,Gl.prototype._setValue_array_setNeedsUpdate,Gl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gl.prototype._setValue_arrayElement,Gl.prototype._setValue_arrayElement_setNeedsUpdate,Gl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gl.prototype._setValue_fromArray,Gl.prototype._setValue_fromArray_setNeedsUpdate,Gl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kl=new wa,ql=class{constructor(e,t,n=0,r=1/0){this.ray=new Ms(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):K(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Yl(e[r],this,n,t);return n.sort(Jl),n}};function Jl(e,t){return e.distance-t.distance}function Yl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Yl(r[e],t,n,!0)}}Ln=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},Ln.prototype.isMatrix2=!0;function Xl(e,t,n,r){let i=Zl(r);switch(n){case lr:return e*t;case mr:return e*t/i.components*i.byteLength;case hr:return e*t/i.components*i.byteLength;case gr:return e*t*2/i.components*i.byteLength;case _r:return e*t*2/i.components*i.byteLength;case ur:return e*t*3/i.components*i.byteLength;case dr:return e*t*4/i.components*i.byteLength;case vr:return e*t*4/i.components*i.byteLength;case yr:case br:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xr:case Sr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wr:case Er:return Math.max(e,16)*Math.max(t,8)/4;case Cr:case Tr:return Math.max(e,8)*Math.max(t,8)/2;case Dr:case Or:case Ar:case jr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kr:case Mr:case Nr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case qr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Yr:case Xr:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zr:case Qr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case $r:case ei:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zl(e){switch(e){case Xn:case Zn:return{byteLength:1,components:1};case $n:case Qn:case rr:return{byteLength:2,components:1};case ir:case ar:return{byteLength:2,components:4};case tr:case er:case nr:return{byteLength:4,components:1};case sr:case cr:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ql(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $l(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var eu={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Z={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},tu={basic:{uniforms:Wc([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:eu.meshbasic_vert,fragmentShader:eu.meshbasic_frag},lambert:{uniforms:Wc([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:eu.meshlambert_vert,fragmentShader:eu.meshlambert_frag},phong:{uniforms:Wc([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:eu.meshphong_vert,fragmentShader:eu.meshphong_frag},standard:{uniforms:Wc([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:eu.meshphysical_vert,fragmentShader:eu.meshphysical_frag},toon:{uniforms:Wc([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new X(0)}}]),vertexShader:eu.meshtoon_vert,fragmentShader:eu.meshtoon_frag},matcap:{uniforms:Wc([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:eu.meshmatcap_vert,fragmentShader:eu.meshmatcap_frag},points:{uniforms:Wc([Z.points,Z.fog]),vertexShader:eu.points_vert,fragmentShader:eu.points_frag},dashed:{uniforms:Wc([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:eu.linedashed_vert,fragmentShader:eu.linedashed_frag},depth:{uniforms:Wc([Z.common,Z.displacementmap]),vertexShader:eu.depth_vert,fragmentShader:eu.depth_frag},normal:{uniforms:Wc([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:eu.meshnormal_vert,fragmentShader:eu.meshnormal_frag},sprite:{uniforms:Wc([Z.sprite,Z.fog]),vertexShader:eu.sprite_vert,fragmentShader:eu.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:eu.background_vert,fragmentShader:eu.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:eu.backgroundCube_vert,fragmentShader:eu.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:eu.cube_vert,fragmentShader:eu.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:eu.equirect_vert,fragmentShader:eu.equirect_frag},distance:{uniforms:Wc([Z.common,Z.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:eu.distance_vert,fragmentShader:eu.distance_frag},shadow:{uniforms:Wc([Z.lights,Z.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:eu.shadow_vert,fragmentShader:eu.shadow_frag}};tu.physical={uniforms:Wc([tu.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:eu.meshphysical_vert,fragmentShader:eu.meshphysical_frag};var nu={r:0,b:0,g:0},ru=new wa,iu=new Y;iu.set(-1,0,0,0,1,0,0,0,1);function au(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Gs(new oc(1,1,1),new Zc({name:`BackgroundCubeMaterial`,uniforms:Uc(tu.backgroundCube.uniforms),vertexShader:tu.backgroundCube.vertexShader,fragmentShader:tu.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ru.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(iu),l.material.toneMapped=ca.getTransfer(i.colorSpace)!==fi,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Gs(new Rc(2,2),new Zc({name:`BackgroundMaterial`,uniforms:Uc(tu.background.uniforms),vertexShader:tu.background.vertexShader,fragmentShader:tu.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=ca.getTransfer(i.colorSpace)!==fi,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(nu,qc(e)),n.buffers.color.setClear(nu.r,nu.g,nu.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ou(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function su(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&G(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function lu(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ls,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var uu=class extends xa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oc(5,5,5),i=new Zc({name:`CubemapFromEquirect`,uniforms:Uc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Gs(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=qn),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},du=256,fu=3,pu=20,mu=256,hu=16,gu=3,_u=new J,vu=new X,yu=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ml(1,10,null),this._boxMesh=new Gs(new oc(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_u}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(vu));let h=new Ml(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(du,Yi(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?du:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bu(e,!1,!1),n=Math.log2(e)-fu;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Su(),this._integrationMaterial=Cu());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/hu);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-gu)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(mu*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wu());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function bu(e,t,n){return new uu(e,{minFilter:Yn,generateMipmaps:t,type:rr,colorSpace:ui,depthBuffer:n})}function xu(e,t,n){return new Zc({name:e,uniforms:t,vertexShader:eu.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Su(){return xu(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mu}u

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
	`)}function Cu(){return xu(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hu}},`

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
	`)}function wu(){return xu(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pu}
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
	`)}function Tu(){return xu(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function Eu(){return xu(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Du(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new uu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ou(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ci(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ku(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Ho:Vo)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Au(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ju(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Mu(e,t,n){let r=new WeakMap,i=new ya;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Sa(h,p,m,u);g.type=nr,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Nu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Pu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fu(e,t,n,r,i,a){let o=new xa(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new ts;u.setAttribute(`position`,new Uo([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Uo([0,2,0,0,2,0],2));let d=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Gs(u,d),p=new kl(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new xa(t,n,{type:rr,depthBuffer:!1,stencilBuffer:!1}),c=new xa(t,n,{type:rr,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new rc(t,n),a===!0&&(l.format=pr,l.type=or)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},ca.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Pu[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Iu=new va,Lu=new rc(1,1),Ru=new ic(1),zu=new Sa,Bu=new Ca,Vu=new tc,Hu=[],Uu=[],Wu=new Float32Array(16),Gu=new Float32Array(9),Ku=new Float32Array(4);function qu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Hu[i];if(a===void 0&&(a=new Float32Array(i),Hu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ju(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Yu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xu(e,t){let n=Uu[t];n===void 0&&(n=new Int32Array(t),Uu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Zu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2fv(this.addr,t),Yu(n,t)}}function $u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ju(n,t))return;e.uniform3fv(this.addr,t),Yu(n,t)}}function ed(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4fv(this.addr,t),Yu(n,t)}}function td(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Ku.set(r),e.uniformMatrix2fv(this.addr,!1,Ku),Yu(n,r)}}function nd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Gu.set(r),e.uniformMatrix3fv(this.addr,!1,Gu),Yu(n,r)}}function rd(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ju(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Yu(n,t)}else{if(Ju(n,r))return;Wu.set(r),e.uniformMatrix4fv(this.addr,!1,Wu),Yu(n,r)}}function id(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ad(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2iv(this.addr,t),Yu(n,t)}}function od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ju(n,t))return;e.uniform3iv(this.addr,t),Yu(n,t)}}function sd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4iv(this.addr,t),Yu(n,t)}}function cd(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ld(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ju(n,t))return;e.uniform2uiv(this.addr,t),Yu(n,t)}}function ud(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ju(n,t))return;e.uniform3uiv(this.addr,t),Yu(n,t)}}function dd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ju(n,t))return;e.uniform4uiv(this.addr,t),Yu(n,t)}}function fd(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function pd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?fd(Lu):Iu,n.setTexture2D(t||a,i)}function md(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Bu,i)}function hd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?fd(Ru):Vu,n.setTextureCube(t||a,i)}function gd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||zu,i)}function _d(e){switch(e){case 5126:return Zu;case 35664:return Qu;case 35665:return $u;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return rd;case 5124:case 35670:return id;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return sd;case 5125:return cd;case 36294:return ld;case 36295:return ud;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return hd;case 36289:case 36303:case 36311:case 36292:return gd}}function vd(e,t){e.uniform1fv(this.addr,t)}function yd(e,t){let n=qu(t,this.size,2);e.uniform2fv(this.addr,n)}function bd(e,t){let n=qu(t,this.size,3);e.uniform3fv(this.addr,n)}function xd(e,t){let n=qu(t,this.size,4);e.uniform4fv(this.addr,n)}function Sd(e,t){let n=qu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cd(e,t){let n=qu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wd(e,t){let n=qu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Td(e,t){e.uniform1iv(this.addr,t)}function Ed(e,t){e.uniform2iv(this.addr,t)}function Dd(e,t){e.uniform3iv(this.addr,t)}function Od(e,t){e.uniform4iv(this.addr,t)}function kd(e,t){e.uniform1uiv(this.addr,t)}function Ad(e,t){e.uniform2uiv(this.addr,t)}function jd(e,t){e.uniform3uiv(this.addr,t)}function Md(e,t){e.uniform4uiv(this.addr,t)}function Nd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fd(Lu):Iu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Bu,a[e])}function Fd(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?fd(Ru):Vu;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Id(e,t,n){let r=this.cache,i=t.length,a=Xu(n,i);Ju(r,a)||(e.uniform1iv(this.addr,a),Yu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||zu,a[e])}function Ld(e){switch(e){case 5126:return vd;case 35664:return yd;case 35665:return bd;case 35666:return xd;case 35674:return Sd;case 35675:return Cd;case 35676:return wd;case 5124:case 35670:return Td;case 35667:case 35671:return Ed;case 35668:case 35672:return Dd;case 35669:case 35673:return Od;case 5125:return kd;case 36294:return Ad;case 36295:return jd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Id}}var Rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_d(t.type)}},zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ld(t.type)}},Bd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function Hd(e,t){e.seq.push(t),e.map[t.id]=t}function Ud(e,t,n){let r=e.name,i=r.length;for(Vd.lastIndex=0;;){let a=Vd.exec(r),o=Vd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hd(n,l===void 0?new Rd(s,e,t):new zd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bd(s),Hd(n,e)),n=e}}}var Wd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ud(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kd=37297,qd=0;function Jd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yd=new Y;function Xd(e){ca._getMatrix(Yd,ca.workingColorSpace,e);let t=`mat3( ${Yd.elements.map(e=>e.toFixed(4))} )`;switch(ca.getTransfer(e)){case di:return[t,`LinearTransferOETF`];case fi:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jd(e.getShaderSource(t),r)}return i}function Qd(e,t){let n=Xd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var $d={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ef(e,t){let n=$d[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tf=new J;function nf(){return ca.getLuminanceCoefficients(tf),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tf.x.toFixed(4)}, ${tf.y.toFixed(4)}, ${tf.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function rf(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(sf).join(`
`)}function af(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function of(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function sf(e){return e!==``}function cf(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(e){return e.replace(uf,ff)}function ff(e,t){let n=eu[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return df(n)}var pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(e){return e.replace(pf,hf)}function hf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gf(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var _f={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vf(e){return _f[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yf={302:`ENVMAP_MODE_REFRACTION`};function bf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:yf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xf[e.combine]||`ENVMAP_BLENDING_NONE`}function Cf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vf(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=bf(n),d=Sf(n),f=rf(n),p=af(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(sf).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(sf).join(`
`),g.length>0&&(g+=`
`)):(h=[gf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(sf).join(`
`),g=[gf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:eu.tonemapping_pars_fragment,n.toneMapping===0?``:ef(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,eu.colorspace_pars_fragment,Qd(`linearToOutputTexel`,n.outputColorSpace),nf(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(sf).join(`
`)),o=df(o),o=cf(o,n),o=lf(o,n),s=df(s),s=cf(s,n),s=lf(s,n),o=mf(o),s=mf(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Gd(i,i.VERTEX_SHADER,v),x=Gd(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Zd(i,b,`vertex`),n=Zd(i,x,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Wd(i,m),w=of(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Kd)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qd++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var wf=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ef(e),t.set(e,n)),n}},Ef=class{constructor(e){this.id=wf++,this.code=e,this.usedTimes=0}};function Df(e){return e===1030||e===37490||e===36285}function Of(e,t,n,r,i,a){let o=new Fa,s=new Tf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=tu[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,N=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,P=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,I=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,L=!!i.specularMap,Ee=!!i.specularColorMap,R=!!i.specularIntensityMap,z=_e&&!!i.transmissionMap,De=_e&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,B={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ca.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?Pe.length-1:null,envMapSize:ie?Pe[0].width:null,aoMap:ae,lightMap:N,bumpMap:oe,normalMap:se,displacementMap:P,emissiveMap:ce,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Df(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:I,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:L,specularColorMap:Ee,specularIntensityMap:R,transmission:_e,transmissionMap:z,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:N&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:P&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:I&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(i.sheenRoughnessMap.channel),specularMapUv:L&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:R&&p(i.specularIntensityMap.channel),transmissionMapUv:z&&p(i.transmissionMap.channel),thicknessMapUv:De&&p(i.thicknessMap.channel),alphaMapUv:ke&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||ke),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&ca.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&ca.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=tu[t];n=Jc.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Cf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function kf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Af(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Af),r.length>1&&r.sort(t||jf),i.length>1&&i.sort(t||jf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Nf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Mf,e.set(t,[i])):n>=r.length?(i=new Mf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Pf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function Ff(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var If=0;function Lf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Rf(e){let t=new Pf,n=Ff(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new wa,o=new wa;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Lf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=If++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function zf(e){let t=new Rf(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Bf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new zf(e),t.set(n,[a])):r>=i.length?(a=new zf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
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
}`,Uf=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Wf=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Gf=new wa,Kf=new J,qf=new J;function Jf(e,t,n){let r=new Qs,i=new q,a=new q,o=new ya,s=new $c,c=new el,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Zc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Vf,fragmentShader:Hf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ts;m.setAttribute(`position`,new Bo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Gs(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new xa(i.x,i.y,{format:gr,type:rr,minFilter:qn,magFilter:qn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new rc(i.x,i.y,nr),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=fr,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Wn,d.map.depthTexture.magFilter=Wn}else l.isPointLight?(d.map=new uu(i.x),d.map.depthTexture=new ic(i.x,tr)):(d.map=new xa(i.x,i.y),d.map.depthTexture=new rc(i.x,i.y,tr)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=fr,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=qn,d.map.depthTexture.magFilter=qn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Wn,d.map.depthTexture.magFilter=Wn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Kf.setFromMatrixPosition(l.matrixWorld),e.position.copy(Kf),qf.copy(e.position),qf.add(Uf[t]),e.up.copy(Wf[t]),e.lookAt(qf),e.updateMatrixWorld(),n.makeTranslation(-Kf.x,-Kf.y,-Kf.z),Gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Gf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new xa(i.x,i.y,{format:gr,type:rr}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Yf(e,t){function n(){let t=!1,n=new ya,r=null,i=new ya(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ti[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),N=e.getParameter(e.VIEWPORT),oe=new ya().fromArray(ae),se=new ya().fromArray(N);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function I(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function L(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Pe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function B(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:I,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:ke,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:B,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:L,texSubImage3D:Ee,compressedTexSubImage2D:R,compressedTexSubImage3D:z,scissor:Ne,viewport:Pe,reset:Ie}}function Xf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):vi(`canvas`)}function v(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?di:ca.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),te(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function N(){let e=ne;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&R(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ge(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ge(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?_e(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[Vn]:e.REPEAT,[Hn]:e.CLAMP_TO_EDGE,[Un]:e.MIRRORED_REPEAT},ue={[Wn]:e.NEAREST,[Gn]:e.NEAREST_MIPMAP_NEAREST,[Kn]:e.NEAREST_MIPMAP_LINEAR,[qn]:e.LINEAR,[Jn]:e.LINEAR_MIPMAP_NEAREST,[Yn]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=pe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=ca.getPrimaries(ca.workingColorSpace),r=o.colorSpace===``?null:ca.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=z(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);fe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===pr,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&he(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Xl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Xl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=De(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=De(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,o,s){if(o.image.length!==6)return;let c=pe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=ca.getPrimaries(ca.workingColorSpace),r=o.colorSpace===``?null:ca.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=z(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);fe(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===pr,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=De(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,L(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ee(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Ee(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?F(i.depthTexture,0):se(i.depthTexture,0);let u=c.__webglTexture,d=L(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&ve(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function I(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ee(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=L(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ve(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),fe(c,a),ve(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),fe(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ve(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&xe(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let we=[];function Te(t){if(t.samples>0){if(Ee(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&we.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function L(e){return Math.min(i.maxSamples,e.samples)}function Ee(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function R(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function z(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(ca.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=se,this.setTexture2DArray=P,this.setTexture3D=ce,this.setTextureCube=F,this.rebindTextures=Se,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ee,this.dispose=j}function Zf(e,t){function n(n,r=``){let i,a=ca.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$f=`
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

}`,ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zc({vertexShader:Qf,fragmentShader:$f,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gs(new Rc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tp=class extends Ei{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ep,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new q,C=null,w=null,T=new Ol;T.viewport=new ya;let E=new Ol;E.viewport=new ya;let D=[T,E],O=new Nl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new eo,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new eo,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new eo,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?pr:fr,a=_.stencil?or:tr);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xa(d.textureWidth,d.textureHeight,{format:dr,type:Xn,depthTexture:new rc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xa(f.framebufferWidth,f.framebufferHeight,{format:dr,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ai*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ol,o.layers.enable(n),o.viewport=new ya,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ac,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new Ql;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},np=new wa,rp=new Y;rp.set(-1,0,0,0,1,0,0,0,1);function ip(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(np.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(rp),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ap(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var op=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sp=null;function cp(){return sp===null&&(sp=new Js(op,16,16,gr,rr),sp.name=`DFG_LUT`,sp.minFilter=qn,sp.magFilter=qn,sp.wrapS=Hn,sp.wrapT=Hn,sp.generateMipmaps=!1,sp.needsUpdate=!0),sp}var lp=class{constructor(e={}){let{canvas:t=yi(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Xn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([vr,_r,hr]),g=new Set([Xn,tr,$n,or,ir,ar]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=li;let j=0,ee=0,M=null,te=-1,ne=null,re=new ya,ie=new ya,ae=null,N=new X(0),oe=0,se=t.width,P=t.height,ce=1,F=null,le=null,ue=new ya(0,0,se,P),de=new ya(0,0,se,P),fe=!1,pe=new Qs,me=new ec,he=!1,ge=!1,_e=new wa,ve=new J,ye=new ya,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return M===null?ce:1}let I=n;function Ce(e,n){return t.getContext(e,n)}let we,Te,L,Ee,R,z,De,Oe,ke,Ae,je,Me,Ne,Pe,B,Fe,Ie,Le,V,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),I===null){let t=`webgl2`;if(I=Ce(t,e),I===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),K(`WebGLRenderer: `+e.message),e}function He(){we=new Ou(I),we.init(),ze=new Zf(I,we),Te=new cu(I,we,e,ze),L=new Yf(I,we),Te.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=I.createFramebuffer(),k=I.createFramebuffer(),A=I.createFramebuffer(),Ee=new ju(I),R=new kf,z=new Xf(I,we,L,R,Te,ze,Ee),De=new Du(T),Oe=new $l(I),Be=new ou(I,Oe),ke=new ku(I,Oe,Ee,Be),Ae=new Nu(I,ke,Oe,Be,Ee),Le=new Mu(I,Te,z),B=new lu(R),je=new Of(T,De,we,Te,Be,B),Me=new ip(T,R),Ne=new Nf,Pe=new Bf(we),Ie=new au(T,De,L,Ae,p,s),Fe=new Jf(T,Ae,Te),Ve=new ap(I,Ee,Te,L),V=new su(I,we,Ee),Re=new Au(I,we,Ee),Ee.programs=je.programs,T.capabilities=Te,T.extensions=we,T.properties=R,T.renderLists=Ne,T.shadowMap=Fe,T.state=L,T.info=Ee}m!==1009&&(w=new Fu(m,t.width,t.height,o,r,i));let Ue=new tp(T,I);this.xr=Ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(se,P,!1))},this.getSize=function(e){return e.set(se,P)},this.setSize=function(e,n,r=!0){Ue.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,P=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*ce,P*ce).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,P=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),L.viewport(re.copy(ue).multiplyScalar(Se()).round())},this.getScissor=function(e){return e.copy(de)},this.setScissor=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.scissor(ie.copy(de).multiplyScalar(Se()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(e){L.setScissorTest(fe=e)},this.setOpaqueSort=function(e){F=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ie.getClearColor(),r=Ie.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Ie.dispose(),Ne.dispose(),Pe.dispose(),z.dispose(),R.dispose(),De.dispose(),Ae.dispose(),ke.dispose(),Be.dispose(),Ve.dispose(),je.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,Ze),Ue.removeEventListener(`sessionend`,Qe),$e.stop()};function We(e){e.preventDefault(),xi(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){xi(`WebGLRenderer: Context Restored.`),E=!1;let e=Ee.autoReset,t=Fe.enabled,n=Fe.autoUpdate,r=Fe.needsUpdate,i=Fe.type;He(),Ee.autoReset=e,Fe.enabled=t,Fe.autoUpdate=n,Fe.needsUpdate=r,Fe.type=i}function Ke(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function H(e){let t=e.target;t.removeEventListener(`dispose`,H),qe(t)}function qe(e){Je(e),R.remove(e)}function Je(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){je.releaseProgram(e)}),e.isShaderMaterial&&je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ut(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=V;if(c!==null&&(h=Oe.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Se()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Oe.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),he===!0&&B.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ot(e,t,r),e.side=0,e.needsUpdate=!0,ot(e,t,r),e.side=2):ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Pe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=B.init(this.clippingPlanes,ge),he===!0&&B.setGlobalState(this.clippingPlanes,t),D!==null&&Fe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ye(o,n,t,e),r.add(o)}else Ye(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function U(e){Xe&&Xe(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new Ql;$e.setAnimationLoop(U),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Xe=e,Ue.setAnimationLoop(e),e===null?$e.stop():$e.start()},Ue.addEventListener(`sessionstart`,Ze),Ue.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Pe.get(e,C.length),x.init(t),x.state.textureUnits=z.getTextureUnits(),C.push(x),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?me.setFromArrayCamera(t):pe.setFromProjectionMatrix(_e,hi,t.reversedDepth),ge=this.localClippingEnabled,he=B.init(this.clippingPlanes,ge),b=Ne.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(F,le),xe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,xe&&Ie.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),he===!0&&B.beginShadows();let i=x.state.shadowsArray;if(Fe.render(i,e,t),he===!0&&B.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}xe&&Ie.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),xe&&Ie.render(e),tt(b,e,t)}M!==null&&ee===0&&(z.updateMultisampleRenderTarget(M),z.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],z.setTextureUnits(x.state.textureUnits),he===!0&&B.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?me:pe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let i=Ae.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?me:pe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ae.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&B.setGlobalState(T.clippingPlanes,n),r&&L.viewport(re.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new xa(1,1,{generateMipmaps:!0,type:e?rr:Xn,minFilter:Yn,samples:Math.max(4,Te.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ca.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(N),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Ie.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&B.setGlobalState(T.clippingPlanes,r),rt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(N,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ot(e,t,n){t.isScene!==!0&&(t=be);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=je.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=De.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,H),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return lt(e,s),d}else s.uniforms=je.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=B.uniform),lt(e,s),r.needsLights=ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=at(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function st(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ot(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t,n,r,i){t.isScene!==!0&&(t=be),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ca.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=De.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),b=x.state.lights;if(he===!0&&(ge===!0||e!==ne)){let t=e===ne&&r.id===te;B.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==B.numPlanes||v.numIntersection!==B.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===at(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?st(r,t,i,s,h):ot(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(L.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==te&&(te=r.id,O=!0),E||ne!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(I,`projectionMatrix`,e.projectionMatrix),A.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(I,ve.setFromMatrixPosition(e.matrixWorld)),Te.logarithmicDepthBuffer&&A.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(I,`sunShadowMap`,b.state.sunShadowMap,z),b.state.directionalShadowMap.length>0&&A.setValue(I,`directionalShadowMap`,b.state.directionalShadowMap,z),b.state.spotShadowMap.length>0&&A.setValue(I,`spotShadowMap`,b.state.spotShadowMap,z),b.state.pointShadowMap.length>0&&A.setValue(I,`pointShadowMap`,b.state.pointShadowMap,z)),i.isSkinnedMesh){A.setOptional(I,i,`bindMatrix`),A.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(A.setOptional(I,i,`batchingTexture`),A.setValue(I,`batchingTexture`,i._matricesTexture,z),A.setOptional(I,i,`batchingIdTexture`),A.setValue(I,`batchingIdTexture`,i._indirectTexture,z),A.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Le.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=cp()),O){if(A.setValue(I,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&dt(j,k),a&&r.fog===!0&&Me.refreshFogUniforms(j,a),Me.refreshMaterialUniforms(j,r,ce,P,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Wd.upload(I,ct(v),j,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wd.upload(I,ct(v),j,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(I,`center`,i.center),A.setValue(I,`modelViewMatrix`,i.modelViewMatrix),A.setValue(I,`normalMatrix`,i.normalMatrix),A.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,w),Ve.bind(n,w)}}return w}function dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,L.viewport(re),L.scissor(ie),L.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(ue).multiplyScalar(ce).floor(),ie.copy(de).multiplyScalar(ce).floor(),ae=fe;if(n!==0&&(r=O),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(re),L.scissor(ie),L.setScissorTest(ae),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}te=-1};function pt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Te.textureFormatReadable(e.format),t.__typeReadable=Te.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=pt(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wi(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,k),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,L.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ca._getDrawingBufferColorSpace(e),t.unpackColorSpace=ca._getUnpackColorSpace()}},up=class e{constructor(e,t){s(this,`video`,void 0),s(this,`stream`,void 0),s(this,`kind`,`camera`),this.video=e,this.stream=t}get width(){return this.video.videoWidth||1280}get height(){return this.video.videoHeight||720}get element(){return this.video}static async open(t){if(!navigator.mediaDevices?.getUserMedia)throw Error(`getUserMedia unavailable (https が必要)`);let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:`environment`},width:{ideal:1280},height:{ideal:720},advanced:[{exposureMode:`continuous`}]},audio:!1});return t.srcObject=n,t.setAttribute(`playsinline`,``),t.muted=!0,t.autoplay=!0,await new Promise(e=>{t.readyState>=1?e():t.onloadedmetadata=()=>e()}),await t.play().catch(()=>{}),new e(t,n)}dispose(){for(let e of this.stream.getTracks())e.stop();this.video.srcObject=null}},dp=class e{constructor(e){s(this,`element`,void 0),s(this,`kind`,`image`),this.element=e}get width(){return this.element instanceof HTMLImageElement?this.element.naturalWidth:this.element.width}get height(){return this.element instanceof HTMLImageElement?this.element.naturalHeight:this.element.height}dispose(){}static async fromFile(t){let n=URL.createObjectURL(t);try{let t=new Image;await new Promise((e,r)=>{t.onload=()=>e(),t.onerror=()=>r(Error(`画像を読めません`)),t.src=n});let r=1600;if(Math.max(t.naturalWidth,t.naturalHeight)>r){let n=r/Math.max(t.naturalWidth,t.naturalHeight),i=document.createElement(`canvas`);return i.width=Math.round(t.naturalWidth*n),i.height=Math.round(t.naturalHeight*n),i.getContext(`2d`).drawImage(t,0,0,i.width,i.height),new e(i)}return new e(t)}finally{setTimeout(()=>URL.revokeObjectURL(n),5e3)}}};function fp(e,t,n,r){let i=Math.max(n/e,r/t);return{s:i,ox:(n-e*i)/2,oy:(r-t*i)/2}}function pp(e,t,n,r){let i=fp(t.width,t.height,n,r);e.drawImage(t.element,i.ox,i.oy,t.width*i.s,t.height*i.s)}function mp(e){if(e.length<6)return null;let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;t/=e.length,n/=e.length;let r=0;for(let i of e)r+=Math.hypot(i.x-t,i.y-n);if(r/=e.length,r<1e-6)return null;let i=new Float64Array(25),a=new Float64Array(5),o=new Float64Array(5);for(let s of e){let e=(s.x-t)/r,c=(s.y-n)/r;o[0]=e*e,o[1]=e*c,o[2]=c*c,o[3]=e,o[4]=c;for(let e=0;e<5;e++){a[e]+=o[e];for(let t=0;t<5;t++)i[e*5+t]+=o[e]*o[t]}}let s=hp(i,a);if(!s)return null;let[c,l,u,d,f]=s,p=4*c*u-l*l;if(p<=1e-12)return null;let m=(l*f-2*u*d)/p,h=(l*d-2*c*f)/p,g=1-(c*m*m+l*m*h+u*h*h+d*m+f*h);if(g<=0)return null;let _=c/g,v=l/(2*g),y=u/g,b=_+y,x=Math.sqrt(Math.max(0,((_-y)/2)**2+v*v)),S=b/2-x,C=b/2+x;if(S<=0||C<=0)return null;let w=Math.sqrt(1/S)*r,T=Math.sqrt(1/C)*r,E;return E=Math.abs(v)<1e-12?_<=y?0:Math.PI/2:Math.atan2(S-_,v),{cx:m*r+t,cy:h*r+n,a:w,b:T,angle:E}}function hp(e,t){let n=new Float64Array(30);for(let r=0;r<5;r++){for(let t=0;t<5;t++)n[r*6+t]=e[r*5+t];n[r*6+5]=t[r]}for(let e=0;e<5;e++){let t=e;for(let r=e+1;r<5;r++)Math.abs(n[r*6+e])>Math.abs(n[t*6+e])&&(t=r);if(Math.abs(n[t*6+e])<1e-12)return null;if(t!==e)for(let r=0;r<=5;r++){let i=n[e*6+r];n[e*6+r]=n[t*6+r],n[t*6+r]=i}for(let t=0;t<5;t++){if(t===e)continue;let r=n[t*6+e]/n[e*6+e];if(r!==0)for(let i=e;i<=5;i++)n[t*6+i]-=r*n[e*6+i]}}let r=[];for(let e=0;e<5;e++)r.push(n[e*6+5]/n[e*6+e]);return r}function gp(e,t,n=36){let r=Math.cos(t.angle),i=Math.sin(t.angle),a=new Uint8Array(n),o=0;for(let s of e){let e=s.x-t.cx,c=s.y-t.cy,l=(e*r+c*i)/t.a,u=(-e*i+c*r)/t.b;o+=Math.abs(Math.hypot(l,u)-1);let d=Math.atan2(u,l);d<0&&(d+=Math.PI*2),a[Math.min(n-1,Math.floor(d/(Math.PI*2)*n))]=1}let s=0;for(let e=0;e<n;e++)s+=a[e];return{err:o/e.length,coverage:s/n}}function _p(e,t=64){let n=[],r=Math.cos(e.angle),i=Math.sin(e.angle);for(let a=0;a<t;a++){let o=a/t*Math.PI*2,s=Math.cos(o)*e.a,c=Math.sin(o)*e.b;n.push({x:e.cx+s*r-c*i,y:e.cy+s*i+c*r})}return n}var vp={GRAD_TOP:.1,GRAD_MIN:40,R_MIN:.075,R_MAX:.45,VOTE_CELL:2,R_STEP:2,PEAKS:6,PEAK_SEP:.06,RAYS:72,RAY_PICKS:3,RAY_TH:.8,RANSAC_ITERS:300,RANSAC_STOP:.97,INLIER_PX:1.5,INLIER_FRAC:.02,SEED:728775,MIN_RAY_COVERAGE:.85,MIN_EDGE_SUPPORT:.85,SUPPORT_TH:.6,SUPPORT_PX:2.5,MIN_INOUT:.8,INOUT_SECTORS:24,INOUT_LEVELS:10,IN_BAND:[.78,.93],OUT_BAND:[1.07,1.22],MIN_ASPECT:.45,MIN_DIAMETER:.15,MAX_LONG_AXIS:.7,FRAME_MARGIN:.02,CONCENTRIC:.15};function yp(e,t,n){let r=new Float32Array(t*n);for(let i=0;i<n;i++){let n=i*t;for(let i=0;i<t;i++){let a=i>0?e[n+i-1]:-1,o=i<t-1?e[n+i+1]:-1;r[n+i]=(e[n+i]+(a<0?0:a)+(o<0?0:o))/(1+(a<0?0:1)+(o<0?0:1))}}let i=new Uint8Array(t*n);for(let e=0;e<n;e++){let a=e*t;for(let o=0;o<t;o++){let s=r[a+o],c=1;e>0&&(s+=r[a+o-t],c++),e<n-1&&(s+=r[a+o+t],c++),i[a+o]=Math.round(s/c)}}return i}function bp(e,t,n){let r=yp(yp(he(e,t,n),t,n),t,n),i=new Float32Array(t*n),a=new Float32Array(t*n),o=new Float32Array(t*n);for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++){let s=e*t+n,c=r[s-t-1],l=r[s-t],u=r[s-t+1],d=r[s-1],f=r[s+1],p=r[s+t-1],m=r[s+t],h=r[s+t+1],g=-c-2*d-p+u+2*f+h,_=-c-2*l-u+p+2*m+h;i[s]=g,a[s]=_,o[s]=Math.sqrt(g*g+_*_)}let s=new Int32Array(1500);for(let e=0;e<o.length;e++)s[Math.min(1499,o[e]|0)]++;let c=0,l=0;for(let e=1499;e>=0;e--)if(c+=s[e],c>=o.length*vp.GRAD_TOP){l=e;break}return{gx:i,gy:a,mag:o,th:Math.max(vp.GRAD_MIN,l),img:r}}function xp(e,t,n,r,i){if(r<0||i<0||r>t-1.001||i>n-1.001)return 0;let a=r|0,o=i|0,s=r-a,c=i-o,l=o*t+a;return(e[l]*(1-s)+e[l+1]*s)*(1-c)+(e[l+t]*(1-s)+e[l+t+1]*s)*c}function Sp(e,t,n){let r=vp,i=Math.min(t,n),a=r.VOTE_CELL,o=Math.ceil(t/a),s=Math.ceil(n/a),c=new Float32Array(o*s),l=Math.max(2,Math.round(r.R_MIN*i)),u=Math.round(r.R_MAX*i),d=1/a,f=e.th,p=e.mag,m=e.gx,h=e.gy;for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++){let i=e*t+n,a=p[i];if(a<f)continue;let g=m[i],_=h[i],v=g<0?-g:g,y=_<0?-_:_,b=v>2.414*y?1:y>2.414*v?t:g>0==_>0?t+1:t-1;if(a<p[i-b]||a<p[i+b])continue;let x=m[i]/a*r.R_STEP*d,S=h[i]/a*r.R_STEP*d,C=n*d,w=e*d;for(let e=0,t=l;t<=u;t+=r.R_STEP,e++){let e=t/r.R_STEP,n=C+x*e,i=w+S*e;n>=0&&i>=0&&n<o&&i<s&&c[(i|0)*o+(n|0)]++,n=C-x*e,i=w-S*e,n>=0&&i>=0&&n<o&&i<s&&c[(i|0)*o+(n|0)]++}}let g=c;for(let e=0;e<2;e++){let e=new Float32Array(o*s),t=new Float32Array(o*s);for(let t=0;t<s;t++)for(let n=0;n<o;n++){let r=t*o+n;e[r]=g[r]+(n>0?g[r-1]:0)+(n<o-1?g[r+1]:0)}for(let n=0;n<s;n++)for(let r=0;r<o;r++){let i=n*o+r;t[i]=e[i]+(n>0?e[i-o]:0)+(n<s-1?e[i+o]:0)}g=t}let _=[];for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=e*o+t,r=g[n];if(r<=0)continue;let i=!0;for(let a=Math.max(0,e-1);a<=Math.min(s-1,e+1)&&i;a++)for(let e=Math.max(0,t-1);e<=Math.min(o-1,t+1);e++){let t=a*o+e;if(t!==n&&(g[t]>r||g[t]===r&&t<n)){i=!1;break}}i&&_.push(n)}_.sort((e,t)=>g[t]-g[e]||e-t);let v=r.PEAK_SEP*i,y=[];for(let e of _){let t=e%o*a+a/2,n=Math.floor(e/o)*a+a/2;if(!y.some(e=>Math.hypot(e.x-t,e.y-n)<v)&&(y.push({x:t,y:n,v:g[e]}),y.length>=r.PEAKS))break}return y}function Cp(e,t,n,r,i){let a=vp,o=Math.min(t,n),s=Math.max(2,a.R_MIN*o*a.MIN_ASPECT*.8),c=a.R_MAX*o*1.15,l=e.th*a.RAY_TH,u=[],d=[];for(let o=0;o<a.RAYS;o++){let f=o/a.RAYS*Math.PI*2,p=Math.cos(f),m=Math.sin(f),h=[];for(let a=s;a<=c;a+=1){let o=r+p*a,s=i+m*a;if(o<1||s<1||o>t-2||s>n-2)break;h.push(xp(e.gx,t,n,o,s)*p+xp(e.gy,t,n,o,s)*m)}let g=[],_=[];for(let e=1;e<h.length-1;e++){let t=h[e];t>=l&&t>h[e-1]&&t>=h[e+1]&&g.push({r:s+e,v:t}),-t>=l&&-t>-h[e-1]&&-t>=-h[e+1]&&_.push({r:s+e,v:-t})}let v=e=>e.sort((e,t)=>t.v-e.v||e.r-t.r).slice(0,a.RAY_PICKS).map(e=>({x:r+p*e.r,y:i+m*e.r}));u.push(v(g)),d.push(v(_))}return{pos:u,neg:d}}function wp(e,t,n,r,i){let a=t-e.cx,o=n-e.cy,s=a*r+o*i,c=-a*i+o*r;return Math.sqrt(s*s/(e.a*e.a)+c*c/(e.b*e.b))}function Tp(e,t){let n=vp,r=Math.cos(e.angle),i=Math.sin(e.angle),a=(e.a+e.b)/2,o=n.INLIER_PX+a*n.INLIER_FRAC,s=0,c=[];for(let n of t){let t=1/0,l=null;for(let s of n){let n=Math.abs(wp(e,s.x,s.y,r,i)-1)*a;n<o&&n<t&&(t=n,l=s)}l&&(s++,c.push(l))}return{count:s,pts:c}}function Ep(e,t,n){return!(!(e.a>0)||!(e.b>0)||!Number.isFinite(e.cx)||!Number.isFinite(e.cy)||Math.hypot(e.cx-t.x,e.cy-t.y)>e.a/2||e.b/e.a<vp.MIN_ASPECT||e.a*2<vp.MIN_DIAMETER*n||e.a>n)}function Dp(e,t,n,r){let i=vp,a=[];for(let t=0;t<e.length;t++)e[t].length&&a.push(t);if(a.length<6)return null;let o=null,s=0;for(let c=0;c<i.RANSAC_ITERS;c++){let c=[];for(;c.length<6;){let e=a[Math.floor(r.next()*a.length)];c.includes(e)||c.push(e)}let l=mp(c.map(t=>e[t][Math.floor(r.next()*e[t].length)]));if(!l||!Ep(l,t,n))continue;let u=Tp(l,e).count;if(u>s&&(s=u,o=l),s>=i.RANSAC_STOP*e.length)break}if(!o)return null;for(let r=0;r<2;r++){let{pts:r}=Tp(o,e),i=r.length>=6?mp(r):null;if(i&&Ep(i,t,n))o=i;else break}return o}function Op(e,t,n,r,i){let a=vp,o=Math.cos(r.angle),s=Math.sin(r.angle),c=e.th*a.SUPPORT_TH,l=0;for(let u=0;u<72;u++){let d=u/72*Math.PI*2,f=Math.cos(d)*r.a,p=Math.sin(d)*r.b,m=r.cx+f*o-p*s,h=r.cy+f*s+p*o,g=Math.cos(d)/r.a,_=Math.sin(d)/r.b,v=Math.hypot(g,_)||1;g/=v,_/=v;let y=g*o-_*s,b=g*s+_*o,x=!1;for(let r=-a.SUPPORT_PX;r<=a.SUPPORT_PX+1e-9;r+=.5){let a=m+y*r,o=h+b*r;if((xp(e.gx,t,n,a,o)*y+xp(e.gy,t,n,a,o)*b)*i>=c){x=!0;break}}x&&l++}let u=a.INOUT_SECTORS,d=0;for(let c=0;c<u;c++){let l=0,f=0,p=0,m=0;for(let i=0;i<5;i++){let d=(c+(i+.5)/5)/u*Math.PI*2,h=Math.cos(d),g=Math.sin(d);for(let i=0;i<4;i++){let c=a.IN_BAND[0]+(a.IN_BAND[1]-a.IN_BAND[0])*(i+.5)/4,u=a.OUT_BAND[0]+(a.OUT_BAND[1]-a.OUT_BAND[0])*(i+.5)/4;for(let[i,a]of[[c,!0],[u,!1]]){let c=h*r.a*i,u=g*r.b*i,d=r.cx+c*o-u*s,_=r.cy+c*s+u*o;if(d<0||_<0||d>t-1.001||_>n-1.001)continue;let v=xp(e.img,t,n,d,_);a?(l+=v,f++):(p+=v,m++)}}}f&&m&&(p/m-l/f)*i>=a.INOUT_LEVELS&&d++}return{edgeSupport:l/72,inOut:d/u}}function kp(e,t,n){let r=vp,i=Math.min(t,n),a=bp(e,t,n),o=Sp(a,t,n),s=[],c=null,u=!1;o.forEach((e,o)=>{let d=Cp(a,t,n,e.x,e.y);for(let[f,p,m]of[[`darker`,d.pos,1],[`lighter`,d.neg,-1]]){let d=new l((r.SEED^Math.imul(o+1,2654435761)^(m>0?85:170))>>>0),h=Dp(p,e,i,d);if(!h)continue;let g=Tp(h,p).count/r.RAYS,{edgeSupport:_,inOut:v}=Op(a,t,n,h,m),y=h.a*2/i,b=r.FRAME_MARGIN*i,x=Math.cos(h.angle),S=Math.sin(h.angle),C=Math.sqrt((h.a*x)**2+(h.b*S)**2),w=Math.sqrt((h.a*S)**2+(h.b*x)**2),T=h.cx-C>=b&&h.cy-w>=b&&h.cx+C<=t-1-b&&h.cy+w<=n-1-b,E=null;g<r.MIN_RAY_COVERAGE?E=`rayCoverage`:_<r.MIN_EDGE_SUPPORT?E=`edgeSupport`:v<r.MIN_INOUT?E=`inOut`:h.b/h.a<r.MIN_ASPECT?E=`aspect`:y<r.MIN_DIAMETER?E=`small`:y>r.MAX_LONG_AXIS?E=`tooLarge`:T||(E=`frame`),E?(E===`tooLarge`&&(u=!0),(!c||g>c.rayCoverage)&&(c={reason:E,polarity:f,rayCoverage:g,edgeSupport:_,inOut:v,longAxisRatio:y})):s.push({ellipse:h,polarity:f,rayCoverage:g,edgeSupport:_,inOut:v,score:g*_*Math.min(1,y/.6)})}});let d=null;for(let e of s){if(!d){d=e;continue}let t=(d.ellipse.a+d.ellipse.b+e.ellipse.a+e.ellipse.b)/4;(Math.hypot(d.ellipse.cx-e.ellipse.cx,d.ellipse.cy-e.ellipse.cy)<=r.CONCENTRIC*t?e.ellipse.a>d.ellipse.a:e.score>d.score)&&(d=e)}return{best:d,candidates:s,rejected:d?null:c,tooLarge:!d&&u}}var Ap={minDiameterRatio:.15,maxErr:.1,minCoverage:.85,minAspect:.45,minCircularity:.75,threshRadius:7,threshC:10,minRingCoverage:.85,maxRingWidthRatio:.12,minRingContrastFrac:.85,maxLongAxisFrameRatio:.7,ringColorDist:50},jp=12;function Mp(e,t,n,r,i,a=72,o,s=50){let c=Math.cos(i.angle),l=Math.sin(i.angle),u=(i.a+i.b)/2,d=Math.max(1.5,u*.06),f=Math.max(3,Math.round(d)),p=d/f,m=0,h=0,g=0,_=[],v=e=>Math.min(n-1,Math.max(0,Math.round(e))),y=e=>Math.min(r-1,Math.max(0,Math.round(e)));for(let r=0;r<a;r++){let d=r/a*Math.PI*2,b=Math.cos(d)*i.a,x=Math.sin(d)*i.b,S=i.cx+b*c-x*l,C=i.cy+b*l+x*c,w=Math.hypot(b,x)||1,T=(S-i.cx)/w,E=(C-i.cy)/w,D=0,O=0,k=[];for(let r=-f;r<=f;r++){let i=r*p,a=v(S+T*i),s=y(C+E*i);e[s*n+a]&&(D++,O+=t[s*n+a],o&&k.push(s*n+a))}if(D>0){m++,_.push(D*p);let e=O/D,r=y(C-E*u*.2)*n+v(S-T*u*.2),i=y(C+E*u*.2)*n+v(S+T*u*.2),a=t[r],c=t[i];if(Math.abs(e-a)>jp&&Math.abs(e-c)>jp)h++;else if(o){let e=(e,t)=>Math.hypot(o[e*4]-o[t*4],o[e*4+1]-o[t*4+1],o[e*4+2]-o[t*4+2]),t=0;for(let n of k)t=Math.max(t,Math.min(e(n,r),e(n,i)));t>s&&(h++,g++)}}}_.sort((e,t)=>e-t);let b=_.length>0?_[Math.floor(_.length/2)]/u:1/0;return{coverage:m/a,widthRatio:b,contrastFrac:h/a,colorOnly:g}}function Np(e,t,n,r,i,a){let o=xe(e,n,r),s=0;for(let e=0;e<o.length;e++)s+=o[e];let c=s/o.length;if(c>.97)return{candidates:[],rejected:null,mask:o,fill:c,earlyCut:!0,tooLarge:!1};let{labels:l,comps:u}=Se(o,n,r,1,!0),d=i.minDiameterRatio*Math.min(n,r),f=[],p=null,m=!1;for(let e of u){let s=e.maxX-e.minX+1,c=e.maxY-e.minY+1;if(Math.max(s,c)<d)continue;let u=s/c;if(u<.3||u>3.3||e.area<40)continue;let h={x:(e.minX+e.maxX)/2,y:(e.minY+e.maxY)/2},g=Ce(l,n,e,72,h.x,h.y).pts,_=mp(g);if(!_)continue;h={x:_.cx,y:_.cy},g=Ce(l,n,e,72,h.x,h.y).pts;let v=mp(g);if(v&&(_=v),!(_.a>0)||!(_.b>0))continue;let y=_.b/_.a;if(y<i.minAspect){p={reason:`aspect`,aspect:y,err:NaN,coverage:NaN,circularity:NaN};continue}let b=_.a*2/Math.min(n,r),x=b>i.maxLongAxisFrameRatio;if(!x&&_.a*2<d)continue;let{err:S,coverage:C}=gp(g,_,36),w=ge(g,2),T=w.length>=6?4*Math.PI*ye(w)/De(w)**2:0;if(S>i.maxErr){p={reason:`err`,aspect:y,err:S,coverage:C,circularity:T};continue}if(C<i.minCoverage){p={reason:`coverage`,aspect:y,err:S,coverage:C,circularity:T};continue}if(T<i.minCircularity){p={reason:`circularity`,aspect:y,err:S,coverage:C,circularity:T};continue}let E=Mp(o,t,n,r,_,72,a,i.ringColorDist);if(x&&E.coverage>=i.minRingCoverage&&E.widthRatio<=i.maxRingWidthRatio&&E.contrastFrac>=i.minRingContrastFrac){p={reason:`tooLarge`,aspect:y,err:S,coverage:C,circularity:T,longAxisRatio:b,ringCoverage:E.coverage,ringWidthRatio:E.widthRatio,ringContrastFrac:E.contrastFrac},m=!0;continue}if(E.coverage<i.minRingCoverage){p={reason:`ringCoverage`,aspect:y,err:S,coverage:C,circularity:T,ringCoverage:E.coverage,ringWidthRatio:E.widthRatio,ringContrastFrac:E.contrastFrac};continue}if(E.widthRatio>i.maxRingWidthRatio){p={reason:`ringWidth`,aspect:y,err:S,coverage:C,circularity:T,ringCoverage:E.coverage,ringWidthRatio:E.widthRatio,ringContrastFrac:E.contrastFrac};continue}if(E.contrastFrac<i.minRingContrastFrac){p={reason:`ringContrast`,aspect:y,err:S,coverage:C,circularity:T,ringCoverage:E.coverage,ringWidthRatio:E.widthRatio,ringContrastFrac:E.contrastFrac};continue}let D=.5+.5*Math.min(1,_.a*2/(.6*Math.min(n,r))),O=(1-S/i.maxErr)*C*D;x||f.push({ellipse:_,err:S,coverage:C,circularity:T,ringCoverage:E.coverage,ringWidthRatio:E.widthRatio,ringContrastFrac:E.contrastFrac,score:O,contour:g,comp:e})}return{candidates:f,rejected:p,mask:o,fill:c,earlyCut:!1,tooLarge:m}}function Pp(e){let t=e.ellipse,n=_p(t,72),r=1/0,i=1/0,a=-1/0,o=-1/0;for(let e of n)r=Math.min(r,e.x),i=Math.min(i,e.y),a=Math.max(a,e.x),o=Math.max(o,e.y);let s={label:-1,area:Math.round(Math.PI*t.a*t.b),minX:Math.floor(r),minY:Math.floor(i),maxX:Math.ceil(a),maxY:Math.ceil(o),cx:t.cx,cy:t.cy,touchesBorder:!1};return{ellipse:t,err:0,coverage:e.rayCoverage,circularity:1,ringCoverage:e.edgeSupport,ringWidthRatio:0,ringContrastFrac:e.inOut,score:e.score,contour:n,comp:s,object:e}}function Fp(e,t,n,r={},i){let a={...Ap,...r},o=performance.now(),s=pe(e),c=Math.max(.5,Math.min(1,s/110)),l=a.threshC*c,u=he(e,t,n),d=fe(u,t,n,a.threshRadius,l),f=Np(d,u,t,n,a,i),p=f,m=!1,h=null,g=!1,_=f.tooLarge;if(f.candidates.length===0){m=!0;let e=ve(_e(me(u,t,n),t,n),t,n),r=new Uint8Array(t*n);for(let t=0;t<r.length;t++)r[t]=d[t]||e[t]?1:0;let o=Np(r,u,t,n,a,i);p={...o,rejected:o.rejected??f.rejected},h=o.fill,g=o.earlyCut,_=_||o.tooLarge}let v=p.candidates.length?m?`edge`:`ink`:null,y=!1,b=null;if(p.candidates.length===0){y=!0;let r=kp(e,t,n);b=r.rejected,_=_||r.tooLarge,r.best&&(p={...p,candidates:[Pp(r.best)],rejected:null},v=`object`)}let x=p.candidates.slice().sort((e,t)=>t.score-e.score),S=x[0]??null,C=v===`object`?[]:x.filter(e=>e.err<=a.maxErr*.7&&e.coverage>=.92);return C.length>0&&(S=C.reduce((e,t)=>t.ellipse.a>e.ellipse.a?t:e)),{best:S,candidates:x,mask:p.mask,ms:performance.now()-o,brightness:s,usedEdge:m,rejected:S?null:p.rejected,path:S?v:null,objectRan:y,fill:{ink:f.fill,edge:h},earlyCut:{ink:f.earlyCut,edge:g},tooLarge:!S&&_,objectRejected:b}}function Ip(e,t,n,r,i={}){let a={...Ap,...i},o=he(e,t,n),s=fe(o,t,n,a.threshRadius,a.threshC),c=xe(s,t,n),l=Mp(c,o,t,n,r,72);if(l.coverage<a.minRingCoverage){let e=ve(_e(me(o,t,n),t,n),t,n),i=new Uint8Array(t*n);for(let t=0;t<i.length;t++)i[t]=s[t]||e[t]?1:0;c=xe(i,t,n);let a=Mp(c,o,t,n,r,72);a.coverage>l.coverage&&(l=a)}return l}var Lp={CENTER:.25,SIZE:.2},Rp={sameCenter:Lp.CENTER,sameSize:Lp.SIZE};function zp(e,t,n=Rp){return Math.hypot(t.cx-e.cx,t.cy-e.cy)<=e.a*n.sameCenter&&Math.abs(t.a-e.a)/e.a<=n.sameSize}var Bp=class{constructor(e=Rp){s(this,`prev`,null),s(this,`missed`,!1),s(this,`o`,void 0),this.o=e}reset(){this.prev=null,this.missed=!1}observe(e){return this.prev?zp(this.prev,e,this.o)?(this.prev={...e},this.missed=!1,`same`):this.missed?(this.prev={...e},this.missed=!1,`new`):(this.missed=!0,`skip`):(this.prev={...e},this.missed=!1,`new`)}};function Vp(e,t,n=.92){let r=document.createElement(`canvas`);r.width=256,r.height=256;let i=r.getContext(`2d`,{willReadFrequently:!0});return Hp(i,e,t,n),{image:{w:256,h:256,data:i.getImageData(0,0,256,256).data},canvas:r}}function Hp(e,t,n,r=.92){e.setTransform(1,0,0,1,0,0),e.fillStyle=`#FFFFFF`,e.fillRect(0,0,256,256),e.save(),e.beginPath(),e.arc(128,128,128*r,0,Math.PI*2),e.clip(),e.translate(128,128),e.scale(128/n.a,128/n.b),e.rotate(-n.angle),e.translate(-n.cx,-n.cy),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function Up(e,t,n,r){return Vp(e,{cx:t,cy:n,a:r,b:r,angle:0},1)}var Wp=class{constructor(e=256,t=72){s(this,`binMap`,void 0),s(this,`n`,void 0),s(this,`size`,void 0),s(this,`bins`,void 0),this.size=e,this.bins=t,this.n=e*e,this.binMap=new Int16Array(this.n);let n=e/2,r=n*.12,i=n*.88;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=o+.5-n,c=a+.5-n,l=Math.hypot(s,c);if(l<r||l>i){this.binMap[a*e+o]=-1;continue}let u=Math.atan2(c,s);u<0&&(u+=Math.PI*2);let d=l<n*.4?0:l<n*.65?1:2;this.binMap[a*e+o]=d*t+Math.min(t-1,Math.floor(u/(Math.PI*2)*t))}}signature(e){let{data:t}=e,n=this.n,r=new Int32Array(256),i=new Uint8Array(n);for(let e=0;e<n;e++){if(this.binMap[e]<0)continue;let n=t[e*4]*77+t[e*4+1]*150+t[e*4+2]*29>>8;i[e]=n,r[n]++}let a=0;for(let e=0;e<256;e++)a+=r[e];if(a===0)return null;let o=0,s=255;for(let e=255;e>=0;e--)if(o+=r[e],o>=a*.3){s=e;break}let c=new Float32Array(this.bins*3),l=0;for(let e=0;e<n;e++){let t=this.binMap[e];if(t<0)continue;let n=Math.min(1,Math.max(0,(s-i[e]-12)/60));n>0&&(c[t]+=n,l+=n)}if(l<30)return null;let u=this.bins;for(let e=0;e<3;e++){let t=0;for(let n=0;n<u;n++)t+=c[e*u+n];t/=u;for(let n=0;n<u;n++)c[e*u+n]-=t}let d=0;for(let e=0;e<c.length;e++)d+=c[e]*c[e];if(d=Math.sqrt(d),d<1e-6)return null;for(let e=0;e<c.length;e++)c[e]/=d;return c}static bestShift(e,t,n=72){let r=n,i=Math.floor(e.length/r),a=new Float64Array(r),o=0;for(let n=0;n<r;n++){let s=0;for(let a=0;a<i;a++){let i=a*r;for(let a=0;a<r;a++)s+=e[i+a]*t[i+(a+n)%r]}a[n]=s,s>a[o]&&(o=n)}let s=a[(o-1+r)%r],c=a[o],l=a[(o+1)%r],u=s-2*c+l,d=Math.abs(u)>1e-9?Math.max(-.5,Math.min(.5,.5*(s-l)/u)):0,f=o+d;return f>r/2&&(f-=r),{shift:f,radians:f/r*Math.PI*2,score:c}}};function Gp(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var Kp={fovDeg:65},qp=.35,Jp=1.3,Yp=35*Math.PI/180,Xp=10*Math.PI/180,Zp=70,Qp=12;function $p(e){return Math.asin(Math.max(-1,Math.min(1,e)))}function em(e,t,n,r={}){let i={...Kp,...r};if(!(t>0)||!(n>0))return null;let a=$p(e);if(a<Xp)return null;let o=n/2/Math.tan(i.fovDeg*Math.PI/360)/(2*t);if(!(o>0))return null;let s=e=>e/Math.sin(a)/o,c=s(qp),l=s(Jp),u=a>=Yp&&c*100<=Zp;if(u===(a<Yp&&l*100>=Qp))return null;let d=(u?c:l)*100;return{cm:d,level:nm(d),h:u?`desk`:`floor`,depressionDeg:a*180/Math.PI}}var tm=[10,25,60];function nm(e){for(let t=0;t<tm.length;t++)if(e<tm[t])return t;return tm.length}function rm(e){let t=new Map;e.forEach((e,n)=>{let r=t.get(e.seed);t.set(e.seed,{n:(r?.n??0)+1,last:n})});let n=null;for(let[e,r]of t)(!n||r.n>n.n||r.n===n.n&&r.last>n.last)&&(n={seed:e,...r});return n?e[n.last]:null}var im={analysisWidth:320,everyNFrames:3,lockSeconds:1.5,confirmWindow:7,confirmMatches:4,confirmTimeoutSeconds:1,timeoutSeconds:10,loseSeconds:1,dimSeconds:6,dimBrightness:70,sameCenter:Lp.CENTER,sameSize:Lp.SIZE};function am(e){let t=new Map;for(let n of e)t.set(n,(t.get(n)??0)+1);let n=e[e.length-1]??0,r=0;for(let[e,i]of t)i>r&&(r=i,n=e);return{mode:n,count:r}}function om(e){let t=e.filter(e=>e!==null);if(t.length===0)return null;let{mode:n}=am(t.map(e=>e.level)),r=t.filter(e=>e.level===n);return{cm:r.reduce((e,t)=>e+t.cm,0)/r.length,level:n}}var sm=class{constructor(e,t={},n){s(this,`source`,void 0),s(this,`getUpZ`,void 0),s(this,`opt`,void 0),s(this,`frame`,0),s(this,`acv`,void 0),s(this,`actx`,void 0),s(this,`refEllipse`,null),s(this,`stableSince`,0),s(this,`lastSeen`,0),s(this,`startedAt`,0),s(this,`timeoutFired`,!1),s(this,`lostFired`,!1),s(this,`dimFired`,!1),s(this,`confirmSince`,0),s(this,`seedHistory`,[]),s(this,`readHistory`,[]),s(this,`sizeHistory`,[]),s(this,`gate`,void 0),s(this,`gateCounts`,{new:0,same:0,skip:0}),s(this,`confirmCv`,null),s(this,`confirmCtx`,null),s(this,`locked`,null),s(this,`lockedScreen`,null),s(this,`spin`,0),s(this,`spinScore`,0),s(this,`spinMeter`,new Wp(256)),s(this,`sig0`,null),s(this,`lockAngle`,0),s(this,`lockCrop`,null),s(this,`spinCv`,null),s(this,`spinCtx`,null),s(this,`lastSpinRaw`,0),s(this,`viewW`,1),s(this,`viewH`,1),s(this,`last`,null),s(this,`lastObjectRead`,null),this.source=e,this.getUpZ=n,this.opt={...im,...t},this.gate=new Bp(this.opt),this.acv=document.createElement(`canvas`),this.actx=this.acv.getContext(`2d`,{willReadFrequently:!0})}setView(e,t){this.viewW=e,this.viewH=t}reset(){this.refEllipse=null,this.stableSince=0,this.lastSeen=0,this.startedAt=0,this.timeoutFired=!1,this.lostFired=!1,this.dimFired=!1,this.locked=null,this.lockedScreen=null,this.spin=0,this.spinScore=0,this.sig0=null,this.confirmSince=0,this.seedHistory=[],this.readHistory=[],this.sizeHistory=[],this.gate.reset()}sampleReading(e,t){this.confirmCv||(this.confirmCv=document.createElement(`canvas`),this.confirmCv.width=256,this.confirmCv.height=256,this.confirmCtx=this.confirmCv.getContext(`2d`,{willReadFrequently:!0})),Hp(this.confirmCtx,this.source.element,this.toSource(e));let n={w:256,h:256,data:this.confirmCtx.getImageData(0,0,256,256).data};if(t.object){let e=Me(n,t.object.polarity);return this.lastObjectRead=e,{seed:Ne(e),quant:[167,1,...e.quant],features:null,object:e}}let{features:r,debug:i}=Oe(n);return{seed:ke(i.quantVector),quant:i.quantVector,features:r,object:null}}measureSpin(e){if(!this.locked||!this.sig0)return;this.spinCv||(this.spinCv=document.createElement(`canvas`),this.spinCv.width=256,this.spinCv.height=256,this.spinCtx=this.spinCv.getContext(`2d`,{willReadFrequently:!0}));let t=this.spinCtx;Hp(t,this.source.element,this.toSource(e));let n={w:256,h:256,data:t.getImageData(0,0,256,256).data},r=this.spinMeter.signature(n);if(!r)return;let i=Wp.bestShift(this.sig0,r);if(this.spinScore=i.score,this.lastSpinRaw=i.radians,i.score<.45)return;let a=Gp(Gp(i.radians+Gp(e.angle-this.lockAngle))-this.spin);this.spin=Gp(this.spin+a*.5)}get stableSeconds(){return this.refEllipse&&this.stableSince?(performance.now()-this.stableSince)/1e3:0}toScreen(e){let t=this.acv.width,n=this.source.width/t,r=fp(this.source.width,this.source.height,this.viewW,this.viewH),i=n*r.s;return{cx:e.cx*i+r.ox,cy:e.cy*i+r.oy,a:e.a*i,b:e.b*i,angle:e.angle}}toSource(e){let t=this.source.width/this.acv.width;return{cx:e.cx*t,cy:e.cy*t,a:e.a*t,b:e.b*t,angle:e.angle}}contourToScreen(e){let t=this.source.width/this.acv.width,n=fp(this.source.width,this.source.height,this.viewW,this.viewH),r=t*n.s;return e.map(e=>({x:e.x*r+n.ox,y:e.y*r+n.oy}))}update(e){let t=[];if(this.startedAt||(this.startedAt=e),this.frame++,this.frame%this.opt.everyNFrames!==0)return t;let n=this.source.width,r=this.source.height;if(n<2||r<2)return t;let i=this.opt.analysisWidth,a=Math.max(2,Math.round(r/n*i));(this.acv.width!==i||this.acv.height!==a)&&(this.acv.width=i,this.acv.height=a),this.actx.drawImage(this.source.element,0,0,i,a);let o=this.actx.getImageData(0,0,i,a).data,s=Fp(ue(o,i,a),i,a,{},o),c=s.best,l=this.getUpZ?.()??null,u=c&&l!==null?em(l,this.toSource(c.ellipse).a,this.source.height):null;if(this.last={best:s.best,count:s.candidates.length,ms:s.ms,w:i,h:a,brightness:s.brightness,usedEdge:s.usedEdge,rejected:s.rejected,realSize:u,path:s.path,objectRan:s.objectRan,objectRejected:s.objectRejected},!this.locked&&!c&&s.tooLarge&&t.push({type:`tooClose`}),!this.locked&&!this.dimFired&&e-this.startedAt>this.opt.dimSeconds*1e3&&s.brightness<this.opt.dimBrightness&&(this.dimFired=!0,t.push({type:`dim`})),this.locked){let n=this.locked,r=null,i=1/0;for(let e of s.candidates){let t=Math.hypot(e.ellipse.cx-n.cx,e.ellipse.cy-n.cy)/n.a,a=Math.abs(e.ellipse.a-n.a)/n.a;t<.5&&a<.35&&t+a<i&&(i=t+a,r=e)}let a=!1;if(!r&&s.best&&e-this.lastSeen>800&&Math.abs(s.best.ellipse.a-n.a)/n.a<.3&&(r=s.best,a=!0),r){let i=r.ellipse,o=a?1:.6;this.locked={cx:n.cx+(i.cx-n.cx)*o,cy:n.cy+(i.cy-n.cy)*o,a:n.a+(i.a-n.a)*o,b:n.b+(i.b-n.b)*o,angle:cm(n.angle,i.angle,o)},this.lockedScreen=this.toScreen(this.locked),this.lastSeen=e,this.lostFired=!1,this.measureSpin(i),t.push({type:`track`,screen:this.lockedScreen,spin:this.spin,spinScore:this.spinScore})}else!this.lostFired&&e-this.lastSeen>this.opt.loseSeconds*1e3&&(this.lostFired=!0,t.push({type:`lost`}));return t}if(c){let n=c.ellipse;this.lastSeen=e;let r=this.refEllipse,i=(r||this.gate.reset(),this.gate.observe(n));if(this.gateCounts[i]++,i===`same`&&r){let e=.3;this.refEllipse={cx:r.cx+(n.cx-r.cx)*e,cy:r.cy+(n.cy-r.cy)*e,a:r.a+(n.a-r.a)*e,b:r.b+(n.b-r.b)*e,angle:cm(r.angle,n.angle,e)}}else i!==`new`&&r||(this.refEllipse={...n},this.stableSince=e,this.confirmSince=0,this.seedHistory=[],this.readHistory=[],this.sizeHistory=[]);this.refEllipse||(this.refEllipse={...n});let a=(e-this.stableSince)/1e3;if(t.push({type:`candidate`,screen:this.toScreen(this.refEllipse),contour:this.contourToScreen(c.contour),stable:a}),i!==`skip`&&a>=this.opt.lockSeconds){this.confirmSince||(this.confirmSince=e);let r=this.sampleReading(n,c),i=r.seed;this.seedHistory.push(i),this.readHistory.push(r),this.seedHistory.length>this.opt.confirmWindow&&(this.seedHistory.shift(),this.readHistory.shift());let a=l===null?null:em(l,this.toSource(n).a,this.source.height);this.sizeHistory.push(a?{level:a.level,cm:a.cm}:null),this.sizeHistory.length>this.opt.confirmWindow&&this.sizeHistory.shift();let{count:o}=am(this.seedHistory),s=o>=this.opt.confirmMatches,u=e-this.confirmSince>this.opt.confirmTimeoutSeconds*1e3;if(t.push({type:`confirming`,streak:o,needed:this.opt.confirmMatches,seed:i,history:this.seedHistory.slice()}),s||u){let e={...this.refEllipse},n=this.toSource(e),r=Vp(this.source.element,n),i=!!c.object,a=i;if(!i){let e=ue(r.image.data,256,256),t=117.76;a=Ip(e,256,256,{cx:128,cy:128,a:t,b:t,angle:0}).coverage>=.85}if(!a)this.refEllipse=null,this.stableSince=0,this.confirmSince=0,this.seedHistory=[],this.readHistory=[],this.sizeHistory=[],t.push({type:`fakeRing`});else{this.locked=e,this.lockedScreen=this.toScreen(this.locked);let i=rm(this.readHistory),a=i.object,o=i.quant;a&&(this.lastObjectRead=a),this.sig0=this.spinMeter.signature(r.image),this.lockCrop=r.canvas,this.lockAngle=this.locked.angle,this.spin=0,this.spinScore=+!!this.sig0;let c=om(this.sizeHistory);t.push({type:`lock`,screen:this.lockedScreen,source:n,crop:r,quant:o,confirmedByTimeout:!s,realSize:c,object:a,reading:i}),this.confirmSince=0,this.seedHistory=[],this.readHistory=[],this.sizeHistory=[]}}}}else this.refEllipse&&e-this.lastSeen>this.opt.loseSeconds*1e3&&(this.refEllipse=null,this.stableSince=0,this.confirmSince=0,this.seedHistory=[],this.readHistory=[],this.sizeHistory=[]),!this.timeoutFired&&e-this.startedAt>this.opt.timeoutSeconds*1e3&&e-this.lastSeen>this.opt.timeoutSeconds*1e3&&(this.timeoutFired=!0,t.push({type:`timeout`}));return t}};function cm(e,t,n){let r=t-e;for(;r>Math.PI/2;)r-=Math.PI;for(;r<-Math.PI/2;)r+=Math.PI;return e+r*n}function lm(e,t,n,r,i=0,a=null,o=null){let s=r/2/Math.tan(ea.degToRad(t.fov)/2),c=s*1/(2*e.a),l=new J((e.cx-n/2)/s*c,-(e.cy-r/2)/s*c,-c),u=Math.min(1,e.b/e.a),d=Math.acos(u),f=e.angle+Math.PI/2,p=Math.cos(f),m=-Math.sin(f),h=new J(p*Math.sin(d),m*Math.sin(d),Math.cos(d)).normalize(),g=new J(-p*Math.sin(d),-m*Math.sin(d),Math.cos(d)).normalize(),_;_=a?h.dot(a)>=g.dot(a)?h:g:m>=0?h:g;let v=a?a.clone():_,y;if(o)y=o.clone();else{let e=l.clone().negate().normalize();if(y=e.clone().sub(v.clone().multiplyScalar(e.dot(v))),y.lengthSq()<1e-4){let e=new J(0,-1,0);y=e.clone().sub(v.clone().multiplyScalar(e.dot(v))),y.lengthSq()<1e-6&&y.set(0,0,1)}}i&&y.applyAxisAngle(v,-i),y.sub(v.clone().multiplyScalar(y.dot(v))),y.lengthSq()<1e-6?y.set(0,0,1).sub(v.clone().multiplyScalar(v.z)).normalize():y.normalize();let b=new J().crossVectors(v,y).normalize(),x=new wa().makeBasis(b,v,y);return{position:l,quaternion:new ta().setFromRotationMatrix(x),diameter:1,tilt:d}}function um(e,t,n){return{position:e.position.clone().lerp(t.position,n),quaternion:e.quaternion.clone().slerp(t.quaternion,n),diameter:1,tilt:e.tilt+(t.tilt-e.tilt)*n}}function dm(e,t){let n=e.clone().sub(t.clone().multiplyScalar(e.dot(t)));return n.lengthSq()>1e-6?n.normalize():null}function fm(e,t){let n=new J(0,1,0).applyQuaternion(e.quaternion),r=new J(0,0,1).applyQuaternion(e.quaternion),i=dm(e.position.clone().negate(),n),a=dm(r,n),o=dm(r.clone().applyAxisAngle(n,t),n);if(!i||!a||!o)return null;let s=(e,t)=>Math.atan2(new J().crossVectors(e,t).dot(n),e.dot(t));return{deviation:s(o,i),yawToCamera:s(a,i)}}var pm=class{constructor(){s(this,`available`,!1),s(this,`latest`,null),s(this,`handler`,e=>{let t=e.accelerationIncludingGravity;if(!t||t.x==null||t.y==null||t.z==null)return;let n=(screen.orientation?.angle??0)*Math.PI/180||0,r=Math.cos(n),i=Math.sin(n),a=new J(t.x*r+t.y*i,-t.x*i+t.y*r,t.z);a.lengthSq()<1e-6||(this.latest=a.normalize(),this.available=!0)})}async requestPermission(){if(!(`DeviceMotionEvent`in window))return!1;let e=window.DeviceMotionEvent;if(typeof e.requestPermission==`function`)try{if(await e.requestPermission()!==`granted`)return!1}catch{return!1}return window.addEventListener(`devicemotion`,this.handler),await new Promise(e=>setTimeout(e,300)),this.available=this.latest!==null,this.available||window.removeEventListener(`devicemotion`,this.handler),this.available}get up(){return this.available&&this.latest?this.latest.clone():null}dispose(){window.removeEventListener(`devicemotion`,this.handler)}},mm={uViewport:{value:new q(390,844)},uWidthPx:{value:3}};function hm(e,t,n){mm.uViewport.value.set(e*n,t*n),mm.uWidthPx.value=e/390*3*n}var gm=`
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
`,_m=`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 uColor;
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4(uColor, 1.0);
  #include <colorspace_fragment>
}
`;function vm(){return new Zc({vertexShader:gm,fragmentShader:_m,side:1,clipping:!0,uniforms:{uViewport:mm.uViewport,uWidthPx:mm.uWidthPx,uWidthMul:{value:1},uColor:{value:new X(y)}}})}var ym=null;function bm(){return ym||(ym=vm()),ym}function xm(e,t=bm()){let n=new Gs(e.geometry,t);return n.name=`outline`,n.renderOrder=-1,e.add(n),n}var Sm=new Set,Cm=new Set,wm=new Set;function Tm(e,t){e.has(t)||(e.add(t),t.addEventListener(`dispose`,()=>e.delete(t)))}function Em(e){return Tm(Sm,e),e}function Dm(e){return Tm(wm,e),e}function Om(e){Tm(Cm,e);for(let t of Object.values(e))t instanceof va&&Em(t);let t=e.uniforms;if(t)for(let e of Object.keys(t))t[e]?.value instanceof va&&Em(t[e].value);return e}function km(e){return e.traverse(e=>{let t=e;t.geometry&&Dm(t.geometry);let n=t.material;Array.isArray(n)?n.forEach(Om):n&&Om(n)}),e}function Am(){for(let e of Sm)e.needsUpdate=!0;for(let e of Cm)e.needsUpdate=!0}var jm=class{constructor(e,t={}){s(this,`canvas`,void 0),s(this,`renderer`,void 0),s(this,`scene`,new oo),s(this,`camera`,void 0),s(this,`cssW`,1),s(this,`cssH`,1),s(this,`contextLost`,!1),s(this,`contextEvents`,{lost:0,restored:0}),this.canvas=e,this.renderer=new lp({canvas:e,alpha:!!t.alpha,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.localClippingEnabled=!0,this.renderer.outputColorSpace=li,t.alpha?this.renderer.setClearColor(0,0):this.scene.background=new X(t.background??`#FFFFFF`),this.camera=new Ol(t.fov??50,1,.05,50),e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.contextEvents.lost++}),e.addEventListener(`webglcontextrestored`,()=>{km(this.scene),Am(),this.contextLost=!1,this.contextEvents.restored++;let e=this.cssW,t=this.cssH;this.cssW=this.cssH=0,this.resize(e,t)})}resize(e,t){(e!==this.cssW||t!==this.cssH)&&(this.cssW=e,this.cssH=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),hm(e,t,this.renderer.getPixelRatio()))}fit(e){let t=e.getBoundingClientRect();this.resize(Math.max(1,Math.round(t.width)),Math.max(1,Math.round(t.height)))}render(){this.contextLost||this.renderer.render(this.scene,this.camera)}project(e,t=new q){return Mm.copy(e).project(this.camera),t.set((Mm.x+1)/2*this.cssW,(1-Mm.y)/2*this.cssH),t}dispose(){this.renderer.dispose()}},Mm=new J,Nm=new J;function Pm(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Nm.copy(t),Nm[r]=0,Nm.normalize();let l=.5*o/(o+s),u=1-Nm.angleTo(e)/c;return Math.sign(Nm[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Fm=class e extends oc{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new J,c=new J,l=new J(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new J,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Pm(m,c,`z`,`y`,i,n),f[a+1]=1-Pm(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Pm(m,c,`z`,`y`,i,n),f[a+1]=1-Pm(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Pm(m,c,`x`,`z`,i,e),f[a+1]=Pm(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Pm(m,c,`x`,`z`,i,e),f[a+1]=1-Pm(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Pm(m,c,`x`,`y`,i,e),f[a+1]=1-Pm(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Pm(m,c,`x`,`y`,i,e),f[a+1]=1-Pm(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Im=new J(-.45,.65,.62).normalize(),Lm=`
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
`,Rm=`
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
`;function zm(e,t,n=6,r){let i=r??_(e);return new Zc({vertexShader:Lm,fragmentShader:Rm,clipping:!0,uniforms:{uLight:{value:new X(e)},uDark:{value:new X(_(e))},uLightDir:{value:Im},uPattern:{value:t?t.kind===`spots`?1:2:0},uPatScale:{value:n},uPatAmount:{value:t?t.amount:0},uPatColor:{value:new X(i)},uPatDark:{value:new X(_(i))},uFlash:{value:0}}})}function Bm(e){let t=document.createElement(`canvas`);t.width=512,t.height=384;let n=t.getContext(`2d`);n.clearRect(0,0,512,384),n.lineCap=`round`,n.lineJoin=`round`;let r=14.336,i=(e,t,i)=>{n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fillStyle=`#FFFFFF`,n.fill(),n.lineWidth=r,n.strokeStyle=y,n.stroke(),n.beginPath(),n.arc(e+i*.2,t+i*.15,i*.42,0,Math.PI*2),n.fillStyle=y,n.fill()},a=61.44;e.eyes===1?i(256,384*.46,a*1.3):e.eyes===2?(i(163.84,180.48,a),i(348.16,180.48,a)):(i(153.6,199.68,a*.9),i(358.4,199.68,a*.9),i(256,384*.3,a*.8)),e.nose&&(n.beginPath(),n.moveTo(240.64,384*.63),n.lineTo(271.36,384*.63),n.lineTo(256,261.12),n.closePath(),n.fillStyle=y,n.fill()),n.beginPath(),n.lineWidth=r,n.strokeStyle=y;let o=e.nose?299.52:384*.74;if(e.mouth===`smile`?(n.moveTo(204.8,o),n.quadraticCurveTo(256,o+34.56,307.2,o),n.stroke()):e.mouth===`small`?(n.moveTo(230.4,o+7.68),n.quadraticCurveTo(256,o+23.04,281.6,o+7.68),n.stroke()):(n.moveTo(215.04,o),n.quadraticCurveTo(256,o+46.08,296.96,o),n.closePath(),n.fillStyle=y,n.fill()),e.crest){let t=e.eyes===3?46.08:65.28,i=25.6;n.beginPath(),n.moveTo(256,t-i),n.lineTo(276.48,t),n.lineTo(256,t+i),n.lineTo(256-i*.8,t),n.closePath(),n.fillStyle=e.accent,n.fill(),n.lineWidth=r*.8,n.strokeStyle=y,n.stroke()}let s=new nc(t);return s.colorSpace=li,s.anisotropy=4,s}function Vm(e,t){let n=120*Math.PI/180,r=90*Math.PI/180,i=new Gs(new Bc(e*1.012,24,16,Math.PI/2-n/2,n,Math.PI/2-r/2,r),new Ns({map:t,transparent:!0,depthWrite:!1}));return i.renderOrder=2,i.name=`face`,i}function Hm(e,t,n,r){let i=new Gs(new Rc(e*.92,t*.92),new Ns({map:r,transparent:!0,depthWrite:!1}));return i.position.z=n/2+.004,i.renderOrder=2,i.name=`face`,i}function Um(e=.35){let t=new Gs(new cc(e,36),new Ns({color:new X(b),transparent:!0,opacity:.32,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.004,t.renderOrder=-2,t.name=`shadow`,t}function Wm(e){let t=e=>(e-1)/4,n=t(e.stats.hp),r=t(e.stats.spd),i=t(e.stats.atk),a=t(e.stats.mag);return{scale:.85+.4*n,belly:.85+.5*n,limbLen:.75+.6*r,limbThin:1.15-.5*r,armThick:.7+.9*i,chest:.85+.45*i,hover:.22*a,hornLen:.8+.8*a,animSpeed:.7+.9*r}}var Gm=class{constructor(e){s(this,`m`,void 0),s(this,`mats`,[]),s(this,`geos`,[]),s(this,`body`,void 0),s(this,`plain`,void 0),s(this,`accent`,void 0),s(this,`light`,void 0),s(this,`sub`,void 0),s(this,`tip`,void 0),s(this,`part`,void 0),s(this,`variant`,void 0),s(this,`ink`,void 0),s(this,`outline`,void 0),s(this,`rng`,void 0),this.m=e,this.rng=new l(e.seed^20973),this.outline=vm();let t=e.color2??Fe(e.color,e.seed);this.variant=this.rng.int(0,2),this.body=zm(e.color,e.marks[0],6,t),this.plain=zm(e.color),this.sub=zm(t),this.accent=this.sub,this.light=zm(v(this.variant===0?t:e.color)),this.tip=this.variant===1?this.sub:this.body,this.part=this.variant===2?this.sub:this.plain,this.mats.push(this.body,this.plain,this.sub,this.light),this.ink=new Ns({color:new X(y)})}geo(e){return this.geos.push(e),e}mesh(e,t,n=!0){let r=new Gs(this.geo(e),t);return n&&xm(r,this.outline),r}sphere(e,t=this.body,n=!0){return this.mesh(new Bc(e,20,14),t,n)}rbox(e,t,n,r,i=this.body){return this.mesh(new Fm(e,t,n,4,Math.min(r,e/2,t/2,n/2)),i)}cone(e,t,n=this.plain){return this.mesh(new uc(e,t,14),n)}limb(e,t,n,r=this.body,i=0,a=r){let o=t.clone().sub(e),s=o.length(),c=Math.max(.01,s-n),l=new sc(n,c,5,12),u=this.mesh(l,r);u.position.y=-(c/2);let d=new Qa;if(d.position.copy(e),d.quaternion.setFromUnitVectors(new J(0,-1,0),o.normalize()),d.add(u),i>0){let e=this.sphere(i,a);e.position.y=-s,d.add(e)}return{pivot:d,mesh:u,len:s}}tube(e,t,n=this.body,r=16){let i=new bc(e);return this.mesh(new Hc(i,r,t,10,!1),n)}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();this.ink.dispose(),this.outline.dispose()}};function Km(e){let t=new Gm(e),n=Wm(e),r=new Qa;r.name=`monster:${e.name}`;let i=new Qa;r.add(i);let a=[],o={root:i,limbs:a,shadow:Um(.3),hover:n.hover,animSpeed:n.animSpeed,heavy:(e.stats.atk-1)/4,bulk:(e.stats.hp-1)/4};r.add(o.shadow);let s=e.color2??Fe(e.color,e.seed),c=Bm({eyes:e.eyes,crest:e.crest,accent:s,nose:e.skeleton===`quadruped`,mouth:e.skeleton===`multileg`?`small`:e.stats.atk>=4?`open`:`smile`}),u=null,d=new J(0,.5,-.1),f=new J(0,.3,-1).normalize(),p=new J(0,.6,.1),m=new J(0,.6,-.1),h=e=>a.push(e);switch(e.skeleton===`multileg`||e.skeleton===`serpent`||e.skeleton,e.skeleton){case`quadruped`:{let r=(e=>(e-1)/4)(e.stats.spd),a=.5*(.85+.35*r),s=.19*n.belly*(1-.15*r),l=.18*n.belly,g=.2*n.limbLen,_=.05*n.limbThin,v=g+s*.75,y=t.sphere(1);y.scale.set(l,s,a/2),y.position.set(0,v,0),i.add(y),o.torso=y;let b=t.sphere(1,t.light,!1);b.scale.set(l*.8,s*.55,a*.42),b.position.set(0,v-s*.5,.02),i.add(b),[[l*.6,a*.34,!0],[-l*.6,a*.34,!0],[l*.6,-a*.34,!1],[-l*.6,-a*.34,!1]].forEach(([e,r,a],o)=>{let c=_*(a?Math.sqrt(n.armThick):1),l=new J(e,v-s*.4,r),u=new J(e,.02,r),{pivot:d}=t.limb(l,u,c);i.add(d),h({pivot:d,rest:d.quaternion.clone(),phase:o%2*Math.PI+(a?0:Math.PI/2),kind:`leg`,amp:.35})});let x=.19,S=new J(0,v+s*.55+.06,a/2+.08),C=t.limb(new J(0,v+s*.3,a*.4),S,.075*n.armThick**.6*n.belly);i.add(C.pivot);let w=t.sphere(x);w.position.copy(S),w.add(Vm(x,c)),i.add(w),o.head=w,u={obj:w,r:x,top:new J(0,x,0),kind:`sphere`,w:x*2};for(let e of[-1,1]){let n=t.cone(.055,.14,t.tip);n.position.set(e*x*.6,x*.85,-.02),n.rotation.z=-e*.5,w.add(n),h({pivot:n,rest:n.quaternion.clone(),phase:e,kind:`ear`,amp:.08})}let T=new J(0,v+s*.2,-a/2+.02),E=n.hornLen,D=new Qa;D.position.copy(T);let O=t.tube([new J(0,0,0),new J(0,.08*E,-.12*E),new J(0,.24*E,-.16*E),new J(0,.38*E,-.1*E)],.045*n.belly,t.tip);D.add(O),i.add(D),h({pivot:D,rest:D.quaternion.clone(),phase:0,kind:`tail`,amp:.25}),d=new J(0,v+s*.9,-a*.1),f=new J(0,1,-.2).normalize(),p=new J(0,v+s,a*.3),m=new J(0,v+s*.9,-a*.4),o.shadow.scale.set(l*2.6,a*1.6,1);break}case`multileg`:{let r=.2*n.belly,a=.26,s=.19*n.belly,l=.36,g=t.sphere(1);g.scale.set(r,a,s),g.position.set(0,l,0),i.add(g),o.torso=g;let _=e.stats.spd>=4?8:6,v=.024*n.limbThin;for(let a=0;a<_/2;a++){let o=ea.lerp(.12,-.14,a/(_/2-1));for(let s of[-1,1]){let c=new J(s*r*.8,.38,o),l=new J(s*(r+.14*n.limbLen),.48,o),u=new J(s*(r+.22*n.limbLen),.01,o+.04),d=a===0&&e.stats.atk>=4,f=d?v*2.2:v,p=t.limb(c,l,f);i.add(p.pivot);let m=t.limb(l,u,f*.9,t.tip);if(i.add(m.pivot),d){let e=t.cone(f*1.6,.12,t.tip);e.position.copy(u).add(new J(0,.05,.08)),e.rotation.x=1.2,i.add(e)}h({pivot:p.pivot,rest:p.pivot.quaternion.clone(),phase:a*1.3+(s>0?Math.PI:0),kind:`leg`,amp:.12})}}for(let e=0;e<2;e++){let n=new Gs(t.geo(new Vc(1,.012,6,32)),t.ink);n.rotation.x=Math.PI/2;let o=.33999999999999997-e*.1,c=Math.sqrt(Math.max(.01,1-((o-l)/a)**2));n.scale.set(r*c*1,s*c*1,1),n.position.y=o,i.add(n)}let y=.15,b=new J(0,.62+.06,.06),x=t.sphere(y);x.position.copy(b),x.add(Vm(y,c)),i.add(x),o.head=x,u={obj:x,r:y,top:new J(0,y,0),kind:`sphere`,w:y*2};for(let e of[-1,1]){let r=qm(t,e,y,n.hornLen,t.accent);x.add(r),h({pivot:r,rest:r.quaternion.clone(),phase:e*.7,kind:`antenna`,amp:.12})}for(let e of[-1,1]){let n=t.cone(.02,.07,t.tip);n.position.set(e*.05,-.15*.75,y*.6),n.rotation.x=Math.PI,n.rotation.z=e*.3,x.add(n)}d=new J(0,.516,-s*.8),f=new J(0,.6,-1).normalize(),p=new J(0,.607,.02),m=new J(0,.38,-s*.95),o.shadow.scale.set(r*2+.3*n.limbLen,s*2+.2,1);break}case`serpent`:{let r=(e=>(e-1)/4)(e.stats.spd),a=.11*n.belly*(1-.25*r),s=.9+.5*r,l=[new J(.28*s,a*.6,.22),new J(.05*s,a,.3),new J(-.2*s,a*1.1,.1),new J(-.08*s,a+.14,-.12),new J(.1*s,a+.32,-.08),new J(.02,a+.5,.04)],g=t.tube(l,a,t.body,40);i.add(g),o.torso=g;let _=t.cone(a*1.1,.16,t.tip);_.position.copy(l[0]).add(new J(.08,0,0)),_.rotation.z=-Math.PI/2,i.add(_);let v=.16,y=l[l.length-1].clone().add(new J(0,.08,.06)),b=t.sphere(v);b.position.copy(y),b.add(Vm(v,c)),i.add(b),o.head=b,u={obj:b,r:v,top:new J(0,v,0),kind:`sphere`,w:v*2};for(let e of[-1,1]){let n=t.cone(.06,.12,t.tip);n.position.set(e*v*.95,-.02,0),n.rotation.z=e*-1.3,n.scale.z=.35,b.add(n),h({pivot:n,rest:n.quaternion.clone(),phase:e,kind:`ear`,amp:.1})}d=y.clone().add(new J(0,-.1,-.12)),f=new J(0,.5,-1).normalize(),p=l[4].clone().add(new J(0,a,0)),m=l[2].clone().add(new J(0,a,0)),o.shadow.scale.set(.6*s,.5,1);break}case`floating`:{let r=e=>(e-1)/4,a=r(e.stats.atk),s=.28*(1-.15*r(e.stats.spd))*(.95+.15*a);o.hover=.18+n.hover;let l=t.sphere(1);l.scale.set(s*(1+.15*a),s*.95,s),l.position.set(0,s*.95,0),i.add(l),o.torso=l;for(let e=0;e<5;e++){let n=e/5*Math.PI*2,r=t.sphere(s*.28,t.tip);r.position.set(Math.cos(n)*s*.78*(1+.15*a),s*.22,Math.sin(n)*s*.78),i.add(r)}let h=Vm(s*1,c);h.position.copy(l.position),h.scale.copy(l.scale).multiplyScalar(1/s),i.add(h),o.head=l,u={obj:l,r:s,top:new J(0,s*.95,0),kind:`sphere`,w:s*2},d=new J(0,s*1.1,-s*.7),f=new J(0,.7,-1).normalize(),p=new J(0,s*1.9,s*.3),m=new J(0,s*1.6,-s*.7),o.shadow.scale.set(s*2.2,s*2.2,1);break}default:{let e=.22*n.limbLen,r=.055*n.limbThin*n.belly**.3,a=.36*n.chest*Math.sqrt(n.belly),s=.28,l=.26*n.belly,g=e+s/2-.03,_=t.rbox(a,s,l,.1);_.position.set(0,g,0),i.add(_),o.torso=_;let v=t.sphere(.035,t.accent);v.position.set(0,g-.02,l/2),i.add(v);for(let e of[-1,1]){let n=new J(e*a*.26,g-s/2+.04,0),o=new J(e*a*.26,.02,0),{pivot:c}=t.limb(n,o,r);i.add(c),h({pivot:c,rest:c.quaternion.clone(),phase:e>0?0:Math.PI,kind:`leg`,amp:.3})}let y=.03*n.armThick**.9*n.limbThin**.3;for(let e of[-1,1]){let r=new J(e*(a/2-.01),g+s/2-.07,0),o=r.clone().add(new J(e*.17*n.limbLen,-.15*n.limbLen,.04)),{pivot:c}=t.limb(r,o,y,t.body,.05*Math.sqrt(n.armThick),t.tip);i.add(c),h({pivot:c,rest:c.quaternion.clone(),phase:e>0?Math.PI:0,kind:`arm`,amp:.25})}let b=.46,x=.36,S=.38,C=g+s/2+x/2-.02,w=t.rbox(b,x,S,.13);w.position.set(0,C,0),w.add(Hm(b,x,S,c)),i.add(w),o.head=w,u={obj:w,r:b/2,top:new J(0,x/2,0),kind:`box`,w:b};let T=qm(t,0,x/2,n.hornLen,t.accent);w.add(T),h({pivot:T,rest:T.quaternion.clone(),phase:0,kind:`antenna`,amp:.1}),d=new J(0,g+s*.3,-l/2),f=new J(0,.4,-1).normalize(),p=new J(0,C+x/2,-.38*.15),m=new J(0,g,-l/2),o.shadow.scale.set(a*1.9,l*1.9,1)}}let g=new l(e.seed^2577);for(let r of e.parts)Jm(t,i,r,n,u,d,f,p,m,g,h);i.scale.setScalar(n.scale),i.position.y=o.hover,o.shadow.scale.multiplyScalar(n.scale);let _=new So().setFromObject(i);return{group:r,height:Math.max(.2,_.max.y-Math.min(0,_.min.y)),rig:o,materials:t.mats,outline:t.outline,skeleton:e.skeleton,dispose:()=>{t.dispose(),c.dispose()}}}function qm(e,t,n,r,i){let a=new Qa,o=.14*r,s=e.mesh(new sc(.012,o,3,8),e.ink,!1);s.position.y=o/2,a.add(s);let c=e.sphere(.04*Math.sqrt(r),i);return c.position.y=o+.02,a.add(c),a.position.set(t*.08,n-.01,0),a.rotation.z=-t*.35,a}function Jm(e,t,n,r,i,a,o,s,c,l,u){let d=n.size;switch(n.kind){case`horn`:{if(!i)break;let t=n.variant<.3?1:2,a=.16*d*r.hornLen;for(let r=0;r<t;r++){let o=t===1?0:r===0?-1:1,s=e.cone(.05*d,a,e.part);s.position.set(o*i.w*.28,i.top.y+a*.35,i.kind===`box`?.02:-.02),s.rotation.z=-o*(.35+.3*n.variant),i.obj.add(s)}break}case`spike`:{let i=3+Math.round(n.variant*2);for(let n=0;n<i;n++){let a=(n+.5)/i,o=s.clone().lerp(c,a),l=e.cone(.035*d,.1*d*r.hornLen,e.part);l.position.copy(o),l.rotation.x=-.4,t.add(l)}break}case`wing`:for(let n of[-1,1]){let r=new Qa;r.position.copy(a);let i=e.cone(.11*d,.3*d,e.part);i.scale.z=.18,i.position.set(n*.17*d,.1*d,0),i.rotation.z=-n*(Math.PI/2-.5),r.add(i),r.rotation.x=.4,t.add(r),u({pivot:r,rest:r.quaternion.clone(),phase:0,kind:`wing`,amp:.35})}break;case`tail`:{let n=new Qa;n.position.copy(a);let i=r.hornLen*d,o=e.tube([new J(0,0,0),new J(0,-.05*i,-.14*i),new J(0,.08*i,-.26*i),new J(0,.26*i,-.26*i)],.035*d,e.part);n.add(o);let s=e.sphere(.055*d,e.accent);s.position.set(0,.28*i,-.26*i),n.add(s),t.add(n),u({pivot:n,rest:n.quaternion.clone(),phase:1,kind:`tail`,amp:.3});break}case`antenna`:if(!i)break;for(let t of[-1,1]){let n=qm(e,t*1.6,i.top.y,r.hornLen*d,e.accent);n.position.x=t*i.w*.3,i.obj.add(n),u({pivot:n,rest:n.quaternion.clone(),phase:t,kind:`antenna`,amp:.15})}break;case`fin`:if(!i)break;for(let t of[-1,1]){let n=e.cone(.07*d,.14*d,e.part);n.scale.z=.3,n.position.set(t*i.w*.5,0,0),n.rotation.z=t*-1.4,i.obj.add(n)}break;case`ornament`:{if(!i)break;let t=e.mesh(new Vc(i.w*.42*d,.025*d,8,24),e.accent);t.rotation.x=Math.PI/2,t.position.set(0,-i.r*.95,0),i.obj.add(t);break}}}var Ym=.5,Xm=ea.degToRad(60),Zm=ea.degToRad(35),Qm=.05,$m=.45,eh=.45,th=class{constructor(e){s(this,`state`,`idle`),s(this,`stateT`,0),s(this,`summonProgress`,1),s(this,`baseScale`,1),s(this,`speed`,0),s(this,`yaw`,0),s(this,`dodgeKind`,`sidestep`),s(this,`dodgeDur`,.35),s(this,`dodgeDir`,1),s(this,`telegraphDur`,.45),s(this,`telegraphGlow`,!0),s(this,`springNext`,!1),s(this,`outlineBoost`,0),s(this,`chargePower`,1),s(this,`built`,void 0),s(this,`flash`,0),s(this,`glow`,0),s(this,`turnFrom`,0),s(this,`turnTarget`,0),s(this,`lookTarget`,null),s(this,`lookYaw`,0),s(this,`lookPitch`,0),s(this,`headRest`,void 0),s(this,`shadowBase`,void 0),s(this,`knockDist`,1.1),this.built=e,this.headRest=e.rig.head?e.rig.head.quaternion.clone():null,this.shadowBase=e.rig.shadow.scale.clone(),e.rig.root.rotation.order=`YXZ`}play(e){this.state=e,this.stateT=0,e===`hit`&&(this.flash=1)}flashOnly(){this.flash=1}dodge(e,t,n=1){this.dodgeKind=e,this.dodgeDur=Math.max(.1,t),this.dodgeDir=n,e===`coil`&&(this.springNext=!0),this.play(`dodge`)}knockback(e=1.1){this.knockDist=e,this.play(`knockback`)}turnTo(e){let t=uh(e-this.yaw);Math.abs(t)<.02?this.yaw=e:(this.turnFrom=this.yaw,this.turnTarget=this.yaw+t,this.play(`turn`))}face(e,t=1){this.yaw+=uh(e-this.yaw)*Math.min(1,t)}lookAt(e){e?this.lookTarget?this.lookTarget.copy(e):this.lookTarget=e.clone():this.lookTarget=null}update(e,t){let{rig:n,skeleton:r}=this.built;this.stateT+=t;let i=n.animSpeed,a=n.root,o=this.built.height,s=Math.sin(e*3.2*i)*.012,c=n.hover+s+(n.hover>0?Math.sin(e*1.7)*.03:0),l=0,u=0,d=1,f=1,p=0,m=0,h=0,g=1,_=1,v=0,y=0,b=1;this.flash=Math.max(0,this.flash-t*4);let x=this.state===`idle`?Math.min(1,this.speed):0;if(x>.02)switch(r){case`quadruped`:{let t=e*7.5*i;_=1+1.6*x,g=1+.7*x,c+=Math.abs(Math.sin(t))*.045*x,p=Math.sin(t)*.07*x;break}case`multileg`:_=1+2.6*x,g=1+.3*x,m=Math.sin(e*9*i)*.03*x,c+=.005*x;break;case`serpent`:h=Math.sin(e*5*i)*.2*x,m=Math.cos(e*5*i)*.08*x,c+=Math.abs(Math.sin(e*5*i))*.02*x;break;case`floating`:c+=Math.sin(e*2.6)*.05*x,m=Math.sin(e*2.2)*.1*x,p=.12*x;break;default:_=1+1.4*x,g=1+.9*x,c+=Math.abs(Math.sin(e*6.4*i*(1+.5*x)))*.03*x,p=.12*x}switch(this.state){case`attack`:{let e=Math.min(1,this.stateT/.6),t=n.heavy,r=Math.sin(Math.PI*e);u=r*(.35+.1*t),d=1+Math.sin(Math.PI*2*e)*(.12+.1*t),f=1/Math.sqrt(d),p=r*.25,g=2.5,e>=1&&this.play(`idle`);break}case`telegraph`:{let e=Math.min(1,this.stateT/Math.max(.1,this.telegraphDur)),t=Math.min(1,e/.35),n=e>.5?(e-.5)/.5:0;u=-.16*t-.06*n-.03*Math.sin(this.stateT*30)*t,d=1-.08*t-.05*n,f=1/Math.sqrt(d),p=-.22*t-.1*n,g=.2,this.telegraphGlow&&(y=.5+.3*Math.abs(Math.sin(this.stateT*9))+.2*n);break}case`strike`:{let e=n.heavy,t=this.springNext?1.5:1,r=this.stateT;if(r<.05){let n=r/Qm;u=-.16+((.45+.12*e)*t+.16)*n,p=-.22+.5*n,d=.92+.2*n}else{let n=Math.min(1,(r-Qm)/.45),i=1-(1-n)**2;u=(.45+.12*e)*t*(1-i),p=.28*(1-i),d=1+.12*(1-i)*Math.cos(n*Math.PI*2)}f=1/Math.sqrt(d),g=2.5,r>=.5&&(this.springNext=!1,this.play(`idle`));break}case`stumble`:{let e=Math.min(1,this.stateT/.4),t=Math.sin(Math.PI*Math.min(1,e*1.2));u=.35*t,p=.55*t,c-=.06*t,d=1-.1*t,f=1/Math.sqrt(d),g=.5,e>=1&&this.play(`idle`);break}case`hit`:{let e=Math.min(1,this.stateT/.3);u=-Math.sin(Math.PI*e)*.08,l=Math.sin(this.stateT*60)*.02*(1-e),p=-Math.sin(Math.PI*e)*.15,e>=1&&this.play(`idle`);break}case`cast`:{let e=Math.sin(this.stateT*9)*.03;d=.93+e,f=1.04-e,c-=.02,g=.3;break}case`charge`:{let e=this.chargePower,t=Math.min(1,this.stateT/.25),n=Math.sin(this.stateT*42)*.012*e*Math.min(1,this.stateT/.6);d=1-.18*t*e+n,f=1/Math.sqrt(d),p=.16*t*e,c-=.04*t,l=Math.sin(this.stateT*55)*.008*e,g=.2,y=.25*e*Math.min(1,this.stateT/.8),v=-.3*t;break}case`release`:{let e=Math.min(1,this.stateT/.4),t=1-(1-Math.min(1,e*1.6))**3;d=1-.18+.32*t,f=1/Math.sqrt(d),p=.16-.36*t,u=.12*t,c+=.06*t,v=1.2*t,g=.6,y=.6*(1-e);break}case`dead`:{let e=Math.min(1,this.stateT/.6),t=1-(1-e)*(1-e);p=-Math.PI/2*t,c=n.hover*(1-t)+.03*t,u=-.1*t,g=0,b=1-t*.6;break}case`knockback`:{let e=this.stateT;if(e<.45){let t=e/$m,r=1-(1-t)**2;u=-this.knockDist*.75*r,c=n.hover*(1-t)+Math.sin(Math.PI*Math.min(1,t*.9))*.5*o,p=-Math.PI*.35*t-Math.sin(t*Math.PI)*.5,m=Math.sin(t*Math.PI*2)*.3,b=1-.5*t}else{let t=Math.min(1,(e-$m)/eh),n=1-(1-t)**2;u=-this.knockDist*(.75+.25*n),c=Math.max(.03,.5*o*.35*(1-n)),p=-Math.PI*.35-Math.PI*.15*n,m=.3*(1-n),b=.5+.3*n,t>=1&&(c=.03,p=-Math.PI/2,m=0)}g=0;break}case`win`:c+=Math.abs(Math.sin(this.stateT*6))*.12,g=2,v=1;break;case`pose`:{let e=Math.min(1,this.stateT/.12);d=1+.1*e+Math.sin(this.stateT*12)*.015,f=1/Math.sqrt(d),p=-.18*e,m=.08*e,v=e,g=.4,c+=.03*e;break}case`dodge`:{let e=Math.min(1,this.stateT/this.dodgeDur),t=this.stateT<.07?1-this.stateT/.07:0;switch(this.dodgeKind){case`jump`:{let t=Math.sin(Math.PI*e);if(c+=1.2*o*t,d=1-.18*t,f=1/Math.sqrt(d),p=t*.5,g=.6,b=1-.45*t,e>.92){let t=(e-.92)/.08;d=1-.18*(1-t)-.12*Math.sin(Math.PI*t),f=1/Math.sqrt(d)}break}case`burrow`:{let t=.15,r=.2,i;i=this.stateT<t?this.stateT/t:e<1&&this.stateT>this.dodgeDur-r?Math.max(0,(this.dodgeDur-this.stateT)/r):e>=1?0:1;let a=1-(1-i)**2;c-=(o*1.15+.1)*a,f=1-.1*a,d=1+.1*a,g=2,_=2.5,b=1+.5*a*(.4+.6*n.bulk);break}case`twist`:{let t=Math.sin(Math.PI*e);h=this.dodgeDir*1.1*Math.sin(Math.PI*2*Math.min(1,e*1.15))*(1-e*.3),f=1-.12*t,d=1+.12*t,m=-this.dodgeDir*.3*t,g=.3;break}case`coil`:{let t=Math.sin(Math.PI*e);f=1+.2*t,d=1-.3*t,p=-.4*t,h=this.dodgeDir*.6*Math.sin(Math.PI*2*e),c+=.04*t,g=.3;break}case`blink`:{let t=e<.5?e/.5:(e-.5)/.5,n=e<.5?t:1-t;d=1+.5*n,f=Math.max(.05,1-.9*n),c+=.1*n,g=.5;break}default:{let t=Math.sin(Math.PI*e);c+=t*.12,m=-this.dodgeDir*.6*t,d=1-.12*t,f=1/Math.sqrt(d),g=2.4,_=2}}t>0&&(d*=1+.22*t,f*=1-.12*t),e>=1&&this.play(`idle`);break}case`turn`:{let e=Math.min(1,this.stateT/Ym),t=e<.5?2*e*e:1-(-2*e+2)**2/2;this.yaw=this.turnFrom+(this.turnTarget-this.turnFrom)*t,c+=Math.abs(Math.sin(e*Math.PI*3))*.035,g=2.2,_=2.4,e>=1&&(this.yaw=uh(this.turnTarget),this.play(`idle`));break}case`summon`:{let e=this.summonProgress;if(e<.7){let t=e/.7;c=-o*(1-dh(t))+n.hover*dh(t),g=.2}else{let t=(e-.7)/.3,r=Math.sin(Math.PI*t)*.06;c=n.hover+r,d=1+Math.sin(Math.PI*t)*.1,f=1/Math.sqrt(d)}break}}a.position.set(l,c,u),a.rotation.set(p,this.yaw+h,m);let S=this.baseScale;a.scale.set(S*f,S*d,S*f),n.shadow.position.x=l,n.shadow.position.z=u,n.shadow.scale.set(this.shadowBase.x*b,this.shadowBase.y*b,1);for(let t of n.limbs){let n=0;if(g>0){let r=t.kind===`antenna`||t.kind===`ear`?2.2:t.kind===`wing`?6:t.kind===`tail`?2.6:3.2*_;n=Math.sin(e*r*i+t.phase)*t.amp*(t.kind===`leg`||t.kind===`arm`?g:1)}t.kind===`arm`&&v!==0&&(n-=2.4*v);let r=t.kind===`tail`?oh:t.kind===`wing`?sh:ah;nh.setFromAxisAngle(r,n),t.pivot.quaternion.copy(t.rest).multiply(nh)}this.updateHead(t),this.glow+=(y-this.glow)*Math.min(1,t*18);for(let e of this.built.materials)e.uniforms.uFlash.value=Math.max(this.flash*.7,this.glow*.25);let C=this.built.outline.uniforms;C.uColor.value.copy(ch).lerp(lh,this.glow),C.uWidthMul.value=1+.7*this.glow+1.3*this.outlineBoost}updateHead(e){let t=this.built.rig.head;if(!t||!this.headRest)return;let n=0,r=0;if(this.lookTarget&&t.parent){this.built.group.updateMatrixWorld(!0),ih.copy(this.lookTarget),t.parent.worldToLocal(ih),ih.sub(t.position);let e=Math.hypot(ih.x,ih.z);n=Math.atan2(ih.x,ih.z),r=-Math.atan2(ih.y,e),n=ea.clamp(n,-Xm,Xm),r=ea.clamp(r,-Zm,Zm),ih.z<0&&Math.abs(ih.x)<e*.3&&(n=0,r=0)}let i=Math.min(1,e*9);this.lookYaw+=(n-this.lookYaw)*i,this.lookPitch+=(r-this.lookPitch)*i,rh.set(this.lookPitch,this.lookYaw,0,`YXZ`),nh.setFromEuler(rh),t.quaternion.copy(this.headRest).multiply(nh)}},nh=new ta,rh=new Pa,ih=new J,ah=new J(1,0,0),oh=new J(0,1,0),sh=new J(0,0,1),ch=new X(y),lh=new X(`#FFFFFF`);function uh(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function dh(e){return 1-(1-e)**3}var fh={center:.55,head:.85,chest:.62,feet:0,top:1.08,sign:1.4};function ph(){try{if(typeof location<`u`&&/[?&]view=placeholder\b/.test(location.search)||typeof localStorage<`u`&&localStorage.getItem(`mb.debug.view`)===`placeholder`)return`placeholder`}catch{}return`primitive3d`}function mh(e,t,n=ph()){return n===`placeholder`?new bh(e,t):new vh(e,t)}var hh=new ta,gh=new J,_h=new J,vh=class extends th{constructor(e,t){let n=Km(e);super(n),s(this,`kind`,`primitive3d`),s(this,`root`,void 0),s(this,`height`,void 0),s(this,`bodyHalf`,void 0),s(this,`bodyCenter`,void 0),s(this,`b`,void 0),this.b=n,this.root=km(n.group),this.height=t,n.group.scale.setScalar(t/n.height),n.group.position.set(0,0,0),n.group.updateMatrixWorld(!0);let r=this.bodyBox(new So),i=r.isEmpty()?new J(t,t,t):r.getSize(new J);this.bodyHalf=i.multiplyScalar(.5);let a=r.isEmpty()?new J(0,t*.55,0):r.getCenter(new J);this.bodyCenter=n.rig.root.worldToLocal(a)}bodyMatrix(){return this.b.rig.root.updateWorldMatrix(!0,!1),this.b.rig.root.matrixWorld}bodyBox(e=new So){return e.makeEmpty(),this.b.group.updateMatrixWorld(!0),this.b.group.traverse(t=>{t!==this.b.rig.shadow&&t.isMesh&&t.visible&&e.expandByObject(t,!1)}),e}lift(){return this.b.rig.root.position.y*this.b.group.scale.y}anchor(e,t=new J){let n=this.root.position;return t.set(n.x,n.y+this.height*fh[e]+this.lift(),n.z)}facing(e){return yh(this.root,this.yaw,e)}intersect(e){return this.b.group.updateMatrixWorld(!0),e.intersectObject(this.b.group,!0).filter(e=>{if(e.object===this.b.rig.shadow)return!1;let t=e.object.visible;return e.object.traverseAncestors(e=>{e.visible||(t=!1)}),t})}setOpacity(e){for(let t of this.b.materials)t.transparent=e<1,t.opacity=e}setShadow(e,t){let n=this.b.rig.shadow.material;n.color.copy(e),n.opacity=t}afterimage(e){let t=Om(new Ns({color:e,transparent:!0,opacity:.5,depthWrite:!1})),n=new Qa;return this.b.group.updateMatrixWorld(!0),this.b.rig.root.traverse(e=>{let r=e;if(!r.isMesh||r.name===`outline`||r.name===`face`)return;let i=new Gs(r.geometry,t);i.matrixAutoUpdate=!1,i.matrix.copy(r.matrixWorld),n.add(i)}),{group:n,mat:t,dispose:()=>t.dispose()}}update(e,t){super.update(e,t)}dispose(){this.b.dispose()}};function yh(e,t,n){e.updateWorldMatrix(!0,!1);let r=e.getWorldPosition(_h);e.getWorldQuaternion(hh);let i=gh.set(Math.sin(t),0,Math.cos(t)).applyQuaternion(hh);return n.getWorldPosition(new J).sub(r).dot(i)>=0?`front`:`back`}var bh=class{constructor(e,t){s(this,`kind`,`placeholder`),s(this,`root`,new Qa),s(this,`height`,void 0),s(this,`bodyHalf`,void 0),s(this,`bodyCenter`,void 0),s(this,`state`,`idle`),s(this,`stateT`,0),s(this,`yaw`,0),s(this,`speed`,0),s(this,`summonProgress`,1),s(this,`telegraphDur`,.45),s(this,`telegraphGlow`,!0),s(this,`chargePower`,1),s(this,`outlineBoost`,0),s(this,`body`,new Qa),s(this,`board`,void 0),s(this,`boardMat`,void 0),s(this,`shadow`,void 0),s(this,`shadowMat`,void 0),s(this,`front`,void 0),s(this,`back`,void 0),s(this,`dodgeKind`,`sidestep`),s(this,`dodgeDur`,.35),s(this,`flash`,0),this.height=t;let n=t*.6;this.bodyHalf=new J(n/2,t/2,n/2),this.bodyCenter=new J(0,t/2,0),this.front=new X(e.color),this.back=new X(e.color2??e.color).multiplyScalar(.8),this.boardMat=Om(new Ns({color:this.front,side:2,transparent:!0})),this.board=new Gs(Dm(new Rc(n,t)),this.boardMat),this.board.position.y=t/2,this.body.add(this.board),this.shadowMat=Om(new Ns({color:9078400,transparent:!0,opacity:.3,depthWrite:!1})),this.shadow=new Gs(Dm(new cc(n*.6,24)),this.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.005,this.root.add(this.body,this.shadow),this.root.name=`placeholder:${e.name}`}bodyMatrix(){return this.body.updateWorldMatrix(!0,!1),this.body.matrixWorld}bodyBox(e=new So){return this.root.updateMatrixWorld(!0),e.makeEmpty().expandByObject(this.board,!1)}lift(){return this.body.position.y}anchor(e,t=new J){let n=this.root.position;return t.set(n.x,n.y+this.height*fh[e]+this.lift(),n.z)}facing(e){return yh(this.root,this.yaw,e)}intersect(e){return this.root.updateMatrixWorld(!0),this.root.visible?e.intersectObject(this.board,!1):[]}play(e){this.state=e,this.stateT=0,e===`hit`&&(this.flash=1)}flashOnly(){this.flash=1}dodge(e,t){this.dodgeKind=e,this.dodgeDur=Math.max(.1,t),this.play(`dodge`)}knockback(){this.play(`knockback`)}turnTo(e){this.yaw=e}face(e,t=1){let n=e-this.yaw;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;this.yaw+=n*Math.min(1,t)}lookAt(){}setOpacity(e){this.boardMat.opacity=e}setShadow(e,t){this.shadowMat.color.copy(e),this.shadowMat.opacity=t}afterimage(e){let t=Om(new Ns({color:e,transparent:!0,opacity:.5,depthWrite:!1,side:2})),n=new Qa;this.root.updateMatrixWorld(!0);let r=new Gs(this.board.geometry,t);return r.matrixAutoUpdate=!1,r.matrix.copy(this.board.matrixWorld),n.add(r),{group:n,mat:t,dispose:()=>t.dispose()}}update(e,t,n){this.stateT+=t,this.flash=Math.max(0,this.flash-t*4);let r=Math.max(.01,this.state===`summon`?this.summonProgress:1);this.body.scale.set(1,r,1);let i=Math.sin(e*3)*.01*this.height;if(this.state===`dodge`&&this.dodgeKind===`jump`&&(i+=Math.sin(Math.min(1,this.stateT/this.dodgeDur)*Math.PI)*this.height*.6),this.body.position.y=i,this.body.rotation.z=this.state===`dead`||this.state===`knockback`&&this.stateT>.45?Math.PI/2*.9:0,n){n.getWorldPosition(gh),this.root.updateWorldMatrix(!0,!1),this.root.worldToLocal(gh),this.board.rotation.y=Math.atan2(gh.x,gh.z);let e=this.facing(n)===`front`?this.front:this.back;this.boardMat.color.copy(e).lerp(xh,Math.max(this.flash,this.outlineBoost*.5))}}dispose(){this.boardMat.dispose(),this.shadowMat.dispose(),this.board.geometry.dispose(),this.shadow.geometry.dispose()}},xh=new X(`#ffffff`);function Sh(e,t,n,r){e.save(),e.lineCap=`round`,e.lineJoin=`round`,e.strokeStyle=r.color??`#22201C`,e.lineWidth=r.width??8,e.globalAlpha=r.alpha??1,r.glow&&(e.shadowColor=r.color??`#22201C`,e.shadowBlur=18);let i=r.offsetX??0,a=r.offsetY??0,o=n?[...t,n]:t;for(let t of o)if(t.length!==0){e.beginPath(),e.moveTo(i+t[0].x*r.scale,a+t[0].y*r.scale);for(let n=1;n<t.length;n++)e.lineTo(i+t[n].x*r.scale,a+t[n].y*r.scale);t.length===1&&e.lineTo(i+t[0].x*r.scale+.01,a+t[0].y*r.scale),e.stroke()}e.restore()}function Ch(e,t,n){let r=Math.min(window.devicePixelRatio||1,3),i=Math.round(t*r),a=Math.round(n*r);return(e.width!==i||e.height!==a)&&(e.width=i,e.height=a),e.getContext(`2d`).setTransform(r,0,0,r,0,0),{w:t,h:n,dpr:r}}function wh(e,t,n,r,i,a={}){let o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of t)for(let t of e)t.x<o&&(o=t.x),t.y<s&&(s=t.y),t.x>c&&(c=t.x),t.y>l&&(l=t.y);if(!isFinite(o))return;let u=Math.max(1e-6,c-o),d=Math.max(1e-6,l-s),f=i*.8/Math.max(u,d),p=n+(i-u*f)/2-o*f,m=r+(i-d*f)/2-s*f;Sh(e,t,null,{...a,scale:f,offsetX:p,offsetY:m})}var Th=`#FFD24A`,Eh=`#E0603A`,Dh=class{constructor(e){s(this,`ctx`,void 0),s(this,`fx`,[]),this.ctx=e}update(e,t,n,r=e){let i=this.ctx;for(let a=this.fx.length-1;a>=0;a--){let o=this.fx[a];o.t+=o.world?r:e;let s=Math.min(1,o.t/o.dur);i.save(),o.draw(i,s,t,n),i.restore(),s>=1&&(this.fx.splice(a,1),o.onEnd?.())}}clear(){this.fx.length=0}add(e){this.fx.push(e)}ringShatter(e,t,n){let r=Math.random()*Math.PI;this.add({t:0,dur:.4,draw(i,a){i.lineCap=`round`;let o=1-(1-a)*(1-a);for(let s=0;s<14;s++){let c=r+s/14*Math.PI*2,l=c+Math.PI*2/14*.55,u=n+o*(26+s%3*10);i.globalAlpha=1-a,i.beginPath(),i.arc(e,t,u,c+a*.4,l+a*.4),i.strokeStyle=y,i.lineWidth=8*(1-a)+1,i.stroke(),i.strokeStyle=`#FFFFFF`,i.lineWidth=4.5*(1-a)+.5,i.stroke()}}})}ringChip(e,t,n){let r=Math.random()*Math.PI*2;this.add({t:0,dur:.36,draw(i,a){i.lineCap=`round`,i.globalAlpha=(1-a)*.8,i.beginPath(),i.arc(e,t,n,r+.9,r+Math.PI*2-.9),i.strokeStyle=y,i.lineWidth=7,i.stroke(),i.strokeStyle=`#FFFFFF`,i.lineWidth=4,i.stroke();for(let o of[-1,1]){let s=r+o*.45,c=a*28;i.globalAlpha=1-a,i.beginPath(),i.arc(e+Math.cos(s)*c,t+Math.sin(s)*c+a*a*30,n,s-.4,s+.4),i.strokeStyle=Eh,i.lineWidth=5*(1-a)+1,i.stroke()}}})}ringClose(e,t,n){this.add({t:0,dur:.28,draw(r,i){r.globalAlpha=1-i,r.beginPath(),r.arc(e,t,Math.max(2,n*(1-i*.75)),0,Math.PI*2),r.strokeStyle=Eh,r.lineWidth=6+6*i,r.stroke()}})}hit(e,t,n=!1,r=y){let i=n?12:8,a=Math.random()*Math.PI;this.add({t:0,dur:n?.42:.32,draw(o,s){o.strokeStyle=r,o.lineCap=`round`,o.lineWidth=n?5:3.5,o.globalAlpha=1-s;let c=(n?26:16)+s*(n?70:44);for(let r=0;r<i;r++){let l=a+r/i*Math.PI*2,u=(n?22:14)*(1-s*.6);o.beginPath(),o.moveTo(e+Math.cos(l)*c,t+Math.sin(l)*c),o.lineTo(e+Math.cos(l)*(c+u),t+Math.sin(l)*(c+u)),o.stroke()}o.beginPath(),o.arc(e,t,(n?10:6)+s*(n?40:24),0,Math.PI*2),o.lineWidth=n?6*(1-s)+1:4*(1-s)+1,o.stroke()}})}damage(e,t,n,r=!1,i=Eh){let a=(Math.random()-.5)*30;this.add({t:0,dur:r?1.1:.85,draw(o,s){let c=(r?70:46)*(1-(1-s)**2),l=r?1+Math.sin(Math.min(1,s*4)*Math.PI/2)*.35:1;o.globalAlpha=s<.75?1:1-(s-.75)/.25,o.font=`700 ${Math.round((r?44:28)*l)}px 'Zen Maru Gothic', sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.lineWidth=r?8:6,o.lineJoin=`round`,o.strokeStyle=`#FFFFFF`,o.strokeText(String(n),e+a,t-c),o.fillStyle=i,o.fillText(String(n),e+a,t-c)}})}text(e,t,n,r=y,i=1.2,a=22){this.add({t:0,dur:i,draw(i,o){i.globalAlpha=o<.8?1:1-(o-.8)/.2,i.font=`700 ${a}px 'Zen Maru Gothic', sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.lineWidth=6,i.lineJoin=`round`,i.strokeStyle=`#FFFFFF`,i.strokeText(n,e,t-o*10),i.fillStyle=r,i.fillText(n,e,t-o*10)}})}signFly(e,t,n,r,i,a=.55,o={}){let s={to:{...n},divert(e){s.to={...e}}},c=o.arc??0,l=o.shrink??.65;return this.add({t:0,dur:a,world:!0,onEnd:i,draw(n,i){let a=c?i:i<.2?0:(i-.2)/.8,o=c?a*(2-a)*.35+a*.65:a*a,u=t.x+(s.to.x-t.x)*o,d=t.y+(s.to.y-t.y)*o-c*4*o*(1-o),f=1-l*o;n.translate(u,d),n.scale(f,f),n.translate(-t.x,-t.y),n.globalAlpha=.95,Sh(n,e,null,{scale:1,color:`#FFFFFF`,width:16,glow:!0}),Sh(n,e,null,{scale:1,color:r,width:8,glow:!0})}}),s}signScatter(e,t,n=.8,r=!1){let i=[];for(let t of e)for(let e=0;e<t.length;e+=3){let n=Math.random()*Math.PI*2,r=120+Math.random()*220;i.push({x:t[e].x,y:t[e].y,vx:Math.cos(n)*r,vy:Math.sin(n)*r-80})}this.add({t:0,dur:n,world:r,draw(e,n){e.globalAlpha=1-n,e.fillStyle=t;for(let t of i){let r=t.x+t.vx*n,i=t.y+t.vy*n+300*n*n;e.beginPath(),e.arc(r,i,4,0,Math.PI*2),e.fill()}}})}callout(e,t,n,r,i=.7,a=46,o=-.1){this.add({t:0,dur:i,draw(s,c){let l=Math.min(1,c*i/.12),u=l<1?.6+.55*Math.sin(l*Math.PI*.5)*(1+.25*(1-l)):1+Math.sin(c*9)*.015;s.globalAlpha=c<.7?1:1-(c-.7)/.3,s.translate(e,t),s.rotate(o),s.scale(u,u),kh(s,n,0,0,a,r)}})}flash(e=.1,t=.95){this.add({t:0,dur:e,draw(e,n,r,i){e.globalAlpha=t*(1-n),e.fillStyle=`#FFFFFF`,e.fillRect(0,0,r,i)}})}fidelity(e,t,n,i,a,o,s=!1,c=.4){let l=Math.round(n*100),u=n>=.9?62:n<.6?36:48;this.add({t:0,dur:o,draw(n,d){let f=d*o,p=Math.min(1,f/c),m=Math.round(l*(1-(1-p)**3));n.globalAlpha=d>.9?1-(d-.9)/.1:1,n.translate(e,t),n.rotate(-.06);let h=p>=1&&f<c+.12?1+.12*Math.sin((f-c)/.12*Math.PI):1;n.scale(h,h),kh(n,r(`cutin.fidelity`,{pct:m}),0,0,u,i),s&&p>=1&&kh(n,r(`cutin.strokePenalty`),0,u*.78,Math.round(u*.4),`#8A8680`),a!==null&&p>=1&&kh(n,r(a?`cutin.inZone`:`cutin.outZone`),0,-u*.85,Math.round(u*.42),a?i:`#8A8680`)}})}shock(e,t,n,r=y){this.add({t:0,dur:.35+.15*n,draw(i,a){i.globalAlpha=(1-a)*.9,i.strokeStyle=r,i.lineWidth=3+3*n*(1-a),i.beginPath(),i.ellipse(e,t,(18+50*n)*(.3+.7*a)+8,((18+50*n)*(.3+.7*a)+8)*.45,0,0,Math.PI*2),i.stroke()}})}slash(e,t,n,r=90){this.add({t:0,dur:.28,draw(i,a){i.translate(e,t),i.rotate(n);let o=1-(1-a)**2;i.globalAlpha=1-a*a,i.lineCap=`round`;for(let e=0;e<2;e++){let t=r*(.5+.2*e);i.beginPath(),i.arc(0,0,t,-.9+o*.4,-.9+o*.4+1.4*o+.2,!1),i.strokeStyle=y,i.lineWidth=10-3*e,i.stroke(),i.strokeStyle=`#FFFFFF`,i.lineWidth=6-2*e,i.stroke()}}})}dust(e,t,n,r=5){let i=Array.from({length:r},(e,t)=>({dx:-n*(10+t*12+Math.random()*8),dy:-(Math.random()*10),r:6+Math.random()*7,d:.1*t}));this.add({t:0,dur:.55,draw(n,r){for(let a of i){let i=Math.max(0,Math.min(1,(r-a.d)/(1-a.d)));i<=0||(n.globalAlpha=(1-i)*.7,n.fillStyle=`#E9E5DC`,n.strokeStyle=`#B5B1A8`,n.lineWidth=2,n.beginPath(),n.arc(e+a.dx*(.4+.6*i),t+a.dy*i-6*i,a.r*(.6+.8*i),0,Math.PI*2),n.fill(),n.stroke())}}})}gaugeFly(e,t,n,r,i){this.add({t:0,dur:.55,onEnd:i,draw(i,a){let o=.3,s=a<o?0:((a-o)/.7)**2,c=e.x+(t.x-e.x)*s,l=e.y-18*Math.min(1,a/o)+(t.y-e.y+18)*s,u=1-.5*s;i.translate(c,l),i.scale(u,u),kh(i,n,0,0,r,Th)}})}sparkle(e,t,n=6,r=Th){let i=Array.from({length:n},(e,t)=>{let r=-Math.PI/2+(t/n-.5)*Math.PI*1.4+(Math.random()-.5)*.4,i=90+Math.random()*110;return{vx:Math.cos(r)*i,vy:Math.sin(r)*i,r:3+Math.random()*3}});this.add({t:0,dur:.6,draw(n,a){n.globalAlpha=1-a;for(let o of i){let i=e+o.vx*a,s=t+o.vy*a+160*a*a,c=o.r*(1-a*.5);n.fillStyle=`#FFFFFF`,n.beginPath(),n.moveTo(i,s-c*2),n.lineTo(i+c,s),n.lineTo(i,s+c*2),n.lineTo(i-c,s),n.closePath(),n.fill(),n.strokeStyle=r,n.lineWidth=2,n.stroke()}}})}summonPillar(e,t,n,r,i,a=`#FFD24A`){this.add({t:0,dur:2,draw(o,s,c,l){let u=s<.5?s/.5:1-(s-.5)/.5;o.save(),o.translate(e,t),o.rotate(i),o.globalAlpha=Math.max(0,u),o.strokeStyle=a,o.lineWidth=10,o.shadowColor=a,o.shadowBlur=30,o.beginPath(),o.ellipse(0,0,n,r,0,0,Math.PI*2),o.stroke(),o.restore();let d=s<.15?s/.15:s<.7?1:1-(s-.7)/.3,f=o.createLinearGradient(0,t,0,t-l*.6);f.addColorStop(0,Oh(a,.75*d)),f.addColorStop(1,Oh(a,0)),o.fillStyle=f,o.globalAlpha=1,o.beginPath(),o.moveTo(e-n*.75,t),o.lineTo(e+n*.75,t),o.lineTo(e+n*.55,t-l*.6),o.lineTo(e-n*.55,t-l*.6),o.closePath(),o.fill(),o.fillStyle=`#FFFFFF`;for(let r=0;r<10;r++){let i=(s*1.3+r*.1)%1,a=e+Math.sin(r*2.4+s*3)*n*.6,c=t-i*l*.5;o.globalAlpha=(1-i)*d,o.beginPath(),o.arc(a,c,3+r%3,0,Math.PI*2),o.fill()}}})}};function Oh(e,t){let n=parseInt(e.replace(`#`,``),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${Math.max(0,Math.min(1,t))})`}function kh(e,t,n,r,i,a){e.font=`700 ${Math.round(i)}px 'Zen Maru Gothic', sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineJoin=`round`,e.lineWidth=Math.max(3,i*.16),e.strokeStyle=y,e.strokeText(t,n,r),e.fillStyle=a,e.fillText(t,n,r)}function Ah(e,t,n,r,i,a=40){e.save(),e.translate(t,n),e.rotate(r);let o=.8+.2*Math.sin(i*Math.PI*6),s=a*.5*o;e.lineCap=`round`,e.lineJoin=`round`;for(let t=0;t<2;t++){let n=t*s*.55;e.beginPath(),e.moveTo(n+s*.1,-s*.55),e.lineTo(n+s*.7,0),e.lineTo(n+s*.1,s*.55),e.strokeStyle=y,e.lineWidth=9,e.globalAlpha=.9,e.stroke(),e.strokeStyle=`#FFFFFF`,e.lineWidth=4.5,e.stroke()}e.restore()}function jh(e,t,n,r,i,a,o=!1,s=1,c=!1){e.save(),c&&!a&&(e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=`#FFFFFF`,e.globalAlpha=s*.55,e.lineWidth=9,e.shadowColor=`#FFFFFF`,e.shadowBlur=10,e.stroke(),e.shadowBlur=0),e.globalAlpha=s*(o?.55:1),e.lineCap=`round`,e.lineJoin=`round`;let l=(i,a)=>{e.beginPath();for(let o=0;o<4;o++){let s=Math.PI/4+o*Math.PI/2,c=Math.cos(s),l=Math.sin(s),u=-l,d=c;e.moveTo(t+c*r+u*a,n+l*r+d*a),e.lineTo(t+c*(r+i),n+l*(r+i)),e.lineTo(t+c*r-u*a,n+l*r-d*a)}};a?(e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=y,e.lineWidth=10,e.globalAlpha*=.75,e.stroke(),l(15,7),e.fillStyle=y,e.fill(),e.stroke(),e.globalAlpha=s,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=`#FFFFFF`,e.lineWidth=6,e.stroke(),l(12,5),e.fillStyle=`#FFFFFF`,e.fill()):(e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.setLineDash(o?[4,7]:[9,7]),e.strokeStyle=y,e.lineWidth=o?3:4.5,e.globalAlpha*=.35,e.stroke(),e.globalAlpha=s*(o?.55:1),e.strokeStyle=i,e.lineWidth=o?1.6:2.6,e.stroke(),e.setLineDash([]),l(o?7:10,o?3:4.5),e.fillStyle=i,e.fill()),e.restore()}function Mh(e,t,n,r,i){let a=i.reduce?0:i.peak,o=r*(1+(i.scale-1)*a),s=i.wide?6:2+1.5*i.graze;e.save(),e.globalAlpha=i.alpha,a>0&&i.fill>0&&(e.beginPath(),e.arc(t,n,o,0,Math.PI*2),e.fillStyle=`#FFFFFF`,e.globalAlpha=i.alpha*i.fill*a,e.fill(),e.globalAlpha=i.alpha),e.beginPath(),e.arc(t,n,o,0,Math.PI*2),e.strokeStyle=y,e.lineWidth=s+4,e.globalAlpha=i.alpha*.7,e.stroke(),e.globalAlpha=i.alpha*(i.reduce?1:.8+.2*Math.max(a,i.graze)),e.strokeStyle=`#FFFFFF`,e.lineWidth=s,a>0?(e.shadowColor=`#FFFFFF`,e.shadowBlur=22*a):i.graze>0&&!i.reduce&&(e.shadowColor=`#FFFFFF`,e.shadowBlur=6*i.graze),e.stroke(),e.restore()}function Nh(e,t,n,r,i){e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.strokeStyle=y,e.globalAlpha=.45,e.lineWidth=2,e.stroke(),i>0&&(e.globalAlpha=Math.min(1,i),e.strokeStyle=`#FFFFFF`,e.shadowColor=`#FFFFFF`,e.shadowBlur=12,e.lineWidth=2+4*i,e.stroke()),e.restore()}function Ph(e,t,n,r,i,a,o){e.save();let s=Math.sin(o*Math.PI*2*1.4)*4,c=.6+.4*(1-(1-a)**3),l=e.createRadialGradient(n,r+s,4,n,r+s,90*c);l.addColorStop(0,Oh(i,.45*a)),l.addColorStop(1,Oh(i,0)),e.fillStyle=l,e.beginPath(),e.arc(n,r+s,90*c,0,Math.PI*2),e.fill(),e.translate(n,r+s),e.scale(c,c),e.translate(-n,-r),e.globalAlpha=Math.min(1,a*1.5),Sh(e,t,null,{scale:1,color:`#FFFFFF`,width:16,glow:!0}),Sh(e,t,null,{scale:1,color:i,width:8,glow:!0}),e.restore()}function Fh(e,t,n,r,i,a,o){if(a<=0)return;let s=1.2+1.8*a,c=.5+.5*Math.sin(o*Math.PI*2*s),l=(.08+.32*a)*(.45+.55*c);e.save();let u=r*(1.25+.15*c*a),d=e.createRadialGradient(t,n,r*.4,t,n,u);d.addColorStop(0,Oh(i,0)),d.addColorStop(.7,Oh(i,l)),d.addColorStop(1,Oh(i,0)),e.fillStyle=d,e.beginPath(),e.arc(t,n,u,0,Math.PI*2),e.fill(),e.restore()}function Ih(e,t,n,r){if(r<=0)return;e.save();let i=e.createRadialGradient(t/2,n/2,Math.min(t,n)*.3,t/2,n/2,Math.max(t,n)*.75);i.addColorStop(0,`rgba(255,255,255,0)`),i.addColorStop(1,`rgba(255,255,255,${Math.min(1,r)})`),e.fillStyle=i,e.fillRect(0,0,t,n),e.restore()}function Lh(e,t,n,r,i,a,o=1){e.save(),e.fillStyle=r,e.fillRect(0,0,t,n);let s=t/2,c=n*.46;if(i===`lines`||i===`mix`){let r=i===`lines`?56:28;e.fillStyle=`rgba(255,255,255,0.55)`;let l=Math.hypot(t,n),u=Math.min(t,n)*(.22+.5*(1-o));for(let i=0;i<r;i++){let o=i/r*Math.PI*2+Math.sin(i*7.1)*.05+a*.3,d=.012+.014*Math.abs(Math.sin(i*3.3)),f=u+Math.min(t,n)*.1*Math.abs(Math.sin(i*1.7+a*4));e.beginPath(),e.moveTo(s+Math.cos(o-d)*l,c+Math.sin(o-d)*l),e.lineTo(s+Math.cos(o)*f,c+Math.sin(o)*f),e.lineTo(s+Math.cos(o+d)*l,c+Math.sin(o+d)*l),e.closePath(),e.fill()}}if(i===`dots`||i===`mix`){e.fillStyle=`rgba(255,255,255,0.35)`;for(let r=-46;r<n+46;r+=46)for(let n=-46;n<t+46;n+=46){let t=Math.sin(n*.37+r*.11)*10,i=Math.cos(n*.21+r*.29)*10,o=7+5*Math.abs(Math.sin(n*.13+r*.07+a));e.beginPath(),e.arc(n+t,r+i,o,0,Math.PI*2),e.fill()}}e.restore()}function Rh(e,t,n,r,i,a,o,s){if(!(a<=0)){e.save();for(let c=0;c<7;c++){let l=(s*(.9+.25*o)+c/7)%1,u=Math.sin(c*2.1)*r*.32,d=n-l*r*(.9+.5*o),f=(14+10*o)*(1-l)*a;e.globalAlpha=(1-l)*.55*a*(.4+.6*o),e.fillStyle=`#FFFFFF`,e.beginPath(),e.ellipse(t+u,d,f*.5,f*1.6,0,0,Math.PI*2),e.fill(),e.strokeStyle=i,e.lineWidth=3,e.stroke()}e.restore()}}function zh(e,t,n,r,i,a,o,s,c=0,l=0){e.save(),t&&wh(e,t,r-a/2,i-a/2,a,{color:`rgba(255,255,255,0.55)`,width:12});let u=1/0,d=1/0,f=-1/0,p=-1/0;for(let e of n)for(let t of e)t.x<u&&(u=t.x),t.y<d&&(d=t.y),t.x>f&&(f=t.x),t.y>p&&(p=t.y);if(!isFinite(u)){e.restore();return}let m=Math.max(1e-6,f-u),h=Math.max(1e-6,p-d),g=a*.8/Math.max(m,h),_=r-a/2+(a-m*g)/2-u*g,v=i-a/2+(a-h*g)/2-d*g,y=0;for(let e of n)for(let t=1;t<e.length;t++)y+=Math.hypot(e[t].x-e[t-1].x,e[t].y-e[t-1].y);let b=y*Math.max(0,Math.min(1,s)),x=[];for(let e of n){if(b<=0)break;let t=[e[0]];for(let n=1;n<e.length;n++){let r=Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y);if(r<=b)t.push(e[n]),b-=r;else{let i=b/Math.max(1e-6,r);t.push({x:e[n-1].x+(e[n].x-e[n-1].x)*i,y:e[n-1].y+(e[n].y-e[n-1].y)*i,t:e[n].t}),b=0;break}}(t.length>1||e.length===1)&&x.push(t)}let S=c>0?x.map(e=>e.map((e,t)=>({...e,x:e.x+Math.sin(l*40+t*1.7)*c*.006,y:e.y+Math.cos(l*37+t*2.3)*c*.006}))):x;Sh(e,S,null,{scale:g,color:`#FFFFFF`,width:16,glow:!0,offsetX:_,offsetY:v}),Sh(e,S,null,{scale:g,color:o,width:9,glow:!0,offsetX:_,offsetY:v});let C=x[x.length-1];if(C&&s<1){let t=C[C.length-1];e.globalAlpha=.9,e.fillStyle=`#FFFFFF`,e.shadowColor=o,e.shadowBlur=20,e.beginPath(),e.arc(_+t.x*g,v+t.y*g,9,0,Math.PI*2),e.fill()}e.restore()}function Bh(e,t,n){if(!(t.length<2)){e.save(),e.globalAlpha=n*.5,e.strokeStyle=`#B5B1A8`,e.lineWidth=7,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let n=1;n<t.length;n++)e.lineTo(t[n].x,t[n].y);e.stroke(),e.restore()}}var Vh=6.8,Hh=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Uh=`
uniform vec3 uPaper;
uniform vec3 uLine;
uniform float uFogNear;
uniform float uFogFar;
uniform vec4 uWave; // v0.4.3 着弾の衝撃波: x, z, 経過(秒), 有効(1) // i18n-ignore(シェーダーのコメント)
varying vec3 vWorld;
void main() {
  vec2 p = vWorld.xz;
  if (uWave.w > 0.5) {
    // 床の交線が一瞬波打つ: 半径 0 → WAVE_R へ WAVE_T 秒で広がる波頭で、交線を放射方向にずらす // i18n-ignore(シェーダーのコメント)
    vec2 d = p - uWave.xy;
    float r = length(d);
    float k = clamp(uWave.z / ${.4.toFixed(3)}, 0.0, 1.0);
    float front = ${2 .toFixed(3)} * k;
    float amp = 0.22 * (1.0 - k) * exp(-pow((r - front) / 0.28, 2.0));
    p += (r > 1e-4 ? d / r : vec2(0.0)) * amp;
  }
  vec2 f = abs(fract(p) - 0.5);
  vec2 fw = fwidth(p) * 1.2;
  float half_w = 0.012;
  float arm = 0.11;
  // 交線(+): 横棒と縦棒 // i18n-ignore(シェーダーのコメント)
  float h = (1.0 - smoothstep(half_w, half_w + fw.y, f.y)) * (1.0 - smoothstep(arm, arm + fw.x, f.x));
  float v = (1.0 - smoothstep(half_w, half_w + fw.x, f.x)) * (1.0 - smoothstep(arm, arm + fw.y, f.y));
  float mark = max(h, v);
  float dist = distance(vWorld, cameraPosition);
  float fog = 1.0 - smoothstep(uFogNear, uFogFar, dist);
  vec3 col = mix(uPaper, uLine, mark * fog);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;function Wh(e=1.3){let t=new Qa;t.name=`field`;let n=new Gs(new Rc(160,160),new Zc({vertexShader:Hh,fragmentShader:Uh,uniforms:{uPaper:{value:new X(`#FFFFFF`)},uLine:{value:new X(`#D9D5CC`)},uFogNear:{value:10},uFogFar:{value:24},uWave:{value:new ya(0,0,0,0)}}}));n.rotation.x=-Math.PI/2,n.position.y=-.002,t.add(n);let r=new Ns({color:`#E3E0D8`}),i=new Gs(new zc(6.76,Vh,160),r);i.rotation.x=-Math.PI/2,i.position.y=5e-4,t.add(i);for(let n of[e,-e]){let e=new Gs(new cc(.62,48),new Ns({color:`#F4F2ED`}));e.rotation.x=-Math.PI/2,e.position.set(n,8e-4,0),t.add(e);let r=new Gs(new zc(.59,.62,48),new Ns({color:`#DAD7D0`}));r.rotation.x=-Math.PI/2,r.position.set(n,.001,0),t.add(r)}let a=new X(`#FFFFFF`),o=new X(`#B9B5AD`),s=new X(`#D9D5CC`),c=new X(`#A39F97`);return t.setDim=e=>{let t=n.material.uniforms;t.uPaper.value.copy(a).lerp(o,e),t.uLine.value.copy(s).lerp(c,e),r.color.copy(new X(`#E3E0D8`)).lerp(new X(`#A8A49C`),e)},t.shockwave=(e,t)=>{n.material.uniforms.uWave.value.set(e,t,0,1)},t.updateWave=e=>{let t=n.material.uniforms.uWave.value;t.w<.5||(t.z+=e,t.z>=.4&&(t.w=0))},t.setFogScale=e=>{let t=n.material.uniforms;t.uFogNear.value=10*e,t.uFogFar.value=24*e},t}var Gh=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Kh=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uDash; // 1 で破線 // i18n-ignore(シェーダーのコメント)
uniform float uTime;
varying vec2 vUv;
void main() {
  float a = atan(vUv.y - 0.5, vUv.x - 0.5);
  float seg = fract(a / 6.2831853 * 30.0 + uTime * 0.12);
  if (uDash > 0.5 && seg < 0.42) discard;
  gl_FragColor = vec4(uColor, uAlpha);
  #include <colorspace_fragment>
}
`;function qh(e,t,n,r){let i=new Gs(new zc(1-e,1,128),new Zc({vertexShader:Gh,fragmentShader:Kh,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new X(t)},uAlpha:{value:n},uDash:{value:+!!r},uTime:{value:0}}}));return i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-3,i}function Jh(e,t,n){let i=H(`div`,{class:`screen scroll`}),a=H(`canvas`,{style:`width:100%; height:300px; display:block; border-radius:16px; background:#fff`}),o=H(`canvas`,{style:`width:120px; height:120px; display:block`}),s=new jm(a,{alpha:!1,background:`#FFFFFF`,fov:40});s.scene.add(Wh(.9));let c=mh(t,.85*Ke(t));c.root.position.set(0,0,.9),s.scene.add(c.root);let l=t.giant?2.4:t.size===`L`?1.5:1,u=t.giant?1.1:t.size===`L`?.7:.4;s.camera.position.set(0,.4+.7*l,.9+2.2*l),s.camera.lookAt(0,u,.9),W.monsterJson=JSON.stringify(Xh(t),null,1),W.features=t.features??null;let d=!1,f=H(`button`,{class:`btn ghost`},r(`card.delete`));f.addEventListener(`click`,()=>{d?(wn(t.id),n({name:`home`})):(d=!0,f.textContent=r(`card.deleteConfirm`),f.style.borderColor=`#E0603A`,f.style.color=`#E0603A`,setTimeout(()=>{d=!1,f.textContent=r(`card.delete`),f.style.borderColor=``,f.style.color=``},3e3))});let p=H(`div`,{class:`row`,style:`align-items:center; gap:14px`});t.sign?p.append(o,H(`div`,{},H(`b`,{},r(`card.learnedSign`)),H(`p`,{class:`small sub`},r(`card.signInfo`,{n:t.sign.length,c:Ft(t.sign).toFixed(2)})),H(`button`,{class:`btn sm`,onClick:()=>n({name:`sign`,id:t.id})},r(`card.redraw`)))):p.append(H(`div`,{class:`grow`},H(`b`,{},r(`card.noSign`)),H(`p`,{class:`small sub`},r(`card.noSignHint`))),H(`button`,{class:`btn`,onClick:()=>n({name:`sign`,id:t.id})},r(`common.learnSign`))),i.append(H(`div`,{class:`pad col`,style:`gap:14px`},H(`div`,{class:`row`},H(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`home`})},r(`common.toHome`)),H(`span`,{class:`grow`}),H(`span`,{class:`chip`},r(`card.chip`))),a,H(`div`,{class:`card`},H(`div`,{class:`row`,style:`align-items:flex-start`},H(`div`,{class:`grow`},H(`h1`,{},t.name),H(`p`,{class:`sub`},r(`card.summary`,{skeleton:Ve[t.skeleton],size:He[t.size],eyes:t.eyes,crest:t.crest?r(`card.crest`):``,giant:t.giant?r(`card.giant`):``})),Je(t.stats)),t.thumb?H(`img`,{class:`thumb`,src:t.thumb,alt:r(`common.circleAlt`)}):null),H(`p`,{class:`small sub`,style:`margin-top:8px`},r(`card.detail`,{parts:t.parts.length?t.parts.map(e=>Yh[e.kind]).join(r(`card.partSep`)):r(`card.none`),marks:t.marks.length?r(t.marks[0].kind===`spots`?`mark.spots`:`mark.stripes`):r(`card.none`),colors:`${t.color}${t.color2?` / ${t.color2}`:``}`})),t.realCm===void 0?null:H(`p`,{class:`small sub`},r(`card.realSize`,{cm:Math.round(t.realCm),giant:t.giant?r(`card.realGiant`):``})),t.noCircle?H(`p`,{class:`small sub`},r(`card.noCircle`)):null,t.features?H(`p`,{class:`small sub`},r(`card.ink`,{pct:(t.features.inkRatio*100).toFixed(1),size:He[t.size]})):null),H(`div`,{class:`card flat`},p),H(`button`,{class:`btn primary`,onClick:()=>n({name:`battle`,id:t.id})},r(`common.toBattle`)),H(`div`,{class:`row`},H(`button`,{class:`btn ghost grow`,onClick:()=>n({name:`summon`,mode:`camera`})},r(`card.summonAgain`)),f),H(`p`,{class:`small sub`},r(`card.seed`,{seed:t.seed.toString(16),stars:qe(t.stats.hp)})))),e.append(i);let m=0,h=performance.now(),g=e=>{m=requestAnimationFrame(g);let t=Math.min(.05,(e-h)/1e3);h=e,s.fit(a),c.root.rotation.y=Math.sin(e/1800)*.6,c.update(e/1e3,t,s.camera),s.render()};if(m=requestAnimationFrame(g),t.sign){let{w:e}=Ch(o,120,120),n=o.getContext(`2d`);n.clearRect(0,0,e,e),wh(n,t.sign,0,0,e,{color:t.color,width:6})}return{unmount(){cancelAnimationFrame(m),c.dispose(),s.dispose(),Ye(i),i.remove()}}}var Yh={horn:r(`part.horn`),spike:r(`part.spike`),wing:r(`part.wing`),tail:r(`part.tail`),antenna:r(`part.antenna`),fin:r(`part.fin`),ornament:r(`part.ornament`)};function Xh(e){let{thumb:t,features:n,...r}=e;return r}function Zh(e,t,n){let i=H(`div`,{class:`screen`,style:`background:#111`}),a=H(`video`,{class:`layer`,playsinline:!0,muted:!0,autoplay:!0}),o=H(`canvas`,{class:`layer`,style:`display:none`}),s=H(`canvas`,{class:`layer`}),c=H(`canvas`,{class:`layer`}),l=H(`div`,{class:`hint`},``),u=H(`input`,{type:`file`,accept:`image/*`}),d=H(`div`,{class:`hud`,style:`top: calc(var(--sat) + 12px); padding: 0 14px; display:flex; justify-content:space-between`},H(`button`,{class:`btn sm ghost`,style:`background:#fff`,onClick:()=>n({name:`home`})},r(`common.toHome`)),H(`label`,{class:`btn sm file-label`,style:`background:#fff`},r(`summon.fromImage`),u)),f=H(`div`,{style:`position:absolute; inset:0; display:none; align-items:center; justify-content:center; background:#111; z-index:5`},H(`button`,{class:`btn primary`,style:`font-size:18px; padding:16px 28px`},r(`summon.start`))),p=H(`div`,{class:`sheet`});i.append(a,o,s,c,l,d,p,f),e.append(i);let m=new jm(s,{alpha:!0,fov:60}),h=c.getContext(`2d`),g=new Dh(h),_=new Ot,v=new pm,y=null,b=null,x=`init`,S=null,C=null,w=null,T=null,E=null,D=null,O=0,k=!1,A=!1,j=null,ee=null,M=!1,te=0,ne=performance.now(),re=``,ie=Math.PI/3,ae=e=>{l.textContent=e};window.__mbSummon={get pose(){return T},get built(){return S},get state(){return x},get scene(){return m.scene},get camera(){return m.camera}};async function N(){try{a.style.display=`block`,o.style.display=`none`,ae(r(`summon.cameraStarting`)),y=await up.open(a),b=new sm(y,{lockSeconds:1.5,timeoutSeconds:10},()=>v.up?.z??null),window.__mbTracker=b,x=`searching`,ae(r(`summon.drawCircle`)),wt(`camera ${y.width}x${y.height}`)}catch(e){wt(`camera error: ${e.message}`),ae(r(`summon.noCamera`)),x=`init`}}function oe(){if(typeof window.DeviceMotionEvent?.requestPermission!=`function`)return!1;let e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function se(){v.requestPermission().then(e=>{e||wt(`gravity sensor unavailable: fallback to v0.1 pose estimate`)}),N()}f.querySelector(`button`)?.addEventListener(`click`,()=>{f.style.display=`none`,se()});async function P(e){try{y?.dispose(),y=null,b=null,ce(),a.style.display=`none`,o.style.display=`block`,re=``;let t=await dp.fromFile(e);y=t,b=new sm(t,{lockSeconds:.25,timeoutSeconds:2.5}),window.__mbTracker=b,A=!1,x=`searching`,ae(r(`summon.searching`)),wt(`image ${t.width}x${t.height}`)}catch(e){ae(e.message)}}u.addEventListener(`change`,()=>{let e=u.files?.[0];e&&P(e),u.value=``});function ce(){S&&(m.scene.remove(S.root),S.dispose(),S=null,C=null),w=null,T=null,E=null,D=null,ee=null,m.renderer.clippingPlanes=[],p.classList.remove(`in`),Ye(p),k=!1,g.clear()}function F(e,t,n={}){let r=n.object?{...ze(n.object),debug:null}:n.reading?.features?{...Re(n.reading.features,n.reading.quant),debug:null}:V(e.image);w=r.monster,w.thumb=e.canvas.toDataURL(`image/jpeg`,.72),n.realSize&&(w.realCm=n.realSize.cm,n.realSize.level>=3&&(w.giant=!0)),n.noCircle&&(w.noCircle=!0),xn(w),W.features=r.features,W.quant=r.debug?r.debug.quant:null,W.quantVector=r.debug?r.debug.quantVector:r.quant,W.extra.objectRead=n.object?`明暗=${n.object.polarity} 彩度=${n.object.sat} 色相=${n.object.hue} 列=[${r.quant.join(`,`)}]`:`-`,W.monsterJson=JSON.stringify(Xh(w),null,1),wt(`summon seed=${w.seed.toString(16)} ${w.skeleton} ${w.color} ${w.size}${w.giant?` giant`:``}`);let a=1.2*Ke(w);S=mh(w,a),C=S,m.scene.add(S.root);let o=i.getBoundingClientRect();T=lm(t,m.camera,o.width,o.height,0,v.up),D=new J(0,0,1).applyQuaternion(T.quaternion),E=T,le();let s=new J(0,1,0).applyQuaternion(T.quaternion);ee=new ls().setFromNormalAndCoplanarPoint(s,T.position),m.renderer.clippingPlanes=[ee],C.play(`summon`),C.summonProgress=0,O=performance.now(),x=`summoning`,ae(``),g.summonPillar(t.cx,t.cy,t.a,t.b,t.angle)}function le(){if(S&&T&&(S.root.position.copy(T.position),S.root.quaternion.copy(T.quaternion),ee)){let e=new J(0,1,0).applyQuaternion(T.quaternion);ee.setFromNormalAndCoplanarPoint(e,T.position)}}function ue(){if(!w)return;let e=w;Ye(p),p.append(H(`div`,{class:`row`,style:`align-items:flex-start`},e.thumb?H(`img`,{class:`thumb`,src:e.thumb,alt:r(`common.circleAlt`)}):null,H(`div`,{class:`grow`},H(`h2`,{},e.name),H(`p`,{class:`sub small`},r(`summon.summary`,{skeleton:Ve[e.skeleton],size:He[e.size],eyes:e.eyes})),Je(e.stats))),H(`div`,{style:`height:12px`}),H(`button`,{class:`btn primary`,style:`width:100%`,onClick:()=>n({name:`battle`,id:e.id})},r(`common.toBattle`)),H(`div`,{style:`height:8px`}),H(`div`,{class:`row`},H(`button`,{class:`btn grow`,onClick:()=>n({name:`sign`,id:e.id})},r(`common.learnSign`)),H(`button`,{class:`btn ghost`,onClick:de},r(`common.again`)))),requestAnimationFrame(()=>p.classList.add(`in`))}function de(){ce(),b?.reset(),A=!1,x=y?`searching`:`init`,ae(y?y.kind===`camera`?r(`summon.drawCircle`):r(`summon.searching`):``)}c.addEventListener(`pointerdown`,e=>{if(x!==`searching`||!k||!y)return;let t=i.getBoundingClientRect(),n=Math.min(t.width,t.height)*.2,r=fp(y.width,y.height,t.width,t.height),a=(e.clientX-t.left-r.ox)/r.s,o=(e.clientY-t.top-r.oy)/r.s,s=Math.min(y.width,y.height)*.2,c=Up(y.element,a,o,s);A=!0,wt(`fallback: tap summon`),F(c,{cx:e.clientX-t.left,cy:e.clientY-t.top,a:n,b:n*.6,angle:0},{noCircle:!0})});let fe=r(`summon.tooClose`);function pe(e){switch(e.type){case`candidate`:j={screen:e.screen,contour:e.contour,stable:e.stable,at:performance.now()},x===`searching`&&ae(e.stable>.25?r(`summon.hold`):r(`summon.seen`));break;case`confirming`:x===`searching`&&ae(r(`summon.hold`)),W.extra.confirm=`最頻 ${e.streak}/${e.needed} seed=${e.seed.toString(16)} 直近7=[${e.history.map(e=>e.toString(16)).join(`,`)}]`;break;case`lock`:W.extra.confirm=e.confirmedByTimeout?`timeout fallback`:`matched`,x===`searching`&&F(e.crop,e.screen,{realSize:e.realSize,object:e.object,reading:e.reading});break;case`track`:if(T&&D&&(x===`summoning`||x===`done`)){let t=i.getBoundingClientRect();E=lm(e.screen,m.camera,t.width,t.height,e.spin,v.up,D),W.extra.spin=`${(e.spin*180/Math.PI).toFixed(0)}° (${e.spinScore.toFixed(2)})`}break;case`lost`:wt(`circle lost: keep last pose`);break;case`dim`:x===`searching`&&ae(r(`summon.dark`)),wt(`dim: brightness hint shown`);break;case`tooClose`:x===`searching`&&ae(fe);break;case`fakeRing`:wt(`fake ring on crop verify: did not lock`);break;case`timeout`:x===`searching`&&(k=!0,ae(r(`summon.notFound`)))}}let me=e=>{if(M)return;te=requestAnimationFrame(me);let t=Math.min(.05,(e-ne)/1e3);ne=e,_.tick();let n=i.getBoundingClientRect(),r=Math.round(n.width),a=Math.round(n.height);if(m.resize(r,a),Ch(c,r,a),h.clearRect(0,0,r,a),y?.kind===`image`){let e=`${r}x${a}`;re!==e&&(Ch(o,r,a),pp(o.getContext(`2d`),y,r,a),re=e)}if(b&&y&&!A&&x!==`init`){b.setView(r,a);for(let t of b.update(e))pe(t)}if(x===`searching`&&j&&e-j.at<450){let e=j.screen,t=b?.opt.lockSeconds??1.5,n=Math.min(1,j.stable/t);h.save(),h.translate(e.cx,e.cy),h.rotate(e.angle),h.strokeStyle=`rgba(255,255,255,${.45+.5*n})`,h.lineWidth=3+3*n,h.shadowColor=`rgba(255,255,255,0.9)`,h.shadowBlur=8+16*n,h.beginPath(),h.ellipse(0,0,e.a,e.b,0,0,Math.PI*2),h.stroke(),h.strokeStyle=`rgba(255,210,74,0.95)`,h.lineWidth=5,h.beginPath(),h.ellipse(0,0,e.a+8,e.b+8,0,-Math.PI/2,-Math.PI/2+Math.PI*2*n),h.stroke(),h.restore()}if(x===`summoning`&&C){let t=Math.min(1,(e-O)/2e3);C.summonProgress=t,t>=1&&(x=`done`,m.renderer.clippingPlanes=[],ee=null,C.play(`idle`),ue())}if(S&&w?.giant&&(x===`summoning`||x===`done`)){let e=Qh(S,m,r,a);!e&&l.textContent!==fe?ae(fe):e&&l.textContent===fe&&ae(``)}if(T&&E&&E!==T&&(T=um(T,E,1-Math.exp(-t*7)),le()),T&&C&&(x===`summoning`||x===`done`)&&(C.lookAt(new J(0,0,0)),x===`done`&&C.state!==`turn`)){let e=fm(T,C.yaw);e&&Math.abs(e.deviation)>ie&&C.turnTo(e.yawToCamera)}if(C?.update(e/1e3,t,m.camera),m.render(),g.update(t,r,a),b?.last){let e=b.last;if(W.detect={ellipse:e.best?b.toScreen(e.best.ellipse):null,err:e.best?.err??0,coverage:e.best?.coverage??0,circularity:e.best?.circularity??0,candidates:e.count,ms:e.ms,w:e.w,h:e.h,locked:!!b.locked,stable:b.stableSeconds,brightness:e.brightness,usedEdge:e.usedEdge,rejected:e.rejected,ringCoverage:e.best?.ringCoverage??null,ringWidthRatio:e.best?.ringWidthRatio??null,ringContrastFrac:e.best?.ringContrastFrac??null,realSize:e.realSize,path:e.path,objectRan:e.objectRan,object:e.best?.object?{polarity:e.best.object.polarity,rayCoverage:e.best.object.rayCoverage,edgeSupport:e.best.object.edgeSupport,inOut:e.best.object.inOut}:null,objectRejected:e.objectRejected,objectQuant:b.lastObjectRead?b.lastObjectRead.quant:null},W.open&&e.best){let t=b.contourToScreen(e.best.contour);h.save(),h.strokeStyle=`#E0603A`,h.lineWidth=2,h.beginPath(),t.forEach((e,t)=>t?h.lineTo(e.x,e.y):h.moveTo(e.x,e.y)),h.closePath(),h.stroke(),h.restore()}}W.extra.state=x;let s=v.up;if(W.extra.gravity=s?`up=(${s.x.toFixed(2)},${s.y.toFixed(2)},${s.z.toFixed(2)})`:`fallback(v0.1の推定)`,C&&(W.extra.yaw=`${(C.yaw*180/Math.PI).toFixed(0)}° ${C.state}`),T){let e=new J(0,0,1).applyQuaternion(T.quaternion),t=m.project(T.position),n=m.project(T.position.clone().add(e.multiplyScalar(.3)));W.extra.fwdDeg=(Math.atan2(n.y-t.y,n.x-t.x)*180/Math.PI).toFixed(0)}};if(t===`camera`)oe()?f.style.display=`flex`:se();else{let e=jn();e?P(e):ae(r(`summon.pickImage`))}return te=requestAnimationFrame(me),{unmount(){M=!0,cancelAnimationFrame(te),ce(),y?.dispose(),v.dispose(),m.dispose(),Ye(i),i.remove()}}}function Qh(e,t,n,r){let i=new So().setFromObject(e.root);if(i.isEmpty())return!0;let a=i.getBoundingSphere(new qo),o=a.center.length();if(o<.05)return!0;let s=r/2/Math.tan(ea.degToRad(t.camera.fov)/2),c=a.radius/o*s,l=t.project(a.center),u=Math.min(n,r)*.04;return l.x-c>=-u&&l.x+c<=n+u&&l.y-c>=-u&&l.y+c<=r+u}function $h(e,t){let n=[],r=null,i=0,a=0,o=!0,s=null,c=t=>{let n=e.getBoundingClientRect(),r=n.width;return{x:(t.clientX-n.left)/r,y:(t.clientY-n.top)/r,t:Math.round(performance.now()-i)}},l=()=>{a&&(clearTimeout(a),a=0)},u=a=>{o&&s===null&&(n.length>=t.maxStrokes||(s=a.pointerId,l(),n.length===0&&(i=performance.now()),r=[c(a)],e.setPointerCapture?.(a.pointerId),t.onChange?.(n,r),a.preventDefault()))},d=e=>{if(!r||e.pointerId!==s)return;let i=c(e),a=r[r.length-1];Math.hypot(i.x-a.x,i.y-a.y)<.002||(r.push(i),t.onChange?.(n,r),e.preventDefault())},f=e=>{r&&e.pointerId===s&&(s=null,r.length===1&&r.push({...r[0],x:r[0].x+.001,t:r[0].t+1}),n.push(r),r=null,t.onChange?.(n,null),l(),n.length>=t.maxStrokes?t.onDone?.(n):a=window.setTimeout(()=>{a=0,n.length>0&&t.onDone?.(n)},t.idleMs))};return e.addEventListener(`pointerdown`,u),e.addEventListener(`pointermove`,d),e.addEventListener(`pointerup`,f),e.addEventListener(`pointercancel`,f),e.style.touchAction=`none`,{get strokes(){return n},reset(){l(),n=[],r=null,s=null,t.onChange?.(n,null)},destroy(){l(),e.removeEventListener(`pointerdown`,u),e.removeEventListener(`pointermove`,d),e.removeEventListener(`pointerup`,f),e.removeEventListener(`pointercancel`,f)},setEnabled(e){o=e}}}function eg(e,t,n){let i=H(`div`,{class:`screen scroll`}),a=Math.min(window.innerWidth-40,420),o=H(`canvas`,{style:`width:${a}px; height:${a}px; display:block; border:3px solid ${y}; border-radius:20px; background:#fff; touch-action:none`}),s=H(`p`,{class:`sub small`},r(`sign.info`)),c=H(`button`,{class:`btn primary`,disabled:!0},r(`sign.decide`)),l=H(`button`,{class:`btn`},r(`sign.redo`)),u=null,d=o.getContext(`2d`),f=(e,n)=>{let{w:i}=Ch(o,a,a);d.clearRect(0,0,i,i),Sh(d,e,n,{scale:i,color:y,width:10}),Sh(d,e,n,{scale:i,color:t.color,width:6});let c=e.length+ +!!n;u||(s.textContent=c?r(`sign.progress`,{n:c}):r(`sign.info`))},p=$h(o,{maxStrokes:6,idleMs:800,onChange:f,onDone:e=>{u=e,p.setEnabled(!1),c.disabled=!1,s.textContent=r(`sign.done`,{n:e.length,c:Ft(e).toFixed(2)})}});return l.addEventListener(`click`,()=>{u=null,p.reset(),p.setEnabled(!0),c.disabled=!0,f([],null)}),c.addEventListener(`click`,()=>{u&&(t.sign=u,Sn(t),n({name:`card`,id:t.id}))}),i.append(H(`div`,{class:`pad col`,style:`gap:14px; align-items:center`},H(`div`,{class:`row`,style:`align-self:stretch`},H(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`card`,id:t.id})},r(`common.toCard`)),H(`span`,{class:`grow`})),H(`div`,{style:`align-self:stretch`},H(`h1`,{},r(`sign.title`,{name:t.name})),s),o,H(`div`,{class:`row`,style:`width:${a}px`},l,H(`span`,{class:`grow`}),c),H(`p`,{class:`small sub`,style:`align-self:stretch`},r(`sign.explain`)))),e.append(i),f([],null),{unmount(){p.destroy(),Ye(i),i.remove()}}}var tg=e=>({inkRatio:.07,hue:200,sat:.6,lum:.55,roughness:.1,closedShapes:2,sharpCorners:0,circles:0,hasText:!1,components:3,...e});function ng(e=40){let t=[];for(let n=0;n<=e;n++){let r=n/e*Math.PI*2-Math.PI/2;t.push({x:.5+.3*Math.cos(r),y:.5+.3*Math.sin(r),t:n*20})}return[t]}function rg(){return[[[.2,.3],[.4,.7],[.6,.3],[.8,.7]].map(([e,t],n)=>({x:e,y:t,t:n*120}))]}function ig(){return[[{x:.25,y:.25,t:0},{x:.75,y:.75,t:200}],[{x:.75,y:.25,t:0},{x:.25,y:.75,t:200}]]}var ag=[{key:`tank`,label:r(`npc.tank.label`),desc:r(`npc.tank.desc`),monster:Ie(2047987201,tg({hue:20,sat:.7,lum:.6,inkRatio:.16,closedShapes:1,roughness:.05}),{stats:{hp:5,spd:2,atk:3,mag:2},skeleton:`quadruped`,name:r(`npc.tank.name`),id:`npc-tank`,createdAt:0}),sign:ng(),castSeconds:2.4},{key:`speed`,label:r(`npc.speed.label`),desc:r(`npc.speed.desc`),monster:Ie(1592593410,tg({hue:150,sat:.55,lum:.5,inkRatio:.035,closedShapes:2,sharpCorners:4,roughness:.35}),{stats:{hp:2,spd:5,atk:2,mag:3},skeleton:`floating`,name:r(`npc.speed.name`),id:`npc-speed`,createdAt:0}),sign:rg(),castSeconds:1.2},{key:`power`,label:r(`npc.power.label`),desc:r(`npc.power.desc`),monster:Ie(2809841923,tg({hue:350,sat:.65,lum:.5,inkRatio:.09,closedShapes:2,sharpCorners:5,roughness:.15}),{stats:{hp:3,spd:2,atk:5,mag:2},skeleton:`biped`,name:r(`npc.power.name`),id:`npc-power`,createdAt:0}),sign:ig(),castSeconds:1.8}];function og(e,t){return Math.sqrt(e*e+t*t)}var sg=new Float64Array(1),cg=new Uint32Array(sg.buffer);function lg(e){return sg[0]=e,[cg[0],cg[1]]}var ug=class{constructor(){s(this,`h`,2166136261)}u32(e){for(let t=0;t<4;t++)this.h^=e>>>t*8&255,this.h=Math.imul(this.h,16777619)>>>0;return this}f64(e){let[t,n]=lg(e);return this.u32(t).u32(n)}int(e){return this.f64(e)}bool(e){return this.u32(+!!e)}str(e){for(let t=0;t<e.length;t++)this.u32(e.charCodeAt(t));return this.u32(4294967295)}hex(){return(this.h>>>0).toString(16).padStart(8,`0`)}},Q={HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5},dg=Object.freeze({...Q});function fg(e){let t=new ug;for(let n of Object.keys(e).sort())t.str(n).f64(e[n]);return t.hex()}function pg(e){return Object.keys(dg).some(t=>e[t]!==dg[t])}function mg(e,t=Q){return t.HP_BASE+e.hp*t.HP_PER}function hg(e,t=Q){return t.INTERVAL_NUM/(.6+e.spd*.2)}function gg(e,t=Q){return t.ATK_BASE+e.atk*t.ATK_PER}function _g(e,t=Q){return t.GAUGE_HIT+e.spd*t.GAUGE_HIT_PER}function vg(e,t=Q){return t.ZONE_BASE+e.mag*t.ZONE_PER}function yg(e,t=Q){return t.SPEED_BASE+e.spd*t.SPEED_PER}function bg(e,t=Q){return t.NPC_DODGE_BASE+e.spd*t.NPC_DODGE_PER}function xg(e,t=Q){return Math.max(.3,t.TELEGRAPH_BASE-e.spd*t.TELEGRAPH_PER)}function Sg(e,t,n,r=!0,i=Q){return i.SIGN_K*t*n*n*(.7+e.mag*.15)*(r?1:i.ZONE_OUT_MULT)}function Cg(e,t){let n=.8+t.spd*.1;switch(e){case`quadruped`:return{kind:`jump`,dur:Math.max(.3,.5-.03*t.spd),du:0,landAt:1,landBeyond:1*n,attackBoost:1,lateral:0};case`multileg`:return{kind:`burrow`,dur:Math.max(.4,.65-.03*t.spd),du:.5*n,landAt:1,landBeyond:0,attackBoost:1,lateral:0};case`serpent`:return{kind:`coil`,dur:.45,du:-1.5*n,landAt:.5,landBeyond:0,attackBoost:.75-.1*t.spd,lateral:0};case`floating`:return{kind:`blink`,dur:Math.max(.18,.36-.03*t.spd),du:-(1+.1*t.mag)*n,landAt:.5,landBeyond:0,attackBoost:1,lateral:0};default:return{kind:`sidestep`,dur:Math.max(.25,.4-.02*t.spd),du:0,landAt:1,landBeyond:0,attackBoost:1,lateral:1.8*n}}}function wg(e,t,n,r){return e<-n?`early`:e<=1e-9?e>=-t?`perfect`:`graze`:e<=t&&r?`perfect`:e<=n?`graze`:`late`}var Tg=1/120,Eg=class{constructor(e,t,n){if(s(this,`fighters`,void 0),s(this,`projectiles`,[]),s(this,`tick`,0),s(this,`time`,0),s(this,`ended`,!1),s(this,`winner`,null),s(this,`endedBy`,null),s(this,`rng`,void 0),s(this,`B`,void 0),s(this,`seed`,void 0),s(this,`startDistance`,void 0),s(this,`inputOffset`,void 0),s(this,`controllers`,void 0),s(this,`inputLog`,[]),s(this,`checkpoints`,[]),s(this,`deferred`,[]),s(this,`queued`,[]),s(this,`stepEv`,null),s(this,`seq`,0),!n||typeof n.seed!=`number`||!Number.isFinite(n.seed))throw Error(`BattleSim: seed は必須`);this.seed=n.seed>>>0,this.rng=new l(this.seed),this.B={...n.balance??Q},this.inputOffset=n.inputOffset??0,this.controllers=n.controllers??[null,null];let r=n.startDistance??2.6;this.startDistance=r,this.fighters=[Og(e,{x:-r/2,z:0},this.B),Og(t,{x:r/2,z:0},this.B)]}get nextStepEndMs(){return(this.tick+1)*1e3/120}input(e){let t=[],n=this.apply(e,t);return this.stepEv&&this.stepEv.push(...t),{result:n,events:t}}queue(e){this.queued.push({...e,seq:this.seq++})}apply(e,t){let n=`rejected`;if(!this.ended){if(e.kind===`tap`)n=this.tap(e.side,t,e.ms/1e3);else if(e.kind===`cast-start`)n=this.startCast(e.side,t)||`rejected`;else if(e.kind===`cast-cancel`)n=this.cancelCast(e.side)?`cancelled`:`rejected`;else if(e.kind===`cast-finish`){let r=t.length;this.finishCast(e.side,e.value??0,t),n=t.slice(r).some(e=>e.type===`sign-fire`)?`fired`:`rejected`}}let r={ms:e.ms,side:e.side,kind:e.kind,tick:this.tick};return e.value!==void 0&&(r.value=e.value),this.inputLog.push(r),t.push({type:`input`,side:e.side,kind:e.kind,result:n}),n}step(){let e=[];if(this.ended)return e;this.stepEv=e;for(let e of[0,1])this.controllers[e]?.beforeStep?.(this,e);this.stepEv=null;let t=this.nextStepEndMs;if(this.queued.length){let n=this.queued.filter(e=>e.ms<=t+1e-9).sort((e,t)=>e.ms-t.ms||e.seq-t.seq);if(n.length){this.queued=this.queued.filter(e=>e.ms>t+1e-9);for(let t of n)this.apply({ms:t.ms,side:t.side,kind:t.kind,value:t.value},e)}}e.push(...this.advance());for(let t of[0,1])this.controllers[t]?.afterStep?.(this,t,e);return this.tick%600==0&&this.checkpoints.push(this.stateHash()),e}run(e){let t=this.tick+Math.round(e*120),n=[];for(;this.tick<t&&!this.ended;)n.push(...this.step());return n}stateHash(){let e=new ug().int(this.tick).u32(this.rng.state);for(let t of this.fighters)e.f64(t.hp).f64(t.gauge).f64(t.pos.x).f64(t.pos.z).str(t.state).f64(t.stateT).f64(t.beatT).f64(t.dodgeCd).int(t.beatIdx).str(t.intent),e.bool(!!t.dodge).f64(t.dodge?t.dodge.t:-1).f64(t.contactAt).f64(t.atkTap??-999).bool(t.hitDone);e.int(this.projectiles.length);for(let t of this.projectiles)e.int(t.from).int(t.target).f64(t.t).f64(t.dur).f64(t.damage).f64(t.tapDt??-999).str(t.grade??`-`).bool(t.arrived);return e.bool(this.ended).int(this.winner??-1),e.hex()}get d(){return Dg(this.fighters[0].pos,this.fighters[1].pos)}worldPos(e){return{...this.fighters[e].pos}}laneDir(){return this.dirTo(0)}dirTo(e){let t=this.fighters[e],n=this.fighters[+(e===0)],r=n.pos.x-t.pos.x,i=n.pos.z-t.pos.z,a=og(r,i);return a<1e-6?{x:1,z:0}:{x:r/a,z:i/a}}inZone(e){return this.d<=vg(this.fighters[e].init.stats,this.B)+1e-9}telegraphInfo(e){let t=this.fighters[e];return t.state===`telegraph`?{remain:Math.max(0,1-t.stateT/t.telegraphDur),open:t.contactAt-this.time<=this.B.GRAZE_WINDOW+1e-9}:null}toContact(e){let t=this.fighters[e];return t.state===`telegraph`||t.state===`strike`&&!t.hitDone?t.contactAt-this.time:null}ringRemain(e){let t=this.fighters[e],n=t.telegraphDur+this.B.STRIKE_CONTACT;return t.state===`telegraph`?Math.max(0,1-t.stateT/n):t.state===`strike`&&!t.contactDone?Math.max(0,1-(t.telegraphDur+t.stateT)/n):null}incoming(e){return this.projectiles.find(t=>t.target===e)??null}braced(e){return this.projectiles.some(t=>t.target===e&&t.flyAt>0&&!t.arrived)}aiming(e){return this.projectiles.some(t=>t.from===e&&!t.arrived&&t.flyAt>0)}advance(){let e=this.deferred.splice(0);if(this.ended)return e;let t=Tg;this.tick++,this.time=this.tick/120;for(let n of[0,1]){let r=this.fighters[n],i=+(n===0),a=this.fighters[i];if(r.state===`dead`)continue;r.stateT+=t,r.dodgeCd=Math.max(0,r.dodgeCd-t),r.dodge&&this.updateDodge(n,t,e);let o=this.tickBeat(n,t),s=this.aiming(n);if(r.state===`idle`){if(o&&!r.dodge&&this.controllers[n]?.onBeat?.(this,n)){r.state=`casting`,r.stateT=0,r.castStartedAt=this.time,e.push({type:`cast-start`,who:n,zoneR:vg(r.init.stats,this.B),seconds:r.init.npcCastSeconds??this.B.NPC_CAST_SECONDS});continue}if(o&&!r.dodge&&a.state!==`dead`&&!s&&!this.braced(n)&&this.time>r.signBeatAt+.05){if(this.d<=this.B.REACH+this.B.LUNGE_MAX+1e-9){r.state=`telegraph`,r.stateT=0,r.telegraphDur=xg(r.init.stats,this.B),r.contactAt=this.time+r.telegraphDur+this.B.STRIKE_CONTACT,r.atkTap=null,r.contactDone=!1,r.lethalLock=!1,r.lungeD=Math.max(0,this.d-this.B.REACH),r.lungeDone=0,r.attacks++,e.push({type:`attack-start`,who:n,telegraph:r.telegraphDur});continue}r.intent=`rush`,r.intentUntil=-1}r.dodge||s||this.projectiles.some(e=>e.target===n&&!e.arrived&&e.flyAt>0)||this.move(n,t)}else if(r.state===`telegraph`){if(r.lungeD>0&&r.lungeDone<1){let e=Math.min(1,r.stateT/(r.telegraphDur*this.B.LUNGE_PORTION)),t=e*e*(3-2*e),i=r.lungeD*(t-r.lungeDone);r.lungeDone=t;let a=Math.max(0,this.d-this.B.REACH*.9);if(i>0&&a>0){let e=this.dirTo(n),t=Math.min(i,a);this.setPos(n,{x:r.pos.x+e.x*t,z:r.pos.z+e.z*t}),this.clampField(n)}}if(r.stateT>=r.telegraphDur){r.state=`strike`,r.stateT=0,r.hitDone=!1;let t=a.state===`casting`,o=Math.round(gg(r.init.stats,this.B)*(t?this.B.CAST_TAKEN_MULT:1));r.pendingDamage=o,r.pendingBonus=t;let s=r.atkTap===null?null:wg(r.atkTap,this.B.PERFECT_WINDOW,this.B.GRAZE_WINDOW,!!this.B.LATE_PERFECT),c=a.state!==`dead`&&s!==`perfect`,l=s===`graze`?Math.max(1,Math.round(o*this.B.GRAZE_DMG_MULT)):o,u=c&&a.hp<=l;r.lethalLock=u,e.push({type:`strike`,who:n,target:i,willHit:c,lethal:u,damage:l})}}else r.state===`strike`&&(!r.contactDone&&r.stateT>=this.B.STRIKE_CONTACT&&(r.contactDone=!0,a.state===`dead`?r.hitDone=!0:r.atkTap!==null||r.lethalLock||!a.init.isPlayer?this.resolveStrike(n,e):e.push({type:`impact`,who:n,target:i})),r.contactDone&&!r.hitDone&&r.stateT>=this.B.STRIKE_CONTACT+this.B.LATE_WINDOW+(a.init.isPlayer?this.inputOffset:0)&&this.resolveStrike(n,e),r.stateT>=this.B.STRIKE&&(r.state=`idle`,r.stateT=0));if(this.ended)break}if(!this.ended)for(let n=this.projectiles.length-1;n>=0;n--){let r=this.projectiles[n];if(r.t+=t,r.t<r.dur)continue;let i=this.fighters[r.target];if(i.state===`dead`)this.projectiles.splice(n,1);else{if(!r.arrived){if(r.arrived=!0,r.tapDt===null&&!r.lethalLock&&i.init.isPlayer){e.push({type:`sign-impact`,who:r.from,target:r.target});continue}}else if(r.t<r.dur+this.B.JUST_LATE+(i.init.isPlayer?this.inputOffset:0))continue;if(this.resolveSign(r,e),this.ended)break}}return e}resolveStrike(e,t){let n=this.fighters[e],r=+(e===0),i=this.fighters[r];if(n.hitDone||(n.hitDone=!0,i.state===`dead`))return;let a=this.time>n.contactAt+1e-6&&n.atkTap!==null&&n.atkTap>0,o=n.atkTap===null?`late`:wg(n.atkTap,this.B.PERFECT_WINDOW,this.B.GRAZE_WINDOW,!!this.B.LATE_PERFECT);if(o===`perfect`){i.dodgeSuccess++,t.push({type:`miss`,who:e,target:r,late:a,tapDt:n.atkTap}),this.addGauge(r,this.B.GAUGE_DODGE,`dodge`,t),this.addGauge(e,this.B.GAUGE_WHIFF,`whiff`,t);return}let s=o===`graze`,c=s?Math.max(1,Math.round(n.pendingDamage*this.B.GRAZE_DMG_MULT)):n.pendingDamage,l=n.pendingBonus;if(n.hitsLanded++,s?i.grazes++:i.hitsTaken++,t.push({type:`hit`,who:e,target:r,damage:c,castingBonus:l,grade:s?`graze`:`full`,late:a,tapDt:n.atkTap}),this.applyDamage(e,r,c,`strike`,t),!s&&i.state===`idle`&&!i.dodge){let e=this.rng.next();i.intent=e<this.B.HIT_RETREAT?`retreat`:e<this.B.HIT_RETREAT+.2?`hold`:`advance`,i.intentUntil=this.time+this.B.HIT_REACT}this.addGauge(e,_g(n.init.stats,this.B),`hit`,t),i.hp>0&&(s?this.addGauge(r,this.B.GAUGE_GRAZE,`graze`,t):o===`late`&&this.addGauge(r,this.B.GAUGE_TAKEN,`taken`,t))}resolveSign(e,t){let n=this.projectiles.indexOf(e);n>=0&&this.projectiles.splice(n,1);let r=this.fighters[e.target];if(r.state===`dead`)return;let i=r.state===`casting`,a=e.grade===`just`?this.B.JUST_DMG_MULT:e.grade===`graze`?this.B.JUST_GRAZE_MULT:1,o=Math.round(e.damage*(i?this.B.CAST_TAKEN_MULT:1)*a);r.signsTaken++;let s=e.tapDt!==null&&e.tapDt>0;t.push({type:`sign-hit`,who:e.from,target:e.target,damage:o,castingBonus:i,just:e.grade===`just`,graze:e.grade===`graze`,late:s,tapDt:e.tapDt}),this.applyDamage(e.from,e.target,o,`sign`,t)}tickBeat(e,t){let n=this.fighters[e];if(n.beatT-=t,!n.beatSwitched&&n.beatT<=n.beatLen*this.B.INTENT_SWITCH_PHASE&&(n.beatSwitched=!0,n.state===`idle`&&!n.dodge&&this.chooseIntent(e)),n.beatT>0)return!1;n.beatIdx++,n.lastBeatAt=this.time+n.beatT;let r=n.init.isPlayer?n.attackBoost:1;n.attackBoost=1;let i=1+this.rng.range(-this.B.BEAT_JITTER,this.B.BEAT_JITTER);return n.beatLen=n.forcedBeatLen??n.beatInterval*r*i,n.forcedBeatLen=null,n.beatT+=n.beatLen,n.beatT<.1&&(n.beatT=n.beatLen),n.beatSwitched=!1,!0}beatInfo(e){let t=this.fighters[e];return{interval:t.beatInterval,nextIn:Math.max(0,t.beatT),index:t.beatIdx}}chooseIntent(e){let t=this.fighters[e],n=this.d,r=n>this.B.REACH+this.B.LUNGE_MAX-.6,i=this.rng.next(),a=this.B.INTENT_ADVANCE,o=a+this.B.INTENT_RETREAT,s=o+this.B.INTENT_HOLD,c=s+this.B.INTENT_CIRCLE,l=i<a?`advance`:i<o?`retreat`:i<s?`hold`:i<c?`circle`:n>=this.B.RUSH_MIN_D?`rush`:`advance`;r&&(l===`retreat`||l===`hold`||l===`circle`)&&(l=n>=this.B.RUSH_MIN_D?`rush`:`advance`),t.intent=l,t.intentUntil=-1,l===`circle`&&(t.circleDir=this.rng.next()<.5?-1:1,t.circleRemain=this.rng.range(this.B.CIRCLE_MIN_DEG,this.B.CIRCLE_MAX_DEG)*Math.PI/180)}move(e,t){let n=this.fighters[e],r=this.fighters[+(e===0)],i=this.d;n.intentUntil>=0&&this.time>n.intentUntil&&(n.intent=`hold`,n.intentUntil=-1);let a=n.intent;if(a===`rush`&&i<=this.B.REACH&&(a=`hold`),a===`retreat`&&i>=this.B.RETREAT_LIMIT&&(a=`hold`),a===`advance`&&i<=this.B.D_MIN+.05&&(a=`hold`),a===`hold`)return;let o=yg(n.init.stats,this.B)*(a===`rush`?this.B.RUSH_MULT:1),s=this.dirTo(e);if(a===`circle`){let e={x:-s.z*n.circleDir,z:s.x*n.circleDir},a=o*t,c=n.pos.x+e.x*a,l=n.pos.z+e.z*a,u=c-r.pos.x,d=l-r.pos.z,f=og(u,d)||1;n.pos={x:r.pos.x+u/f*i,z:r.pos.z+d/f*i},n.circleRemain-=a/Math.max(.5,i),n.circleRemain<=0&&(n.intent=`hold`)}else{let r=a===`retreat`?-1:1;this.setPos(e,{x:n.pos.x+s.x*o*t*r,z:n.pos.z+s.z*o*t*r})}this.clampField(e)}setPos(e,t){let n=this.fighters[e],r=this.fighters[+(e===0)],i=t.x-r.pos.x,a=t.z-r.pos.z,o=og(i,a);if(o<1e-6){let t=this.dirTo(e);i=-t.x*this.B.D_MIN,a=-t.z*this.B.D_MIN,o=this.B.D_MIN}let s=Math.min(this.B.D_MAX,Math.max(this.B.D_MIN,o));n.pos={x:r.pos.x+i/o*s,z:r.pos.z+a/o*s}}clampField(e){let t=this.fighters[e],n=og(t.pos.x,t.pos.z),r=this.B.FIELD_R-.5;n>r&&(t.pos={x:t.pos.x/n*r,z:t.pos.z/n*r})}updateDodge(e,t,n){let r=this.fighters[e],i=r.dodge,a=this.fighters[+(e===0)];i.t+=t;let o=i.t/i.spec.dur;if(!i.landed&&o>=i.spec.landAt){i.landed=!0;let t=this.dirTo(e);if(i.spec.kind===`jump`){let e=Math.max(this.B.D_MIN,i.spec.landBeyond);r.pos={x:a.pos.x+t.x*e,z:a.pos.z+t.z*e}}else i.spec.du!==0&&this.setPos(e,{x:r.pos.x+t.x*i.spec.du,z:r.pos.z+t.z*i.spec.du});this.clampField(e),n.push({type:`dodge-land`,who:e,kind:i.spec.kind})}o>=1&&(r.dodge=null)}tap(e,t,n=this.time){let r=this.fighters[e],i=+(e===0),a=this.fighters[i];if(this.ended||r.dodge||r.state===`casting`||r.state===`dead`||r.state===`strike`&&!r.hitDone&&!this.braced(e))return`ignored`;if(r.dodgeCd>0)return`cooldown`;let o=t??[],s=this.time-n;r.state!==`idle`&&this.cancelAttack(e,o);let c=Cg(r.init.skeleton,r.init.stats),l=null,u=this.toContact(i);u!==null&&a.atkTap===null&&!a.lethalLock&&(a.atkTap=-u-s,l=wg(a.atkTap,this.B.PERFECT_WINDOW,this.B.GRAZE_WINDOW,!!this.B.LATE_PERFECT),l===`early`&&r.whiffs++);let d=null,f=this.incoming(e);if(r.init.isPlayer&&f&&f.tapDt===null&&!(f.lethalLock&&f.arrived)){f.tapDt=f.t-s-f.dur;let t=wg(f.tapDt,this.B.JUST_WINDOW,this.B.JUST_GRAZE_WINDOW,!0);r.justTaps++,(t===`perfect`||t===`graze`)&&(d=t===`perfect`?`just`:`graze`,f.grade=d,d===`just`?r.justSuccess++:r.justGrazes++,o.push({type:`just`,who:e,from:i,grade:d,tapDt:f.tapDt}),this.addGauge(e,d===`just`?this.B.GAUGE_JUST:this.B.GAUGE_JUST_GRAZE,`just`,o)),f.arrived&&this.resolveSign(f,o)}l===null&&d===null&&u===null&&!f&&r.whiffs++,r.dodgeCd=this.B.DODGE_CD,r.dodgeTaps++;let p=l===`perfect`||l===`graze`,m=l===`early`,h=r.dodgeTaps%2==0?-1:1,g={...r.pos},_=this.dirTo(e),v={...r.pos};if(c.kind===`jump`){let e=Math.max(this.B.D_MIN,c.landBeyond);v={x:a.pos.x+_.x*e,z:a.pos.z+_.z*e}}else if(c.du!==0){let e=Math.min(this.B.D_MAX,Math.max(this.B.D_MIN,this.d-c.du));v={x:a.pos.x-_.x*e,z:a.pos.z-_.z*e}}return r.dodge={spec:c,t:0,dir:h,inWindow:p,landed:c.landAt<=0},c.attackBoost!==1&&(r.attackBoost=c.attackBoost),r.intent=`hold`,o.push({type:`dodge`,who:e,spec:c,dir:h,inWindow:p,early:m,from:g,to:v}),l!==null&&a.contactDone&&!a.hitDone&&this.resolveStrike(i,o),d?d===`just`?`just`:`just-graze`:l===`perfect`||l===`graze`||l===`early`?l:`whiff`}cancelAttack(e,t){let n=this.fighters[e];(n.state===`telegraph`||n.state===`strike`)&&(n.state===`strike`&&n.contactDone&&!n.hitDone&&this.resolveStrike(e,t),n.hitDone=!0,n.state=`idle`,n.stateT=0)}startCast(e,t=this.deferred){let n=this.fighters[e];if(this.ended||n.gauge<this.B.GAUGE_FULL||n.init.signComplexity<=0||n.state===`casting`||n.state===`dead`||n.beatIdx<=this.B.FIRST_SIGN_BEAT)return!1;(n.state===`telegraph`||n.state===`strike`)&&this.cancelAttack(e,t),n.dodge=null,n.state=`casting`,n.stateT=0,n.castStartedAt=this.time;let r=+(e===0);return n.castRing=this.ringRemain(r),n.castBeatIn=Math.max(0,this.fighters[r].beatT),`now`}cancelCast(e){let t=this.fighters[e];return this.ended||t.state!==`casting`?!1:(t.state=`idle`,t.stateT=0,!0)}finishCast(e,t,n=[]){let r=this.fighters[e];return this.ended||r.state!==`casting`||this.fire(e,t,n),n}fire(e,t,n){let r=this.fighters[e],i=+(e===0),a=this.fighters[i],o=this.inZone(e),s=Math.round(Sg(r.init.stats,r.init.signComplexity,t,o,this.B));r.gauge=0,r.state=`idle`,r.stateT=0,r.lastFidelity=t,r.signs.push({fidelity:t,inZone:o,damage:s,d:this.d,ringRemain:r.castRing,nextBeatIn:r.castBeatIn}),r.castRing=null;let c=this.B.SIGN_FLIGHT,l=0;if(!r.init.isPlayer){c=r.beatT,c<this.B.SIGN_AIM_MIN&&(c+=r.beatInterval,r.forcedBeatLen=r.beatInterval);let e=Math.min(r.beatInterval,c)/3;l=c-2*e,r.signBeatAt=this.time+c}let u=a.state!==`dead`&&a.hp<=s;this.projectiles.push({from:e,target:i,t:0,dur:c,flyAt:l,damage:s,fidelity:t,inZone:o,tapDt:null,grade:null,arrived:!1,lethalLock:u}),n.push({type:`sign-fire`,who:e,target:i,fidelity:t,damage:s,complexity:r.init.signComplexity,inZone:o,lethal:u,flight:c,flyAt:l})}addGauge(e,t,n,r){let i=this.fighters[e];if(i.state===`dead`)return;let a=i.gauge;i.gauge=Math.min(this.B.GAUGE_FULL,i.gauge+t),r.push({type:`gauge`,who:e,amount:t,reason:n}),a<this.B.GAUGE_FULL&&i.gauge>=this.B.GAUGE_FULL&&r.push({type:`gauge-full`,who:e})}applyDamage(e,t,n,r,i){let a=this.fighters[e],o=this.fighters[t];o.state!==`dead`&&(o.hp=Math.max(0,o.hp-n),a.damageDealt+=n,o.hp<=0&&(o.state===`casting`&&i.push({type:`sign-fizzle`,who:t}),o.state=`dead`,o.dodge=null,this.projectiles=this.projectiles.filter(e=>e.target!==t&&e.from!==t),i.push({type:`dead`,who:t}),this.ended=!0,this.winner=e,this.endedBy=r,i.push({type:`end`,winner:e,by:r})))}};function Dg(e,t){return og(e.x-t.x,e.z-t.z)}function Og(e,t,n){return{init:e,hp:mg(e.stats,n),maxHp:mg(e.stats,n),gauge:0,beatInterval:hg(e.stats,n),beatT:hg(e.stats,n)*(e.isPlayer?n.FIRST_BEAT_PLAYER:n.FIRST_BEAT_NPC),beatLen:hg(e.stats,n),beatIdx:0,beatSwitched:!0,lastBeatAt:-1e9,lungeD:0,lungeDone:0,state:`idle`,stateT:0,telegraphDur:xg(e.stats,n),hitDone:!0,pendingDamage:0,pendingBonus:!1,pos:t,intent:`advance`,intentUntil:-1,circleDir:1,circleRemain:0,dodgeCd:0,dodge:null,contactAt:0,atkTap:null,contactDone:!0,lethalLock:!1,forcedBeatLen:null,signBeatAt:-1,attackBoost:1,castStartedAt:0,castRing:null,castBeatIn:0,attacks:0,hitsLanded:0,hitsTaken:0,dodgeTaps:0,dodgeSuccess:0,grazes:0,whiffs:0,justTaps:0,justSuccess:0,justGrazes:0,signsTaken:0,damageDealt:0,signs:[],lastFidelity:null}}var kg=e=>+(e===0),Ag=class{constructor(){s(this,`dodgeAt`,null),s(this,`finishQueued`,!1)}onBeat(e,t){let n=e.fighters[t];return n.gauge>=e.B.GAUGE_FULL&&n.init.signComplexity>0&&e.inZone(t)&&n.beatIdx>e.B.FIRST_SIGN_BEAT}beforeStep(e,t){let n=e.fighters[t],r=e.nextStepEndMs/1e3;if(this.dodgeAt!==null&&this.dodgeAt<=r+1e-9){let n=this.dodgeAt;this.dodgeAt=null,e.toContact(kg(t))!==null&&e.queue({ms:Math.round(n*1e3),side:t,kind:`tap`})}if(n.state!==`casting`)this.finishQueued=!1;else if(!this.finishQueued){let i=n.castStartedAt+(n.init.npcCastSeconds??e.B.NPC_CAST_SECONDS);i<=r+1e-9&&(this.finishQueued=!0,e.queue({ms:Math.round(i*1e3),side:t,kind:`cast-finish`,value:n.init.npcFidelity??.7}))}}afterStep(e,t,n){for(let r of n){if(r.type!==`attack-start`||r.who===t)continue;let n=e.fighters[t],i=e.fighters[r.who];if(this.dodgeAt=null,n.state===`idle`&&!n.dodge&&n.dodgeCd<=0&&e.rng.next()<bg(n.init.stats,e.B)){let t=i.telegraphDur+e.B.STRIKE_CONTACT-e.rng.range(.02,e.B.PERFECT_WINDOW-.02),r=t+Cg(n.init.skeleton,n.init.stats).dur+.05;n.beatT>t-.05&&n.beatT<r||(this.dodgeAt=e.time+t)}}}},jg=class{constructor(e){s(this,`i`,0),s(this,`inputs`,void 0),this.inputs=e}beforeStep(e){for(;this.i<this.inputs.length&&this.inputs[this.i].tick<=e.tick;){let t=this.inputs[this.i++];e.input({ms:t.ms,side:t.side,kind:t.kind,value:t.value})}}get done(){return this.i>=this.inputs.length}};function Mg(e,t){let n=e.fighters.map(e=>structuredClone(e.init));return{header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:fg(e.B),tuned:pg(e.B),genVersion:1,signVersion:1,seed:e.seed,startDistance:e.startDistance,inputOffset:e.inputOffset,fighters:n,npcKey:t.npcKey,createdAt:t.createdAt,balance:{...e.B}},inputs:e.inputLog.map(e=>({...e})),result:{winner:e.winner,endTick:e.tick,ended:e.ended,finalHash:e.stateHash(),checkpoints:[...e.checkpoints]}}}function Ng(e){let t=e.header;return t.logVersion===1?t.simVersion===1?t.balanceVersion===1?fg(t.balance)===t.balanceHash?null:`BALANCE の写しがハッシュと合わない`:`BALANCE の版がちがう(ログ ${t.balanceVersion} / 今 1)`:`sim の版がちがう(ログ ${t.simVersion} / 今 1)`:`ログの版がちがう(ログ ${t.logVersion} / 今 1)`}function Pg(e){let t=e.header,n=e.inputs.filter(e=>e.side===0),r=r=>t.fighters[r].isPlayer?new jg(r===0?n:e.inputs.filter(e=>e.side===r)):new Ag;return new Eg(structuredClone(t.fighters[0]),structuredClone(t.fighters[1]),{seed:t.seed,startDistance:t.startDistance,inputOffset:t.inputOffset,balance:t.balance,controllers:[r(0),r(1)]})}function Fg(e,t={}){let n=Ng(e);if(n)return{ok:!1,reason:n};let r=Pg(e),i=new ug,a=e.result.endTick;for(;r.tick<a&&!r.ended;){let e=r.step();for(let t of e)i.str(JSON.stringify(t));t.onStep?.(r,e)}let o=r.stateHash(),s=e.result,c=t=>JSON.stringify(t.filter(t=>!e.header.fighters[t.side].isPlayer));return{ok:!0,winner:r.winner,endTick:r.tick,ended:r.ended,finalHash:o,checkpoints:[...r.checkpoints],eventsHash:i.hex(),matches:r.winner===s.winner&&r.tick===s.endTick&&r.ended===s.ended&&o===s.finalHash&&JSON.stringify(r.checkpoints)===JSON.stringify(s.checkpoints),npcInputsMatch:c(r.inputLog)===c(e.inputs)}}function Ig(e){let t=e.header,n={at:t.createdAt,npcKey:t.npcKey,win:null,seconds:0,tuned:t.tuned,simVersion:t.simVersion,balanceVersion:t.balanceVersion,dodge:{attacks:0,perfect:0,graze:0,early:0,hit:0,dtMs:[]},just:{signs:0,just:0,graze:0,dtMs:[]},signs:[]},r=e=>Math.round(e*1e3),i=null,a=null,o=Fg(e,{onStep:(e,t)=>{let o=e.B.GRAZE_WINDOW;for(let s of t)s.type===`miss`&&s.target===0?(n.dodge.attacks++,n.dodge.perfect++,s.tapDt!==null&&n.dodge.dtMs.push(r(s.tapDt))):s.type===`hit`&&s.target===0?(n.dodge.attacks++,s.grade===`graze`?n.dodge.graze++:s.tapDt!==null&&s.tapDt<-o?n.dodge.early++:n.dodge.hit++,s.tapDt!==null&&n.dodge.dtMs.push(r(s.tapDt))):s.type===`sign-hit`&&s.target===0?(n.just.signs++,s.just?n.just.just++:s.graze&&n.just.graze++,s.tapDt!==null&&n.just.dtMs.push(r(s.tapDt))):s.type===`gauge-full`&&s.who===0?i=e.time:s.type===`input`&&s.side===0&&s.kind===`cast-start`&&s.result===`now`?a=e.time:s.type===`sign-fire`&&s.who===0&&(n.signs.push({fullToCastMs:i!==null&&a!==null&&a>=i?r(a-i):null,fidelity:s.fidelity,inZone:s.inZone,damage:s.damage}),i=null,a=null)}});return o.ok?(n.win=o.ended?o.winner===0:null,n.seconds=Math.round((o.endTick??0)/120*10)/10,n):null}function Lg(){return gn().logs}function Rg(e){let t=null;try{t=Ig(e)}catch(e){console.warn(`summarize failed`,e)}_n(n=>{for(n.logs.push(e);n.logs.length>20;)n.logs.shift();if(t)for(n.stats.push(t);n.stats.length>200;)n.stats.shift()})}function zg(){let e=Lg();return e.length?e[e.length-1]:null}var Bg={ANGLE:55,APPEAR:.2,APPEAR_FROM_TOP:.1,APPEAR_RING:.35,APPEAR_RING_SCALE:3,FALL_POW:2,SIZE_K:.5,SIZE_MIN:.35,GHOST_OPACITY:.3,GHOST_OPEN_OPACITY:.85,TRAIL:6,PARTICLES:24,GRAZE_BEHIND:.8,JUST_RETARGET:.08,GHOST_FWD:.3,GHOST_MIN_PX:56,GHOST_MIN_REF_W:390,ENTRY_DEPTH_MAX:3},Vg=class{constructor(e){s(this,`scene`,void 0),s(this,`group`,new Qa),s(this,`list`,[]),s(this,`glowTex`,void 0),s(this,`ringTex`,void 0),s(this,`parts`,[]),s(this,`camTmp`,new Ol),s(this,`onLand`,()=>{}),s(this,`landLog`,[]),this.scene=e,this.group.name=`meteors`,this.group.renderOrder=20,e.viewer.scene.add(this.group),this.glowTex=Em(Yg()),this.ringTex=Em(Jg());for(let e=0;e<Bg.PARTICLES;e++){let e=new Es(new fs({map:this.glowTex,transparent:!0,depthTest:!1,depthWrite:!1,blending:2}));e.visible=!1,e.renderOrder=21,this.group.add(e),this.parts.push({s:e,v:new J,life:0,max:1})}}add(e,t,n){if(this.list.some(t=>t.p===e))return;let r=new X(n),i=this.scene.get(e.target),a=Math.max(Bg.SIZE_MIN,Bg.SIZE_K*i.height),o=Xg(t,n,`meteor`),s=new Es(new fs({map:o,transparent:!0,depthTest:!1,depthWrite:!1}));s.renderOrder=23,s.visible=!1;let c=new Es(new fs({map:this.glowTex,color:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:2}));c.renderOrder=22,c.visible=!1;let l=[];for(let e=0;e<Bg.TRAIL;e++){let e=new Es(new fs({map:o,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));e.renderOrder=22,e.visible=!1,l.push(e),this.group.add(e)}this.group.add(c,s);let u=new Es(new fs({map:this.ringTex,color:r.clone().lerp(qg,.4),transparent:!0,depthTest:!1,depthWrite:!1,blending:2,opacity:0}));u.renderOrder=22,u.visible=!1,this.group.add(u);let d=null,f=null,p=null;e.target===0&&e.flyAt>0&&(f=Xg(t,n,`ghost`),p=Xg(t,n,`ghost-open`),d=new Es(new fs({map:f,transparent:!0,depthTest:!1,depthWrite:!1,opacity:Bg.GHOST_OPACITY})),d.renderOrder=30,d.scale.setScalar(a),this.group.add(d)),km(this.group),this.list.push({p:e,from:e.from,target:e.target,color:r,size:a,k:1,incoming:e.target===0&&e.flyAt>0,track:{entered:!1,off:0,frames:0,minGhostPx:1/0,angle:null},phase:`hover`,sprite:s,halo:c,trail:l,hist:[],pos:new J,s:new J,aim:new J,aimFrom:null,aimTo:null,aimT:0,ghost:d,ghostTex:f,ghostOpenTex:p,tex:o,ring:u,ringT:-1})}retarget(e,t){let n=this.list.find(t=>t.p===e);if(!n||n.phase===`done`)return;let r=this.scene.worldPart(n.target,`feet`).clone();if(r.y=.05,t===`graze`){let e=n.aim.x-n.s.x,t=n.aim.z-n.s.z,i=Math.hypot(e,t)||1;r.x+=e/i*n.size*Bg.GRAZE_BEHIND,r.z+=t/i*n.size*Bg.GRAZE_BEHIND}n.aimFrom=this.currentAim(n).clone(),n.aimTo=r,n.aimT=0}debug(){return this.list.map(e=>({from:e.from,target:e.target,phase:e.phase,t:e.p.t,flyAt:e.p.flyAt,dur:e.p.dur,ghost:!!e.ghost}))}flying(e){return this.list.some(t=>t.from===e&&(t.phase===`appear`||t.phase===`fall`))}update(e,t){let n=this.scene.mode===`cutin`;this.group.visible=!n;let r=this.scene.viewer.camera;for(let n=this.list.length-1;n>=0;n--){let i=this.list[n],a=i.p,o=t(a);if(i.incoming&&(i.k=this.minScale(i)),i.ghost){this.scene.ghostPoint(i.target,i.ghost.position),i.ghost.scale.setScalar(Hg(i));let e=a.dur-a.t<=Q.JUST_GRAZE_WINDOW,t=i.ghost.material,n=e?i.ghostOpenTex:i.ghostTex;t.map!==n&&(t.map=n,t.needsUpdate=!0),t.opacity=e?Bg.GHOST_OPEN_OPACITY:Bg.GHOST_OPACITY}i.aimTo&&(i.aimT+=e);let s=Math.min(a.dur-.05,a.flyAt+Bg.APPEAR),c=a.t>=a.dur-1e-6||a.arrived||!o;if(i.phase===`hover`&&(a.t>=a.flyAt||c)&&this.beginAppear(i),i.phase===`appear`&&!i.incoming&&this.placeAppear(i,r),i.phase===`appear`&&(a.t>=s||c)&&(i.phase=`fall`),i.phase===`fall`&&c){this.land(i),this.list.splice(n,1);continue}if(i.phase===`appear`){let e=Math.min(1,Math.max(0,(a.t-a.flyAt)/Math.max(.001,s-a.flyAt))),t=1-(1-e)*(1-e);i.pos.copy(i.s),i.sprite.scale.setScalar(Math.max(.001,Hg(i)*t)),i.sprite.material.opacity=1,i.halo.scale.setScalar(Math.max(.001,Hg(i)*1.7*t)),i.halo.material.opacity=.75*t}else if(i.phase===`fall`){let t=Math.min(1,Math.max(0,(a.t-s)/Math.max(.001,a.dur-s)))**+Bg.FALL_POW;i.pos.copy(i.s).lerp(this.currentAim(i),t),i.sprite.scale.setScalar(Hg(i)),i.sprite.material.opacity=1,i.halo.scale.setScalar(Hg(i)*1.7),i.halo.material.opacity=.75,this.emit(i,e)}if(i.phase===`appear`||i.phase===`fall`){Ug.copy(i.pos).project(r);let e=i.track;if(e.frames++,Ug.y<=1&&Ug.y>=-1&&Math.abs(Ug.x)<=1&&Ug.z<1?e.entered=!0:e.off++,i.incoming){let t=this.ghostPx();t!==null&&(e.minGhostPx=Math.min(e.minGhostPx,t))}}if(i.ringT>=0){i.ringT+=e;let t=Math.min(1,i.ringT/Bg.APPEAR_RING);i.ring.visible=t<1&&i.phase!==`hover`,i.ring.position.copy(i.s),i.ring.scale.setScalar(Hg(i)*(1+(Bg.APPEAR_RING_SCALE-1)*(1-(1-t)*(1-t)))),i.ring.material.opacity=.9*(1-t)}let l=i.phase===`appear`||i.phase===`fall`;i.sprite.visible=l,i.halo.visible=l,l&&(i.sprite.position.copy(i.pos),i.halo.position.copy(i.pos),i.hist.unshift(i.pos.clone()),i.hist.length>Bg.TRAIL*2+1&&i.hist.pop());for(let e=0;e<i.trail.length;e++){let t=i.trail[e],n=i.hist[(e+1)*2];if(t.visible=l&&i.phase===`fall`&&!!n,!t.visible)continue;t.position.copy(n);let r=1-(e+1)/(i.trail.length+1);t.scale.setScalar(Hg(i)*(.5+.45*r)),t.material.opacity=.45*r}}for(let t of this.parts){if(t.life<=0){t.s.visible=!1;continue}t.life-=e,t.s.position.addScaledVector(t.v,e);let n=Math.max(0,t.life/t.max);t.s.material.opacity=n*.9,t.s.visible=t.life>0}}currentAim(e){if(e.aimTo&&e.aimFrom){let t=Math.min(1,e.aimT/Bg.JUST_RETARGET);return e.aim.copy(e.aimFrom).lerp(e.aimTo,t*t*(3-2*t))}return e.incoming?this.scene.ghostPoint(e.target,e.aim):this.scene.worldPart(e.target,`chest`,e.aim)}minScale(e){let t=this.projCam(),n=this.scene.ghostPoint(e.target,Kg),r=Ug.copy(n).sub(t.position).dot(Wg.set(0,0,-1).applyQuaternion(t.quaternion));if(r<=.05)return 1;let i=this.scene.viewer.cssH,a=this.scene.viewer.cssW,o=i/(2*r*Math.tan(ea.degToRad(t.fov)/2)),s=Bg.GHOST_MIN_PX*(a/Bg.GHOST_MIN_REF_W);return Math.max(1,s/(e.size*o))}ghostPx(){let e=this.list.find(e=>e.ghost);if(!e||!e.ghost)return null;let t=this.scene.viewer.camera,n=Ug.copy(e.ghost.position).sub(t.position).dot(Wg.set(0,0,-1).applyQuaternion(t.quaternion));if(n<=.05)return null;let r=this.scene.viewer.cssH,i=this.scene.viewer.cssW;return Hg(e)*r/(2*n*Math.tan(ea.degToRad(t.fov)/2))*(Bg.GHOST_MIN_REF_W/i)}projCam(){let e=this.scene.viewer.camera,t=this.scene.cameraTarget();return this.camTmp.copy(e),this.camTmp.position.copy(t.pos),this.camTmp.lookAt(t.look),this.camTmp.updateMatrixWorld(),this.camTmp}beginAppear(e){e.phase=`appear`,this.placeAppear(e,this.projCam()),e.hist.length=0,e.ringT=0}placeAppear(e,t){t.updateMatrixWorld();let n=Wg.set(0,0,-1).applyQuaternion(t.quaternion).clone(),r=this.currentAim(e).clone(),i=this.scene.worldPart(1,`top`,Gg),a=Ug.copy(i).project(t),o=ea.clamp(a.x,-.85,.85),s=1-2*Bg.APPEAR_FROM_TOP,c=Math.max(1,Kg.copy(i).sub(t.position).dot(n)),l=new J(o,s,.5).unproject(t).sub(t.position).normalize(),u=Math.max(.05,l.dot(n)),d=c/u,f=Math.min(d*Bg.ENTRY_DEPTH_MAX,t.far*.9/u),p=ea.degToRad(Bg.ANGLE),m=d,h=1/0,g=0;for(let e=0;e<=40;e++){let n=d+(f-d)*e/40,i=Ug.copy(t.position).addScaledVector(l,n),a=Math.atan2(i.y-r.y,Math.hypot(i.x-r.x,i.z-r.z)),o=Math.abs(a-p);o<h&&(h=o,m=n,g=a)}e.s.copy(t.position).addScaledVector(l,m),e.track.angle=+ea.radToDeg(g).toFixed(1),e.pos.copy(e.s)}land(e){e.phase=`done`;let t=e.p.grade===`just`?`just`:e.p.grade===`graze`?`graze`:`hit`,n=this.currentAim(e).clone();this.landLog.push({from:e.from,t:e.p.t,dur:e.p.dur,kind:t,tapDt:e.p.tapDt,entered:e.track.entered,offFrames:e.track.off,fallFrames:e.track.frames,minGhostPx:+e.track.minGhostPx.toFixed(1),angle:e.track.angle}),this.onLand({from:e.from,target:e.target,color:e.color,p:e.p},n,t),this.disposeMeteor(e)}emit(e,t){let n=Math.min(3,Math.max(1,Math.round(t*60)));for(let t=0;t<n;t++){let t=this.parts.find(e=>e.life<=0);if(!t)return;t.max=.25+Math.random()*.15,t.life=t.max,t.s.position.copy(e.pos).add(Ug.set((Math.random()-.5)*Hg(e)*.5,(Math.random()-.5)*Hg(e)*.5,(Math.random()-.5)*Hg(e)*.5)),t.v.set((Math.random()-.5)*.8,.6+Math.random()*.6,(Math.random()-.5)*.8),t.s.scale.setScalar(Hg(e)*(.12+Math.random()*.12)),t.s.material.color.copy(e.color).lerp(qg,.3)}}disposeMeteor(e){for(let t of[e.sprite,e.halo,e.ring,...e.trail,...e.ghost?[e.ghost]:[]])this.group.remove(t),t.material.dispose();e.tex.dispose(),e.ghostTex?.dispose(),e.ghostOpenTex?.dispose()}prune(e){for(let t=this.list.length-1;t>=0;t--){let n=this.list[t];n.phase===`hover`&&!e(n.p)&&(this.disposeMeteor(n),this.list.splice(t,1))}}dispose(){for(let e of this.list)this.disposeMeteor(e);this.list=[],this.glowTex.dispose(),this.ringTex.dispose();for(let e of this.parts)e.s.material.dispose();this.scene.viewer.scene.remove(this.group)}},Hg=e=>e.size*e.k,Ug=new J,Wg=new J,Gg=new J,Kg=new J,qg=new X(`#ffffff`);function Jg(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.shadowColor=`rgba(255,255,255,0.9)`,t.shadowBlur=10,t.strokeStyle=`rgba(255,255,255,1)`,t.lineWidth=7,t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.stroke();let n=new nc(e);return n.colorSpace=li,n}function Yg(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new nc(e);return r.colorSpace=li,r}function Xg(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=256;let i=r.getContext(`2d`),a=1/0,o=1/0,s=-1/0,c=-1/0;for(let t of e)for(let e of t)a=Math.min(a,e.x),o=Math.min(o,e.y),s=Math.max(s,e.x),c=Math.max(c,e.y);let l=Math.max(1e-6,s-a),u=Math.max(1e-6,c-o),d=199.68/Math.max(l,u),f=(256-l*d)/2-a*d,p=(256-u*d)/2-o*d,m=()=>{i.beginPath();for(let t of e)if(t.length){i.moveTo(f+t[0].x*d,p+t[0].y*d),t.length===1&&i.lineTo(f+t[0].x*d+.5,p+t[0].y*d);for(let e=1;e<t.length;e++)i.lineTo(f+t[e].x*d,p+t[e].y*d)}};i.lineCap=`round`,i.lineJoin=`round`,n===`meteor`?(i.shadowColor=t,i.shadowBlur=18,i.strokeStyle=t,i.lineWidth=16,m(),i.stroke(),i.shadowBlur=0,i.strokeStyle=`rgba(255,255,255,0.95)`,i.lineWidth=6,m(),i.stroke()):n===`ghost`?(i.strokeStyle=t,i.lineWidth=9,m(),i.stroke()):(i.shadowColor=t,i.shadowBlur=10,i.strokeStyle=`#ffffff`,i.lineWidth=18,m(),i.stroke());let h=new nc(r);return h.colorSpace=li,h}var $={FOV:52,ELEV_NEAR:45,ELEV_FAR:55,DIAG:28,MARGIN_X:.15,MARGIN_Y:.22,D_MIN:7,D_MAX:12,GIANT_ELEV:20,D_MAX_GIANT:26,LAG:.15,YAW_LAG:.7,OCCLUDE_DEG:9,OCCLUDE_RATE:.7,SHOULDER_PITCH:17.5,SHOULDER_UP:1.1,SHOULDER_UP_MAX:2.4,SHOULDER_ENEMY_TOP:.5,SHOULDER_SIDE:.2,SHOULDER_SIDE_MAX:1.2,SHOULDER_PLAYER_Y:-.6,BRACE_EASE:.3,BRACE_YAW:28,BRACE_YAW_MAX:60,BRACE_YAW_STEP:4,BRACE_PITCH:27,BRACE_TOP:.4,BRACE_BOTTOM:-.72,BRACE_SIDE:.65,BRACE_D_MAX:26,BRACE_D_MIN:9,BRACE_BOX_PAD:.15,BRACE_PROBE:1.2},Zg=1.3,Qg={DUR:.25,OPACITY:.45},$g=new J,e_=new J,t_=new J,n_=new J,r_=new J,i_=new J,a_=new J,o_=new J,s_=new Ol,c_=new J,l_=new X(b),u_=new X,d_=new ql,f_=[[0,0],[.8,0],[-.8,0],[0,.8],[0,-.8],[.57,.57],[-.57,.57],[.57,-.57],[-.57,-.57]],p_=class{constructor(e,t,n,r){s(this,`viewer`,void 0),s(this,`player`,void 0),s(this,`enemy`,void 0),s(this,`field`,void 0),s(this,`reachRing`,void 0),s(this,`zoneRing`,void 0),s(this,`enemyZoneRing`,void 0),s(this,`mode`,`intro`),s(this,`modeT`,0),s(this,`t`,0),s(this,`d`,Zg*2),s(this,`cutinZoom`,0),s(this,`finishPush`,0),s(this,`dim`,0),s(this,`camPos`,new J(0,6,9)),s(this,`camLook`,new J(0,.5,0)),s(this,`yaw`,0),s(this,`yawOffset`,0),s(this,`dist`,9),s(this,`lookPt`,new J(0,.5,0)),s(this,`savedPos`,new J),s(this,`savedLook`,new J),s(this,`cutinFrom`,new J),s(this,`cutinTo`,new J),s(this,`cutinLook`,new J),s(this,`finishCenter`,new J),s(this,`finishBack`,new J),s(this,`finishRight`,new J),s(this,`finishH`,1),s(this,`finishLook`,new J),s(this,`finishTarget`,new J),s(this,`cutinSide`,0),s(this,`braceFrom`,new J),s(this,`braceFromLook`,new J),s(this,`braceSnap`,!1),s(this,`shoulderInfo`,null),s(this,`braceInfo`,null),s(this,`braceReceive`,!1),s(this,`bracePos`,new J),s(this,`braceLook`,new J),s(this,`ghosts`,[]),s(this,`sim`,void 0),s(this,`dodgeOrigin`,null),s(this,`afterimageLog`,[]),this.sim=r,this.viewer=new jm(e,{alpha:!0,fov:$.FOV}),this.field=Wh(Zg),this.viewer.scene.add(km(this.field)),this.reachRing=qh(.012,`#CFCBC2`,.55,!1),this.reachRing.scale.setScalar(Q.REACH),this.viewer.scene.add(this.reachRing),this.zoneRing=qh(.022,t.color,.9,!0),this.zoneRing.visible=!1,this.viewer.scene.add(this.zoneRing),this.enemyZoneRing=qh(.014,n.color,.7,!0),this.enemyZoneRing.visible=!1,this.viewer.scene.add(this.enemyZoneRing),this.player=this.place(0,t),this.enemy=this.place(1,n),this.yaw=this.desiredYaw();let i=this.autoFrame(0,!0);this.dist=i.dist*1.7,this.lookPt.copy(i.look),this.applyCamera(this.yaw,ea.degToRad(28),this.dist,this.lookPt),this.viewer.camera.position.copy(this.camPos),this.viewer.camera.lookAt(this.camLook)}place(e,t){let n=1*Ke(t),r=mh(t,n),i=this.sim.worldPos(e),a=new J(i.x,0,i.z);r.root.position.copy(a),this.viewer.scene.add(r.root);let o=r,s={side:e,data:t,view:r,anim:o,pos:a,height:n,bodyHalf:r.bodyHalf,bodyCenter:r.bodyCenter,lat:0,latStep:0,latPhase:e*2.1,wobT:0,arc:null,color:new X(t.color),speedSmooth:0,realTime:!1};return o.yaw=Math.atan2(-i.x,-i.z),s}bodyBox(e,t=new So){let n=this.get(e);return n.view.bodyBox(t),t.isEmpty()&&t.setFromCenterAndSize($g.set(n.pos.x,n.height*.5,n.pos.z),e_.set(n.height*.6,n.height,n.height*.6)),t}debugScreenBox(e){let t=this.get(e).view.bodyBox(new So),n=this.viewer.camera;n.updateMatrixWorld();let r=1/0,i=-1/0,a=1/0,o=-1/0,s=new J;for(let e=0;e<8;e++)s.set(e&1?t.max.x:t.min.x,e&2?t.max.y:t.min.y,e&4?t.max.z:t.min.z).project(n),r=Math.min(r,s.x),i=Math.max(i,s.x),a=Math.min(a,s.y),o=Math.max(o,s.y);return{x0:r,x1:i,y0:a,y1:o,camDist:this.camPos.distanceTo(this.camLook)}}other(e){return e===0?this.enemy:this.player}get(e){return e===0?this.player:this.enemy}setMode(e,t={}){if(this.mode===e&&(e!==`brace`||!!t.receive===this.braceReceive))return;let n=this.mode,r=r_.copy(this.camPos),i=c_.copy(this.camLook);if(this.mode=e,this.modeT=0,e===`cutin`){this.savedPos.copy(this.camPos),this.savedLook.copy(this.camLook),this.cutinSide=t.side??0;let e=this.get(this.cutinSide),n=$g.set(Math.sin(e.anim.yaw),0,Math.cos(e.anim.yaw)),r=e.height;this.cutinFrom.copy(e.pos).addScaledVector(n,2.4*r).add(e_.set(0,1*r,0)),this.cutinTo.copy(e.pos).addScaledVector(n,1.8*r).add(e_.set(0,.85*r,0)),this.cutinLook.copy(e.pos).add(e_.set(0,.58*r,0)).addScaledVector(n,.1),this.cutinZoom=0,this.camPos.copy(this.cutinFrom),this.camLook.copy(this.cutinLook),this.field.visible=!1,this.reachRing.visible=!1,this.other(this.cutinSide).view.root.visible=!1,e.realTime=!0}else n===`cutin`&&(this.field.visible=!0,this.reachRing.visible=!0,this.player.view.root.visible=!0,this.enemy.view.root.visible=!0,this.player.realTime=!1,this.enemy.realTime=!1,this.camPos.copy(this.savedPos),this.camLook.copy(this.savedLook));if(e===`brace`){this.braceFrom.copy(n===`cutin`?r:this.camPos),this.braceFromLook.copy(n===`cutin`?i:this.camLook),this.braceReceive=!!t.receive,this.braceReceive?this.receiveFrame(this.bracePos,this.braceLook):this.shoulderFrame(this.bracePos,this.braceLook),this.braceSnap=!!t.snap;let e=this.player,a=this.enemy;this.yaw=Math.atan2(e.pos.x-a.pos.x,e.pos.z-a.pos.z),this.yawOffset=0,this.braceSnap?(this.camPos.copy(this.bracePos),this.camLook.copy(this.braceLook)):(this.camPos.copy(this.braceFrom),this.camLook.copy(this.braceFromLook))}if(e===`finish`){let e=this.get(t.attacker??0),n=this.other(t.attacker??0),r=$g.copy(e.pos).sub(n.pos).setY(0);r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize(),this.finishBack.copy(r),this.finishRight.set(r.z,0,-r.x),this.finishH=e.height,this.finishCenter.copy(e.pos),this.finishLook.copy(n.pos).add(t_.set(0,.45*n.height,0)).lerp(e.pos.clone().add(t_.set(0,.5*e.height,0)),.35),this.finishTarget.copy(n.pos).add(t_.set(0,.5*n.height,0)),this.finishPush=0,this.updateFinishCamera()}(e===`auto`||e===`result`)&&this.setDim(0)}setDim(e){this.dim=e,this.field.setDim(e)}get dimLevel(){return this.dim}cameraTarget(){return this.mode===`brace`?{pos:this.bracePos,look:this.braceLook}:{pos:this.camPos,look:this.camLook}}ghostPoint(e=0,t=new J){let n=this.get(e),r=this.other(e);this.worldPart(e,`head`,t);let i=r.pos.x-n.pos.x,a=r.pos.z-n.pos.z,o=Math.hypot(i,a)||1;return t.x+=i/o*Bg.GHOST_FWD*n.height,t.z+=a/o*Bg.GHOST_FWD*n.height,t}occludedBy(e,t,n){let r=this.get(e),i=o_.setFromMatrixPosition(n.matrixWorld),a=i_.copy(t).sub(i),o=a.length();return o<1e-4?!1:(d_.set(i,a.multiplyScalar(1/o)),d_.far=o-.02,r.view.intersect(d_).length>0)}debugBraceOcclusion(e){let t=this.viewer.camera;t.updateMatrixWorld();let n=this.ghostPoint(0,new J),r=new J().setFromMatrixColumn(t.matrixWorld,0),i=new J().setFromMatrixColumn(t.matrixWorld,1),a=0;for(let[o,s]of[[0,0],[.5,0],[-.5,0],[0,.5],[0,-.5]])this.occludedBy(0,n.clone().addScaledVector(r,o*e).addScaledVector(i,s*e),t)&&a++;let o=this.bodyBox(1).getCenter(new J);return{ghost:a,enemy:this.occludedBy(0,o,t)}}worldPart(e,t,n=new J){let r=this.get(e),i=r.height,a=r.view.lift(),o=t===`center`?i*.55:t===`head`?i*.85:t===`chest`?i*.62:t===`top`?i*1.08:0;return n.set(r.pos.x,r.pos.y+o+a,r.pos.z)}screenPos(e,t=`center`){let n=this.get(e),r=n.height,i=n.view.lift(),a=t===`center`?r*.55:t===`head`?r*.85:t===`chest`?r*.62:t===`top`?r*1.08:0;$g.set(n.pos.x,n.pos.y+a+i,n.pos.z);let o=this.viewer.project($g);return{x:o.x,y:o.y}}screenBody(e){let t=this.get(e),n=t.view.bodyMatrix(),r=t.bodyHalf;$g.copy(t.bodyCenter).applyMatrix4(n);let i=this.viewer.project($g),a=i.x,o=i.y,s=0,c=0,l=0;for(let e=0;e<3;e++){t_.setFromMatrixColumn(n,e).normalize().multiplyScalar(e===0?r.x:e===1?r.y:r.z),e_.copy($g).add(t_);let t=this.viewer.project(e_),i=t.x-a,u=t.y-o;s+=i*i,c+=i*u,l+=u*u}let u=(s+l)/2+Math.sqrt(((s-l)/2)**2+c*c);return{x:a,y:o,r:Math.max(18,Math.sqrt(u))}}dodgeOriginScreen(){let e=this.dodgeOrigin;if(!e)return null;$g.set(e.pos.x,e.pos.y+e.h*.62+e.lift,e.pos.z);let t=this.viewer.project($g);return{x:t.x,y:t.y}}screenRadius(e){return this.screenBody(e).r}screenHeight(e){let t=this.screenPos(e,`feet`),n=this.screenPos(e,`head`);return Math.abs(t.y-n.y)/.85}onDodge(e,t,n,r,i){let a=this.get(e);if(e===0){let e=a.view.afterimage(a.color);e.mat.opacity=Qg.OPACITY,this.viewer.scene.add(e.group),this.ghosts.push({...e,t:0,dur:Qg.DUR}),this.dodgeOrigin={pos:a.pos.clone(),h:a.height,lift:a.view.lift()};let t=this.dodgeOriginScreen();this.afterimageLog.push({t:performance.now(),x:t.x,y:t.y,dur:Qg.DUR}),this.afterimageLog.length>64&&this.afterimageLog.shift()}if(a.anim.dodge(t.kind,t.dur,n),t.kind===`sidestep`&&e!==0){a.latStep=n*t.lateral;let e=a.view.afterimage(a.color);e.mat.opacity=.45,this.viewer.scene.add(e.group),this.ghosts.push({...e,t:0,dur:.35})}t.kind===`jump`&&(a.arc={from:r,to:i,t:0,dur:t.dur}),t.kind===`twist`&&(a.latStep=n*.15)}onDodgeLand(e,t){let n=this.get(e);if(t===`blink`){let t=n.pos.clone(),r=this.sim.worldPos(e),i=new J(r.x,0,r.z).add(this.lateral(n)),a=1+Math.round(n.data.stats.mag/2);for(let e=0;e<a;e++){let r=n.view.afterimage(n.color),o=a===1?0:e/a;r.group.position.copy(t).lerp(i,o).sub(n.pos),r.mat.opacity=.55-.3*o,this.viewer.scene.add(r.group),this.ghosts.push({...r,t:0,dur:.45+.08*e})}n.pos.copy(i)}t===`jump`&&(n.arc=null)}spawnTrail(e){let t=this.get(e),n=t.view.afterimage(t.color);n.mat.opacity=.3,this.viewer.scene.add(n.group),this.ghosts.push({...n,t:0,dur:.6})}lateral(e){let t=this.sim.laneDir();return new J(-t.z,0,t.x).multiplyScalar(e.lat)}update(e,t,n,r=t){this.viewer.fit(n),this.t+=t,this.modeT+=t,this.d=this.sim.d;for(let t of[this.player,this.enemy])this.updateCombatant(t,e);for(let t of[this.player,this.enemy]){let n=t.anim.state;if(n===`dead`||n===`knockback`||n===`turn`)continue;let i=this.other(t.side),a;a=this.mode===`cutin`&&t.side===this.cutinSide?Math.atan2(this.camPos.x-t.pos.x,this.camPos.z-t.pos.z):Math.atan2(i.pos.x-t.pos.x,i.pos.z-t.pos.z),t.anim.face(a,1-Math.exp(-(t.realTime?r:e)*9))}this.reachRing.position.set(this.player.pos.x,0,this.player.pos.z);let i=[[this.zoneRing,this.player],[this.enemyZoneRing,this.enemy]];for(let[e,t]of i)e.material.uniforms.uTime.value=this.t,e.position.set(t.pos.x,0,t.pos.z);for(let e=this.ghosts.length-1;e>=0;e--){let n=this.ghosts[e];n.t+=t;let r=n.t/n.dur;n.mat.opacity=Math.max(0,(1-r)*.55),r>=1&&(this.viewer.scene.remove(n.group),n.mat.dispose(),this.ghosts.splice(e,1))}this.updateCamera(t),this.player.view.update(this.t,this.player.realTime?r:e,this.viewer.camera),this.enemy.view.update(this.t,this.enemy.realTime?r:e,this.viewer.camera),this.viewer.render()}footR(e){return .75*Math.max(e.bodyHalf.x,e.bodyHalf.z)}giantPush(e){let t=this.other(e.side);if(!e.data.giant&&!t.data.giant)return n_.set(0,0,0);let n=this.footR(e),r=this.footR(t),i=.9*(n+r)-this.sim.d;if(i<=0)return n_.set(0,0,0);let a=this.sim.dirTo(e.side);return n_.set(-a.x,0,-a.z).multiplyScalar(i*n/(n+r))}updateCombatant(e,t){let n=this.sim.fighters[e.side],r=this.sim.worldPos(e.side);this.sim.projectiles.some(e=>e.flyAt>0&&!e.arrived)||(e.wobT+=t);let i=(n.state===`dead`?0:.3)*Math.sin(e.wobT*.7+e.latPhase);e.latStep*=Math.exp(-t*.35);let a=i+e.latStep;e.lat+=(a-e.lat)*(1-Math.exp(-t*(Math.abs(e.latStep)>.05?14:3)));let o=this.lateral(e);$g.set(r.x,0,r.z).add(o).add(this.giantPush(e));let s=e_.copy(e.pos);if(e.arc){e.arc.t+=t;let n=Math.min(1,e.arc.t/e.arc.dur),r=n<.5?2*n*n:1-(-2*n+2)**2/2;e.pos.set(e.arc.from.x+(e.arc.to.x-e.arc.from.x)*r,0,e.arc.from.z+(e.arc.to.z-e.arc.from.z)*r).add(o),n>=1&&(e.arc=null)}else{let n=1-Math.exp(-t*12);e.pos.lerp($g,n)}e.view.root.position.copy(e.pos);let c=t>1e-5?s.distanceTo(e.pos)/t:0,l=e.arc?0:Math.min(1,c/yg(e.data.stats));e.speedSmooth+=(l-e.speedSmooth)*(1-Math.exp(-t*10)),e.anim.speed=e.speedSmooth;let u=n.dodgeCd/Q.DODGE_CD;e.view.setShadow(u_.copy(l_).lerp(e.color,u*.85),.32+.22*u)}receiveFrame(e,t){let n=this.player,r=this.enemy,i=s_;i.fov=this.viewer.camera.fov,i.aspect=this.viewer.camera.aspect,i.near=this.viewer.camera.near,i.far=this.viewer.camera.far,i.updateProjectionMatrix();let a=Math.tan(ea.degToRad(i.fov)/2),o=a*i.aspect,s=ea.degToRad($.BRACE_PITCH),c=[];for(let e of[this.bodyBox(0),this.bodyBox(1)].map((e,t)=>{let n=this.get(t).height;return e.expandByVector(new J(n*$.BRACE_BOX_PAD,n*$.BRACE_BOX_PAD*.5,n*$.BRACE_BOX_PAD))}))for(let t=0;t<8;t++)c.push(new J(t&1?e.max.x:e.min.x,t&2?e.max.y:e.min.y,t&4?e.max.z:e.min.z));let l=this.ghostPoint(0,new J);c.push(l.clone());let u=new J;for(let e of c)u.add(e);u.multiplyScalar(1/c.length);let d=.5*Math.max(Bg.SIZE_MIN,Bg.SIZE_K*n.height),f=this.bodyBox(1).getCenter(new J),p=.2*r.height,m=Math.atan2(n.pos.x-r.pos.x,n.pos.z-r.pos.z),h=new J,g=new J,_=new J,v=new J,y=e=>{h.set(Math.sin(e)*Math.cos(s),Math.sin(s),Math.cos(e)*Math.cos(s)),g.copy(h).negate(),_.set(Math.cos(e),0,-Math.sin(e)),v.crossVectors(h,_).normalize();let t=c.map(e=>{let t=$g.copy(e).sub(u);return[t.dot(_),t.dot(v),t.dot(g)]}),n=e=>{let n=-1/0,r=1/0,i=-1/0,s=1/0;for(let[c,l,u]of t){let t=u+e;if(t<.5)return null;n=Math.max(n,c-$.BRACE_SIDE*o*t),r=Math.min(r,c+$.BRACE_SIDE*o*t),i=Math.max(i,l-$.BRACE_TOP*a*t),s=Math.min(s,l-$.BRACE_BOTTOM*a*t)}return{xl:n,xh:r,yl:i,yh:s,ok:n<=r&&i<=s}},r=$.BRACE_D_MIN,m=$.BRACE_D_MAX,y=!!n(r)?.ok,b=r;if(!y){if(y=!!n(m)?.ok,y)for(let e=0;e<30;e++){let e=(r+m)/2;n(e)?.ok?m=e:r=e}b=m}let x=n(b),S=(x.ok,(x.xl+x.xh)/2),C=(x.yl+x.yh)/2,w=new J().copy(u).addScaledVector(g,-b).addScaledVector(_,S).addScaledVector(v,C),T=w.clone().addScaledVector(g,10);i.position.copy(w),i.lookAt(T),i.updateMatrixWorld();let E=e_.setFromMatrixColumn(i.matrixWorld,0),D=t_.setFromMatrixColumn(i.matrixWorld,1),O=0;for(let[e,t]of f_)this.occludedBy(0,a_.copy(l).addScaledVector(E,e*d*$.BRACE_PROBE).addScaledVector(D,t*d*$.BRACE_PROBE),i)&&O++;for(let[e,t]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])this.occludedBy(0,a_.copy(f).addScaledVector(E,e*p).addScaledVector(D,t*p),i)&&(O+=9);return{pos:w,look:T,D:b,fit:y,hidden:O}},b=null,x=0;outer:for(let e of[1,-1])for(let t=$.BRACE_YAW;t<=$.BRACE_YAW_MAX+1e-6;t+=$.BRACE_YAW_STEP){let n={...y(m+e*ea.degToRad(t)),yaw:e*t};if(x++,(!b||n.hidden<b.hidden||n.hidden===b.hidden&&n.fit&&!b.fit)&&(b=n),n.hidden===0&&n.fit){b=n;break outer}}e.copy(b.pos),t.copy(b.look),this.braceInfo={yaw:b.yaw,D:+b.D.toFixed(2),fit:b.fit,hidden:b.hidden,tried:x}}shoulderFrame(e,t){let n=this.player,r=this.enemy,i=Math.max(.6,n.height),a=r.pos.x-n.pos.x,o=r.pos.z-n.pos.z,s=Math.hypot(a,o)||1,c=new J(a/s,0,o/s),l=new J(-c.z,0,c.x),u=ea.degToRad($.SHOULDER_PITCH),d=Math.tan(ea.degToRad(this.viewer.camera.fov)/2),f=u+Math.atan(Math.abs($.SHOULDER_PLAYER_Y)*d),p=s_;p.fov=this.viewer.camera.fov,p.aspect=this.viewer.camera.aspect,p.near=this.viewer.camera.near,p.far=this.viewer.camera.far,p.updateProjectionMatrix();let m=(a,o)=>{let s=a*i,d=Math.max(.4,(s-.55*n.height)/Math.tan(f));e.copy(n.pos).addScaledVector(c,-d).addScaledVector(l,o*i),e.y=s;let p=r.pos.x-e.x,m=r.pos.z-e.z,h=Math.hypot(p,m)||1;t.set(e.x+p/h*Math.cos(u)*10,e.y-Math.sin(u)*10,e.z+m/h*Math.cos(u)*10)},h=this.bodyBox(0),g=null;for(let n=$.SHOULDER_SIDE;n<=$.SHOULDER_SIDE_MAX+1e-6;n+=.25)for(let i=$.SHOULDER_UP;i<=$.SHOULDER_UP_MAX+1e-6;i+=.15){m(i,n),p.position.copy(e),p.lookAt(t),p.updateMatrixWorld();let a=t_.set(r.pos.x,r.height*1.08,r.pos.z).project(p).y,o=i_.set(r.pos.x,r.height*.55,r.pos.z).project(p),s=1/0,c=-1/0,l=-1/0;for(let e=0;e<8;e++){a_.set(e&1?h.max.x:h.min.x,e&2?h.max.y:h.min.y,e&4?h.max.z:h.min.z);let t=a_.clone().sub(p.position).dot(o_.set(0,0,-1).applyQuaternion(p.quaternion))<.05;a_.project(p),t?(s=-1/0,c=1/0,l=Math.max(l,1)):(s=Math.min(s,a_.x),c=Math.max(c,a_.x),l=Math.max(l,a_.y))}let u=o.x>s-.05&&o.x<c+.05&&o.y<l+.05,d=this.worldPart(0,`chest`,a_).project(p),f=Math.abs(d.x)<=.75&&d.y>-.92&&d.y<.4;if(f&&!g&&(g={up:i,side:n}),f&&a<=$.SHOULDER_ENEMY_TOP&&!u&&Math.abs(o.x)<.85){this.shoulderInfo={up:i,side:n,ok:!0,ec:[o.x,o.y],p:[s,c,l]};return}}let _=g??{up:$.SHOULDER_UP,side:$.SHOULDER_SIDE};m(_.up,_.side),this.shoulderInfo={up:_.up,side:_.side,ok:!1,ec:[],p:[]}}autoFrame(e,t=!1,n){let r=this.player,i=this.enemy,a=new J((r.pos.x+i.pos.x)/2,(r.height*.5+i.height*.5)/2,(r.pos.z+i.pos.z)/2),o=Math.hypot(r.pos.x-i.pos.x,r.pos.z-i.pos.z),s=r.data.giant||i.data.giant,c=ea.degToRad(ea.lerp($.ELEV_NEAR,$.ELEV_FAR,ea.clamp((o-1)/5,0,1))+(s?$.GIANT_ELEV:0)),l=n??this.desiredYaw()+this.yawOffset;t?this.yaw=l:this.yaw+=uh(l-this.yaw)*(1-Math.exp(-e/$.YAW_LAG));let u=$g.set(Math.sin(this.yaw)*Math.cos(c),Math.sin(c),Math.cos(this.yaw)*Math.cos(c)),d=e_.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),f=t_.crossVectors(u,d).normalize(),p=this.viewer.camera,m=Math.tan(ea.degToRad(p.fov)/2),h=m*Math.max(.3,p.aspect),g=1-2*$.MARGIN_X,_=1-2*$.MARGIN_Y,v=$.D_MIN,y=new J;for(let e of[r,i]){let t=e.height,n=e.view.lift(),r=e.data.giant?Math.max(.3*t,e.bodyHalf.x,e.bodyHalf.z):.3*t;for(let i=0;i<8;i++){y.set(e.pos.x+(i&1?r:-r),e.pos.y+n+(i&2?t*1.08:-.02),e.pos.z+(i&4?r:-r)).sub(a);let o=y.dot(u),s=Math.abs(y.dot(d)),c=Math.abs(y.dot(f));v=Math.max(v,o+s/(h*g),o+c/(m*_))}}if(v=Math.min(s?Math.max($.D_MAX,$.D_MAX_GIANT):$.D_MAX,v),!t){let t=$g.copy(a).addScaledVector(u,v),n=Math.atan2(r.pos.x-t.x,r.pos.z-t.z),o=Math.atan2(i.pos.x-t.x,i.pos.z-t.z),s=Math.abs(uh(n-o)),c=Math.hypot(r.pos.x-t.x,r.pos.z-t.z)<Math.hypot(i.pos.x-t.x,i.pos.z-t.z),l=Math.atan2(.35*r.height,Math.max(1,Math.hypot(r.pos.x-t.x,r.pos.z-t.z)));if(c&&s<ea.degToRad($.OCCLUDE_DEG)+l){let t=uh(n-o)>=0?1:-1;this.yawOffset+=t*$.OCCLUDE_RATE*e}else this.yawOffset*=Math.exp(-e*.6);this.yawOffset=ea.clamp(this.yawOffset,-1.2,1.2)}return{look:a,dist:v,elev:c}}desiredYaw(){let e=this.player,t=this.enemy;return Math.atan2(e.pos.x-t.pos.x,e.pos.z-t.pos.z)+ea.degToRad($.DIAG)}applyCamera(e,t,n,r){this.camPos.set(r.x+Math.sin(e)*Math.cos(t)*n,r.y+Math.sin(t)*n,r.z+Math.cos(e)*Math.cos(t)*n),this.camLook.copy(r)}updateFinishCamera(){let e=this.finishPush,t=.35*e,n=Math.cos(t),r=Math.sin(t),i=$g.set(this.finishBack.x*n+this.finishRight.x*r,0,this.finishBack.z*n+this.finishRight.z*r),a=e_.set(i.z,0,-i.x),o=this.finishH,s=ea.lerp(2.9,2.1,e)*o;this.camPos.copy(this.finishCenter).addScaledVector(i,s).addScaledVector(a,1.1*o).add(t_.set(0,ea.lerp(.55,.42,e)*o,0)),this.camLook.copy(this.finishLook).lerp(this.finishTarget,.3*e)}updateCamera(e){switch(this.mode){case`intro`:{let t=1-(1-Math.min(1,this.modeT/2))**3,n=this.autoFrame(e),r=ea.lerp(n.dist*1.7,n.dist,t),i=ea.lerp(ea.degToRad(28),n.elev,t);this.dist=r,this.lookPt.lerp(n.look,1-Math.exp(-e/$.LAG)),this.applyCamera(this.yaw,i,this.dist,this.lookPt);break}case`auto`:{let t=this.autoFrame(e),n=1-Math.exp(-e/$.LAG);this.dist+=(t.dist-this.dist)*n,this.lookPt.lerp(t.look,n),this.applyCamera(this.yaw,t.elev,this.dist,this.lookPt);break}case`cast`:break;case`brace`:{let e=this.braceSnap?1:Math.min(1,this.modeT/$.BRACE_EASE),t=e*e*(3-2*e);this.camPos.copy(this.braceFrom).lerp(this.bracePos,t),this.camLook.copy(this.braceFromLook).lerp(this.braceLook,t);break}case`cutin`:{let e=1-(1-ea.clamp(this.cutinZoom,0,1))**2;this.camPos.copy(this.cutinFrom).lerp(this.cutinTo,e),this.camLook.copy(this.cutinLook);break}case`finish`:this.updateFinishCamera();break;case`result`:{let t=this.sim.winner??0,n=this.get(t),r=this.yaw+this.modeT*.22,i=ea.degToRad(24),a=$g.set(n.pos.x,n.height*.45,n.pos.z),o=3.2+n.height*1.4,s=e_.set(a.x+Math.sin(r)*Math.cos(i)*o,a.y+Math.sin(i)*o,a.z+Math.cos(r)*Math.cos(i)*o),c=1-Math.exp(-e*2.5);this.camPos.lerp(s,c),this.camLook.lerp(a,c);break}}this.field.updateWave(e),this.viewer.camera.position.copy(this.camPos),this.field.setFogScale(Math.max(1,this.camPos.distanceTo(this.camLook)/$.D_MAX)),this.viewer.camera.lookAt(this.camLook),this.viewer.camera.updateMatrixWorld()}showZone(e,t){let n=e===0?this.zoneRing:this.enemyZoneRing;t===null?n.visible=!1:(n.visible=!0,n.scale.setScalar(t))}setZoneSolid(e,t){let n=e===0?this.zoneRing:this.enemyZoneRing;n.material.uniforms.uDash.value=+!t,n.material.uniforms.uAlpha.value=t?1:e===0?.9:.7}get cameraDistance(){return this.dist}get cameraPosition(){return this.camPos}dispose(){for(let e of this.ghosts)this.viewer.scene.remove(e.group),e.mat.dispose();this.ghosts.length=0,this.player.view.dispose(),this.enemy.view.dispose(),this.viewer.dispose()}},m_={BPM_MIN:100,BPM_MAX:150,BPM_TARGET:125,COUNT_BEATS:2};function h_(e){let t=Math.max(.2,e),n=e=>60*e/t,r=e=>e>=m_.BPM_MIN-1e-9&&e<=m_.BPM_MAX+1e-9,i;i=r(n(4))?4:r(n(8))?8:Math.abs(n(4)-m_.BPM_TARGET)<=Math.abs(n(8)-m_.BPM_TARGET)?4:8;let a=t/i;return{beatsPerAttack:i,bpm:n(i),beatLen:a,barLen:a*4,barsPerAttack:i===4?1:2}}var g_={ON:1,LEVEL_DB:-8,DUCK_DB:-12,LOOKAHEAD:.12,BAR_STRETCH_MIN:.7,BAR_STRETCH_MAX:1.4,COUNT_GAIN:.9,ROLL_GAIN:.6,ROLL_GAIN_START:.05,ROLL_FADE_IN:.3,ROLL_DRUM_HZ:150,ROLL_DRUM_DROP:.75,RISER_GAIN:.03,RISER_FROM:330,RISER_TO:660,IMPACT_DRUM_HZ:80,IMPACT_BELL_HZ:2093};function __(e){return e===`multileg`||e===`serpent`?`offbeat`:e===`floating`?`float`:`straight`}var v_=e=>10**(e/20);function y_(e,t){let n=[];for(let r=0;r<16;r++){let i=r%4==0,a=r%2==0,o=r%4==2,s=0,c=0,l=0,u=0,d=55;e===`straight`?(s=i?r===0?1:.85:0,c=a?o?.6:.3:0,l=a?0:.28,u=+(r===0||r===8),d=r===8?82.4:55):e===`offbeat`?(s=i?r===0?1:.8:0,c=o?.7:0,l=!o&&!i?.3:i&&r!==0?.2:0,u=+(r===0||r===6),d=r===6?65.4:55):(s=r===0?.9:r===8?.6:0,c=a?.35:0,l=a?0:.22,u=o?.8:0,d=r===2||r===10?110:146.8);let f=0;t&&(c<=0&&(c=Math.max(l,.26)),l=c,f=r===4||r===12?.7:0),n.push({kick:s,hat8:c,hat16:l,bass:u,bassHz:d,clap:f})}return n}var b_=class{constructor(e,t){s(this,`out`,null),s(this,`duckGain`,null),s(this,`steps`,void 0),s(this,`nominalBar`,void 0),s(this,`barLen`,void 0),s(this,`barStart`,0),s(this,`barIsHead`,!1),s(this,`stepIdx`,0),s(this,`nextHeads`,[]),s(this,`countOn`,!1),s(this,`running`,!1),s(this,`ended`,!1),s(this,`layers`,{hat16:!1,duck:!1}),s(this,`roll`,null),s(this,`tempo`,void 0),s(this,`heads`,[]),s(this,`counts`,[]),s(this,`rollLog`,[]),this.tempo=t,this.steps=y_(e,t.beatsPerAttack===8),this.nominalBar=t.barLen,this.barLen=t.barLen}get layerState(){return{...this.layers}}get isRunning(){return this.running}get ctxTime(){return _t()?.ctx.currentTime??null}get beatLen(){return this.barLen/4}get rolling(){return!!this.roll}start(e){let t=_t();!t||this.running||this.ended||(this.out=t.ctx.createGain(),this.out.gain.value=v_(g_.LEVEL_DB)*nt().bgmVolume,this.duckGain=t.ctx.createGain(),this.duckGain.gain.value=1,this.out.connect(this.duckGain),this.duckGain.connect(t.master),this.barStart=e,this.stepIdx=0,this.running=!0,this.planBar())}setNextHeads(e){this.nextHeads=e}setCount(e){this.countOn=e}setNominalBar(e){this.nominalBar=Math.max(.5,e)}setLayers(e){let t={...this.layers};Object.assign(this.layers,e);let n=_t();if(!n||!this.running)return;let r=n.ctx.currentTime;this.layers.duck!==t.duck&&this.duckGain&&(this.duckGain.gain.cancelScheduledValues(r),this.duckGain.gain.setTargetAtTime(this.layers.duck?v_(g_.DUCK_DB):1,r,.04))}setRoll(e){let t=_t();if(!t||!this.running||!this.out)return;let n=t.ctx.currentTime;if(e===null){if(!this.roll)return;let e=this.roll;if(this.roll=null,e.impactAt!==null&&e.impactAt>n+.05)for(let t of e.impactNodes)try{t.stop(0)}catch{}this.stopRiser(e,n);return}if(!this.roll){let t=this.rollSub(e-n),r=e-Math.floor((e-n)/t)*t;this.roll={impact:e,next:Math.max(r,n),start:n,riser:null,impactNodes:[],impactAt:null,lastNote:n,firstGain:-1},this.startRiser(this.roll,n);return}let r=this.roll;if(Math.abs(e-r.impact)>.01){if(r.impact=e,r.impactAt!==null&&r.impactAt>n+.003){for(let e of r.impactNodes)try{e.stop(0)}catch{}r.impactNodes=[],r.impactAt=null,this.rollLog.pop()}if(r.riser){let t=r.riser.osc.frequency,i=r.riser.gain.gain;t.cancelScheduledValues(n),t.setValueAtTime(t.value,n),i.cancelScheduledValues(n),i.setValueAtTime(i.value,n),e>n+.01&&(t.exponentialRampToValueAtTime(g_.RISER_TO,e),i.linearRampToValueAtTime(this.audible()?g_.RISER_GAIN:1e-4,e),i.linearRampToValueAtTime(1e-4,e+.03))}}}stop(e=.6){let t=_t();if(this.running=!1,this.ended=!0,!t||!this.out)return;let n=t.ctx.currentTime;this.roll&&(this.stopRiser(this.roll,n),this.roll=null),this.out.gain.cancelScheduledValues(n),this.out.gain.setValueAtTime(this.out.gain.value,n),this.out.gain.linearRampToValueAtTime(1e-4,n+e);let r=this.out,i=this.duckGain;setTimeout(()=>{try{r.disconnect(),i?.disconnect()}catch{}},(e+.2)*1e3),this.out=null,this.duckGain=null}audible(){return!!g_.ON&&nt().bgmOn&&!it()}headAhead(e,t=this.nominalBar*.25){for(let n of this.nextHeads)if(n>e+t)return n;return null}headNear(e,t){for(let n of this.nextHeads)if(Math.abs(n-e)<t)return n;return null}planBar(){let e=this.headAhead(this.barStart),t=this.nominalBar;if(e!==null){let n=Math.max(1,Math.round((e-this.barStart)/this.nominalBar)),r=(e-this.barStart)/n;r>=this.nominalBar*g_.BAR_STRETCH_MIN&&r<=this.nominalBar*g_.BAR_STRETCH_MAX&&(t=r)}this.barLen=t}tick(){let e=_t();if(!e||!this.running||!this.out)return;let t=e.ctx.currentTime;if(this.barStart+this.stepIdx*(this.barLen/16)<t-.25){let e=Math.ceil((t-this.barStart)/this.barLen);this.barStart+=e*this.barLen,this.stepIdx=0,this.barIsHead=!1,this.planBar()}for(let n=0;n<64;n++){let n=this.barLen/16;if(this.stepIdx>=16){let e=this.barStart+this.barLen,t=this.headNear(e,n*.5)??this.nextHeads.find(t=>t>e&&t<e+n*2)??null;this.barIsHead=t!==null,this.barStart=t??e,this.stepIdx=0,this.planBar(),n=this.barLen/16}let r=this.headAhead(this.barStart,n*.5);if(r!==null&&this.stepIdx>0&&this.stepIdx<16){let e=Math.max(1,Math.round((r-this.barStart)/this.barLen)),t=this.barStart+(r-this.barStart)/e;if(Math.abs(t-(this.barStart+this.barLen))>.002){let e=this.barStart+(this.stepIdx-1)*n,r=(t-e)/(16-this.stepIdx+1);r>0&&Math.abs(r/n-1)<.25&&(this.barStart=e-(this.stepIdx-1)*r,this.barLen=r*16,n=r)}}if(this.stepIdx===0&&this.barIsHead){let e=this.headNear(this.barStart,n);e!==null&&e!==this.barStart&&(this.barStart=e,this.planBar(),n=this.barLen/16)}let i=this.barStart+this.stepIdx*n,a=this.headAhead(this.barStart,n*.5);if(a!==null&&this.stepIdx>0&&i>=a-n*.5&&(this.barStart=a,this.stepIdx=0,this.barIsHead=!0,this.planBar(),n=this.barLen/16,i=this.barStart),i>t+g_.LOOKAHEAD)break;if(this.stepIdx===0&&(this.heads.push(i),this.heads.length>64&&this.heads.shift()),i>=t-.01){let r=Math.max(i,t),a=this.audible();if(a&&this.play(this.steps[this.stepIdx],r,e.ctx,e.noise),this.countOn){let t=this.barLen/4,o=this.headAhead(i,n*.5);if(o!==null){let s=(o-i)/t,c=Math.round(s);c>=1&&c<=m_.COUNT_BEATS&&Math.abs(s-c)*t<n*.25&&this.countHit(c,r,o,e.ctx,e.noise,a)}}}this.stepIdx++}this.roll&&this.tickRoll(t,e.ctx,e.noise)}countHit(e,t,n,r,i,a){if(this.counts.push({k:e,at:t,head:n}),this.counts.length>96&&this.counts.shift(),!a)return;let o=this.out,s=[0,330,262][e],c=[0,2400,1900][e];i&&this.snare(r,o,i,t,g_.COUNT_GAIN,c,s)}rollSub(e){let t=this.barLen/4;return e>2*t?t/2:e>t?t/4:t/8}tickRoll(e,t,n){let r=this.roll,i=this.audible();for(let a=0;a<64&&r.next<e+g_.LOOKAHEAD&&r.next<r.impact-.004;a++){if(r.next>=e-.01){let a=Math.max(.05,r.impact-r.start),o=Math.min(1,Math.max(0,(r.next-r.start)/a)),s=Math.min(1,Math.max(0,(r.next-r.start)/g_.ROLL_FADE_IN)),c=(g_.ROLL_GAIN_START+(g_.ROLL_GAIN-g_.ROLL_GAIN_START)*o*o)*s;r.firstGain<0&&(r.firstGain=c),i&&this.taiko(t,this.out,n,Math.max(r.next,e),c,g_.ROLL_DRUM_HZ,.09),r.lastNote=r.next}let a=r.impact-r.next,o=this.rollSub(a);r.next=r.impact-(Math.ceil(a/o-1e-6)-1)*o}if(r.impactAt===null&&r.impact<e+g_.LOOKAHEAD){let a=Math.max(r.impact,e);r.impactAt=a,this.rollLog.push({impact:r.impact,cymbalAt:a,lastNote:r.lastNote,start:r.start,firstGain:+r.firstGain.toFixed(4),sound:`taiko+bell`}),this.rollLog.length>32&&this.rollLog.shift(),i&&(r.impactNodes=[...this.taiko(t,this.out,n,a,1.1,g_.IMPACT_DRUM_HZ,.45),...this.bell(t,this.out,a,.5)])}}startRiser(e,t){let n=_t();if(!n||!this.out||e.impact<=t+.05)return;let r=n.ctx.createOscillator(),i=n.ctx.createBiquadFilter(),a=n.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(g_.RISER_FROM,t),r.frequency.exponentialRampToValueAtTime(g_.RISER_TO,e.impact),i.type=`lowpass`,i.frequency.value=1800,i.Q.value=.5,a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(this.audible()?g_.RISER_GAIN:1e-4,e.impact),a.gain.linearRampToValueAtTime(1e-4,e.impact+.03),r.connect(i),i.connect(a),a.connect(this.out),r.start(t),r.stop(e.impact+3),e.riser={osc:r,gain:a,filt:i}}stopRiser(e,t){if(!e.riser)return;let{osc:n,gain:r}=e.riser;e.riser=null,r.gain.cancelScheduledValues(t),r.gain.setValueAtTime(Math.min(r.gain.value,g_.RISER_GAIN),t),r.gain.linearRampToValueAtTime(1e-4,t+.04);try{n.stop(t+.06)}catch{}}play(e,t,n,r){let i=this.out;e.kick>0&&this.kick(n,i,t,e.kick);let a=this.layers.hat16?Math.max(e.hat8,e.hat16):e.hat8;a>0&&r&&this.hat(n,i,r,t,a),e.clap>0&&r&&this.clap(n,i,r,t,e.clap),e.bass>0&&this.bass(n,i,t,e.bassHz,e.bass)}kick(e,t,n,r){let i=e.createOscillator(),a=e.createGain();return i.type=`sine`,i.frequency.setValueAtTime(140,n),i.frequency.exponentialRampToValueAtTime(45,n+.12),a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.55*r,n+.003),a.gain.exponentialRampToValueAtTime(1e-4,n+.22),i.connect(a),a.connect(t),i.start(n),i.stop(n+.25),i}hat(e,t,n,r,i){let a=e.createBufferSource();a.buffer=n;let o=e.createBiquadFilter();o.type=`highpass`,o.frequency.value=7e3;let s=e.createGain();s.gain.setValueAtTime(1e-4,r),s.gain.linearRampToValueAtTime(.16*i,r+.002),s.gain.exponentialRampToValueAtTime(1e-4,r+.04),a.connect(o),o.connect(s),s.connect(t),a.start(r,Math.random()*.3),a.stop(r+.06)}snare(e,t,n,r,i,a,o,s=!1){let c=e.createBufferSource();c.buffer=n;let l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.value=a,l.Q.value=.9;let u=e.createGain(),d=s?.05:.12;u.gain.setValueAtTime(1e-4,r),u.gain.linearRampToValueAtTime(.32*i,r+.002),u.gain.exponentialRampToValueAtTime(1e-4,r+d),c.connect(l),l.connect(u),u.connect(t),c.start(r,Math.random()*.3),c.stop(r+d+.02);let f=e.createOscillator(),p=e.createGain();f.type=`triangle`,f.frequency.setValueAtTime(o*1.25,r),f.frequency.exponentialRampToValueAtTime(o,r+.03),p.gain.setValueAtTime(1e-4,r),p.gain.linearRampToValueAtTime((s?.08:.22)*i,r+.002),p.gain.exponentialRampToValueAtTime(1e-4,r+(s?.04:.09)),f.connect(p),p.connect(t),f.start(r),f.stop(r+.12)}clap(e,t,n,r,i){for(let a=0;a<3;a++){let o=r+a*.01,s=e.createBufferSource();s.buffer=n;let c=e.createBiquadFilter();c.type=`bandpass`,c.frequency.value=1200,c.Q.value=1.2;let l=e.createGain(),u=a===2?.1:.012;l.gain.setValueAtTime(1e-4,o),l.gain.linearRampToValueAtTime(.3*i,o+.001),l.gain.exponentialRampToValueAtTime(1e-4,o+u),s.connect(c),c.connect(l),l.connect(t),s.start(o,Math.random()*.3),s.stop(o+u+.02)}}taiko(e,t,n,r,i,a,o){let s=e.createOscillator(),c=e.createGain();s.type=`sine`,s.frequency.setValueAtTime(a*1.15,r),s.frequency.exponentialRampToValueAtTime(a*g_.ROLL_DRUM_DROP,r+o*.8),c.gain.setValueAtTime(1e-4,r),c.gain.linearRampToValueAtTime(.5*i,r+.004),c.gain.exponentialRampToValueAtTime(1e-4,r+o),s.connect(c),c.connect(t),s.start(r),s.stop(r+o+.05);let l=[s];if(n){let a=e.createBufferSource();a.buffer=n;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=900;let s=e.createGain();s.gain.setValueAtTime(1e-4,r),s.gain.linearRampToValueAtTime(.06*i,r+.002),s.gain.exponentialRampToValueAtTime(1e-4,r+.03),a.connect(o),o.connect(s),s.connect(t),a.start(r,Math.random()*.3),a.stop(r+.05),l.push(a)}return l}bell(e,t,n,r){let i=[];for(let[a,o]of[[1,.5],[2.76,.18],[5.4,.08]]){let s=e.createOscillator(),c=e.createGain();s.type=`sine`,s.frequency.value=g_.IMPACT_BELL_HZ*a,c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(.25*r*o,n+.003),c.gain.exponentialRampToValueAtTime(1e-4,n+.35),s.connect(c),c.connect(t),s.start(n),s.stop(n+.4),i.push(s)}return i}bass(e,t,n,r,i){let a=e.createOscillator(),o=e.createBiquadFilter(),s=e.createGain();a.type=`square`,a.frequency.value=r,o.type=`lowpass`,o.frequency.value=420;let c=this.barLen/8;s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(.16*i,n+.006),s.gain.setValueAtTime(.16*i,n+c*.6),s.gain.exponentialRampToValueAtTime(1e-4,n+c),a.connect(o),o.connect(s),s.connect(t),a.start(n),a.stop(n+c+.05)}},x_=`mb.tuning.v1`;function S_(){try{let e=localStorage.getItem(x_);return e?JSON.parse(e):{}}catch{return{}}}function C_(e){let t=S_();for(let n of e){let e=t[`${n.group}.${n.key}`];typeof e==`number`&&Number.isFinite(e)&&(n.obj[n.key]=e)}}function w_(e,t){let n=S_(),r=[],i=[];for(let t of e){let e=H(`input`,{type:`range`,min:String(t.min),max:String(t.max),step:String(t.step),style:`flex:1`});e.value=String(t.obj[t.key]);let a=H(`span`,{class:`small`,style:`width:52px; text-align:right`},T_(t.obj[t.key]));e.addEventListener(`input`,()=>{let r=+e.value;t.obj[t.key]=r,a.textContent=T_(r),n[`${t.group}.${t.key}`]=r,localStorage.setItem(x_,JSON.stringify(n)),t.onChange?.(r)}),i.push({f:t,input:e,out:a}),r.push(H(`label`,{class:`row small`,style:`gap:8px`},H(`span`,{style:`width:150px; color:var(--sub)`},t.label),e,a))}let a=H(`button`,{class:`btn sm ghost`},`既定に戻す`);return a.addEventListener(`click`,()=>{localStorage.removeItem(x_);for(let e of Object.keys(n))delete n[e];for(let{f:e,input:n,out:r}of i){let i=t[`${e.group}.${e.key}`];typeof i==`number`&&(e.obj[e.key]=i,n.value=String(i),r.textContent=T_(i),e.onChange?.(i))}}),H(`details`,{class:`card flat`,style:`padding:10px 14px`},H(`summary`,{class:`small sub`,style:`cursor:pointer`},`数値の調整(デバッグ。値は端末に残る)`),H(`div`,{class:`col`,style:`gap:6px; margin-top:8px`},...r,H(`div`,{class:`row`},a)))}function T_(e){return Number.isInteger(e)?String(e):e.toFixed(2).replace(/0+$/,``).replace(/\.$/,``)}var E_={TAP_MS:250,TAP_PX:24,CAST_START_PX:40,CAST_START_PX_WINDOW:80,CAST_CANCEL_PX:60,CAST_CANCEL_MS:350,CAST_IDLE_MS:400,MAX_STROKES:6,OFFSET:.04},D_={FLASH:.1,CUTIN_CHARGE:.8,CUTIN_CHARGE_LOW:.4,CUTIN_DRAW:.6,CUTIN_FID:.35,CUTIN_FREEZE:.15,CUTIN_RELEASE:.4,CUTIN_NPC:1,CUTIN_MAX:3.4,FINISH_CHARGE:1.2,FINISH_CHARGE_SCALE:.15,FINISH_BRINK:.3,FINISH_BRINK_SCALE:.03,FINISH_HITSTOP:.3,FINISH_FLY:1,FINISH_FLY_SCALE:.3,FINISH_MAX:7,MISS_HITSTOP:.08,JUST_SLOW:.15,JUST_SLOW_SCALE:.35,FINISH_SIGN_PRE:.45,HOVER_VANISH:.15,BRACE_HOLD:.5},O_={TARGET_FRAC:.258,START_K:2.2,CAST_BASE:1.4,CAST_K:1.8,GLOW_SCALE:1.12,GLOW_FILL:.25,GLOW_FADE:.1,GRAZE:.35},k_=[{group:`balance`,obj:Q,key:`INTERVAL_NUM`,label:`攻撃間隔の分子`,min:2,max:4.5,step:.1},{group:`balance`,obj:Q,key:`ATK_BASE`,label:`通常攻撃 基本`,min:2,max:12,step:1},{group:`balance`,obj:Q,key:`ATK_PER`,label:`通常攻撃 力あたり`,min:1,max:5,step:1},{group:`balance`,obj:Q,key:`SIGN_K`,label:`印の係数`,min:30,max:150,step:5},{group:`balance`,obj:Q,key:`CAST_TAKEN_MULT`,label:`詠唱中の被ダメ倍率`,min:1,max:2.5,step:.1},{group:`balance`,obj:Q,key:`ZONE_BASE`,label:`ゾーン 基本`,min:1,max:3,step:.1},{group:`balance`,obj:Q,key:`ZONE_PER`,label:`ゾーン 魔法あたり`,min:.1,max:.8,step:.05},{group:`balance`,obj:Q,key:`ZONE_OUT_MULT`,label:`ゾーン外の係数`,min:.1,max:1,step:.05},{group:`balance`,obj:Q,key:`TELEGRAPH_BASE`,label:`予兆 基本(秒)`,min:.5,max:1.5,step:.05},{group:`balance`,obj:Q,key:`TELEGRAPH_PER`,label:`予兆 素早さあたり(−)`,min:0,max:.2,step:.01},{group:`balance`,obj:Q,key:`PERFECT_WINDOW`,label:`完全回避の窓(±秒)`,min:.04,max:.3,step:.01},{group:`balance`,obj:Q,key:`GRAZE_WINDOW`,label:`カスりの窓(±秒)`,min:.1,max:.6,step:.02},{group:`balance`,obj:Q,key:`LATE_PERFECT`,label:`当たったあとも完全(1)/カスり(0)`,min:0,max:1,step:1},{group:`input`,obj:E_,key:`OFFSET`,label:`入力の補正(秒)`,min:0,max:.15,step:.01,onChange:e=>Dn({inputOffset:e})},{group:`balance`,obj:Q,key:`GRAZE_DMG_MULT`,label:`カスりの被ダメ倍率`,min:0,max:1,step:.05},{group:`balance`,obj:Q,key:`DODGE_CD`,label:`回避クールダウン`,min:.5,max:2.5,step:.1},{group:`balance`,obj:Q,key:`JUST_WINDOW`,label:`ジャストの窓(±秒)`,min:.04,max:.3,step:.01},{group:`balance`,obj:Q,key:`JUST_GRAZE_WINDOW`,label:`印のカスりの窓(±秒)`,min:.1,max:.5,step:.01},{group:`balance`,obj:Q,key:`JUST_DMG_MULT`,label:`ジャストの被ダメ倍率`,min:0,max:1,step:.05},{group:`balance`,obj:Q,key:`GAUGE_DODGE`,label:`ゲージ 回避成功`,min:10,max:50,step:5},{group:`balance`,obj:Q,key:`GAUGE_JUST`,label:`ゲージ ジャスト`,min:10,max:60,step:5},{group:`balance`,obj:Q,key:`GAUGE_WHIFF`,label:`ゲージ 避けられた側`,min:0,max:20,step:1},{group:`balance`,obj:Q,key:`HIT_RETREAT`,label:`被弾後に下がる確率`,min:0,max:1,step:.1},{group:`balance`,obj:Q,key:`BEAT_JITTER`,label:`拍のゆらぎ(±)`,min:0,max:.2,step:.01},{group:`balance`,obj:Q,key:`LUNGE_MAX`,label:`踏み込みで詰める距離`,min:0,max:4,step:.1},{group:`balance`,obj:Q,key:`NPC_DODGE_BASE`,label:`NPC 回避 基本`,min:0,max:.5,step:.05},{group:`balance`,obj:Q,key:`SPEED_BASE`,label:`移動速度 基本`,min:.3,max:1.6,step:.05},{group:`balance`,obj:Q,key:`D_MAX`,label:`距離の上限`,min:3,max:10,step:.5},{group:`camera`,obj:$,key:`DIAG`,label:`カメラ 斜め(度)`,min:0,max:60,step:2},{group:`camera`,obj:$,key:`ELEV_NEAR`,label:`カメラ 仰角 近`,min:30,max:60,step:1},{group:`camera`,obj:$,key:`ELEV_FAR`,label:`カメラ 仰角 遠`,min:35,max:70,step:1},{group:`camera`,obj:$,key:`D_MIN`,label:`カメラ 距離の下限`,min:4,max:10,step:.25},{group:`camera`,obj:$,key:`D_MAX`,label:`カメラ 距離の上限`,min:8,max:16,step:.5},{group:`input`,obj:E_,key:`TAP_MS`,label:`タップ(ms 以内)`,min:100,max:400,step:10},{group:`input`,obj:E_,key:`TAP_PX`,label:`タップ(px 未満)`,min:6,max:40,step:2},{group:`input`,obj:E_,key:`CAST_START_PX`,label:`詠唱開始(px)`,min:10,max:120,step:5},{group:`input`,obj:E_,key:`CAST_START_PX_WINDOW`,label:`詠唱開始 受付中(px)`,min:20,max:200,step:5},{group:`input`,obj:E_,key:`CAST_CANCEL_PX`,label:`取り消し 総長(px 未満)`,min:0,max:150,step:5},{group:`timing`,obj:D_,key:`FINISH_CHARGE_SCALE`,label:`決着のスロー倍率`,min:.05,max:.5,step:.05},{group:`timing`,obj:D_,key:`CUTIN_CHARGE`,label:`カットインのタメ(秒)`,min:.2,max:1.5,step:.1},{group:`audio`,obj:g_,key:`ON`,label:`BGM(1=ON / 0=OFF)`,min:0,max:1,step:1,onChange:e=>Dn({bgmOn:e>=.5})}],A_=Object.fromEntries(k_.map(e=>[`${e.group}.${e.key}`,e.obj[e.key]]));function j_(e,t,n,i){let a=H(`div`,{class:`screen`});e.append(a);let o=null;C_(k_);{let e=En();E_.OFFSET=e.inputOffset,g_.ON=+!!e.bgmOn}let s=()=>{Ye(a),a.classList.add(`scroll`);let e=H(`div`,{class:`npc-grid`});for(let t of ag){let n=t.monster,i=H(`div`,{class:`card mcard`,style:`cursor:pointer`},H(`div`,{class:`thumb`,style:`background:${n.color}; display:grid; place-items:center; color:#fff; font-weight:700`},t.label.slice(0,1)),H(`div`,{class:`grow`},H(`h2`,{},`${n.name} `,H(`span`,{class:`chip`},t.label)),H(`p`,{class:`sub small`},t.desc),H(`p`,{class:`small sub`},r(`battle.npc1`,{skeleton:Ve[n.skeleton],hp:qe(n.stats.hp),spd:qe(n.stats.spd)})),H(`p`,{class:`small sub`},r(`battle.npc2`,{atk:qe(n.stats.atk),mag:qe(n.stats.mag),zone:vg(n.stats).toFixed(1)}))));i.addEventListener(`click`,()=>c(t)),e.append(i)}a.append(H(`div`,{class:`pad col`},H(`h1`,{},r(`battle.selectTitle`)),H(`p`,{class:`sub`},r(`battle.selectLead`,{name:t.name})),t.sign?null:H(`div`,{class:`notice`},r(`battle.noSignNotice`)),e,H(`div`,{class:`row`},H(`button`,{class:`btn ghost`,onClick:()=>i({name:`card`,id:t.id})},r(`common.toCard`))),w_(k_,A_)))},c=(e,n)=>{ot(),o?.(),a.classList.remove(`scroll`),Ye(a),o=N_(a,t,e,i,()=>c(e),s,n??null,t=>c(e,t))},l=n?ag.find(e=>e.key===n):void 0;return l?c(l):s(),{unmount(){o?.(),a.remove()}}}function M_(){try{let e=new Uint32Array(1);return crypto.getRandomValues(e),e[0]>>>0}catch{return Math.floor(Math.random()*4294967296)>>>0}}function N_(e,t,n,i,a,o,s=null,c=()=>{}){let l=typeof window<`u`?window.__mbTestNpc:void 0;l&&(n={...n,monster:{...n.monster,...l,stats:n.monster.stats}});let u=En(),d=u.reduceFlashing?.3:1,f=H(`div`,{class:`stage`}),p=H(`canvas`,{class:`layer`,style:`pointer-events:none`}),m=H(`canvas`,{class:`layer`}),h=H(`canvas`,{class:`layer`,style:`pointer-events:none`});f.append(p,m,h);let g=H(`div`,{class:`layer input`}),_=H(`div`,{class:`pulse`,style:`--pulse-color:${t.color}`});e.style.background=`#FFFFFF`,e.append(f,_,g);let v=H(`i`,{style:`width:100%`}),b=H(`i`,{style:`width:0%; background:${n.monster.color}`}),x=H(`i`,{style:`width:100%`}),S=H(`i`,{style:`width:0%`}),C=H(`div`,{class:`gauge`},S),w=H(`div`,{class:`hud`,style:`top: calc(var(--sat) + 14px); padding: 0 18px`},H(`div`,{class:`row`,style:`justify-content:flex-end`},H(`div`,{style:`width:62%`},H(`div`,{class:`row small`,style:`justify-content:space-between`},H(`span`,{class:`chip`},n.label),H(`b`,{},n.monster.name)),H(`div`,{class:`hpbar enemy`},v),H(`div`,{class:`gauge enemy`},b)))),T=H(`div`,{class:`hint dark`,style:`top: calc(var(--sat) + 76px); font-size:15px`},``),E=H(`div`,{class:`hud`,style:`bottom: calc(var(--sab) + 14px); padding: 0 18px`},H(`div`,{class:`row`,style:`align-items:flex-end`},H(`div`,{class:`grow`},H(`div`,{class:`row small`,style:`justify-content:space-between`},H(`b`,{},t.name),H(`span`,{class:`sub`},t.sign?r(`battle.gauge`):r(`battle.gaugeNoSign`))),H(`div`,{class:`hpbar`},x),H(`div`,{style:`height:6px`}),C))),D=H(`button`,{class:`btn sm ghost`,style:`position:absolute; left:14px; top: calc(var(--sat) + 12px); background:#fff`},r(`battle.quit`));e.append(w,T,E,D);let O=t.sign?Ft(t.sign):0,k=!!s,A=s?Pg(s):new Eg({name:t.name,stats:t.stats,skeleton:t.skeleton,isPlayer:!0,signComplexity:Math.round(O*1e3)/1e3},{name:n.monster.name,stats:n.monster.stats,skeleton:n.monster.skeleton,isPlayer:!1,signComplexity:Math.round(Ft(n.sign)*1e3)/1e3,npcFidelity:.7,npcCastSeconds:Q.NPC_CAST_SECONDS},{seed:M_(),inputOffset:E_.OFFSET,controllers:[null,new Ag]}),j=new Date().toISOString(),ee=!1,M=0,te=0,ne=-1/0,re=()=>{let e=[];for(;(A.tick+1)*.008333333333333333<=M+1e-9&&!A.ended;)e.push(...A.step());return e},ie=()=>{let e=ye>0?0:ve*(Se>0?D_.JUST_SLOW_SCALE:1),t=Math.min(.05,Math.max(0,(performance.now()-Ue)/1e3));return M=Math.max(M,te+t*e),Math.round((M-A.inputOffset*e)*1e3)},ae=(e,t,n)=>{let r=ie();Ze.push(...re());let i=n??r;return i<ne&&(i=ne),ne=i,A.input({ms:i,side:0,kind:e,value:t})},N=new p_(m,t,n.monster,A);N.player.anim.telegraphGlow=!1;let oe=h.getContext(`2d`),se=p.getContext(`2d`),P=new Dh(oe),ce=new Vg(N),F=new b_(__(n.monster.skeleton),h_(A.beatInfo(1).interval)),le=[],ue=[],de=[],fe=new Set,pe=0,me=-1,he=new Ot,ge=`intro`,_e=0,ve=1,ye=0,be=1/60,xe=0,Se=0,I=[],Ce=null,we=16.7,Te=null,L=null,Ee=[],R=0,z=0,De=!1,Oe=[],ke=null,Ae=0,je=0,Me,Ne=0,Pe=0,B=null,Fe=[],Ie=0,Le=[],V=null,Re=!1,ze=0,Be=0,Ve=!1,He=0,Ue=performance.now(),We=!1,Ge=!1,Ke=390,qe=844,Je=t.color,Xe=n.monster.color,U=!1,Ze=[],Qe=[!1,!1],$e=!1,et=[],tt=0,nt=()=>!!V&&V.kind===`finish`&&!!V.slow,rt=()=>{let e=A.incoming(0);return e&&e.flyAt>0?e:null},it=()=>A.projectiles.some(e=>e.from===0&&!e.arrived),at=()=>{let e=rt();e||it()?N.setMode(`brace`,{snap:!!e&&e.t>=e.flyAt,receive:!!e}):N.setMode(`auto`)},st=e=>{T.textContent!==e&&(T.textContent=e)},ct=()=>ge===`fight`&&!De&&!V&&!Le.length&&!!t.sign&&A.fighters[0].gauge>=Q.GAUGE_FULL&&A.fighters[0].state!==`dead`,lt=()=>!k&&ge===`fight`&&!We&&(!V||V.kind===`finish`&&!!A.incoming(0)),ut=()=>!!A.telegraphInfo(1)?.open,dt=()=>A.ringRemain(1)!==null||(()=>{let e=A.incoming(0);return!!e&&!e.arrived})(),ft=()=>{let e=A.fighters[0],t=A.fighters[1];v.style.width=`${Math.max(0,(t.hp+R)/t.maxHp*100)}%`,b.style.width=`${Math.min(100,t.gauge/Q.GAUGE_FULL*100)}%`,x.style.width=`${Math.max(0,(e.hp+z)/e.maxHp*100)}%`,S.style.width=`${Math.min(100,e.gauge/Q.GAUGE_FULL*100)}%`,_.classList.toggle(`on`,ct())},pt=()=>{let t=C.getBoundingClientRect(),n=e.getBoundingClientRect(),r=Math.min(1,A.fighters[0].gauge/Q.GAUGE_FULL);return{x:t.left-n.left+t.width*Math.max(.08,r),y:t.top-n.top+t.height/2}};window.__mbBattle={sim:A,scene:N,get phase(){return ge},get casting(){return De},get current(){return V?{kind:V.kind,side:V.side,t:V.t}:null},get queue(){return Le.map(e=>e.kind)},get timeScale(){return ve},get hitStop(){return ye},get justSlow(){return Se},get stopLog(){return[...I]},get glowLog(){return[...Ee]},get afterimageLog(){return[...N.afterimageLog]},get slashLog(){return[...Xt]},get targetR(){return Yt()},get targetPeak(){return L&&!L.done?xe:0},get mode(){return N.mode},debugCast(e=1){Mt(e)},get sfx(){return[...yt]},get bgm(){return{heads:[...F.heads],contacts:[...le],now:_t()?.ctx.currentTime??null,layers:F.layerState,running:F.isRunning,tempo:F.tempo,beatLen:F.beatLen,counts:[...F.counts],rollLog:[...F.rollLog],ticks:[...ue],signLands:[...de],rolling:F.rolling}},meteors:ce,tap(){return Tt()}},N.player.anim.play(`summon`),N.enemy.anim.play(`summon`),N.player.anim.summonProgress=0,N.enemy.anim.summonProgress=0;let mt=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}},ht=(e,t)=>({x:e/Ke,y:t/Ke,t:Math.round(performance.now()-Ae)}),gt=()=>{Pe&&(clearTimeout(Pe),Pe=0)},vt=(e,t,n)=>{W.extra.touch=`${e.toFixed(0)}ms ${t.toFixed(0)}px → ${n}`},xt=e=>{!De||Oe.length>=E_.MAX_STROKES||(gt(),Oe.length===0&&!ke&&(Ae=performance.now()),ke=e.map(e=>ht(e.x,e.y)),ke.length||(ke=null))},St=(e,t)=>{if(!ke)return;let n=ht(e,t),r=ke[ke.length-1];Math.hypot(n.x-r.x,n.y-r.y)<.002||ke.push(n)},Ct=()=>{ke&&(ke.length===1&&ke.push({...ke[0],x:ke[0].x+.001,t:ke[0].t+1}),Oe.push(ke),ke=null,gt(),Oe.length===1&&Ne<E_.CAST_CANCEL_PX&&performance.now()-je<E_.CAST_CANCEL_MS?(Ze.push(...ae(`cast-cancel`).events),kt(),vt(performance.now()-je,Ne,`cancel→tap`),wt(`cast cancelled (too short) → tap`),Tt(Me)):Oe.length>=E_.MAX_STROKES?jt(Oe):Pe=window.setTimeout(()=>{Pe=0,De&&Oe.length>0&&jt(Oe)},E_.CAST_IDLE_MS))},Tt=e=>{if(!lt()||De)return;let t=ae(`tap`,void 0,e);Ze.push(...t.events);let n=t.result;return n===`perfect`?(bt(`evade-perfect`,{step:pe}),pe=Math.min(pe+1,9)):n===`early`||n===`whiff`?pe=0:n===`graze`||n===`just-graze`?bt(`evade-graze`):n===`just`&&bt(`evade-just`),n!==`ignored`&&wt(`tap → ${n} (enemy ${A.fighters[1].state})`),n};g.addEventListener(`pointerdown`,e=>{if(ot(),!lt()||B)return;let{x:t,y:n}=mt(e);B={id:e.pointerId,x0:t,y0:n,t0:performance.now(),pts:[{x:t,y:n}],len:0,castStarted:!1,ms:ie(),tapped:!1},g.setPointerCapture?.(e.pointerId),e.preventDefault(),De?(B.castStarted=!0,xt([{x:t,y:n}])):dt()&&(B.tapped=!0,vt(0,0,`tap(down)`),Tt(B.ms))}),g.addEventListener(`pointermove`,e=>{if(!B||e.pointerId!==B.id)return;let{x:t,y:n}=mt(e),r=B.pts[B.pts.length-1];if(B.len+=Math.hypot(t-r.x,n-r.y),B.pts.push({x:t,y:n}),B.tapped)e.preventDefault();else{if(De)B.castStarted?St(t,n):(B.castStarted=!0,xt(B.pts)),Ne=B.len;else if(B.len>=E_.TAP_PX){let e=ut()?E_.CAST_START_PX_WINDOW:E_.CAST_START_PX;B.len>=e&&ct()&&At()?(Dt(),je=B.t0,Me=B.ms,Ne=B.len,B.castStarted=!0,Ae=B.t0,xt(B.pts),vt(performance.now()-B.t0,B.len,`cast`),Fe=[]):ct()||(Fe=B.pts.slice(),Ie=1)}e.preventDefault()}});let Et=e=>{if(!B||e.pointerId!==B.id)return;let t=B;B=null;let n=performance.now()-t.t0;t.tapped||(t.castStarted||De?Ct():(vt(n,t.len,n<=E_.TAP_MS&&t.len<E_.TAP_PX?`tap`:`tap(long)`),Tt(t.ms)))};g.addEventListener(`pointerup`,Et),g.addEventListener(`pointercancel`,Et);let Dt=()=>{De=!0,Oe=[],ke=null,N.setMode(`cast`),N.player.anim.play(`cast`),st(r(`battle.drawPrompt`))},kt=()=>{De=!1,gt(),Oe=[],ke=null,N.mode===`cast`&&at(),A.fighters[0].state===`idle`&&N.player.anim.state===`cast`&&N.player.anim.play(`idle`)},At=()=>{let e=ae(`cast-start`);return Ze.push(...e.events),e.result===`now`},jt=e=>{if(!De||A.ended||We)return;let n=t.sign,r=Pt(n,e),i=Math.round(r.similarity*1e3)/1e3,a=ae(`cast-finish`,i).events,o=a.find(e=>e.type===`sign-fire`);kt(),st(``),o&&(wt(`sign fired: fidelity=${(r.similarity*100).toFixed(0)}% d=${r.distance.toFixed(3)} zone=${o.inZone} dmg=${o.damage} lethal=${o.lethal}`),R+=o.damage,Nt(Rt({side:0,fidelity:r.similarity,inZone:o.inZone,dmg:o.damage,drawn:e,reg:n,penalty:r.strokePenalty,npc:!1})),o.lethal&&Nt(Bt(0,`sign`)),Gt(a.filter(e=>e.type!==`sign-fire`)))},Mt=e=>{if(ge!==`fight`||De||!At())return;Dt();let n=Array.from({length:24},(e,t)=>{let n=-Math.PI/2+t/23*Math.PI*2;return{x:.5+.2*Math.cos(n),y:.6+.2*Math.sin(n),t:t*20}}),r=(t.sign??[n]).map(t=>t.map((t,n)=>({...t,x:t.x+(1-e)*.12*Math.sin(n),y:t.y+(1-e)*.12*Math.cos(n*1.3)})));jt(r)},Nt=e=>{let t=Le.length;if(e.kind===`cutin`&&e.side===0)for(t=0;t<Le.length&&Le[t].kind===`cutin`&&Le[t].side===0;)t++;else if(e.kind===`cutin`)for(t=0;t<Le.length&&Le[t].kind===`cutin`;)t++;Le.splice(t,0,e)},It=()=>{V&&(V.end(),V=null,!Le.length&&ge===`fight`&&at())},Lt=e=>{if(!V&&Le.length&&(V=Le.shift(),V.t=0,V.start(),wt(`cinematic start: ${V.kind} side=${V.side}`)),V){V.t+=e;let t=V.update(e);(t||V.t>V.maxDur)&&(t||wt(`cinematic timeout: ${V.kind}`),It())}},Rt=e=>{let t=e.side===0?Je:Xe,n=e.fidelity<.6,r=D_.FLASH+D_.CUTIN_CHARGE+D_.CUTIN_DRAW+D_.CUTIN_FID+D_.CUTIN_FREEZE+D_.CUTIN_RELEASE,i=e.npc?D_.CUTIN_NPC/r:1,a=D_.FLASH*i,o=(n?D_.CUTIN_CHARGE_LOW:D_.CUTIN_CHARGE)*i,s=D_.CUTIN_DRAW*i,c=(e.npc?.05:D_.CUTIN_FID)*i,l=D_.CUTIN_FREEZE*i,u=D_.CUTIN_RELEASE*i,f=a,m=f+o,h=m+s,g=h+c,_=g+l,v=_+u,y=n?.35:e.fidelity>=.9?1:.7,b=!1,x=!1,S=!1,C=N.get(e.side);return{kind:`cutin`,side:e.side,t:0,maxDur:Math.min(D_.CUTIN_MAX,v+.6),start(){ye=1/0,P.flash(a,.95*d),st(``)},update(){let r=this.t;if(!b&&r>=f&&(b=!0,N.setMode(`cutin`,{side:e.side}),C.anim.chargePower=y,C.anim.play(`charge`)),b){N.cutinZoom=Math.min(1,(r-f)/Math.max(.1,o+s+c)),Re=r>=g&&r<_;let i=e.fidelity>=.9?`lines`:n?`dots`:`mix`;Ch(p,Ke,qe);let a=Math.min(1,(r-f)/Math.max(.1,o));Lh(se,Ke,qe,t,i,Re?g:r,a),Ge=!0;let l=N.screenHeight(e.side),u=N.screenPos(e.side,`feet`),d=N.screenPos(e.side,`chest`),b=r<m?Math.min(1,(r-f)/.25):Math.max(0,1-(r-m)/.3);if(Rh(oe,u.x,u.y,l,t,b,y,Re?g:r),r>=m){let i=Math.min(1,(r-m)/Math.max(.05,s)),a=Math.min(Ke*.5,Math.max(120,l*.6));zh(oe,e.reg,e.drawn,d.x,d.y-l*.05,a,t,i,+!!n,r)}!S&&r>=h&&(S=!0,P.fidelity(Ke/2,qe*(e.side===0?.2:.22),e.fidelity,t,e.side===0?e.inZone:null,Math.max(.3,v-r+.05),e.penalty,e.npc?.01:c)),!x&&r>=_&&(x=!0,bt(`release`),C.anim.play(`release`))}return r>=v},end(){Re=!1,Ge=!0,ye=0,zt(e),at(),e.side===0?C.anim.play(`release`):C.anim.play(`attack`)}}},zt=e=>{let t=e.side,n=t===0?Je:Xe,r=[...A.projectiles].reverse().find(e=>e.from===t&&!e.arrived);r&&(r.flyAt>r.t&&et.push({p:r,strokes:e.drawn,color:n,t0:N.t,vanish:-1}),ce.add(r,e.drawn,n))};ce.onLand=(e,t,n)=>{let r=_t();r&&e.target===0&&e.p.flyAt>0&&(de.push({frame:r.ctx.currentTime,exact:r.ctx.currentTime-Math.max(0,e.p.t-e.p.dur),kind:n}),de.length>32&&de.shift());let i=N.viewer.project(t);P.hit(i.x,i.y,n!==`graze`,e.from===0?Je:Xe),N.field.shockwave(t.x,t.z)};let Bt=(e,t)=>{let n=t===`sign`?`pre`:`charge`,i=0,a=0,o=!1,s=+(e===0),c=()=>{if(t===`strike`){let t=A.fighters[e];return t.state===`strike`?Math.max(.01,Q.STRIKE_CONTACT-t.stateT):.02}let n=A.incoming(s);return n?Math.max(.01,n.dur-n.t):.02},l=()=>{u.slow=!0;let n=c(),i=D_.FINISH_BRINK*D_.FINISH_BRINK_SCALE;if(ve=Math.max(.005,Math.min(D_.FINISH_CHARGE_SCALE,(n-i)/D_.FINISH_CHARGE)),N.setMode(`finish`,{attacker:e}),N.finishPush=0,st(``),De){let e=[...Oe,...ke?[ke]:[]].map(e=>e.map(e=>({x:e.x*Ke,y:e.y*Ke,t:e.t})));P.signScatter(e,Je,1.6),P.text(Ke/2,qe*.4,r(`battle.fizzle`),`#E0603A`,1.6,30),kt()}wt(`finish by ${t}, attacker=${e}, scale=${ve.toFixed(3)}`)},u={kind:`finish`,side:e,t:0,maxDur:D_.FINISH_MAX,start(){n===`pre`?this.maxDur=D_.FINISH_MAX+c()+.5:l()},update(u){if(n===`pre`){if(A.incoming(s)&&c()>D_.FINISH_SIGN_PRE)return!1;n=`charge`,i=0,l()}switch(i+=u,n!==`fall`&&N.setDim(Math.min(1,N.dimLevel+u*3)),n){case`charge`:N.finishPush=Math.min(1,i/D_.FINISH_CHARGE),a+=u,a>.09&&t===`strike`&&(a=0,N.spawnTrail(e)),i>=D_.FINISH_CHARGE&&(n=`brink`,i=0,ve=D_.FINISH_BRINK_SCALE);break;case`brink`:N.player.anim.outlineBoost=1,N.enemy.anim.outlineBoost=1,ze=Math.min(1,i/D_.FINISH_BRINK),i>=D_.FINISH_BRINK&&(n=`wait`,i=0,ve=.12);break;case`wait`:i>1&&(ve=1);break;case`stop`:ye<=0&&(n=`fly`,i=0,ve=D_.FINISH_FLY_SCALE,ze=0);break;case`fly`:i>=D_.FINISH_FLY&&(n=`fall`,i=0,ve=1,N.get(e).anim.play(`win`));break;case`fall`:if(N.setDim(Math.max(0,N.dimLevel-u*1.5)),!o&&i>=.6){o=!0;let e=A.winner===0;P.callout(Ke/2,qe*.42,r(e?`battle.win`:`battle.lose`),e?Je:`#E0603A`,1.4,Math.min(72,Ke*.18),e?-.08:.06)}if(i>=1.8)return!0}return!1},end(){ve=1,ze=0,Be=0,N.setDim(0),A.ended?nn():at()},onHit(){n!==`stop`&&n!==`fly`&&n!==`fall`&&(n=`stop`,i=0)}};return u},Vt=e=>{V&&V.kind===`finish`||Le.some(e=>e.kind===`finish`)||Nt(Bt(e,`strike`)),P.flash(.14,d),bt(`finish`),ye=D_.FINISH_HITSTOP,Be=.45,N.player.anim.outlineBoost=1,N.enemy.anim.outlineBoost=1;let t=N.get(+(e===0)),n=N.get(e);t.anim.knockback(.9+.4*(n.data.stats.atk-1)/4),V?.onHit?.()},Ht=()=>{V&&V.kind===`finish`&&(wt(`finish cancelled by just dodge`),ve=1,ze=0,N.player.anim.outlineBoost=0,N.enemy.anim.outlineBoost=0,N.setDim(0),V=null,Le.length||at())},Ut=(e,t)=>{let n=N.screenPos(0,`head`),r=pt(),i=t===`just`?34:t===`dodge`?30:t===`graze`?22:18;P.gaugeFly({x:n.x,y:n.y-24},r,`+${e}`,i,()=>{C.classList.remove(`bump`,`flash`),C.offsetWidth,C.classList.add(`bump`,`flash`);let e=pt();P.sparkle(e.x,e.y,t===`hit`?3:6)})},Wt=(e,t,n,i,a=28)=>{let o=Ke/390,s=N.screenPos(0,`top`),c=t===null?n?r(`judge.slow`):null:t<-.06||n&&t<0?r(`judge.fast`):t>.06||n?r(`judge.slow`):null,l=Math.max(150,s.y-12*o);e&&P.callout(s.x,l-30*o,e,i,.6,Math.round(a*o),-.06),c&&P.callout(s.x,e?l-6*o:l-16*o,c,i,.7,Math.round(14*o),0)},Gt=e=>{for(let i of e)switch(i.type){case`attack-start`:{let e=N.get(i.who);e.anim.telegraphDur=i.telegraph,e.anim.play(`telegraph`);break}case`strike`:N.get(i.who).anim.play(`strike`),i.willHit&&i.lethal&&Nt(Bt(i.who,`strike`));break;case`impact`:{Qe[i.who]=!0;let e=N.screenPos(i.target,`center`);if(P.hit(e.x,e.y,!1,i.who===0?Je:Xe),i.who===1){let e=N.screenBody(1);P.ringClose(e.x,e.y,Yt())}bt(`hit`);let t=N.get(i.target);A.fighters[i.target].state===`casting`?t.anim.flashOnly():t.anim.play(`hit`);break}case`hit`:{let e=N.screenPos(i.target,`center`),t=i.who===0?Je:Xe,n=Qe[i.who];Qe[i.who]=!1;let a=i.grade===`graze`,o=N.get(i.target);if(a){if(n||P.hit(e.x,e.y,!1,t),i.who===1&&!n){let e=N.screenBody(1);P.ringChip(e.x,e.y,Yt())}if(i.target===0)Wt(r(`judge.graze`),i.tapDt,!0,Je);else{let e=N.screenPos(i.target,`head`);P.callout(e.x-56,e.y-22,r(`judge.graze`),Xe,.45,26,.08)}}else if(!n&&(P.hit(e.x,e.y,i.castingBonus,t),i.who===1)){let e=N.screenBody(1);P.ringClose(e.x,e.y,Yt())}i.target===0&&!a&&(Wt(null,i.tapDt,!0,Je),pe=0),P.damage(e.x,e.y-8,i.damage,i.castingBonus),A.fighters[i.target].state===`dead`?Vt(i.who):n||(bt(`hit`,a?{gain:.45}:{}),a||A.fighters[i.target].state===`casting`?o.anim.flashOnly():o.anim.play(`hit`));break}case`miss`:{Qe[i.who]=!1;let e=N.screenPos(i.target,`head`),t=i.target===0?Je:Xe;i.target===0?Wt(r(`judge.perfect`),i.tapDt,!1,t):P.callout(e.x-70,e.y-30,r(`judge.enemyDodge`),t,.55,36,.12);let n=N.screenPos(i.who,`chest`),a=N.screenPos(i.target,`chest`),o=Math.atan2(a.y-n.y,a.x-n.x),s=i.target===0?N.dodgeOriginScreen():null;if(s?P.slash(s.x,s.y,o+.4,Math.max(60,N.screenHeight(i.who)*.6)):P.slash(n.x+Math.cos(o)*50,n.y+Math.sin(o)*50,o+.4,Math.max(60,N.screenHeight(i.who)*.6)),s&&Xt.push({t:performance.now(),x:s.x,y:s.y}),N.get(i.who).anim.play(`stumble`),i.target===1&&(ye=Math.max(ye,D_.MISS_HITSTOP)),I.push({kind:i.target===0?`miss-player`:`miss-enemy`,hitStopAfter:ye===1/0?-1:+ye.toFixed(3),frames:0,zeroFrames:0,gapMaxMs:0}),I.length>64&&I.shift(),Ce={t:0,entry:I[I.length-1]},i.who===1&&!i.late){let e=N.screenBody(1);P.ringShatter(e.x,e.y,Yt())}break}case`dodge`:if(N.onDodge(i.who,i.spec,i.dir,i.from,i.to),i.spec.kind===`sidestep`){let e=N.screenPos(i.who,`feet`);P.dust(e.x,e.y,i.dir*(i.who===0?1:-1))}break;case`dodge-land`:if(N.onDodgeLand(i.who,i.kind),i.kind===`jump`){let e=N.screenPos(i.who,`feet`);P.shock(e.x,e.y,(N.get(i.who).data.stats.atk-1)/4)}break;case`gauge`:i.who===0&&i.reason!==`taken`&&Ut(i.amount,i.reason);break;case`gauge-full`:i.who===0&&t.sign&&bt(`full`),i.who===0&&t.sign&&P.callout(Ke/2,qe*.44,r(`battle.engrave`),Je,.7,Math.min(54,Ke*.13));break;case`cast-start`:i.who===1&&(N.enemy.anim.play(`cast`),N.showZone(1,i.zoneR),st(r(`battle.enemyCasting`,{name:n.monster.name})));break;case`input`:if(k&&i.side===0){let e=i.result;i.kind===`tap`?e===`perfect`?(bt(`evade-perfect`,{step:pe}),pe=Math.min(pe+1,9)):e===`early`||e===`whiff`?pe=0:e===`graze`||e===`just-graze`?bt(`evade-graze`):e===`just`&&bt(`evade-just`):i.kind===`cast-start`&&e===`now`?(N.setMode(`cast`),N.player.anim.play(`cast`),st(r(`battle.replayCasting`))):i.kind===`cast-cancel`&&(st(``),N.mode===`cast`&&at())}break;case`sign-fire`:i.who===0&&k&&(st(``),R+=i.damage,Nt(Rt({side:0,fidelity:i.fidelity,inZone:i.inZone,dmg:i.damage,drawn:t.sign??[],reg:t.sign??null,penalty:!1,npc:!1})),i.lethal&&Nt(Bt(0,`sign`))),i.who===1&&(st(``),N.showZone(1,null),z+=i.damage,Nt(Rt({side:1,fidelity:i.fidelity,inZone:i.inZone,dmg:i.damage,drawn:n.sign,reg:null,penalty:!1,npc:!0})),i.lethal&&Nt(Bt(1,`sign`)),wt(`npc sign: fidelity=${i.fidelity} zone=${i.inZone} dmg=${i.damage} lethal=${i.lethal}`));break;case`just`:{let e=A.incoming(0),t=!e||A.fighters[0].hp>Math.round(e.damage*(A.fighters[0].state===`casting`?Q.CAST_TAKEN_MULT:1)*(i.grade===`just`?Q.JUST_DMG_MULT:Q.JUST_GRAZE_MULT));if(e&&ce.retarget(e,i.grade),i.grade===`graze`){Wt(r(`judge.graze`),i.tapDt,!0,Je),t&&Ht();break}let n=N.screenPos(0,`top`);P.callout(n.x,Math.max(120,n.y-Ke/390*70),r(`judge.just`),Je,.9,Math.min(64,Ke*.15),-.1),Wt(r(`judge.perfect`),i.tapDt,!1,Je),Se=D_.JUST_SLOW,Te={real:0,world:0},I.push({kind:`just`,hitStopAfter:ye===1/0?-1:+ye.toFixed(3),frames:0,zeroFrames:0,gapMaxMs:0}),I.length>64&&I.shift(),Ce={t:0,entry:I[I.length-1]},t&&Ht();break}case`sign-impact`:{$e=!0,bt(`hit`);let e=N.get(i.target);A.fighters[i.target].state===`casting`?e.anim.flashOnly():e.anim.play(`hit`);break}case`sign-hit`:{i.target===0?z=0:R=0;let e=i.target===0&&$e;i.target===0&&($e=!1,tt=D_.BRACE_HOLD),i.target===0&&!i.just&&!i.graze&&(Wt(null,i.tapDt,!0,Je),pe=0);let t=N.screenPos(i.target,`center`);P.damage(t.x,t.y-10,i.damage,i.castingBonus&&!i.just);let n=N.get(i.target);A.fighters[i.target].state===`dead`?Vt(i.who):e||(bt(`hit`,i.graze?{gain:.5}:{}),i.just||i.graze||A.fighters[i.target].state===`casting`?n.anim.flashOnly():n.anim.play(`hit`));break}case`sign-fizzle`:i.who===1&&(N.showZone(1,null),st(``));break;case`dead`:break;case`end`:!V&&!Le.some(e=>e.kind===`finish`)&&Nt(Bt(i.winner,i.by))}},Kt=()=>xg(n.monster.stats)+Q.STRIKE_CONTACT,qt=()=>{let e=A.fighters[1],t=Kt(),n=[];return(e.state===`telegraph`||e.state===`strike`&&!e.contactDone)&&e.contactAt>A.time?n.push(e.contactAt):e.lastBeatAt+t>A.time&&n.push(e.lastBeatAt+t),n.push(A.time+Math.max(0,e.beatT)+t),n.length<2&&n.push(n[0]+A.beatInfo(1).interval),n},Jt=()=>{let e=A.fighters[1];return e.state===`telegraph`||e.state===`strike`&&!e.contactDone||!(e.state!==`idle`||e.dodge||A.fighters[0].state===`dead`||A.d>Q.REACH+Q.LUNGE_MAX+1e-9||A.aiming(1)||A.time+e.beatT<=e.signBeatAt+.05||e.gauge>=Q.GAUGE_FULL&&A.inZone(1)&&e.beatIdx>=Q.FIRST_SIGN_BEAT)};function Yt(){return Math.min(Ke,qe)*O_.TARGET_FRAC}let Xt=[];function Zt(e){e.done=!0,Ee.push({contactAt:e.contactAt,R:+e.R.toFixed(2),minSide:Math.min(Ke,qe),peakK:+e.peakK.toFixed(3),peakDt:e.peakDt===null?null:+e.peakDt.toFixed(4),peakWorldDt:e.peakWorldDt===null?null:+e.peakWorldDt.toFixed(4),frameDt:+e.frameDt.toFixed(4),gapMs:+e.gapMs.toFixed(1),onsets:e.onsets,strongOutside:e.strongOutside,clock:e.head===null?`world`:`audio`}),Ee.length>64&&Ee.shift()}function Qt(e,t){let n=_t(),r=e.head!==null&&n?n.ctx.currentTime-e.head:A.time-e.contactAt,i=Q.PERFECT_WINDOW,a=Q.GRAZE_WINDOW,o=A.fighters[1],s=A.ringRemain(1)!==null&&Math.abs(o.contactAt-e.contactAt)<1e-6;if(r>i+O_.GLOW_FADE&&!s){Zt(e);return}let c=Math.abs(r)<=i,l=c&&!t?1-Math.abs(r)/i:0,d=!c&&r<0&&r>=-a?O_.GRAZE:0,f=r>i&&!s?Math.max(0,1-(r-i)/O_.GLOW_FADE):1,p=N.screenBody(1);Mh(oe,p.x,p.y,e.R,{peak:l,graze:d,wide:c,alpha:f,reduce:u.reduceFlashing,scale:O_.GLOW_SCALE,fill:O_.GLOW_FILL}),xe=l;let m=l>0;m&&!e.on&&e.onsets++,e.on=m,l>e.peakK&&(e.peakK=l,e.peakDt=r,e.peakWorldDt=A.time-e.contactAt,e.frameDt=be,e.gapMs=we),!c&&l>.5&&e.strongOutside++}let $t=()=>!V&&ye<=0&&ve===1&&Se<=0,en=()=>{let e=_t();if(!e)return;let t=e.ctx.currentTime;F.start(t+.05);let n=A.fighters[1];if($t()){F.setNextHeads(qt().map(e=>t+(e-A.time))),F.setCount(Jt());let e=rt();e&&!e.arrived&&F.setRoll(t+(e.dur-e.t))}(!A.incoming(0)||A.incoming(0).arrived)&&F.setRoll(null),n.contactDone&&n.contactAt>0&&n.contactAt!==me&&A.time-n.contactAt<.2&&ve===1&&!V&&(me=n.contactAt,le.push(t-(A.time-n.contactAt)),le.length>64&&le.shift()),F.setLayers({hat16:A.fighters[0].gauge>=Q.GAUGE_FULL,duck:!!V}),F.tick()},tn=()=>{k||ee||A.tick===0||(ee=!0,Rg(Mg(A,{npcKey:n.key,createdAt:j})))},nn=()=>{if(Ve||We)return;Ve=!0,tn(),ge=`result`,F.stop(),kt(),N.setDim(0),N.setMode(`result`),_.classList.remove(`on`);let l=A.winner===0,u=A.fighters[0],d=A.fighters[1],f=u.signs,p=f.filter(e=>e.inZone).length,m=d.attacks,h=(e,t)=>H(`tr`,{},H(`td`,{},e),H(`td`,{},t)),g=H(`div`,{class:`result-box fade-in`},H(`div`,{class:`card`,style:`width: min(88vw, 380px)`},H(`div`,{class:`big`,style:`color:${l?y:`#E0603A`}`},r(l?`battle.win`:`battle.lose`)),H(`p`,{class:`sub small`},r(`result.summary`,{enemy:n.monster.name,sec:A.time.toFixed(0),by:A.endedBy===`sign`?r(`result.bySign`):r(`result.byStrike`)})),H(`table`,{class:`stat result-stats`},h(r(`result.time`),r(`result.seconds`,{sec:A.time.toFixed(1)})),h(r(`result.hpLeft`),r(`result.hpValue`,{p:t.name,php:u.hp,pmax:u.maxHp,e:n.monster.name,ehp:d.hp,emax:d.maxHp})),h(r(`result.signs`),f.length?r(`result.signsValue`,{n:f.length,list:f.map(e=>r(`result.signItem`,{pct:(e.fidelity*100).toFixed(0),zone:e.inZone?r(`result.in`):r(`result.out`),dmg:e.damage})).join(` / `)}):t.sign?r(`result.zeroSigns`):r(`result.noSign`)),h(r(`result.zoneRate`),f.length?r(`result.zoneRateValue`,{pct:Math.round(p/f.length*100),a:p,b:f.length}):`-`),h(r(`result.enemyAttacks`),r(`result.enemyAttacksValue`,{p:u.dodgeSuccess,g:u.grazes,h:u.hitsTaken,n:m,w:u.whiffs})),h(r(`result.enemySigns`),d.signs.length?r(`result.enemySignsValue`,{j:u.justSuccess,g:u.justGrazes,h:Math.max(0,u.signsTaken-u.justSuccess-u.justGrazes),n:d.signs.length}):`-`),f.length?H(`tr`,{class:`tiny`},H(`td`,{},r(`result.castStart`)),H(`td`,{},f.map((e,t)=>r(`result.castStartItem`,{i:t+1,ring:e.ringRemain===null?r(`result.noRing`):r(`result.ringLeft`,{pct:Math.round(e.ringRemain*100)}),beat:e.nextBeatIn.toFixed(1)})).join(` / `))):null,h(r(`result.damage`),r(`result.damageValue`,{dealt:u.damageDealt,taken:d.damageDealt,dodges:d.dodgeSuccess}))),H(`div`,{style:`height:12px`}),H(`div`,{class:`col`},H(`button`,{class:`btn primary`,onClick:a},r(`result.retry`)),H(`button`,{class:`btn`,onClick:o},r(`result.changeEnemy`)),H(`button`,{class:`btn ghost`,onClick:()=>i({name:`card`,id:t.id})},r(`result.toCard`))),s?H(`p`,{class:`tiny sub`,style:`margin-top:8px`},`リプレイ: ${A.stateHash()===s.result.finalHash&&A.winner===s.result.winner?`ログと一致`:`ログと不一致(${A.stateHash()} / ログ ${s.result.finalHash})`}`):null,H(`button`,{class:`btn ghost sm`,style:`margin-top:8px`,onClick:()=>{let e=zg();if(!e)return;let t=Ng(e);t?alert(t):c(e)}},`直前のバトルを再生(デバッグ)`)));e.append(g)};D.addEventListener(`click`,()=>i({name:`card`,id:t.id}));let rn=n=>{if(We)return;He=requestAnimationFrame(rn);let i=Math.min(.05,(n-Ue)/1e3);we=n-Ue,be=i,Ue=n,he.tick();let a=e.getBoundingClientRect();Ke=a.width,qe=a.height,Ch(h,Ke,qe),oe.clearRect(0,0,Ke,qe);let o=i*ve;if(Se>0){let e=Math.min(Se,i);if(o=(e*D_.JUST_SLOW_SCALE+(i-e))*ve,Se-=i,Te&&(Te.real+=e,Te.world+=e*D_.JUST_SLOW_SCALE*ve,Se<=0)){let e=[...I].reverse().find(e=>e.kind===`just`);e&&(e.slowReal=+Te.real.toFixed(4),e.slowWorld=+Te.world.toFixed(4)),Te=null}}if(ye>0&&(ye!==1/0&&(ye-=i),o=0),Ce){let e=Ce.entry;e.frames++,o===0&&e.zeroFrames++,e.gapMaxMs=Math.max(e.gapMaxMs,+we.toFixed(1)),Ce.t+=i,Ce.t>=.25&&(Ce=null)}if(ge===`intro`){_e+=i;let e=Math.min(1,_e/2);N.player.anim.summonProgress=e,N.enemy.anim.summonProgress=e,e>=1?(ge=`fight`,N.player.anim.play(`idle`),N.enemy.anim.play(`idle`),N.setMode(`auto`),st(``)):st(r(`battle.faceoff`))}else if(ge===`fight`){Ze.length&&Gt(Ze.splice(0)),M=Math.max(M,te+o),te=M,Gt(re()),Lt(i),en(),N.mode===`brace`&&!V&&(rt()||it()?tt=D_.BRACE_HOLD:(tt-=i)<=0&&N.setMode(`auto`));let e=V?.kind===`finish`?.8:3;N.player.anim.outlineBoost=Math.max(0,N.player.anim.outlineBoost-i*e),N.enemy.anim.outlineBoost=Math.max(0,N.enemy.anim.outlineBoost-i*e)}if(Be>0){let e=Be/.45*14*(u.reduceFlashing?.25:1);f.style.transform=`translate(${(Math.random()-.5)*e}px, ${(Math.random()-.5)*e}px)`,Be-=i}else f.style.transform&&(f.style.transform=``);if(ce.prune(e=>A.projectiles.includes(e)),ce.update(i,e=>A.projectiles.includes(e)),N.update(o,i,e,Re?0:i),ge===`fight`){let e=V?.kind===`cutin`;if(!e){let e=A.fighters[1],t=nt();if(e.gauge>=70&&e.state!==`casting`&&e.state!==`dead`){let t=N.screenBody(1);Fh(oe,t.x,t.y,t.r,Xe,Math.min(1,(e.gauge-70)/30),N.t)}let n=A.ringRemain(1);if(n!==null){let r=A.telegraphInfo(1),a=N.screenBody(1),o=Yt(),s=e.telegraphDur+Q.STRIKE_CONTACT,c=F.isRunning?F.beatLen:h_(A.beatInfo(1).interval).beatLen,l=_t(),u=l?l.ctx.currentTime+(e.contactAt-A.time):null;for(let n=1;n<=m_.COUNT_BEATS;n++){let r=n*c,d=null;if(u!==null)for(let e of F.counts)e.k===n&&Math.abs(e.head-u)<.2&&(r=e.head-e.at,d=e.at);let f=r/s;if(f>1)break;let p=e.contactAt-r,m=d!==null&&l?l.ctx.currentTime-d:A.time-p,h=!t&&m>=-i/2&&m<.15,g=e.contactAt.toFixed(4)+`:`+n;h&&!fe.has(g)&&(fe.add(g),l&&$t()&&(ue.push({k:n,contactAt:e.contactAt,frame:l.ctx.currentTime,exact:l.ctx.currentTime+(p-A.time)}),ue.length>96&&ue.shift())),Nh(oe,a.x,a.y,o*(1+O_.START_K*f),h?1-Math.max(0,m)/.15:0)}if(jh(oe,a.x,a.y,o*(1+O_.START_K*n),Xe,!1,!1,1,!1),(!L||Math.abs(L.contactAt-e.contactAt)>1e-6)&&(L&&!L.done&&Zt(L),L={contactAt:e.contactAt,head:null,R:o,peakK:0,peakNow:null,peakDt:null,peakWorldDt:null,frameDt:i,gapMs:we,onsets:0,on:!1,strongOutside:0,done:!1}),u!==null)for(let e of F.counts)Math.abs(e.head-u)<.2&&(L.head=e.head);let d=N.screenPos(1,`feet`),f=N.screenPos(0,`feet`);r&&Ah(oe,d.x,d.y+4,Math.atan2(f.y-d.y,f.x-d.x),1-r.remain,26)}if(L&&!L.done&&(n===null&&A.time<L.contactAt-1e-6?L.done=!0:Qt(L,t)),e.state===`casting`){let t=Math.max(0,1-e.stateT/Q.NPC_CAST_SECONDS),n=N.screenBody(1),r=Yt();jh(oe,n.x,n.y,r*(O_.CAST_BASE+O_.CAST_K*t),Xe,!1,!0)}for(let e=et.length-1;e>=0;e--){let t=et[e],n=A.projectiles.includes(t.p)&&!t.p.arrived,r=Math.min(150,Ke*.38),a=N.screenPos(1,`top`),o=a.x,s=a.y-r*.55,c=P_(t.strokes,o-r/2,s-r/2,r);n&&t.p.t<t.p.flyAt?Ph(oe,c,o,s,t.color,Math.min(1,(N.t-t.t0)/.25),N.t):(t.vanish<0&&(t.vanish=0,P.sparkle(o,s,10,t.color)),t.vanish+=i,t.vanish<D_.HOVER_VANISH?Ph(oe,c,o,s,t.color,1-t.vanish/D_.HOVER_VANISH,N.t):et.splice(e,1))}}let n=!!t.sign&&(De||A.fighters[0].gauge>=Q.GAUGE_FULL&&A.fighters[0].state!==`dead`);if(n!==U&&(U=n,N.showZone(0,n?vg(t.stats):null)),U&&N.setZoneSolid(0,A.inZone(0)),A.fighters[1].state===`casting`&&N.setZoneSolid(1,A.inZone(1)),De){if(oe.fillStyle=`rgba(255,255,255,0.22)`,oe.fillRect(0,0,Ke,qe),u.castGuide&&t.sign){let e=Math.min(Ke,qe)*.62;wh(oe,t.sign,(Ke-e)/2,(qe-e)/2-20,e,{color:`#B5B1A8`,width:10,alpha:.4})}Sh(oe,Oe,ke,{scale:Ke,color:y,width:11}),Sh(oe,Oe,ke,{scale:Ke,color:Je,width:7,glow:!0})}Fe.length&&(B||(Ie-=i*2.5),Ie<=0?(Fe=[],Ie=0):Bh(oe,Fe,Math.min(1,Ie))),!e&&Ge&&(Ch(p,Ke,qe),se.clearRect(0,0,Ke,qe),Ge=!1),Ih(oe,Ke,qe,ze*d)}P.update(i,Ke,qe,o),ft(),W.extra.phase=ge,W.extra.t=A.time.toFixed(1),W.extra.d=A.d.toFixed(2),W.extra.cam=N.cameraDistance.toFixed(1),W.extra.scale=ve.toFixed(2),W.extra.cine=V?`${V.kind}:${V.t.toFixed(1)}`:Le.length?`queued ${Le.length}`:`-`,W.extra.intent=`${A.fighters[0].intent}/${A.fighters[1].intent}`};return He=requestAnimationFrame(rn),()=>{ge===`fight`&&tn(),We=!0,cancelAnimationFrame(He),gt(),F.stop(.1),ce.dispose(),N.dispose(),Ye(e)}}function P_(e,t,n,r){let i=1/0,a=1/0,o=-1/0,s=-1/0;for(let t of e)for(let e of t)e.x<i&&(i=e.x),e.y<a&&(a=e.y),e.x>o&&(o=e.x),e.y>s&&(s=e.y);let c=Math.max(1e-6,o-i),l=Math.max(1e-6,s-a),u=r*.8/Math.max(c,l),d=t+(r-c*u)/2-i*u,f=n+(r-l*u)/2-a*u;return e.map(e=>e.map(e=>({x:d+e.x*u,y:f+e.y*u,t:e.t})))}var F_={header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:`eaf16e41`,tuned:!1,genVersion:1,signVersion:1,seed:1592590336,startDistance:3.4300792133435607,inputOffset:0,fighters:[{name:`A`,stats:{hp:5,spd:2,atk:3,mag:2},skeleton:`serpent`,isPlayer:!0,signComplexity:1.471},{name:`B`,stats:{hp:3,spd:1,atk:3,mag:5},skeleton:`biped`,isPlayer:!1,signComplexity:1.278,npcFidelity:.7,npcCastSeconds:1.2}],npcKey:null,createdAt:`2026-11-08T00:00:00Z`,balance:{HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5}},inputs:[{ms:4105,side:0,kind:`tap`,tick:492},{ms:8156,side:0,kind:`tap`,tick:978},{ms:9782,side:1,kind:`tap`,tick:1173},{ms:12306,side:0,kind:`tap`,tick:1476},{ms:12306,side:0,kind:`cast-start`,tick:1476},{ms:13862,side:0,kind:`cast-finish`,tick:1663,value:.86},{ms:16250,side:0,kind:`tap`,tick:1950},{ms:20516,side:0,kind:`tap`,tick:2461},{ms:24617,side:1,kind:`cast-finish`,tick:2954,value:.7},{ms:27395,side:0,kind:`tap`,tick:3287},{ms:27395,side:0,kind:`cast-start`,tick:3287},{ms:28954,side:0,kind:`cast-finish`,tick:3474,value:.86}],result:{winner:0,endTick:3540,ended:!0,finalHash:`fb321e9a`,checkpoints:[`4ecf35d3`,`e3da047f`,`ccae8ea7`,`71c63b8c`,`8c24ecd9`]}},I_={header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:`eaf16e41`,tuned:!1,genVersion:1,signVersion:1,seed:1592661607,startDistance:3.091394944116473,inputOffset:0,fighters:[{name:`A`,stats:{hp:3,spd:4,atk:4,mag:1},skeleton:`biped`,isPlayer:!0,signComplexity:1.236},{name:`B`,stats:{hp:5,spd:2,atk:3,mag:2},skeleton:`quadruped`,isPlayer:!1,signComplexity:.913,npcFidelity:.7,npcCastSeconds:1.8}],npcKey:null,createdAt:`2026-11-08T00:00:00Z`,balance:{HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5}},inputs:[{ms:3377,side:0,kind:`tap`,tick:405},{ms:6597,side:0,kind:`tap`,tick:791},{ms:8103,side:1,kind:`tap`,tick:972},{ms:10007,side:0,kind:`tap`,tick:1200},{ms:10007,side:0,kind:`cast-start`,tick:1200},{ms:11833,side:0,kind:`cast-finish`,tick:1419,value:.716},{ms:12664,side:1,kind:`tap`,tick:1519},{ms:16485,side:0,kind:`tap`,tick:1978},{ms:20475,side:1,kind:`cast-finish`,tick:2456,value:.7},{ms:24450,side:0,kind:`cast-start`,tick:2934},{ms:25855,side:0,kind:`tap`,tick:3102},{ms:26283,side:0,kind:`cast-finish`,tick:3153,value:.716},{ms:32210,side:0,kind:`tap`,tick:3865},{ms:33199,side:1,kind:`tap`,tick:3983},{ms:35522,side:0,kind:`tap`,tick:4262},{ms:35522,side:0,kind:`cast-start`,tick:4262},{ms:37349,side:0,kind:`cast-finish`,tick:4481,value:.716}],result:{winner:0,endTick:4547,ended:!0,finalHash:`b0d70410`,checkpoints:[`1f1dc655`,`c9c4b534`,`fc959e24`,`55970cb3`,`343a64f1`,`829762b2`,`dbb81b74`]}},L_={header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:`eaf16e41`,tuned:!1,genVersion:1,signVersion:1,seed:1592724959,startDistance:2.4167091008275747,inputOffset:.06,fighters:[{name:`A`,stats:{hp:3,spd:3,atk:4,mag:2},skeleton:`serpent`,isPlayer:!0,signComplexity:.985},{name:`B`,stats:{hp:5,spd:1,atk:3,mag:3},skeleton:`multileg`,isPlayer:!1,signComplexity:.568,npcFidelity:.7,npcCastSeconds:1.8}],npcKey:null,createdAt:`2026-11-08T00:00:00Z`,balance:{HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5}},inputs:[{ms:8020,side:0,kind:`tap`,tick:969},{ms:11090,side:0,kind:`cast-start`,tick:1338},{ms:11694,side:0,kind:`tap`,tick:1410},{ms:12817,side:0,kind:`cast-finish`,tick:1545,value:.9},{ms:15813,side:0,kind:`tap`,tick:1904},{ms:24750,side:1,kind:`cast-finish`,tick:2969,value:.7},{ms:25732,side:0,kind:`cast-start`,tick:3095},{ms:26909,side:0,kind:`tap`,tick:3236},{ms:27459,side:0,kind:`cast-finish`,tick:3302,value:.9}],result:{winner:0,endTick:3686,ended:!0,finalHash:`61c844db`,checkpoints:[`3ea94a96`,`54eec206`,`2b060a1c`,`f7fb00bd`,`8d44255f`,`776ff13a`]}},R_={header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:`eaf16e41`,tuned:!1,genVersion:1,signVersion:1,seed:1592796230,startDistance:2.6855400041677058,inputOffset:.06,fighters:[{name:`A`,stats:{hp:2,spd:4,atk:4,mag:2},skeleton:`quadruped`,isPlayer:!0,signComplexity:1.376},{name:`B`,stats:{hp:4,spd:2,atk:3,mag:3},skeleton:`serpent`,isPlayer:!1,signComplexity:1.049,npcFidelity:.7,npcCastSeconds:2.4}],npcKey:null,createdAt:`2026-11-08T00:00:00Z`,balance:{HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5}},inputs:[{ms:3519,side:0,kind:`tap`,tick:429},{ms:6479,side:0,kind:`tap`,tick:784},{ms:9780,side:0,kind:`tap`,tick:1180},{ms:9840,side:0,kind:`cast-start`,tick:1188},{ms:11263,side:0,kind:`cast-finish`,tick:1358,value:.66},{ms:13097,side:0,kind:`tap`,tick:1578},{ms:17815,side:0,kind:`cast-start`,tick:2145},{ms:19238,side:0,kind:`cast-finish`,tick:2315,value:.66},{ms:21175,side:1,kind:`cast-finish`,tick:2540,value:.7},{ms:25122,side:0,kind:`tap`,tick:3021},{ms:26403,side:1,kind:`tap`,tick:3168}],result:{winner:0,endTick:3173,ended:!0,finalHash:`01b63f50`,checkpoints:[`8a41174b`,`77f8b335`,`7d8b9104`,`05b2be6c`,`c4795713`]}},z_={header:{logVersion:1,simVersion:1,balanceVersion:1,balanceHash:`eaf16e41`,tuned:!1,genVersion:1,signVersion:1,seed:1592891258,startDistance:3.3812651075422764,inputOffset:.06,fighters:[{name:`A`,stats:{hp:3,spd:2,atk:4,mag:3},skeleton:`serpent`,isPlayer:!0,signComplexity:.521},{name:`B`,stats:{hp:2,spd:3,atk:4,mag:3},skeleton:`quadruped`,isPlayer:!1,signComplexity:1.064,npcFidelity:.7,npcCastSeconds:1.8}],npcKey:null,createdAt:`2026-11-08T00:00:00Z`,balance:{HP_BASE:100,HP_PER:40,INTERVAL_NUM:3.2,ATK_BASE:6,ATK_PER:3,GAUGE_HIT:10,GAUGE_HIT_PER:3,GAUGE_TAKEN:8,GAUGE_DODGE:30,GAUGE_WHIFF:6,GAUGE_JUST:40,GAUGE_FULL:100,CAST_TAKEN_MULT:1.8,SIGN_K:90,ZONE_BASE:1.6,ZONE_PER:.4,ZONE_OUT_MULT:.4,REACH:1.8,D_MIN:1,D_MAX:8,FIELD_R:6.8,SPEED_BASE:1,SPEED_PER:.25,RUSH_MULT:1.8,RUSH_MIN_D:3.5,TELEGRAPH_BASE:1,TELEGRAPH_PER:.11,STRIKE_CONTACT:.05,STRIKE:.5,DODGE_CD:1.2,PERFECT_WINDOW:.12,GRAZE_WINDOW:.3,GRAZE_DMG_MULT:.35,GAUGE_GRAZE:12,LATE_WINDOW:.12,LATE_PERFECT:1,JUST_WINDOW:.1,JUST_GRAZE_WINDOW:.25,JUST_DMG_MULT:.3,JUST_GRAZE_MULT:.65,GAUGE_JUST_GRAZE:15,JUST_LATE:.1,SIGN_FLIGHT:.55,SIGN_AIM_MIN:.9,NPC_DODGE_BASE:.15,NPC_DODGE_PER:.05,NPC_CAST_SECONDS:1.2,BEAT_JITTER:.04,LUNGE_MAX:2.5,LUNGE_PORTION:.6,FIRST_SIGN_BEAT:2,INTENT_SWITCH_PHASE:.5,FIRST_BEAT_NPC:.8,FIRST_BEAT_PLAYER:1.3,INTENT_ADVANCE:.35,INTENT_RETREAT:.2,INTENT_HOLD:.15,INTENT_CIRCLE:.2,CIRCLE_MIN_DEG:60,CIRCLE_MAX_DEG:120,HIT_REACT:.8,RETREAT_LIMIT:3.8,HIT_RETREAT:.5}},inputs:[{ms:2668,side:0,kind:`tap`,tick:327},{ms:4937,side:1,kind:`tap`,tick:592},{ms:8095,side:0,kind:`tap`,tick:978},{ms:10766,side:0,kind:`tap`,tick:1299},{ms:10766,side:0,kind:`cast-start`,tick:1299},{ms:12693,side:0,kind:`cast-finish`,tick:1530,value:.834},{ms:13118,side:0,kind:`tap`,tick:1581},{ms:14700,side:1,kind:`tap`,tick:1763},{ms:17092,side:1,kind:`cast-finish`,tick:2051,value:.7},{ms:17924,side:0,kind:`tap`,tick:2158},{ms:21221,side:0,kind:`tap`,tick:2553},{ms:21348,side:0,kind:`cast-start`,tick:2569},{ms:23276,side:0,kind:`cast-finish`,tick:2800,value:.834},{ms:24066,side:0,kind:`tap`,tick:2895}],result:{winner:0,endTick:3178,ended:!0,finalHash:`61cc3aa2`,checkpoints:[`73ae11f1`,`3877d20b`,`7aae3ed6`,`f6fa0d5e`,`d745be2b`]}},B_=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`,V_=[[`seed`,32,0],[`hueBin`,4,0],[`chromatic`,1,0],[`lum`,10,0],[`inkLevel`,2,0],[`closed`,3,0],[`sharp`,2,0],[`rough`,2,0],[`hue2`,4,0],[`chromatic2`,1,0],[`lum2`,11,1],[`giant`,1,0]],H_=8+V_.reduce((e,t)=>e+t[1],0),U_=H_+16,W_=Math.ceil(U_/5),G_=class{constructor(){s(this,`bits`,[])}put(e,t){for(let n=t-1;n>=0;n--)this.bits.push(Math.floor(e/2**n)%2)}},K_=(e,t,n)=>{let r=0;for(let i=0;i<n;i++)r=r*2+e[t+i];return r};function q_(e){let t=65535;for(let n of e){let e=t>>15&1;t=t<<1&65535,e^n&&(t^=4129)}return t}function J_(e,t){let n=ce(e,t);if(n)throw Error(`共有コードにできない: `+n);let r=new G_;r.put(e,8);for(let[e,n,i]of V_)r.put(t[e]+i,n);for(r.put(q_(r.bits),16);r.bits.length<W_*5;)r.bits.push(0);let i=``;for(let e=0;e<W_;e++)i+=B_[K_(r.bits,e*5,5)];return`MB1-${i.match(/.{1,4}/g).join(`-`)}`}function Y_(e){let t=e.toUpperCase().replace(/[\s-]/g,``).replace(/O/g,`0`).replace(/[IL]/g,`1`);if(!t.startsWith(`MB`))return{ok:!1,reason:`共有コードではない(MB で始まらない)`};let n=t.slice(2,t.length-W_);if(t.length<=2+W_||!/^\d+$/.test(n))return{ok:!1,reason:`長さがちがう(正しくは MB + 版 + ${W_} 文字)`};if(+n!=1)return{ok:!1,reason:`共有コードの版がちがう(${n})`};let r=t.slice(t.length-W_),i=[];for(let e of r){let t=B_.indexOf(e);if(t<0)return{ok:!1,reason:`使えない文字がある(${e})`};for(let e=4;e>=0;e--)i.push(t>>e&1)}for(let e=U_;e<i.length;e++)if(i[e])return{ok:!1,reason:`チェックサムが合わない`};let a=i.slice(0,H_);if(q_(a)!==K_(i,H_,16))return{ok:!1,reason:`チェックサムが合わない`};let o=K_(a,0,8);if(o!==1)return{ok:!1,reason:`生成器 v${o} は読めない`};let s=8,c={v:1};for(let[e,t,n]of V_)c[e]=K_(a,s,t)-n,s+=t;let l=ce(o,c);if(l)return{ok:!1,reason:`値が範囲外: `+l};let u=c;return{ok:!0,genVersion:o,input:u,spec:se(o,u)}}var X_=e=>Math.round(e*1e3)/1e3;function Z_(e){if(!e.length)return{mean:0,sd:0,n:0};let t=e.reduce((e,t)=>e+t,0)/e.length,n=e.reduce((e,n)=>e+(n-t)**2,0)/e.length;return{mean:X_(t),sd:X_(Math.sqrt(n)),n:e.length}}function Q_(e,t){let n=e.filter(e=>!e.tuned&&e.simVersion===1&&e.balanceVersion===1);if(!n.length)return null;let r=e=>n.reduce((t,n)=>t+e(n),0),i=r(e=>e.dodge.attacks),a=r(e=>e.dodge.dtMs.length),o=r(e=>e.just.signs),s=r(e=>e.just.dtMs.length),c=n.flatMap(e=>e.signs);return{v:1,simVersion:1,balanceVersion:1,monster:t.code,growth:{...t.growth},sign:t.sign,dodge:{tapRate:X_(i?Math.min(1,a/i):0),dt:Z_(n.flatMap(e=>e.dodge.dtMs).map(e=>e/1e3)),earlyRate:X_(i?r(e=>e.dodge.early)/i:0)},just:{tapRate:X_(o?Math.min(1,s/o):0),dt:Z_(n.flatMap(e=>e.just.dtMs).map(e=>e/1e3))},cast:{fullToCast:Z_(c.filter(e=>e.fullToCastMs!==null).map(e=>e.fullToCastMs/1e3)),fidelity:Z_(c.map(e=>e.fidelity)),waitZoneRate:X_(c.length?c.filter(e=>e.inZone).length/c.length:0)},samples:n.length}}var $_={MIN_DT_SD:.02,MAX_ABS_DT_MEAN:.3,MIN_FULL_TO_CAST:.15,MAX_FIDELITY_MEAN:.99,MIN_FIDELITY_SD:.01,MIN_SAMPLES_FOR_SD:10};function ev(e){let t=$_,n=[],r=(e,t)=>{e>=0&&e<=1||n.push(`${t} が 0〜1 の外`)};e.v!==1&&n.push(`版がちがう`),e.samples<1&&n.push(`記録がない`),r(e.dodge.tapRate,`回避のタップの割合`),r(e.dodge.earlyRate,`早すぎの割合`),r(e.just.tapRate,`ジャストのタップの割合`),r(e.cast.waitZoneRate,`ゾーンを待つ割合`);for(let[r,i]of[[e.dodge.dt,`回避`],[e.just.dt,`ジャスト`]])r.n>=t.MIN_SAMPLES_FOR_SD&&r.sd<t.MIN_DT_SD&&n.push(`${i}の Δt がそろいすぎ(標準偏差 ${r.sd} 秒)`),r.n>0&&Math.abs(r.mean)>t.MAX_ABS_DT_MEAN&&n.push(`${i}の Δt の平均が窓の外(${r.mean} 秒)`);e.cast.fullToCast.n>0&&e.cast.fullToCast.mean<t.MIN_FULL_TO_CAST&&n.push(`満タンから描き始めるまでが速すぎる(${e.cast.fullToCast.mean} 秒)`);let i=e.cast.fidelity;i.n>=t.MIN_SAMPLES_FOR_SD&&i.mean>=t.MAX_FIDELITY_MEAN&&i.sd<t.MIN_FIDELITY_SD&&n.push(`再現度が常に満点`),i.n>0&&(i.mean<0||i.mean>1)&&n.push(`再現度が 0〜1 の外`);for(let t of[`hp`,`spd`,`atk`,`mag`])e.growth[t]>=0||n.push(`育成の値が負`);return/^MB\d+-/.test(e.monster)||n.push(`共有コードの形ではない`),n}var tv=Object.assign({"../../tests/golden/replays/replay-1.json":F_,"../../tests/golden/replays/replay-2.json":I_,"../../tests/golden/replays/replay-3.json":L_,"../../tests/golden/replays/replay-4.json":R_,"../../tests/golden/replays/replay-5.json":z_});function nv(e,n){let r=H(`div`,{class:`screen scroll`}),i=H(`pre`,{class:`tiny`,style:`white-space:pre-wrap; background:#F3F1EC; padding:10px; border-radius:10px; min-height:3em`},``),a=e=>{i.textContent+=e+`
`},o=()=>{i.textContent=``;let e=Object.keys(tv).sort(),t=0,n=performance.now();for(let n of e){let e=tv[n],r=Fg(e),i=r.ok&&r.matches===!0;i&&t++,a(`${i?`一致`:`不一致`}  ${n.split(`/`).pop()}  ${r.ok?`ハッシュ ${r.finalHash}(期待 ${e.result.finalHash})・決着 ${r.endTick}/${e.result.endTick} ティック・チェックポイント ${r.checkpoints?.length}`:r.reason}`)}a(`\n${t}/${e.length} 一致(${(performance.now()-n).toFixed(0)}ms)`);let r=Lg();if(r.length){let e=0,t=0;for(let n of r){let r=Fg(n);r.ok&&(t++,r.matches&&e++)}a(`この端末のバトルのログ: ${e}/${t} 一致(版が違うものは除く。全 ${r.length} 件)`)}},s=H(`pre`,{class:`tiny`,style:`white-space:pre-wrap; background:#F3F1EC; padding:10px; border-radius:10px; min-height:2em`},``),c=()=>{let e=gn();s.textContent=e.monsters.length?e.monsters.map(e=>`${e.spec.name}: ${e.genInput?J_(e.genVersion,e.genInput):`共有できない(生成し直すと見た目が変わる旧データ)`}`).join(`
`):`うちの子がいない`},l=H(`input`,{type:`text`,placeholder:`MB1-XXXX-XXXX-…`,style:`width:100%; font:14px ui-monospace, monospace; padding:8px`}),u=()=>{let e=Y_(l.value);if(!e.ok){s.textContent=`読めない: `+e.reason;return}let t=Date.now();Cn({id:`${e.spec.seed.toString(16)}-${t.toString(36)}`,createdAt:t,genVersion:e.genVersion,genInput:e.input,spec:e.spec,growth:{...Rt}}),s.textContent=`呼んだ: ${e.spec.name}(${e.spec.skeleton}・${e.spec.color}・${e.spec.size}${e.spec.giant?`・巨大`:``})。ホームの「うちの子」に入った`},d=()=>{let e=gn();return`schema ${e.schema} ・ プレイヤー ID ${e.playerId}\nうちの子 ${e.monsters.length} ・ ログ ${e.logs.length} ・ 記録 ${e.stats.length} ・ 大きさ ${(yn()/1024).toFixed(1)}KB`},f=H(`p`,{class:`small`},``),p=()=>{f.textContent=`いまの描画: ${ph()===`placeholder`?`仮(PlaceholderView: 体の箱の大きさの板)`:`3D プリミティブ(Primitive3DView)`}`},m=()=>{try{ph()===`placeholder`?localStorage.removeItem(`mb.debug.view`):localStorage.setItem(`mb.debug.view`,`placeholder`)}catch{}p()};p();let h=H(`pre`,{class:`tiny`,style:`white-space:pre-wrap; background:#F3F1EC; padding:10px; border-radius:10px`},``),g=()=>{let e=gn().stats;if(!e.length){h.textContent=`記録なし(バトルを 1 回終えると増える)`;return}let t=t=>e.reduce((e,n)=>e+t(n),0),n=t(e=>e.dodge.attacks),r=t(e=>e.just.signs),i=e.flatMap(e=>e.signs),a=(e,t)=>t?`${Math.round(e/t*100)}%`:`-`,o=e.filter(e=>e.win===!0).length,s=e.filter(e=>e.win!==null).length;h.textContent=[`バトル ${e.length} 回(決着 ${s}・勝ち ${o} = ${a(o,s)})・調整したバトル ${e.filter(e=>e.tuned).length} 回`,`相手の攻撃 ${n} 回: 完全 ${a(t(e=>e.dodge.perfect),n)}・カスり ${a(t(e=>e.dodge.graze),n)}・空振り ${a(t(e=>e.dodge.early),n)}・被弾 ${a(t(e=>e.dodge.hit),n)}`,`相手の印 ${r} 回: ジャスト ${a(t(e=>e.just.just),r)}・カスり ${a(t(e=>e.just.graze),r)}`,`自分の印 ${i.length} 回: 再現度の平均 ${i.length?Math.round(i.reduce((e,t)=>e+t.fidelity,0)/i.length*100):`-`}%・ゾーン内 ${a(i.filter(e=>e.inZone).length,i.length)}`].join(`
`)};return g(),r.append(H(`div`,{class:`pad col`,style:`gap:14px`},H(`div`,{class:`row`,style:`justify-content:space-between`},H(`h1`,{},`デバッグ`),H(`button`,{class:`btn sm ghost`,onClick:()=>n({name:`home`})},`← ホーム`)),H(`h2`,{},`版`),H(`pre`,{class:`tiny`,style:`white-space:pre-wrap`},`${t().map(([e,t])=>`${e} = ${t}`).join(`
`)}\nbuild = ${Ue}\nUA = ${navigator.userAgent}`),H(`h2`,{},`セーブデータ`),H(`pre`,{class:`tiny`,style:`white-space:pre-wrap`},d()),H(`h2`,{},`共有コード`),H(`p`,{class:`small sub`},`中身は生成器の版と生成の値だけ(あだ名・印・切り出し画像は入らない)。読み込むと生成し直す。`),H(`button`,{class:`btn`,onClick:c},`コードを書き出す`),l,H(`button`,{class:`btn`,onClick:u},`コードから呼ぶ`),s,H(`h2`,{},`描画の差し替え`),H(`p`,{class:`small sub`},`バトル・召喚・カードのキャラを、仮の描画に差し替える(M3 で 2D の切り絵に切り替えられることの確認)。次に開いた画面から効く。`),f,H(`button`,{class:`btn`,onClick:m},`描画を切り替える`),H(`h2`,{},`記録`),H(`p`,{class:`small sub`},`この端末のバトルの要約(直近 200 回)。外部には送らない。`),H(`div`,{class:`row`,style:`gap:8px`},H(`button`,{class:`btn sm`,onClick:g},`記録を見る`),H(`button`,{class:`btn sm`,onClick:()=>{let e=gn().monsters.find(e=>e.genInput);if(!e||!e.genInput){h.textContent=`共有できる子がいない`;return}let t=Q_(gn().stats,{code:J_(e.genVersion,e.genInput),growth:e.growth,sign:e.sign?{complexity:e.sign.features.complexity,features:e.sign.features}:null});if(!t){h.textContent=`使える記録がない(調整していない、いまの版のバトルだけを使う)`;return}let n=ev(t);h.textContent=`検査: ${n.length?`NG `+n.join(` / `):`通る`}\n`+JSON.stringify(t,null,1)}},`行動プロフィールを作る`)),h,H(`h2`,{},`リプレイの検証`),H(`p`,{class:`small sub`},`同梱したゴールデンのログ(node で作ったもの)をこの端末で再生し、決着と状態のハッシュが一致するかを見る。`),H(`button`,{class:`btn`,onClick:o},`リプレイの検証`),i)),e.append(r),{unmount:()=>{Ye(r),r.remove()}}}function rv(e,t){let n=H(`div`,{class:`screen scroll`}),i=En(),a=(e,t)=>{let n=H(`input`,{type:`checkbox`});return n.checked=i[e],n.addEventListener(`change`,()=>{Dn({[e]:n.checked}),e===`sound`&&n.checked&&(ot(),bt(`open`))}),H(`label`,{class:`toggle`},n,t)},o=(e,t,n,r,a,o,s)=>{let c=H(`input`,{type:`range`,min:String(n),max:String(r),step:String(a),style:`flex:1`});c.value=String(i[e]);let l=H(`span`,{class:`small`,style:`width:64px; text-align:right`},o(i[e]));return c.addEventListener(`input`,()=>{let t=+c.value;l.textContent=o(t),Dn({[e]:t})}),c.addEventListener(`change`,()=>{e===`sfxVolume`&&(ot(),bt(`open`))}),H(`div`,{class:`col`,style:`gap:4px`},H(`label`,{class:`row small`,style:`gap:8px`},H(`span`,{style:`width:120px`},t),c,l),s?H(`p`,{class:`tiny sub`},s):null)},s=e=>r(`settings.percent`,{pct:Math.round(e*100)});return n.append(H(`div`,{class:`pad col`,style:`gap:14px`},H(`div`,{class:`row`,style:`justify-content:space-between`},H(`h1`,{},r(`settings.title`)),H(`button`,{class:`btn sm ghost`,onClick:()=>t({name:`home`})},r(`common.toHome`))),a(`sound`,r(`settings.sound`)),o(`sfxVolume`,r(`settings.sfxVolume`),0,1,.05,s),a(`bgmOn`,r(`settings.bgmOn`)),o(`bgmVolume`,r(`settings.bgmVolume`),0,1,.05,s),o(`inputOffset`,r(`settings.inputOffset`),0,.15,.01,e=>r(`settings.ms`,{ms:Math.round(e*1e3)}),r(`settings.inputOffsetHint`)),a(`reduceFlashing`,r(`settings.reduceFlashing`)),a(`vibration`,r(`settings.vibration`)),a(`castGuide`,r(`settings.castGuide`)))),e.append(n),{unmount:()=>{Ye(n),n.remove()}}}var iv=document.getElementById(`app`),av=null,ov=e=>{switch(av?.unmount(),av=null,e.name){case`home`:av=kn(iv,ov);break;case`summon`:av=Zh(iv,e.mode,ov);break;case`card`:{let t=Tn(e.id);av=t?Jh(iv,t,ov):kn(iv,ov);break}case`sign`:{let t=Tn(e.id);av=t?eg(iv,t,ov):kn(iv,ov);break}case`settings`:av=rv(iv,ov);break;case`debug`:av=nv(iv,ov);break;case`battle`:{let t=Tn(e.id);av=t?j_(iv,t,e.npc,ov):kn(iv,ov);break}}};Tt(),window.__mbSave={doc:gn,mutate:_n},en().then(e=>hn(e)).then(()=>On(En())).catch(e=>console.warn(`initSave failed`,e)).finally(()=>ov({name:`home`}));export{Xt as t};