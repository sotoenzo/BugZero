(() => {
  const tabs = [...document.querySelectorAll('.standard-tab')];
  const panels = [...document.querySelectorAll('.standard-panel')];

  function activateTab(tab, moveFocus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });

    panels.forEach(panel => {
      panel.hidden = panel.id !== tab.getAttribute('aria-controls');
    });

    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      activateTab(tabs[nextIndex], true);
    });
  });

  document.querySelectorAll('.level-toggle, .technique-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      document.getElementById(button.getAttribute('aria-controls')).hidden = expanded;
    });
  });

  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const toolCards = [...document.querySelectorAll('.tool-card')];
  const toolCount = document.getElementById('toolCount');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      filterButtons.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-pressed', String(active));
      });

      let visibleCount = 0;
      toolCards.forEach(card => {
        const visible = category === 'all' || card.dataset.category === category;
        card.hidden = !visible;
        if (visible) visibleCount++;
      });

      toolCount.textContent = `Se muestran ${visibleCount} ${visibleCount === 1 ? 'herramienta' : 'herramientas'}`;
    });
  });

  if (window.lucide) lucide.createIcons();
})();
