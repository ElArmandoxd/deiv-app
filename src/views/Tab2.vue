<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Catalogos</ion-title>
      </ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-align-self-center">
            <h3>Comics</h3>
            <p>En este apartado podras encontrar una variedad de comics de temas diversos</p>
            <img src="../../public/assets/img/comics.jpg" alt="#" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-align-self-center">
            <h3>Ciencia</h3>
            <p>En este apartado podras encontrar una variedad de libros de ciencia que podrian gustarte</p>
            <img src="../../public/assets/img/ciencia1.jpg" alt="#" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-align-self-center">
            <h3>Mangas</h3>
            <p>En este apartado podras encontrar una variedad de mangas de temas diversos</p>
            <img src="../../public/assets/img/mangas.jpg" alt="#" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-align-self-center">
            <h3>Tecnologia</h3>
            <p>En este apartado podras encontrar una variedad de textos de tecnologia que podria interesarte</p>
            <img src="../../public/assets/img/tecnologia.jpg" alt="#" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { add } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSearchbar,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSearchbar,
  },
  setup() {
    return {
      add,
    };
  },
});
</script>
<style scoped>
ion-col {
  padding: 5%;
  border: 1px solid rgba(104, 102, 102, 0.719);
  border-radius: 10px;
  text-align: center;
}
ion-row {
  padding: 5px;
}
</style>
