<script>
import Cards from '../services/tarot-services';

export default{
    name:'CardComponent',
    data() {
    return {
        state: []
    };
  },
  async mounted() {
    this.state = await Cards();
  },

}
</script>

<template>
    <div>
      <div v-for="item in state" :key="item.id">
            <h1>{{ item.spanishName }}</h1>
            <img :src="item.clowCard" alt="Clow Card" />
            <img :src="item.sakuraCard" alt="Sakura Card" />
            <p><strong>English Name:</strong> {{ item.englishName }}</p>
            <p><strong>Kanji:</strong> {{ item.kanji }}</p>
            <p><strong>Rōmaji:</strong> {{ item.Rōmaji }}</p>
            <p><strong>Appeared in Anime:</strong> {{ item.appeardAnime }}</p>
            <p><strong>Meaning:</strong> {{ item.meaning }}</p>
            <img :src="item.cardsReverse.clowReverse" alt="Clow Card Reverse" />
            <img :src="item.cardsReverse.sakuraReverse" alt="Sakura Card Reverse" />
        </div>
    </div>
  </template>
  
