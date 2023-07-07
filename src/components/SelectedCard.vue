<script>
import SelectedCardScripts from '../helpers/SelectedCardScripts';
export default SelectedCardScripts;
</script>
<template>
    <div class="card">
        <h2 class="card__title">{{ title }}</h2>
        <img v-if="image" :src="image" :alt="alt" />
        <p class="card__text">{{ meaning }}</p>
    </div>
</template>

<style scoped>
.card {
    flex: 1;
    background-color: burlywood;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.card__title {
    background-image: linear-gradient(45deg, #d678f3, #9642af);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
     background-clip: text;
}
.card img {
    max-width: 70%;
    max-height: 500px;
    border-radius: 1rem 1rem;
}
.card__text {
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    letter-spacing: 0.02rem;
    padding: 1rem 0;
}
@media (max-width: 700px) {
    .card {
        margin: 0 0.5rem;
    }
    .card__title {
        font-size: 1.5rem;
    }
    .card img {
        max-width: 50%;
        max-height: 500px;
        border-radius: 0.5rem 0.5rem;
    }
    .card__text{
        font-size: 0.8rem;
    }
}

</style>
