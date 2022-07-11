<template>
  <div class="body">
    <header><Nav/></header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
    }
}
</script>

<style>
  /* *{
    min-height: 0;
    min-width: 0;
  }
  .body {
    height: 100vh;
    overflow: auto;
    background-color: #091c2d;
  } */

</style>  