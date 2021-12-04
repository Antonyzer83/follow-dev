<template>
  <ion-grid class="performance-card" v-on:click="showOnePerformance">
    <ion-row>
      <ion-col class="performance-name">Performance n°{{ performance.number }}</ion-col>
    </ion-row>
    <ion-row>
      <ion-col>Liée au programme <span class="text-bold">{{ performance.program.name }}</span> ({{ performance.program.exercices.length }} exercice(s))</ion-col>
    </ion-row>
    <ion-row>
      <ion-col>Enregistrée le {{ formatedDate }}</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import moment from 'moment';

export default {
  name: 'PerformanceListCard',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
  props: [
    'performance'
  ],
  methods: {
    showOnePerformance() {
      this.$router.push({
        name: 'performance',
        params: {
          performanceId: this.performance.id,
          programId: this.performance.program.id
        }
      });
    }
  },
  computed: {
    formatedDate() {
      return moment(this.performance.date.toDate()).format('DD/MM/YYYY à HH:mm:SS');
    }
  }
}
</script>

<style>
.performance-card {
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px grey;
  height: 15vh;
}

.performance-name {
  font-weight: bold;
  text-align: center;
}
</style>