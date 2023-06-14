function Student (){
    this.name = 'sakshi',
    this.gender = 'Female'
}
Student.prototype.age = 23;
var studObj1= new Student()
console.log(studObj1.age)
var studObj2 = new Student()
console.log(studObj2.age)
