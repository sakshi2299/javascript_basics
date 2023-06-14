let student = {
    s_id: "S_01",
    s_name: "Sakshi",
    s_address:"Dewas",
    s_marks: 75
}
console.log("student :",student)
let newStudent = student;
console.log("newStudent :", newStudent)
console.log("after updating")
newStudent.s_name = "Sakshi_joshi";
console.log("student :",student)
console.log("newStudent :",newStudent)
