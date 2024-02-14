// Task 1: Objects
const student = {
    name: "John Doe",
    age: 18,
    grade: 12,
    subjects: ["Math", "Science", "English"]
  };
  
  // Task 2: Bind, Apply, and Call
  function displayInfo(message) {
    console.log(`${message}: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  const boundDisplayInfo = displayInfo.bind(student);
  boundDisplayInfo("Student Information");
  
  function displayInfoWithMessage(message) {
    console.log(`${message}: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  displayInfoWithMessage.apply(student, ["Applied with apply"]);
  displayInfoWithMessage.call(student, "Applied with call");
  
  // Task 3: Callbacks
  function processSubjects(subjects, callback) {
    subjects.forEach(callback);
  }
  
  function logSubject(subject) {
    console.log(`Studying ${subject}`);
  }
  
  processSubjects(student.subjects, logSubject);
  
  // Task 4: Map and Filter
  function doubleGrades(student) {
    const doubledGrades = student.subjects.map(subject => {
      return {
        subject: subject,
        grade: student.grade * 2
      };
    });
    console.log("Original Grades:", student.grade);
    console.log("Doubled Grades:", doubledGrades.map(subject => subject.grade));
  }
  
  doubleGrades(student);
  
  function passingSubjects(student) {
    const passing = student.subjects.filter(subject => {
      return student.grade >= 70; 
    });
    console.log("Passing Subjects:", passing);
  }
  
  passingSubjects(student);
  