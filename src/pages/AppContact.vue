<template>

    <h1>contact</h1>
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <form class="flex-grow-1" action="" method="POST">

                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">@email</span>
                    <input type="email" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Message</span>
                    <input type="textarea" class="form-control" row="10" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm">
                </div>

                <button class="btn btn-primary">Inviaò</button>

            </form>

        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>