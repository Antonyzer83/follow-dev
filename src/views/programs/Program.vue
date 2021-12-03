<template>
  <ion-content fullscreen="true">
    <template v-if="program">
      <div id="program">
        <p>Exercices :</p>

        <exercice-list-card v-for="exercice in program.exercices" :key="exercice.id" :exercice="exercice" />
      </div>
      </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import ExerciceService from '../../services/exercice';
import ProgramService from '../../services/program';
import ExerciceListCard from '../../components/ExerciceListCard';

export default {
  name: 'Program',
  components: {
    IonContent,
    ExerciceListCard,
  },
  data() {
    return {
      exerciceService: ExerciceService,
      programService: ProgramService,
      program: null
    }
  },
  created() {
    this.programService.getProgram(this.$route.params.id).then(
      program => {
        // Check program exists
        if (program.exists()) {
          this.program = program.data();
          this.program.id = this.$route.params.id;

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
  }
}
</script>

<style>
#program {
  margin: 3vh;
}
</style>