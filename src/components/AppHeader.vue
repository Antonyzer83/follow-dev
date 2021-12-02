<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>{{ getPageName }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AppHeader',
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      pages: {
        login: 'Connexion',
        exercices: 'Exercices',
        exercice: 'Exercice',
        exerciceCreate: 'Nouvel exercice',
      }
    }
  },
  computed: {
    getPageName() {
      const route = useRoute();
      return this.pages[route.name] || 'Not found';
    }
  }
}
</script>
