<template>
  <ion-content fullscreen="true">
    <template v-if="performance">
      <div class="performance">
        <p>Liée au programme <span class="text-bold">{{ performance.program.name }}</span></p>
    
        <performance-grid v-for="exercice in performance.program.exercices" :key="exercice.id" :performance="exercice" />
      </div>
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import PerformanceService from '../../services/performance';
import PerformanceGrid from '../../components/PerformanceGrid';

export default {
  name: 'Performance',
  components: {
    IonContent,
    PerformanceGrid,
  },
  data() {
    return {
      performanceService: PerformanceService,
      performance: null,
    }
  },
  created() {
    if (this.$route.params.programId && this.$route.params.performanceId) {
      this.performanceService.getPerformance(this.$route.params.performanceId).then(
        performance => {
          if (performance.exists()) {
            this.performance = performance.data();
            this.performance.id = this.$route.params.performanceId;
          } else {
            // Redirect to linked program if performance does not exist
            this.$router.push({
              name: 'program',
              params: {
                id: this.$route.params.programId
              }
            });
          }
        }
      );
    } else if (this.$route.params.programId) {
      this.$router.push({
        name: 'program',
        params: {
          id: this.$route.params.programId
        }
      });
    } else {
      this.$router.push({
        name: 'performances'
      });
    }
  }
}
</script>

<style>
.performance {
  margin: 0 5vh;
}
</style>
