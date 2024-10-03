<script>
export default {
  props: {

    item: { type: Object },

  }
}
</script>

<!-- <template>



  <li class="card col-12 col-md-6 col-lg-3 mb-4">
    <div class="position-relative">
      <img :src="item.image ? item.image : 'not-avaible.jpg'" class="card-img-top" height="200" alt="...">
      <img v-if="item.status === 'work in progress'" src="/work-in-progress.jpg" class="position-absolute end-0 top-0"
        width="100" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ item.name.replaceAll('-', ' ') }}</h5>
      <p>id: {{ item.id }}</p>
      <p class="card-text">Status: {{ item.status }}</p>
      <RouterLink :to="{ name: 'show', params: { slug: item.id } }" class="btn btn-primary">More ...</RouterLink>
    </div>
  </li>



</template> -->
<template>
  <li class="card col-12 col-md-6 col-lg-3 mb-4">
    <div class="position-relative">
      <img :src="item.image ? item.image : 'not-avaible.jpg'" class="card-img-top" height="200" alt="...">
      <img v-if="item.status === 'work in progress'" src="/work-in-progress.jpg" class="position-absolute end-0 top-0 icon-container" width="100" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ item.name.replaceAll('-', ' ') }}</h5>
      <p>id: {{ item.id }}</p>
      <p class="card-text">Status: {{ item.status }}</p>
      <RouterLink :to="{ name: 'show', params: { slug: item.id } }" class="btn btn-primary">More ...</RouterLink>
    </div>
  </li>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/matrix');
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
.card-title, .card-text, .btn {
  color: #0f0;
}
.card-body {
  font-family: 'Matrix', Courier, monospace;
}
.position-relative img {
  border-radius: 10px;
}


</style>