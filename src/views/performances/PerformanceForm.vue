<template>
  <ion-content :fullscreen="true" id="performanceForm">
    <template v-if="performance && program && performance.program.exercices.length">
      <ion-grid>
        <ion-row>
          <ion-col>
            <p>Liée au programme {{ program.name }}</p>
          </ion-col>
        </ion-row>
        <template v-for="(exercice, index) in performance.program.exercices" :key="exercice.id">
          <ion-row>
            <ion-col>
              <ion-item-divider>
                <ion-label>{{ exercice.name }}</ion-label>
              </ion-item-divider>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label slot="start">Nombre de répétitions</ion-label>
                <ion-input slot="end" type="number" v-model="performance.program.exercices[index].finalRepetition"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label slot="start">Temps de repos</ion-label>
                <ion-input slot="end" type="number" v-model="performance.program.exercices[index].finalRest"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label slot="start">Poids</ion-label>
                <ion-input slot="end" type="number" v-model="performance.program.exercices[index].finalWeight"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label slot="start">Nombre de séries</ion-label>
                <ion-input slot="end" type="number" v-model="performance.program.exercices[index].finalSerie"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </template>
        <ion-row>
          <ion-col>
            <ion-button color="danger">Annuler</ion-button>
            <ion-button color="success" v-on:click="createPerformance">Enregistrer</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonItem, IonInput, IonItemDivider } from '@ionic/vue';
import ProgramService from '../../services/program';
import ExerciceService from '../../services/exercice';
import PerformanceService from '../../services/performance';
import { Timestamp } from 'firebase/firestore';

export default {
  name: 'PerformanceForm',
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonItemDivider
  },
  data() {
    return {
      programService: ProgramService,
      exerciceService: ExerciceService,
      performanceService: PerformanceService,
      program: null,
      performance: {
        date: null,
        program: {
          name: '',
          exercices: []
        }
      },
    }
  },
  created() {
    if (this.$route.params.id) {
      const programId = this.$route.params.id;
      // Get program by id
      this.programService.getProgram(programId).then(
        program => {
          if (program.exists()) {
            this.program = program.data();
            this.program.id = programId;

            // Get each exercice data
            for (let i = 0; i < this.program.exercices.length; i++) {
              const exerciceId = this.program.exercices[i];
              this.exerciceService.getExercice(exerciceId).then(
                exercice => {
                  if (exercice.exists()) {
                    const exerciceData = exercice.data();
                    this.program.exercices[i] = exercice.data();
                    this.program.exercices[i].id = exerciceId;
                    // Set object for each exercice in performance
                    this.performance.program.exercices[i] = {
                      ...exerciceData,
                      finalRepetition: exerciceData.repetition,
                      finalRest: exerciceData.rest,
                      finalWeight: exerciceData.weight,
                      finalSerie: exerciceData.serie,
                    };
                  }
                }
              );
            }
          } else {
            this.$router.push({
              name: 'performances'
            });
          }
        }
      );
    } else {
      this.$router.push({
        name: 'performances'
      });
    }
  },
  methods: {
    createPerformance() {
      this.performance.date = Timestamp.fromDate(new Date());
      this.performance.program.name = this.program.name;

      this.performanceService.createPerformance(this.performance).then(
        result => {
          // Redirect to new performance page if success
          if (result.id) {
            // TODO
          } else {
            // Redirect to list of performances
            this.$router.push({
              name: 'performances'
            });
          }
        }
      )
    }
  }
}
</script>

<style>
#performanceForm ion-grid {
  margin: 0 5vh;
}
#performanceForm ion-row {
  margin: 2vh 0;
  text-align: center;
}
#performanceForm ion-input {
  text-align: right;
}
</style>
