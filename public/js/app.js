// Código cliente para cargar datos desde la API y renderizar en páginas
async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error('Error al obtener ' + path);
  return res.json();
}

function formatCurrency(n) {
  return `${n} 💸`;
}

async function initShop() {
  try {
    const items = await fetchJSON('/api/shop');
    const container = document.getElementById('items');
    if (!container) return;
    container.innerHTML = '';
    items.forEach(it => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <div>
          <strong>${it.name}</strong>
          <div style="opacity:0.9">${it.description}</div>
        </div>
        <div style="text-align:right">
          <div>${formatCurrency(it.price)}</div>
          <button class="btn" data-id="${it.id}">Comprar</button>
        </div>
      `;
      container.appendChild(div);
    });

    container.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const itemId = e.currentTarget.dataset.id;
        const username = prompt('Nombre de usuario para la compra (demo):', 'Jugador1');
        try {
          const res = await fetch('/api/buy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ itemId, username })
          });
          const data = await res.json();
          if (res.ok) alert('Compra simulada: ' + data.message);
          else alert('Error: ' + (data.error || 'comprar'));
        } catch (err) {
          alert('Error al comprar: ' + err.message);
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
}

async function initJobs() {
  try {
    const jobs = await fetchJSON('/api/jobs');
    const container = document.getElementById('jobs');
    if (!container) return;
    container.innerHTML = '';
    jobs.forEach(j => {
      const div = document.createElement('div');
      div.className = 'job';
      div.innerHTML = `
        <div>
          <strong>${j.title}</strong>
          <div style="opacity:0.9">${j.description}</div>
        </div>
        <div style="text-align:right">
          <div>${formatCurrency(j.salary_per_hour)}/hora</div>
        </div>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

async function initLinks() {
  try {
    const links = await fetchJSON('/api/links');
    const container = document.getElementById('links');
    if (!container) return;
    container.innerHTML = '';
    links.forEach(l => {
      const div = document.createElement('div');
      div.className = 'link';
      div.innerHTML = `
        <div>
          <strong><a href="${l.url}" target="_blank" rel="noopener" style="color:inherit">${l.title}</a></strong>
          <div style="opacity:0.9">${l.description}</div>
        </div>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

// Inicializa según la página
document.addEventListener('DOMContentLoaded', () => {
  initShop();
  initJobs();
  initLinks();
});