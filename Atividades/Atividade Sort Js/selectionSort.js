let vetorOriginal = [8, 3, 5, 1, 9, 6, 2, 7, 4];

function selectionSort() {
    let comparacoes = 0;
    let trocas = 0;

    for (let i = 0; i < vetor.length - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < vetor.length; j++) {

            comparacoes++;
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (menor != i) {
            let auxiliar = vetor[i];

            vetor[i] = vetor[menor];
            vetor[menor] = auxiliar;
            trocas++;
        }
    }

    console.log("Original:", vetorOriginal);
    console.log("Ordenado:", vetor);
    console.log("Comparações:", comparacoes);
    console.log("Trocas:", trocas);
}

let vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];
selectionSort(vetor);