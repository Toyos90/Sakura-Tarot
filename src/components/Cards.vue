<script setup>
import Cards from '../helpers/Cards.js';
export {
  Cards
} 
</script>

<template>
  <main>
    <h1>Adivina tu futuro</h1>
    <div>
      <div class="selectedCards">
        <div class="cards">
          <SelectedCard v-if="isCardSelected(0)" :image="pastCardImage" :alt="'Past Card'" :meaning="pastCardMeaning" />
          <SelectedCard v-if="isCardSelected(1)" :image="presentCardImage" :alt="'Present Card'"
            :meaning="presentCardMeaning" />
          <SelectedCard v-if="isCardSelected(2)" :image="futureCardImage" :alt="'Future Card'"
            :meaning="futureCardMeaning" />
        </div>
        <button v-if="showResetButton" @click="reset">Reset</button>
      </div>
      <div class="container">
        <div v-for="item in shuffledState" :key="item.id" @click="handleClick(item.id)">
          <img :src="item.cardsReverse.clowReverse" alt="Clow Card Reverse" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #333;
  background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
}

h1 {
  text-align: center;
  color: white;
}

button {
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #222;
}

.selectedCards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selectedCards>.cards {
  display: flex;
}

.selectedCards>div {
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>
