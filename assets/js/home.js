// let users =


//     [
//         {
//             name: "Azer",
//             surname: "Humbetov",
//             age: 21
//         },
//         {
//             name: "Zamin",
//             surname: "Ibrahimov",
//             age: 21
//         },
//         {
//             name: "Vahid",
//             surname: "Erebeliyev",
//             age: 19
//         },
//         {
//             name: "Sabir",
//             surname: "Zamanov",
//             age: 23
//         },
//     ];

// let table = document.querySelector(".table");


// function getUsers() {
//     setTimeout(() => {

//         let elem = "";

//         users.forEach(user => {
//             elem += `
//             <table class="table">
//             <tbody>
//               <tr>
//                 <td><b>${user.name}</b></td>
//                 <td>${user.surname}</td>
//                 <td>${user.age}</td>
//               </tr>
//             </tbody>
//           </table>`
//         })

//         table.innerHTML = elem;


//     }, 2000)
// }

// function createUser(user,callback){
//     setTimeout(() => {

//         users.push(user);

//         callback();



//     }, 3000);
// }

// createUser({name:"Nail",surname:"Ibrahimov",age:69},getUsers)












// let users =
//     [
//         {
//             name: "Azer",
//             surname: "Humbetov",
//             age: 21
//         },
//         {
//             name: "Zamin",
//             surname: "Ibrahimov",
//             age: 20
//         },
//         {
//             name: "Vahid",
//             surname: "Erebeliyev",
//             age: 19
//         },
//         {
//             name: "Sabir",
//             surname: "Zamanov",
//             age: 23
//         },
//     ];

// let table = document.querySelector(".table");


// function getUsers() {
//     setTimeout(() => {

//         let elem = "";

//         users.forEach(user => {
//             elem += `
//             <table class="table">
//             <tbody>
//               <tr>
//                 <td><b>${user.name}</b></td>
//                 <td>${user.surname}</td>
//                 <td>${user.age}</td>
//               </tr>
//             </tbody>
//           </table>`
//         })

//         table.innerHTML = elem;


//     }, 2000)
// }

// function createUser(user) {

//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {

//             users.push(user);

//             let err = false;

//             if(!err){
//                 resolved(user);
//             }else{
//                 rejected("Salam");
//             }

//         }, 3000);
//     })


// }

// createUser({ name: "Ehmed", surname: "Ehmedzade", age: 22 }).then(response=>{
//     getUsers();

// }).catch(err=>{
//     console.log(err);
// });




let table = document.querySelector(".table");
let btn = document.querySelector("#button a");

btn.addEventListener("click",function(){
    getPosts();
})
async function getPosts() {
    
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");

    let result = await posts.json();

    let elem = "";

            result.forEach(post => {
                elem += `
                <table class="table">
                <tbody>
                  <tr>
                    <td><b>${post.userId}</b></td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                  </tr>
                </tbody>
              </table>`
            })
    
            table.innerHTML = elem;
    
}


