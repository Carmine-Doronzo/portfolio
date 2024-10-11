<template>
  <div>
    <h1 style="color: lime;" v-if="store.data.info">{{ store.data.info.name }}</h1>

    <button class="matrix-button mb-4" @click="goBack">
      Back
    </button>

    <div v-if="store.data.info">
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner ">

          <div v-for="(image, i) in store.data.info.image" class="carousel-item d-flex justify-content-center "
            :class="i === 0 ? 'active' : ''">
            <img class="d-block" @click="getIndexImg(i)" style="object-fit: contain; cursor: pointer;" width="700"
              height="500" :src="image" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          </div>

        </div>

        <button v-if="store.data.info.image && store.data.info.image.length > 1" class="carousel-control-prev"
          type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button v-if="store.data.info.image && store.data.info.image.length > 1" class="carousel-control-next"
          type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>

      <button class="matrix-button mt-4" @click="showTecnologies()">Mostra Linguaggi utilizzati</button>

      <BarChart v-if="showTeck" :dataTech="store.data.info.only_languages" :countTech="store.data.info.count_languages"
        class="my-5" />

      <h4> Contributors :
        <span v-for="collaborator in store.data.info.contributors">
          <a :href="collaborator.html_url"><img width="100" height="100" style="border-radius: 50%;"
              :src="collaborator.avatar_url" alt="">
          </a>
        </span>
      </h4>

      <div v-html="store.data.info.readme_description"></div>

      <a class="matrix-button my-4 text-decoration-none fs-3" :href="store.data.info.html_url"
        target="_blank">Visualizza su <i class="fs-4 p fa-brands fa-github"></i>
      </a>

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
    },
    getIndexImg(i) {
      this.store.data.imgIndex = i
      this.store.data.isImage = true
    },
    controlRoute() {
      const project = this.store.data.projectsToView.find(project => this.$route.params.slug === project.id.toString());
      console.log(project)
      if (project) {
        if (this.$route.params.slug === project.id.toString()) {
          if (this.store.data.projects.length > 0) {

            this.store.data.getSingleProject(this.$route.params.slug);
            console.log(this.store.data.info)
          }
        }
      } else {
        this.store.loading.off()
        console.log('Project not found, redirecting to not-found');
        this.$router.push({ name: 'not-found' });
      }
    }

  },
  watch: {

    'store.data.projects'(newValue, oldValue) {

      if (newValue !== oldValue) {

        if (newValue.length > 0) {
          this.store.data.getSingleProject(this.$route.params.slug);
        }

      }

    },

    'store.data.info'(newValue, oldValue) {

      if (newValue && this.store.data.projectsToView?.length) {
        const projectsIds = this.store.data.projectsToView.map(project => project.id);

        if (!projectsIds.includes(newValue.id)) {
          this.store.loading.off();
          console.log('Project not found, redirecting to not-found');
          this.$router.push({ name: 'not-found' });
        }

      }

    }

  },

  mounted() {
    this.store.loading.on();

    if (this.store.data.projectsToView.length != 0) {
      this.controlRoute()
    } else {
      async () => {
        await this.store.data.fetchData()
        this.controlRoute()
      }
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

<style lang="scss" scoped>
@use '../style/partials/matrix-button';
</style>
