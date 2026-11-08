<script setup>
    import { RouterLink } from 'vue-router';
    import { recipes } from '../data/recetas.js';
</script>

<template>
    <main class="recipes-page">
        <header class="page-heading">
            <p class="eyebrow">Inspira't a la cuina</p>
            <h1>Les nostres receptes</h1>
            <p>Idees senzilles i delicioses per al teu dia a dia.</p>
        </header>
        <section class="recipe-grid" aria-label="Llistat de receptes">
            <article class="recipe-card" v-for="comida in recipes" :key="comida.id">
                <img :src="comida.img" :alt="comida.name">
                <div class="recipe-card-content">
                    <h2>{{ comida.name }}</h2>
                    <p>{{ comida.description }}</p>
                    <RouterLink class="recipe-link" :to="`/Receptes/${comida.id}`">
                        Veure detalls <span aria-hidden="true">→</span>
                    </RouterLink>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
.recipes-page {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 0 60px;
}

.page-heading {
    margin-bottom: 32px;
    text-align: center;
}

.eyebrow {
    margin: 0 0 8px;
    color: #b66b3b;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.page-heading h1 {
    margin: 0;
    color: #294a37;
    font-size: 36px;
}

.page-heading > p:last-child {
    margin: 10px 0 0;
    color: #69756c;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.recipe-card {
    overflow: hidden;
    background: #fff;
    border: 1px solid #e9e9e1;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgb(42 59 44 / 5%);
}

.recipe-card:hover {
    box-shadow: 0 12px 28px rgb(42 59 44 / 12%);
}

.recipe-card > img {
    display: block;
    width: 100%;
    height: 205px;
    background: #e8ece5;
    object-fit: cover;
}

.recipe-card-content {
    display: flex;
    min-height: 205px;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

.recipe-card h2 {
    margin: 0;
    color: #304d3a;
    font-size: 20px;
    line-height: 1.35;
}

.recipe-card p {
    margin: 10px 0 20px;
    color: #6c776e;
    line-height: 1.55;
}

.recipe-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: #a85f33;
    font-weight: 700;
    text-decoration: none;
}

.recipe-link:hover {
    color: #784122;
}

</style>