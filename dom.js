/*const lis=document.getElementsByClassName("list-group-item");
for(let i=0;i<lis.length;i++){
    if(i%2==0){
        lis[i].style.backgroundColor="black";
        lis[i].style.color="white";
    }else{
        lis[i].style.backgroundColor="grey";
        lis[i].style.color="black";
    }
}
const myBtn=document.getElementById("button");
myBtn.addEventListener("click",()=>{
    console.log("Button Clicked");
})
document.getElementById("text-input").addEventListener("mouseenter",()=>{
    console.log("Mouse-Enter");
});
document.getElementById("submitBtn").addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("Submit btn was clicked");
    console.log(event);
})
document.getElementById("text-input").addEventListener("keyup",(e)=>{
    let value=e.target.value;
    console.log(value);
});
let val=document.getElementById("my-container")
val.addEventListener("mouseenter",()=>{
    val.style.backgroundColor="black";
    let count=0;
    count++;
    if(count%2==0){
        val.style.backgroundColor="yellow";
    }
})
val.addEventListener("mouseleave",()=>{
    val.style.backgroundColor="red";
})


// create html element ,add that element by using appendchilde function directily to a html page
const myPara=document.createElement("p");
myPara.textContent="this is a paragraph";
myPara.setAttribute("class","text-danger");
document.getElementById("header-section").appendChild(myPara);

console.log(myPara);*/

document.getElementById("submitBtn").addEventListener("click",(e)=>{
    e.preventDefault()
    const item=document.getElementById("text-input").value
    //console.log(item);
    const myLi=document.createElement("li");
    myLi.textContent=item;
    myLi.setAttribute("class","list-group-item");
    document.getElementById("items").appendChild(myLi);
})

