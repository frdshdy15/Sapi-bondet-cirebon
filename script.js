/* =========================================
   1. LOADING SCREEN & HAMBURGER MENU
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen Logic
    const loader = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            document.body.classList.remove('is-loading');
        }, 1000); // Durasi loading 1 detik
    });

    // Hamburger Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Menutup menu saat link diklik (agar tidak mengambang)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });

    /* =========================================
       2. NAVBAR SCROLL EFFECT
       ========================================= */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       3. ANIMATION ON SCROLL (AOS)
       Menggunakan Intersection Observer untuk 
       animasi fade-in saat di-scroll
       ========================================= */
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
            }
        });
    }, observerOptions);

    // Seleksi elemen yang ingin dianimmasikan
    document.querySelectorAll('.service-card, .about-info, .section-header').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

/* =========================================
   4. SWIPER GALLERY INITIALIZATION
   Pastikan sudah memanggil library Swiper di HTML
   ========================================= */
const swiper = new Swiper('.gallery-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
