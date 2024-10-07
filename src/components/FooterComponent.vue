<template>
    <div>

        <footer>
            <div class="container-fluid">
                <div class="row justify-content-around pt-2">
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center ">
                        <h3>Seguimi su:</h3>
                        <ul class="d-flex flex-grow-1 p-0 list-unstyled">
                            <li><a href="https://github.com/Carmine-Doronzo" target="_blank"><i
                                        class="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/carmine-d-oronzo-193119315" target="_blank"><i
                                        class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div class=" col-6 d-flex flex-column justify-content-center align-items-center">
                        <h3>Contatti:</h3>
                        <ul class=" d-flex justify-content-center align-items-center flex-grow-1 p-0 list-unstyled">
                            <li>
                                <a class="text-decoration-none d-flex justify-content-center align-items-center "
                                    style="color: currentColor; font-family: 'Courier New', Courier, monospace;"
                                    href="mailTo:carmine.doronzo92@gmail.com"><i class="fs-2 fa-solid fa-at"></i><span
                                        class="d-none d-xl-inline"
                                        style="font-family: 'Courier New', Courier, monospace;">carmine.doronzo92@gmail.com</span></a>

                            </li>
                            <li class="pt-2 ">
                                <h4 class=" d-flex justify-content-center align-items-center"><i
                                        class="fs-2 fa-solid fa-phone"></i><span class="d-none d-lg-inline">3494600227</span></h4>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background-color: black;
}

i {
    padding: 0 10px;
    // filter: drop-shadow(0 0 20px lime);
    font-size: 40px;
    color: lime;
    transition: transform 0.3s ease;
}

i:hover {
    filter: drop-shadow(0 0 20px lime);
    transform: scale(1.1);
}
</style>