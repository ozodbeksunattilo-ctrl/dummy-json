const api = "https://dummyjson.com/posts"

const wrapper = document.querySelector(".wrapper")
let search = []

async function getData(api) {
    try {
        let res = await axios.get(api)
        search = res.data.posts
        domRender(res.data.posts);
        
    } catch (error) {
        console.log(error);
        
    }
}

getData(api)


function domRender(data) {
wrapper.innerHTML = ""



    data.map((item)=>{
        wrapper.innerHTML += `
        <div onclick="getNavigation(${item.id})"  class="card">
        <h1 class="title">${item.title}</h1>
        <p class="body">${item.body}</p>
        <p class="tags">${item.tags.join(", ")}</p>
        <p class="views">${item.views}</p>
        <p class="dislike">${item.reactions.dislikes}</p>
        <p class="likes">${item.reactions.likes}</p>
        
        
        </div>
        
        
        
        `
        
    })
    
}

function getNavigation(id) {
    if(id){
        localStorage.setItem("id" , id)
    }
    window.location.href = "./detail.html"
}



const input = document.querySelector(".input")

input.addEventListener("input",  (e) =>{

let value = e.target.value.toLowerCase()

let filterSearch = search.filter((item) => item.title.toLowerCase().includes(value))

domRender(filterSearch)
})


