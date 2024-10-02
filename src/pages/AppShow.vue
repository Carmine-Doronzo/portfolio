<template>
  <div>
    <h1 v-if="store.data.info">{{ store.data.info.name }}</h1>

    <button class="btn btn-primary" @click="goBack">
      Indietro
    </button>
    <div v-if="store.data.info">
      <img v-for="image in store.data.info.image" style="width: 100%;" :src="image" alt="">
      <button class="btn btn-primary" @click="showTecnologies()">Mostra Linguaggi utilizzati</button>
      <BarChart v-if="showTeck" :dataTech="store.data.info.only_languages"
        :countTech="store.data.info.count_languages" />
      <p> Contributors : <span v-for="collaborator in store.data.info.contributors"><a
            :href="collaborator.html_url"><img width="100" height="100" style="border-radius: 50%;"
              :src="collaborator.avatar_url" alt=""></a></span></p>
      <div v-html="store.data.info.readme_description"></div>

    </div>
  </div>
</template>

<script>
import { store } from '../store';
import BarChart from '../components/BarChart.vue';

export default {
  data() {
    return {
      store,
      showTeck: false
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    showTecnologies() {
      this.showTeck = !this.showTeck;
    }
  },
  watch: {
    'store.data.projects'(newValue, oldValue) {

      if (newValue !== oldValue) {
        if (newValue.length > 0) {
          this.store.data.getSingleProject(this.$route.params.slug);

        }
      }
    }
  },
  mounted() {
    this.store.loading.on()
 
    if (this.store.data.projects.length > 0) {
      this.store.data.getSingleProject(this.$route.params.slug);
    }
  },
  updated() {
    if (this.store.data.info != null) {
      this.store.loading.off()
    }
  },
  components: {
    BarChart
  }
};
</script>

<style lang="scss" scoped></style>
