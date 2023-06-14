let student = [
    {
        id:1,
        f_name: "sakshi",
        l_name:"joshi",
        age:23
    },
    {
        id:2,
        f_name: "vedika",
        l_name:"pawar",
        age:22

    }
]
//update
student = student.map(obj => {
    if (obj.id === 2) {
      return {...obj, f_name: 'shivani',gender:"female"};
    }
      return obj;
  });
console.log(student)
let new_student={
    id:3,
    f_name:"abc",
    l_name:"xyz"
}
//add in first position
student.unshift(new_student)
console.log(student)
let last_student={
    id:5,
    f_name:"uvw",
    l_name:"pqr"
}
//add in last position
student.push(last_student)
console.log(student)
let fourth_student={
    id:4,
    f_name:"uvw",
    l_name:"pqr"
}
//add in given index
student.splice(4,0,fourth_student)
console.log(student)
//search object with single value
let students = student.find(student => student.f_name === "sakshi");
console.log(students)
//search obj with multiple values
let many_student = student.find(student=>student.f_name==="sakshi" &&student.l_name==="joshi")
console.log(many_student)

