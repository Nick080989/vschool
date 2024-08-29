var employees = [];

function Employee(name, jobTitle, salary, status) {
     this.name = name;
     this.jobTitle = jobTitle;
     this.salary = salary;
     this.status = status;
}
var printEmployeeForm = function(employee) {
     console.log(employee);
}

var employee1 = new Employee("John Doe", "Manager", 50000, "Full Time");
var employee2 = new Employee("Jane Doe", "Assistant", 30000, "Part Time");
var employee3 = new Employee("Jim Beam", "Intern", 10000, "Contract");

employees.push(employee1, employee2, employee3);