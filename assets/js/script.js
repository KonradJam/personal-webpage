  document.addEventListener('DOMContentLoaded', () => {
    const user = 'hello';
    const domain = 'konradjam.com';
    const emailLink = document.getElementById('contact-email-link');

    if (emailLink) {
      const fullEmail = `${user}@${domain}`;
      emailLink.href = `mailto:${fullEmail}`;
      emailLink.textContent = fullEmail; // Podmienia tekst "Pokaż adres e-mail" na właściwy adres
    }
  });