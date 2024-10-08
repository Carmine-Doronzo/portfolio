<template>
  <div class="container-fluid overflow-hidden">
    <div class="row flex-column justify-content-center align-items-center">

      <img class="w-75" src="/not-found.gif" alt="">
      <RouterLink class="text-center matrix-button text-decoration-none w-25" to="/">Ritorna alla Home</RouterLink>

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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