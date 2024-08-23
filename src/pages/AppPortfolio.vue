<template>
    <div class="container py-4">
        <ul class="row gy-2 gap-2 justify-content-center p-0">
            <ProjectCardComponent v-for="(projectItem) in elementsPaginate" :key="projectItem.id" :item="projectItem" />
        </ul>


        <ul class="list-unstyled d-flex gap-3 justify-content-center">
            <li style="cursor: pointer;" class="badge text-bg-success" @click="goToPage(page)" v-for="page in totPage"
                :key="page">
                {{ page }}
            </li>
        </ul>

        

    </div>
</template>

<script>

import ProjectCardComponent from '../components/ProjectCardComponent.vue';
import { store } from '../store';
export default {
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
                this.currentPage = page
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
       
    },

    mounted() {



    }
}




</script>

<style lang="scss" scoped></style>