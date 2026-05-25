let id = localStorage.getItem("id");

async function getOne(id) {
  try {
    let res = await axios.get(`https://dummyjson.com/posts/${id}`);
    renderOne(res.data);
  } catch (error) {
    console.log(error);
  }
}
getOne(id);
const detail = document.querySelector(".detail")
function renderOne(oneBlog) {
detail.innerHTML=`

        <h1 class="title">${oneBlog.title}</h1>
        <p class="body">${oneBlog.body}</p>
        <p class="tags">${oneBlog.tags.join(", ")}</p>
        <p class="views">${oneBlog.views}</p>
        <p class="dislike">${oneBlog.reactions.dislikes}</p>
        <p class="likes">${oneBlog.reactions.likes}</p>



`

}
