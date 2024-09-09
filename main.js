// function requestposts() {
//     let myreq = new XMLHttpRequest();
//     myreq.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     myreq.responseType = "json";
//     myreq.send();
//     myreq.onload = function() {

//         // console.log(this.readyState)
//         if (this.status >= 200 && this.status < 300) {
//             console.log(this.response);
//             let posts = this.response;
//             for (let post of posts) {
//                 document.querySelector("h2").innerHTML += `${post.title}<br><hr><br>`
//             };

//         } else {
//             alert("hh")
//         }
//     }
//     console.log("100")
// };
// // requestposts();

// function create() {
//     let myreq = new XMLHttpRequest();
//     myreq.open("POST", "https://jsonplaceholder.typicode.com/posts");
//     myreq.responseType = "json";
//     // myreq.setRequestHeader("Accept", "application/json");
//     myreq.setRequestHeader("Content-type", "application/json");

//     let ob = JSON.stringify({
//         "title": "foo",
//         "body": "bar",
//         "userId": 1
//     });

//     myreq.send(ob);
//     myreq.onload = function() {
//         if (myreq.status >= 200 && myreq.status < 300) {
//             let posts = this.response;
//             console.log(posts);
//             console.log(this.status);
//         } else {
//             alert("Error occurred while sending the request.");
//         }
//     };
// }
// // create();

// function update() {
//     let myreq = new XMLHttpRequest();
//     myreq.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
//     myreq.responseType = "json";
//     // myreq.setRequestHeader("Accept", "application/json");
//     myreq.setRequestHeader("Content-type", "application/json");

//     let ob = JSON.stringify({
//         "title": "foo",
//         "body": "bar",
//         "userId": 1
//     });

//     myreq.send(ob);
//     myreq.onload = function() {
//         if (myreq.status >= 200 && myreq.status < 300) {
//             let posts = this.response;
//             console.log(posts);
//             console.log(this.status);
//         } else {
//             alert("Error occurred while sending the request.");
//         }
//     };
// }
// // update()

// function deletEe() {
//     let myreq = new XMLHttpRequest();
//     myreq.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
//     myreq.responseType = "json";
//     // myreq.setRequestHeader("Accept", "application/json");
//     myreq.setRequestHeader("Content-type", "application/json");



//     myreq.send();
//     myreq.onload = function() {
//         if (myreq.status >= 200 && myreq.status < 300) {
//             let posts = this.response;
//             console.log(posts);
//             console.log(this.status);
//             alert("DELETED");

//         } else {
//             alert("Error occurred while sending the request.");
//         }
//     };
// }
// // deletEe();
// function requestpostsFilter(i) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${i}`).then(res => res.json())
//         .then(res => {
//             document.querySelector(".main").innerHTML = "";
//             for (let i = 0; i < 10; i++) {

//                 let p = document.createElement("p");
//                 p.textContent = `${res[i].body}`;
//                 document.querySelector(".main").appendChild(p)


//             }
//         })
// };


// for (let i = 0; i < 10; i++) {
//     let but = document.createElement("button");
//     but.textContent = `${ i + 1 }`;
//     but.id = `${i+1}`
//     document.querySelector(".side").appendChild(but);
// }

// let q = document.querySelectorAll("button");
// q.forEach(a => {
//         a.addEventListener("click", function() {
//             // console.log(a.id);
//             console.log(a.id);
//         });
//     })
// let h = document.querySelectorAll("h1");
// // console.lo
// let count = 0;
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         h[count++].style.visibility = "visible";
//         resolve()
//     }, 1000);
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h[count++].style.visibility = "visible";
//             resolve()
//         }, 1000);
//     })
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h[count++].style.visibility = "visible";
//             resolve()
//         }, 1000);
//     })
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h[count++].style.visibility = "visible";
//             resolve()
//         }, 1000);
//     })
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h[count++].style.visibility = "visible";
//             resolve()
//         }, 1000);
//     })
// })
// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// const axios = require('axios');

// Make a request for a user with a given ID
let p = document.querySelectorAll("p");
let countries = document.querySelector("#countries");
let headpray = document.querySelector(".headpray");
let date = document.querySelector(".date");
axios.get(`https://api.aladhan.com/v1/methods`)
    .then(function(response) {
        let b = response.data.data
        console.log(response.data.data);
        for (country in b) {
            // console.log(country);
            let op = document.createElement("option");
            op.textContent = country;
            countries.appendChild(op);
            if (country === "EGYPT") {
                op.selected = true;
            }
        }

    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })

re("EGYPT");
countries.onchange = function() {
    console.log(countries.value);
    re(countries.value);
    headpray.textContent = countries.value;
}

function re(i) {

    axios.get(`https://api.aladhan.com/v1/timingsByAddress/08-09-2024?address=${i}&method=4`)
        .then(function(response) {
            // handle success
            let b = response.data.data.timings;
            let a = response.data.data.date;
            date.textContent = a.hijri.date;
            // console.log(b);
            // console.log(b);
            p[0].textContent = b.Fajr;
            p[1].textContent = b.Dhuhr;
            p[2].textContent = b.Asr;
            p[3].textContent = b.Maghrib;
            p[4].textContent = b.Isha;

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
}
// re("EGYPT");


// let countries = document.querySelector("#countries");