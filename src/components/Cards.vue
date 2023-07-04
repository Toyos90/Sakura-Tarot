<script>
import { ref, onMounted } from 'vue';
import Cards from '../services/tarot-services';

export default {
  setup() {
    const state = ref([]);
    const shuffledState = ref([]);
    const pastCardMeaning = ref('');
    const pastCardImage = ref('');
    const presentCardMeaning = ref('');
    const presentCardImage = ref('');
    const futureCardMeaning = ref('');
    const futureCardImage = ref('');
    const selectedCardsCount = ref(0);
    const showResetButton = ref(false);
    const clickedCards = ref([]);

    onMounted(async () => {
      state.value = await Cards();
      shuffleState();
    });

    const shuffleState = () => {
      shuffledState.value = [...state.value].sort(() => Math.random() - 0.5);
    };

    const handleClick = (id) => {
      if (clickedCards.value.includes(id)) {
        // La carta ya ha sido seleccionada previamente, no se hace nada
        return;
      }

      if (selectedCardsCount.value === 0) {
        const card = state.value.find((item) => item.id === id);
        pastCardMeaning.value = card.meaning;
        pastCardImage.value = card.clowCard;
        selectedCardsCount.value++;
      } else if (selectedCardsCount.value === 1) {
        const card = state.value.find((item) => item.id === id);
        presentCardMeaning.value = card.meaning;
        presentCardImage.value = card.clowCard;
        selectedCardsCount.value++;
      } else if (selectedCardsCount.value === 2) {
        const card = state.value.find((item) => item.id === id);
        futureCardMeaning.value = card.meaning;
        futureCardImage.value = card.clowCard;
        selectedCardsCount.value++;
        showResetButton.value = true;
      }

      clickedCards.value.push(id);
    };

    const reset = () => {
      pastCardMeaning.value = '';
      pastCardImage.value = '';
      presentCardMeaning.value = '';
      presentCardImage.value = '';
      futureCardMeaning.value = '';
      futureCardImage.value = '';
      selectedCardsCount.value = 0;
      showResetButton.value = false;
      clickedCards.value = [];
      shuffleState();
    };

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
    }
  }
}
</script>

<template>
  <div>
    <button v-if="showResetButton" @click="reset">Reset</button>
    <div class="selectedCards">
      <div class="pastCard selectCard">
        <img :src="pastCardImage" alt="Past Card" />
        <p>{{ pastCardMeaning }}</p>
      </div>
      <div class="presentCard selectCard">
        <img :src="presentCardImage" alt="Present Card" />
        <p>{{ presentCardMeaning }}</p>
      </div>
      <div class="futureCard selectCard">
        <img :src="futureCardImage" alt="Future Card" />
        <p>{{ futureCardMeaning }}</p>
      </div>
    </div>
    <div class="container">
      <div v-for="item in shuffledState" :key="item.id" @click="handleClick(item.id)">
        <img :src="item.cardsReverse.clowReverse" alt="Clow Card Reverse" />
      </div>
    </div>
 
  </div>
</template>

<style scoped>
.selectedCards {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}
.selectCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  font-size: 0.6rem;
}
.selectCard img {
  width: 8rem;
}
.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
</style>
  
