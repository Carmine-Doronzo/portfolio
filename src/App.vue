<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store'
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
  <LoaderComponent v-if="store.loading.state" />
  <div class="video-background  p-0  ">
    <video autoplay muted loop id="myVideo">
      <source src="/code-cascade.mp4" type="video/mp4">
    </video>
    <div class="content">

      <HeaderComponent />
      <div class="container">
        <div class="row">
          <RouterView class="overflow-y-auto" style="color: white; height: calc(100vh - 199.66px);" />
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>

</template>

<style scoped>
.video-background {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  /* Altezza della finestra */
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

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: black;
}

::-webkit-scrollbar-thumb {
  background: lime;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00ff00;
}

.matrix-button {
  background-color: black;
  color: lime;
  border: 2px solid lime;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.matrix-button:hover {
  background-color: lime;
  color: black;
}
</style>
