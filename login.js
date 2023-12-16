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
      location.href = './index.html';
      return false;
    } else {
      alert('Credenciales incorrectas');
      return false;
    }
  }