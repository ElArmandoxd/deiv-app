<template>
<ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
      <router-link to="/tab1">
        <ion-icon :icon="home" />
        <ion-label>Home</ion-label>
      </router-link>

      <router-link to="/tab2">
        <ion-icon :icon="grid" />
        <ion-label>Catalogos</ion-label>
      </router-link>
          
    <router-link to="/tab3">
        <ion-icon :icon="helpCircle" />
        <ion-label>Informacion</ion-label>
      </router-link>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script>
import {
  IonTabBar,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { grid, helpCircle, home } from "ionicons/icons";

export default {
  name: "Pestanas",
  components: { IonLabel, IonTabs, IonTabBar, IonIcon, IonPage },
  setup() {
    return {
      grid,
      helpCircle,
      home,
    };
  },
};
</script>