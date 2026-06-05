// ===================== COUNTER ANIMATION =====================
function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseInt(el.dataset.count);
    let current=0;
    const step=Math.ceil(target/30);
    const timer=setInterval(()=>{
      current=Math.min(current+step,target);
      el.textContent=current+(el.dataset.count==='120'?'':'+');
      if(current>=target)clearInterval(timer);
    },40);
  });
}
// animateCounters is called by the loader in script.js after 2s