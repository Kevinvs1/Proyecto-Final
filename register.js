/*function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var errorMensaje = document.getElementById('errorMensaje');
  
    // Verificar si los campos están vacíos
    if (usuario.trim() === '' || password.trim() === '') {
      errorMensaje.textContent = 'Por favor, completa todos los campos.';
      return false;
    }
  
    // Obtener la lista de usuarios almacenados en localStorage
    var usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Verificar si el usuario ya existe
    if (usuariosAlmacenados.find(u => u.nombre === usuario)) {
      errorMensaje.textContent = 'El usuario ya existe.';
      return false;
    }
  
    // Agregar el nuevo usuario a la lista
    usuariosAlmacenados.push({ nombre: usuario, password: password });
  
    // Almacenar la lista actualizada en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosAlmacenados));
  
    alert('Usuario registrado exitosamente');
    location.href = './login.html';
    return true;
  }*/

  function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var errorMensaje = document.getElementById('errorMensaje');

    // Verificar si los campos están vacíos
    if (usuario.trim() === '' || password.trim() === '') {
        errorMensaje.textContent = 'Por favor, completa todos los campos.';
        return false;
    }

    // Obtener la lista de usuarios almacenados en localStorage
    var usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario ya existe
    if (usuariosAlmacenados.find(u => u.nombre === usuario)) {
        errorMensaje.textContent = 'El usuario ya existe.';
        return false;
    }

    // Agregar el nuevo usuario a la lista
    usuariosAlmacenados.push({ nombre: usuario, password: password });

    // Almacenar la lista actualizada en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosAlmacenados));

    alert('Usuario registrado exitosamente');
    window.location.href = './index.html';
    return false; // Cambiado de true a false para evitar la sumisión del formulario
    }