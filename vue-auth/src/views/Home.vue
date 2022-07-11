<template>
  <div class="jumbotron">
    <h1 class="display-4">{{message}}</h1>
  </div>
 
</template>

<script lang="ts">
import { computed } from 'vue';
import {onMounted, ref} from 'vue';
import {useStore} from "vuex";
export default {
  name: "Home",
  setup() {
    const auth = computed(()=> store.state.authenticated)
    const store = useStore();

    const message = ref('You are not logged in!');
    store.dispatch('setAuth', false);
    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include'
        });
        const content = await response.json();
        message.value = `Welcome ${content.name}`;
        await store.dispatch('setAuth', true);
      } catch (e) {
        await store.dispatch('setAuth', false);
      }
    });
    return {
      message
    }
  }
}
</script>

<style scoped>
    .jumbotron{
      
      left: 0;
      right: 0;
      text-align: center;
      /* background-color: black; */
    }

</style>