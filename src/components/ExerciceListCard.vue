<template>
  <ion-grid class="exercice-card">
    <ion-row>
      <ion-col size="6">
        <ion-row class="ion-align-items-center">
          <ion-col class="exercice-name">{{ exercice.name }}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-icon :icon="repeatOutline"></ion-icon>
            {{ exercice.repetition }}
          </ion-col>
          <ion-col size="6">
            <ion-icon :icon="timeOutline"></ion-icon>
            {{ exercice.rest }}
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-icon :icon="barbellOutline"></ion-icon>
            {{ exercice.weight }}
          </ion-col>
          <ion-col size="6">
            <ion-icon :icon="gitCompareOutline"></ion-icon>
            {{ exercice.serie }}
          </ion-col>
        </ion-row>
      </ion-col>
      <ion-col size="6">
        <ion-img :src="exercice.img_url"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonImg } from "@ionic/vue";
import {
  timeOutline,
  repeatOutline,
  barbellOutline,
  gitCompareOutline,
} from "ionicons/icons";

export default {
  name: "ExerciceListCard",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonImg,
  },
  props: [
    'exercice'
  ],
  data() {
    return {
      timeOutline,
      repeatOutline,
      barbellOutline,
      gitCompareOutline,
    };
  },
};
</script>

<style>
.exercice-card {
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px grey;
}

.exercice-name {
  font-weight: bold;
}
</style>