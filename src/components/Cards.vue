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

    onMounted(async () => {
      state.value = await Cards();
      shuffleState();
    });

    const shuffleState = () => {
      shuffledState.value = [...state.value].sort(() => Math.random() - 0.5);
    };

    const handleClick = (id) => {
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
    };
  },
};
</script>

<template>
      <button v-if="showResetButton" @click="reset">Reset</button>
  <div>
    <div class="selectedCards">
      <div class="pastCard">
        <img :src="pastCardImage" alt="Past Card" />
        <p>{{ pastCardMeaning }}</p>
      </div>
      <div class="presentCard">
        <img :src="presentCardImage" alt="Present Card" />
        <p>{{ presentCardMeaning }}</p>
      </div>
      <div class="futureCard">
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
  padding: 1rem;
}
.selectCard {
  max-width: 5rem;
  height: 4rem;
  margin: 1rem;
}
.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
</style>
  
