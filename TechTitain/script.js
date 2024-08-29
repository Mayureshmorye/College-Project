$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.modal').modal();

    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-theme');
        if ($('body').hasClass('dark-theme')) {
            $('#theme-toggle').text('Light Theme'); 
        } else {
            $('#theme-toggle').text('Dark Theme');
        }
    });

    $('.card').on('click', function() {
        $(this).toggleClass('active');
    });

    $('#back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert("Thank you for contacting us!");
    });

    $('#search-form').on('submit', function(event) {
        event.preventDefault();
        const query = $('#search').val().toLowerCase();
        let found = false;
        $('.section').each(function() {
            const text = $(this).text().toLowerCase();
            if (text.includes(query)) {
                $('html, body').animate({ scrollTop: $(this).offset().top }, 'slow');
                found = true;
                return false; // Exit loop
            }
        });
        if (!found) {
            M.toast({html: 'No results found!'});
        }
    });
});
