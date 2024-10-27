


let nome = document.getElementById('entrada1')
let senha = document.getElementById('senha')

let nome2 = document.querySelector('.entrada1')
let senha2 = document.querySelector('.senha')

let fig = document.querySelector('.fig')
let sectLogar = document.querySelector('.sectLogin')
let servico  = document.querySelector('.caxaMenu1')
let contactoMenu1 = document.querySelector('.contactoMenu1');
let Conteudo = document.querySelector('.Conteudo')
let imagem2 = document.querySelector('.imagem2');
let smart2 = document.querySelector ('.smart')
let imagem = document.querySelector ('.imagem')
function Confirmar () {
    
    

    if((nome.value == "Smart School") && (Number(senha.value) == 422517)){
        alert("Acesso Autorizado")
        sectLogar.style.display = "none"
        Conteudo.style.display = "flex"


    }
    else{

        alert("Acesso não aturizado")

        nome2.style.border = "1px solid red"
        senha2.style.border = "1px solid red"


    }

}

function servicos (){

    servico.style.display = "block";
contactoMenu1.style.display = "none"
imagem2.style.display = "none"
fig.style.display = "none"
smart2.style.display = "none"
imagem.style.display = "none"
fig.style.display = "none";




} 

function smart () {

    servico.style.display = "none";
    contactoMenu1.style.display = "none";
    imagem2.style.display = "none"
    fig.style.display = "block"
    smart2.style.display = "block"
    imagem.style.display = "block"
    fig.style.display = "block";



}

function home () {

    servico.style.display = "none";
    contactoMenu1.style.display = "none";
    imagem2.style.display = "flex"
    fig.style.display = "none"
    smart2.style.display = "block"
    imagem.style.display = "block"
    fig.style.display = "none";


}

function contacto () {

    contactoMenu1.style.display = "block"
    servico.style.display = "none";
}

function Smart () {

    imagem2.style.display = "block"
    fig.style.display = "none"
    smart2.style.display = "none"
    imagem.style.display = "none"
    fig.style.display = "none";



}