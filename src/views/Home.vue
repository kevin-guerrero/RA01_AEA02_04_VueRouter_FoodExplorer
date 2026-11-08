<script setup>
    
</script>

<template>
    <main class="home-page">
        <section class="hero">
            <p class="eyebrow">Cuina casolana, cada dia</p>
            <h1>Benvinguts a FoodExplorer</h1>
            <p class="hero-copy">Descobreix, explorar i consulta delicioses receptes</p>
            <img class="hero-image" src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto:low,w_655//hellofresh_website/es/cms/SEO/recipes/albondigas-caseras-de-cerdo-con-salsa-barbacoa.jpeg" alt="Plat de mandonguilles amb salsa">
        </section>
    </main>
</template>

<style scoped>
.home-page {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 50px 0;
}

.hero {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
}

.eyebrow {
    margin: 0 0 12px;
    color: #b66b3b;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

h1 {
    margin: 0;
    color: #294a37;
    font-size: 40px;
}

.hero-copy {
    margin: 18px 0 30px;
    color: #69756c;
    font-size: 1.08rem;
}

.hero-image {
    display: block;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border-radius: 12px;
    object-fit: cover;
}
</style>