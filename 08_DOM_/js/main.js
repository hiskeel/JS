// let container = document.getElementById("container")
// console.log(container)
// container.style.backgroundColor = "lightblue"
// container.style.padding = "20px"
// let article = document.getElementsByClassName("article")
// for(let i = 0; i< article.length; i++){
//     article[i].style.backgroundColor = "aqua";
//     article[i].style.padding = "10px";
//     article[i].style.margin = "10px";
//     article[i].style.borderBottom = "2px solid darkblue"
//     article[i].style.boxShadow = "2px 0px 5px black"
    
// };

// let h2 = document.getElementsByTagName("h2");

// let p = document.querySelectorAll(".article p")
// for(let i = 0; i < p.length; i++){
//     p[i].className = "hide";
//     //p[i].classList.add("show")
//     //p[i].classList.remove("hide")
//     console.log(p[i].classList.contains("hide"))
// }
// // h2[0].onclick = () =>{
// //     p[0].classList.toggle('hide')
// // }


// for(let i = 0; i < h2.length;i++){
//     h2[i].addEventListener('click', function() {
//         this.style.color="green"
//         p[i].classList.toggle('hide')
//     })
// }

//task 1
// let number = document.querySelector(".random h3")
// let btn = document.querySelector(".random button")
// btn.addEventListener('click', () => {
//     let rand  = Math.random() * 100;
//     rand = rand.toFixed(0);
//     number.textContent = rand
// })

//task 2

let mouse = document.querySelector("#container")
let x = document.querySelector("#container .x")
let y = document.querySelector("#container .y")
mouse.addEventListener('mousemove', (e) =>{
    x.textContent = e.clientX;
    y.textContent = e.clientY;
})
mouse.addEventListener("contextmenu", (e) =>{
    alert("Right click")
})
mouse.addEventListener("click", (e) =>{
    alert("left click")
})

