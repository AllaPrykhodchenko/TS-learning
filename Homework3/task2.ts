  function showProps(obj: object): void {
    const keys: string[] = [];
    const values: any[] = [];

    for (const key in obj) {
          keys.push(key);
          values.push((obj as any)[key]);
    }
    console.log("Properties:", keys);
    console.log("Values:", values);
  }

  const person = {
    name: "Alla",
    age: 30,
    isEmployee: true,
    city: "Wroclaw",
    hobbies: ["sleeping", "traveling"]
  };

  showProps(person);