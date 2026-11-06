<script setup>
    import { useRoute } from 'vue-router';
    import { recipes } from '../data/recetas';

    const route = useRoute();
    const comidaId = parseInt(route.params.id)

    const recipe = recipes.find((r) => r.id == comidaId)
</script>

<template>
    <article v-if="recipe">
        <div>
            <img :src="recipe.img" alt="imagen">
        </div>
        <h1>{{ recipe.name }}</h1>
        <p> {{ recipe.description }} </p>
    </article>
</template>