<template>
  <div id="app">



<!--    <LoadingScreen-->
<!--        v-if = "loading"-->
<!--    ></LoadingScreen>-->



<!--      <router-view v-slot="{ Component }">-->
<!--        <transition name="fade" mode="out-in">-->
<!--          <component :is="Component" />-->
<!--        </transition>-->
<!--      </router-view>-->

    <router-view></router-view>


  </div>
</template>


<script>
// import logo from './assets/logo.png'
// import TheHeader from "@/components/layout/TheHeader";
// import LoadingScreen from "@/components/layout/LoadingScreen.vue";
// import {useRoute} from "vue-router";



export default {
  name: 'App',
  components: {
    // LoadingScreen,
    // TheHeader
    // ,

  },
  data() {
    return {}
  },
  computed: {



  },
  created() {

// alert("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//     alert("Device Id and DevicE Os ---> " +  this.$device.client.name + " " + this.$device.client.version)
//     alert("Device Name  ---> " +  this.$device.client.name)
//     alert("Os version  ---> " + this.$device.machine.os_name)
//     alert("---------------------------------------------------------------")


    this.$store.commit('SET_DEVICE_ID',  JSON.stringify(this.$device.client.name + this.$device.client.version))

    this.$store.commit('SET_DEVICE_NAME', JSON.stringify(this.$device.client.name))
    this.$store.commit('SET_DEVICE_OS',  JSON.stringify(this.$device.client.name + this.$device.client.version))
    this.$store.commit('SET_DEVICE_OS_VERSION', JSON.stringify(this.$device.machine.os_name))


  },

}

</script>


<style lang="scss" >
#app {
  font-family: "SF Pro Text";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}





body{
  margin: 0;

  margin: 0;

  font-family: "SF Pro Text";
  font-size: 14px;
  font-weight: 400;


}




</style>
