<template lang="html">

<div>
 
    <!-- <h1>{{ msg }}</h1>
    <h2>{{ msg2}}</h2>
    <input type="text" v-on:input="changeTitle"></br></br>



    <button v-on:click="show = !show">Are you interested?</button>
    <p v-if="show">Yes, I am!</p>
    <p v-else>No, thanks.</p>
    <hr> -->

</div>

    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      title: 'Week08 - Vue CLI',
      msg: 'Help me find a home:',
      msg2: 'Type your name',
      msg3: 'Several popular places in Washington xxx',
      budget: '800'
    } //return
  }, //data
  methods:{
    changeTitle: function(event){
      this.msg2 = event.target.value;
    }
  }
} // default

</script>
</script>

<style lang="css" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.gallery img{
  width: 35%;
}
</style>
