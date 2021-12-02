<template>
  <ion-content :fullscreen="true" id="exerciceForm">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Nom :</ion-label>
            <ion-input type="text" placeholder="(obligatoire)" v-model="exercice.name"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Description :</ion-label>
            <ion-textarea placeholder="(obligatoire)" v-model="exercice.description"></ion-textarea>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Image :</ion-label>
            <ion-input type="text" placeholder="(obligatoire)" v-model="exercice.img_url"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Nombre de répétitions :</ion-label>
            <ion-input type="text" placeholder="(obligatoire)" v-model="exercice.repetition"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Temps de repos :</ion-label>
            <ion-input type="text" placeholder="(facultatif)" v-model="exercice.rest"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Poids :</ion-label>
            <ion-input type="text" placeholder="(facultatif)" v-model="exercice.weight"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Nombre de séries :</ion-label>
            <ion-input type="text" placeholder="(facultatif)" v-model="exercice.serie"></ion-input>
          </ion-item>
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
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonTextarea, IonLabel, IonItem } from '@ionic/vue';
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
    IonTextarea,
    IonLabel,
    IonItem,
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
/*#exerciceForm ion-input, #exerciceForm ion-textarea {
  border: 0.5px solid black;
  border-radius: 5px;
}*/
</style>