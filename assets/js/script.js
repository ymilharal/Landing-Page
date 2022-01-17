let nome = window.document.getElementById("nome")
let sobrenome = document.querySelector("#sobrenome")
let email = document.querySelector("#email")
let titulo = document.querySelector("#titulo")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let tituloOk = false
let assuntoOk = false


nome.style.width = "100%"
email.style.width= "100%"


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length<3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color= "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true

    }
}
function validaSobrenome(){
    let txtSobrenome = document.querySelector("#txtSobrenome")
    if(sobrenome.value.length<3){
        txtSobrenome.innerHTML = "Sobrenome Inválido"
        txtSobrenome.style.color= "red"
    }else{
        txtSobrenome.innerHTML = "Sobrenome Válido"
        txtSobrenome.style.color = "green"
        sobrenomeOk = true

    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
    
}

function validaTitulo(){
    let txtTitulo = document.querySelector("#txtTitulo")
    if(titulo.value.length >= 25){
        txtTitulo.innerHTML = "Titulo ultrapassa o limite de 25 caracteres."
        txtTitulo.style.color="red"
        txtTitulo.style.display = "block"
    }else{
        txtTitulo.innerHTML = "O Titulo é valido."
        txtTitulo.style.color="green"
        txtTitulo.style.display = "block"
        tituloOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length <= 100){
        txtAssunto.innerHTML = "A receita deve conter no minimo 100 caracteres."
        txtAssunto.style.color="red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.innerHTML = "A receita é valida."
        txtAssunto.style.color="green"
        txtAssunto.style.display = "block"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && sobrenomeOk == true && emailOk == true && tituloOk == true && assuntoOk == true){
        alert("Receita enviada com sucesso!")
    }else{
        alert("Preencha o formulário da receita corretamente!") 
    }
}