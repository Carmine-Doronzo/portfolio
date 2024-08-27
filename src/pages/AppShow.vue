<template>
    <div>
        <h1 v-if="store.data.info">{{ store.data.info.name }}</h1>

        <button class="btn btn-primary" @click="goBack">
            Indietro
        </button>
        <!-- <p>{{ $route.params.slug }}</p> -->
        <div v-if="store.data.info">
            
            <img v-for="image in store.data.info.image" style="width: 100%;" :src="image" alt="">
            <p>Repo name: {{ store.data.info.name }}</p>
            <p>Owner: {{ store.data.info.full_name.split('/')[0] }}</p>
            <p>languages: <span v-for="language in store.data.info.only_languages">{{ language + ' ' }}</span></p>
            <p> Contributors : <span v-for="collaborator in store.data.info.contributors">{{ collaborator.login +' ' }}</span></p>
            <div v-html="store.data.info.readme_description"></div>
        </div>

    </div>
</template>

<script>
import { store } from '../store';
//import marked from 'marked';


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
                    this.store.data.getSingleProject(this.$route.params.slug)
                }
            }
        }
    },

    mounted() {
        
        if(this.store.data.projects.length > 0){
            this.store.data.getSingleProject(this.$route.params.slug)  
        }
        
    }
}
</script>

<style lang="scss" scoped></style>