import { createApp } from 'vue';
import { App as AppCapacitor } from '@capacitor/app';
import App from './App.vue'
import router from './router';
import store from './store';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLtUDgqRhGmuHYgvl0ssyxX8lLXTRV7P0",
  authDomain: "followdevynov.firebaseapp.com",
  projectId: "followdevynov",
  storageBucket: "followdevynov.appspot.com",
  messagingSenderId: "218776943399",
  appId: "1:218776943399:web:5d6dd4cdc8f42507890702"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Listen to authentification to store user
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch('login', user || null);

  if (user) {
    router.push({
      name: 'exercices'
    });
  } else {
    router.push({
      name: 'login'
    });
  }
});

// Configuration for deep-link
AppCapacitor.addListener('appUrlOpen', function (event) {
  const slug = event.url.split('.app').pop();

  // Redirect only if slug exists
  if (slug) {
    router.push({
      path: slug,
    });
  }
});

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
router.isReady().then(() => {
  app.mount('#app');
});