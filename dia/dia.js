function mudaMomento(){
let imagem= document.getElementById("imagem");
let input= document.getElementById("momento").value.toLowerCase();

if(input==="manha" ||input==="manhã"){
 imagem.src="manha.jpg"
 imagem.alt= "paisagem manha"
} else if(input==="tarde"){
imagem.src="tarde.jpg"
imagem.alt="paisagem tarde"
}
else if(input==="noite"){
    imagem.src="noite.jpg"
    imagem.alt="paisagem noite"
}
}