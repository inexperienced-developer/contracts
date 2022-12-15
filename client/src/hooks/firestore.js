import { db } from "../_firebase/init";
import { collection, addDoc } from "firebase/firestore"; 

export async function SaveProfileToDB(profile){
    try {
        const docRef = await addDoc(collection(db, "users"), profile);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
