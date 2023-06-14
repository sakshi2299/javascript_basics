let newKey= 'subject';
var student ={
    name: "sakshi",
    age: 23,
    email :"sakshi.joshi0722@gmail.com",
    [newKey]:'Javascript'
};
console.log(student.newKey)
student["name"]="sakshi joshi"
console.log(student.name)
student={...student,gender:"Female"}
console.log(student)
for(let item of Object.keys(student)){
    if(typeof student[item]== "number" && student[item]==23){
        student[item]=24
    }
}
console.log(student);

/*const key = "age"
const value = 23
let info = {
    name:"sakshi",

}
info[key]=value;
console.log(info)
*/

let obj = {
    key0:"key0",
    key3:"key0"

};
//with spread operator
for(let i=0 ; i<=3; i++ ){
    obj={...obj,[`key${i}`]:`key${i}`}

}
console.log(obj)


