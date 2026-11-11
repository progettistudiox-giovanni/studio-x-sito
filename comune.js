/* Funzioni condivise: lingua, segnaposto, immagini e percorsi. Non serve modificarle per aggiornare i testi. */
(function(){
  const S=window.SITO;
  let lingua='it';
  try{ lingua=localStorage.getItem('lingua')||'it' }catch(e){}
  const parole={
    it:{home:'Home',progetti:'Progetti',studio:'Studio',contatti:'Contatti',tutti:'Tutti',titolo:'Titolo',luogo:'Luogo',anno:'Anno',tipologia:'Tipologia',stato:'Stato',socio:'Autore',ruolo:'Ruolo',studioCon:'Studio',contesto:'Contesto',docenti:'Docenti',approccio:'Approccio',soci:'Soci',email:'Email',citta:'Città',indirizzo:'Indirizzo',telefono:'Telefono',copia:'Copia',copiato:'Copiato',tuttiProgetti:'Tutti i progetti',prec:'Precedente',succ:'Successivo',apri:'Apri il progetto',foto:'[foto]',daFornire:'Immagini e dati da fornire',diritti:'Tutti i diritti riservati.',filtra:'Filtra per socio',scrivi:'Scriveteci',vediProgetti:'Guarda i progetti'},
    en:{home:'Home',progetti:'Projects',studio:'Practice',contatti:'Contact',tutti:'All',titolo:'Title',luogo:'Location',anno:'Year',tipologia:'Type',stato:'Status',socio:'Author',ruolo:'Role',studioCon:'Practice',contesto:'Setting',docenti:'Faculty',approccio:'Approach',soci:'Partners',email:'Email',citta:'City',indirizzo:'Address',telefono:'Phone',copia:'Copy',copiato:'Copied',tuttiProgetti:'All projects',prec:'Previous',succ:'Next',apri:'Open the project',foto:'[photo]',daFornire:'Images and details to be supplied',diritti:'All rights reserved.',filtra:'Filter by partner',scrivi:'Write to us',vediProgetti:'See the projects'}
  };
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const L=x=>x&&typeof x==='object'&&!Array.isArray(x)?x[lingua]:x;
  const testo=x=>esc(String(L(x)).split('{nome}').join(S.nome)).replace(/\s*\[[^\]]*\]/g,m=>S.mostraSegnaposto?'<mark class="ph">'+m+'</mark>':'').trim();
  window.U={
    S,esc,L,testo,
    t:k=>parole[lingua][k],
    lingua:()=>lingua,
    setLingua(l){lingua=l;document.documentElement.lang=l;try{localStorage.setItem('lingua',l)}catch(e){}},
    socio:id=>S.soci.find(s=>s.id===id),
    reali:()=>S.progetti.filter(p=>!p.segnaposto),
    img(p,i,sizes,cls){
      const b='img/'+p.cartella+'/'+i[0];
      return '<img class="'+(cls||'')+'" src="'+b+'.webp" srcset="'+b+'-480.webp '+(i[1]>=i[2]?480:Math.round(480*i[1]/i[2]))+'w, '+b+'.webp '+i[1]+'w" sizes="'+sizes+'" width="'+i[1]+'" height="'+i[2]+'" loading="lazy" decoding="async" alt="'+esc(lingua==='it'?i[3]:i[4])+'">';
    },
    cop(p){return p.copertinaRitaglio||p.immagini.find(i=>i[0]===p.copertina)},
    dati(p){const s=this.socio(p.socio);return [['titolo',p.titolo],['luogo',p.luogo],['anno',p.anno],['tipologia',p.tipologia],['stato',p.stato],['socio',s.nome],['contesto',p.contesto],['docenti',p.docenti]]},
    copiaBtn(){
      document.querySelectorAll('[data-copia]').forEach(b=>b.addEventListener('click',()=>{
        const v=b.dataset.copia;
        const ok=()=>{b.textContent=U.t('copiato')};
        if(navigator.clipboard)navigator.clipboard.writeText(v).then(ok).catch(()=>{const r=document.createRange();r.selectNodeContents(b.previousElementSibling);const g=getSelection();g.removeAllRanges();g.addRange(r)});
      }));
    }
  };
  document.documentElement.lang=lingua;
  document.title=S.nome;
})();
