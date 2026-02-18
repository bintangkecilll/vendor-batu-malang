document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle'); // For X animation if CSS supports it

            // Prevent body scroll when menu is open? 
            // Optional, but user asked 'tidak bisa digeser', so maybe just keeping it simple is better.
            // But let's close menu when a link is clicked
        });
    }

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });


    // --- Floating Button Logic ---
    const floatUpBtn = document.getElementById('float-up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatUpBtn.classList.add('show');
        } else {
            floatUpBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top
    if (floatUpBtn) {
        floatUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // --- WhatsApp Direct Logic (Redundant if using href="https://wa.me/...") ---
    // But user asked for "script" functionality. Let's make sure links work properly.
    // We can add distinct behavior or analytics if needed, but simple href is best practiced.
    // However, to satisfy "using script", we can dynamically set the WA message based on the page.

    const waButtons = document.querySelectorAll('.wa-action');
    const phoneNumber = '6281234567890'; // Example number

    waButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pageTitle = document.title;
            const message = `Halo, saya tertarik dengan layanan Outbound di halaman: ${pageTitle}. Bisa minta info lebih lanjut?`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });

    // Make Navbar responsive on resize (safety check)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger?.classList.remove('toggle');
        }
    });
});
