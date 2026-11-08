<script setup>
    import { useRoute } from 'vue-router';
    import { recipes } from '../data/recetas';
    import NotFound from './NotFound.vue';

    const route = useRoute();
    const comidaId = parseInt(route.params.id)

    const recipe = recipes.find((r) => r.id == comidaId)
</script>

<template>
    <main class="detail-page">
        <article v-if="recipe" class="recipe-detail">
            <img :src="recipe.img" :alt="recipe.name">
            <div class="detail-copy">
                <p class="eyebrow">Una recepta per gaudir</p>
                <h1>{{ recipe.name }}</h1>
                <p>{{ recipe.description }}</p>
            </div>
        </article>
        <NotFound v-else />
    </main>
</template>

<style scoped>
.detail-page {
    width: 80%;
    max-width: 940px;
    margin: 0 auto;
    padding: 50px 0;
}

.recipe-detail {
    overflow: hidden;
    background: #fff;
    border: 1px solid #e9e9e1;
    border-radius: 20px;
    box-shadow: 0 12px 36px rgb(42 59 44 / 8%);
}

.recipe-detail > img {
    display: block;
    width: 100%;
    height: 400px;
    background: #e8ece5;
    object-fit: cover;
}

.detail-copy {
    padding: 30px 40px 36px;
}

.eyebrow {
    margin: 0 0 10px;
    color: #b66b3b;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

h1 {
    margin: 0;
    color: #294a37;
    font-size: 36px;
    line-height: 1.2;
}

.detail-copy > p:last-child {
    margin: 16px 0 0;
    color: #69756c;
    font-size: 1.05rem;
    line-height: 1.7;
}

</style>