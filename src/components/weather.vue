<template>
  <div id="container">
    <div id="weather">
      <div id="clearWeather" class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <img id="logo" src="../assets/logos.png" />
        <br />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <input type="text" v-model.lazy="city" placeholder="ENTER YOUR CITY" />
        <br />
        <br />
        <button type="submit" v-on:click="getData">Submit</button>
        </div>
      </div>
      <div></div>
    </div>
    <div v-if="city == ' ' "> </div>
    <div v-else id="contents" class="col-sm-12 col-md-10 col-lg-6">
      <img id="icon" :src="image" />
      <h3>City: {{ cityis}}</h3>
      <h6>Weather: {{ weather}}</h6>
      <h6>Description: {{ description}}</h6>
      <h6>Max Temp: {{maxTemp}}</h6>
      <h6>Min Temp: {{minTemp}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: ' ',
      description: " ",
      weather: " ",
      image: " ",
      cityis: " ",
      maxTemp: " ",
      minTemp: " "
    };
  },
  methods: {
    getData: function() {
      this.axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.city +
            "&appid=168b22b6497b371b59f2cfb88691ed86"
        )
        .then(response => {
          this.description = response.data.weather[0].description;
          this.weather = response.data.weather[0].main;
          this.image =
            "http://openweathermap.org/img/wn/" +
            response.data.weather[0].icon +
            ".png";
          this.cityis = response.data.name;
          this.minTemp = response.data.main.temp_min;
          this.maxTemp = response.data.main.temp_max;
        });
    }
  }
};
</script>

<style scoped>
#clearWeather {
  background: url(~@/assets/weather.jpg) no-repeat;
  background-size: cover;
  height: 100vh;
}
input {
  width: 70%;
  height: 50px;
  box-shadow: 1px 1px 1px 1px lightgray;
  margin-left: 15%;
  border-radius: 10px;
  border: none;
}
button {
  background: #4e54c8;
  border: none;
  width: 10%;
  height: 30px;
  color: #fff;
  box-shadow: 1px 1px 1px 1px lightgray;
  margin-left: 45%;
  border-radius: 10px;
}
#logo {
  
  margin-top: 10%;
  margin-left: 42%;
}
#contents {
  margin-left: 43%;
  width: 30%;
  color: #4e54c8;
  padding: 20px;
}
#icon {
  width: 40%;
}
</style>