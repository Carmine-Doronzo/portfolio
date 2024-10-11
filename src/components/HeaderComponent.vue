<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/"><img src="/logo.png" width="110" height="90" alt="Company Logo">
                </RouterLink>
                
                <h2 class="d-none d-lg-block">Carmine D'Oronzo Full Stack Web Developer</h2>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div v-if="state === true" @click="state = true" class="collapse navbar-collapse" id="navbarNav">
                    
                    <ul
                        class="navbar-nav ms-auto d-flex flex-column flex-lg-row justify-content-center align-items-center">
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'home' }" @click="state = false"><i
                                    class="fas fa-home"></i> Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'about' }" @click="state = false"><i
                                    class="fas fa-info-circle"></i> About
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'portfolio' }" @click="state = false"><i
                                    class="fas fa-briefcase"></i>
                                Progetti</RouterLink>
                        </li>
                        <!-- <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'contact' }" @click="state = false"><i class="fas fa-envelope"></i>
                                Contact</RouterLink>
                        </li> -->
                    </ul>
                
                </div>
            </div>
        
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            state: true
        }
    }
}
</script>

<style lang="scss" scoped>
// @use '../style/partials/header-component'

</style>