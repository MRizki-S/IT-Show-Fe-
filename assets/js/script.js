const navbar = document.querySelector('.navbar');
const tombolBack = document.querySelector('.tombol-kembali');

window.addEventListener('scroll', function() {
    
    const position = this.window.scrollY;
    // console.log('posisi sekarang' + position);
    if (position > 50) {
        navbar.classList.add('active-scroll');
        tombolBack.style.display = 'block';
    }else {
        navbar.classList.remove('active-scroll');
        tombolBack.style.display = 'none';
    }
});