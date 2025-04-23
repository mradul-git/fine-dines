/*import {slots} from "../store/restaurant"
import {db} from "./firebaseConfig";
import { collection,doc,setDoc } from "firebase/firestore";


const restaurantData = slots;

const UploadData = async () => {
    try{
        for (let i = 0; i < restaurantData.length; i++) {
            const restaurant = restaurantData[i];
            const docRef = doc(collection(db,"slots"),`slots_${i+1}`);  // db me jake restaurants naam ke doc bnaega naam hoga restuarant _i+1
            await setDoc(docRef,restaurant);
        }
          console.log("Data uploading");
    } catch (error) {
        console.log("Error uploading data",error);  


    } 


};

export default UploadData;
*/