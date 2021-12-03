<template>
  <ion-content :fullscreen="true">
    <template v-if="programs.length">
      <program-list-card v-for="program in programs" :key="program.id" :program="program" />
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import ProgramListCard from '../../components/ProgramListCard';
import ProgramService from '../../services/program';
import ExerciceService from '../../services/exercice';

export default {
  name: 'ProgramList',
  components: {
    IonContent,
    ProgramListCard
  },
  data() {
    return {
      programService: ProgramService,
      exerciceService: ExerciceService,
      programs: []
    }
  },
  created() {
    this.programService.getPrograms().then(
      (list) => {
        // Loop on list to get each program
        list.forEach((doc) => {
          const program = doc.data();
          // Append id to program object
          program.id = doc.id;
          this.programs.push(program);
        });
      }
    )
  }
}
</script>