function anotherShowNumbers(i: number = 0): void {
    if (i > 10) return;
  
    const randomDelay = Math.floor(Math.random() * 3000);
  
    setTimeout(() => {
      console.log(i);
      anotherShowNumbers(i + 1);
    }, randomDelay);
  }

  anotherShowNumbers();