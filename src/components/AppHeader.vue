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

<script lang="ts">
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
  computed: {
    getPageName(): string {
      const route = useRoute();
      switch (route.name) {
        case 'login':
          return 'Connexion';
        default:
          return 'Not found';
      }
    }
  }
}
</script>
