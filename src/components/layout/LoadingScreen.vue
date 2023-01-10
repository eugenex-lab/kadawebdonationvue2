<template>
  <div class="loadingScreen">

    <img :src="video" alt="loading" muted="muted" autoplay="autoplay" loop="loop" class="loadingScreen__video"/>


  </div>
</template>

<script>
import hallo from "@/assets/loadingSCreen4.gif";

export default {
  name: "LoadingScreen",
  data() {
    return {
      video: hallo
    };
  },
}
</script>

<style scoped>

.loadingScreen {
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #000;


  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

}


.loadingGif {
  width: 300px;
  height: 300px;
}

img.loadingScreen__video {
  width: 300px;
  height: 300px;
}

</style>