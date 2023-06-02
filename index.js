const employee = 
{
    name : "James",
    streetAddress : "176 Liberty Way",
};

function updateEmployeeWithKeyAndValue(employee)
{
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee)
{
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee)
{
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee)
{
    delete employee.name;
    return employee;
};