// ===================== PARTICLE SYSTEM =====================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let streaks = [];

function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
resize();
window.addEventListener('resize',resize);

class Particle {
  constructor(){this.reset()}
  reset(){
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*canvas.height;
    this.vx=(Math.random()-0.5)*0.4;
    this.vy=(Math.random()-0.5)*0.4;
    this.size=Math.random()*1.5+0.3;
    this.alpha=Math.random()*0.5+0.1;
    this.color=Math.random()>0.5?'0,212,255':'168,85,247';
  }
  update(){
    this.x+=this.vx;this.y+=this.vy;
    if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height)this.reset();
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

class Streak {
  constructor(){this.reset()}
  reset(){
    this.x=Math.random()*canvas.width;
    this.y=-20;
    this.len=Math.random()*80+40;
    this.speed=Math.random()*3+1;
    this.alpha=Math.random()*0.15+0.03;
    this.color=Math.random()>0.5?'0,212,255':'168,85,247';
  }
  update(){
    this.y+=this.speed;
    if(this.y>canvas.height+this.len)this.reset();
  }
  draw(){
    const grad=ctx.createLinearGradient(this.x,this.y,this.x,this.y+this.len);
    grad.addColorStop(0,`rgba(${this.color},0)`);
    grad.addColorStop(0.5,`rgba(${this.color},${this.alpha})`);
    grad.addColorStop(1,`rgba(${this.color},0)`);
    ctx.beginPath();ctx.moveTo(this.x,this.y);ctx.lineTo(this.x,this.y+this.len);
    ctx.strokeStyle=grad;ctx.lineWidth=1;ctx.stroke();
  }
}

for(let i=0;i<80;i++)particles.push(new Particle());
for(let i=0;i<15;i++)streaks.push(new Streak());

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw()});
  streaks.forEach(s=>{s.update();s.draw()});
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===================== LOADER (SESSION CONTROLLED) =====================
const loader = document.getElementById('loader');
const ltEl = document.getElementById('loaderText');

if (loader) {
  // If the user has already loaded the site in this session, skip the loader completely
  if (sessionStorage.getItem('siteInitialized')) {
    loader.style.display = 'none';
    if (typeof animateCounters === 'function') animateCounters();
  } else {
    // First time visit configuration
    const loaderTexts = ['INITIALIZING SYSTEMS...', 'LOADING GAME LIBRARY...', 'CALIBRATING DISPLAYS...', 'ENGAGING NEON CORE...', 'READY TO LEVEL UP!'];
    let ltIdx = 0;
    
    if (ltEl) {
      const ltInterval = setInterval(() => {
        ltIdx++;
        if (ltIdx < loaderTexts.length) ltEl.textContent = loaderTexts[ltIdx];
        else clearInterval(ltInterval);
      }, 360);
    }

    setTimeout(() => {
      loader.classList.add('hidden');
      // Mark the session as initialized so it skips next time
      sessionStorage.setItem('siteInitialized', 'true');
      if (typeof animateCounters === 'function') animateCounters();
    }, 2000);
  }
}

// ===================== MOBILE NAV =====================
let mobileOpen=false;
function toggleMobileNav(){
  mobileOpen=!mobileOpen;
  const nav=document.getElementById('mobileNav');
  if(nav)nav.classList.toggle('open',mobileOpen);
}

// Set active nav link based on current page
(function setActiveNav(){
  const path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a=>{
    const href=a.getAttribute('href').split('/').pop();
    if(href===path||(path===''&&href==='index.html')){
      a.classList.add('active');
    }
  });
})();

// ===================== SCROLL ANIMATIONS =====================
function observeAnimations(){
  const els=document.querySelectorAll('.fade-in:not(.visible)');
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}
    });
  },{threshold:0.1});
  els.forEach(el=>io.observe(el));
}
document.addEventListener('DOMContentLoaded',()=>observeAnimations());