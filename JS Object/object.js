function Student(name,age,cgpa){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
}

var student1 = new Student("Jobayer",25,3.34);
var student2 = new Student("Ojayer",21,3.56);
var student3 = new Student("Jojo",25,3.56);

console.log(student1.name);