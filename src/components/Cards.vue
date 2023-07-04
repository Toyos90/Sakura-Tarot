<script>
import { ref, onMounted } from 'vue';
import Cards from '../services/tarot-services';

export default {
  setup() {
    let state = ref([]);

    onMounted(async () => {
      state.value = await Cards();
    });


    return { state };
  },
};
</script>

<template>
      <div v-for="item in state" :key="item.id">
            <!-- <h1>{{ item.spanishName }}</h1>
            <img :src="item.clowCard" alt="Clow Card" />
            <img :src="item.sakuraCard" alt="Sakura Card" />
            <p><strong>English Name:</strong> {{ item.englishName }}</p>
            <p><strong>Kanji:</strong> {{ item.kanji }}</p>
            <p><strong>Rōmaji:</strong> {{ item.Rōmaji }}</p>
            <p><strong>Appeared in Anime:</strong> {{ item.appeardAnime }}</p>
            <p><strong>Meaning:</strong> {{ item.meaning }}</p> -->
            <img :src="item.cardsReverse.clowReverse" alt="Clow Card Reverse" />
            <!-- <img :src="item.cardsReverse.sakuraReverse" alt="Sakura Card Reverse" /> -->
        </div>
  </template>
  
