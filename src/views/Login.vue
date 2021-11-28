<template>
  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-input type="email" placeholder="Email" v-model="email"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input type="password" placeholder="Mot de passe" v-model="password"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="primary" v-on:click="loginWithEmailPassword()">Se connecter</ion-button>  
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <p>OU</p>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="danger" v-on:click="loginWithGoogle()">Se connecter avec Google <ion-icon slot="end" :icon="logoGoogle"></ion-icon></ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonButton, IonCol, IonContent, IonIcon, IonGrid, IonRow, IonInput } from '@ionic/vue';
import { logoGoogle } from 'ionicons/icons';
import AuthService from '../services/auth';

export default {
  name: 'Login',
  components: {
    IonButton,
    IonCol,
    IonContent,
    IonIcon,
    IonGrid,
    IonRow,
    IonInput,
  },
  data() {
    return {
      email: '',
      password: '',
      authService: AuthService,
      logoGoogle
    }
  },
  methods: {
    loginWithEmailPassword() {
      if (this.email !== '' && this.password !== '') {
        this.authService.loginWithEmailPassword(this.email, this.password);
      }
    },
    loginWithGoogle() {
      this.authService.loginWithGoogle();
    }
  }
}
</script>