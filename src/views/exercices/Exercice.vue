<template>
  <ion-content :fullscreen="true" id="exercice">
    <template v-if="exercice">
      <p class="exercice-description">{{ exercice.description }}</p>

      <ion-grid class="exercice-infos">
        <ion-row>
          <ion-col size="6">
            <p class="exercice-info-name">Nombre de répétitions</p>
            <p>{{ exercice.repetition }}</p>
          </ion-col>
          <ion-col size="6">
            <p class="exercice-info-name">Temps de repos</p>
            <p>{{ exercice.rest }}</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <p class="exercice-info-name">Poids</p>
            <p>{{ exercice.weight }} kg</p>
          </ion-col>
          <ion-col size="6">
            <p class="exercice-info-name">Nombre de séries</p>
            <p>{{ exercice.serie }}</p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-img :src="exercice.img_url"></ion-img>
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import ExerciceService from '../../services/exercice';

export default {
  name: 'Exercice',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  data() {
    return {
      exerciceService: ExerciceService,
      exercice: null,
    }
  },
  created() {
    this.exerciceService.getExercice(this.$route.params.id).then(
      exercice => {
        // Check exercice exists
        if (exercice.exists()) {
          this.exercice = exercice.data();
        } else {
          // Redirect if no exercice
          this.$router.push({
            name: 'exercices'
          });
        }
      }
    )
  }
}
</script>

<style>
.exercice-description {
  margin: 3vh;
}

.exercice-infos {
  text-align: center;
  margin: 3vh;
}
.exercice-infos ion-col {
  border: 1px solid black;
  min-height: 150%;
}
.exercice-info-name {
  font-weight: bold;
}

#exercice ion-img {
  margin: 5vh auto;
  width: 80%;
}
</style>