document.addEventListener('DOMContentLoaded', () => {
    const user = 'hello';
    const domain = 'konradjam.com';
    const emailLink = document.getElementById('contact-email-link');

    if (emailLink) {
      const fullEmail = `${user}@${domain}`;
      emailLink.href = `mailto:${fullEmail}`;
      emailLink.textContent = fullEmail; 
    }

    // Language switcher logic
    const langLinks = document.querySelectorAll('.lang-switcher__link');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const isEn = link.textContent.trim() === 'EN';
            localStorage.setItem('lang', isEn ? 'en' : 'pl');
        });
    });
});