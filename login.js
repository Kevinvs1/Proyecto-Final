function iniciarSesion() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var errorLogin = document.getElementById('errorLogin');

    // Verificar si los campos están vacíos
    if (usuario.trim() === '' || password.trim() === '') {
      errorLogin.textContent = 'Por favor, completa todos los campos.';
      return false;
    }
    // Obtener la lista de usuarios almacenados en localStorage
    var usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si las credenciales son válidas
    var usuarioValido = usuariosAlmacenados.find(u => u.nombre === usuario && u.password === password);

    if (usuarioValido) {
      alert('Inicio de sesión exitoso');
      location.href = './main.html';
      return false;
    } else {
      alert('Credenciales incorrectas');
      return false;
    }
  }

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

  function mostrarRegistro() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
  }

  function mostrarLogin() {
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
  }