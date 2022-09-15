// api's
const apiURL = 'https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId'


function getProducts() {
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })


}




document.addEventListener("DOMContentLoaded", () => {
    getProducts()


})


















