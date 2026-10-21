/* Terooka journal: shared storage + helpers (used by journal.html and journal-edit.html) */
var session=null;try{session=JSON.parse(localStorage.getItem('terooka_session'))}catch(e){}
if(!session)location.replace('auth.html');
var uid=session.username||session.email||'guest',TKEY='terooka_travelogue_'+uid;
var books=[];try{books=JSON.parse(localStorage.getItem(TKEY))||[]}catch(e){}
books.forEach(function(b){if(!b.pages)b.pages=[{caption:b.note||'',items:[]}];b.pages.forEach(function(p){if(!p.items)p.items=[];if(p.photo){p.items.unshift({t:'photo',src:p.photo,x:12,y:5,w:76,r:-1,frame:true});delete p.photo}})});
var COVERS=['#5724A3,#8834B9','#C12D91,#E0679E','#4a1d8a,#B04BC2','#D9517A,#F58AA6','#8834B9,#D842A0'],
  /* Put your GPT-made stamp PNG/JPGs in a stamps/ folder, named by id (stamps/kelantan.png) */
  STAMP_LIB=[{id:'kelantan',name:'Kelantan'},{id:'melaka',name:'Melaka'},{id:'penang',name:'Penang'},{id:'langkawi',name:'Langkawi'},{id:'kuala-lumpur',name:'Kuala Lumpur'},{id:'cameron-highlands',name:'Cameron Highlands'},{id:'sabah',name:'Sabah'},{id:'sarawak',name:'Sarawak'}],
  EMO=['🌺','🍜','✈️','📍','🌴','⭐','🎒','☕','🏝️','💜','🛺','📸','🌧️','🍉'];
function $(s,r){return (r||document).querySelector(s)}
function el(t,p){var e=document.createElement(t);p=p||{};Object.keys(p).forEach(function(k){if(k==='class')e.className=p[k];else if(k==='text')e.textContent=p[k];else if(k.indexOf('on')===0)e.addEventListener(k.slice(2),p[k]);else e.setAttribute(k,p[k])});for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c!=null)e.appendChild(typeof c==='string'?document.createTextNode(c):c)}return e}
function cover(b){return 'linear-gradient(135deg,'+COVERS[Math.abs(Number(b.id)||0)%COVERS.length]+')'}
var tt;function toast(t){var x=$('#toast');x.textContent=t;x.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){x.classList.remove('show')},2300)}
function save(){try{localStorage.setItem(TKEY,JSON.stringify(books));return true}catch(e){toast('Storage is full. Remove a photo or page and try again.');return false}}
function fmt(iso){try{return new Date(iso).toLocaleDateString('en-MY',{day:'numeric',month:'short',year:'numeric'})}catch(e){return ''}}
