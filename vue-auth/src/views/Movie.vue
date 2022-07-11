<template>
  <div class="header-large-border-first" v-bind:style="{ backgroundImage: 'url(' + data.img + ')'}">
    <div class="header-large-main" style="width: 100%; ; justify-content: center; display: flex">
      <section id="original_header" style="width: 80%">
        <div class="poster-wrapper">
          <div class="poster">
            <div class="image_content">
              <img v-bind:src="data.imgTitle" alt="" />
            </div>
          </div>
        </div>
        <div class="header-poster-wrap">
          <section class="header-poster">
            <div class="title-ott-true">
              <h2 class="h2-title">
                <a v-bind:href="data.movie">{{ data.title }}</a>
                <span class="tag-release_date">({{ data.year }})</span>
              </h2>
              <div class="facts">
                <span class="certification">{{ data.limit }}</span>
                <span class="genres">{{ data.genre }}</span>
                <span class="runtime">{{ data.duration }}</span>
              </div>
            </div>
            <div class="header-info">
              <h3 dir="auto">Overview</h3>
              <div class="overview" dir="auto">
                <p>{{ data.desc }}</p>
              </div>
            </div>
              <div style="">
                <iframe width="400" height="220" v-bind:src="`https://www.youtube.com/embed/`+data.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <iframe class="movie"
                v-bind:src="` https://www.2embed.org/embed/`+data.tmdb"
            ></iframe>
          </section>
        </div>
      </section>
    </div>
    <!-- <iframe width="560" height="315" v-bind:src="`https://www.youtube.com/embed/`+data.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
  </div>
  
<!-- <a :href="` https://www.2embed.ru/embed/tmdb/movie?id=`+data.tmdb">Play</a> -->

<!-- https://www.2embed.ru/embed/tmdb/movie?id= -->
  <!-- {{data.duration}} -->
  <!-- {{data.title}}
{{data.desc}}
{{data.img}}
{{data.imgTitle}}
{{data.trailer}}
{{data.tmdb}}
{{data.year}}
{{data.limit}}
{{data.genre}}
{{data.isSeries}} -->
</template>

<script>
import "@/assets/css/movie.css";
export default {
  name: "child",
  props: {
    id: String
  },
  data() {
    console.log("id film",this.id)
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        `http://localhost:8000/movie/get/${this.id}`
      );
      // `"http://localhost:8000/movie/get/{{this.params}}"`
      const data = await res.json();
      this.data = data;
      // console.log("props:", this.props);
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
