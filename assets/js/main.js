/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_faqwsdb', 'template_yktl9uq', contactForm, 'K0vXXMvelAdooBhxG')
            .then(() => {
                contactMessage.textContent = 'Message sent successfully ✅';
    
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
    
                contactForm.reset();
            }, () => {
                contactMessage.textContent = 'Message not sent (service error) ❌';
            });
    }
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__list a')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active__link'))
                sectionsClass.classList.add('active__link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Handle active class on click */
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active-link'))
        this.classList.add('active-link')
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const src = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})
src.reveal(`.perfil, .contact__form`)
src.reveal(`.info`, { origin: 'left', delay: 800 })
src.reveal(`.skills`, { origin: 'left', delay: 1000 })
src.reveal(`.about`, { origin: 'left', delay: 1200 })
src.reveal(`.projects__card, .services__card, .experience__card`, { interval: 100 })
