<template>
  <ion-content :fullscreen="true" id="exerciceForm">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nom" v-model="exercice.name"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-textarea placeholder="Description" v-model="exercice.description"></ion-textarea>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Image" v-model="exercice.img_url"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nombre de répétitions" v-model="exercice.repetition"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Temps de repos (facultatif)" v-model="exercice.rest"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Poids (facultatif)" v-model="exercice.weight"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="text" placeholder="Nombre de séries (facultatif)" v-model="exercice.serie"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="success" v-on:click="createExercice">Créer</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonTextarea } from '@ionic/vue';
import ExerciceService from '../../services/exercice';

export default {
  name: 'ExerciceForm',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonTextarea
  },
  data() {
    return {
      exerciceService: ExerciceService,
      exercice: {
        name: '',
        description: '',
        repetition: '',
        rest: '',
        weight: '',
        serie: '',
        img_url: ''
      }
    }
  },
  methods: {
    createExercice() {
      if (this.exercice.name !== '' && this.exercice.description !== '' && this.exercice.img_url !== '') {
        this.exerciceService.createExercice(this.exercice).then(
          (result) => {
            if (result.id) {
              this.$router.push({
                name: 'exercice',
                params: {
                  id: result.id
                }
              });
            } else {
              this.$router.push({
                name: 'exercices'
              });
            }
          }
        )
      }
    }
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