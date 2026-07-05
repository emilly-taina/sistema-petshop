if(localStorage.getItem("logado")!=="true"){

    window.location.href="login.html";

}

document.getElementById("btnSair").addEventListener("click",()=>{

    localStorage.removeItem("logado");

    window.location.href="login.html";

});
