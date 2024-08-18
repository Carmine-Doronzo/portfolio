<template>
   <header>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-0">
            <RouterLink to="/">Logo</RouterLink>

            <nav class="d-flex justify-content-between align-items-center gap-3">
                <RouterLink :to="{ name: 'home'}">Home</RouterLink>
                <RouterLink :to="{ name: 'portfolio'}">Portfolio</RouterLink>
                <RouterLink :to="{ name: 'contact'}">Contact</RouterLink>
            </nav>
        </div>
    </div>
   </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>