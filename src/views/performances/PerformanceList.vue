<template>
  <ion-content :fullscreen="true">
    <template v-if="performances.length">
      <performance-list-card v-for="performance in performances" :key="performance.id" :performance="performance" />
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import PerformanceListCard from '../../components/PerformanceListCard';
import PerformanceService from '../../services/performance';

export default {
  name: 'PerformanceList',
  components: {
    IonContent,
    PerformanceListCard,
  },
  data() {
    return {
      performanceService: PerformanceService,
      performances: [],
    }
  },
  created() {
    let count = 1;
    this.performanceService.getPerformances().then(
      list => {
        // Loop on list to get each performance
        list.forEach((doc) => {
          const performance = doc.data();
          // Append id to performance object
          performance.id = doc.id;
          performance.number = count;
          count++;
          this.performances.push(performance);
        });
      }
    )
  }
}
</script>
