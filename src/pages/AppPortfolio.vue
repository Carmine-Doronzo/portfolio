<template>
    <div class="container py-4">
        <ul class="row gy-2 gap-2 justify-content-center p-0">
            <ProjectCardComponent v-for="(projectItem, i) in store.data.projectsToView" :key="projectItem.id"
                :item="projectItem" :item2="i" />
        </ul>


        <ul class="list-unstyled d-flex gap-3 justify-content-center" v-if="store.data.lastPage">
            <li style="cursor: pointer;" class="badge text-bg-success" @click="nextPage(page)" v-for="page in store.data.lastPage"
                :key="page">
                {{ page }}
            </li>
        </ul>

        <!-- <button @click="vaiAllaPagina(paginaPrecedente)" :disabled="!paginaPrecedente">Pagina precedente</button>
        <button @click="vaiAllaPagina(paginaSuccessiva)" :disabled="!paginaSuccessiva">Pagina successiva</button> -->

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
            // paginaCorrente: 2,
            perPagina: 15
        }
    },

    methods: {

        
        nextPage(page) {
            this.currentPage = page
            this.store.data.fetchData()
        },
    },
    

    mounted() {
        //this.store.data.fetchData()
       
        this.store.data.fetchData()
    }
}




</script>

<style lang="scss" scoped></style>