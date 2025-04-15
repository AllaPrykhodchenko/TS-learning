class Person {
    name : string;
    surname : string;
    
    constructor(name : string, surname : string) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() : void{
        console.log(this.name + " " + this.surname)
    }
}

class Student extends Person {
    year : number;
    constructor(name : string, surname : string, year : number) {
        super(name, surname);
        this.year = year;
    }

    override showFullName(middleName? : string): string {
        return this.name + " " + this.surname + " " + middleName;
    }

    showCourse() : void {
        const currentYear: number = new Date().getFullYear();
        let course;
        if(currentYear - this.year >=6) {
            course = 6;
        }
        else {
            course = currentYear - this.year
        }
        console.log(course);
    }
}

let newPerson = new Person("Alla", "Padalko")
newPerson.showFullName();

const stud1 = new Student("Petro", " Petrenko ", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6