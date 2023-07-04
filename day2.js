//day 2
/*
let arr=[1,2,3,4,5]
delete arr[2]
console.log(arr.length)//5
console.log(arr)//[1,2,<1 empty set>,4,5]
arr.splice(2,1)//[1,2,4,5]
let arr=new Array[1,2,'hello',[9]]-->dynamic language
let arr=new Array(5)--><5empty elements>
ar.push(1)//[5,1]
//for each
arr.forEach(ele=>{console.log(ele))//iterates 
let arr=[11,2,33]
for(var i of arr){
    if(i%2==0){
        console.log(`${i} is even`)
    }
    else{
          console.log(`${i} is odd`)
    }
}
let arr=[1,2,3]
arr.forEach(ele => console.log(ele*2))
const mul=(arr,num)=>{
    newarr=[];
    arr.forEach(ele =>
         newarr.push(ele*num));
         return newarr;
}
const res=mul([1,2,3],2)
console.log(res)
//map
const mul=(arr,num)=>{
    var newarr=[]=arr.map(ele =>ele*num)
    return newarr
}
const res=mul([1,2,3],2)
console.log(res)
//oddeven
const oddEven=(arr)=>{
    newarr=arr.map(ele=>{
        if(ele%2==0){
            return "even";
        }
        else{
            return "odd"
        }
})
return newarr
}
  
const res=oddEven([1,2,3])
console.log(res)
//filter method
const oddEven=(arr)=>{
    const newarr =arr.filter((ce)=>ce%2==0)
return newarr}
  
const res=oddEven([1,2,3])
console.log(res)
var arr3=[...arr1,...arr2]-->spread operator to add
var arr2=[..arr1]-->it protects the arr1 to get chane when arr2 is updated
//rest keyword
const arr=[1,2,3,4,5];
const[a,b,...rest]=arr
console.log(a)
console.log(b)
console.log(rest)
//objects
var person={
    fname:"tony",
    lname:"stark",
}
person["salary"]=50000
console.log(person)
//
const student={
    name:"ram",
    cls:"x",
    marks:{
        english:90,
        maths:95,
        sci:100,
        sub:70
    }
}
const printMarks=(obj,sub)=>{
    return `${obj.name}'s sci mark is ${student.marks[sub]}`
}
console.log(printMarks(student,"sci"))

const obj=[{
    name:'Nandha',
    age:22,
    height:5
},{
    name:'ram',
    age:25,
    height:6.1,
}]
//obj[0].age=(obj[0].age)+2
//obj[1].age=(obj[1].age)+2
for(var i in obj){
    obj[i].age=obj[i].age+2
}
console.log(obj)
*/
/*const res=obj.map((ele)=>{
return {
    ...ele,age:ele.age+2
}
})
console.log(res)

*/
const user=[{
    id:1,
    age:22,
    name:"karnan"
},{
    id:2,
    age:19,
    name:"arjunan",
},
{
    id:3,
    age:21,
    name:"bheeman",

}]
const adduser=(object)=>{
       user.push(object)
       return user
}
const edituser=(id,key,val)=>{
    const index=user.findIndex(ele=>ele.id==id);
    if(index!=-1){
        user[index][key]=val;
        return user
    }
    return 'user not found'
}
const deleteuser=(id)=>{
    const index=user.findIndex(ele=>ele.id==id);
    if(index!=-1){
        user.splice(index,1)
        return user
    }
    return 'user not found'
}
const getuser=(id)=>{
    const userinfo=user.find(ele=>ele.id==id)
    return userinfo||'user not found'
}
console.log(adduser({

    
    id:4,
    age:22,
    name:'nakulan'
}))
console.log(getuser(3))



