import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config/firebase-config";

export const signInWithGoogle = async (setAuthorizedUser, goHome) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result?._tokenResponse?.idToken;
    console.log(token);
    console.log(result);
    // The signed-in user info.
    const user = result.user;
    sessionStorage.setItem("accessToken", token);
    setAuthorizedUser(true);

    // If user is successfully logged in, redirect to home
    if (user) {
      goHome?.();
    }

    return user;
  } catch (error) {
    // Handle Errors here.
    console.error(error);
  }
};

export const logoutUser = () => {
  sessionStorage.removeItem("accessToken");
};

// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from './config/firebase-config';

// export const signInWithGoogle = async (setAuthorizedUser, history) => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     sessionStorage.setItem('accessToken', token);
//     // Set the authorized user state to true and redirect the user to home page.
//     setAuthorizedUser(true);
//     history.push('/home');
//     return user;
//   } catch (error) {
//     // Handle Errors here.
//     console.error(error);
//   }
// };

// export const logoutUser = () => {
//   sessionStorage.removeItem('accessToken');
// };

// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from './config/firebase-config';

// export const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     sessionStorage.setItem('accessToken', token);
//     return user;
//   } catch (error) {
//     // Handle Errors here.
//     console.error(error);
//   }
// };

// export const logoutUser = () => {
//   sessionStorage.removeItem('accessToken');
// };

// import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

// export const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// export const auth = getAuth();

// export function signInWithGoogle(setAuthorizedUser) {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       if (user) {
//         user.getIdToken().then((tkn) => {
//           sessionStorage.setItem("accessToken", tkn);
//           setAuthorizedUser(true);
//         });
//       }
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       // console.log(error);
//     });
// }

// export function logoutUser(setAuthorizedUser) {
//   signOut(auth)
//     .then(() => {
//       sessionStorage.clear();
//       setAuthorizedUser(false);
//       alert("Logged Out Successfully");
//     })
//     .catch((error) => {
//       alert(error);
//     });
// }
