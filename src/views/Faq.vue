<template>
  <ion-content :fullscreen="true">
    <ion-grid>
      <ion-row>
        <ion-col>
          <strong>Quelles sont les significations des icônes ?</strong>

          <ion-list>
            <ion-item>
              <ion-icon :icon="timeOutline" slot="start"></ion-icon>
              <ion-label slot="end">Temps de repos</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="repeatOutline" slot="start"></ion-icon>
              <ion-label slot="end">Nombre de répétitions</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="barbellOutline" slot="start"></ion-icon>
              <ion-label slot="end">Poids</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="gitCompareOutline" slot="start"></ion-icon>
              <ion-label slot="end">Nombre de séries</ion-label>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <strong>Comment créer une performance ?</strong>
          <p>Une performance peut être enregistrée depuis un programme. Pour cela, rendez-vous sur la fiche d'un programme. Il existe un bouton en bas de cette fiche afin de créer une nouvelle performance.</p>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <strong>D'autres questions ? Contactez-nous à l'adresse suivante : help@followdev.fr</strong>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import {
  timeOutline,
  repeatOutline,
  barbellOutline,
  gitCompareOutline,
} from "ionicons/icons";

export default {
  name: 'Faq',
  components: {
    IonContent,
    IonGrid, 
    IonRow, 
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonIcon
  },
  data() {
    return {
      timeOutline,
      repeatOutline,
      barbellOutline,
      gitCompareOutline,
    }
  }
}
</script>
