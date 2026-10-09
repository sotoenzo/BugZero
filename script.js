const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');

  function openMenu(){
    sideMenu.classList.add('open');
    overlay.classList.add('show');
  }
  function closeMenu(){
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
  }

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

  // close menu + mark active link on nav click
  document.querySelectorAll('.side-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      document.querySelectorAll('.side-link').forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      closeMenu();
    });
  });

  // highlight active section link on scroll
  const sections = ['inicio','calidad','desarrollo','metodologias','recursos','nosotros','contacto']
    .map(id => document.getElementById(id)).filter(Boolean);

  const linkMap = {};
  document.querySelectorAll('.side-link').forEach(l=>{
    const href = l.getAttribute('href').replace('#','');
    linkMap[href] = l;
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        if(linkMap[id]){
          document.querySelectorAll('.side-link').forEach(l=>l.classList.remove('active'));
          linkMap[id].classList.add('active');
        }
      }
    });
  }, {rootMargin:'-40% 0px -50% 0px'});

  sections.forEach(s => observer.observe(s));
