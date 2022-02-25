function mostrarSenha() {
    var tipo = document.getElementById("Password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }
  function mostrarSenhaC() {
    var tipo = document.getElementById("Password2");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }