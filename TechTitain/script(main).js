document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Initialize collapsible
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    // Toggle theme
    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        themeToggleBtn.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Search functionality
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search');
    const clearSearch = document.getElementById('clear-search');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        filterContent(query);
    });

    clearSearch.addEventListener('click', function () {
        searchInput.value = '';
        filterContent('');
    });

    function filterContent(query) {
        // Example filtering logic, depending on your actual content structure
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(query) ? 'block' : 'none';
        });
    }
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Store form data (In real-life, this would involve backend integration)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple pop-up confirmation
        alert('Thank you, ' + name + '! Your message has been sent.');

        // Clear form fields after submission
        contactForm.reset();
    });
});
