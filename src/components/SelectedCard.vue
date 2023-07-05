<template>
    <div class="card">
        <img v-if="image" :src="image" :alt="alt" />
        <p>{{ meaning }}</p>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        alt: String,
        meaning: String,
    },
    setup(props) {
        console.log(props);
    },
};
</script>

<style scoped>
.card {
    flex: 1;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.card img {
    max-width: 70%;
    max-height: 500px;
    border-radius: 1rem 1rem;
    
}

.card p {
    font-size: 1.5rem;
    color: white
}
</style>
