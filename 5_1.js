// Дана матрица размера M x N и целое число Л (1<=K<=N). 
// Вывести элементы К-го столбца данной матрицы.
let M = Number(prompt("Введите количество строк"));
let N = Number(prompt("Введите количество столбцов"));
let K = Number(prompt("Введите номер столбца"));
let matrix = [];
for (let i = 0; i < M; i++){
	matrix[i] = [];
	for (let j = 0; j < N; j++){
		matrix[i][j] = Math.round( 1 - 0.5 + Math.random() * (10 - 1 + 1));
	}
}
console.log(matrix);

for (let i = 0; i < M; i++){
	console.log("Элементу " + K + "-го столбца строки " + i + " соответствует: " + matrix[i][K]);
}