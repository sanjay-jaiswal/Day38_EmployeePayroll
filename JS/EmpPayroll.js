class EmployeePayRoll 
{
    //Adding it for various operations like update, edit, delete etc.
    get id(){return this._id;}
    set(id){
        this._id=id;
    }
    get name() { return this._name; }
    set name(name) { 
      //validating Name with Regex.  
      let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
      if (nameRegex.test(name))
        this._name = name; 
      else throw 'Incorrect Name!';
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { 
    this._profilePic = profilePic; 
  }
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let currentDAte = new Date();
        if (Date.parse(currentDAte) - startDate >= 0) {
            this._startDate = startDate;
        } else {
            throw 'Date is Invalid';
        }
    }

  toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name +
            ", gender = " + this.gender + ", profilePic = " + this.profilePic +
            ", department=" + this.department + ", salary = " + this.salary +
            ", startDate = " + empDate + ", note=" + this.note;
    }
  }

var salary = document.querySelector('#salary');
var output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

var save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }catch(e){
        return;
    }
}

var createEmployeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.startDate = new Date(Date.parse(date));
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

var getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item=>{
        if(item.checked){
            selectedItems.push(item.value);
        }
    });
    return selectedItems;
}

/*
We can use querySelector instead of getElementById. Its a new feature
The querySelector method can be used when we wants to select element by name,
nesting, or class name.
*/
var getInputValueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}

/*
* 1: getElementById is better supported than querySelector in older 
*    versions of the browsers.
* 2: The thing with getElementById is that it only allows to select an 
*    element by its id.
*/
var getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
}