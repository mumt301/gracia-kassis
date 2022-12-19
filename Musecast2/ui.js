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
                <h6 class="card-subtitle mb-2 text-muted">The current weather is ${data.main.temp- 273}C</h6>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max -273}C. Lows of ${data.main.temp_min-273}C</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}. Here is your perfect playlist!</p>
                
              
                <iframe id="winterframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0NCP9kXhvm6RGYjAxQGFeP?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                
            </div>
        </div>
        
        
        `;
  }
  //For now this contains a temporary spotify embed until I resolve the issue on translating the openweathermap data into a function which splits the weather into if/else statements. Status: Not figured out yet. 
  //Still need to turn the temperatures into round numbers somehow, (Have to do it from the query)

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
