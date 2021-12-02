<template>
  <ion-content :fullscreen="true" id="exerciceForm">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nom"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-textarea placeholder="Description"></ion-textarea>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Image"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nombre de répétitions"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Temps de repos (facultatif)"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Poids (facultatif)"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nombre de séries (facultatif)"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="success">Créer</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';

export default {
  name: 'ExerciceForm',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
  }
}
</script>

<style>
#exerciceForm ion-grid {
  margin: 0 5vh;
}
#exerciceForm ion-row {
  margin: 2vh 0;
  text-align: center;
}
#exerciceForm ion-input, #exerciceForm ion-textarea {
  border: 0.5px solid black;
  border-radius: 5px;
}
</style>