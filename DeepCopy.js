let student = {
    s_id: "S_01",
    s_name: "Sakshi",
    s_address:"Dewas",
    s_marks: 75
}
console.log("Deep Copy")
let newStudent = JSON.parse(JSON.stringify(student))
console.log("student: ",student)
console.log("newStudent: ",newStudent)
console.log("After modification")
newStudent.s_name = "sakshi_joshi"
console.log("student: ",student)
console.log("newStudent: ",newStudent)


