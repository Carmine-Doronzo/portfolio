<template>
    <div ref="scrolling" class="container-fluid ">

        <ul class="row ms-pad gy-2 gap-4 justify-content-center">
            <ProjectCardComponent v-for="(projectItem) in elementsPaginate" :key="projectItem.id" :item="projectItem"
                class="col-12 col-md-6 col-lg-3 m-0 my-5 project-card" />

        </ul>
        
        <div class="d-flex justify-content-around my-4">
            <button :class="prevPage ?'matrix-button':'d-none'" @click="goToPage(prevPage)" :disabled="!prevPage">Pagina precedente</button>
            <button :class="nextPage ? 'matrix-button':'d-none'" @click="goToPage(nextPage)" :disabled="!nextPage">Pagina successiva</button>
        </div>
     
    </div>
</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
import { store } from '../store';

export default {
    name: 'ProjectListComponent',
    components: {
        ProjectCardComponent
    },
    data() {
        return {
            currentPage: 1,
            store,
            perPage: 6
        }
    },
    methods: {
        goToPage(page) {
            if (page) {
                this.currentPage = page;
                this.$refs.scrolling.scrollTo({ top: 0, behavior: "smooth" });
            }
        },
    },
    computed: {
        elementsPaginate() {
            const offset = (this.currentPage - 1) * this.perPage;
            return this.store.data.projectsToView.slice(offset, offset + this.perPage);
        },
        totPage() {
            return Math.ceil(this.store.data.projectsToView.length / this.perPage);
        },
        prevPage() {
           
            return this.currentPage > 1 ? this.currentPage - 1 : null;
        },
        nextPage() {
            
            return this.currentPage < this.totPage ? this.currentPage + 1 : null;
        },
    },
    mounted() {
        this.store.loading.on()
        if (this.store.data.projectsToView.length > 20) {
            this.store.loading.off()
        }


    },
    updated() {
        if (this.store.data.projectsToView.length > 20) {
            this.store.loading.off()
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/matrix-button';
@use '../style/partials/project-card';

</style>
