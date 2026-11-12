/* Motore del sito. I contenuti stanno in contenuti.js: qui non serve modificare nulla per aggiornare i testi.
   Funzioni riprese da giovannitelve.it: tre viste dei progetti, disegno al passaggio del mouse, apertura delle
   immagini con clic o barra spaziatrice, ingrandimento, gesti su telefono, frecce da tastiera, cursori a segno,
   mappa sul luogo. */
(function(){
const {S,t,testo,esc}=U,app=document.getElementById('app');
const $=id=>document.getElementById(id);
const ePhoto=i=>/^(foto|modello|viste|copertina)/.test(i[0]);
const it=()=>U.lingua()==='it';
const hasHover=()=>matchMedia('(hover:hover) and (pointer:fine)').matches;
const quiet=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
const proj=id=>U.reali().find(x=>x.id===id);
const parole={it:{immagini:'Immagini',indice:'Indice',cronologia:'Cronologia',disegni:'Disegni',chiudi:'Chiudi',visore:'Immagini del progetto',copia:'Copia link',copiato:'Copiato',vista:'Vista dei progetti',mappa:'Apri la posizione'},en:{immagini:'Images',indice:'Index',cronologia:'Timeline',disegni:'Drawings',chiudi:'Close',visore:'Project images',copia:'Copy link',copiato:'Copied',vista:'Project view',mappa:'Open the location'}};
const w=k=>parole[U.lingua()][k];
let vista='immagini';try{vista=localStorage.getItem('vista')||'immagini'}catch(e){}
if(vista==='cronologia')vista='immagini';   // vista Cronologia tolta per ora: il codice resta, basta rimetterla nell'elenco delle viste
let scrollGriglia=0,rottaPrima=null;

/* ── Cursori a segno ── */
const SIGN={prev:{vb:'-0.1 -0.1 0.908 1.616',d:'M0.708 0 L0 0.708 L0.708 1.416'},next:{vb:'-0.1 -0.1 0.908 1.616',d:'M0 0 L0.708 0.708 L0 1.416'},plus:{vb:'-0.1 -0.1 1.616 1.616',d:'M0.708 0 L0.708 1.416 M0 0.708 L1.416 0.708'},close:{vb:'-0.1 -0.1 1.2 1.2',d:'M0 1 L1 0 M0 0 L1 1'},arrow:{vb:'-0.1 -0.1 1.2 1.2',d:'M0.752 0 L0 0 L0 0.752 M0 0 L1 1',hot:[0,0]},out:{vb:'-0.1 -0.1 1.2 1.2',d:'M0 1 L1 0 M0.248 0 L1 0 L1 0.752',hot:[1,0]}};
function segno(k,size){const [x,y,wd,hh]=SIGN[k].vb.split(' ').map(Number),pad=.15,vb=(x-pad)+' '+(y-pad)+' '+(wd+2*pad)+' '+(hh+2*pad),sw=Math.max(wd,hh)+2*pad,W=Math.round(size*(wd+2*pad)/sw),H=Math.round(size*(hh+2*pad)/sw);
  const svg="<svg xmlns='http://www.w3.org/2000/svg' width='"+W+"' height='"+H+"' viewBox='"+vb+"'><path d='"+SIGN[k].d+"' fill='none' stroke='black' stroke-width='0.2' stroke-linecap='round' stroke-linejoin='round'/></svg>";
  const [hx,hy]=SIGN[k].hot||[x+wd/2,y+hh/2];
  return 'url("data:image/svg+xml,'+encodeURIComponent(svg)+'") '+Math.round((hx-(x-pad))*W/(wd+2*pad))+' '+Math.round((hy-(y-pad))*H/(hh+2*pad))}
const CUR={prev:segno('prev',20)+', w-resize',next:segno('next',20)+', e-resize',close:segno('close',16)+', pointer'};
(function(){const st=document.documentElement.style;st.setProperty('--cur-arrow',segno('arrow',17)+', default');st.setProperty('--cur-hand',segno('plus',16)+', pointer');st.setProperty('--cur-plus',segno('plus',16)+', zoom-in');st.setProperty('--cur-out',segno('out',15)+', pointer');st.setProperty('--cur-prev',segno('prev',16)+', w-resize');st.setProperty('--cur-next',segno('next',16)+', e-resize')})();

/* ── Pagine ── */
const testa=r=>'<header class="lato"><a href="#">'+esc(S.nome)+'</a><nav aria-label="Menu"><a href="#studio"'+(r==='studio'?' aria-current="page"':'')+'>'+t('studio')+'</a></nav><button class="lingua" id="lng" aria-label="Cambia lingua">'+(it()?'<b>IT</b> / EN':'IT / <b>EN</b>')+'</button></header>';
const piede=()=>'<footer class="lato"><span>© '+S.anno+' '+esc(S.nome)+'. '+t('diritti')+'</span></footer>';
const disegnoHover=p=>p.immagini.find(i=>!ePhoto(i));
const griglia=()=>'<div class="griglia lato">'+U.reali().map((p,n)=>{const d=disegnoHover(p);return '<a class="voce" data-g="'+n+'" href="#p-'+p.id+'"><div class="media'+(p.coperturaIntera?' intera':'')+'">'+U.img(p,U.cop(p),'(max-width:700px) 100vw, 33vw')+(d?U.img(p,d,'(max-width:700px) 100vw, 33vw','alt').replace(/alt="[^"]*"/,'alt=""'):'')+'</div><div class="cap"><span>'+testo(p.titolo)+'</span><span class="a">'+p.anno+'</span><span class="g">'+testo(p.luogo)+'</span><span class="g">'+esc(U.socio(p.socio).nome)+'</span></div></a>'}).join('')+'</div>';
const indice=()=>'<div class="indice lato"><div class="riga testa" aria-hidden="true"><span>'+t('titolo')+'</span><span class="nasc">'+t('socio')+'</span><span class="nasc">'+t('tipologia')+'</span><span class="nasc">'+t('luogo')+'</span><span class="a">'+t('anno')+'</span></div>'+U.reali().map(p=>'<a class="riga" data-idx="'+p.id+'" href="#p-'+p.id+'"><span>'+testo(p.titolo)+'</span><span class="nasc g">'+esc(U.socio(p.socio).nome)+'</span><span class="nasc g">'+testo(p.tipologia)+'</span><span class="nasc g">'+testo(p.luogo)+'</span><span class="a g">'+p.anno+'</span></a>').join('')+'</div>';
const cronologia=()=>{const l=U.reali(),yy=l.map(p=>p.anno),a=Math.max(...yy),b=Math.min(...yy);let o='<div class="crono lato">';for(let y=a;y>=b;y--){const q=l.filter(p=>p.anno===y);o+='<div class="cm-y'+(q.length?'':' vuoto')+'"><span>'+y+'</span><span class="g">'+(q.length||'')+'</span></div>';if(q.length)o+='<div class="cm-t">'+q.map(p=>'<a class="cm-i" title="'+esc(U.L(p.titolo))+', '+esc(U.socio(p.socio).nome)+'" href="#p-'+p.id+'">'+U.img(p,U.cop(p),'96px')+'</a>').join('')+'</div>'}return o+'</div>'};
const barra=()=>'<div class="barra lato"><span>'+t('progetti')+' <span class="g">'+U.reali().length+'</span></span><div class="viste" role="group" aria-label="'+w('vista')+'">'+['immagini','indice'].map(k=>'<button data-v="'+k+'" aria-pressed="'+(vista===k)+'">'+w(k)+'</button>').join('')+'</div></div>';
const elenco=()=>vista==='indice'?indice():vista==='cronologia'?cronologia():griglia();
const home=()=>'<div class="presenta lato"><p>'+testo(S.presentazione)+'</p><p class="g">'+testo(S.avvisoProgetti)+'</p></div>'+barra()+'<div id="elenco">'+elenco()+'</div>';
const scheda=id=>{const p=proj(id);if(!p)return home();document.title=U.L(p.titolo)+' · '+S.nome;const r=U.reali(),n=r.indexOf(p),pr=r[(n-1+r.length)%r.length],su=r[(n+1)%r.length];
  const F=p.immagini.filter(ePhoto),D=p.immagini.filter(i=>!ePhoto(i));
  const fig=i=>'<figure class="it" tabindex="0" role="button" aria-label="'+esc(it()?i[3]:i[4])+'" data-i="'+p.immagini.indexOf(i)+'">'+U.img(p,i,'(max-width:900px) 100vw, '+(ePhoto(i)?'43vw':'29vw'))+'</figure>';
  const col=(k,l)=>'<div class="col'+(l===F?' foto'+(l.length<2?' unica':''):'')+'"><div class="tit"><span>'+k+' <span class="g">'+l.length+'</span></span></div>'+l.map(fig).join('')+'</div>';
  const riga=d=>{let v=testo(d[1]);if(d[0]==='luogo'&&p.mappa)v='<a class="mappa" href="'+esc(p.mappa)+'" target="_blank" rel="noopener" title="'+w('mappa')+'">'+v+'</a>';return '<div class="fila"><dt>'+t(d[0])+'</dt><dd>'+v+'</dd></div>'};
  return '<article class="scheda" data-p="'+p.id+'"><div class="col info"><div class="tit"><a href="#">← '+t('tuttiProgetti')+'</a>'+'</div><h1>'+testo(p.titolo)+'</h1>'+(c=>'<figure class="it solo-m" tabindex="0" role="button" aria-label="'+esc(it()?c[3]:c[4])+'" data-i="'+p.immagini.indexOf(c)+'">'+U.img(p,c,'100vw')+'</figure>')(p.immagini.find(i=>i[0]===p.copertina))+'<dl class="dati">'+U.dati(p).slice(1).map(riga).join('')+'</dl><p class="desc">'+testo(p.descrizione)+'</p><div class="segue"><a class="pv" href="#p-'+pr.id+'">← '+testo(pr.titolo)+'<span class="g">'+esc(U.socio(pr.socio).nome)+'</span></a><a class="nx" href="#p-'+su.id+'">'+testo(su.titolo)+' →<span class="g">'+esc(U.socio(su.socio).nome)+'</span></a></div></div>'+col(w('immagini'),F)+col(w('disegni'),D)+'</article>'};
const cv=s=>{const z=(s.cv||[]).map(x=>{const v=x.voci.filter(v=>testo(v.testo)).map(v=>'<div class="fila"><dt>'+testo(v.anni)+'</dt><dd>'+testo(v.testo)+(v.dove&&testo(v.dove)?'<span class="g">'+testo(v.dove)+'</span>':'')+'</dd></div>').join('');return v?'<h3>'+testo(x.titolo)+'</h3><dl class="dati">'+v+'</dl>':''}).join('');return '<div class="cv">'+z+'</div>'};
const studio=()=>'<div class="presenta lato"><p>'+testo(S.presentazione)+'</p>'+(testo(S.approccio)?'<p>'+testo(S.approccio)+'</p>':'')+'</div><div class="soci lato">'+S.soci.map(s=>'<section class="socio"><h2>'+esc(s.nome)+'</h2><p>'+testo(s.bio)+'</p>'+cv(s)+'</section>').join('')+'</div>';

/* ── Anteprima che segue il cursore ── */
const cur=document.createElement('div');cur.id='cursore';cur.hidden=true;document.body.appendChild(cur);
const mostraAnt=p=>{cur.innerHTML=U.img(p,U.cop(p),'300px').replace('loading="lazy"','loading="eager"');cur.hidden=false};
function sopra(x,y){const W=cur.offsetWidth,h=cur.offsetHeight,yy=y-h-14;cur.style.left=Math.min(Math.max(8,x-W/2),innerWidth-W-8)+'px';cur.style.top=(yy<8?y+18:yy)+'px'}
function accanto(x,y){const W=cur.offsetWidth,h=cur.offsetHeight;let a=x+16,b=y+16;if(a+W>innerWidth)a=x-W-16;if(b+h>innerHeight)b=y-h-16;cur.style.left=a+'px';cur.style.top=b+'px'}
function anteprime(){cur.hidden=true;
  const lega=(sel,attr,pos,cls)=>app.querySelectorAll(sel).forEach(a=>{
    a.addEventListener('mouseenter',e=>{if(!hasHover())return;cur.className=cls;mostraAnt(proj(a.getAttribute(attr)));pos(e.clientX,e.clientY)});
    a.addEventListener('mousemove',e=>{if(!cur.hidden)pos(e.clientX,e.clientY)});
    a.addEventListener('mouseleave',()=>{cur.hidden=true});
  });
  lega('[data-prev]','data-prev',sopra,'piccola');
  lega('[data-idx]','data-idx',accanto,'grande');
}

/* ── Immagini aperte ── */
const lb=document.createElement('div');lb.id='lb';lb.tabIndex=-1;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
lb.innerHTML='<img id="lb-img" alt=""><button id="lb-x"><svg viewBox="-0.1 -0.1 1.2 1.2" aria-hidden="true"><path d="M0 1 L1 0 M0 0 L1 1"/></svg></button><div id="lb-info"><span id="lb-cap"></span><span class="lb-dx"><button id="lb-link" hidden></button><span id="lb-n"></span></span></div>';
document.body.appendChild(lb);lb.style.cursor=CUR.close;
const lbI=$('lb-img');let lista=[],pos=0,aperta=false,fuoco=null,ultimoMouse=null,sotto=null;
let progetto=null,inCronologia=false,cambiato=false;   // progetto: immagini con link proprio; null per le copertine della griglia
const paginaPropria=()=>{try{return window.self===window.top}catch(e){return false}};
const listaProgetto=p=>[...p.immagini.filter(ePhoto),...p.immagini.filter(i=>!ePhoto(i))].map(i=>({p,i}));
const hashImg=()=>'#p-'+progetto.id+'-img-'+(pos+1);
const Z={z:1,x:0,y:0};
const srcDi=e=>'img/'+e.p.cartella+'/'+e.i[0]+'.webp';
function applica(){lbI.style.transform=Z.z===1?'':'translate('+Z.x+'px,'+Z.y+'px) scale('+Z.z+')';lb.classList.toggle('zoomed',Z.z>1)}
function azzera(){Z.z=1;Z.x=0;Z.y=0;applica()}
function limita(){const r=lbI.getBoundingClientRect(),W=r.width/Z.z,H=r.height/Z.z,mx=Math.max(0,(W*Z.z-innerWidth)/2+60),my=Math.max(0,(H*Z.z-innerHeight)/2+60);Z.x=Math.max(-mx,Math.min(mx,Z.x));Z.y=Math.max(-my,Math.min(my,Z.y))}
function zoomA(cx,cy,nz){nz=Math.max(1,Math.min(6,nz));if(nz===1){azzera();return}caricaAlta();const r=lbI.getBoundingClientRect(),ox=r.left+r.width/2,oy=r.top+r.height/2,k=nz/Z.z;Z.x+=(cx-ox)*(1-k);Z.y+=(cy-oy)*(1-k);Z.z=nz;limita();applica()}
/* Alta risoluzione: i file "nome-alta.webp" dei nomi elencati nel campo "alta" del progetto si caricano solo ingrandendo. */
let gettone=0;
function caricaAlta(){const e=lista[pos];if(!e||!e.p.alta||!e.p.alta.includes(e.i[0])||e.alta)return;e.alta=true;const g=gettone,im=new Image(),src='img/'+e.p.cartella+'/'+e.i[0]+'-alta.webp';im.onload=()=>{if(g===gettone&&aperta)lbI.src=src};im.src=src}
function disegna(){azzera();gettone++;const e=lista[pos];e.alta=false;lbI.src=srcDi(e);const c=it()?e.i[3]:e.i[4];lbI.alt=c||'';$('lb-cap').textContent=U.L(e.p.titolo)+'. '+(c||'');$('lb-n').textContent=lista.length>1?(pos+1)+' / '+lista.length:'';
  const b=$('lb-link');b.hidden=!(progetto&&paginaPropria());b.textContent=w('copia')}
function vai(d){
  if(!progetto){pos=(pos+d+lista.length)%lista.length;disegna();return}
  const n=pos+d;
  if(n>=0&&n<lista.length)pos=n;
  else{const r=U.reali(),k=r.indexOf(progetto),q=r[(k+(n<0?r.length-1:1))%r.length];progetto=q;lista=listaProgetto(q);pos=n<0?lista.length-1:0}
  cambiato=true;disegna();location.replace(hashImg())}
function apri(l,i,da,p){progetto=p||null;cambiato=false;inCronologia=false;lista=l;pos=i;cur.hidden=true;disegna();aperta=true;lb.classList.add('open');document.body.classList.add('lb-open');lb.setAttribute('aria-label',w('visore'));$('lb-x').setAttribute('aria-label',w('chiudi'));
  fuoco=document.activeElement&&document.activeElement!==document.body?document.activeElement:null;lb.focus({preventScroll:true});
  const th=da&&da.querySelector('img');if(!th||quiet())return;const from=th.getBoundingClientRect();
  const cresci=()=>{const to=lbI.getBoundingClientRect();if(!to.width||!from.width)return;const k=from.width/to.width;lbI.style.transition='none';lbI.style.transform='translate('+(from.left+from.width/2-(to.left+to.width/2))+'px,'+(from.top+from.height/2-(to.top+to.height/2))+'px) scale('+k+')';lbI.getBoundingClientRect();lbI.style.transition='transform .24s cubic-bezier(.2,.8,.2,1)';lbI.style.transform='';setTimeout(()=>{lbI.style.transition=''},260)};
  if(lbI.complete&&lbI.naturalWidth)cresci();else lbI.addEventListener('load',cresci,{once:true})}
function chiudi(){const p=progetto;chiudiVista();if(p){const dest='#p-'+p.id;if(inCronologia&&!cambiato)history.back();else location.replace(dest)}}
function chiudiVista(){aperta=false;gettone++;lb.classList.remove('open');lb.style.opacity='';lbI.src='';azzera();document.body.classList.remove('lb-open');if(ultimoMouse){const el=document.elementFromPoint(ultimoMouse[0],ultimoMouse[1]);sotto=el&&el.closest?el.closest('figure.it,.voce'):null}if(fuoco&&document.contains(fuoco))fuoco.focus({preventScroll:true});fuoco=null}
const apriEl=el=>{
  if(el.matches('.voce')){const r=U.reali();apri(r.map(p=>({p,i:U.cop(p)})),+el.dataset.g,el);return}
  const p=proj(el.closest('.scheda').dataset.p),l=listaProgetto(p);
  apri(l,l.findIndex(e=>e.i===p.immagini[+el.dataset.i]),el,p);inCronologia=true;location.hash=hashImg().slice(1)};
$('lb-link').addEventListener('click',e=>{e.stopPropagation();const b=e.currentTarget;navigator.clipboard&&navigator.clipboard.writeText(location.href).then(()=>{b.textContent=w('copiato')}).catch(()=>{})});
let mosso=false,pan=null;
lb.addEventListener('wheel',e=>{e.preventDefault();if(e.ctrlKey)zoomA(e.clientX,e.clientY,Z.z*Math.exp(-Math.max(-25,Math.min(25,e.deltaY))*.012));else if(Z.z>1){Z.x-=e.deltaX;Z.y-=e.deltaY;limita();applica()}},{passive:false});
lb.addEventListener('mousedown',e=>{mosso=false;if(Z.z>1){pan={x:e.clientX-Z.x,y:e.clientY-Z.y,sx:e.clientX,sy:e.clientY};lbI.classList.add('afferra');e.preventDefault()}});
addEventListener('mousemove',e=>{ultimoMouse=[e.clientX,e.clientY];if(!pan)return;if(Math.abs(e.clientX-pan.sx)+Math.abs(e.clientY-pan.sy)>4)mosso=true;Z.x=e.clientX-pan.x;Z.y=e.clientY-pan.y;limita();applica()},{passive:true});
addEventListener('mouseup',()=>{pan=null;lbI.classList.remove('afferra')});
const meta=e=>{const r=lbI.getBoundingClientRect();return e.clientX<r.left+r.width/2?-1:1};
lbI.addEventListener('mousemove',e=>{lbI.style.cursor=Z.z>1?(pan?'grabbing':'grab'):lista.length>1?(meta(e)<0?CUR.prev:CUR.next):CUR.close});
lb.addEventListener('click',e=>{if(mosso){mosso=false;return}if(e.target===lbI){if(Z.z>1)return;if(lista.length>1)vai(meta(e));else chiudi();return}if(e.target.closest('#lb-link'))return;chiudi()});
let tx=null,ty=0,giu=false,piz=null;const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);
lb.addEventListener('touchstart',e=>{lbI.style.transition='';if(e.touches.length===2){tx=null;giu=false;pan=null;piz={d:dist(e.touches),z:Z.z};return}if(Z.z>1){pan={x:e.touches[0].clientX-Z.x,y:e.touches[0].clientY-Z.y,sx:e.touches[0].clientX,sy:e.touches[0].clientY,t:e.target};tx=null;return}tx=e.touches[0].clientX;ty=e.touches[0].clientY;giu=false},{passive:true});
lb.addEventListener('touchmove',e=>{if(piz&&e.touches.length===2){zoomA((e.touches[0].clientX+e.touches[1].clientX)/2,(e.touches[0].clientY+e.touches[1].clientY)/2,piz.z*dist(e.touches)/piz.d);return}if(pan&&e.touches.length===1){Z.x=e.touches[0].clientX-pan.x;Z.y=e.touches[0].clientY-pan.y;limita();applica();return}if(tx===null)return;const dx=e.touches[0].clientX-tx,dy=e.touches[0].clientY-ty;if(!giu&&dy>12&&dy>Math.abs(dx)*1.5)giu=true;if(giu){const d=Math.max(0,dy);lbI.style.transform='translateY('+d+'px)';lb.style.opacity=String(Math.max(.4,1-d/500))}},{passive:true});
lb.addEventListener('touchend',e=>{if(piz||pan){if(e.touches.length===0){piz=null;pan=null}if(e.cancelable)e.preventDefault();return}if(tx===null)return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;tx=null;if(giu){giu=false;if(e.cancelable)e.preventDefault();if(dy>90)chiudi();else{lbI.style.transform='';lb.style.opacity=''}return}if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)){if(e.cancelable)e.preventDefault();vai(dx<0?1:-1)}});
document.addEventListener('selectstart',e=>{const n=e.target.nodeType===3?e.target.parentElement:e.target;if(n&&n.closest&&n.closest('#lb'))e.preventDefault()});

/* ── Tastiera ── */
document.addEventListener('mouseover',e=>{const el=e.target.closest&&e.target.closest('figure.it,.voce');sotto=el||null});
document.addEventListener('keydown',e=>{if(e.key!==' '||e.metaKey||e.ctrlKey||e.altKey)return;
  if(aperta){e.preventDefault();e.stopImmediatePropagation();chiudi();return}
  if(sotto&&document.contains(sotto)){e.preventDefault();e.stopImmediatePropagation();apriEl(sotto)}},true);
document.addEventListener('keydown',e=>{const pl=!e.altKey&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey,a=document.activeElement;
  if(aperta){if(e.key==='Escape'){Z.z>1?azzera():chiudi()}if(pl&&(e.key==='ArrowLeft'||e.key==='ArrowUp')){e.preventDefault();vai(-1)}if(pl&&(e.key==='ArrowRight'||e.key==='ArrowDown')){e.preventDefault();vai(1)}if(e.key==='Tab'){e.preventDefault();lb.focus()}return}
  if((e.key==='Enter'||e.key===' ')&&a&&a.matches&&a.matches('figure.it')){e.preventDefault();apriEl(a);return}
  const sc=document.querySelector('.scheda');
  if(sc&&e.key==='Escape'){location.hash='';return}
  if(sc&&pl&&e.key==='ArrowLeft'){e.preventDefault();location.hash=sc.querySelector('.pv').getAttribute('href').slice(1)}
  if(sc&&pl&&e.key==='ArrowRight'){e.preventDefault();location.hash=sc.querySelector('.nx').getAttribute('href').slice(1)}
  if(a&&a.dataset&&a.dataset.v&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){const v=['immagini','indice'],k=(v.indexOf(a.dataset.v)+1)%2;e.preventDefault();setVista(v[k]);const b=app.querySelector('[data-v="'+v[k]+'"]');b&&b.focus()}
});

/* ── Telefono: tenendo il dito su un progetto si vede il disegno; sull'indice l'anteprima sopra il dito ── */
(function(){let ts=null,tm=null,cardOn=null,riga=null,sx=0,sy=0,usato=false;
  const carta=el=>el&&el.closest?el.closest('.voce'):null;
  const setC=c=>{if(cardOn===c)return;cardOn&&cardOn.classList.remove('peek');cardOn=c;c&&c.classList.add('peek')};
  document.addEventListener('touchstart',e=>{if(aperta||e.touches.length!==1)return;const T=e.touches[0];sx=T.clientX;sy=T.clientY;usato=false;clearTimeout(tm);const el=document.elementFromPoint(sx,sy);
    tm=setTimeout(()=>{const c=carta(el),r=el&&el.closest?el.closest('[data-idx]'):null;if(c){setC(c);usato=true}if(r){riga=r;cur.className='piccola';mostraAnt(proj(r.dataset.idx));sopra(sx,sy);usato=true}},320)},{passive:true});
  document.addEventListener('touchmove',e=>{const T=e.touches[0];if(Math.abs(T.clientY-sy)>8||Math.abs(T.clientX-sx)>8){clearTimeout(tm);if(riga){cur.hidden=true;riga=null}}if(cardOn)setC(carta(document.elementFromPoint(T.clientX,T.clientY)))},{passive:true});
  const fine=e=>{clearTimeout(tm);setC(null);if(riga){cur.hidden=true;riga=null}if(usato&&e.cancelable)e.preventDefault();usato=false};
  document.addEventListener('touchend',fine);document.addEventListener('touchcancel',fine,{passive:true});
})();
/* Telefono: scorrendo in giù la testata si nasconde */
(function(){let last=0;addEventListener('scroll',()=>{const y=scrollY,m=matchMedia('(max-width:760px)').matches;if(!m||y<8||document.querySelector('.scheda'))document.body.classList.remove('hdr-hide');else if(y>last+6&&y>60)document.body.classList.add('hdr-hide');else if(y<last-6)document.body.classList.remove('hdr-hide');last=y},{passive:true})})();

function setVista(v){vista=v;try{localStorage.setItem('vista',v)}catch(e){}app.querySelectorAll('[data-v]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===v));$('elenco').innerHTML=elenco();anteprime()}
const rottaImg=h=>h.match(/^p-(.+)-img-(\d+)$/);
function mostra(ins){let r=location.hash.slice(1);if(r==='contatti')r='studio';const m=rottaImg(r);if(m)r='p-'+m[1];document.title=S.nome;
  if(rottaPrima===''&&r!=='')scrollGriglia=scrollY;
  const yPrima=scrollY,keep=[...document.querySelectorAll('.col')].map(c=>c.scrollTop);
  const c=r==='studio'?studio():r.startsWith('p-')?scheda(r.slice(2)):home();
  app.innerHTML=testa(r)+'<main>'+c+'</main>'+(r.startsWith('p-')?'':piede());
  $('lng').onclick=()=>{U.setLingua(it()?'en':'it');mostra(true);if(aperta)disegna()};
  app.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>setVista(b.dataset.v));
  app.querySelectorAll('figure.it').forEach(f=>f.onclick=()=>apriEl(f));
  anteprime();sotto=null;document.body.classList.remove('hdr-hide');
  if(ins){window.scrollTo(0,yPrima);document.querySelectorAll('.col').forEach((x,i)=>x.scrollTop=keep[i]||0)}
  else window.scrollTo(0,r===''&&rottaPrima&&rottaPrima.startsWith('p-')?scrollGriglia:0);
  rottaPrima=r}
function daRotta(){const h=location.hash.slice(1),m=rottaImg(h);
  if(!m){if(aperta)chiudiVista();const r=h==='contatti'?'studio':h;if(r!==rottaPrima)mostra();return}
  const p=proj(m[1]);if(!p){if(aperta)chiudiVista();mostra();return}
  if(rottaPrima!=='p-'+p.id)mostra();
  const l=listaProgetto(p),n=Math.max(0,Math.min(l.length-1,+m[2]-1));
  if(aperta&&progetto===p&&pos===n)return;
  if(aperta&&progetto===p){pos=n;disegna();return}
  if(aperta)chiudiVista();
  apri(l,n,null,p)}
addEventListener('hashchange',daRotta);mostra();daRotta();
})();
