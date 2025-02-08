let url = "https://catfact.ninja/fact";

// async function getFact(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("Fact inside getFact is \n ",data.fact);
//     let h3 = document.querySelector("h3");
//     h3.innerHTML = data.fact;
//     return data.fact;
// }

async function getFact(){
    let res = await axios.get(url);
    console.log("Fact inside getFact is \n ",res.data.fact);
    let h3 = document.querySelector("h3");
    h3.innerHTML = res.data.fact;
    return res.data.fact;
}
