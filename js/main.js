// ═══════════════════════════════════════════════════════════
// FAMILY CLOUD - Main JavaScript
// ═══════════════════════════════════════════════════════════

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Family Cloud - Sistema iniciado');
    
    // Inicializar contador del carrito
    actualizarContadorCarrito();
    
    // Smooth scroll para el botón EXPLORAR
    const explorarBtn = document.querySelector('a[href="#categories"]');
    if (explorarBtn) {
        explorarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#categories').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.getElementById('cart-count');
    if (contador) {
        contador.textContent = carrito.length;
    }
}