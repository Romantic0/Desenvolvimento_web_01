function formingMagicSquare(s) {
    // Write your code here
    let mudancasTotais = 0

    //ANTES
    console.log(s)

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            let somaColuna = 0
            let somaLinha = 0

            s[i].forEach(num => {
                somaColuna += num
            })
            for (let c = 0; c < s[j].length; c++) {
                somaColuna += s[c][j]
                somaLinha += s[i][j] 
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