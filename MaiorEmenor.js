//Faça um Programa que leia três números e mostre o maior e o menor deles.

let maior = 0
let menor = Infinity
function MaiorNumero() {
    for (numero in numeros) {
        let comparacao = (numeros[numero])
        if (comparacao > maior) {
            maior = comparacao
        }
        else if (comparacao < menor) {
            menor = comparacao
        }
    }
    console.log(`você escolheu os número '${numeros}', o maior entre eles é: O número ${maior}, e o menor é: O número ${menor}`)
}

MaiorNumero(numeros = [5, -2, 2, 10, 2])