//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners so that the button and search elements can function//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call the UI method/s/
    ui.populateUI(data);
    //call saveToLS so that the data can be used (hopefully)
    ui.saveToLS(data);
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});
