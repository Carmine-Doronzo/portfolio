<script>
import HeaderComponent from './components/HeaderComponent.vue'
import {store} from './store'
export default {
  components: {
    HeaderComponent,
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
  
  <HeaderComponent/>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
