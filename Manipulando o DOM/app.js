let numeros = document.querrySelectorAll('#numeros');

for(let i = 0;i < numeros.length; i++) {
    // <li>1</li>
    console.log(numeros[i].innerText);
}

const nome = 'Jorge' ;

const meuTemplate = 'Meu nome é ${nome}' ;
console.log(meuTemplate);

const meuTem = '2*3 é ${2*3}' ;
console.log(meuTem);

function soma (var1, var2) {
    return var1 + var2
}
const temp = 'Oresultado é ${soma(2,2)}' ;
console.log(temp);

