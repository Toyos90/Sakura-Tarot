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
  <main>
    <h1>Adivina tu futuro</h1>
    <div>
      <div class="selectedCards">
        <div class="cards">
          <div class="pastCard">
            <img v-if="pastCardImage" :src="pastCardImage" alt="Past Card" />
            <p>{{ pastCardMeaning }}</p>
          </div>
          <div class="presentCard">
            <img v-if="presentCardImage" :src="presentCardImage" alt="Present Card" />
            <p>{{ presentCardMeaning }}</p>
          </div>
          <div class="futureCard">
            <img v-if="futureCardImage" :src="futureCardImage" alt="Future Card" />
            <p>{{ futureCardMeaning }}</p>
          </div>
        </div>
        <button v-if="showResetButton" @click="reset" class="btnReset">Reset</button>
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

.btnReset {
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 0.5rem;
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

.selectedCards > .cards {
  display: flex;
}

.selectedCards > div {
  text-align: center;
}

.selectedCards img {
  max-width: 100%;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.pastCard,
.presentCard,
.futureCard {
  flex: 1;
}

.selectedCards p {
  font-size: 1.5rem;
  color: white;
}
.selectedCards img {
  max-width: 100%;
  max-height: 450px;
}

</style>
