const array1: number[] = [2, 3, 4, 5]; 
let result1 = 1;
for (let index = 0; index < array1.length; index++) {
    result1 *= array1[index];
}
console.log(result1);

const array2: number[] = [2, 3, 4, 5]; 
let result2 = 1;
let index = 0;
while (index < array2.length) {
        result2 *= array2[index];
        index++;
}
console.log(result2);