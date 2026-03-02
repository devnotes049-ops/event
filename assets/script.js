
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


const searchInput = document.querySelector('#exploreSearch'); 
const eventCards = document.querySelectorAll('.event-card');

if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        eventCards.forEach(card => {
 
            const title = card.querySelector('h3').textContent.toLowerCase();
            const category = card.querySelector('.badge').textContent.toLowerCase();

            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none'; 
            }
        });
    });
}

const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});