function findUnique(arr: number[]) {
    console.log(isUnique(arr));
}

function isUnique(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

findUnique ([1, 2, 3, 5, 3]); // => false
findUnique ([1, 2, 3, 5, 11 ]); // => true
