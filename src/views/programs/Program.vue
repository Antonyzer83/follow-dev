<template>
  <ion-content fullscreen="true">
    <template v-if="program">
      <div id="program">
        <p>Exercices :</p>

        <exercice-list-card v-for="exercice in program.exercices" :key="exercice.id" :exercice="exercice" />
      
        <ion-button expand="block" v-on:click="addPerformance">Ajouter une performance</ion-button>
      </div>

      <ion-button class="btn-update-program" v-on:click="updateProgram">
        <ion-icon :icon="createOutline"></ion-icon>
      </ion-button>
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent, IonButton, IonIcon } from '@ionic/vue';
import { createOutline } from 'ionicons/icons';
import ExerciceService from '../../services/exercice';
import ProgramService from '../../services/program';
import ExerciceListCard from '../../components/ExerciceListCard';

export default {
  name: 'Program',
  components: {
    IonContent,
    IonButton,
    IonIcon,
    ExerciceListCard,
  },
  data() {
    return {
      exerciceService: ExerciceService,
      programService: ProgramService,
      program: null,
      createOutline,
    }
  },
  created() {
    this.programService.getProgram(this.$route.params.id).then(
      program => {
        // Check program exists
        if (program.exists()) {
          this.program = program.data();
          this.program.id = this.$route.params.id;
          // Set header title
          this.$store.dispatch('saveHeaderTitle', this.program.name);

          // Get each exercice data
          for (let i = 0; i < this.program.exercices.length; i++) {
            const exerciceId = this.program.exercices[i];
            this.exerciceService.getExercice(exerciceId).then(
              exercice => {
                if (exercice.exists()) {
                  this.program.exercices[i] = exercice.data();
                  this.program.exercices[i].id = exerciceId;
                }
              }
            );
          }
        } else {
          this.$router.push({
            name: 'programs'
          });
        }
      }
    )
  },
  methods: {
    updateProgram() {
      // Redirect to update form
      this.$router.push({
        name: 'programUpdate',
        params: {
          id: this.program.id
        }
      });
    },
    addPerformance() {
      // Redirect to performance form
      this.$router.push({
        name: 'performanceCreate',
        params: {
          id: this.program.id
        }
      });
    }
  }
}
</script>

<style>
#program {
  margin: 3vh;
}
.btn-update-program {
  position: absolute;
  bottom: 5vh;
  right: 5vh;
  font-size: 1.2em;
}
</style>