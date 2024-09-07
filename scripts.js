// Sidebar Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });

        // Add 'active' class to clicked link
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the clicked section
        const targetSection = document.getElementById(this.dataset.target);
        targetSection.style.display = 'flex';
    });
});

// Theme Color Changing
document.querySelectorAll('.color-options .color').forEach(color => {
    color.addEventListener('click', function() {
        const newColor = this.dataset.color;
        document.documentElement.style.setProperty('--primary-color', newColor);
        document.documentElement.style.setProperty('--button-hover-color', shadeColor(newColor, -20)); // Darker color for hover
    });
});

// Darken color function for button hover effect
function shadeColor(color, percent) {
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = (f >> 8) & 0x00FF,
        B = f & 0x0000FF;
    return (
        "#" +
        (0x1000000 +
            (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 +
            (Math.round((t - B) * p) + B))
            .toString(16)
            .slice(1)
    );
}
