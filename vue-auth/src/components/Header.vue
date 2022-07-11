<template>
  <div class="main-header">
      <section class="sub-header">
        <div>
            <router-link to="/" class="navbar-brand" >
            <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_F6EtR7.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay>
            </lottie-player>
            </router-link>
        </div>
        <div class="router-main" >
            <!-- <div class="router">
                <router-link to="/movie" class="link "  href="#">Movie</router-link>
            </div> -->
            <div class="router">
                <router-link to="/table" class="link "  href="#">Movies</router-link>
            </div>
            <div class="router">
                <router-link to="/login" class="nav-link "  href="#">Login</router-link>
            </div>
            <div class="router">
                <router-link to="/register" class="nav-link "  href="#">Register</router-link>
            </div>
            <div class="router">
                <a href="#" class="nav-link" @click="logout">Logout</a>   
            </div>
        </div>
      </section>
  </div>
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
      await store.dispatch('setAuth', false); //Add this line to redirect to login route
      await router.push('/login'); // It is important to put this line too, because if you don't put it, the NAV component will not recognize that it is no longer authenticated.
    }

      return{
        auth,
        logout
      }
    }
}
</script>
<style>
    .main-header{
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #3b316b;
        max-height: 80px;
        min-height: 3.25rem;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 30;
    }
    .sub-header {
        width: 100%;
        display: flex;
    justify-content: start;
    

    }
    .router-main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .router {
        float: left;
    }
    .link {
        display: block;
        padding: 0.5rem 1rem;
        /* color: white; */
        text-decoration: none;
    }

</style>