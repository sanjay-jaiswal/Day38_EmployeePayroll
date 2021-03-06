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