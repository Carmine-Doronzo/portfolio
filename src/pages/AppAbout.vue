<template>
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="d-flex justify-content-evenly">
            <button @click="store.data.cv =  true" class="matrix-button  text-decoration-none"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Visualizza CV in italiano</button>
            <button @click="store.data.cvEn =  true" class="matrix-button  text-decoration-none"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Visualizza CV in inglese</button>
        </div>
        
            <div class="container-ms my-4">
                <div class="terminal_toolbar">
                    <div class="butt">
                        <button class="btn btn-color"></button>
                        <button class="btn"></button>
                        <button class="btn"></button>
                    </div>
                    <p class="user pt-3 fs-6 fs-md-5">&#128736;&#65039; Esperienza Professionale ~</p>
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

                                Nonostante il mio passato lavorativo fosse in un settore diverso, ho sempre desiderato
                                intraprendere la
                                carriera di sviluppatore web. La mia esperienza nella ristorazione mi ha permesso di
                                crescere
                                professionalmente, diventando un punto di riferimento per la struttura in cui lavoravo.
                                Ho lavorato per
                                una
                                importante azienda nel settore food & beverage, dove ho sviluppato competenze
                                fondamentali come il
                                lavoro di
                                squadra e la gestione delle task giornaliere.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div class="container-ms my-4">
                <div class="terminal_toolbar">
                    <div class="butt">
                        <button class="btn btn-color"></button>
                        <button class="btn"></button>
                        <button class="btn"></button>
                    </div>
                    <p class="user pt-3 fs-5">&#128161; Competenze ~</p>
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
                            <p id="text2" class="terminal-text ">

                                &#129513; PROBLEM SOLVING: Capacità di
                                analizzare e
                                risolvere
                                malfunzionamenti in modo efficace.<br>
                                &#129309; LAVORO DI SQUADRA: Esperienza
                                nel collaborare
                                con
                                team per raggiungere obiettivi comuni.<br>
                                &#128221; GESTIONE DELLE TASK: Abilità
                                nella gestione e
                                organizzazione delle attività quotidiane.

                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div class="container-ms my-4">
               
                <div class="terminal_toolbar">
                    <div class="butt">
                        <button class="btn btn-color"></button>
                        <button class="btn"></button>
                        <button class="btn"></button>
                    </div>
                    <p class="user pt-3 fs-5">&#127919; Obiettivi ~</p>
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
                            <p id="text3" class="terminal-text">

                                Il mio obiettivo è continuare a crescere come sviluppatore, imparando continuamente e
                                contribuendo con
                                idee
                                innovative. Sono sempre alla ricerca di nuove sfide che mi permettano di migliorare e di
                                offrire
                                soluzioni
                                efficaci e creative.
                            </p>

                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        this.typeText('text1', 0);
        this.typeText('text2', 0);
        this.typeText('text3', 0);

    },
    methods: {
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
            // Variabile per tracciare se siamo all'interno di un tag HTML
            let isTag = false;
            // Variabile per accumulare il contenuto del tag HTML
            let tagContent = '';

            // Imposta un timeout per ritardare l'inizio dell'animazione
            setTimeout(() => {
                // Imposta un intervallo per aggiungere un carattere alla volta al contenuto dell'elemento
                const interval = setInterval(() => {
                    // Controlla se ci sono ancora caratteri da aggiungere
                    if (i < text.length) {
                        const char = text.charAt(i);

                        if (char === '<') {
                            isTag = true;
                            tagContent += char;
                        } else if (char === '>') {
                            isTag = false;
                            tagContent += char;
                            element.innerHTML += tagContent;
                            tagContent = '';
                        } else if (isTag) {
                            tagContent += char;
                        } else {
                            element.innerHTML += char;
                        }
                        // Incrementa il contatore per passare al carattere successivo
                        i++;
                    } else {
                        // Se tutti i caratteri sono stati aggiunti, cancella l'intervallo
                        clearInterval(interval);
                    }
                }, 50); // Imposta la velocità dell'animazione (50 millisecondi per carattere)
            }, delay); // Imposta il ritardo prima di iniziare l'animazione
        },
    },
    computed:{
        timeoutDownload(){
            setTimeout(() => {
                return true
            }, 3000);
        }
    }
}

</script>

<style lang="scss" scoped>
@use '../style/partials/matrix-button';
@use '../style/partials/terminal-style';

</style>