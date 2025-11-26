 // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('nav ul');

        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.querySelector('i').classList.toggle('fa-bars');
            mobileMenu.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenu.querySelector('i').classList.add('fa-bars');
                mobileMenu.querySelector('i').classList.remove('fa-times');
            });
        });

        // Form submission handling
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        document.getElementById('student-application').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your application! We will review it and contact you shortly.');
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });