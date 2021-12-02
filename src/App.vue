<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>FollowDev</ion-list-header>
            <ion-note>antony.castaner@ynov.com</ion-note>

            <template v-if="isLoggedIn">
              <ion-menu-toggle auto-hide="false" v-for="(p, i) in appUserPages" :key="i">
                <ion-item router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated">
                  <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item router-direction="root" lines="none" detail="false" class="hydrated" v-on:click="logout()">
                  <ion-icon slot="start" :ios="logOut" :md="logOut"></ion-icon>
                  <ion-label>Se déconnecter</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </template>

            <template v-else>
              <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPublicPages" :key="i">
                <ion-item router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated">
                  <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </template>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-page>
        <app-header />
        <ion-router-outlet id="main-content" :key="$route.path"></ion-router-outlet>
      </ion-page>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import { IonApp, IonPage, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import AppHeader from './components/AppHeader.vue';
import { logIn, logOut, fitness, addOutline } from 'ionicons/icons';
import AuthService from './services/auth';

export default {
  name: 'App',
  components: {
    AppHeader,
    IonApp, 
    IonPage,
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  data() {
    return {
      appPublicPages: [
        {
          title: 'Connexion',
          url: '/',
          iosIcon: logIn,
          mdIcon: logIn
        }
      ],
      appUserPages: [
        {
          title: 'Exercices',
          url: '/exercices',
          iosIcon: fitness,
          mdIcon: fitness,
        },
        {
          title: 'Créer un exercice',
          url: '/exercices/create',
          iosIcon: addOutline,
          mdIcon: addOutline
        }
      ],
      authService: AuthService,
      logOut
    }
  },
  methods: {
    logout() {
      this.authService.logout();
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style scoped>
#main-content {
  padding-top: 8vh;
}
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
