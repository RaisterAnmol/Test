const addPost=(post)=>{
    posts.push(post)
}
const posts=[
    {id:1,postName:"POst One",postDesc:'Post one desc'},
    {id:1,postName:"POst One",postDesc:'Post one desc'},
    {id:1,postName:"POst One",postDesc:'Post one desc'}
]
console.table(posts)
const newpost={id:1,postName:"POst One",postDesc:'Post one desc'}
addPost(newpost)
console.table(posts)