function lastElem(arr: number[], idx: number = 1) {
    let result : number[] = [];
    arr.reverse();
    for (let index = 0; index < idx; index++) {
        if(arr[index] === undefined) {
            break;
        }
        result.unshift(arr[index]);
    }
    return result;
}

console.log(lastElem([ 3 , 4 , 10, - 5 ])); // - 5 
console.log(lastElem([ 3 , 4 , 10, - 5 ], 2 )); // [ 1 0, - 5 ] 
console.log(lastElem([ 3 , 4 , 10, - 5 ], 8 )); // [ 3 , 4 , 1 0, - 5 ]
