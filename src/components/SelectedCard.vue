<script>
import SelectedCardScripts from '../helpers/SelectedCardScripts';
export default SelectedCardScripts;
</script>
<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <img v-if="image" :src="image" :alt="alt" />
        <p>{{ meaning }}</p>
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

.card img {
    max-width: 100%;
    max-width: 70%;
    max-height: 500px;
    border-radius: 1rem 1rem;
    
}

.card p {
    font-size: 1.5rem;
    color: white
}
h2 {
  color: white;
}
</style>
