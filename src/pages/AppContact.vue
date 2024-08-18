<template>

    <h1>contact</h1>

    <form action="" method="POST">

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

        <button class="btn btn-primary">Invia</button>

    </form>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>