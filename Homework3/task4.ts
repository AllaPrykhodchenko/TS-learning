class MyWorker {
    fullname : string;
    dayRate : number;
    workingDays : number;
    #experience : number = 1.2;

    constructor(fullname : string, dayRate : number, workingDays : number) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() : void {
        console.log(this.fullname + " salary: " + this.dayRate * this.workingDays)
    }

    showSalaryWithExperience() : void {
        console.log(this.fullname + " salary: " + this.dayRate * this.workingDays * this.#experience)
    }

    getSalaryWithExperience() : number {
        return this.dayRate * this.workingDays * this.#experience;
    }

    get showExp(): number {
        return this.#experience;
    }

    set setExp(value: number) {
        this.#experience = value;
    }
    
}

const worker1 = new MyWorker("John Johnson", 20, 23);
console.log(worker1.fullname);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

const worker2 = new MyWorker("Tom Thomson", 48, 22);
console.log(worker2.fullname);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

const worker3 = new MyWorker("Andy Ander", 29, 23);
console.log(worker3.fullname);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

const workers: MyWorker[] = [worker1, worker2, worker3];

workers.sort((a, b) => a.getSalaryWithExperience() - b.getSalaryWithExperience());

console.log("Sorted salary: ");
for (const worker of workers) {
    console.log(`${worker.fullname}: ${worker.getSalaryWithExperience()}`);
}
