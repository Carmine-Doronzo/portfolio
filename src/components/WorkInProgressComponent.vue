<template>
    <div class="box">
        <div class="button mx-4 ms-margin-md-auto mx-md-auto py-5">Work in Progress</div>
        <div class="matrix">

            <span style="--i: 6" class="code-line">
                <p class="code">z</p>
                <p class="code">6</p>
                <p class="code">0</p>
                <p class="code">z</p>
            </span>
            
            <span style="--i: 8" class="code-line">
                <p class="code">6</p>
                <p class="code">9</p>
                <p class="code">p</p>
            </span>
            
            <span style="--i: 5" class="code-line">
                <p class="code">u</p>
                <p class="code">3</p>
                <p class="code">g</p>
            </span>
            
            <span style="--i: 12" class="code-line">
                <p class="code">a</p>
                <p class="code">t</p>
                <p class="code">7</p>
                <p class="code">2</p>
                <p class="code">g</p>
                <p class="code">h</p>
                <p class="code">0</p>
                <p class="code">k</p>
            </span>
            
            <span style="--i: 9" class="code-line">
                <p class="code">6</p>
                <p class="code">3</p>
                <p class="code">0</p>
            </span>
            
            <span style="--i: 6" class="code-line">
                <p class="code">7</p>
                <p class="code">s</p>
                <p class="code">b</p>
                <p class="code">q</p>
            </span>
            
            <span style="--i: 8" class="code-line">
                <p class="code">m</p>
                <p class="code">2</p>
                <p class="code">5</p>
                <p class="code">4</p>
                <p class="code">l</p>
                <p class="code">1</p>
            </span>
            
            <span style="--i: 12" class="code-line">
                <p class="code">9</p>
                <p class="code">1</p>
                <p class="code">s</p>
                <p class="code">2</p>
                <p class="code">t</p>
                <p class="code">7</p>
                <p class="code">4</p>
                <p class="code">h</p>
                <p class="code">0</p>
            </span>
            
            <span style="--i: 16" class="code-line">
                <p class="code">a</p>
                <p class="code">b</p>
                <p class="code">c</p>
                <p class="code">d</p>
                <p class="code">e</p>
            </span>
            
            <span style="--i: 9" class="code-line">
                <p class="code">f</p>
                <p class="code">g</p>
                <p class="code">h</p>
                <p class="code">i</p>
                <p class="code">j</p>
            </span>
            
            <span style="--i: 6" class="code-line">
                <p class="code">k</p>
                <p class="code">l</p>
                <p class="code">m</p>
                <p class="code">n</p>
            </span>
            
            <span style="--i: 19" class="code-line">
                <p class="code">u</p>
                <p class="code">v</p>
                <p class="code">w</p>
                <p class="code">v</p>
                <p class="code">2</p>
                <p class="code">3</p>
            </span>
            
            <span style="--i: 7" class="code-line">
                <p class="code">p</p>
                <p class="code">q</p>
                <p class="code">r</p>
                <p class="code">s</p>
                <p class="code">t</p>
            </span>
            
            <span style="--i: 12" class="code-line">
                <p class="code">1</p>
                <p class="code">2</p>
                <p class="code">6</p>
                <p class="code">x</p>
                <p class="code">5</p>
                <p class="code">h</p>
            </span>
            
            <span style="--i: 9" class="code-line">
                <p class="code">6</p>
                <p class="code">7</p>
                <p class="code">f</p>
                <p class="code">a</p>
                <p class="code">6</p>
                <p class="code">1</p>
            </span>
            
            <span style="--i: 17" class="code-line">
                <p class="code">j</p>
                <p class="code">f</p>
                <p class="code">0</p>
                <p class="code">x</p>
                <p class="code">6</p>
                <p class="code">0</p>
            </span>
            
            <span style="--i: 10" class="code-line">
                <p class="code">0</p>
                <p class="code">k</p>
                <p class="code">%</p>
                <p class="code">f</p>
                <p class="code">6</p>
                <p class="code">%</p>
            </span>
        
        </div>
    
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    --clr-shadow__border: #A8DF8E;
    --clr-text: #F6F4EB;
    --clr-code-line: #43ff85;
    --clr-matrix: #020204;
    --size: 3rem;
    position: relative;
    outline: 1px solid var(--clr-shadow__border);
    height: 100%;
    width: 100%;
}

.button {
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: var(--clr-text);
    padding: calc(var(--size) / 3) var(--size);
    background: transparent;
    border: none;
    cursor: pointer;
    text-shadow: 2px 0px var(--clr-shadow__border), 0px 2px var(--clr-shadow__border),
        -2px 0px var(--clr-shadow__border), 0px -2px var(--clr-shadow__border);
    text-align: center;
}

.matrix {
    width: 100%;
    height: 100%;
    bottom: 0%;
    transition: 0.5s ease-in-out;
    z-index: -1;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    background: var(--clr-matrix);
}

.box .matrix {
    opacity: 1;
}

.box:hover {
    transition: 0.5s ease-in-out;
    opacity: 0;
}

.code-line {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    transition: 0.5s;
    min-height: 0.6rem;
    min-width: 0.6rem;
    animation: matrix-animation calc(.2s * var(--i)) linear infinite;
}

.code {
    text-shadow: 20px 100px var(--clr-code-line), -20px -50px var(--clr-code-line);
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--clr-code-line);
    opacity: 0.5;
}

.code:first-child {
    color: var(--clr-text);
    opacity: 1;
}

@keyframes matrix-animation {
    0% {
        transform: translateY(calc(-50% * var(--i)));
    }

    100% {
        -webkit-transform: translateY(calc(50% * var(--i)));
        transform: translateY(calc(50% * var(--i)));
    }
}

@media (min-width: 992px) and (max-width: 1200px) {
    .ms-margin-md-auto {
        margin-left: -2.5rem !important;
        margin-right: -2.5rem !important;
    }
}
</style>