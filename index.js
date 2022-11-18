// Write your solution in this file!


const employee ={
    name: "Felix", streetAddress: "11 Parklands"


}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return{...employee, ...{[key]:value} };
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    let employeeNew = Object.assign({}, employee);
    delete employeeNew[key];
    return employeeNew;
  }


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }