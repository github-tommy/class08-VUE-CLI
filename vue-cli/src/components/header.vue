<template lang="html">

<div>
    <ul>
        <li><a href="index.html" target="_blank">Home</a></li>
        <li><a href="x" target="_blank">Gallery</a></li>
        <li><a href="" target="_blank">Blog</a></li>
        <li><a href="http://tommysurjadi.com" target="_blank">About Me</a></li>
    </ul>
    
    <!-- Insert a title and a message -->
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>

    <!-- Ask user to input their name -->
    <h2>{{ msg2}}</h2>
    <input type="text" v-on:input="changeTitle"></br></br>
    <!-- Ask the user if they are interested onclick to show/hide -->
    <button v-on:click="show = !show">Are you interested?</button>
    <p v-if="show">Yes, I am!</p>
    <p v-else>No, thanks.</p>
    <hr>

    </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      title: 'app-header',
      msg: 'Help me find a home:',
      msg1: 'Enter your email to subscribe to our mailing list.'

    } //return
  }, //data
  methods:{
    changeTitle: function(event){
      this.msg2 = event.target.value;
    }
  }
} // default

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
