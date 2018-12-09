// Base object
function Employee(name) {
    this.name = name;
}

// Function added to base object using Proto
Employee.prototype.getName = function() {
    return this.name
}

// Permanent is the child Object
function PermanentEmployee(salary) {
    this.salary = salary;
}

const e = new Employee('John');

// use proto to access parent's properties and method
PermanentEmployee.prototype = e;

// instantiate child object and access parent method getName()
const pe = new PermanentEmployee(5000);

console.log(pe.getName()); // John 
console.log(pe instanceof Employee); // true 
console.log(pe instanceof PermanentEmployee); // true


// Notice that the derived object (PermanentEmployee) can see the base object (Employee) getName() method. 
// When getName() method is called, JavaScript first tries to find this method in the derived object (). It can't find the method there so it goes to the parent object and finds it there.
// If you add a new method to the parent object, it becomes available in the derived object.
// Adding getNameLength() method to the parent object
Employee.prototype.getNameLength = function() {
    return this.name.length + " characters";
}
console.log(e.getNameLength()); // 4
console.log(pe.getNameLength()); // 4



// Use hasOwnProperty() method to determine if a property is defined on the actual object or it's prototype. Here is an example.
console.log("Employee.name: " + e.hasOwnProperty('name')); // true
console.log("Employee.annualSalary: " + e.hasOwnProperty('annualSalary')); // false
console.log("PermanentEmployee.name: " + pe.hasOwnProperty('name')); // false
console.log("PermanentEmployee.annualSalary: " + pe.hasOwnProperty('salary')); // true
