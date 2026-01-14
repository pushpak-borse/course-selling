// Head Loader - Dynamically loads shared head content
(function() {
    // Function to load head content
    function loadHead() {
        fetch('includes/head.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load head content');
                }
                return response.text();
            })
            .then(html => {
                // Insert head content
                document.head.insertAdjacentHTML('afterbegin', html);
                
                // Set dynamic title if specified
                setDynamicTitle();
            })
            .catch(error => {
                console.error('Error loading head content:', error);
            });
    }

    // Function to set dynamic title based on data attribute or default
    function setDynamicTitle() {
        const titleElement = document.getElementById('page-title');
        const bodyTitle = document.body.getAttribute('data-title');
        
        if (titleElement && bodyTitle) {
            titleElement.textContent = bodyTitle;
        }
    }

    // Load head content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadHead);
    } else {
        loadHead();
    }
})();