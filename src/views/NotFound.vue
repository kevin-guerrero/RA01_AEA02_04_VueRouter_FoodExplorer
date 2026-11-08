<script setup></script>

<template>
    <section class="not-found">
        <span class="not-found-code">404</span>
        <h1>Pàgina no trobada</h1>
        <p>Comprova la URL o torna a Inici.</p>
        <RouterLink to="/">Tornar a l'inici</RouterLink>
    </section>
</template>

<style scoped>
.not-found {
    display: flex;
    min-height: 48vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 20px;
    text-align: center;
}

.not-found-code {
    color: #c36f3c;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.16em;
}

h1 {
    margin: 10px 0 0;
    color: #294a37;
    font-size: 36px;
}

p {
    margin: 12px 0 24px;
    color: #69756c;
}

a {
    padding: 11px 18px;
    border-radius: 8px;
    background: #315a43;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

a:hover {
    background: #244632;
}
</style>