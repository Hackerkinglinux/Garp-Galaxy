window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

document.getElementById('menuToggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'flex';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'flex';
});

document.getElementById('closeRegister').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'none';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

document.addEventListener('click', function(event) {
    var registerModal = document.getElementById('registerModal');
    var loginModal = document.getElementById('loginModal');
    if (event.target == registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

document.getElementById('playMusicBtn').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pausar Música';
    } else {
        audio.pause();
        this.textContent = 'Reproducir Música';
    }
});