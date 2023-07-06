<template>
    <div class="card">
        <img v-if="image" :src="image" :alt="alt" />
        <p>{{ meaning }}</p>
    </div>
</template>
<script setup>

</script>
<style scoped>
.card {
    flex: 1;
    background-color: burlywood;
}

.card img {
    max-width: 100%;
}

.card p {
    font-size: 1.5rem;
    color: white
}
</style>
