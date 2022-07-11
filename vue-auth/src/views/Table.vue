<template>

  <div class="main-list">
    
    <div  class="list-movies" >
      <!-- <div> {{data[0]}}</div> -->
      <ul>
        <li v-for="index in data" :key="index">
          <div class="image">
              <img class="image__img" :src="index.imgTitle" alt="Bricks">
              <div class="image__overlay image__overlay--primary">
                  <p class="image__description">
                      {{index.desc}}
                  </p>
              </div>
          </div>
              <router-link style="text-decoration: none"
                :to="{ path: '/movie/'+ index._id, params: { id: index._id } }">{{index.title }}
              </router-link>
          <!-- <router-link :to="{ path: '/movie/' + index._id }"> -->
          <!-- <div class="title"><p>{{index.title }}</p></div> -->
          <!-- </router-link> -->
        </li>
      </ul>
  </div>
  </div>

</template>
<script>
/* eslint-disable vue/no-unused-components */
import "@/assets/css/table.css"
import Movie from "./Movie.vue"
export default {
  name: "App",
  components: {
    Movie
  },
  data() {
    return {
      data: []
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const res = await fetch('http://localhost:8000/movie/getAll');
      const data = await res.json();
      this.data = data;
      console.log("data:", data)
    }
  }
};
</script>

<style scoped>
  *{
    color: white;
    padding: 0;
  }
</style>