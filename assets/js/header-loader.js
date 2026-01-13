$(document).ready(function() {
    $('#header-placeholder').load('includes/header.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading header: " + xhr.status + " " + xhr.statusText);
            $('#header-placeholder').html('<div class="error">Header could not be loaded</div>');
        } else {
            // Initialize header functionality after loading
            initializeHeader();
        }
    });
});

function initializeHeader() {
    // Mobile menu toggle
    $('.it-menu-bar').on('click', function() {
        $('.it-offcanvas-area').addClass('opened');
        $('body').addClass('body-overlay-opened');
    });

    // Close mobile menu
    $('.close-btn, .body-overlay').on('click', function() {
        $('.it-offcanvas-area').removeClass('opened');
        $('body').removeClass('body-overlay-opened');
    });

    // Search popup
    $('.search-box-outer').on('click', function() {
        $('.search-popup').addClass('opened');
    });

    $('.close-search').on('click', function() {
        $('.search-popup').removeClass('opened');
    });

    // Sticky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#header-sticky').addClass('sticky');
        } else {
            $('#header-sticky').removeClass('sticky');
        }
    });
}