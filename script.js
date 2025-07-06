
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');

    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            alert('Thank you for your support!');
        });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.main-nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
