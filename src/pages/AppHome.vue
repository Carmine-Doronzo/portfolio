<template>
    <div class="container-fluid">
        <h1 class="text-center d-block d-lg-none">Carmine - Full Stack Web Developer</h1>

        <!-- <div class="card my-4">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                <div class="text-center terminal-output py-5">
                    <p class="terminal-text" style="--delay: 0s;">
                        👋 Ciao! Sono Carmine, un neo Full Stack Web Developer con una grande passione per
                        l'apprendimento
                        continuo e
                    </p>
                    <p class="terminal-text" style="--delay: 3.5s;">l'innovazione. Amo esplorare nuovi metodi, anche
                        fuori dagli
                        schemi, per migliorare il flusso di idee in team e</p>
                    <p class="terminal-text" style="--delay: 7s;">trovare soluzioni alternative ma efficaci per la
                        risoluzione
                        dei bug.</p>
                </div>
            </div>
        </div> -->

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
                        <p class="terminal-text" style="--delay: 0s;">
                            👋 Ciao! Sono Carmine, un neo Full Stack Web Developer con una grande passione per
                            l'apprendimento
                            continuo e
                        </p>
                        <p class="terminal-text" style="--delay: 3.5s;">l'innovazione. Amo esplorare nuovi metodi, anche
                            fuori dagli
                            schemi, per migliorare il flusso di idee in team e</p>
                        <p class="terminal-text" style="--delay: 7s;">trovare soluzioni alternative ma efficaci per la
                            risoluzione
                            dei bug.</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="row mt-4 justify-content-center align-items-center">
            <div v-for="number,i in 12" :key="number" class="col-3 d-flex justify-content-center matrix-animation">
                <a :href="programmingLinks[i]"><img :src="`/icon/icon-${number}.png`" width="90" alt="" class="icon-hover"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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

@keyframes typing {
    from {
        width: 0;
        opacity: 1;
    }

    to {
        width: 100%;
        opacity: 1;
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: white;
    }

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


// .card {
//     width: 100%;
//     height: 254px;
//     margin: 0 auto;
//     background-color: #011522;
//     border-radius: 8px;
//     z-index: 1;
//     opacity: 0.7;
//     color: white;
// }

// .tools {
//     display: flex;
//     align-items: center;
//     padding: 9px;
// }

// .circle {
//     padding: 0 4px;
// }

// .box {
//     display: inline-block;
//     align-items: center;
//     width: 10px;
//     height: 10px;
//     padding: 1px;
//     border-radius: 50%;
// }

// .red {
//     background-color: #ff605c;
// }


// .yellow {
//     background-color: #ffbd44;
// }

// .green {
//     background-color: #00ca4e;
// }

.container-ms {
    width: 100%;
    height: 250px;
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
