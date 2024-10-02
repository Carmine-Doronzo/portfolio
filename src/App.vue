<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import {store} from './store'
import LoaderComponent from './components/LoaderComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  },
  data() {
    return {
      store

    }
  },
  methods: {
    
  },
  mounted() {
    
    this.store.data.fetchData()
  
  }
}

</script>

<template>
  <LoaderComponent v-if="store.loading.state"/>
  <div class="video-background overflow-y-scroll">
  <video autoplay muted loop id="myVideo">
    <source src="/code-cascade.mp4" type="video/mp4">
    Il tuo browser non supporta i video HTML5.
  </video>
  <div class="content">

    <HeaderComponent/>
  <!-- <div class="container"> -->
    <RouterView class=""/>
  <!-- </div> -->
  <FooterComponent/>
  </div>
</div>
  
</template>

<style scoped>
.video-background {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Altezza della finestra */
}

#myVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}
</style>
