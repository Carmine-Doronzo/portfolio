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
          <RouterView class="overflow-y-auto" style="color: white; height: calc(100vh - 215px);" />
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content card">
        
          
          <button type="button" class="btn-close card-text" data-bs-dismiss="modal" aria-label="Close" @click="store.data.cvEn = false ; store.data.cv = false ; store.data.isImage = false">&Cross;</button>
        
        <div class="modal-body">
          <img v-if="store.data.info && store.data.isImage === true" class="d-block w-100"
            :src="store.data.info.image[store.data.imgIndex]" alt="">

          <embed class="w-100" v-else-if="store.data.cvEn === true" src="/cv-carmine-doronzo(EN).pdf"
            type="application/pdf" height="700">


          <embed class="w-100" v-else-if="store.data.cv === true" src="/cv-carmine-doronzo.pdf"
            type="application/pdf" height="700">
        </div>
        
      </div>
    </div>
  </div>

</template>

<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px #0f0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #0f0;
}

.card-title,
.card-text,
.btn {
  color: #0f0;
}

.card-body {
  font-family: 'Matrix', Courier, monospace;
}

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
