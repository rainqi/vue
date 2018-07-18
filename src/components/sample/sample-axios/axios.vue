<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="getJson()">Essential Links</h2>
    <ul>
      <li v-for="item, index in data">{{index}}:{{item}}</li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ax',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: '',
    };
  },
  methods: {
    getJson() {
      const $this = this;
      const instance = axios.create();
      instance.get('https://estore.mercedes-benz.com.cn/api/ecommerce/customers/dealers?city=Beijing&sku=6440605f-18a8-4381-8b79-25a3aae77866')
        .then(function(response){
          $this.data = response.data;
          console.log(response.data);
        })
        .catch(function(err){
          console.log(err);
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
