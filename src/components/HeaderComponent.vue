<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/"><img src="/logo.png" width="110" height="90" alt="Company Logo">
                </RouterLink>
                <!-- <img class="d-none d-md-block" src="/header-intest.png" width="400" alt=""> -->
                <h2 class="d-none d-lg-block">Carmine D'Oronzo Full Stack Web Developer</h2>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div v-if="state === true" @click="state = true" class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto" >
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'home' }" @click="state = false" ><i class="fas fa-home"></i> Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'about' }" @click="state = false"><i class="fas fa-info-circle"></i> About
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'portfolio' }" @click="state = false"><i class="fas fa-briefcase"></i>
                                Portfolio</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'contact' }" @click="state = false"><i class="fas fa-envelope"></i>
                                Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return{
            state:true
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/matrix');


header {
    background-color: black;
    font-family: 'Matrix', sans-serif;
    color:green;
    min-width: 100%;
    
}

.navbar-brand img {
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.navbar-brand img:hover {
    transform: scale(1.1);
}

.nav-link {
    display: flex;
    align-items: center;
    color: rgb(0, 128, 0);
}

.nav-link i {
    margin-right: 0.5rem;

}

.navbar-toggler {
    border-color: #008000;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 128, 0, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");

}
@media (max-width: 992px) {
    .navbar-collapse{
    position: absolute;
    top: 105px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
}
.navbar-nav{
    background-color: black;
}
}

</style>