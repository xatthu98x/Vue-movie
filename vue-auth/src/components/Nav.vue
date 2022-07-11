<template>
  <nav class="navbar navbar-expand-md navbar-dark  ">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>

        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/table" class="nav-link">Movies</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed } from 'vue';
import {useStore} from "vuex";
import {useRouter} from 'vue-router'

export default {
    name: "Nav",
    setup() {
      const store = useStore();

      const router = useRouter();

      const auth = computed(()=> store.state.authenticated)

      const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      await store.dispatch('setAuth', false); //redirect to login route
      await router.push('/login'); // if don't put it, the NAV component will not recognize that it is no longer authenticated.
    }

      return{
        auth,
        logout
      }
    }
}
</script>

<style>
.navbar {
  height: 80px;
  background-color: #091c2d;
}
</style>