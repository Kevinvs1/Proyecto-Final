window.onload = iniciarCronometro;

let cronometroInterval;
    let tiempoInicial = 0;

    function iniciarCronometro() {
      detenerCronometro(); // Detener el cronómetro antes de iniciar uno nuevo
      tiempoInicial = Date.now();

      cronometroInterval = setInterval(actualizarCronometro, 1000);
    }

    function detenerCronometro() {
      clearInterval(cronometroInterval);
    }

    function reiniciarCronometro() {
      detenerCronometro();
      tiempoInicial = 0;
      actualizarCronometro();
    }

    function actualizarCronometro() {
      const tiempoTranscurrido = Date.now() - tiempoInicial;
      const segundos = Math.floor(tiempoTranscurrido / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);

      const segundosMostrar = segundos % 60;
      const minutosMostrar = minutos % 60;
      const horasMostrar = horas;

      const tiempoFormateado = `${agregarCero(horasMostrar)}:${agregarCero(minutosMostrar)}:${agregarCero(segundosMostrar)}`;

      document.getElementById('cronometro').innerText = tiempoFormateado;
    }

    function agregarCero(valor) {
      return valor < 10 ? '0' + valor : valor;
    }