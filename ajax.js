//console.log("ajax works");
// step 1 create a obj of xmlhttpsrequest
const xhr=new XMLHttpRequest()
// define the url
const url='https://api.github.com/users'

// open a portal of communication
xhr.open('GET',url)
//exec onreadystage is an async
xhr.onreadystatechange=()=>{
    console.log(xhr.readyState)
    if(xhr.readyState==4&&xhr.status==200){
        const respObj=JSON.parse(xhr.responseText)
        console.log(respObj)

        let output=''
        for(let i=0;i<respObj.length;i++){
            output+=`
                <div>
                    <img src='${respObj[i].avatar_url}'/><br>/>
                    <h3>@${respObj[i].login}</h3>
                    <h5>ID-${respObj[i].node_id}</h5>
                </div>
            `
        }
        document.getElementById('my-div').innerHTML=output
    }
}
xhr.send()