import { ref, onMounted } from "vue";

export default {
  setup() {
    const state = ref([]);
    const shuffledState = ref([]);
    const pastCardMeaning = ref("");
    const pastCardImage = ref("");
    const presentCardMeaning = ref("");
    const presentCardImage = ref("");
    const futureCardMeaning = ref("");
    const futureCardImage = ref("");
    const selectedCardsCount = ref(-1);
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

      clickedCards.value.push(id);
    };

    const reset = () => {
      pastCardMeaning.value = "";
      pastCardImage.value = "";
      presentCardMeaning.value = "";
      presentCardImage.value = "";
      futureCardMeaning.value = "";
      futureCardImage.value = "";
      selectedCardsCount.value = -1;
      showResetButton.value = false;
      clickedCards.value = [];
      shuffleState();
    };
    const isCardSelected = (index) => {
      return selectedCardsCount.value >= index;
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
      isCardSelected,
    };
  },
};
