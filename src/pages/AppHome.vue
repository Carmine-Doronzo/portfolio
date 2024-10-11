<template>
    <div class="container-fluid">
        <h1 class="text-center d-block d-lg-none">Carmine - Full Stack Web Developer</h1>

        <div class="container-ms my-4">
            <div class="terminal_toolbar">
                <div class="butt">
                    <button class="btn btn-color"></button>
                    <button class="btn"></button>
                    <button class="btn"></button>
                </div>
                
                <p class="user pt-3">carmine/admin: ~</p>
                
                <div class="add_tab">
                    +
                </div>
            </div>
            
            <div class="terminal_body">
                <div class="terminal_promt">
                    <span class="terminal_user">carmine/admin:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                    <div class=" terminal-output fs-6">
                   
                        <p id="text1" class="terminal-text">
                            👋 Ciao! Sono Carmine, un neo Full Stack Web Developer con una grande passione per
                            l'apprendimento continuo e l'innovazione. Amo esplorare nuovi metodi, anche fuori dagli
                            schemi, per migliorare il flusso di idee in team e trovare soluzioni alternative ma efficaci
                            per la risoluzione dei bug.
                        </p>

                    </div>

                </div>
            </div>
        </div>
        
        <h2 class="text-center mt-5">Competenze acquisite:</h2>
        
        <ul class="row mt-4 justify-content-center align-items-center p-0">
            <li v-for="number, i in 13" :key="number"
                class="col-6 col-lg-3 d-flex justify-content-center matrix-animation ">
                <a :href="programmingLinks[i]" target="_blank"><img :src="`/icon/icon-${number}.png`" width="90" alt=""
                        class="icon-hover"></a>
            </li>
        </ul>
        
        <h2 class="text-center mt-5">Progetti migliori:</h2>
        
        <ul class="row ms-pad gy-2 gap-4 justify-content-center">
            <ProjectCardComponent v-for="(projectItem) in store.data.bestProjects" :key="projectItem.id"
                :item="projectItem" class="col-12 col-md-6 col-lg-3 m-0 my-5 project-card" />
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
            store,
            programmingLinks: [
                "https://www.w3schools.com/html/", // HTML
                "https://www.mysql.com/", // MySQL
                "https://www.w3schools.com/php/", // PHP
                "https://www.phpmyadmin.net/", // phpMyAdmin
                "https://www.w3schools.com/sass/", // Sass
                "https://vitejs.dev/", // Vite
                "https://vuejs.org/", // Vue.js
                "https://getbootstrap.com/", // Bootstrap
                "https://www.w3schools.com/css/", // CSS
                "https://www.javascript.com/", // JavaScript
                "https://angular.io/", // Angular
                "https://laravel.com/", // Laravel
                "https://git-scm.com/" // Git

            ]
        };
    }, mounted() {

        this.store.loading.on()
        
        if (this.store.data.projectsToView.length > 20) {
            this.store.loading.off()
        }
        
        this.typeText('text1', 0);

    },
    updated() {
        
        if (this.store.data.projectsToView.length > 20) {
            this.store.loading.off()

        }
    
    },
    methods: {
        // La funzione typeText prende due parametri: l'ID dell'elemento e il ritardo prima di iniziare l'animazione
        typeText(id, delay) {
            // Ottiene l'elemento HTML con l'ID specificato
            const element = document.getElementById(id);
            // Salva il contenuto testuale dell'elemento
            const text = element.innerHTML;
            // Svuota il contenuto dell'elemento per iniziare con un testo vuoto
            element.innerHTML = '';
            // Rende visibile l'elemento
            element.style.visibility = 'visible';
            // Inizializza un contatore per tracciare la posizione corrente nel testo
            let i = 0;
            // Imposta un timeout per ritardare l'inizio dell'animazione
            setTimeout(() => {
                // Imposta un intervallo per aggiungere una lettera alla volta al contenuto dell'elemento
                const interval = setInterval(() => {
                    // Controlla se ci sono ancora lettere da aggiungere
                    if (i < text.length) {
                        // Aggiunge la lettera corrente al contenuto dell'elemento
                        element.innerHTML += text.charAt(i);
                        // Incrementa il contatore per passare alla lettera successiva
                        i++;
                    } else {
                        // Se tutte le lettere sono state aggiunte, cancella l'intervallo
                        clearInterval(interval);
                    }
                }, 50); // Imposta la velocità dell'animazione (50 millisecondi per lettera)
            }, delay); // Imposta il ritardo prima di iniziare l'animazione
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/project-card';

@use '../style/partials/terminal-style';

@use '../style/partials/matrix-animation';

.icon-hover:hover {
    filter: drop-shadow(0 0 20px #00ff00);
}

</style>
