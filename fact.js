let url = "https://catfact.ninja/fact";

async function getFact(){
    let res = await fetch(url);
    let data = await res.json();
    console.log("Fact inside getFact is \n ",data.fact);
    let h3 = document.querySelector("h3");
    h3.innerHTML = data.fact;
    return data.fact;
}

