$(document).ready(function() {
    // Check if loader placeholder exists, if not prepend to body
    if ($('#loader-placeholder').length === 0) {
        $('body').prepend('<div id="loader-placeholder"></div>');
    }

    $('#loader-placeholder').load('includes/loader.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading loader: " + xhr.status + " " + xhr.statusText);
        } else {
            // After loader is injected, let main.js handle the fade-out
            // or trigger it here if main.js already ran
            if (window.it_loader_initialized) {
                $('#it-loading').fadeOut(500);
            }
        }
    });
});
