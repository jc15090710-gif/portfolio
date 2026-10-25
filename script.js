document.querySelectorAll('[data-unset-link]').forEach(function(link){link.addEventListener('click',function(event){event.preventDefault();alert(this.dataset.unsetLink+' がまだ設定されていません。');});});


// Auto-scroll until interaction; after that, allow normal finger, trackpad and mouse dragging.
(function(){
  const viewport=document.querySelector('.gallery-window');
  if(!viewport)return;
  const track=viewport.querySelector('.gallery-track');
  const duplicate=track.querySelector('.gallery-group[aria-hidden="true"]');
  let manual=false, dragging=false, startX=0, startLeft=0, moved=false, suppressClick=false;
  function activateManual(){
    if(manual)return;
    const first=track.querySelector('.gallery-group');
    const width=first?first.getBoundingClientRect().width:0;
    const matrix=new DOMMatrixReadOnly(getComputedStyle(track).transform);
    const offset=Math.abs(matrix.m41);
    track.style.animation='none';
    track.style.transform='none';
    viewport.classList.add('manual-scroll');
    if(duplicate)duplicate.hidden=true;
    manual=true;
    viewport.scrollLeft=width?offset%width:0;
  }
  viewport.addEventListener('touchstart',activateManual,{passive:true});
  viewport.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>0)activateManual();},{passive:true});
  viewport.addEventListener('pointerdown',function(e){
    if(e.pointerType!=='mouse'||e.button!==0)return;
    activateManual();dragging=true;moved=false;startX=e.clientX;startLeft=viewport.scrollLeft;
  });
  window.addEventListener('pointermove',function(e){
    if(!dragging)return;const dx=e.clientX-startX;
    if(Math.abs(dx)>5){moved=true; viewport.scrollLeft=startLeft-dx; e.preventDefault();}
  });
  window.addEventListener('pointerup',function(){
    if(dragging&&moved){suppressClick=true;setTimeout(()=>{suppressClick=false},0)}
    dragging=false;
  });
  viewport.addEventListener('click',function(e){if(suppressClick){e.preventDefault();e.stopPropagation();} },true);
  document.querySelectorAll('.gallery-arrow').forEach(btn=>btn.addEventListener('click',()=>{
    activateManual(); viewport.scrollBy({left:(btn.dataset.galleryDirection==='next'?1:-1)*Math.min(340,viewport.clientWidth*.8),behavior:'smooth'});
  }));
  viewport.addEventListener('keydown',function(e){
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){activateManual();viewport.scrollBy({left:e.key==='ArrowRight'?220:-220,behavior:'smooth'});e.preventDefault();}
  });
})();
