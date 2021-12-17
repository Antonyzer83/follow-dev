<template>
  <ion-content fullscreen="true">
    <template v-if="performance">
      <div class="performance">
        <p>Liée au programme <span class="text-bold">{{ performance.program.name }}</span></p>
    
        <performance-grid v-for="exercice in performance.program.exercices" :key="exercice.id" :performance="exercice" />

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button v-on:click="sharePDF" color="primary">Partager PDF</ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button v-on:click="shareSocialMedia" color="secondary">Partager Réseaux Sociaux</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </template>
    <p v-else>En cours de chargement</p>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import PerformanceService from '../../services/performance';
import PerformanceGrid from '../../components/PerformanceGrid';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing';

export default {
  name: 'Performance',
  components: {
    IonContent,
    PerformanceGrid,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
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
  },
  methods: {
    shareSocialMedia() {
      SocialSharing.share('Hello, regarde ma performance sur FollowDev : https://followdevynov.web.app' + this.$route.fullPath, 'Ça c\'est de la performance ! Merci FollowDev !');
    },
    sharePDF() {
      // Miss CSS :(
      const htmlPerformance = document.getElementsByClassName('performance')[0].innerHTML;

      PDFGenerator.fromData(htmlPerformance, {
        documentSize: 'A4',
        type: 'share',
        fileName: this.performance.program.name + '-' + this.performance.program.id + '.pdf'
      })
        .then(
          (stats) => {
            console.log('Performance successfully printed to PDF');
            console.log(stats);
          }
        )
        .catch(
          (error) => {
            console.log('Error during performance printed to PDF : ' + error);
          }
        );
    }
  }
}
</script>

<style>
.performance {
  margin: 0 5vh;
}
.performance ion-grid {
  text-align: center;
}
</style>
