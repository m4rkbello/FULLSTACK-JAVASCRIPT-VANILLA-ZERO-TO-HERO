// Creating a 2D array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6, 7, 8, 9],
    [7, 8, 9]
];

// console.log(matrix[1][5]) //DAPAT ANG RESULT IS 9

// Accessing elements in the 2D array
console.log(matrix[0][0]); // Output: 1 PINAKAUNA IS INDEX SA ARRAY NA COLLECTION [0]  IS SA UNANG BLOCK THEN [0]
console.log(matrix[1][3]); // Output: 9

// Iterating over the elements of the 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Adding a new row to the 2D array - IPASA NIYA GAMIT PUSH METHOD IPASA SA LAST
matrix.push([10, 11, 12]);
matrix[2].unshift([20, 30, 40, 90])

// Adding a new element to an existing row - IPASA SA INDEX [0] O PINAKAUNA NGA COLLECTION SA ARRAYS TAPOS ANG 13 IDUGANG SA PILAST GAMIT PUSH 
matrix[0].push(13); 

// Updated matrix
console.log(matrix);
