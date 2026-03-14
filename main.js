/*console.log("My JS works ");
console.error("ERror");
let x=25;
let y="Aditya";
console.log("the roll no is ",x,"the name is ",y);

var value1=15;

let nums2=new Array()// this line tells us that the array is also a object in itself , So because of this we can easily store another array inside a array , it leads to forming a 2-d array .
nums2=[10,20,50]// in the array we can store all the different type of data types as in js all the data type is a object because of oops.
console.log(nums2);
let a=["Aditya","Akash",25,null,nums2];
//console.log(a);
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
const nums3=[...a];// meaning if once we use a const array we can define the same name for another array or any variable , because the array is holding the reference of the array present in the memory  instead of the values so we can use const aur let to change the index value anywhere  in the code. 
console.log(nums3);// the ... operator is used for giving spacees or to give space for different vlues present in the array.
a[2]=30; // it means  that the value present at that index will chnage not the address of the array . So we can easily change any value present in the array .
console.log(nums3);
console.log(a);
nums3.push(100)
console.log(nums3)
nums3.pop()
console.log(nums3)
nums3.slice(0,2)
console.log(nums3)
console.log(true+false+true+false);
function add(num1,num2){
     return num1+num2
}
console.log(add(true,false)) ;
console.log(add("2","String")) ;
*/
function add(num1,num2){
    if(typeof(num1)=="number"&&typeof(num2)=="number"){
        return num1+num2
    }
}
let functionObject=add;
let array=[10,20,add];
console.log(array)
console.log(functionObject)
console.log(add(10,20)) ;
const product=(num2,num1) =>{
    if(typeof(num1)=="number"&&typeof(num2)=="number"){
        return num1+num2
    }
};
console.log(product(20,30))

const Set=setTimeout(()=>{
    console.log("Setimeout()")
    
},20000)

const h2=document.getElementById("d");
console.log(h2);
