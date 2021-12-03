<template>
  <ion-content :fullscreen="true" id="programForm">
    <ion-grid v-if="exercices.length">
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Nom :</ion-label>
            <ion-input type="text" placeholder="(obligatoire)" v-model="program.name"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item>
            <ion-label>Exercices :</ion-label>
            <ion-select multiple="true" v-model="program.exercices">
              <ion-select-option v-for="exercice in exercices" :key="exercice.key" :value="exercice.id">{{ exercice.name }}</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <p>Ordre des exercices :</p>
      </ion-row>
      <ion-row>
        <ion-reorder-group v-if="program.exercices.length" :disabled="false">
          <ion-item v-for="exercice in program.exercices" :key="exercice.id">
            <ion-label slot="start">{{ getExercice(exercice).name }}</ion-label>
            <ion-reorder></ion-reorder>
          </ion-item>
        </ion-reorder-group>
        <p v-else>Aucun exercice sélectionné</p>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="danger">Annuler</ion-button>
          <ion-button color="success" v-on:click="createProgram">Créer</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonLabel, IonItem, IonSelect, IonSelectOption, IonReorderGroup, IonReorder } from '@ionic/vue';
import ExerciceService from '../../services/exercice';
import ProgramService from '../../services/program';

export default {
  name: 'ProgramForm',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonReorderGroup,
    IonReorder,
  },
  data() {
    return {
      exerciceService: ExerciceService,
      programService: ProgramService,
      program: {
        name: '',
        exercices: [],
        performances: [],
      },
      exercices: [],
    }
  },
  created() {
    this.exerciceService.getExercices().then(
      list => {
        list.forEach((doc) => {
          const exercice = doc.data();
          exercice.id = doc.id;
          this.exercices.push(exercice);
        });
      }
    )
  },
  methods: {
    getExercice(exerciceId) {
      return this.exercices.find(ex => ex.id == exerciceId);
    },
    createProgram() {
      if (this.program.name !== '' && this.program.exercices.length > 0) {
        this.programService.createProgram(this.program).then(
          result => {
            // Redirect to new program page if success
            if (result.id) {
              this.$router.push({
                name: 'program',
                params: {
                  id: result.id
                }
              });
            } else {
              // Redirect to list of programs
              this.$router.push({
                name: 'programs'
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
#programForm ion-grid {
  margin: 0 5vh;
}
#programForm ion-row {
  margin: 2vh 0;
  text-align: center;
}
ion-reorder-group {
  width: 100%;
}
</style>