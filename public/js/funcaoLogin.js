const login = () => {
   let usuario = document.getElementById("usuario").value;
   let senha = document.getElementById("senha").value;

    if (usuario == "aceleradora13" && senha == "senha") {
        alert('Login efetuado');
        window.location = "/views/pages/about"
    }
}