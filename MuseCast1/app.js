//This document defines the main functions of the website //

const ft = new Fetch();
const ui = new UI();
const spotify = new Spotify();


const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);

    //attempt to get playlists 
    if (data.main.temp <= 278) {
     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0NCP9kXhvm6RGYjAxQGFeP?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
    }
    else if (data.main.temp === 279-286) {
      spotify.getFall()
    }
    else if (data.main.temp === 287-292){
    spotify.getSpring()
    }
  else {
    spotify.getSummer()
    };
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});

//window.addEventListener("DOMContentLoaded", () => {
  //const dataSaved = ui.getFromLS();
  //ui.changebackground (dataSaved);
//});


