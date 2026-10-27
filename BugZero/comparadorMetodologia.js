(() => {
    /* ---------- 1. DATOS ---------- */
    const FILAS = [
      { key: 'enfoque', label: 'Enfoque',                  icon: 'compass' },
      { key: 'roles',   label: 'Roles principales',        icon: 'users' },
      { key: 'org',     label: 'Organización del trabajo', icon: 'clock' },
      { key: 'flex',    label: 'Flexibilidad ante cambios',icon: 'refresh-cw' },
      { key: 'doc',     label: 'Documentación',            icon: 'file-text' },
      { key: 'time',    label: 'Tiempo de entrega',        icon: 'timer' },
      { key: 'ideal',   label: 'Ideal para',               icon: 'check-circle' }
    ];

    const BADGE = {
      good: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      mid:  'bg-amber-500/10 text-amber-400 border-amber-500/20',
      bad:  'bg-rose-500/10 text-rose-400 border-rose-500/20'
    };

    const METODOLOGIAS = [
      {
        id: 'scrum', name: 'Scrum', icon: 'refresh-cw',
        text: 'text-sky-400', iconBg: 'bg-sky-500/10',
        hover: 'hover:border-sky-500/50',
        on: 'border-sky-500/70 bg-sky-500/10 shadow-[0_0_20px_-6px_rgba(14,165,233,0.7)]',
        head: 'from-sky-900/40 to-sky-950/10',
        data: {
          enfoque: 'Iterativo e incremental',
          roles: 'Scrum Master, Product Owner, Equipo de Desarrollo',
          org: 'Sprints (iteraciones de 1 a 4 semanas)',
          flex: { v: 'Alta', l: 'good' },
          doc: 'Moderada (historias de usuario, backlog)',
          time: 'Corto (por iteración / Sprint)',
          ideal: 'Proyectos dinámicos y con requerimientos cambiantes'
        }
      },
      {
        id: 'kanban', name: 'Kanban', icon: 'kanban',
        text: 'text-purple-400', iconBg: 'bg-purple-500/10',
        hover: 'hover:border-purple-500/50',
        on: 'border-purple-500/70 bg-purple-500/10 shadow-[0_0_20px_-6px_rgba(139,92,246,0.7)]',
        head: 'from-purple-900/40 to-purple-950/10',
        data: {
          enfoque: 'Continuo y flexible',
          roles: 'No requiere roles fijos',
          org: 'Tablero de tareas (flujo continuo, límites WIP)',
          flex: { v: 'Alta', l: 'good' },
          doc: 'Mínima',
          time: 'Continuo',
          ideal: 'Equipos que buscan mejorar su flujo de trabajo continuo y soporte'
        }
      },
      {
        id: 'cascada', name: 'Cascada', icon: 'workflow',
        text: 'text-teal-400', iconBg: 'bg-teal-500/10',
        hover: 'hover:border-teal-500/50',
        on: 'border-teal-500/70 bg-teal-500/10 shadow-[0_0_20px_-6px_rgba(13,148,136,0.7)]',
        head: 'from-teal-900/40 to-teal-950/10',
        data: {
          enfoque: 'Lineal y secuencial',
          roles: 'Jefe de Proyecto, Equipo de Desarrollo, Cliente',
          org: 'Fases definidas (análisis, diseño, implementación, pruebas)',
          flex: { v: 'Baja', l: 'bad' },
          doc: 'Extensa y rigurosa',
          time: 'Largo (al final del proyecto)',
          ideal: 'Proyectos con requisitos claros, estables y bien definidos'
        }
      },
      {
        id: 'xp', name: 'XP (Extreme Programming)', short: 'XP', icon: 'code',
        text: 'text-amber-400', iconBg: 'bg-amber-500/10',
        hover: 'hover:border-amber-500/50',
        on: 'border-amber-500/70 bg-amber-500/10 shadow-[0_0_20px_-6px_rgba(245,158,11,0.7)]',
        head: 'from-amber-900/40 to-amber-950/10',
        data: {
          enfoque: 'Iterativo y ágil, centrado en la calidad del código y la excelencia técnica',
          roles: 'Programadores, Cliente en sitio, Tracker, Coach',
          org: 'TDD, programación en pareja y refactorización continua',
          flex: { v: 'Muy alta', l: 'good' },
          doc: 'Mínima (código autodocumentado y pruebas)',
          time: 'Muy corto (iteraciones semanales o quincenales)',
          ideal: 'Proyectos pequeños a medianos con requerimientos muy cambiantes y calidad técnica crítica'
        }
      },
      {
        id: 'vmodel', name: 'Modelo en V', icon: 'check-check',
        text: 'text-pink-400', iconBg: 'bg-pink-500/10',
        hover: 'hover:border-pink-500/50',
        on: 'border-pink-500/70 bg-pink-500/10 shadow-[0_0_20px_-6px_rgba(236,72,153,0.7)]',
        head: 'from-pink-900/40 to-pink-950/10',
        data: {
          enfoque: 'Secuencial y estructurado, con verificación y validación en cada fase',
          roles: 'Gestor de proyecto, Analistas, Desarrolladores, QA, Líder de pruebas',
          org: 'Cada fase de desarrollo tiene una fase de pruebas asociada',
          flex: { v: 'Baja', l: 'bad' },
          doc: 'Muy extensa (planes de prueba y especificaciones por nivel)',
          time: 'Medio / largo (entregas tras completar las fases de prueba)',
          ideal: 'Sistemas críticos de alta fiabilidad (médicos, aeronáuticos, financieros) con requisitos estables'
        }
      },
      {
        id: 'iterative', name: 'Iterativo e Incremental', short: 'Iterativo e Incremental', icon: 'trending-up',
        text: 'text-emerald-400', iconBg: 'bg-emerald-500/10',
        hover: 'hover:border-emerald-500/50',
        on: 'border-emerald-500/70 bg-emerald-500/10 shadow-[0_0_20px_-6px_rgba(16,185,129,0.7)]',
        head: 'from-emerald-900/40 to-emerald-950/10',
        data: {
          enfoque: 'Evolutivo: pequeñas entregas funcionales sucesivas',
          roles: 'Gerente de proyecto, Diseñadores, Desarrolladores, Testers',
          org: 'Ciclos repetitivos que agregan funcionalidad en cada incremento',
          flex: { v: 'Media - Alta', l: 'mid' },
          doc: 'Moderada',
          time: 'Progresivo (entregas parciales en cada incremento)',
          ideal: 'Proyectos grandes donde se busca obtener beneficios tempranos y feedback real del usuario'
        }
      }
    ];

    /* ---------- 2. ESTADO ---------- */
    const seleccion = new Set(['scrum', 'kanban', 'cascada']);

    const $chips = document.getElementById('chips');
    const $table = document.getElementById('table');
    const $wrap  = document.getElementById('tableWrap');
    const $empty = document.getElementById('emptyState');
    const $count = document.getElementById('selectedCount');
    const $selectionWarning = document.getElementById('selectionWarning');

    function showSelectionWarning() {
      $selectionWarning.classList.remove('hidden');
    }

    function hideSelectionWarning() {
      $selectionWarning.classList.add('hidden');
    }

    /* ---------- 3. RENDER ---------- */
    function renderChips() {
      $chips.innerHTML = METODOLOGIAS.map(m => {
        const on = seleccion.has(m.id);
        return `
          <button type="button" role="checkbox" aria-checked="${on}" data-id="${m.id}"
            class="meth-card flex items-center gap-3 p-3.5 rounded-xl border text-left ${on ? m.on : 'border-slate-800 bg-[#070d1f] ' + m.hover}">
            <span class="w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${on ? 'bg-cyan-400 border-cyan-400 text-slate-900' : 'border-slate-600'}">
              ${on ? '<i data-lucide="check" class="w-3.5 h-3.5" stroke-width="3.5"></i>' : ''}
            </span>
            <span class="p-1.5 rounded-lg ${m.iconBg} ${m.text}"><i data-lucide="${m.icon}" class="w-5 h-5"></i></span>
            <span class="text-sm font-semibold text-white">${m.name}</span>
          </button>`;
      }).join('');
    }

    function renderCell(v) {
      if (typeof v === 'object') {
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${BADGE[v.l]}">${v.v}</span>`;
      }
      return v;
    }

    function renderTable() {
      const activas = METODOLOGIAS.filter(m => seleccion.has(m.id));
      const n = activas.length;

      $count.textContent = n + (n === 1 ? ' seleccionada' : ' seleccionadas');
      $wrap.classList.toggle('hidden', n < 2);
      $empty.classList.toggle('hidden', n >= 2);

      if (n < 2) { $table.innerHTML = ''; return; }

      const thead = `
        <thead>
          <tr class="border-b border-slate-800 bg-[#090e21]">
            <th class="p-4 w-56 min-w-[190px] sticky left-0 z-20 bg-[#090e21] border-r border-slate-800">
              <div class="flex items-center gap-2 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                <i data-lucide="settings" class="w-4 h-4 text-cyan-400"></i> Característica
              </div>
            </th>
            ${activas.map(m => `
              <th class="fade-in p-4 min-w-[240px] bg-gradient-to-b ${m.head} border-r border-slate-800/80">
                <div class="flex items-center gap-2.5 font-bold text-base ${m.text}">
                  <i data-lucide="${m.icon}" class="w-5 h-5"></i> ${m.short || m.name}
                </div>
              </th>`).join('')}
          </tr>
        </thead>`;

      const tbody = `
        <tbody class="divide-y divide-slate-800/60 text-slate-300">
          ${FILAS.map(f => `
            <tr class="hover:bg-slate-900/40 transition-colors">
              <td class="p-4 sticky left-0 z-10 bg-[#0b1226] border-r border-slate-800 align-middle">
                <div class="flex items-center gap-2 font-medium text-slate-200">
                  <i data-lucide="${f.icon}" class="w-4 h-4 text-cyan-400 shrink-0"></i> ${f.label}
                </div>
              </td>
              ${activas.map(m => `
                <td class="fade-in p-4 border-r border-slate-800/50 align-middle">${renderCell(m.data[f.key])}</td>`).join('')}
            </tr>`).join('')}
        </tbody>`;

      $table.innerHTML = thead + tbody;
    }

    function render() {
      renderChips();
      renderTable();
      lucide.createIcons();
    }

    /* ---------- 4. EVENTOS DEL COMPARADOR ---------- */
    $chips.addEventListener('click', e => {
      const btn = e.target.closest('[data-id]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (seleccion.has(id)) {
        if (seleccion.size <= 2) {
          showSelectionWarning();
          return;
        }
        seleccion.delete(id);
      } else {
        seleccion.add(id);
        hideSelectionWarning();
      }
      render();
    });

    document.getElementById('selectAll').addEventListener('click', () => {
      METODOLOGIAS.forEach(m => seleccion.add(m.id));
      hideSelectionWarning();
      render();
    });

    /* ---------- 5. MENÚ LATERAL ---------- */
    const menuBtn = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const developmentToggle = document.getElementById('developmentToggle');
    const developmentSubmenu = document.getElementById('developmentSubmenu');
    const interactiveToggle = document.getElementById('interactiveToggle');
    const interactiveSubmenu = document.getElementById('interactiveSubmenu');

    function setMenuOpen(isOpen) {
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      sideMenu.classList.toggle('open', isOpen);
      sideMenu.setAttribute('aria-hidden', String(!isOpen));
      overlay.classList.toggle('show', isOpen);
      overlay.setAttribute('aria-hidden', String(!isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    }

    menuBtn.addEventListener('click', () => {
      setMenuOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menuClose.addEventListener('click', () => setMenuOpen(false));
    overlay.addEventListener('click', () => setMenuOpen(false));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setMenuOpen(false);
    });

    document.querySelectorAll('.side-link:not(.submenu-trigger)').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    [[developmentToggle, developmentSubmenu], [interactiveToggle, interactiveSubmenu]].forEach(([toggle, submenu]) => {
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        submenu.hidden = isExpanded;
      });
    });

    document.querySelectorAll('.side-submenu a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    /* ---------- 6. INIT ---------- */
    render();
})();