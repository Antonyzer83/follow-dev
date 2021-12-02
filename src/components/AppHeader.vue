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
        exerciceUpdate: 'MàJ d\'un exercice',
      }
    }
  },
  computed: {
    getPageName() {
      return this.pages[this.$route.name] || 'Not found';
    }
  }
}
</script>
