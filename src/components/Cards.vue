<script>
import CardScripts from '../helpers/CardScripts';
export default CardScripts;
</script>
<template>
  <main>
    <h1>Selecciona tres cartas para saber tu Pasado, Presente y Futuro...</h1>
    <div>
      <div class="selectedCards">
        <button v-if="showResetButton" @click="reset" class="btnReset">Nueva Lectura</button>
        <div class="cards">
            <SelectedCard v-if="isCardSelected(0)" :image="pastCardImage" :alt="'Past Card'" :meaning="pastCardMeaning" :title="'PASADO'"/>
            <SelectedCard v-if="isCardSelected(1)" :image="presentCardImage" :alt="'Present Card'"
              :meaning="presentCardMeaning" :title="'PRESENTE'"/>
            <SelectedCard v-if="isCardSelected(2)" :image="futureCardImage" :alt="'Future Card'"
              :meaning="futureCardMeaning" :title="'FUTURO'"/>
        </div>
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
  padding: 3rem 0;
}

.btnReset {
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.btnReset:hover {
  background-color: #222;
  letter-spacing: 0.1rem;
  color: blueviolet;
  font-weight: bold;
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
.selectedCards img {
  max-width: 100%;
  max-height: 100px;
}
.selectedCards p {
  font-size: 1.5rem;
  color: white;
}
.container img{
  border-radius: 1rem;
}
img:hover{
  box-shadow: 3px 5px 5px black;
  transform: scale(1.05);
  transform: translate(-2.1rem, -2ex);
  transition: 0.3s;
}
</style>
