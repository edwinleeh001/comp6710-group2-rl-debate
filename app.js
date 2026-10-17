(() => {
  'use strict';
  const data = window.DEBATE;
  const nav = document.querySelector('#speaker-nav');
  const panels = document.querySelector('#speaker-panels');
  const select = document.querySelector('#language');
  const pair = (values) => `<span class="zh">${values[0]}</span><span class="en" lang="en">${values[1]}</span>`;
  const paragraphs = (values) => `<p class="zh">${values[0]}</p><p class="en" lang="en">${values[1]}</p>`;
  let active = 0;
  let noticeTimeout;
  let printState = [];
  data.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'speaker-button';
    button.id = `choose-${item.id}`;
    button.setAttribute('aria-controls', item.id);
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<span class="speaker-number">${index + 1}</span><span>${pair(item.title)}</span>`;
    button.addEventListener('click', () => activate(index, true));
    nav.append(button);
    const panel = document.createElement('article');
    panel.className = 'speaker-panel';
    panel.id = item.id;
    panel.setAttribute('aria-labelledby', `title-${item.id}`);
    panel.innerHTML = `<div class="panel-top"><span class="part-tag">${pair([`第 ${index + 1} 位辩手`, `Speaker ${index + 1} of 5`])}</span><button class="copy" type="button">${pair(['复制主稿', 'Copy script'])}</button></div>
      <h2 id="title-${item.id}">${pair(item.short)}</h2><p class="concept">${pair(item.concept)}</p>
      <p class="script-label">${pair(['你的发言', 'Your script'])}</p><div class="speech">${paragraphs([item.zh,item.en])}</div>
      <div class="scope"><strong>${pair(['证据支持到哪里', 'What the evidence supports'])}</strong>${paragraphs(item.boundary)}</div>
      <details class="rebuttal"><summary>${pair(['Group 1 这样说，你这样回应', 'If Group 1 says this, respond here'])}</summary><div class="rebuttal-body"><p class="rebuttal-title">Group 1</p><div class="opponent">${paragraphs(item.opponent)}</div><p class="rebuttal-title">Group 2</p><div class="answer">${paragraphs(item.rebuttal)}</div></div></details>
      <div class="source"><span class="source-label">${pair(['文献来源', 'Source'])}</span><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.paper}</a><p>${item.authors} (${item.year}). ${item.journal}.</p><span class="evidence-tag">${pair(item.evidence)}</span></div>
      <div class="panel-pager"><button class="previous" type="button" ${index===0?'disabled':''}>${pair(['上一位', 'Previous speaker'])}</button><button class="next" type="button" ${index===data.length-1?'disabled':''}>${pair(['下一位', 'Next speaker'])}</button></div>`;
    panel.querySelector('.previous').addEventListener('click',()=>activate(index-1,true));
    panel.querySelector('.next').addEventListener('click',()=>activate(index+1,true));
    panel.querySelector('.copy').addEventListener('click',async()=>{
      const mode=select.value;
      const text=mode==='en'?item.en:mode==='zh'?item.zh:`${item.zh}\n\n${item.en}`;
      try{await navigator.clipboard.writeText(text);notice(mode==='en'?'Script copied':'主稿已复制');}
      catch{notice(mode==='en'?'Select the script text to copy.':'请选中主稿文字后复制。');}
    });
    panels.append(panel);
  });
  function activate(index,updateHash=false){
    if(index<0||index>=data.length)return;
    active=index;
    [...nav.children].forEach((button,i)=>button.setAttribute('aria-pressed',String(i===active)));
    [...panels.children].forEach((panel,i)=>panel.hidden=i!==active);
    if(updateHash){history.replaceState(null,'',`#${data[index].id}`);if(window.matchMedia('(max-width:760px)').matches)document.querySelector('#scripts').scrollIntoView({behavior:'auto'});}
  }
  function applyLanguage(mode){
    if(!['both','en','zh'].includes(mode))mode='both';
    select.value=mode;document.body.dataset.language=mode;
    document.documentElement.lang=mode==='en'?'en':'zh-Hans';
    try{localStorage.setItem('group2-language',mode);}catch{}
  }
  function notice(message){const element=document.querySelector('#notice');element.textContent=message;element.classList.add('show');clearTimeout(noticeTimeout);noticeTimeout=setTimeout(()=>element.classList.remove('show'),2400);}
  select.addEventListener('change',()=>applyLanguage(select.value));
  document.querySelector('#print').addEventListener('click',()=>window.print());
  window.addEventListener('beforeprint',()=>{printState=[...document.querySelectorAll('details')].map(d=>d.open);document.querySelectorAll('details').forEach(d=>d.open=true);});
  window.addEventListener('afterprint',()=>document.querySelectorAll('details').forEach((d,i)=>d.open=printState[i]||false));
  function fromHash(){const index=data.findIndex(d=>`#${d.id}`===location.hash);if(index>=0)activate(index);}
  window.addEventListener('hashchange',fromHash);
  let language='both';try{language=localStorage.getItem('group2-language')||'both';}catch{}
  applyLanguage(language);activate(0);fromHash();
})();
