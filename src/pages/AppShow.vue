<template>
    <div>
        show

        <button class="btn btn-primary" @click="goBack">
            Indietro
        </button>
        <p>{{ $route.params.slug }}</p>
        <div v-if="store.data.info">
            <p>Repo name: {{ store.data.info.name }}</p>
            <p>Owner: {{ store.data.info.full_name.split('/')[0] }}</p>
        </div>

    </div>
</template>

<script>
import { store } from '../store';


export default {
   
    data() {
        return {
            store,
            
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },


    },

    watch: {
        'store.data.projects'(newValue,oldValue){
            if(newValue !== oldValue){
                if(newValue.length > 0){
                    this.store.data.getSingleProjetct(this.$route.params.slug)
                }
            }
        }
    },

    mounted() {
        
        if(this.store.data.projects.length > 0){
            this.store.data.getSingleProjetct(this.$route.params.slug)  
        }
        
    }
}
</script>

<style lang="scss" scoped></style>