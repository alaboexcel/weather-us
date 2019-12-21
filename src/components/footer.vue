<template>
  <div id="footer" >
    <div class="row">
      <div class="col-sm-12 col-md-5 col-lg-5" id="text" data-aos="zoom-in-down" data-aos-duration="2000" >
        <router-link to="/"><h5>Home</h5></router-link>
        <router-link to="/weather"><h5>Weather</h5></router-link>
        <router-link to="/signup"><h5>Signup</h5></router-link>
        <h5></h5>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5" data-aos="zoom-in" data-aos-duration="2000" >
            <input type="text" placeholder="Name"><br><br>
            <input type="text" placeholder="Email"><br><br>
            <textarea name="" id="textarea" ></textarea><br>
            <button>SEND</button>
      </div>
    </div>
    <div>
      <div>
      <i class="fab  fa-facebook"></i>
      <i class="fab  fa-whatsapp"></i>
      <i class="fab  fa-instagram"></i>
      <i class="fab  fa-google"></i>
      <i class="fab  fa-envelop"></i>
      </div>
         <hr>
      <p>Copyright WeatherUs 2019</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
#footer {
  padding: 10%;
  margin: 0;
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #8f94fb,
    #898ee9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #8f94fb,
    #4e54c8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
input{
    width: 100%;
    height: 40px;
}
#textarea{
    width: 100%;
    height: 50%;
}
button{
    background: white;
    color: darkblue;
    width: 70px;
    height: 30px;
    text-align: center;
    border: none;
}
h5{
    color: white;
    padding-top: 30px;
    text-align: center;
}
#text{
    margin-top: 2%;
}
a:hover{
  text-decoration: none;
}
hr{
  background: white;
  width: 100%;
}
p{
  text-align: center;
  color: white;
}
i{
  color: white;
  font-size: 300%;
  padding-left: 15%;
  margin-top: 10%;
}
</style>
