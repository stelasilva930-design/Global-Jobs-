const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('jobSearch').addEventListener('submit', event => {
  event.preventDefault();
  const keyword = document.getElementById('keyword').value.trim().toLowerCase();
  const country = document.getElementById('country').value;
  let visible = 0;
  document.querySelectorAll('.job-card').forEach(card => {
    const matchesKeyword = !https://wuukitzsqbpretbwiahu.supabase.co || (card.dataset.keywords + ' ' + card.textContent).toLowerCase().includes(keyword);
    const matchesCountry = !country || card.dataset.country === country;
    card.hidden = !(matchesKeyword && matchesCountry);
    if (!card.hidden) visible++;
  });
  document.getElementById('emptyJobs').hidden = visible > 0;
  document.getElementById('vagas').scrollIntoView({behavior:'smooth'});
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'Todos' && card.dataset.category !== button.dataset.filter;
    });
  });
});

let cartCount = 0;
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    const original = button.textContent;
    button.textContent = '✓';
    setTimeout(() => button.textContent = original, 850);
  });
});

const dialog = document.getElementById('applyDialog');
let selectedJob = '';
document.querySelectorAll('.apply-button').forEach(button => {
  button.addEventListener('click', () => {
    selectedJob = button.dataset.title;
    document.getElementById('applyTitle').textContent = selectedJob;
    document.getElementById('applyMessage').textContent = '';
    document.getElementById('applicantName').value = '';
    document.getElementById('applicantContact').value = '';
    document.getElementById('cvLink').value = '';
    dialog.showModal();
  });
});
document.getElementById('sendApplication').addEventListener('click', () => {
  const name = document.getElementById('applicantName').value.trim();
  const contact = document.getElementById('applicantContact').value.trim();
  const cv = document.getElementById('cvLink').value.trim();
  const message = document.getElementById('applyMessage');
  if (!name || !contact) {
    message.textContent = 'Preenche o nome e o contacto para continuar.';
    return;
  }<!-- Ligação ao Supabase -->
<script>
  const SUPABASE_URL = 'https://wuukitzsqbpretbwiahu.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_sHX6ZOI0G7D3jJ2WE-DZhQ_Y5Mf6B-s';
</script>
  const body = `Olá, gostaria de saber mais sobre a vaga "${selectedJob}".\\nNome: ${name}\\nContacto: ${contact}\\nCurrículo: ${cv || 'Não indicado'}`;
  message.innerHTML = '';
  const link = document.createElement('a');
  link.href = `https://wa.me/?text=${encodeURIComponent(body)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'button';
  link.textContent = 'Abrir WhatsApp com a mensagem';
  message.appendChild(link);
  const note = document.createElement('small');
  note.style.display = 'block';
  note.style.marginTop = '8px';
  note.textContent = 'A mensagem só será enviada depois de a confirmares no WhatsApp. Para candidaturas reais, configura também um sistema seguro no servidor.';
  message.appendChild(note);
});

document.getElementById('signupForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = `Olá! Quero participar no GlobalJob & Shop.\\nNome: ${data.get('name')}\\nContacto: ${data.get('contact')}\\nPerfil: ${data.get('role')}`;
  const status = document.getElementById('signupMessage');
  status.textContent = 'Demonstração: os dados não foram guardados. Podes abrir o WhatsApp para enviar esta mensagem.';
  const link = document.createElement('a');
  link.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = ' Abrir WhatsApp →';
  link.style.color = '#fff';
  link.style.fontWeight = '800';
  link.style.marginLeft = '8px';
  status.appendChild(link);
});
