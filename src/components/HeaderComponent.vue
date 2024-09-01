<template>
    <header>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
             <RouterLink class="navbar-brand" to="/"><img src="/logo.png" width="110" height="90" alt="Company Logo"></RouterLink>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav ms-auto">
                     <li class="nav-item">
                         <RouterLink class="nav-link" :to="{ name: 'home'}"><i class="fas fa-home"></i> Home</RouterLink>
                     </li>
                     <li class="nav-item">
                         <RouterLink class="nav-link" :to="{ name: 'about'}"><i class="fas fa-info-circle"></i> About</RouterLink>
                     </li>
                     <li class="nav-item">
                         <RouterLink class="nav-link" :to="{ name: 'portfolio'}"><i class="fas fa-briefcase"></i> Portfolio</RouterLink>
                     </li>
                     <li class="nav-item">
                         <RouterLink class="nav-link" :to="{ name: 'contact'}"><i class="fas fa-envelope"></i> Contact</RouterLink>
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
     }
 </script>
 
 <style lang="scss" scoped>
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
 }
 
 .nav-link i {
     margin-right: 0.5rem;
 }
 </style>
 