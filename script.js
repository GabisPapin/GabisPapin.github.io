const botaoFoto = document.getElementById("botaoFoto");
const botaoHabil = document.getElementById("botaoHabil");
const botaoHobbies = document.getElementById("botaoHobbies");

botaoFoto.addEventListener('click', function(){
    let localFoto = document.getElementById("foto");
    localFoto.scrollIntoView({block: "center", behavior: "auto"});
    //não funcionou, testar outras formas.
})