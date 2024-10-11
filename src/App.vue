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
          <RouterView class="sizing-vh overflow-y-auto"  />
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
  
  mounted() {
    this.store.data.fetchData()
  }
}

</script>

<style lang="scss" scoped>
@use './style/general.scss';
@use './style/partials/matrix-button';
@use './style/partials/card-component'



</style>
