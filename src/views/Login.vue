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
      <ion-row v-if="error">
        <ion-col>
          <p class="error">{{ error }}</p>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="primary" v-on:click="loginWithEmailPassword()">Se connecter</ion-button>  
        </ion-col>
      </ion-row>
      <template v-if="! isMobile">
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
      </template>
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
      error: null,
      logoGoogle
    }
  },
  methods: {
    loginWithEmailPassword() {
      if (this.email !== '' && this.password !== '') {
        this.authService.loginWithEmailPassword(this.email, this.password)
          .catch((error) => {
            console.log('error', error);
            if (error.includes('auth/wrong-password')) {
              this.error = 'Mot de passe incorrect';
            } else {
              this.error = 'Une erreur inconnue est survenue lors de la tentative de connexion.';
            }
          });
      } else {
        this.error = 'Entrez votre email et votre mot de passe.';
      }
    },
    loginWithGoogle() {
      this.authService.loginWithGoogle();
    }
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>