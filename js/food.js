// ===================== FOOD TABS =====================
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.food-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.food-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.food-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      const panel=document.getElementById('panel-'+tab.dataset.panel);
      if(panel)panel.classList.add('active');
    });
  });
});