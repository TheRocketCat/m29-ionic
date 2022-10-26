<template>
	<ion-page>
	
		<ion-header>
			<ion-toolbar>
				<ion-title>Gallery</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 2</ion-title>
				</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-grid>
				<ion-row>
					<ion-col size="4" :key="photo" v-for="photo in photos">
						<ion-img :src="photo.webviewPath"></ion-img>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-fab vertical="bottom" horizontal="center" slot="fixed">
				<ion-fab-button @click="takePhoto()">
					<ion-icon :icon="camera"/>
				</ion-fab-button>
			</ion-fab>
		</ion-content>

		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonImg
} from '@ionic/vue';

import {camera,trash,close } from "ionicons/icons"

import {usePhotoGallery} from "@/composables/usePhotoGallery"

const {takePhoto,photos} = usePhotoGallery()

export default defineComponent({
	name: 'Tab2Page',
		components: { 
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		//IonGrid,
		//IonRow,
		//IonCol,
		//IonImg
	},
	setup(){
		return{
			takePhoto, photos,
			camera,trash,close
		}}
});
</script>
