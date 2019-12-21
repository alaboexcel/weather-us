<template>
  <div>
    <nav class="navbar navbar-expand-lg ">
        <img id="logo" src="../assets/logos.png">
      <button
        class="navbar-toggler bg-primary"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/weather">Weather</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="">Blog</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link " to="/signup" >Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav{
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
}
li{
  padding-left: 50px;
  padding-right:50px;
}
#heading{
  margin-left: 30%;
}
#logo{
  width: 3%;
  margin-left: 10%;
  margin-right: 15%;
}
</style>
