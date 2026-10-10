/**
 * Análisis Numérico - Grupo 11
 * Interacciones de la interfaz de inicio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos de la Card 4 (Pendiente) y Toast
  const pendingTrigger = document.getElementById('pending-trigger');
  const toastNotification = document.getElementById('toast-notification');
  const toastCloseBtn = document.getElementById('toast-close-btn');
  let toastTimeout = null;

  /**
   * Muestra la notificación toast interactiva
   */
  const showToast = () => {
    if (!toastNotification) return;

    // Si ya había un timer activo, lo cancelamos
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastNotification.classList.add('show');

    // Feedback háptico ligero si el dispositivo lo soporta
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(40);
      } catch (e) {
        // Ignorar si el navegador restringe vibración
      }
    }

    // Auto-cierre luego de 4.5 segundos
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 4500);
  };

  /**
   * Oculta la notificación toast
   */
  const hideToast = () => {
    if (!toastNotification) return;
    toastNotification.classList.remove('show');
    if (toastTimeout) {
      clearTimeout(toastTimeout);
      toastTimeout = null;
    }
  };

  // Evento al hacer clic en la Card 4 (Pendiente)
  if (pendingTrigger) {
    pendingTrigger.addEventListener('click', (event) => {
      // Redirecciona con # internamente según el requerimiento
      showToast();
    });
  }

  // Evento de cierre manual del toast
  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      hideToast();
    });
  }

  // Efecto dinámico de iluminación (Glow Spotlight) en tarjetas al mover el mouse
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Log de confirmación de inicialización
  console.info('🚀 Portal de Análisis Numérico (Grupo 11) inicializado correctamente.');
});
