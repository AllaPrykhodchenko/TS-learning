const delay = (i: number, time: number): Promise<number> =>
    new Promise(resolve => setTimeout(() => resolve(i), time));
  
  async function showNumbers(): Promise<void> {
    for (let i = 0; i <= 10; i++) {
      const randomDelay = Math.floor(Math.random() * 3000); // 0–3000 ms
      const result = await delay(i, randomDelay);
      console.log(result);
    }
  }
  
  showNumbers();