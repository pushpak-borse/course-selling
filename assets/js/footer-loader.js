$(document).ready(function() {
    $('#footer-placeholder').load('includes/footer.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading footer: " + xhr.status + " " + xhr.statusText);
            $('#footer-placeholder').html('<div class="error">Footer could not be loaded</div>');
        } else {
            // Initialize footer functionality after loading
            initializeFooter();
        }
    });
});

function initializeFooter() {
    // Ensure copyright section is visible
    $('.it-copyright-area').css('display', 'block');
    
    // Back to top button
    $('.scroll-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Show/hide back to top button on scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    // Footer social links hover effects
    $('.it-footer-widget-social a').on('mouseenter', function() {
        $(this).addClass('hovered');
    }).on('mouseleave', function() {
        $(this).removeClass('hovered');
    });
}