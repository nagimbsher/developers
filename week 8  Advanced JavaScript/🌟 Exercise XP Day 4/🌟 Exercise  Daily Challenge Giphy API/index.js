// const form = document.querySelector("form");
// const input = document.getElementById ("search");
// const container = document.getElementById("container");
// form.addEventListener("submit", handleSubmit);


function handleSubmit (e){
    e.preventDefault();
    const searchTerm = input.value;
    input.value ="";
    getGifs(searchTerm);
}

function getGifs(word){
    const url =` "https://api.giphy.com/v1/gifs/search?q=${word}&rating=g& api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`;
   

   const xhr = new XMLHttpRequestEventTarget();
   xhr.addEventListener ("load",logRequest);
   xhr.open("GET",url);
   xhr.send();
}

function logRequest (e){
    const response = JSON.parse(e.target.response);
    const firstResult = response.data[0];
    console.log("firsResult:", firstResult);
    const imageUrl = firstResult.images.fiexed_width.webp;
    const altText = firstResult.title;
    createImage(imageUrl,altText);
}

function createImage(url,alt){
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    container.prepend(img);
}