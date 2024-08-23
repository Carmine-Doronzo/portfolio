<script>
export default {
  props: {
    item: { type: Object },
    item2: { type: Number }

  }
}
</script>

<template>



    <li class="card col-3">
      <img :src="item.image ? item.image : 'not-avaible.jpg'" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ item.name.replaceAll('-', ' ') }}</h5>
        <p>id: {{ item.id }}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <RouterLink :to="{ name: 'show', params: { slug: item2 } }" class="btn btn-primary"> More ...</RouterLink>

      </div>
    </li>

    <!-- <p>description: {{ item.description }}</p> -->

    <!-- <p v-if="item.type_id === null">type: no category</p>
    <p v-else>type: {{ item.type.name }}</p>

    <p>technologies:</p>
    <ul style="padding-left: 120px;">
      <li v-for="tag in item.technologies">{{ tag.name }}</li>
    </ul> -->



</template>

<style lang="scss" scoped></style>