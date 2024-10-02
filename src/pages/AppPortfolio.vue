<template>
    <div class="container-fluid">
        <div class="row gy-2 gap-4 justify-content-center">
            <ProjectCardComponent v-for="(projectItem) in elementsPaginate" :key="projectItem.id" :item="projectItem" class="col-12 col-md-6 col-lg-3 m-0 project-card" />
        </div>

        <ul class="pagination justify-content-center m-0">
            <li class="page-item" v-for="page in totPage" :key="page">
                <button class="page-link" @click="goToPage(page)">
                    {{ page }}
                </button>
            </li>
        </ul>
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
        this.store.loading.on()
        if(this.store.data.projectsToView.length > 20){
            this.store.loading.off()
        }

    },
    updated(){
        if(this.store.data.projectsToView.length > 20){
            this.store.loading.off()
        }
    }
}
</script>

<style lang="scss" scoped>

.page-link {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8 16px;
    margin-right: 10px;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.page-link:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.project-card {
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: scale(1.1);
}
</style>
