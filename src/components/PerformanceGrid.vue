<template>
  <ion-grid class="performance-grid">
    <ion-row>
      <ion-col size="4" class="text-bold">{{ performance.name }}</ion-col>
      <ion-col size="4" class="text-bold">Prévu</ion-col>
      <ion-col size="4" class="text-bold">Réalisé</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4" class="text-bold">Nombre de répétitions</ion-col>
      <ion-col size="4">{{ performance.repetition }}</ion-col>
      <ion-col size="4">{{ performance.finalRepetition }}</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4" class="text-bold">Temps de repos</ion-col>
      <ion-col size="4">{{ performance.rest }}</ion-col>
      <ion-col size="4">{{ performance.finalRest }}</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4" class="text-bold">Poids</ion-col>
      <ion-col size="4">{{ performance.weight }}</ion-col>
      <ion-col size="4">{{ performance.finalWeight }}</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="4" class="text-bold">Nombre de séries</ion-col>
      <ion-col size="4">{{ performance.serie }}</ion-col>
      <ion-col size="4">{{ performance.finalSerie }}</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

export default {
  name: 'PerformanceGrid',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
  props: [
    'performance'
  ]
}
</script>

<style>
.performance-grid {
  margin-bottom: 3vh;
}
.performance-grid ion-col {
  border: 0.5px solid black;
  text-align: center;
}
</style>