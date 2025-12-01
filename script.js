
// Simple gallery lightbox
document.addEventListener('click', function(e){
  if(e.target.matches('.gallery img')){
    const src = e.target.getAttribute('src');
    openLightbox(src);
  }
  if(e.target.matches('.lightbox') || e.target.matches('.lightbox .close')){
    document.querySelectorAll('.lightbox').forEach(n=>n.remove());
  }
});

function openLightbox(src){
  const div = document.createElement('div');
  div.className = 'lightbox';
  div.style.position='fixed'; div.style.left=0; div.style.top=0; div.style.right=0; div.style.bottom=0;
  div.style.background='rgba(0,0,0,0.7)'; div.style.display='flex'; div.style.alignItems='center'; div.style.justifyContent='center'; div.style.zIndex=9999;
  div.innerHTML = `<div style="position:relative; max-width:90%; max-height:90%">
    <img src="${src}" style="width:100%; height:auto; border-radius:8px; display:block;"/>
    <button class="close" style="position:absolute; right:-10px; top:-10px; background:#fff; border-radius:999px; border:none; padding:8px 10px; font-weight:700;">✕</button>
  </div>`;
  document.body.appendChild(div);
}
