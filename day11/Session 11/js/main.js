// *Session 10   
     // *1th Part
        // *DOM  -> 3 parts (Select Ele / Add Event / Action)

        // *Select Elements
        // • document.getElementById("id") .                        document.getElementById("myDiv");
        // • document.getElementsByClassName("className") .        document.getElementsByClassName("myClass");
        // • document.getElementsByTagName("tagName") .            document.getElementsByTagName("p");
        // • document.querySelector("cssSelector") .                document.querySelector("h1");
        // • document.querySelectorAll("cssSelector") .            document.querySelectorAll("h1");

        // *Events
            // *Mouse events
                // click,dblclick,mousemove,mouseenter,mousedown(before click),mouseleave,mouseup

            // *Keyboard events
                // keydown (using any key like chars,num,Tab ,Ctr..),keypress (using only chars and numbers, no tab,ctrl),keyup

            // *Input events
                // focus,blur,change

            // *Event Propagation 
                //Bubbling  (false) & Capture  (True)
            
            // preventDefault() => stop default action of event (like submit form)

        // *DOM Exercise

    // *2th Part
        // *APIs => App Programming Interface
            // *1- XMLHttpRequest(); using to call API and communicate with it
            // *2- take instance object from it to work why not work with it direct because we can create many instance obj from it
                // myHttp = new XMLHttpRequest();
            // *3- myHttp.open(); using this method to stablish connection between client side and server side using API link
                // myHttp.open("GET","https://jsonplaceholder.typicode.com/posts");
            // *Methods
                // GET => to get data from server side
                // POST => to send data to server side
                // PUT => to update small data in server side
                // PATCH => to update large data in server side
                // DELETE => to delete data from server side
            // *4- myHttp.send(); to send request for server
            // *5- myHttp.response; to get response from server side
            // *6- myHttp.readyState -> know the state of request how it;
                // 0 => not ready  req not initialized
                // 1 => open       stablish connection
                // 2 => send       send request and received
                // 3 => response   response processing
                // 4 => done       response is ready
            // *7- myHttp.status -> know the status of request (URL)
                // 200 => OK
                // 404 => not found
                // 403 => forbidden
                // 500 => server error
            // *8- Consol.log myHttp.response to get data
                // onReadyStateChange check the readyState وصلت لفين

            // *API Exercise
                // var myHttp = new XMLHttpRequest();
                // var allPosts = [];
                // myHttp.open("GET","https://jsonplaceholder.typicode.com/posts");
                // myHttp.send();
                // myHttp.addEventListener("readystatechange",()=>{
                //   if(myHttp.readyState === 4 && myHttp.status === 200){
                //     allPosts = JSON.parse(myHttp.response);
                //     console.log(allPosts);
                //   }
                // })

            // *This way call AJAX -> can make many requests without reload
        /* *************************************************** */
        // *Sync & Async
            // console.log("object");
            // getData(); // non-blocking code
            // console.log("object2");
        /* *************************************************** */

        // *Callback func
        // y => Callback
            // function x(Callback){
            //     console.log("X");
            //     console.log("X2");

            //     Callback();
            // }

            // function y (){
            //     console.log("Z");
            // }
            // x(y);

        // Ex:- 
            // let myHttpForPosts = new XMLHttpRequest();
            // let allPosts = [];
            // let myHttpComments = new XMLHttpRequest();
            // let allComments = [];

            // function getPosts(Callback){
            //     myHttpForPosts.open("GET","https://jsonplaceholder.typicode.com/posts");
            //     myHttpForPosts.send();
            //     myHttpForPosts.addEventListener("readystatechange",()=>{
            //       if(myHttpForPosts.readyState === 4 && myHttpForPosts.status === 200){
            //         allPosts = JSON.parse(myHttpForPosts.response);
            //         console.log("Posts");
            //         console.log(allPosts);
            //       }
            //     });
            //     Callback();
            // }

            // function getComments(Callback){
            
            //     myHttpComments.open("GET","https://jsonplaceholder.typicode.com/comments");
            //     myHttpComments.send();
            //     myHttpComments.addEventListener("readystatechange",()=>{
            //       if(myHttpComments.readyState === 4 && myHttpComments.status === 200){
            //         allComments = JSON.parse(myHttpComments.response);
            //         console.log("Comments");
            //         console.log(allComments);
            //       }
            //     });
            //     Callback();
            // }

            // function x(){
            //     console.log("X");
            // }

            // getPosts(function (){
            //     getComments(
            //         function(){
            //             x();
            //         }
            //     );
            // }); 
        /* *************************************************** */
        // *Promise
        /******** EX:1 **********/
            //     let allData = [];
            // function getData(type) {
            //   return new Promise(function (Callback) {
            //     let myHttpForData = new XMLHttpRequest();
            //     myHttpForData.open("GET", `https://jsonplaceholder.typicode.com/${type}`);
            //     myHttpForData.send();
            //     myHttpForData.addEventListener("readystatechange", () => {
            //       if (myHttpForData.readyState === 4 && myHttpForData.status === 200) {
            //         allData = JSON.parse(myHttpForData.response);
            //         console.log(`${type}`);
            //         console.log(allData);
            //       }
            //     });
            //     Callback();
            //   });
            // }
            // getData("comments")
            //   .then(() => getData("posts"))
            //   .then(() => getData("albums"))
            //   .then(()=> getData("users"));

        /******** EX:2 **********/
                //     let allData = [];

                // function getData(type) {
                //   return new Promise(function (Callback1 , Callback2) {
                //     let myHttpForData = new XMLHttpRequest();
                //     myHttpForData.open("GET", `https://jsonplaceholder.typicode.com/${type}`);
                //     myHttpForData.send();
                //     myHttpForData.addEventListener("load", () => {
                //       if (myHttpForData.readyState === 4 && myHttpForData.status === 200) {
                //         allData = JSON.parse(myHttpForData.response);
                //         console.log(`${type}`);
                //         console.log(allData);
                //         Callback1(); //resolved
                //       }
                //       else{
                //         Callback2(); //rejected
                //       }
                //     });
                //   });
                // }
                // getData("comments")
                //   .then(() => console.log("ok"))
                //   .catch(()=> console.log("error"))

            // Catch with all
                // getData("comments")
                // .then(() => getData("posts"))
                // .then(()=> getData("photos"))
                // .then(()=> getData("users"))
                // .catch(()=> console.log("error"))  //catch work for each one if it throw error
        /* *************************************************** */
        // *Async,Await,Fetch  => await not work in global must be func has async

            // async function print() {
            //     await getData("comments");
            //     await getData("posts");
            //     await getData("photos");
            //     await getData("users");
            //   }
            //   print();
            
            //   (async function(){
            //       await getData("comments");
            //       await getData("posts");
            //       await getData("photos");
            //       await getData("users"); 
            //   })();
            
        /*********** EX:2 *********** */
            //     let allData = [];

            // async function getData(type) {
            //     let res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
            //     let finalRes = await res.json();
            //     console.log(finalRes);
            // }


            // (async function(){
            //     await getData("comments");
            //     await getData("posts");
            //     await getData("photos");
            //     await getData("users"); 
            // })();


            // (async function(){
            // await getData("comments").then(()=> console.log("OK")).catch(()=> console.log("Error")); 
            // })();

            /* *************EX:3************ */ 
                //     let allData = [];
                // let data ={
                //     userId: 1,
                //     title: "omar" ,
                //     body: "This is fantastic"
                // }

                // async function sendData(type) {
                //     let res = await fetch(`https://jsonplaceholder.typicode.com/${type}`,{
                //         method:"POST",
                //         headers:{"Content-Type":"Application/json"},
                //         body:JSON.stringify(data)
                //     });
                //     let finalRes = await res.json();
                //     console.log(finalRes);
                // }


                // (async function(){
                //     await sendData("posts").then(()=> console.log("OK")).catch(()=> console.log("Error")); 
                // })();



            // window.location.href = "home.html";
                

























