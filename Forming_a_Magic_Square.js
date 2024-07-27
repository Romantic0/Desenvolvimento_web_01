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
    let linhaErrada = []
    let colunaErrada = []

    for (let i = 0; i < s.length; i++) {
        let somaLinha = 0
        for (let j = 0; j < s[i].length; j++) {
            let somaColuna = 0
            somaLinha += s[i][j]

            for (let c = 0; c < s[j].length; c++) {
                somaColuna += s[c][j] 
            }
            if (somaColuna != 15) {
                colunaErrada.push(i)
                console.log('entrou 2')
            }
        }
        if (somaLinha != 15) {
            linhaErrada.push(i) 
            console.log('entrou 1')
        } 
    }        

    //DEPOIS
    console.log(s)
    console.log(colunaErrada, linhaErrada)
    console.log(mudancasTotais)
    
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))