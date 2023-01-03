<template>
  <div id="app">


    <LoadingScreen
        v-if = "loading"
    ></LoadingScreen>

    <the-header></the-header>

    <!--  <router-view v-slot="{ Component }">-->
    <!--    <transition name="fade" mode="out-in">-->
    <!--      <component :is="Component" />-->
    <!--    </transition>-->
    <!--  </router-view>-->

    <router-view></router-view>

    <the-footer></the-footer>
  </div>
</template>


<script>
// import logo from './assets/logo.png'
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
// import LoadingScreen from "@/components/layout/LoadingScreen.vue";
// import {useRoute} from "vue-router";


export default {
  name: 'App',
  components: {
    // LoadingScreen,
    TheHeader,TheFooter
  },
  data() {
    return {

    }
  },
  computed: {
    loading() {
      return this.$store.getters.loadingStatus;
    }
  },
  mounted() {
    // console.log("mounted");
    //
    // const route = useRoute()
    // //  generate id from url  and set it to id
    // const id = route.params.id
    // console.log("c% &&$$$$ ZZZZZZZZZZ id is " + id, "color: pink; font-size: 200px;");
    //
    //
    // this.$store.dispatch("getCauseXdata" , id );
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body{
  margin: 0;
}

</style>
