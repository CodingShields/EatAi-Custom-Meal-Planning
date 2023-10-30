// import { initializeApp } from "firebase/app";
// import 'firebase/auth';

// // Initialize Firebase with your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyAdlkPSo4iQ0rdzR5m1GeoDc4OkUFgFicg",
//   authDomain: "eatai-30d56.firebaseapp.com",
//   databaseURL: "https://eatai-30d56-default-rtdb.firebaseio.com",
//   projectId: "eatai-30d56",
//   storageBucket: "eatai-30d56.appspot.com",
//   messagingSenderId: "656926860998",
//   appId: "1:656926860998:web:5acbc631fe5e11da6d59c7"
// };

// const app = initializeApp(firebaseConfig)

// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }