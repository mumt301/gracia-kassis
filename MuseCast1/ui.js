class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Montreal";
  }

  // adding a function to display the information obtained from the openweathermaps api.
  populateUI(data) {
    //it was recommended to do this by adding the elements to the inner HTML, source: (Citation)

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"> The current weather is ${data.main.temp}.</h6>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text ">Look out your window and see ${data.weather[0].description}!</p>
                <button class="btn btn-secondary" id="submit">Get my playlist!</button>
                
            </div>
        </div>
        
        
        `;
  }


  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  //changeBackground(data) {
    //if (data.main.temp <= 283){
      //document.getElementsByClassName("body").classList.add('.winter');
    //}
    //else {
      //document.getElementsByClassName("weather-fall").classList.add('.show');
    //}
    

  // default city return added to prevent errors that kept coming up. 
  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }


  clearLS() {
    localStorage.clear();
  }
}
