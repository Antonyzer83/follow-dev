<template>
  <ion-content :fullscreen="true">
    <template v-if="exercices.length">
      <exercice-list-card v-for="exercice in exercices" :key="exercice.id" :exercice="exercice" />
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import ExerciceListCard from '../../components/ExerciceListCard';
import ExerciceService from '../../services/exercice';

export default {
  name: 'ExerciceList',
  components: {
    IonContent,
    ExerciceListCard
  },
  data() {
    return {
      exerciceService: ExerciceService,
      exercices: []
    }
  },
  created() {
    this.exerciceService.getExercices().then(
      (list) => {
        // Loop on list to get each exercice
        list.forEach((doc) => {
          const exercice = doc.data();
          // Append id to exercice object
          exercice.id = doc.id;
          this.exercices.push(exercice);
        });
      }
    );
  }
}
</script>
