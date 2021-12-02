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
          <ion-button v-if="isCreateMode" color="success" v-on:click="createExercice">Créer</ion-button>
          <ion-button v-else color="warning" v-on:click="updateExercice">Mise à jour</ion-button>
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
      },
      mode: 'create'
    }
  },
  created() {
    if (this.$route.params.id && this.$route.name === 'exerciceUpdate') {
      this.exerciceService.getExercice(this.$route.params.id).then(
        exercice => {
          if (exercice.exists()) {
            this.exercice = exercice.data();
            this.exercice.id = this.$route.params.id;
            this.mode = 'update';
          }
        }
      )
    }
  },
  methods: {
    createExercice() {
      if (this.exercice.name !== '' && this.exercice.description !== '' && this.exercice.img_url !== '') {
        this.exerciceService.createExercice(this.exercice).then(
          (result) => {
            // Redirect to new exercice page if success
            if (result.id) {
              this.$router.push({
                name: 'exercice',
                params: {
                  id: result.id
                }
              });
            } else {
              // Redirect to list of exercices
              this.$router.push({
                name: 'exercices'
              });
            }
          }
        );
      }
    },
    updateExercice() {
      if (this.exercice.name !== '' && this.exercice.description !== '' && this.exercice.img_url !== '') {
        this.exerciceService.updateExercice(this.exercice).then(
          () => {
            this.$router.push({
              name: 'exercice',
              params: {
                id: this.exercice.id
              }
            });
          }
        );
      }
    }
  },
  computed: {
    isCreateMode() {
      return this.mode === 'create';
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