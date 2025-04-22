function calcArrProduct(arr: any[]): Promise<number | string> {
    return new Promise((resolve, reject) => {
      const allNumbers = arr.every(item => typeof item === "number");
  
      if (!allNumbers) {
        resolve("Error! Incorrect array!");
      } else {
        const product = arr.reduce((acc, val) => acc * val, 1);
        resolve(product);
      }
    });
  }
  
  calcArrProduct([3, 4, 5]).then(result => console.log(result)); 
  calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));