import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
    // Optional settings here
    duration: 2000, // values from 0 to 3000, with step 50ms
    once: false,
});


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const stickyNavElement = document.getElementById('sticky-nav')
    if (window.scrollY > header.offsetHeight) { // Or a specific scroll threshold
        stickyNavElement.classList.remove('hidden');
    } else {
        stickyNavElement.classList.add('hidden');
    }
});