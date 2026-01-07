console.log("SubControl App Started");

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initial Animations
function initAnimations() {
    // Hero Animations
    const tl = gsap.timeline();

    tl.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
        .from(".hero-badge", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(".hero-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-section .btn", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-visual", {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.4");

    // Scroll Animation for Video
    const videoWrapper = document.querySelector('.video-container-wrapper');
    const videoElement = document.getElementById('featureVideo');

    if (videoWrapper && videoElement) {
        ScrollTrigger.create({
            trigger: videoWrapper,
            start: "top 80%",
            onEnter: () => videoElement.play(),
            onEnterBack: () => videoElement.play(),
            onLeave: () => videoElement.pause(),
            onLeaveBack: () => videoElement.pause()
        });
    }
}

// Pricing Toggle
function initPricingToggle() {
    const toggleContainer = document.querySelector('.pricing-toggle');
    const toggleSwitch = document.querySelector('.toggle-switch');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const prices = document.querySelectorAll('.plan-price');

    // Pricing Data
    const pricingData = {
        monthly: [0, 12, 99],
        annual: [0, 122, 1010] // 15% off annual
    };

    if (toggleContainer) {
        toggleContainer.addEventListener('click', () => {
            toggleSwitch.classList.toggle('active');
            toggleLabels.forEach(label => label.classList.toggle('active'));

            const isAnnual = toggleSwitch.classList.contains('active');
            const currentPrices = isAnnual ? pricingData.annual : pricingData.monthly;
            const period = isAnnual ? '/yr' : '/mo';

            prices.forEach((price, index) => {
                // Animate change
                gsap.to(price, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    onComplete: () => {
                        // Update price text
                        // Basic plan is index 0, Pro is 1, Enterprise is 2
                        // Structure: <span class="currency">$</span>PRICE<span class="period">/mo</span>
                        const currencySpan = price.querySelector('.currency');
                        const periodSpan = price.querySelector('.period');

                        // Clear and rebuild to be safe
                        price.innerHTML = '';
                        price.appendChild(currencySpan);
                        price.appendChild(document.createTextNode(currentPrices[index]));
                        periodSpan.textContent = period;
                        price.appendChild(periodSpan);

                        gsap.to(price, {
                            opacity: 1,
                            y: 0,
                            duration: 0.2
                        });
                    }
                });
            });
        });
    }
}

// FAQ Interactivity (GSAP)
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        // Initial set (ensure closed)
        gsap.set(answer, { height: 0, opacity: 0 });

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');

                    gsap.to(otherAnswer, {
                        height: 0,
                        opacity: 0,
                        paddingBottom: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                    gsap.to(otherIcon, { rotation: 0, duration: 0.3 });
                }
            });

            // Toggle current
            if (!isActive) {
                // Open
                item.classList.add('active');
                gsap.to(answer, {
                    height: "auto",
                    opacity: 1,
                    paddingBottom: 24,
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(icon, { rotation: 45, duration: 0.3 });
            } else {
                // Close
                item.classList.remove('active');
                gsap.to(answer, {
                    height: 0,
                    opacity: 0,
                    paddingBottom: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                gsap.to(icon, { rotation: 0, duration: 0.3 });
            }
        });
    });
}

// Run initialization
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initPricingToggle();
    initFAQ();
});
