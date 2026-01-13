// Component loader for header and footer
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error loading component:', error));
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadComponent('header-placeholder', 'includes/header.html');
  loadComponent('footer-placeholder', 'includes/footer.html');
});