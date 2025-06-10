// Scripts pour le site légal Logic Division
// Logica Corporation - 2025

document.addEventListener('DOMContentLoaded', function() {
    
    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les cartes et sections
    const animatedElements = document.querySelectorAll('.corporate-card, .purpose-card, .right-card, .section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Effet de hover sur les liens externes
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navigation mobile (si ajoutée plus tard)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.corporate-nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
        });
    }

    // Copier l'email au clic (amélioration UX)
    document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
        emailLink.addEventListener('click', function(e) {
            const email = this.textContent.trim();
            
            // Tenter de copier l'email dans le clipboard
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('Email copié dans le presse-papier !');
                }).catch(() => {
                    // Fallback silencieux si la copie échoue
                });
            }
        });
    });

    // Fonction toast simple
    function showToast(message) {
        // Créer un élément toast temporaire
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--color-primary-blue);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease-out;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animation d'apparition
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 100);
        
        // Suppression après 3 secondes
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Dark mode toggle (si nécessaire)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    prefersDark.addEventListener('change', function(e) {
        // Le CSS gère déjà le changement automatique
        // On pourrait ajouter ici des animations de transition
        document.documentElement.style.transition = 'background-color 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    });

    // Performance : Lazy loading des images (si ajoutées)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Analytics simple (si nécessaire)
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    }

    // Tracker les clics sur les liens importants
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('Contact', 'Email Click', link.getAttribute('href'));
        });
    });

    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('External Link', 'Click', link.getAttribute('href'));
        });
    });

    // Log de débogage (à supprimer en production)
    console.log('🧠 Logic Division - Site légal initialisé');
    console.log('📱 Mode:', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Sombre' : 'Clair');
    console.log('🏢 Logica Corporation © 2025');
});

// Easter egg corporate (subtil)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        // Easter egg activé
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 2000);
        
        console.log('🎮 Code Konami détecté ! Division Logica activée.');
        konamiCode = [];
    }
}); 