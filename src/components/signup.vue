<template>
<div>
    <button id="button1" v-on:click="changebar">
       <span v-if="sign == false">LOGIN</span> 
       <span v-else>SIGN UP</span> 
        </button>        
    <div id="signup" v-if="sign == false">
       <h4> SIGN UP</h4>
        <br><br><input type="text" placeholder="Username"><br><br>
        <input type="text" placeholder="Password"><br><br>
        <input type="text" placeholder="Email"><br><br>
        <input type="text" placeholder="Phone Number"><br><br>
        <button>SUBMIT</button>
    </div>
    <div id="signup" v-else>
       <h4>LOGIN</h4>
        <br><br><input type="text" placeholder="Username"><br><br>
        <input type="text" placeholder="Password"><br><br>
        <button>SUBMIT</button>
    </div>
</div>
</template>

<script>
export default{
    data(){
    return{
        sign: ''
    }
    },
    methods:{
        changebar: function(){
                this.sign = true;
        }
    }
}
</script>

<style scoped>
input{
    width: 50%;
    height: 40px;
}
#signup{
    padding: 5%;
    padding-left: 35%;
    margin: auto;
    display: block;
}
button{
    width: 70px;
    color: white;
    border: none;
    background: #4e54c8;
    
}
#button1{
    width: 80px;
    height:50px;
    text-align: center;
    margin-left: 45%;
    margin-top: 20px;
}
h4{
    color: #4e54c8;
}
</style>