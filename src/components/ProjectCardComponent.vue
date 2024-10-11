<template>

  <li class="card col-12 col-md-6 col-lg-3 mb-4">

    <div class="position-relative">

      <div class="badge" v-if="item.status === 'work in progress/best' || item.status === 'finish/best'">
        <img src="/best-icon.png" alt="Best Icon" />
      </div>

      <img :src="item.image && item.image.length !== 0 ? item.image[0] : 'not-avaible.jpg'" class="card-img-top"
        height="200" alt="...">

      <WorkInProgressComponent v-if="item.status === 'work in progress' || item.status === 'work in progress/best'"
        class="position-absolute end-0 top-0 icon-container z-3" />

    </div>

    <div class="card-body">

      <h5 class="card-title">{{ item.name.replaceAll('-', ' ') }}</h5>
      <p>id: {{ item.id }}</p>

      <RouterLink :to="{ name: 'show', params: { slug: item.id } }" class="matrix-button  text-decoration-none">More ...
      </RouterLink>

    </div>

  </li>
</template>

<script>
import WorkInProgressComponent from './WorkInProgressComponent.vue';

export default {
  components: {
    WorkInProgressComponent
  },
  props: {
    item: { type: Object },
  }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/matrix-button';
@use '../style/partials/card-component';

</style>