document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach((el) => {
        observer.observe(el);
    });
});