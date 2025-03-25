

const employee: {name: string, profession: string, worworkingHoursPerDay: number} =  {
	name: "Alex Brown",
	profession: "doctor",
	worworkingHoursPerDay: 10
};

const premiumData: {isPremium: boolean, premium: number} = {
	isPremium: true,
	premium: 1000
};

const payPerHour: number = 32;
const worworkingDays: number = 14;

const experienceСoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5,]; 

const getSalaryInfo = (employeeData: {name: string, profession: string, worworkingHoursPerDay: number}, premiumData: {isPremium: boolean, premium: number}, payPerHour: number, worworkingDays: number, experienceСoefficients: number) => {
    let salary;
	if (premiumData.isPremium) {
		salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
	} else {
		salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
	}
	return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);
console.log(salaryInfo);


