function randArray(k : number) {
    let array : number[] = [];
    for (let index = 0; index < k; index++) {
        const randomNumber = Math.floor(Math.random() * 501);
        array.push(randomNumber);
    }
    console.log(array);
}
    
randArray(5);