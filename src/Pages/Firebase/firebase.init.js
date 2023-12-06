import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";




const initial =()=>{
    initializeApp(firebaseConfig);
}

export default initial