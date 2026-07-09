// Configuración: fecha del evento
// Formato: "Mes Día, Año Hora:Minuto:Seg" 
// Ejemplo: "Aug 15, 2026 14:00:00" = 15 de Agosto 2026 a las 2:00pm
// Tip: Agrega Z al final para usar UTC: "2026-08-15T14:00:00Z"
const fechaObjetivo = new Date("Apr 04, 2027 14:00:00").getTime();

// Inicia el contador cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
  const elDias = document.getElementById("dias");
  const elHoras = document.getElementById("horas");
  const elMinutos = document.getElementById("minutos");
  const elSegundos = document.getElementById("segundos");
  const elContenedor = document.getElementById("countdown");

  // Si no encuentra los elementos, no hagas nada
  if (!elDias || !elHoras || !elMinutos || !elSegundos || !elContenedor) {
    console.error("Countdown: Faltan elementos HTML con id: dias, horas, minutos, segundos, countdown");
    return;
  }

  const timer = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    // Si ya pasó la fecha
    if (diferencia < 0) {
      clearInterval(timer);
      elContenedor.innerHTML = "<h2>¡Llegó el día!</h2>";
      return;
    }

    // Cálculos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Pintar con 2 dígitos
    elDias.textContent = String(dias).padStart(2, '0');
    elHoras.textContent = String(horas).padStart(2, '0');
    elMinutos.textContent = String(minutos).padStart(2, '0');
    elSegundos.textContent = String(segundos).padStart(2, '0');
  }, 1000);
});