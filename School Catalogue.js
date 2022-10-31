class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
  
    }
    //name为、level和numberOfStudents属性创建吸气剂。每个 getter 都应该返回保存到属性的值。
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(value) {
      if(value.isNaN()) {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
      else {
        this._numberOfStudents = value;
      }
    }
  
    
    /*在您的 getter 下，创建一个名为quickFacts将以下字符串记录到控制台的方法：
    SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
    代替SCHOOL NAME，替换实例的name值。代替NUMBER OF STUDENTS，替换实例的numberOfStudents值。代替LEVEL，替换实例的level值。
    methodName() {
    console.log(`You can interpolate a property like this: ${propertyOne}.`);
    }*/
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents}
     students at the ${this.level} school level.`);
  }
  static
  pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() *
    substituteTeachers.length);
  }
  
  }

  class PrimarySchool extends School {
    constructor(name,numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy; 
    }
  }

  class HighSchool extends School {
    constructor(name, numberOfStudents,sportsTeams) {
        super(name,'high',numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
  }

  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();//调用实例

//调用.pickSubstituteTeacher()on School，并将以下数组作为参数传递：
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool(`Al E. Smith`, 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
 console.log(alSmith.sportsTeams);


 







