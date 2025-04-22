function getPromise(message: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function (data) {
    console.log(data);
  });