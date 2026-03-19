// Shared hamburger menu logic
(function () {
    const hamburger = document.getElementById('hamburger');
    const sidebar   = document.getElementById('sidebar');
    const overlay   = document.getElementById('nav-overlay');

    if (!hamburger || !sidebar) return;

    function openNav() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeNav() : openNav();
    });

    overlay.addEventListener('click', closeNav);

    // Close on nav link click (mobile)
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

    // Close on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeNav();
    });
})();
