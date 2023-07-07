<script src="../helpers/CardScripts"></script>
<template>
  <main>
    <h1>Selecciona tres cartas para saber tu <br><strong>Pasado, Presente y Futuro...</strong></h1>
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
      <div class="containerCards">
        <div v-for="item in shuffledState" :key="item.id" @click="handleClick(item.id)">
          <img :src="item.cardsReverse.clowReverse" alt="Clow Card Reverse" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0 4rem;
}
h1 {
  text-align: center;
  color: white;
  padding: 4rem 0;
  font-weight: 300;
}

.btnReset {
  margin-bottom: 4rem;
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
.selectedCards img {
  max-width: 100%;
  max-height: 80px;
}
.containerCards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  padding-right: 6rem;
}
.containerCards img{
  border-radius: 1rem;
  transition: 0.3s;
}
img:hover{
  box-shadow: 3px 5px 5px black;
  transform: scale(1.05);
  transform: translate(-1.5rem, -1ex);
}
@media (max-width: 700px) {
  .cards{
    display: flex;
    flex-direction: column;
  }
  .containerCards {
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    padding-right: 9rem;
  }
  .containerCards img{
    border-radius: 0.6rem;
    transition: 0.3s;
  }
}
</style>
