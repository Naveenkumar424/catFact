// async function getFact() {
//     console.log("Before fetch");
//     return await fetch("https://catfact.ninja/fact");
// }

// console.log("Before get");
// async function displayFact(){
//     await getFact().then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         //console.log(data.fact);
//         return data.fact;
//     })
// }
// console.log("After get");

// console.log(displayFact());
let url = "https://catfact.ninja/fact";

async function getFact(){
    let res = await fetch(url);
    let data = await res.json();
    console.log("Fact inside getFact is \n ",data.fact);
    let h3 = document.querySelector("h3");
    h3.innerHTML = data.fact;
    return data.fact;
}

