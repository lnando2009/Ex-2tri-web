let frases =[
    "Nunca subestime o poder de trabalho em equipe - Helo 3",
    "O aço ganha as batalhas, o ouro ganha a guerra - Davion",
    "Com grandes poderes vem grandes responsabilidades - Tio Ben",
    "Existe diferença entre sobreviver e viver - The lest of Us",
    "As vezes é melhor ter paciência do que agir impulsivamente - Zelda BOTW",
    "GOOOOOOOOOOL - FC 26"
];


let clique = 0;
function gerarFrases(){
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    clique = cliques+1;

    document.getElementById("frase").innerText = fraseEscolhida;
    document.getElementById("contador").innerText = "Frases geradas: "+cliques;
}