// Дана матрица М х N (M,N-чётные). Поменять местами левую нижнюю и правую верхнюю четверти матрицы.
console.log("Вводите чётные числа");
let M = Number(prompt("Количество строк"));
let N = Number(prompt("Количество столбцов"));

let matrix_first = [];
for (let i = 0; i < M; i++){
	matrix_first[i] = [];
	for (let j = 0; j < N; j++){
		matrix_first[i][j] = Math.round( 1 - 0.5 + Math.random() * (10 - 1 + 1));
	}
}

let matrix_new = [];
for (let i = 0; i < M; i++){
	matrix_new[i] = [];
	for (let j = 0; j < N; j++){
		matrix_new[i][j] = matrix_first[i][j];
	}
}

let len_matrix = matrix_first.length;

for (let i = 0; i < M; i++){
	for (let j = 0; j < N; j++){
		if ((i < (len_matrix / 2)) && (j >= (len_matrix / 2))){
			let new_item_1 = matrix_first[i][j];
			matrix_new[i + (len_matrix / 2)][j - (len_matrix / 2)] = new_item_1;
			let new_item_2 = matrix_first[i + (len_matrix / 2)][j - (len_matrix / 2)];
			matrix_new[i][j] = new_item_2;
		}
	}
}

console.log(matrix_first);
console.log(matrix_new);
