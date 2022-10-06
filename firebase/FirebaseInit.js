import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
    apiKey: "AIzaSyDZahGtL7OdcWREp4M6-xgr-ebo44f8jkI",
    authDomain: "venture-games.firebaseapp.com",
    projectId: "venture-games",
    storageBucket: "venture-games.appspot.com",
    messagingSenderId: "109113063653",
    appId: "1:109113063653:web:96a3a9294e5e924af9bc0c",
    measurementId: "G-6X6VMJS470"
  };

  const initMyFirebase = () => {
    if(!getApps().length) {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        if(typeof window !== "undefined") {
            if("measurementId" in firebaseConfig) {
                const analytics = getAnalytics(app);
                const performance = getPerformance(app);
            }
        }
    }
    else {
        console.log("Already Initialized Firebase");
    }
  }

  export default initMyFirebase;