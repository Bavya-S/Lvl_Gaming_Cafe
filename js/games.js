// ===================== GAMES DATA =====================
const GAMES=[
  {name:"FC 25",type:"Sports",players:"Multiplayer",ps4:true,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"FC 26",type:"Sports",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"WWE 2K25",type:"Fighting",players:"Multiplayer",ps4:true,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"Mad Max",type:"Adventure",players:"1",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"Mortal Kombat 11",type:"Fighting",players:"2",ps4:true,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"Mortal Kombat 1",type:"Fighting",players:"2",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Fantasy Strike",type:"Fighting",players:"2",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"Need for Speed Heat",type:"Racing",players:"1",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"Need for Speed Hot Pursuit",type:"Racing",players:"1",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"Cricket 24",type:"Sports",players:"Multiplayer",ps4:true,"ps5-55":true,"ps5-65":true,"ps5-pro":false},
  {name:"Rise of the Tomb Raider",type:"Adventure",players:"1",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"A Way Out",type:"Roleplay",players:"2",ps4:true,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"Resident Evil Village",type:"Adventure",players:"1",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"Batman Return of Arkham",type:"Adventure",players:"1",ps4:true,"ps5-55":false,"ps5-65":false,"ps5-pro":false},
  {name:"Assassin's Creed Unity",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"Assassin's Creed Mirage",type:"Roleplay",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Brawlhalla",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":true},
  {name:"Dirt 5",type:"Racing",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"Fortnite",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"GTA 5",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"It Takes Two",type:"Roleplay",players:"2",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"Spider-Man",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Spider-Man Miles Morales",type:"Adventure",players:"1",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":false},
  {name:"Marvel's Spider-Man 2",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Power Rangers",type:"Fighting",players:"2",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":false},
  {name:"Rocket League",type:"Sports",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":true,"ps5-pro":true},
  {name:"Sackboy",type:"Adventure",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"Ninja Turtles",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":true,"ps5-65":false,"ps5-pro":false},
  {name:"Asphalt Legends",type:"Racing",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"Contra",type:"Adventure",players:"2",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"Crash Team Racing Nitro-Fueled",type:"Racing",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"UFC 4",type:"Fighting",players:"2",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Ghost of Tsushima",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"God of War",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"God of War Ragnarök",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"God of War 3 Remastered",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"RDR 2",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":true},
  {name:"Stick Fight",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"The Last of Us Part 1",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"The Last of Us Part 2 Remastered",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Uncharted Legacy of Thieves",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Until Dawn",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Wo Long Fallen Dynasty",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":true,"ps5-pro":false},
  {name:"Call of Duty",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Call of Duty Black Ops 3",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Devil May Cry 5 SE",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"F1 24",type:"Racing",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Split Fiction",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Stellar Blade",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Unravel Two",type:"Adventure",players:"2",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Valorant",type:"Fighting",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Where Winds Meet",type:"Roleplay",players:"Multiplayer",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true},
  {name:"Ghost of Yōtei",type:"Adventure",players:"1",ps4:false,"ps5-55":false,"ps5-65":false,"ps5-pro":true}
];

const gameEmojis={Adventure:"⚔️",Roleplay:"🗺️",Racing:"🏎️",Sports:"⚽",Fighting:"👊"};
const gameBgs={
  Adventure:"linear-gradient(135deg,#0a1a2a,#1a0a2a)",
  Roleplay:"linear-gradient(135deg,#1a2a0a,#0a1a2a)",
  Racing:"linear-gradient(135deg,#2a1a0a,#0a0a2a)",
  Sports:"linear-gradient(135deg,#0a2a1a,#0a1a2a)",
  Fighting:"linear-gradient(135deg,#2a0a0a,#1a0a2a)"
};

let activeFilters={console:'all',players:'all',genre:'all'};

function renderGames(){
  const grid=document.getElementById('gamesGrid');
  if(!grid)return;
  const filtered=GAMES.filter(g=>{
    const cf=activeFilters.console;
    const pf=activeFilters.players;
    const gf=activeFilters.genre;
    const consoleOk=cf==='all'||g[cf];
    const playersOk=pf==='all'||(pf==='1'&&g.players==='1')||(pf==='2'&&g.players==='2')||(pf==='multi'&&g.players==='Multiplayer');
    const genreOk=gf==='all'||g.type.includes(gf);
    return consoleOk&&playersOk&&genreOk;
  });
  const countEl=document.getElementById('gameCount');
  if(countEl)countEl.textContent=filtered.length;
  grid.innerHTML=filtered.map(g=>{
    const type=g.type.split('/')[0].trim();
    const consoles=[
      g.ps4&&'<span class="game-console-badge badge-ps4">PS4</span>',
      g['ps5-55']&&'<span class="game-console-badge badge-ps555">PS5 55"</span>',
      g['ps5-65']&&'<span class="game-console-badge badge-ps565">PS5 65"</span>',
      g['ps5-pro']&&'<span class="game-console-badge badge-pspro">PS5 PRO</span>'
    ].filter(Boolean).join('');
    return `<div class="glass-card rgb-border game-card">
      <div class="game-thumb">
        <div class="game-thumb-bg" style="background:${gameBgs[type]||gameBgs.Adventure};width:100%;height:100%"></div>
        <div class="game-thumb-icon">${gameEmojis[type]||'🎮'}</div>
      </div>
      <div class="game-info">
        <div class="game-title">${g.name}</div>
        <div class="game-tags">
          <span class="game-tag tag-type">${g.type}</span>
          <span class="game-tag tag-players">${g.players==='Multiplayer'?'MULTI':g.players+' Player'}</span>
        </div>
        <div class="game-consoles">${consoles}</div>
      </div>
    </div>`;
  }).join('');
}

// ===================== FILTER BUTTONS =====================
document.addEventListener('DOMContentLoaded',()=>{
  renderGames();
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const filter=btn.dataset.filter;
      document.querySelectorAll(`[data-filter="${filter}"]`).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters[filter]=btn.dataset.value;
      renderGames();
    });
  });
});