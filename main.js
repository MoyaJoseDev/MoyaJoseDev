document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Animaciones AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // --- Cálculo de Edad Exacto ---
    const edadInput = document.getElementById('edad');
    const calcularEdad = (fecha) => {
        const diff = Date.now() - new Date(fecha).getTime();
        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    };
    edadInput.innerText = calcularEdad('2001-08-21');

    // --- Theme Switcher Pro ---
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const html = document.documentElement;

    toggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-bs-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        html.setAttribute('data-bs-theme', newTheme);
        
        // Animación de icono
        icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
        
        // Guardar preferencia
        localStorage.setItem('theme', newTheme);
    });
});