/* ===============================
   CONFIGURAÇÃO DA SEÇÃO INÍCIO
   =============================== */
const homeSection = document.querySelector('.Inicio');
homeSection.style.position = 'relative';
homeSection.style.overflow = 'hidden';

/* ===============================
   CRIAÇÃO DAS BOLHAS ANIMADAS
   =============================== */
const bubbleCount = 15;

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    const size = Math.random() * 35 + 15; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    const blue = Math.floor(Math.random() * 100 + 150);
    bubble.style.background = `radial-gradient(circle, rgba(${blue},${blue+10},255,0.8) 0%, rgba(${blue},${blue+10},255,0.2) 60%, transparent 100%)`;
    bubble.style.borderRadius = '50%';
    bubble.style.position = 'absolute';
    bubble.style.bottom = '-50px';
    bubble.style.filter = 'blur(3px)';
    bubble.style.opacity = Math.random() * 0.5 + 0.5;
    const duration = Math.random() * 6 + 6; 
    const delay = Math.random() * 5;
    bubble.style.animation = `rise ${duration}s linear infinite`;
    bubble.style.animationDelay = `${delay}s`;
    homeSection.appendChild(bubble);
}

/* ===============================
   ANIMAÇÃO DAS BOLHAS (KEYFRAMES)
   =============================== */
const style = document.createElement('style');
style.innerHTML = `
@keyframes rise {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-35vh) translateX(5px) scale(1.05); opacity: 1; }
  100% { transform: translateY(-80vh) translateX(-5px) scale(1); opacity: 0; }
}`;
document.head.appendChild(style);

/* ===============================
   TYPING EFFECT NO NOME
   =============================== */
const spanNome = document.querySelector(".Inicio h2 span");
const nome = "Ariel Rodrigues";
spanNome.textContent = ""; 
let i = 0;

function digitar() {
  if(i < nome.length){
    spanNome.textContent += nome[i];
    i++;
    setTimeout(digitar, 150); 
  }
}

window.addEventListener("load", digitar);

/* ===============================
   ANIMAÇÃO AO SCROLL DAS SEÇÕES
   =============================== */
const seções = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.05,              
  rootMargin: "0px 0px -100px 0px"
});

seções.forEach(seção => {
  seção.style.opacity = 0;
  seção.style.transform = "translateY(20px)";
  seção.style.transition = "all 0.6s ease";
  observer.observe(seção);
});

/* ===============================
   SCROLL SUAVE PARA LINKS DO NAV
   =============================== */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ===============================
   Cards de Tecnologias
   =============================== */

   
const techBars = document.querySelectorAll(".progresso");

const techObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nivel = entry.target.getAttribute("data-nivel");
      entry.target.style.width = nivel;
    }
  });
}, { threshold: 0.4 });

techBars.forEach(bar => techObserver.observe(bar));






