let vetorOriginal = [8, 3, 5, 1, 9, 6, 2, 7, 4];


function bubbleSort() {
    let comparacao = 0;
    let trocas = 0;

    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {

            comparacao++;

            if (vetor[j] > vetor[j + 1]) {
                let auxiliar = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = auxiliar;
                trocas++;
            }
        }
    }

    console.log("Original:", vetorOriginal);
    console.log("Ordenado:", vetor);
    console.log("Comparações:", comparacao);
    console.log("Trocas:", trocas);
}

let vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];


bubbleSort(vetor);