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
                <p class="user pt-3">carmine@admin: ~</p>
                <div class="add_tab">
                    +
                </div>
            </div>
            <div class="terminal_body">
                <div class="terminal_promt">
                    <span class="terminal_user">carmine@admin:</span>
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

        <ul class="row mt-4 justify-content-center align-items-center">
            <li v-for="number, i in 12" :key="number" class="col-3 d-flex justify-content-center matrix-animation">
                <a :href="programmingLinks[i]" target="_blank"><img :src="`/icon/icon-${number}.png`" width="90" alt=""
                        class="icon-hover"></a>
                </li>
        </ul>
        <ul class="row gy-2 gap-4 justify-content-center">
           <ProjectCardComponent v-for="(projectItem) in store.data.bestProjects" :key="projectItem.id" :item="projectItem"
                class="col-12 col-md-6 col-lg-3 m-0 my-5" />
        </ul>
    </div>
</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
import { store } from '../store';
export default {
    components:{
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

            ]
        };
    }, mounted() {
        this.typeText('text1', 0);

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
@keyframes matrix-fall {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.matrix-animation {
    animation: matrix-fall 1s ease-in-out forwards;
    animation-delay: calc(var(--i) * 0.1s);
    opacity: 0;
}

.matrix-animation:nth-child(1) {
    --i: 1;
}

.matrix-animation:nth-child(2) {
    --i: 2;
}

.matrix-animation:nth-child(3) {
    --i: 3;
}

.matrix-animation:nth-child(4) {
    --i: 4;
}

.matrix-animation:nth-child(5) {
    --i: 5;
}

.matrix-animation:nth-child(6) {
    --i: 6;
}

.matrix-animation:nth-child(7) {
    --i: 7;
}

.matrix-animation:nth-child(8) {
    --i: 8;
}

.matrix-animation:nth-child(9) {
    --i: 9;
}

.matrix-animation:nth-child(10) {
    --i: 10;
}

.matrix-animation:nth-child(11) {
    --i: 11;
}

.matrix-animation:nth-child(12) {
    --i: 12;
}

.terminal-output {
    font-family: 'Courier New', Courier, monospace;
    white-space: normal;
    /* Permette al testo di andare a capo */
    overflow: hidden;
    border-right: .15em solid black;
}

.terminal-text {
    display: inline-block;
    width: 100%;
    white-space: normal;
    /* Permette al testo di andare a capo */
    overflow: hidden;
    border-right: .15em solid black;
    visibility: hidden;
    /* Nasconde il testo */
}

.icon-hover:hover {
    filter: drop-shadow(0 0 20px lime);
}




.container-ms {
    width: 100%;
    max-height: 100%;
}

.terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #212121;
    justify-content: space-between;
}

.butt {
    display: flex;
    align-items: center;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
}

.btn-color {
    background: #ee411a;
}

.btn:hover {
    cursor: pointer;
}

.btn:focus {
    outline: none;
}

.butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
}

.add_tab {
    border: 1px solid #fff;
    color: #fff;
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
}

.user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
}

.terminal_body {
    background: rgba(0, 0, 0, 0.6);
    height: calc(100% - 30px);
    padding-top: 2px;
    margin-top: -1px;
    font-size: 12px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.terminal_promt {
    display: flex;
}

.terminal_promt span {
    margin-left: 4px;
}

.terminal_user {
    color: #1eff8e;
}

.terminal_location {
    color: #4878c0;
}

.terminal_bling {
    color: #dddddd;
}

.terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
}

@keyframes curbl {

    0% {
        background: #ffffff;
    }

    49% {
        background: #ffffff;
    }

    60% {
        background: transparent;
    }

    99% {
        background: transparent;
    }

    100% {
        background: #ffffff;
    }
}
</style>
