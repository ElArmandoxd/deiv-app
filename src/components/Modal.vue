<template>
    <IonHeader translucent>
        <ion-toolbar>
            <ion-title>Primer capitulo</ion-title>
            <ion-buttons slot="end">
                <ion-button v-on:click="dismissModal">Regresar</ion-button>
            </ion-buttons>
        </ion-toolbar>
    </IonHeader>
    <IonContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam 
    sapiente amet sit sint reiciendis ab laboriosam, deleniti, odit eum doloribus dolorum 
    fugiat rem cumque voluptate provident ducimus assumenda minus?
    </IonContent>
</template>
<script>
import { IonToolbar, IonHeader, IonButton, IonButtons, IonContent, IonTitle } from '@ionic/vue';

export default {
    name: "Modal",
    component: { IonToolbar, IonHeader, IonButton, IonButtons, IonContent, IonTitle },
    props: {
        modal_value: { type: String, default: 'Super Modal' },
    },
    data(){
        return{
            mod_code: null 
        }
    },
    created(){
        let mod = localStorage.getItem('modal');
        this.mod_code = mod;
    },
    methods:{
        dismissModal(){
            let currentModal = this.modal_value
            currentModal.dismiss().then(() => { currentModal = null; });
        }
    }
}
</script>

