<template>
    <div>

        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 d-flex flex-column justify-content-center align-items-center ">
                        <h3>Seguimi su:</h3>
                        <ul class="d-flex flex-grow-1 p-0">
                            <li><i class="fa-brands fa-github"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
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

i:hover{
    filter: drop-shadow(0 0 20px lime);
    transform: scale(1.1) ;
}
</style>