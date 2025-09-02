
const burger = document.querySelector('.burger');
const mobile = document.querySelector('.mobile');
const yearEl = document.getElementById('year');

if (burger && mobile){
  burger.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
}

if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

// Carga de ejemplos en grillas por categoría (reemplazá por tus datos reales o borralo)
const data = {
  actor: [
    { t: 'Corto — Personaje X', y: '2024', d: 'Breve sinopsis/rol. Dirección y sala.', l: '#' },
    { t: 'Obra — Personaje Y', y: '2023', d: 'Descripción del personaje.', l: '#' },
    { t: 'Spot — Voz en off', y: '2022', d: 'Trabajo de voz para pieza publicitaria.', l: '#' },
  ],
  edicion: [
    { t: 'Reel — Mi Farma', y: '2025', d: 'Edición + color + sonido para redes.', l: '#' },
    { t: 'Spot — Kiosco', y: '2024', d: 'Video 30s vertical.', l: '#' },
    { t: 'Reel — Camino Evolutivo', y: '2024', d: 'Cortes de entrevistas.', l: '#' },
  ],
  web: [
    { t: 'Landing Taller IA', y: '2025', d: 'Next/WordPress + CTA a WhatsApp.', l: '#' },
    { t: 'Portfolio Fotógrafa', y: '2024', d: 'WordPress + SEO básico.', l: '#' },
    { t: 'Mini sitio Mi Farma', y: '2024', d: 'Info + derivación a WhatsApp.', l: '#' },
  ],
  anuncios: [
    { t: 'Meta Ads — Farmacia', y: '2025', d: 'Tráfico a WhatsApp + ManyChat.', l: '#' },
    { t: 'Leads Taller 3 Cerebros', y: '2024', d: 'Campaña de registro.', l: '#' },
    { t: 'Promo Kiosco', y: '2024', d: 'Alcance + interacción.', l: '#' },
  ],
  ia: [
    { t: 'Bot WhatsApp — Farmacia', y: '2025', d: 'ManyChat + GPT para FAQs.', l: '#' },
    { t: 'Asistente de Contenido', y: '2024', d: 'Prompts + flujos Make/n8n.', l: '#' },
    { t: 'NichoBot', y: '2024', d: 'Definición de público y oferta.', l: '#' },
  ],
};

function mount(gridId, arr){
  const el = document.getElementById(gridId);
  if(!el) return;
  el.innerHTML = arr.map(x => `
    <article class="item">
      <div class="title-sm">${x.t}</div>
      <div class="meta">${x.y}</div>
      <p>${x.d}</p>
      <a href="${x.l}">Ver más →</a>
    </article>
  `).join('');
}

mount('actor-grid', data.actor);
mount('edicion-grid', data.edicion);
mount('web-grid', data.web);
mount('anuncios-grid', data.anuncios);
mount('ia-grid', data.ia);