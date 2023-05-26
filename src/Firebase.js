import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

// Manejo de errores
export const saveData = async (data) => {
  const collectionRef = doc(db, "fotos", data.id);

  try {
    await setDoc(collectionRef, data);
    console.log("Datos guardados correctamente en Firestore");
  } catch (error) {
    if (error.code === "permission-denied") {
      console.log(
        "Error 403: No se pueden guardar los datos debido a permisos insuficientes"
      );
      // Aquí puedes realizar alguna acción adicional si es necesario
    } else {
      throw error; // Vuelve a lanzar el error para que puedas manejarlo en otro lugar si es necesario
    }
  }
};

export const uploadFile = async (file) => {
  const storageRef = ref(storage, `imagenes/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  return url;
};

export default app;
