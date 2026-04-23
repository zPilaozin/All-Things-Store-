// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Carrinho
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');

document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    showToast(`${button.dataset.product} adicionado ao carrinho!`);
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
