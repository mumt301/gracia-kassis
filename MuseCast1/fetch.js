class Fetch {
  async getCurrent(input) {
    const myKey = "63ba7d5b2b3c04225690ee1460ebb983";

    //make request to url using the api fetch call

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
