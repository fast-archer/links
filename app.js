
(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const G='01ABCDEF#%&*<>/';
  document.querySelectorAll('.link').forEach(a=>{
    const el=a.querySelector('.t');if(!el)return;const o=el.textContent;
    a.addEventListener('pointerenter',e=>{if(e.pointerType!=='mouse')return;
      let k=0;clearInterval(a._s);
      a._s=setInterval(()=>{el.textContent=[...o].map((c,i)=>c===' '||i<k?c:G[Math.random()*G.length|0]).join('');k+=.6;if(k>o.length){clearInterval(a._s);el.textContent=o}},28);
    });
  });
})();


(()=>{
  const c=document.querySelector('.check');if(!c||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const run=()=>{c.classList.add('sh');setTimeout(()=>c.classList.remove('sh'),1200);setTimeout(run,60000+Math.random()*120000)};
  setTimeout(run,20000);
})();

(()=>{const av=document.querySelector('.avatar');if(!av)return;const hide=()=>{av.style.display='none'};if(av.complete&&av.naturalWidth===0)hide();else av.addEventListener('error',hide)})();
