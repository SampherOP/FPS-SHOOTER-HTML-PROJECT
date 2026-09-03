(()=>{
  'use strict';
  const canvas=document.getElementById('game');
  if(!canvas)return;

  // ` (Backquote) = toggle mouse lock while playing.
  document.addEventListener('keydown',e=>{
    if(e.code==='Backquote'){
      e.preventDefault();
      e.stopPropagation();
      if(document.pointerLockElement===canvas) document.exitPointerLock?.();
      else canvas.requestPointerLock?.();
      return;
    }

    // While the mouse is locked, stop browser/page shortcuts from stealing input.
    if(document.pointerLockElement!==canvas)return;
    if(e.ctrlKey||e.metaKey||e.altKey||e.key==='F5'||e.key==='F6'||e.key==='F11'||e.key==='F12'){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  },true);

  document.addEventListener('contextmenu',e=>{
    if(document.pointerLockElement===canvas)e.preventDefault();
  },true);
})();
