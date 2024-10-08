<template>
    <div class="container-fluid ">
        <ul class="row ms-pad gy-2 gap-4 justify-content-center">
            <ProjectCardComponent v-for="(projectItem) in elementsPaginate" :key="projectItem.id" :item="projectItem"
                class="col-12 col-md-6 col-lg-3 m-0 my-5 project-card" />

        </ul>
        <div class="d-flex justify-content-around my-4">
            <button :class="prevPage ?'matrix-button':'d-none'" @click="goToPage(prevPage)" :disabled="!prevPage">Pagina precedente</button>
            <button :class="nextPage ? 'matrix-button':'d-none'" @click="goToPage(nextPage)" :disabled="!nextPage">Pagina successiva</button>
        </div>
        <!-- <ul class="pagination justify-content-center m-0">
            <li class="page-item" v-for="page in totPage" :key="page">
                <button class="page-link" @click="goToPage(page)">
                    {{ page }}
                </button>
            </li>
        </ul> -->
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
                window.scrollTo({ top: 0, behavior: "smooth" });
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
// .page-link {
//     cursor: pointer;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     padding: 8 16px;
//     margin-right: 10px;
//     border-radius: 0.25rem;
//     transition: background-color 0.3s ease, transform 0.3s ease;
// }

// .page-link:hover {
//     background-color: #0056b3;
//     transform: scale(1.05);
// }

.project-card {
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: scale(1.05);
}


.matrix-button {
    background-color: black;
    color: lime;
    border: 2px solid lime;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: fit-content;
}

.matrix-button:hover {
    background-color: lime;
    color: black;
}
.ms-pad{
    padding: 0 15px;
}

@media (min-width: 768px) {
    .project-card:hover {
        transform: scale(1.1);
    }
    .ms-pad{
        padding: 0;
    }
}
</style>
