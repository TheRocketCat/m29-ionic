<script setup lang="ts">
	import { 
		IonPage,
		IonTitle,
		IonContent,
		IonHeader,
		IonToolbar
	} from '@ionic/vue';

	import {reactive} from "@vue/reactivity"

	let rows=reactive([
		{
			abbreviation:"m29",
		}
	])

	function newPartner(){
		rows.push({abbreviation:"sl"})
	}
</script>
<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Sammarbetspartners</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<table>
				<thead>
					<th>Förkortning</th>
					<th></th>
				</thead>
				<tbody>
					<tr v-for="row in rows" v-bind:key="row.abbreviation">
						<td>{{row.abbreviation}}</td>
					</tr>
				</tbody>
			</table>

			<button @click="newPartner">add new</button>
		</ion-content>

	</ion-page>
</template>
