const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if(navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}
const reservasiForm = document.querySelector('.reservasi-form');
if(reservasiForm) {
    reservasiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Reservasi berhasil dibuat! Kami akan segera menghubungi Anda.');
        reservasiForm.reset();
    });
}
const kontakForm = document.querySelector('.kontak-form');
if(kontakForm) {
    kontakForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih, pesan Anda telah dikirim!');
        kontakForm.reset();
    });
}

const signupForm = document.querySelector('.signup-form');
if(signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sign up berhasil! Silakan sign in.');
        signupForm.reset();
    });
}

const signinForm = document.querySelector('.signin-form');
if(signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sign in berhasil!');
        signinForm.reset();
    });
}
