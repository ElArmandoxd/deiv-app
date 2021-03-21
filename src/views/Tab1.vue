<template>
 <ion-page>
  <ion-header>
      <ion-toolbar>
          <ion-title>Home</ion-title>
      </ion-toolbar>
      <HolaComp />
      </ion-header>
 <ion-grid>
      <ion-row>
        <ion-col>
    <ion-content>
      <ion-card>
        <img src="https://media.discordapp.net/attachments/749118010576601138/823314768126410782/340.png?width=301&height=473"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Nombre del libro</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lo que podra encontrar y su precio
        </ion-card-content>
        <ion-button expand="block" v-on:click="createModal" @modal="dismissModal">Ver libro</ion-button>
      </ion-card>
    </ion-content>
    </ion-col>
    <ion-col>
    <ion-content>
      <ion-card>
        <img src="https://media.discordapp.net/attachments/749118010576601138/823314849428799508/ee49eed247bca0c2d7fce016d69d45ff.png?width=300&height=473"/>
        <ion-card-header>
          <ion-card-subtitle>categoria</ion-card-subtitle>
          <ion-card-title>Nombre del libro</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lo que podra encontrar y su precio
        </ion-card-content>
        <ion-button expand="block" v-on:click="createModal" @modal="dismissModal">Ver libro</ion-button>
      </ion-card>
    </ion-content>
    </ion-col>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>
<script>//@ts-nocheck
import {  IonPage, IonGrid, IonRow, IonCol, IonHeader, IonContent, IonCard, IonToolbar, IonButton, IonCardContent, IonCardSubtitle ,IonCardTitle, IonTitle, modalController } from "@ionic/vue"
import Modal from '../components/Modal.vue';
import HolaComp from "@/components/HolaComp.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tab1',
  component: {
    IonPage,
    IonGrid, 
    IonRow,
    IonCol,
    IonButton,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonToolbar,
    IonCardContent,
    IonTitle,
    HolaComp,
    Modal
  },
  setup(){
    return{
      imgRoute1: null,
      imgRoute2:null,
      currentModal: null,
    }
  },
  beforeCreate(){
    console.log('alv')
  },
  created(){
    
  },
  methods:{
    async createModal(){
      const modal = await modalController.create({
        component: Modal,
        cssClass: 'my-custom-class',
        componentProps: {
          modal_value: null 
        },
      })
      modal.componentProps.modal_value = modal;
      return modal.present();
    },
    dismissModal(){
      let currentModal = this.modal;
      currentModal.dismiss().then(() => { currentModal = null; });
    }
  }
});
</script>
<style>
img{
  height: 200px;
}
</style>
