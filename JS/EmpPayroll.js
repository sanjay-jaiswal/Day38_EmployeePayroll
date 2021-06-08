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

   toString() {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    //If  the start date is not in a proper formate. It will shoe Undefined datetype.
    const empDate = !this.startDate ? "undefined" : 
                    this.startDate;
    //But, In the return for start date we are passing empDate as a value.               
    return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender + 
           ", profilePic='" + this.profilePic + ", department=" + this.department +
           ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
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
    let now = new Date();

    if (startDate > now) throw 'Invalid, Start Date is a Future Date!';
    var diff = Math.abs(now.getTime() - startDate.getTime());
    console.log(diff);

    //Proper day format of till 30 days.
    if (diff / (1000 * 60 * 60 * 24) > 30) 
      throw 'Invalid, Start Date is beyond 30 Days!';
    this._startDate = startDate; 
  }
}