<script>
export default {
  props: {
    
    item: { type: Object },

  }
}
</script>

<template>



    <li class="card col-3">
      <img :src="item.image ? item.image : 'not-avaible.jpg'" class="card-img-top position-relative" height="200" alt="...">
      <img v-if="item.status === 'work in progress'" src="/work-in-progress.jpg" class="position-absolute end-0" width="100" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ item.name.replaceAll('-', ' ') }}</h5>
        <p>id: {{ item.id }}</p>
        <p class="card-text">Status: {{ item.status }}</p>
        <RouterLink :to="{ name: 'show', params: { slug: item.id } }" class="btn btn-primary"> More ...</RouterLink>

      </div>
    </li>




</template>

<style lang="scss" scoped></style>