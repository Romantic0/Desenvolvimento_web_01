function formingMagicSquare(s) {
    // Write your code here
    // O numero magico sera definido como a maior some entre as linhas e colunas
    let constanteMagica = 15
    let somaTotal = 0
    let mudancasTotais = 0

    function repetiu(arr, num) {
        let cont = 0
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (num === arr[i][j]) {
                    cont += 1
                }
            }
        }

        return cont > 1
    }

    //ANTES
    console.log(s)

    for (let i = 0; i < s.length; i++) {
        let MatrizMagica = true
        for (let j = 0; j < s[i].length; j++) {
            if(repetiu(s, s[i][j])) {
                MatrizMagica = false
            }
            while (MatrizMagica == false) {
                for (let l = 0; l < s.length; l++) {
                    let somaLinha = 0
                    let somaColuna = 0
                    
                    for(let c = 0; c < s[l].length; c++) {
                        somaLinha += s[l][c]
                        somaColuna += s[c][l] 
                    }
                    if (somaLinha != 15 && somaColuna != 15) {
                        console.log(somaLinha, somaColuna)
                        s[i][j] += 1
                        mudancasTotais += 1
                        console.log('Passou')
                    }
                    if (somaLinha == 15 || somaColuna == 15) {
                        MatrizMagica = true
                        console.log('eita')
                    }
                }
            }
        }
    }

    //DEPOIS
    console.log(s)
    console.log(mudancasTotais)
    
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))