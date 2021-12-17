<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>{{ getPageName }}</ion-title>

      <ion-buttons slot="end">
        <ion-button :router-link="{ name: 'faq' }">
          <ion-icon :icon="helpOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { helpOutline } from 'ionicons/icons';

export default {
  name: 'AppHeader',
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      pages: {
        login: 'Connexion',
        exercices: 'Exercices',
        exercice: 'Exercice',
        exerciceCreate: 'Nouvel exercice',
        exerciceUpdate: 'MàJ d\'un exercice',
        programs: 'Programmes',
        program: 'Programme',
        programCreate: 'Nouveau programme',
        programUpdate: 'MàJ d\'un programme',
        programPerformances: 'Performances',
        performances: 'Performances',
        performance: 'Performance',
        performanceCreate: 'Nouvelle performance',
        faq: 'Foire aux questions'
      },
      helpOutline
    }
  },
  computed: {
    getPageName() {
      if (['program', 'exercice'].includes(this.$route.name)) {
        return this.$store.getters.getHeaderTitle;
      } else {
        return this.pages[this.$route.name] || 'Not found';
      }
    }
  }
}
</script>
