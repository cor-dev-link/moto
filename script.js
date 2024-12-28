document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const countdownElement = document.getElementById('countdown');
    const contactForm = document.getElementById('contactForm');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Menú móvil
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // Cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efecto hover para botones CTA
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        button.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // Contador regresivo
    const countDownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 días desde ahora
    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "¡Oferta expirada!";
        }
    }, 1000);

    // Manejo del formulario de contacto
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Animación de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.beneficio, .testimonio, .faq-item');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Llamar una vez al cargar la página

    // Animación del botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button a');
    setInterval(() => {
        whatsappButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappButton.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
});

