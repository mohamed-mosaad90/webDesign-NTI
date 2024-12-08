let myHttp = new XMLHttpRequest();
let allposts = [];
myHttp.open("Get", "https://jsonplaceholder.typicode.com/posts")
myHttp.send();
myHttp.addEventListener("readystatechange", () => {
    if (myHttp.status == 200 && myHttp.readyState == 4) {
        allposts= JSON.parse(myHttp.response)
        console.log(allposts);
        display()


    } else {
        console.log("noooooooooo");

    }


})

function display(){
    
let containerPosts=``;
    for (let i = 0; i < allposts.length;i++){
        containerPosts+=`
        <tr>
        <td>${allposts[i].title}</td>
        <td>${allposts[i].body}</td>
        </tr>
        `

    }
    document.getElementById("tbody").innerHTML = containerPosts

}

