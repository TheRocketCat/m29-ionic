import {ref, onMounted, watch} from "vue"
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera"
import {Filesystem, Directory} from "@capacitor/filesystem"
import {Preferences} from "@capacitor/preferences"


export function usePhotoGallery(){
	const photos = ref<UserPhoto[]>([])
	const takePhoto = async ()=>{
		const photo = await Camera.getPhoto({
			resultType:CameraResultType.Uri,
			source:CameraSource.Camera,
			quality:100
		})

		const fileName = new Date().getTime()+".jpeg"
		const savedFileImage=await savePicture(photo,fileName)

		photos.value=[savedFileImage, ...photos.value]
	}

	const convertBlobToBase64 = (blob:Blob)=>{
		return new Promise((resolve,reject)=>{
			const reader = new FileReader()
			reader.onerror=reject
			reader.onload = ()=>{
				resolve(reader.result)
			}
		
			reader.readAsDataURL(blob)
		})
	}

	const savePicture = async (photo:Photo,fileName:string):Promise<UserPhoto> => {

		const response = await fetch(photo.webPath!)
		const blob = await response.blob()
		const base64Data = (await convertBlobToBase64(blob)) as string

		const savedFile = await Filesystem.writeFile({
			path: fileName,
			data: base64Data,
			directory:Directory.Data
		})

		return {filePath:fileName, webviewPath:photo.webPath}
	}

	return {takePhoto, photos}
}


export interface UserPhoto{
	filePath:string
	webviewPath?:string
}
