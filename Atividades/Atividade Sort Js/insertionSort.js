let vetorOriginal = [8, 3, 5, 1, 9, 6, 2, 7, 4];

function insertionSort() {
    let comparacoes = 0;
    let movimentacoes = 0;

    for (let i = 1; i < vetor.length; i++) {
        let valor = vetor[i];
        let j = i - 1;

        while (j >= 0) {
            comparacoes++;

            if (vetor[j] > valor) {
                vetor[j + 1] = vetor[j];

                movimentacoes++;
                j--;
            } else {
                break;
            }
        }
        vetor[j + 1] = valor;
    }

    console.log("Original:", vetorOriginal);
    console.log("Ordenado:", vetor);
    console.log("Comparações:", comparacoes);
    console.log("Movimentações:", movimentacoes);
}
let vetor = [...vetorOriginal];

insertionSort(vetor);