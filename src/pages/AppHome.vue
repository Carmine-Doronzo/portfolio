<template>
    <div class="container-fluid">
        <h1 class="text-center">Carmine - Full Stack Web Developer</h1>
        <div class="text-center terminal-output">
            <p class="terminal-text" style="--delay: 0s;">
                👋 Ciao! Sono Carmine, un neo Full Stack Web Developer con una grande passione per l'apprendimento continuo e
            </p>
            <p class="terminal-text" style="--delay: 3.5s;">l'innovazione. Amo esplorare nuovi metodi, anche fuori dagli schemi, per migliorare il flusso di idee in team e</p>
            <p class="terminal-text" style="--delay: 7s;">trovare soluzioni alternative ma efficaci per la risoluzione dei bug.</p>
        </div>
        <div class="row mt-4 justify-content-center align-items-center">
            <div v-for="number in 12" :key="number" class="col-3 d-flex justify-content-center matrix-animation">
                <img :src="`/icon/icon-${number}.png`" width="90" alt="" class="icon-hover">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxNumber: 12
        };
    }
};
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

.matrix-animation:nth-child(1) { --i: 1; }
.matrix-animation:nth-child(2) { --i: 2; }
.matrix-animation:nth-child(3) { --i: 3; }
.matrix-animation:nth-child(4) { --i: 4; }
.matrix-animation:nth-child(5) { --i: 5; }
.matrix-animation:nth-child(6) { --i: 6; }
.matrix-animation:nth-child(7) { --i: 7; }
.matrix-animation:nth-child(8) { --i: 8; }
.matrix-animation:nth-child(9) { --i: 9; }
.matrix-animation:nth-child(10) { --i: 10; }
.matrix-animation:nth-child(11) { --i: 11; }
.matrix-animation:nth-child(12) { --i: 12; }

@keyframes typing {
    from { width: 0; opacity: 1;}
    to { width: 100%; opacity: 1;}
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: white; }
}

.terminal-output {
    font-family: 'Courier New', Courier, monospace;
    white-space: wrap;
    overflow: hidden;
    border-right: .15em solid black;
}

.terminal-text {
    animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    border-right: .15em solid black;
    animation-delay: var(--delay);
    opacity: 0;
    animation-fill-mode: forwards;
}

.terminal-text:nth-child(1) {
    animation-delay: 0s;
}

.terminal-text:nth-child(2) {
    animation-delay: 4s;
}

.terminal-text:nth-child(3) {
    animation-delay: 8s;
}

.icon-hover:hover {
    filter: drop-shadow(0 0 20px lime);
}
</style>
