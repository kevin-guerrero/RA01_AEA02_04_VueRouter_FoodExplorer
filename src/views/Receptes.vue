<script setup>
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { recipes } from '../data/recetas.js';
</script>

<template>
    <article v-for="comida in recipes" :key="comida.id">
        <div>
            <img :src="comida.img" alt="comida">
        </div>
        <p>
            {{ comida.name }}
        </p>
        <p>{{ comida.description }}</p>
        <button>
            <RouterLink :to="`/Receptes/${comida.id}`"> Veure details </RouterLink>
        </button>
    </article>
    <RouterView></RouterView>
</template>