import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBuuDx4LD5cWh8WdV1Vgqox9ANdMBZUll4',
	authDomain: 'fe-plugin-56f14.firebaseapp.com',
	projectId: 'fe-plugin-56f14',
	storageBucket: 'fe-plugin-56f14.appspot.com',
	messagingSenderId: '79848412016',
	appId: '1:79848412016:web:48054d13ca72dfdfa575b5',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
