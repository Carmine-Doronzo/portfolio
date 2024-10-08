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

.terminal-output {
    font-family: 'Courier New', Courier, monospace;
    white-space: normal;
    /* Permette al testo di andare a capo */
    overflow: hidden;
    border-right: .15em solid black;
}

.terminal-text {
    font-family: 'Courier New', Courier, monospace;
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