function findMin(...args : number[]) {
    let result = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        if(result > arguments[index]) {
            result = arguments[index];
        }
        
    }
    console.log(result);
}

findMin(12, 14, 4, -4, 0.2);