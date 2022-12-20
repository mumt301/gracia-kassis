class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Montreal";
  }

  //This method will return the data obtained from openweathermap to the user. 
  populateUI(data) {
    

    //Done by populating a container using inner HTML compatible with the bootstrap markup I wanted to use. 

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 600px;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">The current weather is ${data.main.temp}k</h6>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}k. Lows of ${data.main.temp_min}k</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}. Here is your perfect playlist!</p>
                <div id="playlistdiv"> 
                </div>
            </div>
        </div>`
        ;
      }

//The get playlist function is used to fill the playlist div using the data sourced from the openweathermap api. 
getPlaylist(data){
  console.log("Inside getPlaylist");
    if (data.main.temp <= 278) {
      playlistdiv.innerHTML = 'Its winter!';
      playlistdiv.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2UZ2EFB2aeZ6eBdDpCJ2gv?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      //search embed webpage inside div 
      document.body.style.backgroundImage = "url('img/bggif1.gif')";

} else if (data.main.temp > 278 && data.main.temp <= 283 ){
      playlistdiv.innerHTML = 'Its fall!';
      playlistdiv.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4wkJuarZanjEMCfSAtn1d2?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      //search embed webpage inside div 
      document.body.style.backgroundImage = "url('img/bggif2.gif')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
} else if (data.main.temp > 283 && data.main.temp <= 293 ){
      playlistdiv.innerHTML = 'Its spring!';
      playlistdiv.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4gG8VL4dHmhfMpyhiK5ZFg?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      //search embed webpage inside div 
      document.body.style.backgroundImage = "url('img/bggif3.gif')";
      document.body.style.backgroundSize = "cover";
} else if (data.main.temp > 293 ){
      playlistdiv.innerHTML = 'Its summer!';
      playlistdiv.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5RNArhFTNskvG181Vm93HR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      //search embed webpage inside div 
      document.body.style.backgroundImage = "url('img/bggif4.gif')";
      document.body.style.backgroundSize = "cover";
};
}

  //Still need to turn the temperatures into round celsius numbers somehow, (Have to do it from the query)

  clearUI() {
    uiContainer.innerHTML = "";
  }

  //This was done to be able to use pieces of the data afterwards.
  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  // adding a default return to prevent errors.
  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }
    return this.city;
  }

  //cleared after app run 
  clearLS() {
    localStorage.clear();
  }
}
