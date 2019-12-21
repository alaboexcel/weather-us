<template>
  <div>
    <div id="clearWeather" class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
      <img id="logo" src="../assets/logos.png" />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
      <router-link to="/weather">
        <button>CHECK WEATHER</button>
      </router-link>
      </div>
    </div>
    <div class="row" id="first">
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner"
        data-aos="fade-down-right"
        data-aos-duration="2000"
      >
        <img src="../assets/image/undraw_weather1.png" />
      </div>
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner2"
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <h5>At WeatherUs we provide you information about the current weather condition of your environment</h5>
      </div>
    </div>
    <div class="row" id="first">
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner2"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <h5>WeatherUs lets you share weather reports with your friends, and provides good weather details with a screen refresh option to keep the silly comments coming.</h5>
      </div>
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <img src="../assets/image/undraw_weather2.png" />
      </div>
    </div>
    <div class="row" id="first">
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img src="../assets/image/undraw_weather3.png" />
      </div>
      <div
        class="col-sm-12 col-md-10 col-lg-5"
        id="inner2"
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <h5>We give you current weather conditions With less features than the other weather apps here, WeatherUs is a great option for those who like simplicity.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#clearWeather {
  background: url(~@/assets/weather.jpg) no-repeat;
  background-size: cover;
  height: 100vh;
}
img {
  width: 100%;
}
#first {
  margin: 10%;
}
#inner {
  padding: 10px;
}
#inner2 {
  margin-left: 10%;
  padding-top: 10%;
  box-shadow: 0 2px 4px 0 #4e54c8;
  color: #4e54c8;
}
button {
  background: #4e54c8;
  border: none;
  width: 20%;
  height: 50px;
  color: #fff;
  box-shadow: 1px 1px 1px 1px lightgray;
  margin-left: 40%;
  border-radius: 10px;
}
h5 {
  text-align: center;
}
#logo {
  width: 15%;
  margin-left: 42%;
  margin-top: 10%;
}
</style>
