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
<script>
import { ref, onMounted } from 'vue';
import Cards from '../services/tarot-services';
import SelectedCard from './SelectedCard.vue';

export default {
  components: {
    SelectedCard,
  },
  setup() {
    const state = ref([]);
    const shuffledState = ref([]);
    const pastCardMeaning = ref('');
    const pastCardImage = ref('');
    const presentCardMeaning = ref('');
    const presentCardImage = ref('');
    const futureCardMeaning = ref('');
    const futureCardImage = ref('');
    const selectedCardsCount = ref(-1);
    const showResetButton = ref(false);

    onMounted(async () => {
      state.value = await Cards();
      shuffleState();
    });

    const shuffleState = () => {
      shuffledState.value = [...state.value].sort(() => Math.random() - 0.5);
    };

    const handleClick = (id) => {
      if (selectedCardsCount.value === -1) {
        const card = state.value.find((item) => item.id === id);
        pastCardMeaning.value = card.meaning;
        pastCardImage.value = card.clowCard;
        selectedCardsCount.value++;
      } else if (selectedCardsCount.value === 0) {
        const card = state.value.find((item) => item.id === id);
        presentCardMeaning.value = card.meaning;
        presentCardImage.value = card.clowCard;
        selectedCardsCount.value++;
      } else if (selectedCardsCount.value === 1) {
        const card = state.value.find((item) => item.id === id);
        futureCardMeaning.value = card.meaning;
        futureCardImage.value = card.clowCard;
        selectedCardsCount.value++;
        showResetButton.value = true;
      }
    };

    const reset = () => {
      pastCardMeaning.value = '';
      pastCardImage.value = '';
      presentCardMeaning.value = '';
      presentCardImage.value = '';
      futureCardMeaning.value = '';
      futureCardImage.value = '';
      selectedCardsCount.value = -1;
      showResetButton.value = false;
      shuffleState();
    };
    const isCardSelected = (index) => {
      return selectedCardsCount.value >= index;
}
    return {
      shuffledState,
      pastCardMeaning,
      pastCardImage,
      presentCardMeaning,
      presentCardImage,
      futureCardMeaning,
      futureCardImage,
      handleClick,
      reset,
      showResetButton,
      isCardSelected
    };
  },
};
</script>

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
