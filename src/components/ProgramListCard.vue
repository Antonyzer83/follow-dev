<template>
  <ion-grid class="item-card" v-on:click="showOneProgram">
    <ion-row>
      <ion-col class="text-bold">{{ program.name }}</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="6">
        {{ program.exercices.length }} exercice(s)
      </ion-col>
      <ion-col size="6">
        {{ program.performances.length }} performance(s)
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

export default  {
  name: 'ProgramListCard',
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
  props: [
    'program'
  ],
  methods: {
    showOneProgram() {
      this.$router.push({
        name: 'program',
        params: {
          id: this.program.id
        }
      });
    }
  }
}
</script>
