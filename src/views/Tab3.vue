<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>¿Como comprar?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <div class="text">
        <h1>¿Quieres comprar un producto?</h1>
        <br />
        <p>¡El proceso de compra es muy simple!</p>
        <br />
        </div>
        <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          minima culpa temporibus enim quo corporis est assumenda! Eligendi
          nobis, autem facilis deserunt ducimus numquam voluptatem aliquid
          sapiente repellendus rerum ratione!
        </p>
        </div>
        <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          minima culpa temporibus enim quo corporis est assumenda! Eligendi
          nobis, autem facilis deserunt ducimus numquam voluptatem aliquid
          sapiente repellendus rerum ratione!
        </p>
        </div>
      </div>
      <ion-Button expand="block" shape="round" color="dark"
        >Mas informacion</ion-Button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue"

export default defineComponent({
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>
<style scoped>
.text {
  text-align: center;
}
p {
  margin: 0 auto;
}
div {
  margin: 4%;
  text-align: justify;
}
</style>
