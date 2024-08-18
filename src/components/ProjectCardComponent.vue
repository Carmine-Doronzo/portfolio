<script>
export default {
  props: {
    item: { type: Object },
    item2:{ type: Number}

  }
}
</script>

<template>

  <li class="card col-3 ">
    <p>repo name: {{ item.name }}</p>
    <p>id: {{ item.id }}</p>
    <RouterLink :to="{name:'show', params:{slug: item2 }}"> More ...</RouterLink>
    <!-- <p>description: {{ item.description }}</p> -->
    
    <!-- <p v-if="item.type_id === null">type: no category</p>
    <p v-else>type: {{ item.type.name }}</p>

    <p>technologies:</p>
    <ul style="padding-left: 120px;">
      <li v-for="tag in item.technologies">{{ tag.name }}</li>
    </ul> -->
    
  </li>

</template>

<style lang="scss" scoped></style>