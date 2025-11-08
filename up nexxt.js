document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle the header changing appearance when scrolling
    const header = document.querySelector('.main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Add this class for CSS styling (e.g., box-shadow, background change)
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        });
    }

    // 2. Intersection Observer for fade-in animation on hero elements
    // Assumes you have a CSS class 'hidden' for the initial state (opacity: 0)
    // and 'is-visible' for the final state (opacity: 1, transition).
    
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-illustration');
    
    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    entry.target.classList.remove('hidden'); 
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, { 
            // Trigger animation when 10% of the element is visible
            threshold: 0.1 
        });
    
        elementsToAnimate.forEach(el => {
            el.classList.add('hidden'); // Ensure initial hidden state
            observer.observe(el);
        });
    }
});






































// JavaScript is optional for this grid layout but can be used for animations or interactivity.

document.addEventListener('DOMContentLoaded', () => {
    
    const serviceCards = document.querySelectorAll('.service-card');

    // Example: If you wanted to add a dynamic class or tracking when a user hovers over a card:
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log(`User is hovering over: ${card.querySelector('h3').textContent}`);
             card.classList.add('is-active'); 
        });
        card.addEventListener('mouseleave', () => {
             card.classList.remove('is-active');
        });
    });
    
    // You could also use JS to add an animation class after a delay 
    // to make the cards fade in one by one when they become visible on screen (Intersection Observer).
    
    console.log("Service grid structure loaded. Ready for interactive features.");
});



















// JavaScript is optional for this specific static grid layout.

document.addEventListener('DOMContentLoaded', () => {
    
    // Example: Add a slight scale-up effect when hovering over the image
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const image = item.querySelector('.project-image');
        
        if (image) {
            item.addEventListener('mouseenter', () => {
                 image.style.transform = 'scale(1.02)';
                image.style.transition = 'transform 0.3s ease';
            });
            item.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
            });
        }
    });

     console.log("Project grid structure loaded. Ready for interactive features.");
});































































document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.closest('.accordion-item');
            const panel = currentItem.querySelector('.accordion-panel');
            const isCurrentlyOpen = currentItem.classList.contains('is-open');

            // 1. Close all other open items
            document.querySelectorAll('.accordion-item.is-open').forEach(openItem => {
                if (openItem !== currentItem) {
                    const openPanel = openItem.querySelector('.accordion-panel');
                    
                    openItem.classList.remove('is-open');
                    openItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    
                    // Collapse the panel content
                    openPanel.style.maxHeight = 0;
                    // Use a slight delay before hiding the panel completely
                    setTimeout(() => {
                        openPanel.setAttribute('hidden', '');
                    }, 300); 
                }
            });

            // 2. Toggle the clicked item
            if (isCurrentlyOpen) {
                // Close it
                currentItem.classList.remove('is-open');
                header.setAttribute('aria-expanded', 'false');
                
                // Collapse the panel content
                panel.style.maxHeight = 0;
                setTimeout(() => {
                    panel.setAttribute('hidden', '');
                }, 300);

            } else {
                // Open it
                currentItem.classList.add('is-open');
                header.setAttribute('aria-expanded', 'true');
                panel.removeAttribute('hidden');
                
                // Set max-height for CSS transition (using scrollHeight for dynamic height)
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Handle initial state setup for CSS transition on load
    const initialOpenItem = document.querySelector('.accordion-item.is-open');
    if (initialOpenItem) {
        const initialPanel = initialOpenItem.querySelector('.accordion-panel');
        // Ensure the max-height is set on load for the initially open item for smooth closing
        if (!initialPanel.hasAttribute('hidden')) {
            initialPanel.style.maxHeight = initialPanel.scrollHeight + "px";
        }
    }
});
































// JavaScript is not required for the specific static layout (sidebar and columns).
// This is a placeholder file ready for future interactive elements.

document.addEventListener('DOMContentLoaded', () => {
     console.log("Elegant layout loaded. Ready for interactivity.");

    // Example of a function you might add later:
    
    function handleMobileMenuToggle() {
        const menuButton = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                sidebar.classList.toggle('is-open');
                menuButton.classList.toggle('is-active');
            });
        }
    }
     handleMobileMenuToggle();
    
});