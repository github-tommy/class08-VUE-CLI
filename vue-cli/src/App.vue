<template>
  <div id="app">

    <app-header></app-header>

    <router-view></router-view>
    <router-link to="/other">other</router-link>
    <router-link to="/next">next</router-link>
    <router-link to="/">home</router-link>

    <app-body></app-body>

        <!-- <img src="./assets/logo.png">
    <ul>
        <li><a href="index.html" target="_blank">Home</a></li>
        <li><a href="x" target="_blank">Gallery</a></li>
        <li><a href="" target="_blank">Blog</a></li>
        <li><a href="http://tommysurjadi.com" target="_blank">About Me</a></li>
    </ul> -->
    
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

    <!-- Calling an array -->
    <div>
    <ul>
      <li style="list-style-typenone;" v-for="location in location">{{ location.name }}</li>
    </ul>
    </div>   

    <input v-model="newLocation">
    <button v-on:click="addLocation">
      +ADD LOCATION
    </button>
    <br>
    <br>
    <!-- V-For for array of images -->
    <div class="gallery">
      <img v-for="img in images" v-bind:src="img"/>  
    </div>
    
    <!-- <div v-for="images in image">
      <img v-bind:src="/src/assets/${image}.jpg">
    </div> -->

  <p>My budget is {{ budget }} (in thousand dollar US)</p>
    <button v-on:click="budget++">Add by 1</button>
    <button v-on:click="budget--">Reduce by 1</button></br>

    <div class="container">
      <form class="mt-5">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control form-control-lg">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      
<app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      title: 'app - Week08 - Vue CLI',
      msg: 'Help me find a home:',
      location: [
        {name: 'Wallingford', startingPrice: 900},
        {name: 'Fremont', startingPrice: 800},
        {name: 'Redmond', startingPrice: 700},
        {name: 'Kirkland', startingPrice: 750},
        {name: 'Medina', startingPrice: 1300}
      ],
      newLocation: '',
      images: [
        '/src/assets/picture1.jpg','/src/assets/picture1.jpg','/src/assets/picture1.jpg',
        '/src/assets/picture1.jpg'
      ],
      msg2: 'Type your name',
      msg3: 'Several popular places in Washington xxx',
      budget: '800'
    } //return
  }, //data
  methods:{
    changeTitle: function(event){
      this.msg2 = event.target.value;
    }
    },
  methods:{
    addLocation: function() {
      return this.location.push({name: this.newLocation})
      this.newLocation= ''
    }
  }
} // default

</script>

<style lang="scss">
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
