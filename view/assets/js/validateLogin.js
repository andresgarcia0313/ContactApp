// Verificar si hay un token en localStorage
async function checkAuth() {
  if (!localStorage.getItem("token")) {
    debugger;
    window.location.href = "login.html"; // Redirigir si no está autenticado
  } else {
    try {
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (data.message) {
        localStorage.removeItem("token"); // Eliminar el token
        debugger;
        window.location.href = "login.html"; // Redirigir al login
      }
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al validar el token" + err);
    }
  }
}

// Llama a la función checkAuth al cargar la página
window.onload = checkAuth;

const logout = () => {
  localStorage.removeItem("token"); // Eliminar el token
  window.location.href = "login.html"; // Redirigir al login
};
