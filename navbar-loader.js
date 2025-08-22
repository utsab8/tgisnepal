document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('global-navbar-container');
    
    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                const script = document.createElement('script');
                const scriptTag = navbarContainer.querySelector('script');
                if (scriptTag) {
                    script.innerHTML = scriptTag.innerHTML;
                    document.body.appendChild(script);
                }
            });
    }
});
