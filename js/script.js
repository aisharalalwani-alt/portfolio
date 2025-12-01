 // GSAP animations on scroll
gsap.from("#skills h2", { opacity:0, y:50, duration:1, scrollTrigger:{ trigger:"#skills", start:"top 80%" }});
gsap.from(".skill", { opacity:0, y:50, duration:1, stagger:0.2, scrollTrigger:{ trigger:"#skills", start:"top 80%" }});

gsap.from("#projects1 h2", { opacity:0, y:50, duration:1, scrollTrigger:{ trigger:"#projects", start:"top 80%" }});
gsap.from(".project-card", { opacity:0, y:50, duration:1, stagger:0.2, scrollTrigger:{ trigger:"#projects", start:"top 80%" }});

gsap.from("#contact h2", { opacity:0, y:50, duration:1, scrollTrigger:{ trigger:"#contact", start:"top 80%" }});
 
 
// ===== TYPED JS =====

const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

